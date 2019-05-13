import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router'
import LinkButton from '../components/LinkButton'
import Explore from './Explore'
import Forum from './Forum'
import Activity from './Activity'
import User from './User'
import '../App.css'
import banner from '../img/banner1.png'
import logo from '../img/logo.png'

class Top extends Component {
    constructor(props) {
        super(props)
        this.state={
            users: [],
            apiResponse: "",
            count: 0
        }
    }
    callAPI() {
        fetch("http://localhost:3001/getUser")
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => this.setState({ users: res.users, count: 1}))
            .catch(err => err)
    }
    componentWillMount() {
        this.callAPI()
    }
    render() {
        return (
            <div>
                <div className='Drawing_Top_header'>
                    <img src={logo} className= 'Drawing_Top_logo'/>
                    <div className='Drawing_Top_button_container'>
                        <LinkButton text='explore' />
                        <LinkButton text='forum' />
                        <LinkButton text='activity' />
                    </div>
                    <div className='Drawing_Top_banner'>
                        <img src={banner}></img>
                    </div>
                </div>
                
                <div className='Drawing_Top_body'>
                    <Switch>
                        <Route exact path="/" render={() => (
                            <Redirect to='/explore'></Redirect>
                        )} />
                        {this.state.users.map(e =>
                            <Route path={"/" + e.NAME}>
                                <User ID={e.ID} NAME={e.NAME}></User>
                            </Route>
                        )}
                        <Route path="/explore" component={Explore} />
                        <Route path="/forum" component={Forum} />
                        <Route path="/activity" component={Activity} />
                    </Switch>
                </div>

                <div className='Drawing_Top_footer'>
                    ©VivianChan1998
                </div>

                
            </div>
        )
    }
}


export default Top;