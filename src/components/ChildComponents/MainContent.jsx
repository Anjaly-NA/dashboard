import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class MainContent extends React.Component {
     createData=(name, calories, fat, carbs, protein)=> {
        return { name, calories, fat, carbs, protein };
      }
    render() {
        const data = {
            datasets: [{
                data: [10, 20, 30], backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    'red',
                    'blue',
                    'yellow'
                ]
            }],
            labels: [
                'eat',
                'sleep',
                'code'
            ]
        }
        const rows = [
            this.createData('google.com', 1591, 600, '24%', '$40,987'),
            this.createData('facebook.com', 1591, 600, '24%', '$40,987'),
            this.createData('twitter.com', 1591, 600, '24%', '$40,987'),
            this.createData('Direct,email,IM', 1591, 600, '24%', '$40,987'),
            this.createData('linkedin.com', 1591, 600, '24%', '$40,987'),
            this.createData('show more', 1591, 600, '24%', '$40,987'),
        ];
        return (
            <div style={{ width: '100%' }}>
                <div className='header_main_container'>
                    <div id="menu" className='menu_icon'></div>
                    <div id="search" className='menu_icon'></div>
                    <input type="text" className='search_box' placeholder='Search transactions, invoices or help' />
                    <div id="bell" className='menu_icon'></div>
                    <div className='username'>John Doe</div>
                </div>
                <div className="top_main_container">
                    <div className='content'>
                        <div className="btn_text_container">
                            <div className='overview_text'>Overview</div>
                            <button className="button">Add Funds</button>
                        </div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <div style={{ width: '60%' }}>
                                <div className='main_chart_container'>
                                    <div className='chart_container'>
                                        <div>Sales Distribution</div>
                                        <Doughnut
                                            data={data}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: true,
                                            }}
                                            height='500px'
                                        />
                                    </div>
                                    <div className='chart_container'>
                                        <div>Sales Distribution</div>
                                        <Doughnut
                                            data={data}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: true,
                                            }}
                                            height='500px'
                                        />
                                    </div>
                                </div>
                                <div className="grid_container">
                                    <div className='table_head'>Referrer</div>
                                    <TableContainer component={Paper}>
                                        <Table className='' aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>LOCATION</TableCell>
                                                    <TableCell align="right">VIEWS</TableCell>
                                                    <TableCell align="right">SALES</TableCell>
                                                    <TableCell align="right">CONVERSION</TableCell>
                                                    <TableCell align="right">TOTAL</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow key={row.name}>
                                                        <TableCell component="th" scope="row">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="right">{row.calories}</TableCell>
                                                        <TableCell align="right">{row.fat}</TableCell>
                                                        <TableCell align="right">{row.carbs}</TableCell>
                                                        <TableCell align="right">{row.protein}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            <div className='vdo_people_container'>
                                <div className="people_container"></div>
                                <div className="vdo_container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default MainContent;
