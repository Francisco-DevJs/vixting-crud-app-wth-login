import styled from 'styled-components';


export const Container = styled.div`
        position:absolute;  
        left:50%;
        transform: translateX(-50%);
        background-color:silver;
        width:20rem;
        height:auto;
        top:8rem;
        margin-bottom:9rem;
        border-radius:5%;

        h1{
            position:relative;
            margin:2rem;
        }
        form{
            position:relative;
            margin:2rem auto;
            bottom:2rem;
        } 

        input{
            margin:1rem auto;
            display:block;
            text-align:left;
            padding:10px;
            font-size:1rem;
        }
        span{
            position:relative;
            color:red;
        }
        button{
            
            color:navy;
            padding:10px;
            position:absolute;
            bottom:0.5rem;
            left:50%;
            transform: translateX(-50%);
       

            font-size:1.2rem;
            width:auto;
            height:3rem;
            font-weight:bold;
        }
        
`
 