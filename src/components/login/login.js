import React, { Component } from 'react';
import {Container} from './style';

export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    fetch(`/user/login`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
       
        this.props.history.push('/profile')
        window.location.reload(false)
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Erro ao fazer login');
    });
  }


  render() {
    return (
      <div>
        <Container>

        <form onSubmit={this.onSubmit}>
          <h1>Faça Seu Login!</h1>
          <input
            type="email"
            name="email"
            placeholder="email@example.com"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
            />
          <input
            type="password"
            name="password"
            placeholder="*******"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
            />
            <button>Login</button>
          
        </form>
        </Container>
      </div>
    );
}
}