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
// This is admin side view for seeing requests of add location by client.
// Admin can accept or reject the request.
var React = require("react");
var react_redux_1 = require("react-redux");
var AdminNavMenu_1 = require("./AdminNavMenu");
var AdminChangeRequestBar_1 = require("./AdminChangeRequestBar");
var AddLocationsStore = require("../store/AddLocations");
var AdminAddLocation = /** @class */ (function (_super) {
    __extends(AdminAddLocation, _super);
    function AdminAddLocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdminAddLocation.prototype.componentDidMount = function () {
        this.ensureDataFetched();
    };
    // This method is called when the route parameters change
    AdminAddLocation.prototype.componentDidUpdate = function () {
        this.ensureDataFetched();
    };
    AdminAddLocation.prototype.ensureDataFetched = function () {
        var startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddLocations(startDateIndex);
    };
    AdminAddLocation.prototype.showAddLocations = function () {
        console.log(this.props.AddLocation);
        return (React.createElement("div", null,
            React.createElement("table", { className: "table table-bordered" },
                React.createElement("tr", null,
                    React.createElement("th", null, "ID"),
                    React.createElement("th", null, "Client ID"),
                    React.createElement("th", null, "Building Type"),
                    React.createElement("th", null, "Street"),
                    React.createElement("th", null, "City"),
                    React.createElement("th", null, "Postal Code"),
                    React.createElement("th", null, "Province"),
                    React.createElement("th", null, "Primary Operation"),
                    React.createElement("th", null, "Building Construction"),
                    React.createElement("th", null, "Wall Construction"),
                    React.createElement("th", null, "Floor Construction"),
                    React.createElement("th", null, "Sprinklered"),
                    React.createElement("th", null, "Deck Construction"),
                    React.createElement("th", null, "Roof Covering"),
                    React.createElement("th", null, "Size Sqft"),
                    React.createElement("th", null, "Number of storeys"),
                    React.createElement("th", null, "Year Built"),
                    React.createElement("th", null, "Construction Type"),
                    React.createElement("th", null, "Alarm"),
                    React.createElement("th", null, "Mortgage"),
                    React.createElement("th", null, "Request Time"),
                    React.createElement("th", null, "Approve or Reject")),
                this.props.AddLocation.map(function (d, index) {
                    return React.createElement("tr", { key: index },
                        React.createElement("td", null, d.id),
                        React.createElement("td", null, d.clientId),
                        React.createElement("td", null, d.buildingType),
                        React.createElement("td", null, d.street),
                        React.createElement("td", null, d.city),
                        React.createElement("td", null, d.postalCode),
                        React.createElement("td", null, d.province),
                        React.createElement("td", null, d.primaryOp),
                        React.createElement("td", null, d.buildingConstr),
                        React.createElement("td", null, d.wallConstr),
                        React.createElement("td", null, d.floorConstr),
                        React.createElement("td", null, d.sprinklered),
                        React.createElement("td", null, d.deckConstruction),
                        React.createElement("td", null, d.roofCovering),
                        React.createElement("td", null, d.sizeSqft),
                        React.createElement("td", null, d.storeysNumber),
                        React.createElement("td", null, d.yearBuilt),
                        React.createElement("td", null, d.constrType),
                        React.createElement("td", null, d.alarm),
                        React.createElement("td", null, d.mortgage),
                        React.createElement("td", null, d.requestTime),
                        React.createElement("td", null,
                            React.createElement("button", null, "Yes"),
                            React.createElement("button", null, "No")));
                }))));
    };
    AdminAddLocation.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement(AdminNavMenu_1["default"], null),
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-4" },
                    React.createElement(AdminChangeRequestBar_1["default"], null)),
                React.createElement("div", { className: "col-8" },
                    React.createElement("h1", null, "Add Location Requests"),
                    React.createElement("div", null, this.showAddLocations())))));
    };
    return AdminAddLocation;
}(React.PureComponent));
exports["default"] = react_redux_1.connect(function (state) { return state.AddLocations; }, AddLocationsStore.actionCreators)(AdminAddLocation);
