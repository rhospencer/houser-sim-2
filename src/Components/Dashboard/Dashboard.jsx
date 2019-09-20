import React, {Component} from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houseList: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }

    componentDidMount() {
        this.getAllHouses()
    }

    getAllHouses() {
        axios.get('/api/houses').then(res => {
            this.setState({houseList: res.data})
        })
    }

    deleteHouse(id) {
        console.log(id)
        axios.delete(`/api/house/${+id}`).then(res => {
            this.getAllHouses()
        })
    }

    render() {
        const houses = this.state.houseList.map(el => {
            return <House 
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        address={el.address}
                        city={el.city}
                        state={el.state}
                        zip={el.zip}
                        deleteHouse = {this.deleteHouse}          
                    />
        })
        return(
            <div>
                Dashboard
                <button><Link to={'/wizard'}>Add New Property</Link></button>
                {houses}
            </div>
        )
    }
}