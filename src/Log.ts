let uniqid = require('uniqid');
let log4js = require('log4js');

import { RestBindings } from '@loopback/rest';
import { Interceptor } from '@loopback/context';

log4js.configure({
  appenders: { cheese: { type: 'dateFile', filename: 'loopback4-server.log', pattern: '.yyyy-MM-dd-hh-mm-ss', compress: true } },
  categories: { default: { appenders: ['cheese'], level: 'debug' } }
});

const logger = log4js.getLogger(process.env.NODE_ENV);

logger.info("Application starts and running")
export const log: Interceptor = async (invocationCtx, next) => {
  console.log("inside inercepptor")
  // Wait until the interceptor/method chain returns
  const req = await invocationCtx.get(RestBindings.Http.REQUEST);
  logger.info("Requestid - " + uniqid() + "| Request IP -" + req.ip);

  try {
    logger.info('Starting - Class-' + invocationCtx.targetClass.name + ' | Method-' + invocationCtx.methodName);
    //logger.debug("Requestid - " + uniqid() + "| Request IP -" + req.ip);
    const result = await next();
    const res = await invocationCtx.get(RestBindings.Http.RESPONSE);

    logger.info('Ending - Class-' + invocationCtx.targetClass.name + ' | Method-' + invocationCtx.methodName);
    logger.info("Response Status Code - " + res.statusCode);

    return result;
  } catch (e) {
    logger.error(e);
    throw e;
  }
};
