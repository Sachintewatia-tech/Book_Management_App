import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './AllBooks.css';
const AllBooks = () => {
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const fetchBooks = async()=>{
        try {
            let res = await axios.get(`http://localhost:4000/books`);
            setData(res.data.books);
          } catch (error) {
           console.log(error);
          }
    }

    const deleteBook = (id)=>{
      axios.delete(`http://localhost:4000/books/delete/${id}`);
    }

    useEffect(()=>{
        fetchBooks();
    },[deleteBook]);
  return (
    <div>
      <h1>All Books</h1>
      <button onClick={()=>navigate('/form')}>Add more books</button>
      <div id='book'>
        {
            data?.length>0 && data?.map((ele)=>{
                return(
                <div key={ele._id} id='card' >
                    <img src={ele.image} alt="image" />
                    <h3>Name: {ele.name}</h3>
                    <h3>Author:{ele.author}</h3>
                    <h3>Year:{ele.year}</h3>
                    <button onClick={()=>deleteBook(ele._id)}>Delete</button>
                </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default AllBooks
