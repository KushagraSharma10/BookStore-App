// import { useState } from "react"
// import axios from "axios";
// import Backbutton from "../src/components/Backbutton";
// import Spinner from "../src/components/Spinner";
// import { useNavigate } from "react-router-dom";

// const CreateBooks = () => {

//     const [title, setTitle] = useState("");
//     const [author, setAuthor] = useState("");
//     const [publicationYear, setPublicationYear] = useState("");
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleSaveBook = () => {
//         const data = {
//             title,
//             author,
//             publicationYear,
//         }
//         setLoading(true);
//         axios
//             .post("http://localhost:5555/books", data)
//             .then(() => {
//                 setLoading(false);
//                 navigate("/")
//             })
//             .catch((error) => {
//                 setLoading(false);
//                 console.log(error);
//             });
//     };
//     return (
//         <div className="flex justify-center items-center min-h-screen bg-zinc-900">
//             <Backbutton />
//             <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                
//                 <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Create a New Book</h1>
                
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
//                         Title
//                     </label>
//                     <input
//                         type="text"
//                         id="title"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Enter book title"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
//                         Author
//                     </label>
//                     <input
//                         type="text"
//                         id="author"
//                         value={author}
//                         onChange={(e) => setAuthor(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Enter author name"
//                     />
//                 </div>

//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="publicationYear">
//                         Publication Year
//                     </label>
//                     <input
//                         type="number"
//                         id="publicationYear"
//                         value={publicationYear}
//                         onChange={(e) => setPublicationYear(e.target.value)}
//                         className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         placeholder="Enter publication year"
//                     />
//                 </div>

//                 <div className="flex justify-center">
//                     <button
//                         onClick={handleSaveBook}
//                         disabled={loading}
//                         className="w-full p-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     >
//                         {loading ? <Spinner /> : "Save Book"}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CreateBooks;

import { useState } from "react";
import axios from "axios";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const CreateBooks = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [publicationYear, setPublicationYear] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSaveBook = () => {
        if (!title || !author || !publicationYear) {
            alert("Please fill in all fields.");
            return;
        }

        const data = {
            title,
            author,
            publicationYear,
        };

        setLoading(true);
        axios
            .post("http://localhost:5555/books", data)
            .then(() => {
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                console.log("Error saving book:", error);
            });
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Backbutton />
            <div className="flex-1 flex justify-center items-center">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">Create a New Book</h1>
                    
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            placeholder="Enter book title"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="author">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            placeholder="Enter author name"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="publicationYear">
                            Publication Year
                        </label>
                        <input
                            type="number"
                            id="publicationYear"
                            value={publicationYear}
                            onChange={(e) => setPublicationYear(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                            placeholder="Enter publication year"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            onClick={handleSaveBook}
                            disabled={loading}
                            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
                        >
                            {loading ? <Spinner /> : "Save Book"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateBooks;
