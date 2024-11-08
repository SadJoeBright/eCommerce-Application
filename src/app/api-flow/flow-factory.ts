import { ByProjectKeyRequestBuilder } from '@commercetools/platform-sdk/dist/declarations/src/generated/client/by-project-key-request-builder';
import {
  AnonymousAuthMiddlewareOptions,
  AuthMiddlewareOptions,
  ClientBuilder,
  HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import {
  PasswordAuthMiddlewareOptions,
  TokenStore,
} from '@commercetools/sdk-client-v2/dist/declarations/src/types/sdk';
import ApiConfig from './api-config';
import ApiTokenCache from '../token-cache';

export class FlowFactory {
  public clientCredentialsFlow: ByProjectKeyRequestBuilder;
  public existingTokenFlow: ByProjectKeyRequestBuilder;
  public passwordFlow: ByProjectKeyRequestBuilder;
  public refreshTokenFlow: ByProjectKeyRequestBuilder;
  public anonymousSessionFlow: ByProjectKeyRequestBuilder;
  public apiTokenCache: ApiTokenCache;

  private httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: `https://api.${ApiConfig.CTP_REGION}.commercetools.com`,
    fetch,
  };

  constructor() {
    this.apiTokenCache = new ApiTokenCache();
    this.createClientCredentialsFlow();
  }

  public getWorkingFlow(): ByProjectKeyRequestBuilder {
    const tokenStore: TokenStore = JSON.parse(localStorage.getItem('token_store'));

    if (tokenStore?.refreshToken) {
      if (!this.refreshTokenFlow) {
        this.createRefreshTokenFlow(tokenStore.refreshToken);
      }
      return this.refreshTokenFlow;
    }
    return this.clientCredentialsFlow;
  }

  public createRefreshTokenFlow = (refreshToken: string): void => {
    const options = {
      host: `https://auth.${ApiConfig.CTP_REGION}.commercetools.com`,
      projectKey: ApiConfig.CTP_PROJECT_KEY,
      credentials: {
        clientId: ApiConfig.CTP_CLIENT_ID,
        clientSecret: ApiConfig.CTP_CLIENT_SECRET,
      },
      refreshToken,
      tokenCache: this.apiTokenCache,
      scopes: [ApiConfig.CTP_SCOPES],
      fetch,
    };

    const ctpClient = new ClientBuilder()
      .withProjectKey(ApiConfig.CTP_PROJECT_KEY)
      .withRefreshTokenFlow(options)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .build();

    this.refreshTokenFlow = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
      projectKey: ApiConfig.CTP_PROJECT_KEY,
    });
  };

  public createPasswordFlow = (username: string, password: string): void => {
    const projectKey = ApiConfig.CTP_PROJECT_KEY;
    const scopes = [ApiConfig.CTP_SCOPES];

    const passwordAuthMiddlewareOptions: PasswordAuthMiddlewareOptions = {
      host: `https://auth.${ApiConfig.CTP_REGION}.commercetools.com`,
      projectKey,
      credentials: {
        clientId: ApiConfig.CTP_CLIENT_ID,
        clientSecret: ApiConfig.CTP_CLIENT_SECRET,
        user: {
          username,
          password,
        },
      },
      tokenCache: this.apiTokenCache,
      scopes,
      fetch,
    };

    const ctpClient = new ClientBuilder()
      .withProjectKey(projectKey)
      .withPasswordFlow(passwordAuthMiddlewareOptions)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .build();

    this.passwordFlow = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
      projectKey: ApiConfig.CTP_PROJECT_KEY,
    });
  };

  public createClientCredentialsFlow = (): void => {
    const authMiddlewareOptions: AuthMiddlewareOptions = {
      host: `https://auth.${ApiConfig.CTP_REGION}.commercetools.com`,
      projectKey: ApiConfig.CTP_PROJECT_KEY,
      credentials: {
        clientId: ApiConfig.CTP_CLIENT_ID,
        clientSecret: ApiConfig.CTP_CLIENT_SECRET,
      },
      scopes: [ApiConfig.CTP_SCOPES],
      fetch,
    };

    const ctpClient = new ClientBuilder()
      .withProjectKey(ApiConfig.CTP_PROJECT_KEY)
      .withClientCredentialsFlow(authMiddlewareOptions)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .build();

    this.clientCredentialsFlow = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
      projectKey: ApiConfig.CTP_PROJECT_KEY,
    });
  };

  public createExistingTokenFlow = (token: string): void => {
    const ctpClient = new ClientBuilder()
      .withProjectKey(ApiConfig.CTP_PROJECT_KEY)
      .withExistingTokenFlow(token, { force: true })
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .build();

    this.existingTokenFlow = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
      projectKey: ApiConfig.CTP_PROJECT_KEY,
    });
  };

  public createAnonymousSessionFlow = (): void => {
    const options: AnonymousAuthMiddlewareOptions = {
      host: `https://auth.${ApiConfig.CTP_REGION}.commercetools.com`,
      projectKey: ApiConfig.CTP_PROJECT_KEY,
      credentials: {
        clientId: ApiConfig.CTP_CLIENT_ID,
        clientSecret: ApiConfig.CTP_CLIENT_SECRET,
        // anonymousId: ApiConfig.CTP_ANONYMOUS_ID, // a unique id
      },
      scopes: [ApiConfig.CTP_SCOPES],
      fetch,
    };

    const ctpClient = new ClientBuilder()
      .withProjectKey(ApiConfig.CTP_PROJECT_KEY)
      .withAnonymousSessionFlow(options)
      .withHttpMiddleware(this.httpMiddlewareOptions)
      .build();

    this.anonymousSessionFlow = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
      projectKey: ApiConfig.CTP_PROJECT_KEY,
    });
  };
}

