// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
              
        }
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleClickBitRate}></button>
                <button className="resolution" onClick={this.handleClickResolution}></button>
            </div>
        )
    }

    handleClickBitRate = () => {
        let currentBitRate = 12
        this.setState({
            errors: [],
            user: null,
            settings: {
                bitrate: currentBitRate,
                video: {
                resolution: '1080p'
                }
            }
        })
    }

    handleClickResolution = () => {
        let currentResolution = '720p'
        this.setState({
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: currentResolution
                }
            }
        })
    }


}