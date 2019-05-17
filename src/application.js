var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var boot_1 = require('@loopback/boot');
var rest_explorer_1 = require('@loopback/rest-explorer');
var repository_1 = require('@loopback/repository');
var rest_1 = require('@loopback/rest');
var service_proxy_1 = require('@loopback/service-proxy');
var path = require('path');
var sequence_1 = require('./sequence');
var fs = require('fs-extra');
var Loopback4Application = (function (_super) {
    __extends(Loopback4Application, _super);
    function Loopback4Application(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        console.log("");
        // Set up the custom sequence
        this.sequence(sequence_1.MySequence);
        // Set up default home page
        this.static('/', path.join(__dirname, '../public'));
        // Customize @loopback/rest-explorer configuration here
        this.bind(rest_explorer_1.RestExplorerBindings.CONFIG).to({
            path: '/explorer'
        });
        var widgetConf = JSON.parse(fs.readFileSync(path.resolve('component-config.json')).toString());
        //    this.bind('logger').toClass(ServerLogger);
        function logInfo(req) {
            //logger1.info("URL:" + req.url + ",METHOD:" + req.method + ",IP ADDRESS:" + req.ip);
            //log.info("URL:" + req.url + ",METHOD:" + req.method + ",IP ADDRESS:" + req.ip);
        }
        function logMessage(mes) {
            //log.info(mes);
            //logger1.info(mes)
        }
        this.bind('config.widget').to(widgetConf);
        //this.bind("").toProvider(requestLogger)
        this.bind('logger.widget').to(logInfo);
        this.bind('logger.message').to(logMessage);
        this.component(rest_explorer_1.RestExplorerComponent);
        this.projectRoot = __dirname;
        // Customize @loopback/boot Booter Conventions here
        this.bootOptions = {
            controllers: {
                // Customize ControllerBooter Conventions here
                dirs: ['controllers'],
                extensions: ['.controller.js'],
                nested: true
            }
        };
    }
    return Loopback4Application;
})(boot_1.BootMixin(service_proxy_1.ServiceMixin(repository_1.RepositoryMixin(rest_1.RestApplication))));
exports.Loopback4Application = Loopback4Application;
