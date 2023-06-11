/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../component/SocialLogin";
import login from "../../assets/signin.jpg";
import Swal from "sweetalert2";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import { FaEyeSlash } from "react-icons/fa";



const SignIn = () => {

    const [hide, setHide] = useState(true);
    const { signInUser } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";


    const onSubmit = data => {

        signInUser(data.email, data.password)
            .then(res => {
                const logedUser = res.user;
                if (logedUser) {
                    Swal.fire(
                        'Successfully Loged In!',
                        'Success!',
                        'success'
                    )
                    reset();
                    navigate(from, { replace: true });
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
        <div className='my-5' >
            <Helmet>
                <title>Music Scholling | SignIn</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-2">
                <div className="card w-full max-w-md shadow-lg shadow-indigo-500/50 bg-base-100 order-2 md:order-1">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-3xl font-bold text-center text-violet-700">Sign in</h2>
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
                                <span onClick={()=>setHide(!hide)} className="btn btn-ghost border border-l-0 border-collapse absolute right-0">
                                    <FaEyeSlash></FaEyeSlash>
                                </span>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>

                        <input type="submit" value="Login" className="btn btn-info mt-2 text-white font-semibold" />

                    </form>
                    <div className="px-4 pb-2">
                        <p className="text-center text-gray-600">
                            Don't have an Account? <Link className="text-violet-600" to="/signup">Create an account</Link>
                        </p>
                        <div className="divider"><span className="text-red-400 font-bold">OR Continue With</span></div>

                        <SocialLogin></SocialLogin>

                    </div>

                </div>
                <div className="max-w-lg order-1 md:order-2">
                    <img className="w-full" src={login} alt="login image" />
                </div>
            </div>

        </div>
    );
};

export default SignIn;