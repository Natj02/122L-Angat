import { useState, useEffect } from 'react'
import angatLogo from '../assets/img/logo.svg'
import banner from '../assets/img/banner.png'
import './components/header'
import Header from './components/header'
import Footer from './components/footer'
import User from './components/user'
import supabase from "../helpers/supabaseClient"; 

function ManageUsers() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("users")
        .select(`username, email`);

      if (error) {
        setError(error.message);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once when the component mounts

  console.log(data)
  return (
    <> 
            <div className=" w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
                <div className="flex flex-row justify-between ">
                    <div className="text-3xl font-bold">
                        Manage Users
                    </div>
                </div>
                <h1 className="text-blue-600 font-lg w-full text-center">{error}</h1>
                <div className="flex flex-col pt-4 gap-4">
                    {data.map((user, index) => (
                      <User 
                      username={user.username}
                      email={user.email}
                      />
                    ))}
                </div>
             
            </div>


          

    </>
  )
}

export default ManageUsers
