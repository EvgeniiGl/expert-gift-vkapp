
import * as React from "react";
import {Screen, ScreenStore} from '../../stores/ScreenStore';

export interface Props {
    ScreenStore: ScreenStore;
}

export class Score extends React.Component<Props> {


    render() {
        const ScreenStore = this.props.ScreenStore;
        if (ScreenStore.screen != Screen.Score) return null;
        return <div>Score</div>;
    }
}