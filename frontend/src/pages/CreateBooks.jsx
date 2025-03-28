import React, {  useState } from "react"
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState('');
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .post('http://localhost:5000/books', data)
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
    <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4">Create a Book</h1>
        {loading ? <Spinner/> : ''}
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
            <div className="my-4">
              <label className="my-4">Title</label>
              <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                />
              </div>
              <div className="my-4">
              <label className="my-4">Author</label>
              <input 
                type="text"
                value={author} // controlled component -- defines the current value
                onChange={(e) => setAuthor(e.target.value)} // event handler - gives OR updates the current value
                // e.target refers to the element that triggered the event (input)
                // e.target.value is the actual value entered by the user in the input field
                className="border-2 border-gray-500 px-4 py-2 w-full"
                />
              </div>
              <div className="my-4">
              <label className="my-4">Publish Year</label>
              <input 
                type="text"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="border-2 border-gray-500 px-4 py-2 w-full"
                />
              </div>
              <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
        </div>
    </div>
  )
}

export default CreateBooks