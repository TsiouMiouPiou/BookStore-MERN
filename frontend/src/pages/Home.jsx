import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data); // data is the object of our response result
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className="p-4 my-5 mx-5">
      <div className="flex justify-center items-center gap-x-4">
            <button 
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg cursor-pointer"
            onClick={() => setShowType('table')}
            >
                Table
            </button>
            <button 
            className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg cursor-pointer"
            onClick={() => setShowType('card')}
            >
                Card
            </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8 mx-2 text-blue-400">Book Store</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? <Spinner /> 
      : showType === 'table' ? 
      ( <BooksTable books={books} />) : 
      (<BooksCard books={books}/> )} 
      {/* left: prop, right: useState   */}
    </div>
  );
};

export default Home;
