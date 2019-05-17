// Uncomment these imports to begin using these cool features!

import { inject } from '@loopback/context';
import { get, Request, RestBindings, ResponseObject, Response } from '@loopback/rest';
import { LogMixin, LOG_LEVEL, log } from '@loopback/example-log-extension';

export class TestcontrolController {
  @inject('logger.widget')
  private logger: Function;

  @inject('logger.message')
  private message: Function;
  // injection for constructor parameter
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request, @inject(RestBindings.Http.REQUEST) private res: Response,
    @inject('config.widget') protected widget: any, // This will be resolved at runtime!
  ) {

  }

  @log(LOG_LEVEL.WARN)
  @get('/hello')
  hello(): string {
    this.message("Starts hello");
    this.logger(this.req);
    this.message("Ends hello");

    return 'Hello world!';
  }



}


