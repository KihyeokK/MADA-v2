import AxiosInstance from './axios';

export const getVolunteers = async () => {
    const response = await AxiosInstance({
        method: "get",
        url: "/volunteers",
    });
    
    return response
}

export const getVolunteer = async (id: number) => {
    const response = await AxiosInstance({
        method: "get",
        url: "/volunteers/"+id.toString(),
    });
    return response
}

export const editVolunteer = async (props: {id: number, data: any}) => {
    const response = await AxiosInstance({
        method: "put",
        url: "/volunteers/"+props.id.toString()+"/edit",
        data: props.data
    });
    return response
}

export const createVolunteer = async (data: any) => {
    const response = await AxiosInstance({
        method: "post",
        url: "https://h4i-test-cb933ea63e6e.herokuapp.com/api/volunteers",
        data: data
    });
    return response
}
