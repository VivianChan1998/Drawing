import React, {Component} from 'react'
import TopTitle from '../components/TopTitle'
import UserInfo from '../components/UserInfo'
import UserPicItem from '../components/UserPicItem'
import '../User.css'
import axios from 'axios'


class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            img_list: [],
            info: {},
            style: {},
            style_title_dropshadow: {},
            upload_button: '',
            login_id: this.props.LOGIN,
            file: null,
            newpost_src: null,
            newpost_title: '',
            newpost_content: '',
            display: ''
        }
    }
    setStyle(){
        var temp = {
            'background': this.state.info.Style.bg
        }
        this.setState({style: temp})
    }
    getImg(){
        console.log("getImg")
        fetch("http://localhost:3001/getImg/" + this.props.NAME)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            //.then(res => console.log(res[]))
            .then(res => {
                this.setState({img_list: res})
                console.log("got imgs")
            })
            .then(() => this.render())
            .catch(err => err)
        
    }
    getUserInfo() {
        fetch("http://localhost:3001/getUserInfo/" + this.props.NAME)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            .then(res => this.setState({
                info: res,
                style_no_tab: {
                    'background': 'linear-gradient(180deg, rgba(231, 110, 110, 0) ,' + res.Style.bg + ')'
                },
                style_bg :{
                    'background': 'linear-gradient(180deg, ' + res.Style.bg + ',rgb(40, 40, 40))'
                },
                style_title_dropshadow: {
                    'filter': 'drop-shadow(-0px -0px 10px'+ res.Style.bg +')'
                }
            }))
    }
    componentWillMount() {
        this.getImg();
        this.getUserInfo();
    }

    jumpoutclose(i) {
        //this.setState({jumpoutwindow: {'display': 'none'}})
        document.getElementById(i).setAttribute('class', 'NONEdisplay User_jumpout')
    }

    jumpout(i) {
        //console.log("jumpout")
        //this.setState({jumpoutwindow: {'display': 'block'}})
        //document.getElementById(i).setAttribute('class', 'NONEdisplay')
        var e = document.getElementById(i)
        if(e.classList.contains('NONEdisplay'))
            e.classList.remove("NONEdisplay")
    }

    checkLogin() {
        let n = this.props.NAME
        let l = this.props.LOGIN
        console.log(this.props.NAME)
        console.log(this.props.LOGIN)
        console.log(n===l)
        if(this.props.NAME === this.props.LOGIN) {
            console.log('verified')
            this.setState({
                upload_button: <button onClick={() => this.jumpout('upload')}>upload</button>
            })
        }
    }

    fileSelectHandler = event => {
        this.setState({
            file: event.target.files[0]
        })
        console.log(event.target.files[0])
    }
    newpostTitleHandler = e => {
        this.setState({
            newpost_title: e.target.value
        })
    }

    newpostContentHandler = e => {
        this.setState({
            newpost_content: e.target.value
        })
    }

    fileUploadHandler = event => {
        let src = ''
        let newpost = {}
        const fd = new FormData();
        fd.append('image', this.state.file);
        fetch('https://api.imgur.com/3/upload.json', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + 'e6b02eb90d171d600a17f5b283303a9fb9368a83'
            },
            body: fd
        })
        .then(res => res.json())
        .then(res => {
            newpost = {
                ID: this.props.NAME,
                title: this.state.newpost_title,
                content: this.state.newpost_content,
                source: res.data.link
            }
            console.log(newpost);
        })
        .then(() => {
            fetch('http://localhost:3001/appendUserImg/', {
                method: 'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newpost)
            })
            .then(res => res.text())
            .then(res => console.log(res))
            .then(() => {
                this.jumpoutclose('upload')
            })
            .then(() => {
                this.getImg();
            })
            .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
    }
    //Client ID
    //89a2dac9e0890fc
    //Client secret
    //97517fdea6ee3243d4f3630fb81d40929b742bdf
    //token
    //315360000
    displayImg(src){
        this.setState({display: src})
        this.jumpout('display')
    }

    render() {
        //console.log(this.state.img_list)
        var own_interface = {
            upload_button: ''
        };
        if(this.props.NAME === this.props.LOGIN) {
            own_interface = {
                upload_button: <button onClick={() => this.jumpout('upload')}>upload</button>
            }
        }
        return (
            <div>
                <div className='NONEdisplay User_jumpout' id='display' >
                    <div className='Jumpout_window User_jumpoutWindow'>
                        <button className='Jumpout_x' onClick={() => this.jumpoutclose('display')}>X</button>
                        <img src={this.state.display}></img>
                    </div>
                </div>

                <div className='NONEdisplay User_jumpout' id='upload' >
                    <div className='Jumpout_window User_jumpoutWindow'>
                        <button className='Jumpout_x' onClick={() => this.jumpoutclose('upload')}>X</button>
                        <div>
                            <h5>Title</h5>
                            <input name='Title' onChange={this.newpostTitleHandler} ></input>
                        </div>
                        <div>
                            <h5>Content</h5>
                            <input name='Content' onChange={this.newpostContentHandler} style={{'font-family':'password'}}></input>
                        </div>

                        <div>
                            <h5>Select file</h5>
                            <input type='file' onChange={this.fileSelectHandler}></input>
                        </div>

                        <button className='Jumpout_submit' onClick={this.fileUploadHandler}>upload</button>
                    </div>
                </div>
                
                <div className='User_head_container'>
                    {own_interface.upload_button}
                    <TopTitle text={this.props.NAME} style={this.state.style_title_dropshadow}/>
                    <UserInfo text={this.state.info.Info} />
                </div>
                
                <div className='User_no_tab' style={this.state.style_no_tab}></div>
                <div className='User_body_container Drawing_Top_container' style={this.state.style_bg} >
                    <div className='User_body_item_container'>
                        {
                            this.state.img_list.slice(0).reverse().map(
                                imgURL => <UserPicItem source={imgURL["source"]} 
                                                        title={imgURL["title"]} 
                                                        content={imgURL["content"]}
                                                        onClick={() => this.displayImg(imgURL["source"])}
                                                        /> 
                            )
                        }
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default User