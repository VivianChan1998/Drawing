import React, {Component} from 'react'
import TopTab from '../components/TopTabs'
import TopTitle from '../components/TopTitle'
import '../Activity.css'
import notdoneImg from '../img/notdone.png'

class Activity extends Component {
    render() {
        var title = {
            'filter': 'drop-shadow(-0px -0px 10px rgba(120, 60, 122, 0.877) )'
        }
        return  (
            <div>
                <TopTitle text='Join and meet new friends!' style={title}/>
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