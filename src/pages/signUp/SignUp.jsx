/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../component/SocialLogin";
import { useForm } from "react-hook-form";
import registerImg from "../../assets/signup.jpg";
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash } from "react-icons/fa";
const SignUp = () => {

    const [hide, setHide] = useState(true);
    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        createUser(data.email, data.password)
            .then(res => {
                const createdUser = res.user;
                if (createdUser) {

                    updateProfile(createdUser, {
                        displayName: data.name, photoURL: data.photo
                    }).then(() => {

                        const savedUser = { name: data.name, email: data.email, role: "student", image: data.photo }
                        console.log(savedUser);

                        fetch("https://music-school-server.onrender.com/users", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(dt => {
                                console.log(dt);
                                if (dt.insertedId) {
                                    Swal.fire(
                                        'User created Successfully!',
                                        'Success!',
                                        'success'
                                    )
                                    reset();
                                    logOut()
                                        .then(() => {
                                            navigate("/signin", { replace: true });
                                        })
                                        .catch(er => console.log(er))
                                }
                            })
                            .catch(er => console.log(er.message))
                    }).catch((error) => {
                        console.log(error.message);
                    });

                }
                else {
                    return;
                }
            })
            .catch(er => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
    };

    return (
        <div>
            <div className='my-5'>
                <Helmet>
                    <title>Music Scholling | SignUp</title>
                </Helmet>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-2">
                    <div className="card w-full max-w-2xl shadow-lg shadow-pink-400/50 bg-base-100 order-2 md:order-1">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-3xl font-bold text-center text-violet-600">Sign Up</h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600 ">name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="name" {...register("photo", { required: true })} placeholder="photo" className="input input-bordered" />
                                    {errors.photo && <span className="text-red-600 ">Photo URL is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="input input-bordered w-full" />
                                    {errors.email && <span className="text-red-600 ">email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type={`${hide ? "password" : "text"}`} {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })} placeholder="password" className="input input-bordered w-full" />
                                        <span onClick={() => setHide(!hide)} className="btn btn-ghost border border-l-0 border-collapse absolute right-0">
                                            <FaEyeSlash></FaEyeSlash>
                                        </span>
                                    </div>
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>
                            </div>

                            <input type="submit" value="Sign Up" className="btn btn-info mt-2 text-white font-semibold" />
                        </form>
                        <div className="px-4 pb-2">
                            <p className="text-center text-gray-600">
                                Already have an Account? <Link className="text-sky-600" to="/signin">Login</Link>
                            </p>
                            <div className="divider"><span className="text-red-400 font-bold">OR Continue With</span></div>

                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                    <div className="max-w-lg order-1 md:order-2">
                        <img className="w-full" src={registerImg} alt="login image" />
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SignUp;