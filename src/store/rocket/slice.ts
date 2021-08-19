import moment from 'moment';
import { createSlice } from '@reduxjs/toolkit';
import { rocketsInitialState } from '.';

export const rocketSlice = createSlice({
  name: 'rockets', // name used in action types
  initialState: rocketsInitialState, // initial state for the reducer
  reducers: {
    getAllRecordsSuccess: (state, action) => {
      state.records = action.payload;
      state.cards = action.payload;
      state.isSuccess = true;
    },
    getAllRecordsError: (state, action) => {
      state.records = [];
      state.isSuccess = false;
      state.error = action.payload.error
    },
    setCards: (state, action) => {
      state.cards = state.records;
    },
    getFilterdRecords: (state, action) => {
      let cardsCopy: any[] = state.cards;
      const { status, date, upcoming, search } = action.payload;

      if(status) {
        const type = status === 'success' ? true : false;
        cardsCopy = cardsCopy.filter((item: any) => item.launch_success === type);
      } 
      if(upcoming !== null) {
        cardsCopy = cardsCopy.filter((item: any) => item.upcoming === upcoming);
      } 
      if(date) {
        if(date === 'last_week') {
          cardsCopy = cardsCopy.filter((inbox) => moment(inbox.launch_date_utc) > moment().subtract(7,'days').hours(0));
        } else if(date === 'last_month') {
          cardsCopy = cardsCopy.filter((inbox) => moment(inbox.launch_date_utc) > moment().subtract(30,'days').hours(0));
        } else {
          cardsCopy = cardsCopy.filter((inbox) => moment(inbox.launch_date_utc) > moment().subtract(360,'days').hours(0));
        }
      } 
      if(search) {
        const keyword = search.toLowerCase();
        cardsCopy = cardsCopy.filter((item: any) => item.mission_name.toLowerCase().indexOf(keyword) > -1);
      }
      if(!status && upcoming === null && !date && !search) {
        state.cards = state.records;
      } else {
        state.cards = cardsCopy;
      }
    }
  },
});
export const { getFilterdRecords, setCards } = rocketSlice.actions;
export default rocketSlice.reducer;