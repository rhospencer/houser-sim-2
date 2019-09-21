import React, {Component} from 'react'

export default class House extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div className='house-holder'>
                <div className="img-holder">
                    <img src={this.props.img} alt="House Img"/>
                </div>
                <div className="property-holder">
                    <h6>Property Name: {this.props.name}</h6>
                    <h6>Address: {this.props.address}</h6>
                    <h6>City: {this.props.city}</h6>
                    <h6>State: {this.props.state}</h6>
                    <h6>Zip: {this.props.zip}</h6>
                </div>
                <div className="price-holder">
                    <h6>Monthly Mortgage: {this.props.mortgage}</h6>
                    {console.log(this.props)}
                    <h6>Desired Rent: {this.props.rent}</h6>

                </div>
                <div className="delete-holder">
                    <button onClick={() => this.props.deleteHouse(this.props.id)}>X</button>

                </div>
            </div>
        )
    }
}