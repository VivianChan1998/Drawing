import React, { Component } from 'react';
import { NavLink, Switch, Route} from 'react-router-dom';

class LinkButton extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            text: '/' + this.props.text
        }
    }

    render() {
        return (
            <div>
                <button className='Drawing_Top_header_button'>
                    <NavLink to={this.state.text}>
                        {this.props.text}
                    </NavLink>
                </button>
            </div>
        )
    }
    
}

export default LinkButton;