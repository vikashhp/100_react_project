
import React,{useState} from 'react';


const Password = () => {

    const [strength,setStrength]=useState('');

    const [show,setShow]=useState('')


    function strongPassword(password) {
  
        let hasLowerCase = /[a-z]/.test(password);
        let hasUpperCase = /[A-Z]/.test(password.substr(1, password.length-2));
        let hasDigit = /[0-9]/.test(password.substr(1, password.length-2));
        let hasSymbol = /['@#%&?']/.test(password.substr(1, password.length-2));
        
        if(password.length > 9 && hasLowerCase && hasUpperCase && hasDigit && hasSymbol) {
          setStrength('SECURE');
        } else {
          setStrength('NOT SECURE');
        }
        
      }



      const passwordCheckHandler=(e)=>{
        setShow(e.target.value)
        strongPassword(e.target.value);
      }
      
 

























  return (
    <div>
      <h1>Password_Validator</h1>
      <input onChange={passwordCheckHandler} type='password'/>
      <h1>{strength}</h1>
    </div>
  )
}

export default Password
