import React from 'react';
import { Badge } from 'reactstrap';
//import './Error.css'

export default class Example extends React.Component {
    render() {
        return (
            <div className='margin'>
                <h1>Error path not exist <Badge color="secondary">New</Badge></h1>
            </div>
        );
    }
}