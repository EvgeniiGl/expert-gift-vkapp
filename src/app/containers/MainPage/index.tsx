import * as React from "react";

// import {Screen, ScreenStore} from '../../stores/ScreenStore';

export interface Props {
    // ScreenStore: ScreenStore;
}


export class MainPage extends React.Component<Props> {


    render() {
        // const ScreenStore = this.props.ScreenStore;
        // if (ScreenStore.screen != Screen.MainPage) return null;
        return <div>
            <div>Maine</div>
        </div>;
    }
}