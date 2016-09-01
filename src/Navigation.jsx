import React from 'react';
import NavLink from './NavLink';
import { IndexLink } from 'react-router';
import styles from './Navigation.scss';

export default React.createClass({
    render() {
        return <div>
            <ul role="nav">
                <li><NavLink to="/">Start (always active)</NavLink></li>
                <li><NavLink to="/" onlyActiveOnIndex={true}>Start (onlyActiveOnIndex)</NavLink></li>                                
                <li><IndexLink to="/" activeClassName={styles.active}>Start (indexlink)</IndexLink>                
                    <ul>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/repos">Repos</NavLink></li>
                    </ul>
                </li>
                <li><NavLink to="/counter">Counter</NavLink></li>
            </ul>
        </div>
    }
})