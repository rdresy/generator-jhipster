import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { QRCodeModule } from 'angular2-qrcode';

import { TestappSharedModule } from 'app/shared';
import {
  WishListComponent,
  WishListDetailComponent,
  WishListUpdateComponent,
  WishListDeletePopupComponent,
  WishListDeleteDialogComponent,
  wishListRoute,
  wishListPopupRoute
} from './';

const ENTITY_STATES = [...wishListRoute, ...wishListPopupRoute];

@NgModule({
  imports: [TestappSharedModule, QRCodeModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    WishListComponent,
    WishListDetailComponent,
    WishListUpdateComponent,
    WishListDeleteDialogComponent,
    WishListDeletePopupComponent
  ],
  entryComponents: [WishListComponent, WishListUpdateComponent, WishListDeleteDialogComponent, WishListDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestappWishListModule {}
