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
            <div>
                Wizard
                <Route path='/wizard/step1' component={StepOne}></Route>
                <Route path='/wizard/step2' component={StepTwo}></Route>
                <Route path='/wizard/step3' component={StepThree}></Route>
                <button><Link to={'/'}>Cancel</Link></button>
            </div>
        )
    }
}