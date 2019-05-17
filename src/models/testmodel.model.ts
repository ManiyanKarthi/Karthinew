import {Entity, model, property} from '@loopback/repository';

@model()
export class Testmodel extends Entity {

  constructor(data?: Partial<Testmodel>) {
    super(data);
  }
}
