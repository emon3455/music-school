import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useEnrolledClass = () => {

    const {user, loading} = useContext(AuthContext);
    
    const [axiosSecure] = useAxiosSecure();

    const {  refetch, data: enrolledClasses=[] } = useQuery({

        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/enrolledClasses?email=${user?.email}`);
            return res.data;
        },
    })

    return [enrolledClasses, refetch];
};

export default useEnrolledClass;