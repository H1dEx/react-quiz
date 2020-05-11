import React from "react";
import styles from './Drawer.module.scss';
import {NavLink} from 'react-router-dom';
import Backdrop from "../../Backdrop/Backdrop";

const links = [
    { to: '/', label: 'List', exact: true },
    { to: '/auth', label: 'Authorize', exact: false },
    { to: '/quiz-creator', label: 'Create test', exact: false },
    ]

export default class Drawer extends React.Component {
    renderLinks() {
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
        const cls = [styles.Drawer];
        if (!this.props.isOpen) cls.push(styles.close);
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                {this.props.isOpen? <Backdrop onClick={this.props.onToggle}/> : null}
            </React.Fragment>
        )
    }
}