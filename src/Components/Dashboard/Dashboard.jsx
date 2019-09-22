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
            const {img} = el
            console.log(img)
            return <House 
                        key={el.id}
                        id={el.id}
                        name={el.name}
                        address={el.address}
                        city={el.city}
                        state={el.state}
                        zip={el.zip}
                        img={el.img}
                        mortgage={el.mortgage}
                        rent={el.rent}
                        deleteHouse = {this.deleteHouse}          
                    />
                })
                return(
                    <div className='dashboard-holder'>
                <div className="dashboard-title-holder">
                    Dashboard
                    <button><Link to={'/wizard/step1'}>Add New Property</Link></button>
                </div>
                <div className="home-listings-holder">
                    <h4>Home Listings</h4>
                </div>
                {houses}
            </div>
        )
    }
}