import React, {Component} from 'react'
import img from '../img/Juice/5.png'


class UserPicItem extends Component {
    render() {
        return(
            <div className='User_PicItem'>
                <div className='User_PicItem_imgcontainer'>
                    <img src={img}></img>
                </div>
                <div className='User_PicItem_text'>
                    <h5> Title </h5>
                    <p>yooooooo</p>
                </div>
            </div>
        )
    }
}

export default UserPicItem;