import styled from 'styled-components';

export const Navigator = styled.div`


        display:flex;
        justify-content:space-between;
        align-items:center;
        padding: 30px 10%;
        font-size:1.5rem;

        -webkit-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
      -moz-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
      box-shadow: 7px 4px 14px -2px rgba(104,106,122,1); 
      

        .navLinks{  
            list-style:none;
        }
        .navLinks li {
          color:skyblue;
          font-weight: bolder;
          display:inline-block;
          padding:0px 20px;
          list-style:none;
        }
        .navLinks li:visited{
            color:silver
        }
        .navLinks li:hover{  
            cursor: pointer;
            color:#2351ba;
        }
        img{
            width:60%;
            height:60%;
            padding:0;
            margin:0;
        }




`