"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const js_cookie_1 = __importDefault(require("js-cookie"));
class Index extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.state = {
            usr: "",
            pss: "",
            home: "hidden",
            login: "visible"
        };
    }
    render() {
        const cookieLoggedIn = js_cookie_1.default.get("loggedin");
        if (cookieLoggedIn === "logged in") {
            this.setState({
                home: "visible",
                login: "hidden"
            });
        }
        else if (cookieLoggedIn !== "#") {
            document.cookie = "loggedin=#";
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("section", { style: { visibility: this.state.login } },
                react_1.default.createElement("form", { className: "FormLogin" },
                    react_1.default.createElement("input", { className: "FormUser", type: "text", onChange: (e) => {
                            this.setState({ usr: e.target.value });
                        }, placeholder: "Username/email... " }),
                    react_1.default.createElement("input", { className: "FormPass", type: "password", autoComplete: "true", onChange: (e) => {
                            this.setState({ pss: e.target.value });
                        }, placeholder: "Password... " }),
                    react_1.default.createElement("input", { className: "FormLoginButton", id: "btnLogin", type: "button", onClick: () => {
                            document.cookie = "usr=" + this.state.usr;
                            document.cookie = "pss=" + this.state.pss;
                            window.location.reload();
                        }, value: "Login" }))),
            react_1.default.createElement("section", { style: { visibility: this.state.home } },
                react_1.default.createElement("h1", null, "Home page!"))));
    }
}
exports.default = Index;
