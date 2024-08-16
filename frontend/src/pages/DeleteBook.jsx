import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const DeleteBooks = () => {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                setBook(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError("Failed to fetch book details.");
                console.error(error);
            });
    }, [id]);

    const handleDeleteBook = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/books/${id}`)
            .then(() => {
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                setError(error.response?.data?.message || "An error occurred.");
                console.error(error);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <Backbutton />
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Delete Book</h1>
                
                {loading && <Spinner />}

                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}
                
                {book && (
                    <div className="text-center">
                        <p className="text-lg mb-4">Are you sure you want to delete the following book?</p>
                        <p className="text-xl font-bold mb-4">{book.title}</p>
                        <p className="text-gray-600 mb-4">Author: {book.author}</p>
                        <p className="text-gray-600 mb-4">Publication Year: {book.publicationYear}</p>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={handleDeleteBook}
                                disabled={loading}
                                className="px-4 py-2 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                {loading ? <Spinner /> : "Delete"}
                            </button>
                            <button
                                onClick={() => navigate("/")}
                                className="px-4 py-2 bg-gray-300 text-gray-800 font-bold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteBooks;
