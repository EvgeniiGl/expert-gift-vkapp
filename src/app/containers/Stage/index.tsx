import * as React from "react";
import {useEffect} from "react";
import {ScreenEnum} from "app/stores/ScreenStore";
import {useStore} from "app/context/store";
import {observer} from "mobx-react-lite";
import * as S from "./style";
import Header from "app/core/components/Header";
import {vk_bridge} from "app/core/services/vk_bridge";
import {SERVICE_KEY, VERSION} from "../../../vk_config";
import {API} from "app/core/services/api";
import {IUser, IUsers} from "app/stores/UsersStore";
import {customAlert} from "app/core/components/alert";
import {LoaderStoreType} from "app/stores/LoaderStore";
import {fromEvent, interval, Subscription} from "rxjs";
import {debounce} from "rxjs/operators";
import {StageStoreType} from "app/stores/StageStore";
import {StageList} from "app/containers/Stage/components/stage_list";

interface IRatingUsers {
    "current_page": number,
    "data": [
        {
            "id": number,
            "score": number,
            "gifts_count": number
        },
    ],
    "first_page_url": string,
    "from": number,
    "last_page": number,
    "last_page_url": string,
    "next_page_url": string,
    "path": string,
    "per_page": number | null,
    "prev_page_url": null | number,
    "to": number,
    "total": number
}

const Stage = observer(function () {

    const {screenStore: {setScreen}} = useStore();
    const usersStore: IUsers = useStore().usersStore;
    const stageStore: StageStoreType = useStore().stageStore;
    const loaderStore: LoaderStoreType = useStore().loaderStore;

    let subscribeScroll$: Subscription = new Subscription();
    let bottomRef: HTMLDivElement;

    const getRatingUsers = async (page: number) => {
        if (stageStore.last_page === stageStore.page || stageStore.page >= page) return;
        loaderStore.toggleLoader(true);
        const response = await API.get<IRatingUsers>(`/rating_users?page=${page}`);

        if (response.status) {
            const ratingUsers: IRatingUsers = response.data.original.data;
            const usersId = ratingUsers.data.reduce((ids, user) => {
                return `${ids},${user.id}`;
            }, '');
            stageStore.setPage(ratingUsers.current_page, ratingUsers.last_page);

            const responseVk: any = await vk_bridge.send('VKWebAppCallAPIMethod', {
                "method": "users.get",
                "params": {
                    user_ids: usersId,
                    v: VERSION,
                    fields: 'photo_200',
                    access_token: SERVICE_KEY,
                    lang: 'ru'
                }
            });
            if (responseVk.status) {
                const users: IUser[] = responseVk.data.response.reduce((arr: IUser[], userVk: IUser) => {
                    const ratingUser = ratingUsers.data.find((user) => user.id === userVk.id);
                    if (ratingUser) {
                        arr.push({...userVk, score: ratingUser.score + ratingUser.gifts_count});
                    }
                    return arr;
                }, []);
                usersStore.setUsers([...usersStore.users, ...users]);
            } else {
                customAlert.danger('Не удалось получить пользователей Вконтакте!');
            }
        } else {
            customAlert.danger('Не удалось получить список рейтинга!');
        }
        loaderStore.toggleLoader(false);
    };

    useEffect(() => {
        const scrollEvent = fromEvent(document, 'scroll');
        subscribeScroll$ = scrollEvent.pipe(debounce(() => interval(500))).subscribe(trackScrolling);
        getRatingUsers(1);
        return () => {
            subscribeScroll$.unsubscribe();
        };
    }, []);

    const trackScrolling = () => {
        var position = bottomRef.getBoundingClientRect();
        if (position.top >= 0 && position.bottom <= window.innerHeight + 500) {
            getRatingUsers(stageStore.page + 1);
        }
    };

    return <S.Container>
        <Header screen={ScreenEnum.Stage} setScreen={setScreen}/>
        <S.Wrapper>
            <S.Text>Ваш рейтинг</S.Text>
            <StageList users={[usersStore.user]}/>
            <S.Text>Общий рейтинг</S.Text>
            <StageList users={usersStore.users}/>
        </S.Wrapper>
        <S.HiddenBottom ref={ref => {
            if (ref) bottomRef = ref;
        }}/>
    </S.Container>;
});

export default Stage;
