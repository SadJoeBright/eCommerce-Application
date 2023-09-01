import { Product } from '@commercetools/platform-sdk';
import CommonBuilderWrapper from '../../shared/lib/common-builder-wrapper';
import ElementBuilder from '../../shared/lib/element-builder';
import Button from '../../shared/ui/button/button';
import { ButtonIconPosition, ButtonSize, ButtonType } from '../../shared/ui/button/models';
import './product-list-card.scss';
import appRouter from '../../shared/lib/router/router';
import { ID_SELECTOR, Page } from '../../shared/lib/router/pages';

export default class ProductListCard extends CommonBuilderWrapper {
  constructor(private data: Product) {
    super();

    this.builder = new ElementBuilder({
      tag: 'div',
      styleClass: 'product-list-card',
    });

    const img = new ElementBuilder({
      tag: 'img',
      styleClass: 'product-list-card__img',
      tagSettings: {
        src: data.masterData.current.masterVariant.images?.[0]?.url,
        alt: 'Product image',
      },
    });
    const price = new ElementBuilder({
      tag: 'div',
      styleClass: 'product-list-card__price',
      content: `${data.masterData.current.masterVariant.prices[0]?.value?.centAmount || '2000'}$`,
    });
    const description = new ElementBuilder({
      tag: 'span',
      styleClass: 'product-list-card__description',
      content: data.masterData.current.name?.['en-US'],
    });
    const likeButton = new Button({
      type: ButtonType.CIRCLE_WITHOUT_BORDER,
      size: ButtonSize.SMALL,
      icon: {
        name: 'heart',
        position: ButtonIconPosition.LEFT,
      },
    });
    const toCartButton = new Button({
      type: ButtonType.CIRCLE_WITHOUT_BORDER,
      size: ButtonSize.SMALL,
      icon: {
        name: 'cart',
        position: ButtonIconPosition.LEFT,
      },
    });
    const detailsButton = new Button({
      type: ButtonType.DEFAULT,
      text: 'Details',
      callback: () => appRouter.navigate(`${Page.PRODUCTS}/${data.id}`),
    });

    const info = new ElementBuilder({
      tag: 'div',
      styleClass: 'product-list-card__row',
    });
    const infoButtons = new ElementBuilder({
      tag: 'div',
    });
    const details = new ElementBuilder({
      tag: 'div',
      styleClass: 'product-list-card__row',
    });

    infoButtons.append([likeButton.getElement(), toCartButton.getElement()]);
    info.append([infoButtons.getElement(), price.getElement()]);
    details.append([detailsButton.getElement()]);
    this.builder.prepend([description.getElement()]);
    this.builder.append([img.getElement(), info.getElement(), details.getElement()]);
  }
}
