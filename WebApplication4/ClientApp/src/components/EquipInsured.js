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
// This is client side view for List of List of Equipments insured under the commercial policy for clients.
var React = require("react");
var react_redux_1 = require("react-redux");
var InfoBar_1 = require("./InfoBar");
var EquipmentsStore = require("../store/Equipments");
var Accordion_1 = require("./Accordion");
var NavMenu_1 = require("./NavMenu");
var EquipInsured = /** @class */ (function (_super) {
    __extends(EquipInsured, _super);
    function EquipInsured() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EquipInsured.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    EquipInsured.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    EquipInsured.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestEquipments(startDateIndex);
    };
    EquipInsured.prototype.showEquipments = function () {
        console.log(this.props.Equipment);
        return (React.createElement("div", null, this.props.Equipment.map(function (d, index) {
            return React.createElement("div", null,
                React.createElement(Accordion_1.CustomAccordion, { key: index, title: d.model.toString(), content: React.createElement("div", null,
                        React.createElement("p", null,
                            "Model - ",
                            d.model),
                        React.createElement("p", null,
                            "Serial Number - ",
                            d.serialNumber),
                        React.createElement("p", null,
                            "Value - $",
                            d.value),
                        React.createElement("p", null,
                            "Year - ",
                            d.year)) }),
                React.createElement("br", null));
        })));
    };
    EquipInsured.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(NavMenu_1["default"], null),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-4' },
                    React.createElement(InfoBar_1["default"], null)),
                React.createElement("div", { className: 'col-8' },
                    React.createElement("h1", null, "List of Equipments insured under the commercial policy"),
                    React.createElement("br", null),
                    React.createElement("div", null, this.showEquipments())))));
    };
    return EquipInsured;
}(React.PureComponent));
;
exports["default"] = react_redux_1.connect(function (state) { return state.Equipments; }, EquipmentsStore.actionCreators)(EquipInsured);
