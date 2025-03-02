import { useState, useEffect } from 'react';
import User from './components/user';
import supabase from "../helpers/supabaseClient";

function ManageUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("uid, username, email"); 

      if (error) {
        setError(error.message);
      } else {
        setUsers(data);
      }
    };

    fetchData();
  }, []);

  // Handle user update
  const handleUserUpdated = (updatedUser) => {
    setUsers(users.map(user => (user.uid === updatedUser.uid ? updatedUser : user)));
  };

  // Handle user deletion
  const handleUserDeleted = (uid) => {
    setUsers(users.filter(user => user.uid !== uid));
  };

  return (
    <> 
      <div className="w-full lg:w-7/10 px-4 sm:px-16 py-10 mx-auto bg-base-200">
        <div className="text-3xl font-bold">Manage Users</div>
        <h1 className="text-red-600 font-lg w-full text-center">{error}</h1>
        <div className="flex flex-col pt-4 gap-4">
          {users.map((user) => (
            <User 
              key={user.uid} 
              uid={user.uid}
              username={user.username}
              email={user.email}
              onUserUpdated={handleUserUpdated}
              onDeleteUser={handleUserDeleted}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ManageUsers;
