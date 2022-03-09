﻿import * as React from 'react';
import { connect } from 'react-redux';
import InfoBar from './InfoBar';

class MailAddr extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <InfoBar />
                    </div>
                    <div className='col-8'>
                        <h1>Mailing Address</h1>
                    </div>
                </div>
            </React.Fragment>
        );
    }
};
export default connect()(MailAddr);

