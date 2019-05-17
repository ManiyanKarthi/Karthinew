import { BootMixin } from '@loopback/boot';
import { ApplicationConfig, Application } from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import { RepositoryMixin } from '@loopback/repository';
import { RestApplication, Request } from '@loopback/rest';
import { ServiceMixin } from '@loopback/service-proxy';
import * as path from 'path';
import { MySequence } from './sequence';
import { inject } from '@loopback/context';
import * as fs from 'fs-extra';



export class Loopback4Application extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);
    console.log("")

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.bind(RestExplorerBindings.CONFIG).to({
      path: '/explorer',
    });

    const widgetConf = JSON.parse(
      fs.readFileSync(path.resolve('component-config.json')).toString(),
    );

    //    this.bind('logger').toClass(ServerLogger);

    function logInfo(req: Request) {
      //logger1.info("URL:" + req.url + ",METHOD:" + req.method + ",IP ADDRESS:" + req.ip);
      //log.info("URL:" + req.url + ",METHOD:" + req.method + ",IP ADDRESS:" + req.ip);
    }

    function logMessage(mes: string) {
      //log.info(mes);
      //logger1.info(mes)
    }

    this.bind('config.widget').to(widgetConf);
    //this.bind("").toProvider(requestLogger)

    this.bind('logger.widget').to(logInfo);
    this.bind('logger.message').to(logMessage);


    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
