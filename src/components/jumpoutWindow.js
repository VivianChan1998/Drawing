import React,{Component} from 'react'

class JumpoutWindow extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }
    
    jumpoutclose() {
        this.setState({jumpoutwindow: {'display': 'none'}})
    }

    render() {
        console.log("IIIIIIIIII", this.props.style)
        return(
            <div className='Jumpout_whole' style={this.props.style}>
                <div className='Jumpout_window'>
                    <button onClick={() => this.jumpoutclose()}>X</button>
                    <h5>ID:</h5>
                    <input></input>
                    <h5>Password:</h5>
                    <input></input>
                    <button>Log in</button>
                </div>
            </div>
        )
    }
}

export default JumpoutWindow;