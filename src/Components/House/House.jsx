import React, {Component} from 'react'

export default class House extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h6>Property Name: {this.props.name}</h6>
                <h6>Address: {this.props.address}</h6>
                <h6>City: {this.props.city}</h6>
                <h6>State: {this.props.state}</h6>
                <h6>Zip: {this.props.zip}</h6>
                <button onClick={() => this.props.deleteHouse(this.props.id)}>Delete</button>
            </div>
        )
    }
}