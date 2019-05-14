import React,{Component} from 'react'


class UserInfo extends Component {
    render() {
        return(
            <div className='User_info_container'>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default UserInfo;