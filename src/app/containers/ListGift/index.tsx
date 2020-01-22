import * as React from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";


const ListGift = observer(function () {

    const store = useStore();
    if (store.screenStore.currentScreen !== ScreenEnum.ListGift) return null;
    return <React.Fragment>
        <div className="example">
            ListGift
        </div>
    </React.Fragment>;
});

export default ListGift;