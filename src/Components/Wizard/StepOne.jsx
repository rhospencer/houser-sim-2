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
                Step One
                <input value={this.state.name} onChange={(e) => this.handleChangeName(e)} placeholder="Name" type="text"/>
                <input value={this.state.address} onChange={(e) => this.handleChangeAddress(e)} placeholder="Address" type="text"/>
                <input value={this.state.city} onChange={(e) => this.handleChangeCity(e)} placeholder="City" type="text"/>
                <input value={this.state.state} onChange={(e) => this.handleChangeState(e)} placeholder="State" type="text"/>
                <input value={this.state.zip} onChange={(e) => this.handleChangeZip(e)} placeholder="Zip Code" type="text"/>
                <button onClick={() => this.handleSubmit()}><Link to='/wizard/step2'>Next Step</Link></button>
            </div>
        )
    }
}