import React from 'react'

const Register = ({openLogin}) =>{

    return(
        <div className='bg-white w-full rounded p-4' >
               <h2 className="text-2xl font-bold mb-4"> Sign Up </h2>
               <form>

                     <div className='mb-4'>
                        <label className="block text-gray-700">Name</label>
                        <input type="name"/>
                    </div>
                    
                    <div className='mb-4'>
                        <label className="block text-gray-700">Email</label>
                        <input type="email"/>
                    </div>

                    <div  className='mb-4'>
                          <label className="block text-gray-700">Password</label>
                          <input type="password"/>
                    </div>
                        
                        <div  className='mb-4'>
                             <button type="submit" className="w-full bg-red-600 text-white py-2">Sign Up</button>
                        </div>

                        <div className='text-center '>
                             <span className="text-gray-700"> Already Have an Account ?</span>
                             <button className="text-red-800" onClick={openLogin}>Login</button>
                        </div>

                        
               </form>
        </div>
    )
}
export default Register