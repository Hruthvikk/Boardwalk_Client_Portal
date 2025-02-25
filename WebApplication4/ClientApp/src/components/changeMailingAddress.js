"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// This is client side view for changing mailing address for client.
var React = require("react");
var react_redux_1 = require("react-redux");
var Sidebarmr_1 = require("./Sidebarmr");
require("./form.css");
var NavMenu_1 = require("./NavMenu");
var changeMailingAddress = /** @class */ (function (_super) {
    __extends(changeMailingAddress, _super);
    function changeMailingAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    changeMailingAddress.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(Sidebarmr_1["default"], null)),
                React.createElement("div", { className: 'col-8', id: 'mr1add' },
                    React.createElement("h1", null, "Enter New Mailing Address"),
                    React.createElement("form", null,
                        React.createElement("label", null, " Address "),
                        React.createElement("input", { type: 'text', placeholder: 'Address' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", null, " Province "),
                        React.createElement("select", null,
                            React.createElement("option", { value: "ON" }, "ON"),
                            React.createElement("option", { value: "BC" }, "BC"),
                            React.createElement("option", { value: "AL" }, "AL"),
                            React.createElement("option", { value: "NL" }, "NL"),
                            React.createElement("option", { value: "PE" }, "PE"),
                            React.createElement("option", { value: "NS" }, "NS"),
                            React.createElement("option", { value: "NB" }, "NB"),
                            React.createElement("option", { value: "QC" }, "QC"),
                            React.createElement("option", { value: "MB" }, "MB"),
                            React.createElement("option", { value: "SK" }, "SK"),
                            React.createElement("option", { value: "AB" }, "AB"),
                            React.createElement("option", { value: "YT" }, "YT"),
                            React.createElement("option", { value: "NT" }, "NT"),
                            React.createElement("option", { value: "NU" }, "NU")),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", null, " City "),
                        React.createElement("input", { type: 'text', placeholder: 'CITY' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", null, " Postal Code "),
                        React.createElement("input", { type: 'text', placeholder: 'Postal Code' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'submit', value: 'submit' })),
                    React.createElement("br", null)))));
    };
    return changeMailingAddress;
}(React.Component));
;
exports["default"] = react_redux_1.connect()(changeMailingAddress);
