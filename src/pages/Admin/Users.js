import axios from "axios";
import AdminMenu from "../../components/layout/AdminMenu"
import Layout from "../../components/layout/Layout";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";


const Users = () => {
  const [auth] = useAuth();
  const [users, setUsers] = useState([]); // Initialize as an array
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/all-users`);
      setUsers(data);
    } catch (error) {
     
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>All Users</h1>
            <table>
              <thead>
                <tr style={{marginLeft:"4px"}}>
                  <th>S no</th>
                   
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user,i) => (
                  <tr key={user.id}>
                   <tr>{i+1}</tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
