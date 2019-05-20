import React, {Component} from 'react'
import TopTitle from '../components/TopTitle'
import UserInfo from '../components/UserInfo'
import UserPicItem from '../components/UserPicItem'
import '../User.css'


class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            img_list: [],
            info: {},
            style: {},
            style_title_dropshadow: {},
            upload_button: '',
            login_id: this.props.LOGIN
        }
    }
    setStyle(){
        var temp = {
            'background': this.state.info.Style.bg
        }
        this.setState({style: temp})
    }
    callAPI(){
        fetch("http://localhost:3001/getImg/" + this.props.NAME)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            //.then(res => console.log(res[]))
            .then(res => this.setState({img_list: res}))
            .catch(err => err)
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
        this.callAPI();
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

    render() {
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
                <div className='NONEdisplay User_jumpout' id='upload' >
                    <div className='Jumpout_window User_jumpoutWindow'>
                        <button className='Jumpout_x' onClick={() => this.jumpoutclose('upload')}>X</button>
                        <div>
                            <h5>Title</h5>
                            <input name='Title' value='' ></input>
                        </div>
                        <div>
                            <h5>Content</h5>
                            <input name='Content' value='' style={{'font-family':'password'}}></input>
                        </div>

                        <button className='Jumpout_submit' >Log in</button>
                    </div>
                </div>
                
                <div className='User_head_container'>
                    {own_interface.upload_button}
                    <TopTitle text={this.props.NAME} style={this.state.style_title_dropshadow}/>
                    <UserInfo text={this.state.info.Info} />
                </div>
                
                <div className='User_no_tab' style={this.state.style_no_tab}></div>
                <div className='User_body_container Drawing_Top_container' style={this.state.style_bg}>
                    <div className='User_body_item_container'>
                        {
                            this.state.img_list.map(
                                imgURL => <UserPicItem source={imgURL["source"]} title={imgURL["title"]} content={imgURL["content"]}/> 
                            )
                        }
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default User