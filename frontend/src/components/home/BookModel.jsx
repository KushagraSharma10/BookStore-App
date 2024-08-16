import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-opacity-60"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex gap-1 flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publicationYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start books-center gap-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start books-center gap-2">
          <BiUserCircle className="text-zinc-700 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut rerum
          ratione obcaecati aperiam ipsa repellat explicabo cum maxime
          dignissimos atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, maxime. 
        </p>
      </div>
    </div>
  );
};

export default BookModel;
