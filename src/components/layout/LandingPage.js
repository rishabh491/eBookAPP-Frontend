import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';
import { useCart } from '../../context/cart';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const FAQ = () => {
    const [products,setProducts]=useState([])
    const navigate =useNavigate();
    const [cart, setCart] = useCart();
    const [x,setX]=useState(false)


  const getFeaturedProducts=async()=>{
    const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
    setProducts(data.products.slice(0, 3));
    
  }


 useEffect(()=>{
getFeaturedProducts();
 },[])


  return (
    <Layout>
    
        <section className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center text-center bg-dark  text-white">
          <div className="text my-5 mx-lg-5">
            <h1 className="text-2xl text-center font-bold mb-5 bg ">Welcome to CodeBook</h1>
            <p className="lead mb-5">Discover the world's most comprehensive collection of computer science eBooks. Find the latest titles, read reviews, and explore a vast array of digital content.</p>
            <Link to="/landing" className="btn btn-primary btn-lg mr-2 mb-2">Explore eBooks</Link>
          </div>
          <div className="visual my-5 lg:max-w-xl">
            <img className="img-fluid rounded" src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1470&amp;q=60" alt="CodeBook Hero Section" />
          </div>
        </section>
        <section class="my-20 bg-dark text-white">
  <h1 class="text-2xl text-center font-semibold mb-5 bg">Featured eBooks</h1>
  <div className='d-flex flex-row'>
  {products.map(product => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4  border border-light" key={product._id}>
              <div className="card bg-dark text-white">
                <img src={product.photo} className="card-img-top" alt={product.photo} />
                <div className="card-body">
                  <h5 className="card-title text-2xl font-bold mb-2">{product.name}</h5>
                  <p className="card-text">{product.description.substring(0,50)}</p>
                  <button className="btn btn-primary btn-lg"  onClick={() => {
                        setCart([...cart, product]);
                        
                        setX(!x)
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, product])
                        );
                        toast.success("Item Added to cart") }}>Add To Cart</button>
                  <button onClick={()=>navigate(`products/${product._id}`)} className="btn btn-secondary btn-lg ms-5">More details</button>
                </div>
              </div>
            </div>
          ))}
  </div>
  
  
  {/* <div class="row justify-content-center">
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1595617795501-9661aafda72a?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=650&amp;q=40" class="card-img-top" alt="The Complete Guide to Backend Development" />
        <div class="card-body">
          <h5 class="card-title text-2xl font-bold mb-2">The Complete Guide to Backend Development</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
          <button class="btn btn-primary btn-lg">Add To Cart</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=650&amp;q=40" class="card-img-top" alt="Frontend Fastlane Plan With Projects" />
        <div class="card-body">
          <h5 class="card-title text-2xl font-bold mb-2">Frontend Fastlane Plan With Real World Projects</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
          <button class="btn btn-primary btn-lg">Add To Cart</button>
        </div>
      </div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div class="card">
        <img src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=4" />
        <div class="card-body">
          <h5 class="card-title text-2xl font-bold mb-2">JavaScript Basics To Advance With Shubham</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.</p>
          <button class="btn btn-primary btn-lg">Add To Cart</button>
        </div>
      </div>
    </div> */}
    </section>
 

     
    </Layout>
  );
}

export default FAQ;
