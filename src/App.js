import './App.css';
import Footer from './components/Footer';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer greeting={"Bienvenido a tu tienda"}/>
    <ItemCount stock={10} />
    <Footer/>
    </>
  );
}

