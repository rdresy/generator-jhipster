import { NgModule } from '@angular/core';

import { TestappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TestappSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TestappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestappSharedCommonModule {}
