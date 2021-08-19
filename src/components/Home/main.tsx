import React, { useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import MediaCard from './card';
import FilterBox from '../Filters/filter';
import getAll from '../../store/rocket/action';
import { getFilterdRecords, setCards } from '../../store/rocket/slice';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cards } = useSelector((state: RootStateOrAny) => state.rocketSlice);

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const filterData = async (options: any) => {
    await dispatch(setCards());
    await dispatch(getFilterdRecords(options));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <FilterBox
          filterData={filterData}
        />
        <Grid container className={classes.control} justifyContent="center" spacing={2}>
          {cards.length ? cards.map((value: any) => (
            <Grid key={value.flight_number + value.launch_date_unix} item>
              <MediaCard data={value} />
            </Grid>
          )) : <h1> No records found. Please try to change search parameters. </h1>}
        </Grid>
      </Grid>
    </Grid>
  );
}
