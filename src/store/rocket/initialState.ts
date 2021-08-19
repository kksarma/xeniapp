
interface IRocket {
    records: Array<any>,
    cards: Array<any>,
    isSuccess: boolean,
    error: string,
}

export const rocketsInitialState: IRocket = {
    records: [],
    cards: [],
    isSuccess: false,
    error: '',
};