import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
// import Home from './components/Home';
import NotFound from './components/NotFound';
import Categories from './components/Categories/Categories';
import SignIn from './components/Credentials/SignIn';
import Products from './components/Products';
import Smartphones from './components/Categories/Pages/Smartphones';
import Laptops from './components/Categories/Pages/Laptops';
import Fragrances from './components/Categories/Pages/Fragrances';
import Skincare from './components/Categories/Pages/Skincare';
import Groceries from './components/Categories/Pages/Groceries';
import HomeDecoration from './components/Categories/Pages/HomeDecoration';


export const DataContext = createContext();

function App() {
    const [data, setData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        setUsername(username);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    useEffect(() => {
        const categories = {}
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                for (let i of data.products) {
                    if (categories[i.category]) {
                      categories[i.category].push(i);
                    }
                    else {
                      categories[i.category] = [i];
                    }
                  }
                setData(categories)
            })
            .catch((error) => {
                console.log("Error fetching data", error)
            })
    }, []);



    const addToCart = (item) => {
        console.log(item)
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        console.log(existingItemIndex)
        console.log(cartItems)
        if (existingItemIndex === -1) {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        } else {
            const updatedCartItems = [...cartItems];
            alert("Already added")
            setCartItems(updatedCartItems);
            console.log(cartItems)
        }
    };

    return (
        <DataContext.Provider value={{ data, addToCart, cartItems, setCartItems }}>
            <Router basename="/Online-Shopping">
                <Navbar cartCount={cartItems.length} isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
                <Routes>
                    <Route path='/' element={<Products />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/categories' element={<Categories />} />
                    <Route path='/signIn' element={<SignIn onLogin={handleLogin} />} />
                    <Route path='/categories/smartphones' element={<Smartphones />} />
                    <Route path='/categories/laptops' element={<Laptops />} />
                    <Route path='/categories/fragrances' element={<Fragrances />} />
                    <Route path='/categories/skincare' element={<Skincare />} />
                    <Route path='/categories/groceries' element={<Groceries />} />
                    <Route path='/categories/homedecoration' element={<HomeDecoration />} />
                    <Route path='*' element={<Navigate to="/not-found" />} />
                    <Route path="/not-found" element={<NotFound />} />
                </Routes>
            </Router>
        </DataContext.Provider>
    )
}

export default App;
