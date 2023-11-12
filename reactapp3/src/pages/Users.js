import React, {useEffect,useState}  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <Link to="/entry" className='btn btn-success'>Add New</Link>  <br/><br />
            
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
                            <td><button onClick={()=>deleteconfirm(item.user_id)} className='btn btn-danger'>Delete</button></td>
                        </tr>
                        )
                    }
                </tbody>
            </table>   

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
