import React from "react";
import Layout from "../../components/layout/Layout";
import UserMenu from "../../components/layout/UserMenu";
import { useAuth } from "../../context/auth";

const Profile = () => {
  const [auth, setAuth] = useAuth();
    const { email, name, phone, adddress } = auth?.user;
           
 
  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Your Profile</h1>
            <h4>Name-:{name}</h4>
            <h4>Email-:{email}</h4>
            <h4>Phone-:{phone}</h4>
            <h4>Address-:{adddress}</h4>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;