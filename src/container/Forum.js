import React, {Component} from 'react'
import TopTab from '../components/TopTabs'
import TopTitle from '../components/TopTitle'
import '../Forum.css'
import notdoneImg from '../img/notdone.png'

class Forum extends Component {
    render() {
        var title = {
            'filter': 'drop-shadow(-0px -0px 10px rgba(60, 74, 122, 0.877) )'
        }
        return  (
            <div>
                <TopTitle text='Discuss skills and fun things' style={title}/>
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