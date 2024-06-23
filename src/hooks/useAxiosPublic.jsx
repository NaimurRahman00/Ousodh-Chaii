import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://ousodh-chai.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;