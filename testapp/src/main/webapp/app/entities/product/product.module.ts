import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';

import { TestappSharedModule } from 'app/shared';
import {
  ProductComponent,
  ProductDetailComponent,
  ProductUpdateComponent,
  ProductDeletePopupComponent,
  ProductDeleteDialogComponent,
  productRoute,
  productPopupRoute
} from './';

const ENTITY_STATES = [...productRoute, ...productPopupRoute];

@NgModule({
  imports: [TestappSharedModule, QRCodeModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductUpdateComponent,
    ProductDeleteDialogComponent,
    ProductDeletePopupComponent
  ],
  entryComponents: [ProductComponent, ProductUpdateComponent, ProductDeleteDialogComponent, ProductDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestappProductModule {}
