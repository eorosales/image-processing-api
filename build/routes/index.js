"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_1 = __importDefault(require("./api/resize"));
var ImageProcessing_1 = require("../utilities/ImageProcessing");
var errorHandler_1 = require("../utilities/errorHandler");
var routes = express_1.default.Router();
routes.get('/', function (_req, res) {
    res.send('Main Route');
});
routes.use('/resize', ImageProcessing_1.imageProcessing, resize_1.default);
routes.use(errorHandler_1.errorHandler);
exports.default = routes;
