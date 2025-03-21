import {BrowserRoutes as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App(){
    return(
        <Router>
            <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </Router>
    );
}

export default App;
