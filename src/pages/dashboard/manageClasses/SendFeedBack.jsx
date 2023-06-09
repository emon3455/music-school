/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SendFeedBack = () => {

    const params = useParams();
    const [cls, setCls] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/classes/${params.id}`)
            .then(res => res.json())
            .then(data => setCls(data))
    }, [params])

    console.log(cls);


    return (
        <div className="">

            {
                cls
                    ?
                    <>
                        <h2>Send Feedback To: {cls.instructorName}</h2>

                        <div className="card max-w-4xl bg-base-100 shadow-xl">
                            <form className="card-body">
                                <h2 className="card-title">Send Feedback</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
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