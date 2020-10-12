import React from 'react';
import TopMenu from './TopMenu';
import { Doughnut } from 'react-chartjs-2';

class MainContent extends React.Component {
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
        return (
            <div style={{ width: '100%' }}>
                <div className='header_main_container'>
                    <div id="menu" className='menu_icon'></div>
                    <div id="search" className='menu_icon'></div>
                    <input type="text" className='search_box' placeholder='Search transactions, invoices or help'/>
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
                                    </div>                                </div>
                                <div className="grid_container"></div>
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
