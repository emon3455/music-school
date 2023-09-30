/* eslint-disable no-unused-vars */
import { Bounce, Fade } from "react-awesome-reveal";
import contact from "../../../assets/contact.png";
import Swal from "sweetalert2";

const Contact = () => {

    const handleSend = (e) => {
        e.preventDefault();
        if (e.target.email.value && e.target.message.value) {
            Swal.fire({
                icon: 'success',
                title: 'Success!!',
                text: 'Message Successfully Send',
            });
            e.target.reset();
        }
    }

    return (
        <div className="mt-20 p-5">

            <h3 className="text-xl lg:text-4xl font-extrabold text-violet-500 text-center my-5">Contact US</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center mt-0 gap-5">
                <div className="w-full max-w-lg mx-auto shadow-lg shadow-cyan-500/50 rounded-2xl bg-base-100 order-2 md:order-1">
                    <form onSubmit={handleSend} className="card-body">
                        <Bounce className="text-xl lg:text-2xl text-center font-bold">
                            Send Message!!
                        </Bounce>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" required name="email" id="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea required name='message' placeholder="Message" className="textarea textarea-info rounded-lg p-2 h-24" />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-warning font-medium">Send</button>
                        </div>
                    </form>
                </div>

                <div className="max-w-full order-1">
                    <img className="w-full rounded-xl" src={contact} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;