import React, {Component} from 'react'
import example1 from '../img/explore/Juice1.jpg'
import { NavLink, Switch, Route} from 'react-router-dom';
import LinkButton from './LinkButton'

class ExploreItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: "",
            img: "",
            title: "",
        }
    }
    callAPI(){
        fetch("http://localhost:3001/getRandomUser")
            .then(res => res.text())
            .then(res => JSON.parse(res))
            //.then(res => console.log(res[]))
            //.then(res => console.log(res))
            .then(res => this.setState({
                user: res.NAME,
                img: res.IMG,
                title: res.TITLE
            }))
            .catch(err => err)
    }
    
    componentWillMount() {
        this.callAPI();
    }
    render() {
        //console.log(this.state.user)
        return(
            <li className='Explore_body_list_item'>
                <NavLink to={'/'+this.state.user}>
                    <div className='Explore_body_list_item_imgcontainer'>
                        <img src={this.state.img}></img>
                    </div>
                    <span className='Explore_body_list_item_text'>
                        <h3>{this.state.user}</h3>
                        <p>{this.state.title}</p>
                        
                        <h4>Take a look...>>></h4>   
                        
                    </span>
                </NavLink>
            </li>
        )
    }
}

export default ExploreItem;