import { NgModule } from '@angular/core';
import { FancyTextTitleLibComponent } from './fancy-text-title-lib.component';
import { FancyBackgroundLibComponent } from './fancy-background-lib.component';
import { JhemtzyLibComponent } from './jhemtzy-lib.component';



@NgModule({
  declarations: [
    JhemtzyLibComponent,
    FancyBackgroundLibComponent,
    FancyTextTitleLibComponent
  ],
  imports: [
  ],
  exports: [
    JhemtzyLibComponent,
    FancyBackgroundLibComponent,
    FancyTextTitleLibComponent
  ]
})
export class JhemtzyLibModule { }
