import React, { useState } from 'react'
import Backbutton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        alert("There is an error");
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <Backbutton/>
      <h1 className='text-blue-400 text-2xl my-5'>Delete Book</h1>
      {loading ? <Spinner/> : ''}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
      <h3 className='text 2xl'> Are you sure you want to delete this book?</h3>

      <button 
          className='p-4 bg-red-600 text-white m-8 w-full'
          onClick={handleDeleteBook}
          >
        Yes, Delete It
      </button>
      </div>
    </div>
  )
}

export default DeleteBook