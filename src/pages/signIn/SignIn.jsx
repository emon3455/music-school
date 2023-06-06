/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../component/SocialLogin";
import login from "../../assets/signin.jpg";



const SignIn = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='mt-5' >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 p-2">
                <div className="card w-full max-w-md drop-shadow-2xl bg-base-100 order-2 md:order-1" data-aos="fade-right" data-aos-duration="3000">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <h2 className="text-3xl font-bold text-center text-violet-700">Sign in</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" {...register("email", { required: true })} className="p-2 border-2 rounded-lg w-full" />
                            {errors.email && <span className="text-red-600 ">email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"  {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>

                        <input type="submit" value="Login" className="btn btn-info mt-2 text-white font-semibold"  />

                    </form>
                    <div className="px-4 pb-2">
                        <p className="text-center text-gray-600">
                            Don't have an Account? <Link className="text-violet-600" to="/signup">Create an account</Link>
                        </p>
                        <div className="divider"><span className="text-red-400 font-bold">OR Continue With</span></div>

                        <SocialLogin></SocialLogin>
                        
                    </div>

                </div>
                <div className="max-w-lg order-1 md:order-2" data-aos="fade-left" data-aos-duration="3000">
                    <img className="w-full" src={login} alt="login image" />
                </div>
            </div>


        </div>
    );
};

export default SignIn;