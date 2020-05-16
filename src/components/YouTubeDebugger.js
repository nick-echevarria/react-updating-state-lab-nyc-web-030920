import React, { Component } from 'react';

class YouTubeDebugger extends Component {
    state = { 
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    changeBitrate = () => { 
        this.setState({
            settings: Object.assign({},
                this.state.settings, {
                bitrate: 12
            })
        })
    }

    changeResolution = () => {
        this.setState({
            settings: Object.assign({}, this.state.settings, {
              video: Object.assign({}, this.state.settings.video, {
                resolution: '720p'
              })
            })
        }) // to use an Object.assign to change a deeply nested object, 
        //you'll need to call it on each level of the object
    }
    
    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>Change Bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>Change Resolution</button>
            </div>
        );
    }
}

export default YouTubeDebugger;
