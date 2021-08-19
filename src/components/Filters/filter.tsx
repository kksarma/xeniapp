import React, { useEffect, useState } from 'react';
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

export default function FilterBox(props: any) {
  const classes = useStyles();
  const { filterData } = props;

  const [filterOptions, setFilterOptions] = useState({
    status: '',
    date: '',
    upcoming: null,
    search: ''
  });

  const getFilterOptions = (options: any) => {
    setFilterOptions({ ...filterOptions, ...options });
  }

  useEffect(() => {
    filterData(filterOptions);
  }, [filterOptions]);

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xs={12}>
        <Grid container className={classes.control} justifyContent="center" spacing={4}>
          <SearchInput 
            getFilterOptions={getFilterOptions}
          />
          <FilterInput 
            getFilterOptions={getFilterOptions}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
