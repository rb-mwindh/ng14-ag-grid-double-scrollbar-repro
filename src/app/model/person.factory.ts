import { faker } from '@faker-js/faker';
import { IPerson } from './person.model';

export function createPersons(amount: number): IPerson[] {
  const rows: IPerson[] = [];
  for (let id = 0; id < amount; id++) {
    rows.push({
      id,
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
