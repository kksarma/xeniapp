import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

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

export default function FilterInput() {
  const classes = useStyles();

  const [status, setStatus] = React.useState('');
  const [date, setDate] = React.useState('');
  const [checked, setChecked] = React.useState(true);

  const launchStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const launchDateChange = (event: any) => {
    setDate(event.target.value);
  };

  const handleCheck = (event: any) => {
    setChecked(event.target.checked);
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
                <MenuItem value={7}>Last Week</MenuItem>
                <MenuItem value={31}>Last Month</MenuItem>
                <MenuItem value={365}>Last Year</MenuItem>
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
                <MenuItem value={0}>Failure</MenuItem>
                <MenuItem value={1}>Success</MenuItem>
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
        <div className={classes.buttonCss}>
            <Button variant="contained" color="primary">
                Filter
            </Button>
        </div>
    </>
  );
}
