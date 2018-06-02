import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

let id_new = 0;
function createData_new(name, calories, fat, carbs, protein) {
  id_new += 1;
  return { id, name, calories, fat, carbs, protein };
}

const new_data = [
  createData_new('00:30 AM','01:00 AM','01:30 AM','02:00 AM','02:30 AM','03:00 AM','03:30 AM','04:00 AM','04:30 AM','05:00 AM','05:30 AM','06:00 AM','06:30 AM','07:00 AM','07:30 AM','08:00 AM','08:30 AM','09:00 AM','09:30 AM','10:00 AM','10:30 AM','11:00 AM','11:30 AM','12:00 PM','12:30 PM','1:00 PM','1:30 PM','2:00 PM','2:30 PM','3:00 PM','3:30 PM','4:00 PM','4:30 PM','5:00 PM','5:30 PM','6:00 PM','7:00 PM','7:30 PM','8:00 PM','8:30 PM','9:00 PM','9:30 PM','10:00 PM','10:30 PM','11:00 PM','11:30 PM'),
];

const data = [
  createData('News Bulletin','News Bulletin','News Bulletin','News Bulletin','News Bulletin','News Bulletin','News Bulletin','News Bulletin','News Bulletin','News Bulletin','News Bulletin','News 100','News Bulletin','Morning Breaking','News 100','News 50/ Morning Special','Nonstop 100','Breaking 20-20','Morning Special','News 50 / News Special','News Special','News 100','Aap Ki News','News 50 / News Special','Special Report','News','Special Report','News 100','Bollywood Breaking 20-20','News 100','News For Hearing Impaired','5W 1H','News 50 / Aap Ki News','Taal Thok Ke','Taal Thok Ke','Taal Thok Ke','Run Ki Baat','News 100','Deshhit','Deshhit','Daily News & Analysis','Daily News & Analysis','Daily News & Analysis','Nonstop News','Daily News & Analysis','Daily News & Analysis'),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell>00:30 AM</TableCell>
<TableCell>01:00 AM</TableCell>
<TableCell>01:30 AM</TableCell>
<TableCell>02:00 AM</TableCell>
<TableCell>02:30 AM</TableCell>
<TableCell>03:00 AM</TableCell>
<TableCell>03:30 AM</TableCell>
<TableCell>04:00 AM</TableCell>
<TableCell>04:30 AM</TableCell>
<TableCell>05:00 AM</TableCell>
<TableCell>05:30 AM</TableCell>
<TableCell>06:00 AM</TableCell>
<TableCell>06:30 AM</TableCell>
<TableCell>07:00 AM</TableCell>
<TableCell>07:30 AM</TableCell>
<TableCell>08:00 AM</TableCell>
<TableCell>08:30 AM</TableCell>
<TableCell>09:00 AM</TableCell>
<TableCell>09:30 AM</TableCell>
<TableCell>10:00 AM</TableCell>
<TableCell>10:30 AM</TableCell>
<TableCell>11:00 AM</TableCell>
<TableCell>11:30 AM</TableCell>
<TableCell>12:00 PM</TableCell>
<TableCell>12:30 PM</TableCell>
<TableCell>1:00 PM</TableCell>
<TableCell>1:30 PM</TableCell>
<TableCell>2:00 PM</TableCell>
<TableCell>2:30 PM</TableCell>
<TableCell>3:00 PM</TableCell>
<TableCell>3:30 PM</TableCell>
<TableCell>4:00 PM</TableCell>
<TableCell>4:30 PM</TableCell>
<TableCell>5:00 PM</TableCell>
<TableCell>5:30 PM</TableCell>
<TableCell>6:00 PM</TableCell>
<TableCell>7:00 PM</TableCell>
<TableCell>7:30 PM</TableCell>
<TableCell>8:00 PM</TableCell>
<TableCell>8:30 PM</TableCell>
<TableCell>9:00 PM</TableCell>
<TableCell>9:30 PM</TableCell>
<TableCell>10:00 PM</TableCell>
<TableCell>10:30 PM</TableCell>
<TableCell>11:00 PM</TableCell>
<TableCell>11:30 PM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
        <TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>News 100</TableCell>
<TableCell>News Bulletin</TableCell>
<TableCell>Morning Breaking</TableCell>
<TableCell>News 100</TableCell>
<TableCell>News 50/ Morning Special</TableCell>
<TableCell>Nonstop 100</TableCell>
<TableCell>Breaking 20-20</TableCell>
<TableCell>Morning Special</TableCell>
<TableCell>News 50 / News Special</TableCell>
<TableCell>News Special</TableCell>
<TableCell>News 100</TableCell>
<TableCell>Aap Ki News</TableCell>
<TableCell>News 50 / News Special</TableCell>
<TableCell>Special Report</TableCell>
<TableCell>News</TableCell>
<TableCell>Special Report</TableCell>
<TableCell>News 100</TableCell>
<TableCell>Bollywood Breaking 20-20</TableCell>
<TableCell>News 100</TableCell>
<TableCell>News For Hearing Impaired</TableCell>
<TableCell>5W 1H</TableCell>
<TableCell>News 50 / Aap Ki News</TableCell>
<TableCell>Taal Thok Ke</TableCell>
<TableCell>Taal Thok Ke</TableCell>
<TableCell>Taal Thok Ke</TableCell>
<TableCell>Run Ki Baat</TableCell>
<TableCell>News 100</TableCell>
<TableCell>Deshhit</TableCell>
<TableCell>Deshhit</TableCell>
<TableCell>Daily News & Analysis</TableCell>
<TableCell>Daily News & Analysis</TableCell>
<TableCell>Daily News & Analysis</TableCell>
<TableCell>Nonstop News</TableCell>
<TableCell>Daily News & Analysis</TableCell>
<TableCell>Daily News & Analysis</TableCell>
</TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
