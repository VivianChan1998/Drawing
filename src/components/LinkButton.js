import React, { Component } from 'react';
import { NavLink, withRouter} from 'react-router-dom';

class LinkButton extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            text: '/' + this.props.text
        }
    }

    render() {
        //console.log("BUTTON", this.state.text)
        return (
            <div>
                <span className='Drawing_Top_header_button' onClick={() => console.log("hello")}>
                    <NavLink activeStyle={{borderBottom: '4px solid #FFFFFF'}} to={this.state.text}>
                        {this.props.text}
                    </NavLink>
                </span>
            </div>
        )
    }
    
}

export default withRouter(LinkButton);