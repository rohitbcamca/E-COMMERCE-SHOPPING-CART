import React from 'react'

const Login = ({openSignup}) =>{

    return(
        <div>
               <h2 className="text-2xl font-bold mb-4"> Login </h2>
               <form>
                    
                    <div className='mb-4'>
                        <label className="block text-gray-700">Email</label>
                        <input type="email"/>
                    </div>

                    <div  className='mb-4'>
                          <label className="block text-gray-700">Password</label>
                          <input type="password"/>
                    </div>
                     <div  className='mb-4'>
                          <label className="block text-gray-700">

                            <input type="checkbox" className="form-checkbox"/>
                            <span className="ml-2 text-gray-700">Remember Me</span>


                          </label>
                           <a href="#"className="text-red-800">Frogot password ? </a>
                     </div>
                        
                        <div  className='mb-4'>
                             <button type="submit" className="w-full bg-red-600 text-white py-2">Login</button>
                        </div>

                        <div className='text-center '>
                             <span className="text-gray-700"> Don't Have an Account ?</span>
                             <button className="text-red-800" onClick={openSignup}>Sign Up</button>
                        </div>

                        
               </form>
        </div>
    )
}
export default Login