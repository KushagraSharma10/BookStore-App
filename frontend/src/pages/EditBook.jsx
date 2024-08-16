import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";

const EditBooks = () => {
    const [book, setBook] = useState(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/books/${id}`)
            .then((response) => {
                const data = response.data;
                setBook(data);
                setTitle(data.title);
                setAuthor(data.author);
                setPublishYear(data.publicationYear);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                setError("Failed to fetch book details.");
                console.error(error);
            });
    }, [id]);

    const handleSaveChanges = () => {
        const updatedBook = {
            title,
            author,
            publicationYear: publishYear,
        };

        setLoading(true);
        axios
            .put(`http://localhost:5555/books/${id}`, updatedBook)
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
                <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Book</h1>
                
                {loading && <Spinner />}

                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}
                
                {book && (
                    <>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter book title"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                                Author
                            </label>
                            <input
                                type="text"
                                id="author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter author name"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publishYear">
                                Publication Year
                            </label>
                            <input
                                type="number"
                                id="publishYear"
                                value={publishYear}
                                onChange={(e) => setPublishYear(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter publication year"
                            />
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={handleSaveChanges}
                                disabled={loading}
                                className="w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                {loading ? <Spinner /> : "Save Changes"}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default EditBooks;
