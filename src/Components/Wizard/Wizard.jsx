import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null
        }
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

    addHouse = () => {
        axios.post('/api/house', this.state).then(res => {
        })
        this.cancelInput()
        this.props.history.goBack()
    }

    cancelInput = () => {
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: null
        })
    }

    render() {
        return(
            <div>
                Wizard
                <input name="name" onChange={(e) => this.handleChangeName(e)} placeholder="Name" type="text"/>
                <input name="address" onChange={(e) => this.handleChangeAddress(e)} placeholder="Address" type="text"/>
                <input name="city" onChange={(e) => this.handleChangeCity(e)} placeholder="City" type="text"/>
                <input name="state" onChange={(e) => this.handleChangeState(e)} placeholder="State" type="text"/>
                <input name="zip" onChange={(e) => this.handleChangeZip(e)} placeholder="Zip Code" type="text"/>
                <button><Link to={'/'}>Cancel</Link></button>
                <button onClick={this.addHouse}>Complete</button>
            </div>
        )
    }
}