import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    control: {
      padding: theme.spacing(2),
      backgroundColor: 'darkgrey',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
    },
    buttonCss: {
      marginTop: '18px'
    },
  }),
);

export default function FilterInput(props: any) {
  const classes = useStyles();

  const [status, setStatus] = React.useState('');
  const [date, setDate] = React.useState('');
  const [checked, setChecked] = React.useState(true);
  const [filterOptions, setFilterOptions] = useState({
    status: '',
    date: '',
    upcoming: null,
  });

  const { getFilterOptions } = props;

  useEffect(() => {
    getFilterOptions(filterOptions);
  }, [filterOptions])

  const launchStatusChange = (event: any) => {
    const { target: { value } } = event;
    setStatus(value);
    setFilterOptions({ ...filterOptions, status: value });
  };

  const launchDateChange = (event: any) => {
    const { target: { value } } = event;
    setDate(value);
    setFilterOptions({ ...filterOptions, date: value });
  };

  const handleCheck = (event: any) => {
    const { target: { checked } } = event;
    setChecked(checked);
    setFilterOptions({ ...filterOptions, upcoming: checked });
  };

  return (
    <>
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Launch Date</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={date}
                onChange={launchDateChange}
                label="Launch Date"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='last_week'>Last Week</MenuItem>
                <MenuItem value='last_month'>Last Month</MenuItem>
                <MenuItem value='last_year'>Last Year</MenuItem>
            </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Launch Status</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined2"
                value={status}
                onChange={launchStatusChange}
                label="Launch Status"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='failure'>Failure</MenuItem>
                <MenuItem value='success'>Success</MenuItem>
            </Select>
        </FormControl>

        <FormControlLabel
            control={
                <Checkbox
                    checked={checked}
                    onChange={handleCheck}
                    name="checked"
                    color="primary"
                />
            }
            label="Is it upcoming?"
        />
    </>
  );
}
