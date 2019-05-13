import React, {Component} from 'react'
import '../Explore.css'
import ExploreItem from '../components/ExploreItem'
import TopTab from '../components/TopTabs'
import TopTitle from '../components/TopTitle'


class Explore extends Component {
    render() {
        return (
            <div>
                <TopTitle text='Creators and their fantastic arts!' />
                <TopTab />
                <div className='Explore_container Drawing_Top_container' >
                    <h2>NEWEST POSTS!</h2>
                    <ul className='Explore_body_list'>
                        <ExploreItem />
                        <ExploreItem />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Explore