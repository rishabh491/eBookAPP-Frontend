import React, { useState, useEffect } from "react";

import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      setProducts(data.products);
    } catch (error) {
      
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p._id}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img style={{height:"200px",width:"285px"}}
                    src={`${p.photo}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  {console.log(p.photo)}
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description.substring(0,150)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;