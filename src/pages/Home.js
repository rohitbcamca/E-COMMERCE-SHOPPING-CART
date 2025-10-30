import React,{useEffect} from 'react'
import { Categories,MockData } from '../assets/mockData';
import HeroImage from'../Images/Home.jpg'
import InfoSection from '../components/InfoSection';
import CategorySection from'../components/CategorySection';
import { setProducts } from '../Redux/ProductSlice';
import { useDispatch,useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

import Shop from '../pages/Shop'



function Home(){

   const dispatch = useDispatch()

   const products = useSelector(state=> state.products)


   useEffect(()=>{
    dispatch(setProducts(MockData))
   },[ ])



    return(
        <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
            <div className='container mx-auto py-4  flex flex-col  md:flex-row space-x-2'>
                <div className='w-full  md:w-3/12 rounded'>
                    
                    <div className='bg-red-500 text-white text-xs font-bold px-2 py-2.5 '> SHOP BY CATEGORIES </div>
                     
                     <ul className='space-y-4 bg-gray-200 p-3 borde'>
                         {Categories.map((category,index)=>(

                            <li key={index}  className="flex items-center text-sm font-medium">
                               <div className='w-2 h-2 border border-red-500 rounded-full mr-2'> </div> 
                                {category}
                            </li>
        
                         ))}
                     </ul>
                
                    </div>
                <div className='w-full md:w-9/12 mt-8 md:mt-0  h-96 relative'>
                        <img src={HeroImage} alt='Home Page' className='h-full w-full rounded'/>

                    <div className='absolute top-16 left-8 text-white'>

                        <p className="mb-4 "> Code </p>
                        <p className="text-3xl font-bold"> Welcome to Shop</p>
                        <p className="text-xl mt-2.5 font-bold ">Millions + Products</p>
                        <button className='bg-yellow-600 px-5 py-1 mx-4 my-3 rounded-lg hover:bg-green-600 
                        transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>

                    </div>


                    </div>
                </div>

                <InfoSection/>
                <CategorySection/>
             
                   <Shop/>
            </div>
        
    )
}
export default Home;