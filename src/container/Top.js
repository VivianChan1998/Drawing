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
            pw2: '',
            Info: '',
            color: '',
            LoginID: '',
            HelloMessage: <span className='Drawing_Top_header_button'>Hello! Guest </span>,
            StatusButton: <button className='Drawing_Top_header_button status_button' onClick={() => this.jumpout('login')} >Login</button>,
            SigninButton: <button className='Drawing_Top_header_button status_button' onClick={() => this.jumpout('signin')}>Sign in</button>
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
    jumpout(i) {
        //console.log("jumpout")
        //this.setState({jumpoutwindow: {'display': 'block'}})
        //document.getElementById(i).setAttribute('class', 'NONEdisplay')
        var e = document.getElementById(i)
        if(e.classList.contains('NONEdisplay'))
            e.classList.remove("NONEdisplay")
    }
    jumpoutclose(i) {
        //this.setState({jumpoutwindow: {'display': 'none'}})
        document.getElementById(i).setAttribute('class', 'Jumpout_whole NONEdisplay')
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
            if(res === 'Success!') {
                this.setState({
                jumpoutwindow: {'display': 'none'},
                LoginID: ID,
                HelloMessage: <LinkButton text={ID} className='Drawing_Top_header_button' />,
                StatusButton: <button className='Drawing_Top_header_button status_button' onClick={() => this.logout()} >Log out</button>,
                SigninButton: <button className='Drawing_Top_header_button status_button NONEdisplay' onClick={() => this.jumpout('signin')}>Sign in</button>,
                })
                this.jumpoutclose('login')
            }
        })
    }
    callSignUpAPI() {
        let ID = this.state.id
        console.log(this.state)
        fetch('http://localhost:3001/appendUserInfo', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: ID,
                pw: this.state.pw,
                pw2: this.state.pw2,
                info: this.state.Info,
                color: this.state.color
            })
        })
        //.then(res => res.text())
        //.then(res => console.log(res))
        .catch(err => console.log(err))
    }
    logout() {
        this.setState({
            LoginID: '',
            HelloMessage: <span className='Drawing_Top_header_button'>Hello! Guest </span>,
            StatusButton: <button className='Drawing_Top_header_button status_button' onClick={() => this.jumpout('login')} >Login</button>,
            SigninButton: <button className='Drawing_Top_header_button status_button' onClick={() => this.jumpout('signin')}>Sign in</button>
        })
    }
    handlesubmit(i) {
        //console.log(this.state)
        if(i==='login')this.callSendLoginAPI()
        else if(i==='signin') this.callSignUpAPI()
        this.setState({
            id:'',
            pw:'',
            pw2: '',
            Info: '',
            color: '',
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
                <div className='Jumpout_whole NONEdisplay' id='login'>
                    <div className='Jumpout_window'>
                        <button className='Jumpout_x' onClick={() => this.jumpoutclose('login')}>X</button>
                        <img src={logo} />
                        <div>
                            <h5>ID</h5>
                            <input name='id' value={this.state.id} onChange={(evt)=>this.handleInput(evt)}></input>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input name='pw'value={this.state.pw} onChange={(evt)=>this.handleInput(evt)} style={{'font-family':'password'}}></input>
                        </div>
                        
                        <button className='Jumpout_submit' onClick={() => this.handlesubmit('login')}>Log in</button>
                    </div>
                </div>
                <div className='Jumpout_whole NONEdisplay' id='signin'>
                    <div className='Jumpout_window'>
                        <button className='Jumpout_x' onClick={() => this.jumpoutclose('signin')}>X</button>
                        <img src={logo} />
                        <div>
                            <h5>ID</h5>
                            <input name='id' value={this.state.id} onChange={(evt)=>this.handleInput(evt)}></input>
                        </div>
                        <div>
                            <h5>Password</h5>
                            <input name='pw'value={this.state.pw} style={{'font-family':'password'}}onChange={(evt)=>this.handleInput(evt)}></input>
                        </div>
                        <div>
                            <h5>Password again</h5>
                            <input name='pw2'value={this.state.pw2} style={{'font-family':'password'}} onChange={(evt)=>this.handleInput(evt)}></input>
                        </div>
                        <div>
                            <h5>Info</h5>
                            <input name='Info'value={this.state.Info} onChange={(evt)=>this.handleInput(evt)}></input>
                        </div>
                        <div>
                            <h5>background color </h5>
                            <a href='https://www.ifreesite.com/color/'>reference this~</a>
                            <input name='color'value={this.state.color} onChange={(evt)=>this.handleInput(evt)}></input>
                        </div>
                        
                        <button className='Jumpout_submit' onClick={() => this.handlesubmit('signin')}>Sign up</button>
                    </div>
                </div>
                <div className='Drawing_Top_header'>
                    <img src={logo} className= 'Drawing_Top_logo'/>
                    <div className='Drawing_Top_button_container'>
                        {this.state.SigninButton}
                        {this.state.StatusButton}
                        <LinkButton text='activity' />
                        <LinkButton text='forum' />
                        <LinkButton text='explore' />
                        {this.state.HelloMessage}
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
                                <User ID={e.ID} NAME={e.NAME} LOGIN={this.state.LoginID}></User>
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