import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Layout from './views/Layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ListCategory from './views/ListCategory';
import ListAnnonces from './views/ListAnnonces';
import ListeCommentaires from './views/ListeCommentaires';
import ListeFavoris from './views/ListeFavoris';
import ListeVendeur from './views/ListeVendeur';
import ListeAdmin from './views/ListeAdmin';
import ListClient from './views/ListClient';
import UpdateCategory from './views/UpdateCategory';
import CreateCategory from './views/CreateCategory';
import Login from './components/Login';
import HomeAdmin from './views/HomeAdmin';
import LayoutAdmin from './views/LayoutAdmin';



function App() {
  const Privateroute = ({ children }) => {
    if (!localStorage.getItem("user")) {
      return <Navigate to="/"></Navigate>;
    }
    return children;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Home' element={<Privateroute><HomeAdmin></HomeAdmin></Privateroute>}>
          <Route path='/Home' element={<Privateroute><LayoutAdmin></LayoutAdmin></Privateroute>}></Route>
          <Route path='/Home/list' element={<Privateroute><ListCategory></ListCategory></Privateroute>}></Route>
          <Route path='/Home/listA' element={<Privateroute><ListAnnonces></ListAnnonces></Privateroute>}></Route>
          <Route path='/Home/listC' element={<Privateroute><ListeCommentaires></ListeCommentaires></Privateroute>}></Route>
          <Route path='/Home/listV' element={<Privateroute><ListeVendeur></ListeVendeur></Privateroute>}></Route>
          <Route path='/Home/listAd' element={<Privateroute><ListeAdmin></ListeAdmin></Privateroute>}></Route>
          <Route path='/Home/listCl' element={<Privateroute><ListClient></ListClient></Privateroute>}></Route>
          <Route path='/Home/Update/:id' element={<Privateroute><UpdateCategory></UpdateCategory></Privateroute>}></Route>
          <Route path='/Home/add' element={<Privateroute><CreateCategory></CreateCategory></Privateroute>}></Route>
        </Route>
        <Route path='/' element={<Login></Login>}></Route>
      </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
