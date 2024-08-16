import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const ShowBooks = () => {
  const { id } = useParams(); // Get the 'id' from the route parameters
  const [book, setBook] = useState(null); // Initialize as null to handle loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data); // Directly access response.data since it returns a single book
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  return (
    <div className="p-10">
      <Backbutton />
      <h1 className="text-3xl mt-[2vw]">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : book ? (
        <div className="flex flex-col border-2 mt-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="mt-4">
            <span className="text-md font-semibold mr-4 text-gray-500">Id:</span>
            <span>{book._id}</span>
          </div>
          <div className="mt-4">
            <span className="text-md font-semibold mr-4 text-gray-500">Title:</span>
            <span>{book.title}</span>
          </div>
          <div className="mt-4">
            <span className="text-md font-semibold mr-4 text-gray-500">Publication Year:</span>
            <span>{book.publicationYear}</span>
          </div>
          <div className="mt-4">
            <span className="text-md font-semibold mr-4 text-gray-500">Created Time:</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="mt-4">
            <span className="text-md font-semibold mr-4 text-gray-500">Last Update Time:</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      ) : (
        <p>Book not found.</p>
      )}
    </div>
  );
};

export default ShowBooks