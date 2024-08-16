import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { BiShowAlt  } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";


const BooksTable = ({books}) => {
  return (
    <table className="w-full border-separate border-spacing-1">
                    <thead>
                        <tr>
                            <th className="border border-slate-500 rounded-md">No</th>
                            <th className="border border-slate-500 rounded-md">Title</th>
                            <th className="border border-slate-500 rounded-md max-md:hidden">
                                Author
                            </th>
                            <th className="border border-slate-500 rounded-md max-md:hidden">
                                Publish Year
                            </th>
                            <th className="border border-slate-500 rounded-md">Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map((book, index) => (
                            <tr key={book._id}>
                                <td className="border border-slate-500 px-4 py-2 text-sm">
                                    {index + 1}
                                </td>
                                <td className="border border-slate-500 px-4 py-2 text-sm">
                                    {book.title}
                                </td>
                                <td className="border border-slate-500 px-4 py-2 text-sm max-md:hidden">
                                    {book.author}
                                </td>
                                <td className="border border-slate-500 px-4 text-center py-2 text-sm max-md:hidden">
                                    {book.publicationYear}
                                </td>
                                <td className="border border-slate-500 rounded-md text-center text-sm px-4 py-2">
                                    <div className="flex items-center justify-center gap-4">
                                        <Link to={`books/details/${book._id}`}>
                                            <BiShowAlt className="text-2xl rounded-full text-green-800" />
                                        </Link>
                                        <Link to={`books/edit/${book._id}`}>
                                            <AiOutlineEdit className="text-2xl text-yellow-600" />
                                        </Link>
                                        <Link to={`books/delete/${book._id}`}>
                                            <MdDelete className="text-2xl text-red-500" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
  )
}

export default BooksTable