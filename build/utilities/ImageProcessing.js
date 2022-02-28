"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.imageProcessing = void 0;
var sharp_1 = __importDefault(require("sharp"));
var ResizeHandler_1 = require("./ResizeHandler");
var imageProcessing = function (req, _res, next) {
    var imageProcess = new ResizeHandler_1.ResizeHandler(req.query.title, parseInt("".concat(req.query.width)), parseInt("".concat(req.query.height)));
    // Process images via Sharp
    (0, sharp_1.default)(imageProcess.inputPath())
        .resize(imageProcess.width, imageProcess.height)
        .jpeg({
        quality: 50,
        progressive: true,
    })
        .toFile(imageProcess.outputPath());
    next();
};
exports.imageProcessing = imageProcessing;