const flowFactory = new FlowFactory();

export default flowFactory;

import { Cart, ClientResponse, Customer } from '@commercetools/platform-sdk';
import OverviewPage from '../pages/overview-page';
import Header from '../features/header/header';
import { IRouterLink } from '../shared/lib/router/router';
import { ID_SELECTOR, Page } from '../shared/lib/router/pages';
import NotFoundPage from '../pages/not-found-page';
import LoginPage from '../pages/login-page';
import ProductPage from '../pages/product-page';
import UserPage from '../pages/user-page';
import Main from '../features/main/main';
import RegisterPage from '../pages/register-page';
import Footer from '../features/footer/footer';
import ProductsListPage from '../pages/products-list-page/products-list-page';
import store from './store';
import UserApi from '../entities/user/userApi';
import ElementBuilder from '../shared/lib/element-builder';
import eventBus, { EventBusActions } from '../shared/lib/event-bus';
import AboutUsPage from '../pages/about-us';
import CartPage from '../pages/cart-page';
import CartApi from '../entities/cart/cart-api';

export default class App {
  private readonly SCROLL_END_OFFSET: number = 150;

  private header: Header;
  private main: Main;
  private footer: Footer;
  private lazyLoaderPointRiched: boolean;

  constructor() {
    this.header = new Header();
    this.main = new Main();
    this.footer = new Footer();
    if (localStorage.getItem('token_store')) {
      UserApi.getUser()
        .then((data: Customer) => store.setUser(data))
        .then(() => {
          if (localStorage.getItem('cartID')) {
            CartApi.getCustomerCart().then((response: ClientResponse<Cart>) => {
              store.setCart(response.body);
            });
          } else {
            store.setUser(null);
          }
        });
    } else {
      localStorage.getItem('cartID')
        ? CartApi.getAnonymousCart().then((data: ClientResponse<Cart>) => store.setCart(data.body))
        : store.setCart(null);
      store.setUser(null);
    }

    const wrapper = new ElementBuilder({
      tag: 'div',
      styleClass: 'dom-wrapper',
    });
    const wrapperEl: HTMLElement = wrapper.getElement();

    wrapper.append([this.header.getElement(), this.main.getElement(), this.footer.getElement()]);
    document.body.append(wrapper.getElement());

    wrapperEl.onscroll = () => {
      const scrollPosition: number = wrapperEl.scrollHeight - Math.ceil(wrapperEl.scrollTop + wrapperEl.clientHeight);
      if (!this.lazyLoaderPointRiched && scrollPosition < this.SCROLL_END_OFFSET) {
        eventBus.publish(EventBusActions.SCROLL_END);
        this.lazyLoaderPointRiched = true;
      }
      if (scrollPosition >= this.SCROLL_END_OFFSET) {
        this.lazyLoaderPointRiched = false;
      }
    };
  }

