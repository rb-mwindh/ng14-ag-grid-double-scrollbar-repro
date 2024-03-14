import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { createPersons, IPerson } from '../model';

@Component({
  selector: 'app-ag-grid-repro',
  templateUrl: './ag-grid-repro.component.html',
  styleUrls: [ './ag-grid-repro.component.scss' ],
})
export class AgGridReproComponent {
  readonly gridOptions: GridOptions<IPerson> = {
    rowData: createPersons(500),
    columnDefs: [
      { field: 'id', sortable: true, filter: true },
      { field: 'name', sortable: true, filter: true },
      { field: 'lastname', sortable: true, filter: true },
      { field: 'sex', sortable: true, filter: true },
      { field: 'age', sortable: true, filter: true },
      { field: 'jobTitle', sortable: true, filter: true },
      { field: 'favoriteColor', sortable: true, filter: true },
    ],
  };
}
