import React, {Component} from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router'
import Banner from '../components/Banner'
var default_banner = "https://i.imgur.com/Nr4BUhX.png";

class BannerSwitch extends Component {
    render(){
        //console.log("SSSs", this.props.source)
        if(this.props.default) {
            return(
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to='/explore'></Redirect>
                    )} />
                    {this.props.users.map(e =>
                        <Route path={"/" + e.NAME}>
                            <Banner source={default_banner}/>
                        </Route>
                    )}
                    <Route path="/explore">
                        <Banner source={default_banner}/>
                    </Route>
                    <Route path="/forum">
                        <Banner source={default_banner}/>
                    </Route>
                    <Route path="/activity">
                        <Banner source={default_banner}/>
                    </Route>
                </Switch>

            )
        }
        else {
            let s = this.props.source.imgURLs
            return(
                <Switch>
                    <Route exact path="/" render={() => (
                        <Redirect to='/explore'></Redirect>
                    )} />
                    {this.props.users.map(e =>
                        <Route path={"/" + e.NAME}>
                            <Banner source={s[e.NAME]}/>
                        </Route>
                    )}
                    <Route path="/explore">
                        <Banner source={s["Explore"]}/>
                    </Route>
                    <Route path="/forum">
                        <Banner source={s["Forum"]}/>
                    </Route>
                    <Route path="/activity">
                        <Banner source={s["Activity"]}/>
                    </Route>
                </Switch>
            )
        }
    }
}

export default BannerSwitch;