  public createRoutes(): IRouterLink[] {
    return [
      {
        path: Page.OVERVIEW,
        callback: () => {
          this.main.setContent([new OverviewPage().getElement()]);
        },
      },
      {
        path: Page.PRODUCTS,
        callback: () => {
          this.main.setContent([new ProductsListPage().getElement()]);
        },
      },
      {
        path: `${Page.PRODUCTS}/${ID_SELECTOR}`,
        callback: (id: string) => {
          this.main.setContent([new ProductPage(id).getElement()]);
        },
      },
      {
        path: Page.LOGIN,
        callback: () => {
          this.main.setContent([new LoginPage().getElement()]);
        },
      },
      {
        path: Page.REGISTRATION,
        callback: () => {
          this.main.setContent([new RegisterPage().getElement()]);
        },
      },
      {
        path: Page.NOT_FOUND,
        callback: () => {
          this.main.setContent([new NotFoundPage().getElement()]);
        },
      },
      {
        path: Page.USER_PROFILE,
        callback: () => {
          this.main.setContent([new UserPage().getElement()]);
        },
      },
      {
        path: Page.ABOUT_US,
        callback: () => {
          this.main.setContent([new AboutUsPage().getElement()]);
        },
      },
      {
        path: Page.CART,
        callback: () => {
          this.main.setContent([new CartPage().getElement()]);
        },
      },
    ];
  }
}

import { ProductProjectionPagedQueryResponse } from '@commercetools/platform-sdk/dist/declarations/src/generated/models/product';
import { Cart, Customer } from '@commercetools/platform-sdk';
import eventBus, { EventBusActions } from '../shared/lib/event-bus';
import { Mutable } from '../shared/const/mutable';

class Store {
  public user: Customer;
  public products: Mutable<ProductProjectionPagedQueryResponse>;
  public cart: Cart;

  public setUser = (newData: Customer): void => {
    this.user = newData;
    eventBus.publish(EventBusActions.UPDATE_USER, this.user);
  };

  public setCart = (newDada: Cart): void => {
    this.cart = newDada;
    eventBus.publish(EventBusActions.UPDATE_CART, this.cart);
  };

  public setProducts(newData: ProductProjectionPagedQueryResponse, add?: boolean): void {
    if (!this.products || !add) {
      this.products = newData;
    } else {
      this.products.results = [...this.products.results, ...newData.results];
    }
  }
}

const store = new Store();

export default store;

import { TokenCacheOptions, TokenStore } from '@commercetools/sdk-client-v2/dist/declarations/src/types/sdk';

export default class ApiTokenCache {
  public tokenStore: TokenStore;

  public get = (tokenCacheOptions?: TokenCacheOptions) => this.tokenStore;

  public set = (cache: TokenStore, tokenCacheOptions?: TokenCacheOptions) => {
    const existingTokenStore: string = localStorage.getItem('token_store');
    if (existingTokenStore) {
      const existingParseTokenStore = JSON.parse(existingTokenStore);
      const refreshToken: string = cache.refreshToken || existingParseTokenStore.refreshToken;

      localStorage.setItem(
        'token_store',
        JSON.stringify({
          ...cache,
          refreshToken,
        }),
      );
    } else {
      localStorage.setItem('token_store', JSON.stringify(cache));
    }
  };
}

import { TokenCacheOptions, TokenStore } from '@commercetools/sdk-client-v2/dist/declarations/src/types/sdk';

export default class ApiTokenCache {
  public tokenStore: TokenStore;

  public get = (tokenCacheOptions?: TokenCacheOptions) => this.tokenStore;

  public set = (cache: TokenStore, tokenCacheOptions?: TokenCacheOptions) => {
    const existingTokenStore: string = localStorage.getItem('token_store');
    if (existingTokenStore) {
      const existingParseTokenStore = JSON.parse(existingTokenStore);
      const refreshToken: string = cache.refreshToken || existingParseTokenStore.refreshToken;

      localStorage.setItem(
        'token_store',
        JSON.stringify({
          ...cache,
          refreshToken,
        }),
      );
    } else {
      localStorage.setItem('token_store', JSON.stringify(cache));
    }
  };
}
