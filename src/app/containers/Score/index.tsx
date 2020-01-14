import * as React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";


const Score = observer(function () {

    const store = useStore();
    if (store.screenStore.currentScreen !== ScreenEnum.Score) return null;
    return <React.Fragment>
        <div className="example">
            Score
        </div>
    </React.Fragment>;
});

export default Score;