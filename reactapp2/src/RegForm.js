import React, { useState } from 'react'

export default function RegForm() {
    const [inputs, setInputs] = useState({});
    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(inputs.name + "\n"+ inputs.phone + "\n"+ inputs.email + "\n"+ inputs.address + "\n"+ inputs.district + "\n"+ inputs.gender);
    }
    console.log(inputs);
  return (
    <div>
        <h1>Registration Form</h1>
        <form action=""onSubmit={handleSubmit}>
          <input type="text" value={inputs.fname} onChange={changeHandler} name='name' placeholder='Enter Your Name'/><br/><br/>
          <input type="number" value={inputs.phone} onChange={changeHandler} name='phone' placeholder='Enter Your Phone'/><br/><br/>
          <input type="email" value={inputs.email} onChange={changeHandler} name='email' placeholder='Enter Your Email'/><br/><br/>
          <textarea value={inputs.address} onChange={changeHandler} name='address' placeholder='Enter Your Address'></textarea><br/><br/>
          <select name="district" onChange={changeHandler}>
            <option value="">Select One</option>
            <option>Dhaka</option>
            <option>Khulna</option>
            <option>Barisal</option>
          </select><br/><br/>
          <input type="radio" name='gender' value="Male" onChange={changeHandler}/> Male
          <input type="radio" name='gender' value="Female" onChange={changeHandler}/> Female <br/><br/>

          <input type="checkbox" name='php' value="PHP" onChange={changeHandler}/> PHP <br/>
          <input type="checkbox" name='ddd' value="DDD" onChange={changeHandler}/> DDD <br/>
          <input type="checkbox" name='java' value="Java" onChange={changeHandler}/> Java <br/><br/>
          <button>Submit</button>
        </form>
    </div>
  )
}
