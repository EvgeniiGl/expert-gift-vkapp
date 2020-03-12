import {loader$} from "./loader";

export const LoaderSwitch = {
    start: () => loader$.next(true),
    stop: () => loader$.next(false)
};
