import styled from 'styled-components';


export const ContainerCard = styled.div`

  
position:relative;



    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    /* min-width:auto;
    max-width:30rem; */
    /* width:auto; */
    top:4rem;
    margin-bottom:10rem;
    left:50%;
    transform:translateX(-50%);
    /* max-height:12rem; */
    /* width:60rem; */
    /* height:20rem; */
    span{
        font-size:1rem;
        font-weight:bold;
    }
    .card{
        width:40rem;
        margin-bottom:0.5rem;
       
        flex: 1 25% 25%;
        
        position:relative;
        box-sizing:border-box;
        background-color:#B4F8C8;
        
        border-radius:10px;
        
        margin-top:3rem;
        margin-bottom:2rem;
        margin-left:1rem;
        margin-right:1rem;
        bottom:1rem;
        
        
        -webkit-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
        -moz-box-shadow: 7px 12px 14px -2px rgba(104,106,122,1);
        box-shadow: 7px 12px 14px -2px rgba(104,106,122,1); 
        
        
        
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7; 
        -webkit-box-orient: vertical;
        
        
    }
    
    
    .card ul{
        
        position: relative;
        list-style:none;
        margin:1rem 0rem 4rem 0;    
        display:block;
    }  
    .card li{
        position:relative;
        display:block;
        font-size:1.2rem;
        margin:0.6rem 0 1rem 1rem;
        
        
        
    }
    
    
    /* ---Buttons--- */
    .editBtn{
        font-size:1rem;
        width:3rem;
        height:2rem;
        margin-left:1rem;   
        background-color:green;
        color:silver;
        border:none;
        border-radius:4px;

        
    }
    .editBtn:hover{
        background-color:#45ff48;
        color:white;
        cursor: pointer;
        box-shadow:4px 3px 2px black;
    }
    .deleteBtn{
        width:3rem;
        height:2rem;
        margin-left:1rem;   
        font-size:1rem;
        background-color:#c91c1c;
        color:silver;
        border:none;
        border-radius:4px;
        
    }
    .deleteBtn:hover{
        color:white;
        cursor: pointer;
        background-color:red;
        box-shadow:4px 3px 2px black;
    }
    .deleteBtn:active{
        box-shadow:1px 1px 4px black;

    }
    .deletePopUp{
        width:200px;
        height:100px;
        background-color:#41729F;
        position:absolute;
        z-index:9999;
        left:50%;
        top:2rem;
        transform:translate(-50%,-50%);
        border-radius:10px;

    }
    .deletePopUp span{
        position:absolute;
        font-size:1.2rem;
        margin-top:1rem;
        margin-left:0.2rem;
        color:snow;
        z-index:999;
    }
    .goBackBtn{
        width:3rem;
        height:2rem;
        text-align:center;
        font-size:1rem;
        background-color:silver;
        color:#050A30;
        border:none;
        border-radius:4px;
        position:absolute;
        bottom:1rem;
        margin-left:0.4rem;


    }
    .goBackBtn:hover{
        color:#274472;
        cursor: pointer;
        background-color:snow;
        box-shadow:4px 3px 2px black;
    }
    .realDelete{
        width:3rem;
        height:2rem;
        margin-left:1rem;   
        font-size:1rem;
        background-color:red;
        color:silver;
        border:none;
        border-radius:4px;
        position:absolute;
        bottom:1rem;
        margin-left:4.2rem;

    }
    .realDelete:hover{

        color:snow;
        cursor: pointer;
        background-color:red;
        box-shadow:4px 3px 2px black;

    }


`
