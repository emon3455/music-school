
const Footer = () => {
    return (
        <div>
            <div className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Singing</a>
                    <a className="link link-hover">Coreography</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <a className="link link-hover">01751589072</a>
                    <a className="link link-hover">01633643102</a>
                    <a className="link link-hover">musicScholling@gmail.com</a>
                </div>
                <div>
                    <span className="footer-title">Subscribe Now</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@gmail.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-info absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by Music Scholling BD</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;