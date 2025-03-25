import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/books/${id}`)
      .then((res) =>{
        setBook(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      })
  }, [id]);

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-2xl text-blue-400 my-5'>Book Details</h1>
      {loading ? (
        <Spinner />
      ) : (

        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>          
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>ID:</span>
            <span className='text-blue-300'>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Title:</span>
            <span className='text-blue-300'>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Author:</span>
            <span className='text-blue-300'>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Publish Year:</span>
            <span className='text-blue-300'>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Create Time:</span>
            <span className='text-blue-300'>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Last Update Time:</span>
            <span className='text-blue-300'>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      ) 
      }
    </div>

  )
}

export default ShowBook