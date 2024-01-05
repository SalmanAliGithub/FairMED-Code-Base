import React , {useState} from 'react';
import './signup.css';
import doctor from '../Assets/doctors-signup.png';
import patient from '../Assets/heart.png';


const Signup = (props) => {

    const [action,setAction] = useState("patient");
    const [click,setClick] = useState('email');


    return (props.trigger) ? (

    <div className='container popup'>
        <div className="popup-inner">
            <div className='header'>
                    <div className='text'>Sign Up</div>
                    <div className="choose">I am</div>
                    
                </div>
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
                
                <div className="inputs">
                <div className="input">
                    <input type="text" placeholder='Name'/>
                </div>
                <div className='input'>
                    <input type="email" placeholder='Email' />
                </div>

                <div className={click==='phone'?  <div className="input">
                    <input type="number" placeholder='Phone number' />
                </div> : <div></div>}>
            
                </div>
            
                
            
                <div className='phoneno'><p>Use <span className='phone' onClick={()=>{setClick('phone')}}>Phone number</span> instead?</p></div>
                <div className="input">
                    <input type="password" placeholder='Password' />
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
                    <a href="/patient-dashboard"><input type="submit" name="submit" id="signup" value="Sign up" /></a>
                </div>
                            
                
                </div>
                <button className='close-btn'>close</button>
                {props.children} 
        </div>
        
    </div>
    ) : "" ;
}


export default Signup
