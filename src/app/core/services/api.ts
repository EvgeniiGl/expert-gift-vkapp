import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {isProduction} from "../../../config";

const baseURL = isProduction ? 'http://localhost:8000/' : 'http://localhost:8000/';

export type ResponseType = {
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
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${id}`
            },
        };
        let instance = axios.create(defaultOptions);
        return instance;
    };


    public get = async <T>(uri: string = ''): Promise<ResponseType> => {
        const instance = this.fetchClient();
        try {
            const response: AxiosResponse = await instance.get<T>(uri);
            return response.data;
        } catch (e) {
            return e;
        }
    };

    public post = async <T>(uri: string = '', data: {}): Promise<ResponseType> => {
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
