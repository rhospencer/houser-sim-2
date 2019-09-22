import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'
import axios from 'axios'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import store, {CANCEL_INPUTS} from '../../store'

export default class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            
        }
    }

    handleCancel = () => {
        store.dispatch({
            type: CANCEL_INPUTS
        })
    }

    render() {
        return(
            <div className="new-listing-holder">
                <div className="new-listing-title-holder">
                    <h2>Add New Listing</h2>
                    <button onClick={() => this.handleCancel()}><Link to={'/'}>Cancel</Link></button>
                </div>
                <div className="routes-hold">
                    <Route path='/wizard/step1' component={StepOne}></Route>
                    <Route path='/wizard/step2' component={StepTwo}></Route>
                    <Route path='/wizard/step3' component={StepThree}></Route>
                </div>
            </div>
        )
    }
}