import { Component } from '@angular/core';
import { GridOptions, GridReadyEvent } from 'ag-grid-community';
import { IPerson } from './app-data.model';
import { AppDataService } from './app-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  positionRelative = false;

  readonly gridOptions: GridOptions<IPerson> = {
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

  constructor(public personService: AppDataService) {
  }
}
