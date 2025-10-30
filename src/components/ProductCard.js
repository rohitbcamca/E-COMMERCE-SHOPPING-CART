import React from 'react'
import { FaStar } from 'react-icons/fa'
import { addToCart } from '../Redux/CartSlice'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'


  const ProductCard =({product})=>{

        const dispatch = useDispatch()

        const handleAddToCart=(e,product)=>{

            e.stopPropagation()
            e.preventDefault()
            dispatch(addToCart(product))
            alert("Product Added Succesfully");

        }

    return (
        <Link to={`/product/${product.id}`}>
            
        <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105'>
            <img src={product.image} alt="" className="w-full h-48 object-contain mb-4"/>
            <h3 className="text-lg font-semibold"> {product.name} </h3>
            <p className="text-gray-500">$ {product.price}</p>
            <div>
                <FaStar className="text-yellow-600"> </FaStar>
                <FaStar classname="text-yellow-600"> </FaStar>
                <FaStar classname="text-yellow-600"> </FaStar>
                <FaStar classname="text-yellow-600"> </FaStar>
            </div>
             
            <div className='absolute bottom-6 right-2 flex item-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all'
               onClick={(e)=> handleAddToCart(e,product)}>
               
                <span class="group-hover:hidden"> + </span>
                <span class="hidden group-hover:block"> Add to Cart </span>
                
            </div>

        </div>
        </Link>
    )

}
export default ProductCard