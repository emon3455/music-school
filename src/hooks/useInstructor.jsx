import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useInstructors=()=>{

    const {user} = useContext(AuthContext);
    const [axiosSecure]= useAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({

        queryKey: ['isInstructor', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }

    })

    return [isInstructor, isInstructorLoading];

}
export default useInstructors;