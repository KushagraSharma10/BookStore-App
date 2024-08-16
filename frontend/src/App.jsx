import {Routes, Route} from 'react-router-dom';

import EditBook from './pages/EditBook';
import ShowBooks from './pages/ShowBooks';
import DeleteBook from './pages/DeleteBook';
import CreateBooks from './pages/CreateBooks';
import Home from './pages/Home';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBooks />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/details/:id" element={<ShowBooks />} />
      <Route path="/books/delete/:id" element={<DeleteBook/>} />
    </Routes>
  )
}

export default App