import styled from 'styled-components'



const FormContainer = styled.div`
  display: flex;
  min-width: 800px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  box-sizing: border-box;
  padding: 20px 50px;

  h1 {
    margin-bottom: 3rem;
    color:  #b36978;
  }

  small {
    display: block;
    &.warning {
      color: orange;
      font-size: 18px;
      margin-left: 2px;
      
    }
    color: #bdbdbd;
    font-size: 18px;
    margin-bottom: 10px;

    &:hover{
      opacity: 0.5;
      transition: 0.5s;
      color: #000;
    }
  }



  input {
    min-width: 500px;
    box-sizing: border-box;
    display: block;
    width: 100%;
    letter-spacing: 1px;
    font-size: 23px;
    margin-bottom: 15px;
    padding: 10px;
    border: solid 2px #777;
    border-radius: 5px;
    height: 70px;
    outline: none;
    color: #777;
    font-family: Kumbh Sans, 'sans-serif';

  }


  button {
   
    width: 100%;
    padding: 25px;
    border-radius: 5px;
    border: none;
    background: #ad8089;
    transition: 0.5;
    cursor: pointer;
    font-family: Kumbh Sans, 'sans-serif';
    font-weight: lighter;
    font-size: 25px;

    &.btn-submit {
      box-shadow: 1px 1px 2px 1px  #000;
    margin: 10px auto 50px
    }

    &:hover {
      opacity: 0.8;
      transition: 0.5;
    }
   
    
  }

  div {
    
  }


`

const Alternative = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  margin-left: -130px;
 
  p {
      color: #ad8089;
      font-size: 18px;
      border-right: 1px solid #ad8089;
      padding-right: 40px;

  }

  a {
      color: #ad8089;
      font-size: 18px;
      cursor: pointer;
      font-weight: 600;
      text-decoration: none;


  }

`

export {  FormContainer, Alternative }