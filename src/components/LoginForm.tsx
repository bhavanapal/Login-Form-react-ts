import { useState } from "react";

type User= {
    email:string;
    password:string;
}

const Login = ()=>{
    
    const [user, setUser] = useState<User>({email:'', password:''});
    const [emailerror, setEmailError] = useState({emailErrorMessage:'', label:''});
    const [pwderror, setPwdError] = useState({pwdErrorMessage:'', label:''});
    const takeInput = (event:React.ChangeEvent<HTMLInputElement>, label:string)=>{
        
        const txtValue = event?.target?.value;
        if(label ==='email'){
            user.email = txtValue;
            validateEmail(user.email);
        }
        else{
            user.password = txtValue;
            validatePassword(user.password);
        }
        setUser({...user}); // change state (Immutable)
        console.log('Txt Value is ', txtValue);
    }
    const validateEmail = (email:string)=>{
        if(email.trim().length ==0){
            setEmailError({emailErrorMessage:'Blank Value', label:'Email'});
        }
        else{
            setEmailError({emailErrorMessage:'', label:''});         
        }
    }

    const onFormSubmit = (event:any)=>{
        validateEmail(user.email);
        validatePassword(user.password);
        event.preventDefault();
        //event.stopPropgation();
        console.log('Login in with :' , {user});
    }
    const validatePassword = (password:string)=>{
        if(password.trim().length ==0){
            setPwdError({pwdErrorMessage:'Blank Value', label:'Password'});
        }
        else{
            setPwdError({pwdErrorMessage:'', label:''});         
        }
    }

    const handleReset = ()=>{
        setUser({});
        // validateEmail('');
        // validatePassword('');
    }

    return (
    <div className="container mx-auto w-1/4 border-solid border-2 border-blue-400 mt-10">
        <h3 className="flex justify-center m-6 bg-blue-300 p-2 text-black font-semibold tracking-normal">Login Form</h3>    
    <form onSubmit={onFormSubmit} className="flex flex-col flex items-center">
        <label className ="font-medium">Email : </label>
        <input onChange={(event)=>{
            takeInput(event, 'email');
        }} type='text' placeholder='Type Email here' className ="border-2 border-grey py-1 m-4 px-3"/>
        {emailerror.emailErrorMessage &&<p style={{color:'red'}}>{emailerror.label} {emailerror.emailErrorMessage}</p>}

        <label className ="font-medium mt-4">Password : </label>
        <input onChange={(event)=>{
             takeInput(event, 'password');
        }} type='password' placeholder='Type Password here' className ="border-2 border-grey py-1 m-4 px-3"/>
        {pwderror.pwdErrorMessage &&<p style={{color:'red'}}>{pwderror.label} {pwderror.pwdErrorMessage}</p>}
        
        <div>
        <button className ="h-10 w-35 px-6 m-6 font-semibold rounded-md border border-slate-200 text-black bg-blue-300">Login</button> &nbsp;
        <button type ='reset' className ="h-10 w-35 px-6 m-6 font-semibold rounded-md border border-slate-200 text-black bg-slate-300"  onClick={handleReset}>Reset</button>
        </div>
    </form>
    </div>
    )
}
export default Login;