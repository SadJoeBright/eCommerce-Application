import { LineItem, Price } from '@commercetools/platform-sdk';
import CommonBuilderWrapper from '../../shared/lib/common-builder-wrapper';
import ElementBuilder from '../../shared/lib/element-builder';
import getPrice from '../../shared/lib/getPrice';
import './cart.scss';
import CartApi from '../../entities/cart/cart-api';
import Button from '../../shared/ui/button/button';
import { ButtonType, ButtonSize, ButtonIconPosition } from '../../shared/ui/button/models';

export default class CartListCard extends CommonBuilderWrapper {
  price: Price;

  constructor(private data: LineItem) {
    super();
    this.price = data.variant.prices[0];

    this.builder = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list-card',
    });

    const img = new ElementBuilder({
      tag: 'img',
      styleClass: 'cart-list-card__img',
      tagSettings: {
        src: data.variant.images?.[0]?.url,
        alt: 'Product image',
      },
    });
    const details = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list-card__details',
    });

    const priceContainer = new ElementBuilder({
      tag: 'div',
      styleClass: 'product-view__price-container',
    });

    const price = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list-card__price',
      content: `${getPrice(this.price)}`,
    });
    priceContainer.append([price.getElement()]);

    if (this.price.discounted) {
      const descountedPrice = new ElementBuilder({
        tag: 'div',
        styleClass: 'product-view__price',
        content: `${getPrice(this.price, true)}`,
      });

      priceContainer.prepend([descountedPrice.getElement()]);
      descountedPrice.setStyleClass('product-list-card__price cart-list-card__price product-view__price_discounted');
      price.setStyleClass('product-list-card__price cart-list-card__price  product-view__price_cross-out');
    }

    const heading = new ElementBuilder({
      tag: 'h3',
      styleClass: 'cart-list-card__heading',
      content: data.name?.['en-US'],
    });
    const buttonContainer = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list-card__button-container',
    });

    const quantityControls = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list-card__quantity-controls',
    });

    const itemQuantity = new ElementBuilder({
      tag: 'span',
      content: `${data.quantity}`,
    });

    const plusButton = new Button({
      callback: async () => {
        await CartApi.changeQuantity(data.productId, 'increase');
      },
      type: ButtonType.CIRCLE_WITHOUT_BORDER,
      size: ButtonSize.SMALL,
      text: '+',
    });
    plusButton.getElement().classList.add('cart-list__button');

    const minusButton = new Button({
      callback: async () => {
        await CartApi.changeQuantity(data.productId, 'decrease');
      },
      type: ButtonType.CIRCLE_WITHOUT_BORDER,
      size: ButtonSize.SMALL,
      text: '—',
    });
    minusButton.getElement().classList.add('cart-list__button');

    const removeButton = new Button({
      callback: async () => {
        await CartApi.removeItemFromCart(data.productId);
      },
      type: ButtonType.DEFAULT,
      text: 'Remove',
      icon: {
        name: 'remove',
        position: ButtonIconPosition.LEFT,
      },
    });
    removeButton.getElement().classList.add('cart-list__button', '_remove');
    buttonContainer.append([quantityControls.getElement(), removeButton.getElement()]);

    const costContainer = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list__cost-container _card',
      content: `Cost`,
    });

    const cost = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list__price',
      content: `$${(data.totalPrice.centAmount / 100).toFixed(2)}`,
    });
    costContainer.append([cost.getElement()]);
    quantityControls.append([minusButton.getElement(), itemQuantity.getElement(), plusButton.getElement()]);

    details.append([heading.getElement(), priceContainer.getElement(), buttonContainer.getElement()]);
    this.builder.append([img.getElement(), details.getElement(), costContainer.getElement()]);
  }
}


import { Cart, LineItem } from '@commercetools/platform-sdk';
import CommonBuilderWrapper from '../../shared/lib/common-builder-wrapper';
import ElementBuilder from '../../shared/lib/element-builder';
import Loader from '../../shared/ui/loader/loader';
import EmptyView from '../../shared/ui/empty-view/empty-view';
import CartListCard from './cart-list-card';
import './cart.scss';
import store from '../../app/store';
import Input from '../../shared/ui/input/input';
import Button from '../../shared/ui/button/button';
import CartApi from '../../entities/cart/cart-api';
import { ButtonType } from '../../shared/ui/button/models';

export default class CartList extends CommonBuilderWrapper {
  private loader: Loader;
  private emptyView: EmptyView;

  constructor() {
    super();
    this.loader = new Loader();
    this.emptyView = new EmptyView('No Products');

    this.builder = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-page',
    });
  }

  public setCart(cart: Cart): void {
    this.builder.setContent();
    if (!cart.lineItems.length) {
      this.empty();
      return;
    }
    const cartCards: HTMLElement[] = cart.lineItems.map((item: LineItem) => new CartListCard(item).getElement());
    const cartList = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list',
    });

    cartList.append(cartCards);
    const clearButton = new Button({
      callback: async () => {
        await CartApi.clearCart();
        this.empty();
      },
      type: ButtonType.DEFAULT,
      text: 'Clear Cart',
    });
    clearButton.getElement().classList.add('cart-list__button', '_clear');
    this.builder.append([cartList.getElement(), this.setPriceList(), clearButton.getElement()]);
  }

  public setPriceList(): HTMLElement {
    const costContainer = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list__cost-container _cost',
      content: `Total:`,
    });

    const priceContainer = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list__cost-container _cost _price',
    });
    const totalPriceValue = store.cart.totalPrice.centAmount / 100;
    const totalPrice = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list__price',
      content: `$${totalPriceValue.toFixed(2)}`,
    });
    priceContainer.append([totalPrice.getElement()]);
    if (store.cart.discountCodes.length) {
      const percentDiscount = 1.17654;
      const preDiscountedPrice = new ElementBuilder({
        tag: 'div',
        styleClass: 'cart-list__price _cross-out',
        content: `$${(totalPriceValue * percentDiscount).toFixed(2)}`,
      });

      priceContainer.prepend([preDiscountedPrice.getElement()]);
    }
    costContainer.append([priceContainer.getElement()]);
    const priceList = new ElementBuilder({
      tag: 'div',
      styleClass: 'cart-list__cost-container _list',
    });
    priceList.append([...this.setPromo(), costContainer.getElement()]);
    return priceList.getElement();
  }

  public setPromo(): (HTMLInputElement | HTMLElement)[] {
    const promocode = new Input({
      styleClass: 'cart-list__promocode',
      placeholder: 'Promo code',
      event: {
        type: 'keypress',
        callback: (event) => {
          if (event instanceof KeyboardEvent && event.code === 'Enter') {
            this.addPromocode(promocode);
          }
        },
      },
    });
    const applyButton = new Button({
      callback: async () => this.addPromocode(promocode),
      type: ButtonType.DEFAULT,
      text: 'Apply',
    });
    applyButton.getElement().classList.add('cart-list__button', '_apply');
    return [promocode.getElement(), applyButton.getElement()];
  }

  private addPromocode(promocode: Input) {
    CartApi.addDiscountCode(promocode.getElement().value)
      .then((data) => {
        if (!data.discountCodes.length) {
          store.setCart(data);
        } else {
          promocode.setErrorMessage('Promo code has been applied');
        }
      })
      .catch(() => promocode.setErrorMessage('Invalid promo code'));
  }

  public empty(): void {
    this.builder.setContent();
    this.builder.append([this.emptyView.getElement()]);
  }
}
