import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridReproComponent } from './ag-grid-repro.component';

@NgModule({
  imports: [
    AgGridModule,
    RouterModule.forChild([
      { path: '', component: AgGridReproComponent },
    ]),
  ],
  declarations: [
    AgGridReproComponent,
  ],
})
export class AgGridReproModule {
}
