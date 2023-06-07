import { useEffect, useState } from "react";

const TopClasses = () => {

    const [classes, setClasses] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/classes")
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(er => console.log(er.message))
    }, [])

    console.log(classes);

    return (
        <div className="p-2 my-5">

            <h2 className="text-4xl text-center my-5 text-violet-500 font-bold">Our Top Classes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    classes.slice(0, 6).map(classItem => <div key={classItem._id} className="card card-compact bg-base-100 shadow-xl">

                        <figure><img src={classItem.image} alt="Shoes" /></figure>

                        <div className="card-body">
                            <h2 className="card-title">{classItem.name}</h2>
                        </div>

                    </div>)
                }
            </div>

        </div>
    );
};

export default TopClasses;