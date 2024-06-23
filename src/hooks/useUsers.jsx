import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const axiosSecure = useAxiosSecure()
  
    const { data: allUsers = [], isLoading } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const { data } = await axiosSecure(`/users`)
        return data
      },
    })
 
    //   Fetch user info using logged in user email
  
    return [allUsers, isLoading]
};

export default useUsers;