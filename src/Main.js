import React, { Component } from 'react';
import {Link} from 'react-router'
import Footer from './components/footer';
// import ReactTooltip from 'react-tooltip'

//STYLES
import './reset.css';
import './hover.css'
import './Main.css';

//MEDIA
import bag from "./media/shopping-bag.svg";
import user from "./media/avatar.svg"

class UserItems extends Component {
    render() {
        return (
            <div className="user-items">
                <Link to="/your-bag"><img className="bag" src={bag} alt="shopping bag"/></Link>
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
                    <Link to="/pasta" style={{textDecoration: 'none', color: 'inherit'}}><div className="hvr-underline-from-center">Pasta</div></Link>
                    <Link to="/bread" style={{textDecoration: 'none', color: 'inherit'}}><div className="hvr-underline-from-center">Bread</div></Link>
                    <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}><div className="hvr-underline-from-center">About</div></Link>
                    <Link to="/contact" style={{textDecoration: 'none', color: 'inherit'}}><div className="hvr-underline-from-center">Contact</div></Link>
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
