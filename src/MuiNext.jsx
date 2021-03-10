import React from 'react';
import { ThemeProvider, createMuiTheme, styled, experimentalStyled } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff0000' },
  },
});

const Styled = styled('p')(({ theme }) => {
  console.log(theme.palette.primary.main); // -> #ff0000
  return {
    color: theme.palette.primary.main,
  };
});

const ExperimentalStyled = experimentalStyled('p')(({ theme }) => {
  console.log(theme.palette.primary.main); // -> #3f51b5
  return {
    color: theme.palette.primary.main,
  };
});

console.log(theme.palette.primary.main); // -> #ff0000


export default function MuiNext() {
  return (
    <ThemeProvider theme={theme}>
      <Styled>Styled</Styled>
      <ExperimentalStyled>ExperimentalStyled</ExperimentalStyled>
    </ThemeProvider>
  );
}
