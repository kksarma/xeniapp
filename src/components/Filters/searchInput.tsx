import React, { useState } from 'react';
import SearchBar from "material-ui-search-bar";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      marginTop: '7px'
    },
    searchBar: {
        height: '56px'
    }
  }),
);

export default function SearchInput(props: any) {
  const classes = useStyles();
  const { getFilterOptions } = props;

  const [searchText, setSearchText] = useState('');

  const doSomethingWith = (text: string) => {
    getFilterOptions({search: text});
  };

  return (
      <div className={classes.search}>
        <SearchBar
            className={classes.searchBar}
            value={searchText}
            onChange={(newValue) => setSearchText(newValue)}
            onRequestSearch={() => doSomethingWith(searchText)}
            onCancelSearch={() => doSomethingWith('')}
        />
      </div>
  );
}
