import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {baseUrl} from "../../../config";


export type SuccessResponse = {
    "status": boolean,
    "code": number,
    "message": string,
    "data": any | null
}

//TODO depricated remove this class, use API
class http {
    private fetchClient = (): AxiosInstance => {
        console.warn("Service HTTP depricated instead use API (core/services/api.ts)");
        const id = localStorage.getItem('user_id');
        const defaultOptions = {
            baseURL: baseUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${id}`
            },
        };
        let instance = axios.create(defaultOptions);
        return instance;
    };


    public get = async <T>(uri: string = ''): Promise<AxiosResponse<T>> => {
        const instance = this.fetchClient();
        try {
            return await instance.get<T>(uri);
        } catch (e) {
            return e;
        }
    };

    public post = async <T>(uri: string = '', data: {}): Promise<AxiosResponse<T>> => {
        const instance = this.fetchClient();
        try {
            return await instance.post<T>(uri, data);
        } catch (e) {
            return e;
        }
    };


};

export const HTTP = new http();
