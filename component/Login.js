import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
export default function Login(){

    // Email and Password UseState
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(null)
    const [isLoggingIn,setIsLoggingIn] = useState(true)

    const { login, signup, currentUser } = useAuth()
    console.log(currentUser)
    
    async function submitHandler () {
        if (!email || !password){

           setError('Try again')
           return

        }

        if(isLoggingIn){

            try{

                await login(email,password)
                
            }catch(err){
                setError("Incorrect email or password")
            }
           return 
        }
        await signup(email, password)
    }
    return (

        <div>


        <div className='logInContainer'>

          <div className='logInFlexBox'>

            <div className='logo'>
                
    
            </div>


            <div className='form'>
                    
                <h1 className='formTitle'>{isLoggingIn ? 'LOGIN' : 'REGISTER'}</h1>

                 {error &&<div className='formError'>{error}</div>}

                    <div className='inputContainer'>

                        <p>USERNAME</p>

                        <input type="text" 
                        value ={email || ''} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className=''/>

                     </div>


                    <div className='inputContainer'>
                        
                            <p>PASSWORD</p>
                             <input type="password" 
                             value ={password || ''}
                             onChange={(e) => setPassword(e.target.value)}
                              className=''/>
                   </div>

     <button className='' onClick={submitHandler}>Login</button>
      {/*<h2 onClick={() => setIsLoggingIn(!isLoggingIn)}>{!isLoggingIn ? 'Login' : 'Register'}</h2>*/}
            
        

            </div>


          </div>



        </div>
 
    </div>
    )}
