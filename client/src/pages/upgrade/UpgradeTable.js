import React from 'react';
import {
  withStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: '1.2em',
  },
  body: {
    width: '33%',
    fontSize: '1.0em',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createCompareData(item, oldSpec, newSpec) {
  return { item, type: 'compare', oldSpec, newSpec };
}

function createResultData(item, result) {
  return { item, type: 'result', result };
}

const rows = [
  createCompareData('胎壁厚度', 159, 6.0),
  createCompareData('輪圈直徑', 237, 9.0),
  createCompareData('圈 + 胎總直徑', 262, 16.0),
  createCompareData('圈 + 胎週長', 305, 3.7),
  createResultData('高度差', '降低 0.475'),
  createResultData('速度差', '慢 1.39%'),
  createResultData(
    '建議結果',
    '誤差在容許範圍內，這樣更換沒問題。新的輪胎面寬度增加了4.7%，可以提高抓地力，但會比較耗油一些。',
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function UpgradeTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <ThemeProvider theme={theme}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">{'項目'}</StyledTableCell>
              <StyledTableCell align="center">{'舊胎'}</StyledTableCell>
              <StyledTableCell align="center">{'新胎'}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.item}>
                <StyledTableCell component="th" scope="row">
                  {row.item}
                </StyledTableCell>
                {row.type == 'compare' && (
                  <>
                    <StyledTableCell align="center">
                      {row.oldSpec}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.newSpec}
                    </StyledTableCell>
                  </>
                )}
                {row.type == 'result' && (
                  <StyledTableCell colSpan={2} align="center">
                    {row.result}
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </ThemeProvider>
    </TableContainer>
  );
}
