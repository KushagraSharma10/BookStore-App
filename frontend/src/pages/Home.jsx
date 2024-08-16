import { useEffect, useState } from "react";
import axios from "axios";

import Spinner from "../components/Spinner";
import { IoIosAdd } from "react-icons/io";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books/")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 ">
      <div className="flex items-center justify-center gap-4">
        <button
          className="bg-sky-400 px-4 py-2 rounded-md"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-400 px-4 py-2 rounded-md"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
        
      </div>
      <div className="flex items-center px-2 justify-between">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link
          className="flex py-2 px-2 rounded-full bg-orange-500 items-center justify-center"
          to="/books/create"
        >
          <IoIosAdd className=" text-[1.8vw] text-white" />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === "table" ?( <BooksTable books={books} />) : (<BooksCard books={books} />)}
    </div>
  );
};

export default Home;
