import { useState } from 'react';
import supabase from '../../helpers/supabaseClient';

function User({ uid, username: initialUsername, email, onUserUpdated, onDeleteUser }) {
    const [username, setUsername] = useState(initialUsername);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    let deleteId = `delete-${uid}`;
    let editId = `edit-${uid}`;

    // Handle username update
    const handleUpdateUsername = async () => {
        setLoading(true);
        setError(null);

        const { error } = await supabase
            .from("users")
            .update({ username })
            .eq("uid", uid);  

        if (error) {
            setError(error.message);
        } else {
            onUserUpdated({ uid, username, email });
            document.getElementById(editId).close(); 
        }
        setLoading(false);
    };

    // Handle user deletion
    const handleDeleteUser = async () => {
        const { error } = await supabase
            .from("users")
            .delete()
            .eq("uid", uid);

        if (error) {
            setError(error.message);
        } else {
            onDeleteUser(uid);
            document.getElementById(deleteId).close(); 
        }
    };

    return (
        <>
            <div className='flex flex-col md:flex-row gap-4 w-full items-center bg-base-300 p-3 rounded-lg'>
                <div className='flex flex-col items-center md:items-start w-full'>
                    <div className='font-bold text-2xl'>{username}</div>
                    <div className="flex flex-row gap-4">
                        <div className="font-bold text-sm">{email}</div>
                    </div>
                </div>

                <div className="flex flex-row gap-2">
                    {/* Edit Button */}
                    <button className='btn btn-primary' onClick={() => document.getElementById(editId).showModal()}>
                        Edit
                    </button>

                    {/* Edit User Modal */}
                    <dialog id={editId} className="modal">
                        <div className="modal-box bg-base-200">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Edit User</h3>
                            <div>{email}</div>
                            <input 
                                type="text" 
                                className="input mt-2 w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            {error && <p className="text-red-500">{error}</p>}
                            <button 
                                className="btn btn-primary mt-2 w-full"
                                onClick={handleUpdateUsername}
                                disabled={loading}
                            >
                                {loading ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </dialog>

                    {/* Delete Button */}
                    <div className='btn btn-primary' onClick={() => document.getElementById(deleteId).showModal()}>
                        Delete
                    </div>

                    {/* Delete User Modal */}
                    <dialog id={deleteId} className="modal">
                        <div className="modal-box bg-base-200">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="font-bold text-lg">Delete User</h3>
                            <div>
                                Are you sure you want to delete user account <span className="font-bold">{username}</span>?
                            </div>
                            <div className="flex flex-row gap-2">
                                <button className='btn btn-primary grow' onClick={handleDeleteUser}>
                                    Yes
                                </button>
                                <button className='btn btn-primary grow' onClick={() => document.getElementById(deleteId).close()}>
                                    No
                                </button>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </>
    );
}

export default User;
