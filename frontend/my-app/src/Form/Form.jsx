import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [author,setAuthor] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();  
    const payload = {
        image: image,
        year: year,
        author: author,
        name: name,
      };
      const postBook = ()=>{
            if(image!==''&&year!==''||author!==''||name!==''){

                  fetch("http://localhost:4000/books/post", {
                        method: "POST",
                  headers: {
                        "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
            }).then((res) =>{ 
                  res.json();
                  alert("New book added!");
                  navigate("/");
            }).catch((err)=>{console.log(err)})
      }else{
            alert('fill all the inputs!');
      }
      }

  return (
    <>
    <h1>Add New Books</h1>
    <div style={{width:"20%",border:"2px solid black",margin:"auto",height:'300px',padding:"2%",marginTop:"50px",backgroundColor:"black",color:'white'}}>
      <input style={{padding:"4%",fontWeight:'bold',marginBottom:"9px",width:"90%"}} type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="image" />
      <input style={{padding:"4%",fontWeight:'bold',marginBottom:"9px",width:"90%"}} type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"/>
      <input style={{padding:"4%",fontWeight:'bold',marginBottom:"9px",width:"90%"}} type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="author"/>
      <input style={{padding:"4%",fontWeight:'bold',marginBottom:"9px",width:"90%"}} type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="year"/>
      <button style={{padding:"4%",fontWeight:'bolder',marginBottom:"9px",width:"100%"}} onClick={()=>postBook()}>Submit</button>
    </div>
            </>
  )
}

export default Form
