import React, {Component} from 'react'
import img from '../img/Juice/5.png'


class UserPicItem extends Component {
    click() {
        console.log("clickkk")
    }
    render() {
        
        return(
            <div className='User_PicItem' onClick={this.props.onClick}>
                <div className='User_PicItem_imgcontainer'>
                    <img src={this.props.source} onClick={() => this.click()}></img>
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