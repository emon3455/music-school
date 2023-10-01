

const Location = () => {
    return (
        <>
            <h2 className="text-xl lg:text-4xl text-center text-violet-500 mt-10 mb-5 font-bold">Our Location</h2>
            <div className="w-full h-96 mx-auto my-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.462637539056!2d90.39441833515819!3d23.778895394660708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1696052420819!5m2!1sen!2sbd"
                    width="100%"
                    height="384"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg border-2"
                ></iframe>
            </div>
        </>
    );
};

export default Location;