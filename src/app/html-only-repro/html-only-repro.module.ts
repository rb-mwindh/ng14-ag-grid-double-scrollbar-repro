import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { HtmlOnlyReproComponent } from './html-only-repro.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: HtmlOnlyReproComponent },
    ]),
    AgGridAngular,
  ],
  exports: [],
  declarations: [
    HtmlOnlyReproComponent,
  ],
})
export class HtmlOnlyReproModule {
}
