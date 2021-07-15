import styled from 'styled-components'

const DashboardStyle = styled.div`
  width: 50vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
`
const ErrorDisplay = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: orange;
    font-weight: 600;
    font-size: 20px;

  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 2fr);
  margin-top: 0;
  padding: 20px;
  width: 80%;
  height: 100%;
  background: #eee;
  border-radius: 10px;
  box-sizing: border-box;
  opacity: .7;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.5),  0 5px 10px rgba(166, 173, 201, 0.2);


  span {
    font-weight: 600;
    /* text-align: center; */
    margin: 10px auto;
    color: red;
  }
`

const ShowContent = styled.div`
  height: 80%;
  width: 90%;
  /* background: linear-gradient(to right top, rgba(0,0,0,0.2), rgba(0,0,0,0.7) ); */
  border-radius: 10px;
  margin: 50px auto;
  padding: 20px;
  box-sizing: border-box;
`

const HeadContent = styled.li`
  display: flex;
  border-radius: 10px 10px 0 0;
  justify-content: space-between;
  align-items: center;
  background: #ad8089;
  opacity: 1;
  height: 30%;
  width: 100%;
  margin-right: 0;
  box-sizing: border-box;
  padding: 0;

  h2 {
    /* text-align: center; */
    color: #fff;
    font-weight: lighter;
    padding-left: 30px;
    font-size: 30px;
  }

  h2:nth-child(2) {
    color: #eee;
    opacity: 0.5;
    font-weight: lighter;
    padding-right: 30px;
  }
`

const ContentBody = styled.li`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border-radius:  0 0 10px 10px;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fff;
  height: 65%;
  width: 100%;
  margin-right: 50px;
  box-sizing: border-box;
  padding: 0;

  h3 {
    padding-left: 40px;
    font-weight: bold;
    color: #777;
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    /* font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; */
    
  }

  

  ul {
    width: 90%;
    margin: 30px auto;
    
  
    
   
    li {
      background: #eee;
      border-radius: 5px;;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding: 10px;


      p {
        color: #777;
        padding: 8px 20px;
        font-size: 20px;

      
      }
     
    }
    li:nth-child(3) {
      // background: #b36978;
      background: #ad8089;
      padding: 15px;
      transition: 0.3s;
      opacity: 0.9;
      cursor: pointer;
      display: flex;
      flex-direction: column;

      &:hover {
        opacity: 1;
      transition: 0.3s;

      }
      p{
        color: #fff;
        text-align: center;
        font-size: 23px;
        font-weight: 600;
      }
    }
  }

`






export { DashboardStyle, Content, ShowContent, HeadContent, ContentBody, ErrorDisplay }