// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {

    constructor() {
        super()

        this.state = {
            timesClicked: 0
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>{this.state.timesClicked}</button>
            </div>
        )
    }

    increment = () => {

        let currentTimesClicked = (this.state.timesClicked + 1)
        this.setState({
            timesClicked: currentTimesClicked
        })
    }

}