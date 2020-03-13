import React from 'react';
import ReactDOM from 'react-dom';
import * as S from './style';
import {Subject, Subscription} from 'rxjs';
import {IAlert} from "app/core/components/alert";


interface IState {
    bottom: string
    message: string
    color: string
}

export const alerts$ = new Subject<IAlert>();

const root:any  = document.getElementById("root");
//todo rewrite with react-spring or other libraries ?
export default class Alert extends React.Component<{}, IState> {

    private alertsStream: Subscription = new Subscription();

    state = {
        bottom: '-82',
        message: '',
        color: 'none'
    };

    private showAlert = (alert: IAlert) => {
        this.setState({
            bottom: '0',
            message: alert.message,
            color: alert.type
        });
        setTimeout(this.hideAlert, 5000);
    };

    public componentDidMount(): void {
        this.alertsStream = alerts$.subscribe(this.showAlert);
    }

    public componentWillUnmount(): void {
        this.alertsStream.unsubscribe();
    }

    private hideAlert = () => {
        this.setState({
            bottom: '-82'
        });
    };

    render(): React.ReactElement {
        const {bottom, color, message} = this.state;
        return ReactDOM.createPortal(
            <S.Container bottom={bottom} color={color}>{message}</S.Container>,
            root
        );
    }
}
