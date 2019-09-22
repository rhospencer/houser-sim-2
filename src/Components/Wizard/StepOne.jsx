import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP_ONE} from '../../store'

export default class StepOne extends Component {
    constructor() {
        super()

        const reduxState = store.getState()

        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }

    handleChangeAddress = (e) => {
        this.setState({address: e.target.value})
    }

    handleChangeCity = (e) => {
        this.setState({city: e.target.value})
    }

    handleChangeState = (e) => {
        this.setState({state: e.target.value})
    }

    handleChangeZip = (e) => {
        this.setState({zip: e.target.value})
    }

    handleSubmit = () => {
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        })
    }

    render() {
        return(
            <div>
                <div className="input-holder">
                    <div className="name-holder">
                        <h2>Property Name</h2>
                        <input value={this.state.name} onChange={(e) => this.handleChangeName(e)} placeholder="Property Name" type="text"/>
                    </div>
                    <div className="address-holder">
                        <h2>Address</h2>
                        <input value={this.state.address} onChange={(e) => this.handleChangeAddress(e)} placeholder="Address" type="text"/>
                    </div>
                    <div className="city-holder">
                        <h2>City</h2>
                        <input value={this.state.city} onChange={(e) => this.handleChangeCity(e)} placeholder="City" type="text"/>
                    </div>
                    <div className="state-holder">
                        <h2>State</h2>
                        <input value={this.state.state} onChange={(e) => this.handleChangeState(e)} placeholder="State" type="text"/>
                    </div>
                    <div className="zip-holder">
                        <h2>Zip Code</h2>
                        <input value={this.state.zip} onChange={(e) => this.handleChangeZip(e)} placeholder="Zip Code" type="text"/>
                    </div>
                </div>
                <div className="navigation-holder">
                    <button onClick={() => this.handleSubmit()}><Link to='/wizard/step2'>Next Step</Link></button>

                </div>
            </div>
        )
    }
}