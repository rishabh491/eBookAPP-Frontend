import { Layout } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


const ProductDeatail = () => {
    const[p,setP]=useState({})
    var  {id}  = useParams();
    
 

useEffect(()=>{
    async function a(){
      const res=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product/${id}`)
                await setP(res.data.product)
     
    }
    a()
},)
  return (
    <Layout>
        <div key={p._id} className="product-link" > <div className="card m-2" style={{ width: "18rem" }}> <img style={{height:"200px",width:"285px"}} src={`${p.photo}`} className="card-img-top" alt={p.name} /> {console.log(p.photo)} <div className="card-body"> <h5 className="card-title">{p.name}</h5> <p className="card-text">{p.description}</p> </div> </div> </div>
    </Layout>
    
  )
}

export default ProductDeatail
