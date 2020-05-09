import React from "react";
import styles from './Drawer.module.scss';
import Backdrop from "../../Backdrop/Backdrop";

const links = [1,2,3]

export default class Drawer extends React.Component {
    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <a href="#">Link {link}</a>
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