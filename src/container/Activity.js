import React, {Component} from 'react'
import TopTab from '../components/TopTabs'
import TopTitle from '../components/TopTitle'
import '../Activity.css'
import notdoneImg from '../img/notdone.png'

class Activity extends Component {
    render() {
        return  (
            <div>
                <TopTitle text='Join and meet new friends!' />
                <TopTab />
                <div className='Activity_container Drawing_Top_container' >
                    <div className='section_not_complete'>
                        <img src={notdoneImg}></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default Activity