import { Entity, model, property } from '@loopback/repository';
import { inject } from '@loopback/context';

@model()
export class Mode2 extends Entity {
  @property({
    type: 'string',
  })
  name?: string;
  @inject('logger.widget')
  private logger: Function;


  constructor(@inject('config.widget') protected widget: any, data?: Partial<Mode2>) {
    super(data);
    this.logger("Inside Constructor");
  }
}
