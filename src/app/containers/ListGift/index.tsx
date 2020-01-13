
import * as React from "react";
import {Screen, ScreenStore} from '../../stores/ScreenStore';

export interface Props {
    ScreenStore: ScreenStore;
}



export class ListGift extends React.Component<Props> {


    render() {
        const ScreenStore = this.props.ScreenStore;
        if (ScreenStore.screen != Screen.ListGift) return null;
        return <div>ListGift</div>;
    }
}