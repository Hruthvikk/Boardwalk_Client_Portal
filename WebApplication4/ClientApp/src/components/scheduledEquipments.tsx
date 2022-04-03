import * as React from 'react';
import { connect } from 'react-redux';
import Sidebarmr from './Sidebarmr';
import { Popup } from './Popup';
import { NavLink } from 'reactstrap';
import * as EquipmentsStore from '../store/Equipments';
import { RouteComponentProps } from 'react-router-dom';
import { CustomAccordion } from './Accordion';
import { ApplicationState } from '../store';

type EquipmentsProps =
    EquipmentsStore.EquipmentsState // ... state we've requested from the Redux store
    & typeof EquipmentsStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ startDateIndex: string}>;
class scheduledEquipments extends React.PureComponent<EquipmentsProps> {
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }
    private ensureDataFetched() {
        const startDateIndex = parseInt(this.props.match.params.startDateIndex, 10) || 0;
        this.props.requestEquipments(startDateIndex);
    }
    private showEquipments() {
        console.log(this.props.Equipments);
        return (
        <div>
                {this.props.Equipments.map((d: EquipmentsStore.Equipments, index) =>
                    <div>
                        <CustomAccordion key={index} title={"Equipments"+d.clientId} content={<div>
                            <p>Make : {d.make}</p>
                            <p>Model : {d.model}</p>
                            <p>Make : {d.year}</p>
                            <p>Seriel Number : {d.serialNumber}</p>
                            <p>Value : {d.value}</p>
                            </div>} />
                        <br/>
                    </div>
                )}
        </div>
        );
    }
    public render() {
       
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <Sidebarmr/>
                    </div>
                    <div className='col-8' id='mr1add'>
                        <h1>Add New Equipment</h1>
                        <form>
                            <input type='text' placeholder='Year'/>
                            <br/><br/>
                            <input type='text' placeholder='Make'/>
                            <br/><br/>
                            <input type='text' placeholder='Model'/>
                            <br/><br/>
                            <input type='text' placeholder='Value   '/>
                            <br/><br/>
                            <input type='text' placeholder='Serial Number'/>
                            <br/><br/>
                            <input type='submit' value='submit'/>
                        </form>
                        <br/><br/>
                        {this.showEquipments()}
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
};
export default connect((state: ApplicationState) => state.Equipments,EquipmentsStore.actionCreators)
(scheduledEquipments as any);



