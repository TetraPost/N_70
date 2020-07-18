import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom';
import MainPage from '../../containers/MainPage';
import NewsPage from '../../containers/NewsPage';
import UserPage from '../../containers/UserPage';


function Header(props){
    const { isSuper } = props;
    
    return (

        <div>
        <p>{isSuper ? 'True': 'false'}</p>
        <p>Edit <code>src/App.js</code> and save to reload ааа.</p>
        <NavLink to="/">main</NavLink>
        -|-
        
        <NavLink to="/news">news</NavLink>
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/news" component={NewsPage} />
            <Route exact path="/:id" component={UserPage} />
        </Switch>
        </div>

    )
};
export default Header;