import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'ag-grid', pathMatch: 'full' },
      {
        path: 'ag-grid',
        loadChildren: () => import('./ag-grid-repro/ag-grid-repro.module').then(m => m.AgGridReproModule),
      },
      {
        path: 'html-only',
        loadChildren: () => import('./html-only-repro/html-only-repro.module').then(m => m.HtmlOnlyReproModule),
      },
    ]),
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
