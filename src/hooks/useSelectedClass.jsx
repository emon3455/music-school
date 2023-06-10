import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useSelectedClass = () => {

    const {user, loading} = useContext(AuthContext);
    
    const [axiosSecure] = useAxiosSecure();

    const {  refetch, data: selectedClasses=[] } = useQuery({

        queryKey: ['selectedClasses', user?.email],
        enabled: !loading,
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/selectedClass?email=${user?.email}`);
            return res.data;
        },
    })

    return [selectedClasses, refetch];
};

export default useSelectedClass;