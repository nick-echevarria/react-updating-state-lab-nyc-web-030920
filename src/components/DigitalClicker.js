import React, { Component } from 'react';

class DigitalClicker extends Component {
    state = { 
        timesClicked: 0
    }

    updateClickCount = () => { 
        this.setState(previousState => { 
            return { 
                timesClicked: previousState.timesClicked + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={this.updateClickCount}>{this.state.timesClicked}</button>
            </div>
        );
    }
}

export default DigitalClicker;
