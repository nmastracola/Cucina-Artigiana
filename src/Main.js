import React, { Component } from 'react';
import {Link} from 'react-router'
import Footer from './components/footer';
import ReactTooltip from 'react-tooltip'

//STYLES
import './reset.css';
import './Main.css';

//MEDIA
import bag from "./media/shopping-bag.svg";
import user from "./media/avatar.svg"

class UserItems extends Component {
    render() {
        return (
            <div className="user-items">
                <img className="bag" src={bag} alt="shopping bag"/>
                <a data-tip="React-tooltip"><img className="user" src={user} alt="user"/></a>
            </div>
        )
    }
}


class Header extends Component {
    render() {
        return (
            <nav className="mainHeader">
                <div className="header-components">
                <div className="logo"><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Cucina Artigiana</Link></div>
                <div className="links">
                    <Link to="/pasta" style={{textDecoration: 'none', color: 'inherit'}}>Pasta</Link>
                    <Link to="/bread" style={{textDecoration: 'none', color: 'inherit'}}>Bread</Link>
                    <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>About</Link>
                    <Link to="/contact" style={{textDecoration: 'none', color: 'inherit'}}>Contact</Link>
                </div>
                <UserItems />
                </div>
            </nav>
        )
    }
}

class Main extends Component {
  render() {
    return (
        <div>
            <Header />
              {this.props.children}
            <Footer />
        </div>
    );
  }
}

export default Main;
