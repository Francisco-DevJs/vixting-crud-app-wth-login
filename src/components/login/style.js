import styled from 'styled-components';


export const Container = styled.div`
        position:absolute;  
        left:50%;
        transform: translateX(-50%);
        background-color:skyblue;
        width:20rem;
        height:24rem;
        top:9rem;
        border-radius:5%;

        h1{
            position:relative;
            margin:2rem;
        }
        form{
            position:relative;
            margin:2rem auto;
        } 

        input{
            margin:1rem auto;
            display:block;
            text-align:left;
            padding:10px;
            font-size:1rem;
        }
        button{
            color:navy;
            position:relative;
            margin:0rem 4rem;
            font-size:1.2rem;
            width:4rem;
            height:3rem;
            font-weight:bold;
        }
        
`
 