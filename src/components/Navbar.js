import React from "react"
import { FaSearch, FaShoppingCart,FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";
import { setSearchTerm } from "../Redux/ProductSlice";


 

const Navbar=()=>{


    const [isModelOpen,setIsModelOpen]=useState(false)
    const [isLogin ,setIsLogin]= useState(true)
    const [search,setSearch]=useState()

    const dispatch =useDispatch()
    const navigate =useNavigate()

    const handleSearch=(e)=>{
         
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')

    }

    const openSignup=()=>{
        setIsLogin(false)
        setIsModelOpen(true)
    }

     const openLogin=()=>{
        setIsLogin(true)
        setIsModelOpen(true)
    }

    const products = useSelector(state => state.cart.products)

    return(
     <nav className= 'bg-red-500 shadow-lg'> 
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify '>
            <div className='text-lg font-bold'>
                <Link to="/">e-shop</Link>
            </div>
            <div className='relative flex-1 mx-6'>
                <form onSubmit={handleSearch}>
                    <input type="text"
                     placeholder='Search Product' 
                     className='w-full border py-2 px-3 text-black'
                     onChange={(e)=>setSearch(e.target.value)}
                     />
                     <FaSearch className='absolute top-3 right-2 text-white-400'></FaSearch>
                </form>
            </div>
             
             <Link  to="/cart" className="relative">
               <FaShoppingCart className="text-lg mx-2 my-4"/>
               {products.length > 0  && (
                  <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white"> 
                 
                    
                     {products.length}

                  </span>
              
              ) } 
             </Link>

             <button className='hidden md:block'
             onClick={()=> setIsModelOpen(true)}>
                Login | Register
             </button >
            
             <button className='block md:hidden' 
             onClick={()=>setIsModelOpen(true)}>
                <FaUser/>
             </button>
               

        </div>
        <div className=" flex items-center justify-center space-x-10 py-4 text-sm font-bold ">
            <Link to="/ " className='hover:underline'>Home</Link>
            <Link to="/shop" className='hover:underline'>Shop</Link>
            <Link to="/contact" className='hover:underline'>Contact</Link>
            <Link to="/about " className='hover:underline'>About</Link>
        </div>
        <Modal isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            {isLogin ? <Login openSignup={openSignup}/> : <Register openLogin={openLogin} />}

        </Modal>
     </nav>

    )
   
}

export default Navbar;