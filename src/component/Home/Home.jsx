import React from 'react';
// import NavBar from '../Navbar/Navbar.jsx';
// import SearchBar from '../search/SearchBar.jsx';
import Banner from '../Banner.jsx';
// import Product from '../Product.jsx';
// import Footer from '../Footer.jsx';
import ProductCarousel from '../productCarousel/ProductCarousel.jsx';

function Home({ user, setUser, modelos }) {
  return (
    <div>
      {/* <NavBar /> */}
      {/* <SearchBar modelos={modelos} />  */}
      <Banner />
      <ProductCarousel modelos={modelos} />
      {/* <Product modelos={modelos} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;

