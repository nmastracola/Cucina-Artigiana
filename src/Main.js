import React, { Component } from 'react';
import {Link} from 'react-router'
import Footer from './components/footer';

//STYLES
import './reset.css';
import './Main.css';

//MEDIA
import bag from "./media/shopping-bag.svg";
import user from "./media/avatar.svg"


class Header extends Component {
    render() {
        return (
            <nav className="mainHeader">
                <div className="linkContainer">
                    <div className="logo"><Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>CA</Link></div>
                    <div className="links">
                        <p><Link to="/pasta" style={{textDecoration: 'none', color: 'inherit'}}>Pasta</Link></p>
                        <p><Link to="/bread" style={{textDecoration: 'none', color: 'inherit'}}>Bread</Link></p>
                        <p><Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>About</Link></p>
                        <p><Link to="/contacts" style={{textDecoration: 'none', color: 'inherit'}}>Contact</Link></p>
                        <img className="bag" src={bag} alt="shopping bag"/>
                        <img className="user" src={user} alt="user"/>
                    </div>
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
