import instance from 'axios';

const AxiosClient = instance.create({
    baseURL: 'http://localhost:8080/'
});

const requestHandle = (request) => {
    request.headers['Accept'] = "application/json";
    request.headers['Content-type']='application/json';
    const session = JSON.parse(localStorage.getItem('user') || null);
    if(session?.isLogged)
    request.headers["Authorization"] = `Bearer ${session.token}`;
    return request;
}