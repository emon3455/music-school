import Marquee from "react-fast-marquee";
import useClasses from "../../../hooks/useClasses";

const TopClasses = () => {

    const [classes] = useClasses();
    const approvedClass = classes.filter(cls => cls.status === "approved");

    return (
        <div className="p-2 my-5">


            <h2 className="text-xl lg:text-4xl text-center my-5 text-violet-500 font-extrabold">Our Top Classes</h2>

            <Marquee>
                <div className="grid grid-cols-6 gap-5 p-4">
                    {
                        approvedClass.slice(0, 6).map(classItem => <div key={classItem._id} className="card card-compact flex flex-col bg-base-100 shadow-lg shadow-sky-300/50">

                            <figure><img src={classItem.image} alt="classes" className="w-60 mx-auto" /></figure>

                            <div className="card-body justify-end">
                                <h2 className="card-title">{classItem.name}</h2>
                            </div>

                        </div>)
                    }
                </div>
            </Marquee>

        </div>
    );
};

export default TopClasses;