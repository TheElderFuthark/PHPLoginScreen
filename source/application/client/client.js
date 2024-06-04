"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const index_1 = __importDefault(require("./index"));
class Render {
    renderClient() {
        if (typeof (window) !== "undefined") {
            const __root = client_1.default.createRoot(document.getElementById("root"));
            __root.render(react_1.default.createElement(index_1.default, null));
        }
    }
}
exports.default = Render;
