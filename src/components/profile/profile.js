import React, { Component } from 'react';
import {ContainerCard} from './style';
import {Link} from 'react-router-dom';
import loading from '../../assets/loading.gif';

export default class Profile extends Component {
  constructor() {
    super();
    this.deleteUser = this.deleteUser.bind(this)
    this.state = {
      users:[],
      email: '',
      password:'',
      atualId:'',
      
      isLogged:false,
      deletePopUp:false
    }
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(res => this.setState({
        users:res,
        email: res.email,
        password: ''
      }));


      fetch('/checkToken')
      .then(res => {
        if (res.status === 200) {
          this.setState({ isLogged: true })
        } else {
          this.setState({isLogged: !this.state.isLogged})
          console.log(res.error)
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ isLogged: !this.state.isLogged});
      });

  }


  deleteUser = id => {
    fetch(`/user/${id}`, {
    method: 'DELETE'
    })
    .then(alert('Deletado com sucesso!'), 
    window.location.reload(false))
   
    .catch(err => {
        console.error(err);
        alert('Error! try again later');
    });
}

  render() {
      const {users, isLogged} = this.state
      
      return (
        <div>
       

        {isLogged ? (
          <ContainerCard>
          {users.length === 0 && <div><h2>Nenhum registro encontrado.</h2></div>}
          {users.map((user, index) => (
             <div className='card' key={index}>
               
                <ul>
                  <li >
                    <strong>Nome:</strong> {`${user.firstName}  ${user.lastName}`}
                  </li>
                  <li>
                    <strong>Email:</strong> {user.email} 
                  </li>
              
                <Link to={"/users/" + user._id}>
                 <button className="editBtn">
                     Edit
                 </button>
                </Link>

                  <button onClick={() => {this.deleteUser(user._id)}} 
                                        className='deleteBtn'>Delete</button>
                                      

              
                
{/* 
                    {deletePopUp && 
                  <div className='deletePopUp'>
                      <span>Deseja excluir?</span>
                      <button className='goBackBtn' onClick={() => {this.setState({ deletePopUp:false})}}>Back</button>
                      <button onClick={this.deleteUser.bind(this,user._id) }
                              className='realDelete'>Delete</button>
                  </div>} */}
                </ul>  
              </div>
          ))}
          
        </ContainerCard>


        ):(

          <div>
            <img src={loading} alt='carregando'style={{left:"50%",position:"absolute", zIndex:"999", transform:"translateX(-50%)"}}/>
          </div>
        )}
        
       

      </div>
      

    );
  }
}