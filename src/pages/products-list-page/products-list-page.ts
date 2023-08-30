import ViewBuilder from '../../shared/lib/view-builder';
import PageTitle from '../../features/page-title/page-title';
import ElementBuilder from '../../shared/lib/element-builder';
import ProductsFilter from '../../features/products-filter/products-filter';
import './products-list-page.scss';
import ProductsList from '../../features/products-list/products-list';
import { SortButtonCallbackValue } from '../../features/sort-bar/sort-bar.models';
import SortBar from '../../features/sort-bar/sort-bar';
import ProductApi from '../../entities/product-api';

export default class ProductsListPage extends ViewBuilder {
  private productsFilter: ProductsFilter;
  private productsList: ProductsList;

  constructor() {
    super('page main-page');
    this.loadProducts();
  }

  public configureView(): HTMLElement[] {
    const titleView = new PageTitle('Блузки и рубашки для женщин', 'Арт. 123123');
    const sortBarView = new SortBar(this.sortClick);
    this.productsList = new ProductsList();
    this.productsFilter = new ProductsFilter();
    const productsView = new ElementBuilder({
      tag: 'section',
      styleClass: 'products-list-page',
    });
    productsView.append([this.productsFilter.getElement(), this.productsList.getElement()]);

    return [titleView.getElement(), sortBarView.getElement(), productsView.getElement()];
  }

  public buildView(): void {
    this.view.getElement().append(...this.configureView());
  }

  public sortClick(sortValue: SortButtonCallbackValue): void {}

  public loadProducts(): void {
    this.productsList.showLoader(true);
    ProductApi.getProducts().then((data) => {
      this.productsList.setProducts(data);
      this.productsList.showLoader(false);
    });
  }
}
