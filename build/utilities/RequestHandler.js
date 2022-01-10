"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var RequestHandler = /** @class */ (function () {
    function RequestHandler(title, width, height) {
        this.title = title;
        this.width = width;
        this.height = height;
    }
    RequestHandler.prototype.inputPath = function (title) {
        return path_1.default.join(__dirname, '../', 'images', 'input', "".concat(title, ".jpg"));
    };
    RequestHandler.prototype.outputPath = function (title, width, height) {
        return path_1.default.join(__dirname, '../', 'images', 'output', "".concat(title, "_").concat(width, "x").concat(height, ".jpg"));
    };
    return RequestHandler;
}());
exports.default = RequestHandler;
