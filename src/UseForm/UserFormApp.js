import React from "react";
import ReactDOM from "react-dom";
import { useForm } from 'react-hook-form';
import "./styles.css";

function UserFormApp() {


  const onSubmit = (data) => {
    console.log(data);
  };
  const { register, handleSubmit, errors } = useForm(); 

  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name="firstName" 
      ref={register({required:true, minLength:3})}/>

      {errors.firstName && <p>This field is required</p>}
      {errors.firstName && errors.firstName.type === 'minLength' && <p>This field should have at least 3 letter</p>}

      <label>Last Name:</label>
      <input
          name="name"
          placeholder="Name"
          ref={register({
            pattern: {
              value: /[A-Za-z]/,
              message:
                "Sorry this CodeSandbox can only handle names with characters"
            }
          })}
        />
        {errors.name?.message && <p>{errors.name?.message}</p>}
      <label>Gender</label>
      <select name="gender"ref={register({required:true})}>
        <option value=''>Select...</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>

      <label>Username</label>
      <input name="username"ref={register({required:true})} />

      {errors.username && <p>This field is required</p>}

      <label>Email</label>
      <input name="email"ref={register({required:true})}/>

      <label>About you</label>
      <textarea name="about you"ref={register({required:true})}/>

      <input type="submit" />
    </form>
  );
}


export default UserFormApp