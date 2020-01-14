import React from 'react';
import {useStore} from '../../context/store';
import {observer} from 'mobx-react-lite';
import {ScreenEnum} from "app/stores/ScreenStore";

const MainPage = observer(function (props) {
    const store = useStore();

    function handleSubmit() {
        store.screenStore.setScreen(ScreenEnum.Score);
    }

    if (store.screenStore.currentScreen !== ScreenEnum.MainPage) return null;
    return (
        <div className="example">
            <h1>MainPage</h1>
            <div>
                <button type="submit" onClick={handleSubmit}>
                    add
                </button>
            </div>
            <div>
                {store.screenStore.test}
            </div>
            <h1>---------</h1>
        </div>
    );
});

export default MainPage;
