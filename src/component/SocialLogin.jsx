/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const SocialLogin = () => {

    const { signInWithGoggle } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        signInWithGoggle()
            .then(res => {
                const logedUser = res.user;
                const savedUser = { name: logedUser.displayName , email: logedUser.email}
                
                fetch("http://localhost:5000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(dt => {
                        if(dt.insertedId){
                            Swal.fire(
                                'User created Successfully!',
                                'Success!',
                                'success'
                            )
                        }
                    })
                    .catch(er => console.log(er.message))

                if(logedUser){
                    navigate(from, { replace: true });
                }

            })
            .catch(er => console.log(er.message))
    }

    return (
        <div className="w-full ">
            <button onClick={handleGoogleLogin} className="p-4 btn-ghost text-orange-400 text-lg rounded-xl w-full flex justify-center"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;