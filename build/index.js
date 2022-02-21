"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var PORT = 3000;
app.listen(PORT, function () { return console.log("Listening on localhost://".concat(PORT)); });
app.get('/', function (req, res) {
    res.send('Success');
});
app.use(express_1.default.static(__dirname + '/public'));
app.use('/api', index_1.default);
exports.default = app;
