import { rocketSlice } from './slice';

const { getAllRecordsSuccess, getAllRecordsError } = rocketSlice.actions;

interface IRocket{
  records: Array<any>,
}

/**
 * Fetch all todo action
 */
export default () => async (dispatch: (arg0: any) => void) => {
  try {
    const url = 'https://api.spacexdata.com/v3/launches';
    const result: IRocket = await fetch(url, { method: 'get' })
      .then((response: Response) => response.json());
    return dispatch(getAllRecordsSuccess(result));
  } catch (e) {
    return dispatch(getAllRecordsError(e.message));
  }
};
