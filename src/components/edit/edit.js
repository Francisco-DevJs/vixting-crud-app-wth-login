import React, { Component } from 'react';
import {Form} from './style';
import { cpfMask } from '../../mask/cpfMask';
import { phoneNumberMask } from '../../mask/phoneNumberMask';
import loading from '../../assets/loading.gif'


export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.getAtualUser = this.getAtualUser.bind(this)
    this.editAtualUser = this.editAtualUser.bind(this)

    this.handleChange = this.handleChange.bind(this)
    this.formatedPhoneNumber = this.formatedPhoneNumber.bind(this)
    this.formatedCpf = this.formatedCpf.bind(this);
    this.formatedOnlyLetters = this.formatedOnlyLetters.bind(this);

    this.state = {
      
      email: '',
      password:'',
      firstName:'',
      lastName:'',
      phone:'',
      cpf:'',
      _id:'',
      
      isLogged:true,
      error:''
    }
  }

    componentDidMount() {
    
      this.getAtualUser(this.props.match.params.id)

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
    }


    getAtualUser(id){
      fetch('/users/' + id)
      .then(res => res.json())
      .then(res => this.setState({
      
        inativeSend: false,
        email:res.email,
        // password: '******',
        firstName:res.firstName,
        lastName:res.lastName,
        phone:res.phone,
        cpf:res.cpf,
        _id:res._id
        
      }));
    }

    handleChange = (event) => {
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
    
    formatedPhoneNumber(e){
      const validPhone = phoneNumberMask(e.target.value)
      this.setState(( { phone: validPhone } ))
    }

  
    formatedOnlyLetters(e){
    const regExp = /[^A-Za-z ]/g;
    const letter = e.target.value.replace(regExp, '');
    this.setState(( { [e.target.name]: letter } ))
    }
   
    ///---------------------------Submit----------------------------///
  
    
    editAtualUser = (event) => {
      event.preventDefault();
      const {email, password, firstName, lastName, phone, cpf, _id} = this.state
      const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      
      if(firstName === '' || lastName === '' || phone ===''){
        this.setState({ error:'*Ainda falta preencher algum campo!' })
        return false
      }
    
        if(!regExp.test(email)){
          this.setState({error: '*Email num formato inválido.'})
          return false
        }

        if(phone.length < 14){
          this.setState({error:'*Seu Numero deve conter 11 digitos.'})
          return false
      }
        
    
      const editedUser = { _id:_id, email:email, password:password, 
                          firstName: firstName, lastName:lastName, 
                          phone:phone, cpf:cpf}
      
      fetch('/user/' + _id, {
        method: 'PATCH',
        body: JSON.stringify(editedUser),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(this.setState({inativeSend: true}))
      .then(res => res.text())
      .then(res =>  alert("Editado com sucesso!!!"))
      // .then(

        this.props.history.push('/profile')
      //   )
        

    }

  renderForm(){  
    const { email, firstName, lastName, phone, cpf, inativeSend } = this.state;
    
    return(
        <Form>
         <form>
         
            
                <button onClick={ () => { this.props.history.push('/profile')} } className='closeBtn'>X</button>
            
             <label className='editing'>Editing Mode</label>
              
                <label>Email: </label>
                    <input name='email' disabled placeholder={email}></input>

                <label>Senha: </label>
                    <input name='password' disabled></input>    

                <label>CPF: </label>
                    <input name='cpf' disabled placeholder={cpf} ></input>

                <label>Primeiro Nome: </label>
                    <input name='firstName' value={firstName} onChange={ this.formatedOnlyLetters }></input>

                <label>Sobre Nome: </label>
                       <input name='lastName' value={lastName}  onChange={ this.formatedOnlyLetters }>
                    </input>


                <label>Telefone: </label>
                    <input name='phone' value={phone} onChange={ this.formatedPhoneNumber }>

                    </input>

                  
                {this.state.error && <span className='errorMsg'>{this.state.error}</span>}

         
                        <button onClick={this.editAtualUser} className='sendBtn' disabled={inativeSend}>Sendthis!</button>
            
            </form>      
        </Form>
    )
}

  render() {
    const {isLogged} = this.state
    return (
      <div>
        {console.log(isLogged)}
        {isLogged ? (
          <div>
              {this.renderForm()}
          </div>
        ):(
          <div>
              <img src={loading} alt='carregando'/>
          </div>
          )
        }
      </div>
    )
  }
}