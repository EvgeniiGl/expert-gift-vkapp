import * as React from "react";
import {Screen, ScreenStore} from '../../stores/ScreenStore';

export interface Props {
    ScreenStore: ScreenStore;
}


export class Status extends React.Component<Props> {


    render() {
        const ScreenStore = this.props.ScreenStore;
        if (ScreenStore.screen != Screen.Status) return null;
        return <div>Status</div>;
    }
}