"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var RequestHandler_1 = __importDefault(require("../../utilities/RequestHandler"));
var sharp_1 = __importDefault(require("sharp"));
var resize = express_1.default.Router();
resize.get('/', function (req, res) {
    try {
        var title = req.query.title;
        var width = parseInt("".concat(req.query.width));
        var height = parseInt("".concat(req.query.height));
        var myImage = new RequestHandler_1.default(title, width, height);
        (0, sharp_1.default)(myImage.inputPath(title))
            .resize(width, height)
            .toFile(myImage.outputPath(title, width, height));
        res.send("\n      ".concat(myImage.inputPath(title), "\n    "));
    }
    catch (err) {
        console.log(err);
        res.send(err);
    }
});
exports.default = resize;
