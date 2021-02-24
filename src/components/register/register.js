import React, { Component } from 'react';
import {Container} from './style';
import { cpfMask } from '../../mask/cpfMask';
import { phoneNumberMask } from '../../mask/phoneNumberMask';

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.formatedCpf = this.formatedCpf.bind(this);
    this.formatedPhone = this.formatedPhone.bind(this);
    this.formatedOnlyLetters = this.formatedOnlyLetters.bind(this);

    this.state = {
      email : '',
      password: '',
      firstName:'',
      lastName:'',
      phone:'',
      cpf:'',

      error:''
     
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }


  ///--------------------------formated-input---------------------///
  formatedCpf(e){
    const validCpf = cpfMask(e.target.value)
    this.setState(( { cpf: validCpf } ))
  }
  formatedPhone(e){
    const validPhone = phoneNumberMask(e.target.value)
    this.setState(( { phone: validPhone } ))
  }

  formatedOnlyLetters(e){
  const regExp = /[^A-Za-z ]/g;
  const letter = e.target.value.replace(regExp, '');
  this.setState(( { [e.target.name]: letter } ))
  }
 
  ///---------------------------Submit----------------------------///

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password, firstName, lastName, phone, cpf } = this.state;
    const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(email === '' || password === '' || firstName === '' || lastName === '' || phone ==='' || cpf === '' ){
        this.setState({ error:'*Ainda falta preencher algum campo!' })
      return false
    }
    if(cpf.length < 14){
        this.setState({error:'*Seu CPF deve conter 11 digitos.'})
        return false
    }
    if(phone.length < 14){
        this.setState({error:'*Seu Numero deve conter 11 digitos.'})
        return false
    }
  
    if(!regExp.test(email)){
      this.setState({error: '*Email num formato inválido.'})
      return false
    }




    fetch(`/user/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        cpf:this.state.cpf
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        
        alert('Você foi registrado com Sucesso!!!')
        this.props.history.push('/profile')
        
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Algum problema ao fazer Login!');
    });
  }


  render() {
    return (
      <div>
        <Container>

        <form onSubmit={this.onSubmit}>
          <h1>Novo Usuario</h1>
          <input type="email" name="email" placeholder="Digite seu Email" value={this.state.email} 
                 onChange={this.handleInputChange} required/>

          <input type="password" name="password" placeholder="Senha" value={this.state.password} 
                 onChange={this.handleInputChange} required/>

          <input type="text" name="firstName" placeholder="Primeiro Nome" value={this.state.firstName} 
                 onChange={this.formatedOnlyLetters} />

          <input type="text" name="lastName" placeholder="Sobre Nome" value={this.state.lastName} 
                 onChange={this.formatedOnlyLetters} />

          <input type="text" name="phone" placeholder="00-0000-0000" value={this.state.phone} 
                 onChange={this.formatedPhone} />

          <input type="text" name="cpf" placeholder="000.000.000-00" value={this.state.cpf} 
                 onChange={this.formatedCpf} />
             {this.state.error && <span className='error'>{this.state.error}</span>}

         
        </form>
          <button onClick={this.onSubmit}>Registrar!</button>
        {console.log(this.state.password, this.state.email, 'aquiii.')}
      </Container>
    </div>
    );
}
}