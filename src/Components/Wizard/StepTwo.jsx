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
            payload: this.state

        })
    }

    render() {
        return(
            <div>
                <div className="input-holder-img">
                    <h2>Image URL</h2>
                    <input value={this.state.img} onChange={(e) => this.handleChangeImg(e)} placeholder="Image Link" type="text"/>
                </div>
                <button><Link to='/wizard/step1'>Previous Step</Link></button>
                <button onClick={() => this.handleSubmit()}><Link to='/wizard/step3'>Next Step</Link></button>
            </div>
        )
    }
}
