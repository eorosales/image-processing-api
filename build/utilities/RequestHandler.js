"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestHandler = void 0;
var path_1 = __importDefault(require("path"));
var RequestHandler = /** @class */ (function () {
    function RequestHandler(title, width, height) {
        this.title = title;
        this.width = width;
        this.height = height;
    }
    // Input path for Sharp
    RequestHandler.prototype.inputPath = function () {
        var inputDir = path_1.default.join(__dirname, '../', 'public', 'input', "".concat(this.title, ".jpg"));
        // const inputFile = inputDir.split('/')[8];
        return inputDir;
    };
    RequestHandler.prototype.outputImageName = function () {
        return "".concat(this.title, "_").concat(this.width, "x").concat(this.height, ".jpeg");
    };
    // Path to output folder via Sharp's toFile() method
    RequestHandler.prototype.outputPath = function () {
        return path_1.default.join(__dirname, '../', 'public', 'output', this.outputImageName());
    };
    return RequestHandler;
}());
exports.RequestHandler = RequestHandler;
