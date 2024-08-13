import './App.css';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">


      
      <Routes>
             
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/'element={<Auth></Auth>}></Route>
        <Route path='/register' element={<Auth register ></Auth>}></Route>
         <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>

      <Footer></Footer> 

    </div>


  );
}

export default App;
