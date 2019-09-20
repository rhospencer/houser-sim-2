import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import store, {STEP_THREE} from '../../store'

export default class StepThree extends Component {
    constructor() {
        super()

        const reduxState = store.getState()

        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
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
    }

    handleChangeMortgage = (e) => {
        this.setState({mortgage: e.target.value})
    }

    handleChangeRent = (e) => {
        this.setState({rent: e.target.value})
    }

    addHouse = () => {
        axios.post('/api/house', ).then(res => {
        })
        this.props.history.goBack()
    }

    handleSubmit = () => {
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
    }

    render() {
        return(
            <div>
                Step Three
                <input value={this.state.mortgage} onChange={(e) => this.handleChangeMortgage(e)} placeholder="Mortgage" type="text"/>
                <input value={this.state.rent} onChange={(e) => this.handleChangeRent(e)} placeholder="Rent" type="text"/>
                <button onClick={() => this.handleSubmit()}><Link to='/wizard/step2'>Previous Step</Link></button>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}