import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import store, {STEP_TWO} from '../../store'

export default class StepTwo extends Component {
    constructor() {
        super()

        const reduxState = store.getState()

        this.state = {
            img: reduxState.img
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            const reduxState = store.getState()
            this.setState({
                img: reduxState.img
            })
        })
    }

    handleChangeImg = (e) => {
        this.setState({img: e.target.value})
    }

    handleSubmit = () => {
        store.dispatch({
            type: STEP_TWO,
            payload: this.state.img
        })
    }

    render() {
        return(
            <div>
                Step Two
                <input  value={this.state.img} onChange={(e) => this.handleChangeImg(e)} type="text"/>
                <button><Link to='/wizard/step1'>Previous Step</Link></button>
                <button onClick={() => this.handleSubmit()}><Link to='/wizard/step3'>Next Step</Link></button>
            </div>
        )
    }
}