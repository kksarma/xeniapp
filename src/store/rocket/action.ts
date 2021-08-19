import { rocketSlice } from './slice';

const { getAllRecordsSuccess, getAllRecordsError } = rocketSlice.actions;

interface IRocket{
    records: Array<any>,
}

/**
 * Fetch all todo action
 */
 export const getAll = () => async (dispatch: (arg0: any) => void) => {
    try {
        const url = `https://api.spacexdata.com/v3/launches`
        const result: IRocket = await fetch(url, { method: "get" })
            .then((response: Response) => response.json());
        dispatch(getAllRecordsSuccess(result));
    } catch (e) {
        dispatch(getAllRecordsError(e.message));
        return console.error(e.message);
    }
}

export const getFilterdRecords = () => async (dispatch: (arg0: any) => void) => {
    
}