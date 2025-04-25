import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FeedbackForm />}></Route>
          <Route path='/dashboard' element={<FeedbackList />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>

  );
}

export default App;