import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartContextProvider } from "./components/Cart/CartContexProvider";

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
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
