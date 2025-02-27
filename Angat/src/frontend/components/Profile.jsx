import { signOut } from "../../helpers/auth";
import { useNavigate } from "react-router-dom";

const Profile = ({ userInitials }) => {
    const navigate = useNavigate();
    const handleLogOut = async () => {
        await signOut();
        navigate('/');
    }

    return <>
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar w-14 h-14">
                <div className="content-center bg-white w-12 rounded-full">
                    <p>
                        {userInitials}
                    </p>
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                </li>
                <li><a>Settings</a></li>
                <li><a onClick={handleLogOut}>Logout</a></li>
            </ul>
        </div>
    </>
}

export default Profile;