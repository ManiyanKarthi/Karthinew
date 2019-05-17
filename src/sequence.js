var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var context_1 = require('@loopback/context');
var rest_1 = require('@loopback/rest');
var SequenceActions = rest_1.RestBindings.SequenceActions;
var MySequence = (function () {
    function MySequence(findRoute, parseParams, invoke, send, reject) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        this.async = handle(context, rest_1.RequestContext);
    }
    MySequence = __decorate([
        __param(0, context_1.inject(SequenceActions.FIND_ROUTE)),
        __param(1, context_1.inject(SequenceActions.PARSE_PARAMS)),
        __param(2, context_1.inject(SequenceActions.INVOKE_METHOD)),
        __param(3, context_1.inject(SequenceActions.SEND)),
        __param(4, context_1.inject(SequenceActions.REJECT))
    ], MySequence);
    return MySequence;
})();
exports.MySequence = MySequence;
{
    try {
        var request = context.request, response = context.response;
        console.log("request Starts");
        var route = this.findRoute(request);
        console.log("after route");
        var args = await;
        this.parseParams(request, route);
        console.log("args");
        var result = await;
        this.invoke(route, args);
        console.log("after result");
        console.log(result);
        this.send(response, new Error("Authentication"));
    }
    catch (err) {
        this.reject(context, err);
    }
}
