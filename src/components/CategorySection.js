import React from "react"
import ManCetegory from '../Images/ManCetegory.jpg'
import WomanCetegory from '../Images/WomanCetegory.jpg'
import KidCetagory from '../Images/KidCetagory.jpg'
 


const categories = [
    {
        title:'Men',
        imageUrl: ManCetegory,
    },
    {
        title:'Women',
        imageUrl: WomanCetegory,

    },
    {
       title:'Kids',
       imageUrl:KidCetagory,

    },

];

const CategorySection=()=>{

    return(
        <div className="container mx-auto grid grid-cols-1  sm:grid-cols-3 gap-6 cursor-pointer">
            {categories.map((category,index)=>(
                   
                   <div key={index} className="relative h-64 transform transition-transfrom duration-300 hover:scale-105 ">
                    <img src={category.imageUrl} alt="" className="w-full h-full  object-cover rounded-lg shadow-md "/>
                   
                    <div className="absolute top-20 left-12">
                        <p className="text-xl font-bold">{ category.title}</p>
                        <p className="text-gray-900"> View All </p>
                    </div>

                   </div>
           
           ) )}
        </div>
    )
}

export default CategorySection