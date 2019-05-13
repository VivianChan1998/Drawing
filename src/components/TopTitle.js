import React, {Component} from 'react'
import { NavLink, Switch, Route} from 'react-router-dom';

class TopTitle extends Component {
    render() {
        return(
            <div className='Explore_Title'>
                <h1 className='Explore_Title_text'>{this.props.text}</h1>
            </div>
        )
    }
}
//Creators and their fantastic arts!
export default TopTitle;