import React, {useEffect,useState}  from 'react'
import axios from 'axios';

export default function Users() {
    useEffect( () => {
        window.scrollTo(0, 0);
        alluser();
      }, []); 
    
      const [isuser, setuser] = useState([]);
      const alluser = async (ids) => {
          axios.get(`http://localhost/wdpf_react/reactapp3/api/users.php`)
          .then(res => {
            console.log(res.data.userlist)
            setuser(res.data.userlist);
          })   
      }
      const deleteconfirm = (id)=>{
        if(window.confirm("Are you sure to delete?")){
            deleteUser(id);
        }
        // alert(id)
      }
      const deleteUser = async (id) => {
          axios.post(`http://localhost/wdpf_react/reactapp3/api/delete.php`, { 
            userids: id,
          })
          .then(res => {
            setuser([]);
            alluser();
            return;
           }) 
      }
  return (
    <>
        <div className="container">
            <h1>Users List</h1>
            
            <table className='table table-striped table-dark'>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        isuser.map((item,index)=>

                        <tr key={index}>
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
}
