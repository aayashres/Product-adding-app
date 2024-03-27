import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import axios from 'axios'
import { useState , useEffect } from 'react'


const Home = () => {
  const [products , setProducts] = useState([])

  // fetching products
  const fetchProducts = async() => {
    const response = await axios.get('https://66028dc79d7276a755538507.mockapi.io/products')
    if(response.status === 200){
      setProducts(response.data)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
    <Navbar />
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly'}}>
    {
      products.length > 0 && products.map((product) => {
           return(
            <Card product={product} key={product.id}/>
           )
      })
    }
    </div>
    </>
  )
}

export default Home
