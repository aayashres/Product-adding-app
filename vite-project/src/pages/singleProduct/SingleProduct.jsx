import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useState , useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './singleproduct.css'
import axios from 'axios'

const SingleProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [product,setProduct] = useState({})
  const fetchProduct = async()=>{
   const response = await axios.get('https://66028dc79d7276a755538507.mockapi.io/products/' + id )
   if(response.status === 200){
    setProduct(response.data)
   }else{
    alert("Something went wrong")
   }
  }

  const deleteProduct = async() => {
      const response = await axios.delete('https://66028dc79d7276a755538507.mockapi.io/products/' + id )
      if(response.status === 200){
        navigate("/")
      }else{
        alert("Something is wrong.")
      }
  }
  useEffect(()=>{
    fetchProduct()
  },[])

  return (
    <>
    <Navbar />
     <div className="product-container">
        <div className="product-image">
            <img src={product.image} alt="Product Image" />
        </div>
        <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={deleteProduct}>Delete</button>
            <button className="add-to-cart-btn" style={{marginLeft: '10px'}}>Edit</button>
        </div>
    </div>

    </>
  )
}

export default SingleProduct
