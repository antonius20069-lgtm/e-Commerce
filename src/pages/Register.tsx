import {Actauth,reset} from '../store/auth/authstor';

import { useAppDispatch , useAppSelector } from '../store/hook';
import { Link } from 'react-router-dom';
import * as z from "zod";
import styled from 'styled-components';
import { useForm ,type SubmitHandler } from "react-hook-form";  
import { zodResolver } from "@hookform/resolvers/zod";
import  Input  from "../COMPONENTS/forms/input/input";
import useCheckEmail from "../COMPONENTS/forms/input/Chekemail";
import { useNavigate ,Navigate } from 'react-router-dom';
import { useEffect } from 'react';
const Userd = z.object({
  Firstname: z.string().min(1, { message: "First name is required" }),
  Lastname: z.string().min(1, { message: "last name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters" })
  .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
, { message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character" }),
  confirmPassword: z.string().min(1, { message: "Confirm Password is required" })
}).refine((val  ) => val.password === val.confirmPassword ,{   
  message: "Passwords do not match",
    path: ["confirmPassword"]
});

type Inputs = z.infer<typeof Userd>

const Register = () => {
const navigate = useNavigate()
  const dispatch = useAppDispatch()
const { error ,accesstoken} = useAppSelector(state => state.AuthSlice)
const {register, handleSubmit, formState: { errors } ,getFieldState ,trigger} = useForm<Inputs>({
  resolver: zodResolver(Userd),
  mode:"onBlur"
});
 const onSubmit: SubmitHandler<Inputs> = async (data) => {
  
  const { Firstname ,Lastname ,email ,password  } = data
  dispatch(Actauth({ Firstname ,Lastname ,email ,password  })).unwrap().then(() => navigate("/login?success=true"))   
} 
const {emailavailable , resetemail,enteremail,chekemails} = useCheckEmail()


const emailonblur = async (e: React.FocusEvent<HTMLInputElement>) => {
  const isValidEmail = await trigger("email") 
const {isDirty } = getFieldState("email")
const value = e.target.value



if (isValidEmail && isDirty && enteremail !== value){
  // register("email").onBlur(e)   
chekemails(value) 

}
if(enteremail && value.length === 0){

resetemail()
}

}
 useEffect(() => {
   return () => {
     dispatch(reset())
   }
 } , [dispatch])

 
 if (accesstoken) {
  
return <Navigate to="/" />

}
  return (
    <StyledWrapper>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <Input name='Firstname' label='Firstname' register={register} errors={errors.Firstname?.message}/>

          <Input name='Lastname' label='Lastname' register={register} errors={errors.Lastname?.message}/>
        </div>  
          <Input
           onBlur={emailonblur}
           used={emailavailable === "notavailable" ? "email not available" : ""}
         formText ={emailavailable === "checking" ? " Checking..." : ""}
         sucess={emailavailable === "available" ? " available":"" }
          
          name='email'
           label='email'
            register={register}
             errors={errors.email?.message}/>
          <Input type='password' name='password' label='password' register={register} errors={errors.password?.message}/>

          <Input  type='password' name='confirmPassword' label='confirmPassword' register={register} errors={errors.confirmPassword?.message}/>
{error && <p style={{color:"red"}}>{error}</p>}

        <button className="submit" disabled={emailavailable === "notavailable"}>Submit</button>

<p className="signin">Already have an account? <Link to="/login">Log in</Link></p>

      </form>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form {
    margin: auto auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 450px;
    padding: 15px;
    border-radius: 20px;
    position: relative;
    background-color: #1a1a1a;
    color: #fff;
    border: 1px solid #333;
  }

  .title {
    font-size: 25px;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
    color: #00bfff;
    margin-bottom: 10px;
        margin-top: 15px;

  }

  .title::before {
    width: 18px;
    height: 18px;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: #00bfff;
  }

  .message, 
  .signin {
    font-size: 14.5px;
    color: rgba(255, 255, 255, 0.7);
  }

  .signin {
    text-align: center;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .signin a {
    color: #00bfff;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    background-color: #333;
    color: #fff;
    width: 100%;
    padding: 20px 05px 05px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    color: rgba(255, 255, 255, 0.5);
    position: absolute;
    left: 10px;
    top: 0px;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 12.5px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    color: #00bfff;
    top: 0px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .input {
    font-size: medium;
  }

  .submit {
    border: none;
    outline: none;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: .3s ease;
    background-color: #00bfff;
  }

  .submit:hover {
    background-color: #00bfff96;
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }`;

export default Register 
