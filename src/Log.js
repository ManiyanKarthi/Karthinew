var uniqid = require('uniqid');
var log4js = require('log4js');
var rest_1 = require('@loopback/rest');
log4js.configure({
    appenders: { cheese: { type: 'dateFile', filename: 'loopback4-server.log', pattern: '.yyyy-MM-dd-hh-mm-ss', compress: true } },
    categories: { default: { appenders: ['cheese'], level: 'debug' } }
});
var logger = log4js.getLogger(process.env.NODE_ENV);
logger.info("Application starts and running");
exports.log = async(invocationCtx, next);
{
    console.log("inside inercepptor");
    // Wait until the interceptor/method chain returns
    var req = await, invocationCtx, get = (rest_1.RestBindings.Http.REQUEST);
    logger.info("Requestid - " + uniqid() + "| Request IP -" + req.ip);
    try {
        logger.info('Starting - Class-' + invocationCtx_1.targetClass.name + ' | Method-' + invocationCtx_1.methodName);
        //logger.debug("Requestid - " + uniqid() + "| Request IP -" + req.ip);
        var result = await, next = ();
        var res = await, invocationCtx_1, get_1 = (rest_1.RestBindings.Http.RESPONSE);
        logger.info('Ending - Class-' + invocationCtx_1.targetClass.name + ' | Method-' + invocationCtx_1.methodName);
        logger.info("Response Status Code - " + res.statusCode);
        return result;
    }
    catch (e) {
        logger.error(e);
        throw e;
    }
}
;
