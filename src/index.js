var application_1 = require('./application');
exports.Loopback4Application = application_1.Loopback4Application;
async;
function main(options) {
    if (options === void 0) { options = {}; }
    var app = new application_1.Loopback4Application(options);
    await;
    app.boot();
    await;
    app.start();
    function logMessage(mes) {
    }
    app.bind("logger1").to(logMessage);
    var url = app.restServer.url;
    console.log("Server is running at " + url);
    console.log("Try " + url + "/ping");
    return app;
}
