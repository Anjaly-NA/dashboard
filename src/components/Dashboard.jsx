  
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TopMenu from './ChildComponents/TopMenu';
import SideMenu from './ChildComponents/SideMenu';
import Footer from './ChildComponents/Footer';
import MainContent from './ChildComponents/MainContent';

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
// }));

function Dashboard() {
//   const classes = useStyles();

  return (
    <div className='main_container'>
        <SideMenu/>
        <MainContent/>
    </div>
  );
}

export default Dashboard;
