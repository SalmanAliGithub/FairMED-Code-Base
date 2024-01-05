import React , {useState} from 'react';
import './signup.css';
import doctor from '../Assets/doctors-signup.png';
import patient from '../Assets/heart.png';
import { useEffect } from 'react';


const Signup = () => {

    const [action,setAction] = useState("patient");
    const [click,setClick] = useState('email');
    const [errorFromServer, setErrorFromServer] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
       


    useEffect(() => {
        async function sendDataToBackend() {
            console.log(action)
            const url = action ==='patient'? 'http://127.0.0.1:8000/login/patient/' : 'http://127.0.0.1:8000/login/physician/'
            const form = document.getElementById('form');
            const formData = new FormData(form);
        
            try{

                const response = await fetch(url, {
                    method: 'POST',
                    body: formData,
                })
                const data =await response.json() 
                setErrorFromServer(JSON.stringify(data))
                
            }catch(error) {
                console.log('There is an error coming from the backend')
                throw error
            };

            console.log(errorFromServer)
        }
        
        
        document.getElementById('form').addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            sendDataToBackend();
        });
  
    }, [errorFromServer]);




  return (

    <div className='container'>
        <div className='header'>
            <div className='text'>Sign In</div>
            <div className="choose">I am</div>
            
        </div>
        <div className='Header'>Beseteee{errorFromServer ?errorFromServer['Error Message']: 'Betsegaw'}</div>
        <div className="patient-doctor">
            <div className={action==="patient"? 'active_user': 'user'} onClick={()=>{setAction('patient')}}>
                <img src={patient} alt="" />
                <figcaption >Patient</figcaption>
            </div>

            <div className={action==="doctor"? 'active_user': 'user'} onClick={()=>{setAction('doctor')}}>
                <img src={doctor} alt="" />
                <figcaption>Doctor</figcaption>
            </div>
        </div>
        
        <form id='form'>

        <div className="inputs">
        <div className="input">
            <input name='name' type="text" placeholder='Name' value={formData.name} onChange={handleChange} required />
        </div>
        <div className='input'>
            <input name='email' type="email" placeholder='Email' value={formData.email} onChange={handleChange} required  />
        </div>

        <div className={click==='phone'?  <div className="input">
            <input type="number" placeholder='Phone number' />
        </div> : <div></div>}>
       
        </div>
       
        
       
        <div className='phoneno'><p>Use <span onClick={()=>{setClick('phone')}}>Phone number</span> instead?</p></div>
        <div className="input">
            <input type="password" name='password' placeholder='Password' value={formData.password} onChange={handleChange} required  />
        </div>
        <div className="input">
            <input type="password" name='password2' title='password2' placeholder='Confirm Password' value={formData.password2} onChange={handleChange} required  />
        </div>
        {action==="patient"?<div></div>:<div className="license input">
            <label htmlFor="license" className='uploadbtn'><i class="ri-chat-upload-line"></i>Upload License</label>
            <input type="file" id='license' />
            
        </div>}
        {action==="doctor"?<div></div>:<div className="fingerprint">
            <i class="ri-fingerprint-2-line"></i>
            <p>Enter fingerprint</p>
        </div> }


        <div className="submit">
            <input type="submit" name="submit" id="signup" value="Sign up" />
        </div>
        
        </div>
        </form>
      
    </div>
  )
}

export default Signup
