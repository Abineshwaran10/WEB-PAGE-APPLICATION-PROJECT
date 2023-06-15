import React from 'react'
// import Gnavbar from './Component/Home';
// import Pack from './Component/Routing';
// //import Login from './Component/Form/Login';
import Navbar from './Project/Navbar';
import Home from './Project/Home';
import About from './Project/About';
import Courses from './Project/Courses';
import Study from'./Project/Study';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
function App() {
  return (
    <>
     <Router>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/study" element={<Study />} />
      </Routes>
    </Router>
   
  {/* <Home/>  */}
  <About/>
  <Courses/>
  <Study/>
</>
  )
}
export default App;
// App.js

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './redux/cartSlice';
// import Product from './redux/Product';
// import CartPage from './redux/CartPage';
// import CartIcon from './redux/CartIcon';

// import './App.css';

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="app">
//           <nav className="navbar">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/cart">
//                   <CartIcon />
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/cart" element={<CartPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// };

// const Home = () => (
//   <div className="home">
//     <h2>Products</h2>
//     <div className="products">
//       <Product id={1} name="Apple" price={1.99} image="apple.jpg" />
//       <Product id={2} name="Banana" price={0.99} image="banana.jpg" />
//       <Product id={3} name="Orange" price={1.49} image="orange.jpg" />
//     </div>
//   </div>
// );

// export default App;


