
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import { useLocation } from 'react-router-dom';
import Home from './components/Home.js';
import Movies from './components/Movies.jsx';
import Navbar from './components/Navbar.jsx';
import News from './components/News.js';
import Weather from './components/Weather.js';


function App() {
  // const navPath=useLocation()
  return (
   <div className=' w-full bg-cover bg-no-repeat bg-center '>
     
    <BrowserRouter>
    <Navbar />
    {/* {navPath.pathname} */}
      <Routes>
        <Route exact path='/'  element={<Home/>}/>
        <Route path='/news' element={<News/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/weather' element={<Weather/>} />
      </Routes>
      <section className=' h-36 bg-slate-100 '>
          <footer className="text-center py-5 pt-8 text-sky-700 text-sm">
            <h4 className=''>
              Copyright &copy; {new Date().getFullYear()} BravinDan All Rights
              Reserved.
            </h4>
          </footer>
      </section>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
