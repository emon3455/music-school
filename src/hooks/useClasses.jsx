import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useClasses = () => {

    const { user, loading } = useContext(AuthContext);
    
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: classes = [] } = useQuery({

        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/classes`);
            return res.data;
        },
    })

    return [classes, refetch];
};

export default useClasses;