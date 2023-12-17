import { getAuth, signOut } from "@firebase/auth";
import { FaUserAlt } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { removeUser } from "../redux/counterSlice";
import { userAvatar } from "../assets";



const DropDown = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.counter.userInfo);

    const handleSignOut = () => {
        signOut(auth).then(() => {

            dispatch(removeUser());
            navigate('/login');
            toast.success('Sign out Successfully');

        }).catch((error) => {
            toast.error('Sign out Error: ' + error);
        });
    };
    return (
        <div className="dropdown dropdown-end dropdown-hover">
            <div tabIndex={0} role="button" className=" m-1">
                <div className="avatar">
                    <div className="w-8 rounded-full ring ring-purple-700 ring-offset-base-100 ring-offset-2">
                        <img src={userInfo ? userInfo?.image : userAvatar} alt="user-image" />
                    </div>
                </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-44">
                {userInfo === null ? <li>
                    <a>
                        <FaUserAlt />
                        <p className='decoration-gray-600 truncate'>No User</p>
                    </a>
                </li>
                    : <li className="tooltip" data-tip={userInfo?.name}>
                        <a>
                            <FaUserAlt />
                            <p className='decoration-gray-600 truncate'>{userInfo?.name}</p>
                        </a>
                    </li>}

                {
                    userInfo === null ?
                        <li onClick={() => navigate('/login')}>
                            <a>
                                <IoExitOutline size={24} className="rotate-180" />
                                <span>Login</span>
                            </a>
                        </li> :
                        <li onClick={handleSignOut}>
                            <a>
                                <IoExitOutline size={24} />
                                <span>Logout</span>
                            </a>
                        </li>
                }
            </ul>
        </div>
    );
};

export default DropDown;