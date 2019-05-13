import React, {Component} from 'react'
import TopTitle from '../components/TopTitle'
import UserInfo from '../components/UserInfo'
import UserPicItem from '../components/UserPicItem'
import '../User.css'

class User extends Component {
    render() {
        console.log("hi")
        console.log(this.props.ID)
        
        return (
            <div>
                <div className='User_head_container'>
                    <TopTitle text={this.props.NAME} />
                    <UserInfo></UserInfo>
                </div>
                
                <div className='User_no_tab'></div>
                <div className='User_body_container Drawing_Top_container'>
                    <div className='User_body_item_container'>
                        <UserPicItem></UserPicItem>
                        <UserPicItem></UserPicItem>
                        <UserPicItem></UserPicItem>
                        <UserPicItem></UserPicItem>
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default User