import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Observable } from 'rxjs';
import { IPerson } from './app-data.model';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  getPersons() {
    return new Observable<IPerson[]>(({ next, complete }) => {
      faker.seed(123);
      next(this.getPersonsArray());
      complete();
    });
  }

  getPersonsArray() {
    faker.seed(123);
    const rows: IPerson[] = [];
    for (let i = 0; i < 500; i++) {
      rows.push({
        id: i,
        name: faker.person.firstName(),
        lastname: faker.person.lastName(),
        sex: faker.person.sex(),
        jobTitle: faker.person.jobTitle(),
        favoriteColor: faker.color.human(),
        age: faker.number.int({ min: 20, max: 80 }),
      });
    }
    return rows;
  }

}
