import React, {Component} from 'react'
import TopTab from '../components/TopTabs'
import TopTitle from '../components/TopTitle'
import '../Forum.css'
import notdoneImg from '../img/notdone.png'

class Forum extends Component {
    render() {
        return  (
            <div>
                <TopTitle text='Discuss skills and fun things' />
                <TopTab />
                <div className='Forum_container Drawing_Top_container' >
                    <div className='section_not_complete'>
                    <img src={notdoneImg}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Forum