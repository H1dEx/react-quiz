import React from "react";
import styles from './Drawer.module.scss';
import {NavLink} from 'react-router-dom';
import Backdrop from "../../Backdrop/Backdrop";

export default class Drawer extends React.Component {
    renderLinks(links) {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink to={link.to}
                             exact={link.exact}
                             activeClassName={styles.active}
                             onClick={this.props.onToggle}
                    >{link.label}</NavLink>
                </li>
            )
        })
    }

    render() {
        console.log(this.props);
        const cls = [styles.Drawer];
        if (!this.props.isOpen) cls.push(styles.close);
        const links = [
            {to: '/', label: 'List', exact: true},
        ]
        if (this.props.isAuthenticated) {
            links.push({to: '/quiz-creator', label: 'Create test', exact: false});
            links.push({to: '/logout', label: 'Exit', exact: false});
        } else {
            links.push({to: '/auth', label: 'Authorize', exact: false})
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClick={this.props.onToggle}/> : null}
            </React.Fragment>
        )
    }
}