import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import './addproduct.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AddProduct = () => {
  /*
const [name , setName] = useState('')
const [description , setDescription] = useState('')
const [image , setImage] = useState('')
const [price , setPrice] = useState('')
const [category, setCategory] = useState('')
onChange((e) => setName(e.target.value))
*/
const navigate = useNavigate()
const [data , setData] = useState({
  name : '',
  description : '',
  price : '',
  image : '',
  category : ''
})

const handleChange = (e) => {
    const {name , value} = e.target 
    setData({
      ...data,
      [name]: value
    })
}

const addProduct = async(e) => {
  e.preventDefault();
  let response = await axios.post('https://66028dc79d7276a755538507.mockapi.io/products' , data)
  console.log(response)
  if(response.status === 201){
      navigate('/')
  }else{
    alert("Something is wrong.")
  }
}


  return (
    <>
    <Navbar />
        <div className="form-container" style={{marginTop: "20px" }}>
        <h2>Add New Product</h2>
        <form action="#" method="POST" enctype="multipart/form-data" onSubmit={addProduct}>
            <div className="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="description">Description:</label>
                <textarea id="description" name="description" rows="4" required onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
                <label for="price">Price:</label>
                <input type="text" id="price" name="price" accept="price/*" required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="image">Image(Link):</label>
                <input type="text" id="image" name="image" accept="image/*" required onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label for="category">Category:</label>
                <input type="text" id="category" name="category" required onChange={handleChange} />
                    
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>


    </>
  )
}

export default AddProduct
