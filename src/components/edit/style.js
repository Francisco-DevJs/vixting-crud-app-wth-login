import styled from 'styled-components';



export const Form = styled.div`
        
       
        form{
        display:flex;
        flex-direction:column;
        left:50%;
        top:auto;
        transform: translateX(-50%);
        transform: translateY(auto);
        position:absolute;
        background-color: #B4F8C8;
        border-radius:10px;
        
        box-sizing:border-box;

        -webkit-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
        -moz-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
        box-shadow: 7px 12px 14px -2px rgba(104,106,122,1); 
        max-height:100%;
        width:26rem;
        bottom:1rem;

        }
        label{
            
            font-size:1rem;
            margin:0.3rem 1rem 0.4rem 3rem;
        }
        input{
            
            /* font-size:1rem; */
            padding:3px;
            margin:0rem 3rem 0.4rem 3rem;
            font-size:1rem;

        }
    .closeBtn{
        text-align:center;
        cursor:pointer;
        position: absolute;
        width:1.2rem;
        font-size:0.8rem;
        border-radius:80px;
        border:none;
        color: white ;
        
        right:0.5rem;
        margin:0.4rem 0 0 0;
        background-color:red;
        z-index:9999;
     
      
    
    }
    .sendBtn{
        
        position:relative;
        border-radius:80px;
        border:none;
        color: white;
        text-align:center;
        left:15rem;
        width:5rem;
        height:2rem;
        font-size:1rem;
        margin:1rem;
        background-color:rgb(51, 63, 72);

    }
    .sendBtn:hover{
        cursor:pointer;
        background-color:rgb(51, 63, 90);
    
        -webkit-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
      -moz-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
      box-shadow: 10px 12px 10px -4px rgba(104,106,122,1); 

    }
    
    .errorMsg{ color:red; position:absolute; left:5rem; bottom:3rem; display:block; } 
    .editing{ 
    position:relative;
    left:50%;
        top:auto;
        transform: translateX(-50%);
        transform: translateY(auto);
    margin:0.3rem; 
    font-size:1.3rem; 
    text-align:center; 
    font-weight:bolder;
    }
`
