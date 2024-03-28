import React, { useState , useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import './editproduct.css'

const EditProduct = () => {
    const {id} = useParams()
    const navigate = useNavigate()
const [edited , setEdited] = useState({
  name : '',
  description : '',
  price : '',
  image : '',
  category : ''
})

useEffect(() => {
    const fetchProduct = async() => {
      try{
        const response = await axios.put(`https://66028dc79d7276a755538507.mockapi.io/products/${id}`)
        setEdited(response.data)
      }catch(err){
        console.log("Error fetching data")
      }
    }
    fetchProduct()
},[id])

const handleChange = (e) => {
    const {name , value} = e.target
    setEdited({
        ...edited,
        [name]: value
    })
}

const updateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://66028dc79d7276a755538507.mockapi.io/products/${id}`, edited);
      if (response.status === 200) {
        navigate('/');
      } else {
        alert('Something went wrong, Try again!');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Something went wrong, Try again!');
    }
}

  return (
    <>
    <Navbar />
     <div className="form-container" style={{ marginTop: '20px' }}>
      <h2>Edit Product</h2>
      <form onSubmit={updateProduct}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value={edited.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" rows="4" required value={edited.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input type="text" id="image" name="image" required value={edited.image} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" name="price" required value={edited.price} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" required value={edited.category} onChange={handleChange} />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
    </>
  )
 }
export default EditProduct
