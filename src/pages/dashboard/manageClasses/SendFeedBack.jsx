/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const SendFeedBack = () => {

    const params = useParams();
    const [cls, setCls] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/classes/${params.id}`)
            .then(res => res.json())
            .then(data => setCls(data))
    }, [params])


    const handleSubmit = (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        console.log(text);
        const token = localStorage.getItem('access-token');

        fetch(`http://localhost:5000/classes/feedback/${cls?._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ feedback: text })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Succussfully Done',
                        text: `FeedBack Send To ${cls.instructorName}!!`,
                    })
                    e.target.reset();
                }
            })
            .catch(err => console.log(err.message))

    }

    return (
        <div className="">
            <Helmet>
                <title>Music Scholling | Send FeedBack</title>
            </Helmet>

            {
                cls
                    ?
                    <>
                        <h2 className="text-3xl mt-5 text-violet-600 font-bold text-center ">Send Feedback To Instructor: {cls.instructorName}</h2>

                        <div className="card mx-auto my-5 max-w-4xl bg-base-100 shadow-2xl">
                            <form onSubmit={handleSubmit} className="card-body">
                                <h2 className="text-2xl text-center font-bold">Send Feedback!!</h2>
                                <p className="text-xl font-semibold">FeedBack on: {cls.name}</p>

                                <textarea name="text" required className="textarea textarea-info w-full" placeholder="Feedback"></textarea>

                                <div className="">
                                    <input className="btn btn-info" type="submit" value="Send" />
                                </div>

                            </form>
                        </div>
                    </>
                    :
                    <div className="h-60 w-full flex justify-center items-center">
                        <progress className="progress w-56"></progress>
                    </div>
            }
        </div>
    );
};

export default SendFeedBack;