import React, {Component} from 'react'
import tab1 from '../img/tab1.png'
import { NavLink, Switch, Route} from 'react-router-dom';

class TopTab extends Component {
    render() {
        return(
            <div className='Drawing_Top_tab'>
                <span className='Drawing_Top_tab_text'>
                    <NavLink to='/Explore'>
                    Explore
                    </NavLink>
                </span>
                <span className='Drawing_Top_tab_text'>
                    <NavLink to='/Forum'>
                    Forum
                    </NavLink>
                </span>
                <span className='Drawing_Top_tab_text'>
                    <NavLink to='/Activity'>
                    Activity
                    </NavLink>
                </span>
                <img src={tab1}></img>
            </div>
        )
    }
}

export default TopTab;

