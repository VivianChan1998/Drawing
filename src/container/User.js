import React, {Component} from 'react'
import TopTitle from '../components/TopTitle'
import UserInfo from '../components/UserInfo'
import UserPicItem from '../components/UserPicItem'
import '../User.css'

class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            img_list: []
        }
    }

    callAPI(){
        fetch("http://localhost:3001/getImg/"+this.props.NAME)
            .then(res => res.text())
            .then(res => JSON.parse(res))
            //.then(res => console.log(res[]))
            .then(res => this.setState({img_list: res}))
            .catch(err => err)
        console.log("callAPIIII")
    }
    componentWillMount() {
        this.callAPI();
    }

    render() {
        return (
            <div>
                <div className='User_head_container'>
                    <TopTitle text={this.props.NAME} />
                    <UserInfo></UserInfo>
                </div>
                
                <div className='User_no_tab'></div>
                <div className='User_body_container Drawing_Top_container'>
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