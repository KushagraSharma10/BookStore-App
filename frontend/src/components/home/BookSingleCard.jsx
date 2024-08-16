import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShowAlt, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import BookModel from "./BookModel";


const BookSingleCard = ({ book }) => {
    const[showModel, setShowModel] = useState(false);


    return (
        <div key={book._id} className="border-2 border-gray-500 rounded-lg px-4 py-2 m-2 relative hover:shadow-xl">
            <h4 className="my-2 text-gray-500">{book._id}</h4>
            <h2 className="absolute top-3 right-1 px-4 py-1 bg-red-300 rounded-lg">{book.publicationYear}</h2>
            <div className="flex justify-start books-center gap-2">
                <PiBookOpenTextLight className="text-red-300 text-2xl" />
                <h2 className="my-1">{book.title}</h2>
            </div>
            <div className="flex justify-start books-center gap-2">
                <BiUserCircle className="text-zinc-700 text-2xl" />
                <h2 className="my-1">{book.author}</h2>
            </div>
            <div className="flex justify-between books-center gap-2 mt-4 p-4">
                <BiShowAlt className="text-2xl rounded-full text-green-800" onClick={()=> setShowModel(true)} />
                <Link to={`books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link>
                <Link to={`books/edit/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`books/delete/${book._id}`}>
                    <MdDelete className="text-2xl text-red-500" />
                </Link>
            </div>
            {
                showModel && (
                    <BookModel book={book} onClose={()=> setShowModel(false)} />
                )
            }  
        </div>
    )
}

export default BookSingleCard