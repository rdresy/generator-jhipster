import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'category',
        loadChildren: './category/category.module#TestappCategoryModule'
      },
      {
        path: 'product',
        loadChildren: './product/product.module#TestappProductModule'
      },
      {
        path: 'customer',
        loadChildren: './customer/customer.module#TestappCustomerModule'
      },
      {
        path: 'address',
        loadChildren: './address/address.module#TestappAddressModule'
      },
      {
        path: 'wish-list',
        loadChildren: './wish-list/wish-list.module#TestappWishListModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestappEntityModule {}
