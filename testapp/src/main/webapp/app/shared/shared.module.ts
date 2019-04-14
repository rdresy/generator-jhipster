import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestappSharedLibsModule, TestappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestappSharedLibsModule, TestappSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestappSharedModule {
  static forRoot() {
    return {
      ngModule: TestappSharedModule
    };
  }
}
