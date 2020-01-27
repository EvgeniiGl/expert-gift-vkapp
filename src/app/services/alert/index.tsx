import {Subject} from 'rxjs';
import {alerts$} from "@core/services/alert/components";

export enum AlertType {
    'info' = 'blue',
    'success' = 'green',
    'warning' = 'yellow',
    'danger' = 'red',
}

export interface IAlert {
    type: AlertType;
    message: string;
    timeout?: number;
}

const alert = {
    info: (message: string, timeout?: number) => alerts$.next({type: AlertType.info, message, timeout}),
    success: (message: string, timeout?: number) => alerts$.next({type: AlertType.success, message, timeout}),
    warning: (message: string, timeout?: number) => alerts$.next({type: AlertType.warning, message, timeout}),
    danger: (message: string, timeout?: number) => alerts$.next({type: AlertType.danger, message, timeout}),
};

export default alert;