import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {STEP_THREE, CANCEL_INPUTS} from '../../store'

export default class StepThree extends Component {
    constructor() {
        super()

        const reduxState = store.getState()

        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent,
            recommend: 0
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                mortgage: reduxState.mortgage,
                rent: reduxState.rent
            })
        })
        const reduxState = store.getState()
    }

    handleChangeMortgage = (e) => {
        this.setState({mortgage: e.target.value, recommend: e.target.value * 1.25})
    }

    handleChangeRent = (e) => {
        this.setState({rent: e.target.value})
    }

    addHouse = () => {
        this.handleSubmit()
        const reduxState = store.getState()
        const params = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip,
            img: reduxState.img,
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
        axios.post('/api/house', params).then(res => {
            this.handleCancel()
        })
    }

    handleSubmit = () => {
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
    }

    handleCancel = () => {
        store.dispatch({
            type: CANCEL_INPUTS
        })
    }

    render() {
        return(
            <div>
                <div className="input-holder-price">
                    <h3>Recommended Rent: ${this.state.recommend.toFixed(2)}</h3>
                    <br/>
                    <h2>Monthly Mortgage Amount</h2>
                    <input value={this.state.mortgage} onChange={(e) => this.handleChangeMortgage(e)} placeholder="Mortgage" type="text"/>
                    <br/>
                    <h2>Desired Monthly Rent</h2>
                    <input value={this.state.rent} onChange={(e) => this.handleChangeRent(e)} placeholder="Rent" type="text"/>
                </div>
                <button onClick={() => this.handleSubmit()}><Link to='/wizard/step2'>Previous Step</Link></button>
                <button onClick={() => this.addHouse()}><Link to={'/'} replace>Complete</Link></button>
            </div>
        )
    }
}