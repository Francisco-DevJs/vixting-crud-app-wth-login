import React, {Component} from "react";
import logo from '../../assets/logo.png'
import { Navigator } from './style';
import {NavLink, Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from "../home.js";
import Register from "../register/register";
import Login from "../login/login";
import Edit from "../edit/edit";
import Profile from "../profile/profile";

export default class Header extends Component {
  constructor(props){
    super(props)
    this.state = {
        isLogged:false,
        user:''
    }
  }


  componentDidMount() {
    fetch('/checkToken')
    .then(res => {
      if (res.status === 200) {
        this.setState({ isLogged: true })
      } else {
        this.setState({isLogged: false})
        console.log(res.error)
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      this.setState({ isLogged: false});
    });

    fetch('/user/profile')
    .then(res => res.json())
    .then(res => this.setState({
      user: res,
      password: ''
    }));





  }


  logout = () => {
    fetch('/user/logout')
    .then(res => {
      if (res.status === 200) {
        alert('Logged Out')
        window.location.href='/'
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
  }
  
  
  render(){
    const {isLogged, user} = this.state

    return(
      <div>
       
      <BrowserRouter>

       
      <Navigator> 
        <NavLink to='/home'>
          <img
          src={logo}
          alt="Logo"/>
          
        </NavLink>         

  
        <div>

            <nav>
                <ul className='navLinks'>

                  <NavLink to="/home">
                    <li>Home</li>
                  </NavLink>  
                  <NavLink to="/profile">
                    <li>Profile</li>
                  </NavLink>  
                  <NavLink to="/register">
                    <li>Register</li>
                  </NavLink>  

                  {!isLogged ? (
                  <NavLink to="/login">
                    <li>Login</li>
                  </NavLink>  

                  ):(
                    
                  <NavLink to="/logout">
                    <li onClick={this.logout}>Logout</li>
                  </NavLink>  
                  )}
                </ul>
            </nav>
  
        </div>
      </Navigator>
        {!isLogged? (
          
          null
          ):(
            console.log(user),
            <span style={{fontSize:"1.4rem"}}>Olá, {user.email}.</span>
        )}
        
      <Switch>
        <Route exact path={['/home', '/']} component={Home}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/profile' component={Profile}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route path='/users/:id' component={Edit}></Route>
      </Switch>
     
    </BrowserRouter>
      
           

    </div>  


    )

  }
}