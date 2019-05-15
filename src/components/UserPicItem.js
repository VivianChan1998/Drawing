import React, {Component} from 'react'
import img from '../img/Juice/5.png'


class UserPicItem extends Component {
    render() {
        
        return(
            <div className='User_PicItem'>
                <div className='User_PicItem_imgcontainer'>
                    <img src={this.props.source}></img>
                </div>
                <div className='User_PicItem_text'>
                    <h5>{this.props.title}</h5>
                    <p>{this.props.content}</p>
                </div>
            </div>
        )
    }
}

export default UserPicItem;