import axios, { Axios } from "axios"
import { useRef } from "react"
import Form from "./component/headerContainer/Form"


function App() {
rrtty
 
  let formHandle = (event)=>{
    event.preventDefault();

    let form = event.target

    let formData = new FormData(form);


    let formDataObject = Object.fromEntries(formData.entries());
    
    

    axios.get(`http://localhost:8080/test`).then((result)=>{
      console.log(result);
      
    })
    
  }

 

  return (
    <>
      <Form formHandle={formHandle} />
    </>
  )
}

export default App
