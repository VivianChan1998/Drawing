import React, {Component} from 'react'
import banner from '../img/banner1.png'

class Banner extends Component {
    render() {
        return(
            <div className='Drawing_Top_banner'>
                <img src={banner}></img>
            </div>
        )
    }
}

export default Banner;