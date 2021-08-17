import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCard from './card';
import FilterBox from '../Filters/filter';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  }),
);

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <FilterBox />
        <Grid container className={classes.control} justifyContent="center" spacing={2}>
          {[0, 1, 2,4,5,6,7].map((value) => (
            <Grid key={value} item>
              <MediaCard />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
