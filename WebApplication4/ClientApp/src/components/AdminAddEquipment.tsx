﻿import * as React from 'react';
import { connect } from 'react-redux';
import AdminNavMenu from './AdminNavMenu';
import AdminChangeRequestBar from './AdminChangeRequestBar';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../store';
import * as AddEquipmentsStore from '../store/AddEquipments';
type AddEquipmentsProps =
    AddEquipmentsStore.AddEquipmentsState // ... state we've requested from the Redux store
    & typeof AddEquipmentsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string }>;

class AdminAddEquipment extends React.PureComponent<AddEquipmentsProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestAddEquipments(startDateIndex);
    }
    private showAddEquipments() {
        console.log(this.props.AddEquipment);
        return (
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Client ID</th>
                        <th>Year</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Value</th>
                        <th>Request Time</th>
                        <th>Approve or Reject</th>
                    </tr>
                {this.props.AddEquipment.map((d: AddEquipmentsStore.AddEquipments, index) =>
                    <tr key={index}>
                        <th>{d.id}</th>
                        <th>{d.clientId}</th>
                        <th>{d.year}</th>
                        <th>{d.make}</th>
                        <th>{d.model}</th>
                        <th>{d.value}</th>
                        <th>{d.requestTime}</th>
                        <th><button>Yes</button><button>No</button></th>
                    </tr>
                    )}
                </table>
            </div>
        );
    }
    public render() {
        return (
            <React.Fragment>
                <AdminNavMenu />
                <div className="row">
                    <div className="col-4">
                        <AdminChangeRequestBar />
                    </div>
                    <div className="col-8">
                        <h1>Add Equipment Requests</h1>
                        <div>
                            {this.showAddEquipments()}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default connect((state: ApplicationState) => state.AddEquipments,
    AddEquipmentsStore.actionCreators)(AdminAddEquipment as any);