
import Layout from '../components/layout/Layout'
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/auth";
import axios from 'axios';
import { Radio } from 'antd';
import { Prices } from '../components/Prices';
import { type } from '@testing-library/user-event/dist/type';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';

const HomePage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [radio, setRadio] = useState([]);
  const[filter,setFilter]=useState([])
  const navigate =useNavigate();
  const [x,setX]=useState(false)

  

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(()=>{
getAllProducts();
  },[])
  console.log(products)

  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/product/product-filters`, {
        radio,
      });
      console.log(products)
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  return (
    <Layout title={"Best offers "}>
     
    {/* <img
        src="https://drive.google.com/file/d/1qXBRdmXSfkbfFcMnje20xJTmTZLRcdQI/view?usp=drive_link"
        className="banner-img"
        // alt="bannerimage"
        width={"100%"}
        height={"250px"}
      /> */}

    <div className="row">
      <div className="col-md-3 mt-30px">
        <div className="text-center"> <h6>Filter By Price</h6>
        <div className="d-flex flex-column">
            <Radio.Group   onChange={(e) => setRadio(e.target.value)}   >
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
          <button
              className="btn btn-success"
              onClick={filterProduct}
            >
              APPLY FILTER
            </button>
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-9">
                   <h1>All Products</h1>
                   <div className="d-flex flex-wrap">
            {products?.map((p) => (
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img style={{height:"200px",width:"285px"}}
                    src={`${p.photo}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <h5 className="card-title">${p.price}</h5>
                    <p className="card-text">{p.description.substring(0, 150)}</p>
                    <button onClick={()=>navigate(`products/${p._id}`)} className="btn btn-primary ms-2">More details</button>
                    <button
                     onClick={() => {
                        setCart([...cart, p]);
                        
                        setX(!x)
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}  className="btn btn-secondary ms-2">Add to cart</button>
                  </div>
                </div>
              
            ))}
          </div>
      </div>
    </div>
      
    </Layout>
  );
};

export default HomePage;
