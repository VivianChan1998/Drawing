import React, {Component} from 'react'
import example1 from '../img/explore/Juice1.jpg'
import { NavLink, Switch, Route} from 'react-router-dom';
import LinkButton from './LinkButton'

class ExploreItem extends Component {
    render() {
        return(
            <li className='Explore_body_list_item'>
                <NavLink to={'/'+'Vivian'}>
                    <div className='Explore_body_list_item_imgcontainer'>
                        <img src={example1}></img>
                    </div>
                    <span className='Explore_body_list_item_text'>
                        <h3>happy happyyyy</h3>
                        <p>Playing with my best friend!!</p>
                        
                        <h4>Take a look...>>></h4>   
                        
                    </span>
                </NavLink>
            </li>
        )
    }
}

export default ExploreItem;