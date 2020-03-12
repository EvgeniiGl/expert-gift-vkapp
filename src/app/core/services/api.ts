import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {baseUrl} from "../../../config";

export type ResponseType<T> = {
    status: boolean,
    code: number,
    message: string,
    data?: any
}

//TODO add error handling
class api {
    private fetchClient = (): AxiosInstance => {
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


    public get = async <T>(uri: string = ''): Promise<ResponseType<{ data: T }>> => {
        const instance = this.fetchClient();
        try {
            const response: AxiosResponse = await instance.get<T>(uri);
            return response.data;
        } catch (e) {
            return e;
        }
    };

    public post = async <T>(uri: string = '', data: {}): Promise<ResponseType<{ data: T }>> => {
        const instance = this.fetchClient();
        try {
            const response: AxiosResponse = await instance.post<T>(uri, data);
            return response.data;
        } catch (e) {
            return e;
        }
    };
};

export const API = new api();
