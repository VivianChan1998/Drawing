import React, {Component} from 'react'
import '../Explore.css'
import ExploreItem from '../components/ExploreItem'
import TopTab from '../components/TopTabs'
import TopTitle from '../components/TopTitle'


class Explore extends Component {
    render() {
        var title = {
            'filter': 'drop-shadow(-0px -0px 10px rgba(122, 60, 86, 0.877) )'
        }
        return (
            <div>
                <TopTitle text='Creators and their fantastic arts!' style={title}/>
                <TopTab />
                <div className='Explore_container Drawing_Top_container' >
                    <h2>NEWEST POSTS!</h2>
                    <ul className='Explore_body_list'>
                        <ExploreItem />
                        <ExploreItem />
                        <ExploreItem />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Explore