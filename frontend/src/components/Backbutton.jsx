import { TiArrowLeft } from "react-icons/ti"
import { Link } from "react-router-dom"


const Backbutton = () => {
  return (
    <div className="flex absolute top-2 mt-3 left-10">
        <Link to="/" className="bg-sky-400 text-white px-2 py-2 rounded-full w-fit">
            <TiArrowLeft className="text-2xl" />            
        </Link>
    </div>
  )
}

export default Backbutton