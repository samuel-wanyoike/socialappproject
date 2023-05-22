import { Link } from "react-router-dom";
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

export const Navbar = () => {

    //this hook helps to switch users 
    const [user] = useAuthState(auth);

    const signUserOut = async () => {
         await signOut(auth);
        };

    return (
        <div className="navbar">
            <div className="links">
                <Link to='/'> Main </Link>
                {!user ? (
                <Link to='/login'> Login </Link>
                ) : (
                <Link to='/create-post'> Create Post </Link>
                )}
            </div>

            <div className="user">
                {user &&
                    <>
                        <p>{user?.displayName}</p>
                        <img src={user?.photoURL || ''} width='50' height='50' />
                        <button onClick={signUserOut}>Sign Out</button>
                    </>
                }
            </div>
        </div>
    )
}