import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router'
import LinkButton from '../components/LinkButton'
import Explore from './Explore'
import Forum from './Forum'
import Activity from './Activity'
import User from './User'
import '../App.css'

import logo from '../img/logo.png'
import BannerSwitch from '../components/BannerSwitch'
import JumpoutWindow from '../components/jumpoutWindow'

var default_banner = "https://i.imgur.com/Nr4BUhX.png"

class Top extends Component {
    constructor(props) {
        super(props)
        this.state={
            jumpoutwindow: {'display': 'none'},
            users: [],
            apiResponse: "",
            count: 0,
            bannerSource: {
                Explore: "",
                Forum: "",
                Activity:""
            },
            id:'',
            pw:'',
            LoginID: '',
            HelloMessage: <h5>Hello! Guest </h5>,
            StatusButton: <button onClick={() => this.jumpout()} >Login</button>
        }
    }
    callAPI() {
        fetch("http://localhost:3001/getbanner")
            .then(res => res.text())
            .then(res => JSON.parse(res))
            //.then(res => console.log(res))
            .then(res => this.setState({bannerSource: res}))
            .catch(err => err)

        fetch("http://localhost:3001/getUser")
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => this.setState({ users: res.users, count: 1}))
            .catch(err => err)

        
    }
    componentWillMount() {
        this.callAPI()
    }
    jumpout() {
        //console.log("jumpout")
        this.setState({jumpoutwindow: {'display': 'block'}})
    }
    jumpoutclose() {
        this.setState({jumpoutwindow: {'display': 'none'}})
    }
    handleInput(e) {
        //console.log(e.target.name, e.target.value)
        //console.log(this.state)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    callSendLoginAPI() {
        let ID = this.state.id;
        fetch('http://localhost:3001/handleLogin', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: ID,
                pw: this.state.pw,
            })
        })
        .then(res => res.text())
        //.then(res => console.log(res))
        .then(res => {
            if(res === 'Success!') this.setState({
                jumpoutwindow: {'display': 'none'},
                LoginID: ID,
                HelloMessage: <h5>Hello! {ID} </h5>,
                StatusButton: <button onClick={() => this.logout()} >Log out</button>
            })
        })
    }
    logout() {
        this.setState({
            LoginID: '',
            HelloMessage: <h5>Hello! Guest </h5>,
            StatusButton: <button onClick={() => this.jumpout()} >Login</button>
        })
    }
    handlesubmit() {
        //console.log(this.state)
        this.callSendLoginAPI()
        this.setState({
            id:'',
            pw:''
        })
    }
    
    render() {
        //console.log(this.state.bannerSource)
        let banner_source = {
            default: 1
        }
        if(this.state.bannerSource !== undefined) {
            banner_source = {
                default: 0,
                imgURLs: this.state.bannerSource
            }
        }
        return (
            <div>
                <div className='Jumpout_whole' style={this.state.jumpoutwindow}>
                    <div className='Jumpout_window'>
                        <button onClick={() => this.jumpoutclose()}>X</button>
                        <h5>ID:</h5>
                        <input name='id' value={this.state.id} onChange={(evt)=>this.handleInput(evt)}></input>
                        <h5>Password:</h5>
                        <input name='pw'value={this.state.pw} onChange={(evt)=>this.handleInput(evt)} style={{'font-family':'password'}}></input>
                        <button onClick={() => this.handlesubmit()}>Log in</button>
                    </div>
                </div>
                <div className='Drawing_Top_header'>
                    <img src={logo} className= 'Drawing_Top_logo'/>
                    {this.state.HelloMessage}
                    <div className='Drawing_Top_button_container'>
                        <LinkButton text='explore' />
                        <LinkButton text='forum' />
                        <LinkButton text='activity' />
                        {this.state.StatusButton}
                    </div>
                    <BannerSwitch users={this.state.users} source={banner_source} />
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