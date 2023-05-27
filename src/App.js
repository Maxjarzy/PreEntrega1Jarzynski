import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./components/Cart/CartContexProvider";
import { Footer } from "./components/Footer/Footer";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </CartContextProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
