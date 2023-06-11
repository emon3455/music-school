/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyClass = () => {

    const navigate = useNavigate();
    const params = useParams();
    const [cls, setCls] = useState(null);

    useEffect(() => {
        fetch(`https://music-school-server-rho.vercel.app/classes/${params.id}`)
            .then(res => res.json())
            .then(data => setCls(data))
    }, [params])


    const handleSubmit = e => {

        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const availableSeats = form.availableSeats.value;
        const price = form.price.value;

        if(cls.name==name && cls.image==image && cls.availableSeats==availableSeats && cls.price==price){
            Swal.fire({
                icon: 'error',
                title: 'Please Update Atleast One field',
                showConfirmButton: true,
            })
            return;
        }

        const newClass = {
            image: image,
            name: name,
            availableSeats: availableSeats,
            price: price,
        }
        const token = localStorage.getItem('access-token');

        fetch(`https://music-school-server-rho.vercel.app/myclasses/${cls?._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify(newClass)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Succussfully Done',
                        text: `Class Info Updated`,
                    })
                    navigate("/dashboard/myClass");
                }
                
            })
            .catch(err => console.log(err.message))
    }

    return (

        <div>
            <Helmet>
                <title>Music Scholling | Update Classes</title>
            </Helmet>

            {
                cls
                    ?
                    <>
                        <h2 className="text-3xl text-center font-extrabold mt-5">Update Your Class: <span className="text-red-500">{cls?.name}</span> </h2>

                        <div className="mt-5 card mx-auto max-w-2xl drop-shadow-2xl bg-base-100 order-2 md:order-1">
                            <form onSubmit={handleSubmit} className="card-body">
                                <h2 className="text-3xl font-bold text-center text-violet-600">Update Class</h2>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Class Name</span>
                                        </label>
                                        <input type="text" defaultValue={cls.name} name="name"  placeholder="name" className="input input-bordered" />
                                        
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Class Image</span>
                                        </label>
                                        <input type="text" defaultValue={cls.image} name="image"  placeholder="photo" className="input input-bordered" />
                                        
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Sits</span>
                                        </label>
                                        <input type="number" defaultValue={cls.availableSeats} name="availableSeats"  placeholder="sits" className="input input-bordered" />
                                        
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="number" defaultValue={cls.price} name="price"  placeholder="price" className="input input-bordered" />
                                        
                                    </div>

                                </div>

                                <input type="submit" value="Update Class" className="btn btn-warning mt-2 font-bold" />
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

export default UpdateMyClass;