import { CHANGE_DATE, CHANGE_TIME } from "./types";

export function changeDate(date) {
    return {
        type: CHANGE_DATE,
        payload: date
    }
}

export function changeTime(time) {
    return {
        type: CHANGE_TIME,
        payload: time
    }
}