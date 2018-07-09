import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand">Brand</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home <span className="sr-only">(current)</span></Link></li>
                            <li><Link to="/addcourse">Add Course</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/welcome">Welcome</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">API Exercises <span className="caret" /></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link to="/user">User API</Link></li>
                                    <li><Link to="/photos">Photos API</Link></li>
                                    <li><Link to="/todo">To-Do API</Link></li>
                                    <li><Link to="/soccer">Soccer Player Database</Link></li>
                                    <li><Link to="/indexbtc">Bitcoin Conversion API</Link></li>
                                    <li><Link to="/weather">Weather</Link></li>
                                    <li><Link to="/exerciseAPI">exerciseAPI</Link></li>
                                    <li><Link to="/APIexercise">API Exercise</Link></li>
                                    <li><Link to="/WorldCup">World Cup API</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown Exercises <span className="caret" /></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><Link to="/dropdown">Dropdown</Link></li>
                                    <li><Link to="/dropdown2">Dropdown 2</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-left" role="search">
                            <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search" />
                            </div>
                            <button type="submit" className="btn btn-default">Submit</button>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a>Link</a></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Header;