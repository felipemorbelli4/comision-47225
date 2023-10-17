
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/footer/Footer'
import Navbar from './components/layout/navbar/Navbar'
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer'
import Cart from './components/pages/cart/Cart';
import { ItemDetailContainer } from './components/pages/itemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryName' element={<ItemListContainer/>} />
          <Route path='/cart' element={<Cart />}   />
          <Route path='/footer' element={<Footer/>} />  
          <Route path='/itemDetail/:id' element={<ItemDetailContainer/>} />
        </Route>
        
        <Route path='*' element={<h1>Not Found sorry :c</h1>} />
          
        
      </Routes>
    </BrowserRouter>
  );
}

export default App
