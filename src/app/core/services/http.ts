import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {isProduction} from "../../config";

const baseURL = isProduction ? 'http://localhost:8000/' : 'http://localhost:8000/';

class http {

    private fetchClient = (): AxiosInstance => {
        const defaultOptions = {
            baseURL: baseURL,
            headers: {
                'Content-Type': 'application/json',
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
        console.log('log-- ',);
        const instance = this.fetchClient();
        try {
            return await instance.post<T>(uri, data);
        } catch (e) {
            return e;
        }
    };


};

export const HTTP = new http();
