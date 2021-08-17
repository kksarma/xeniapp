import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FilterInput from './filterInput';
import SearchInput from './searchInput';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      border: '2px solid #8a4141'
    },
    control: {
      padding: theme.spacing(2),
      backgroundColor: '#fdeded',
    },
  }),
);

export default function FilterBox() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container className={classes.control} justifyContent="center" spacing={4}>
          <SearchInput />
          <FilterInput />
        </Grid>
      </Grid>
    </Grid>
  );
}
