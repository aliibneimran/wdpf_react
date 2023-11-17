import React, {useEffect,useState}  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Insert from './Insert';

export default function Users() {
    useEffect( () => {
        window.scrollTo(0, 0);
        alluser();
      }, []); 
    
      const [isuser, setuser] = useState([]);
      const alluser = async (ids) => {
        try {
          axios.get(`http://localhost/wdpf_react/reactapp3/api/users.php`)
          .then(res => {
            console.log(res.data.userlist)
            setuser(res.data.userlist);
          })  
        } catch (error) { throw error;}  
      }
      const deleteconfirm = (id)=>{
        if(window.confirm("Are you sure to delete?")){
            deleteUser(id);
        }
        // alert(id)
      }
      const deleteUser = async (id) => {
        try {
          axios.post(`http://localhost/wdpf_react/reactapp3/api/delete.php`, { 
            userids: id,
          })
          .then(res => {
            setuser([]);
            alluser();
            return;
           }) 
        } catch (error) { throw error;} 
      }
      if(isuser){
  return (
    <>
        <div className="container">
            <h1>Users List</h1>
            {/* <Link to="/entry" className='btn btn-success'>Add New</Link>  <br/><br /> */}
            
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        isuser.map((item,index)=>

                        <tr>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.date}</td>
                            <td>
                              <button onClick={()=>deleteconfirm(item.user_id)} className='mx-3 btn btn-danger'>Delete</button>
                              <button className='btn btn-primary'>Edit</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            <br />
<Insert></Insert>
            {/* <form action="" onSubmit={handleSubmit} className='form-control'>
              <input type="text" className='form-control' name='name' placeholder='Enter Your Name' value={userInfo.name} onChange={handleChange}/><br/>
              <input type="email" className='form-control' name='email' placeholder='Enter Your Email'  value={userInfo.email} onChange={handleChange}/><br/>
              <button name='submit' className='btn btn-success'>Submit</button>
            </form> */}

        </div>
    </>
  )
}else{
  return(
    <div className='container'>
      <h1>No Data Found</h1>
      <Link to="/entry" className='btn btn-success'>Add New</Link>  <br/><br />
    </div>
  )
}
}
