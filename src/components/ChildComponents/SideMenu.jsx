import React from 'react';

class SideMenu extends React.Component {
    render() {
        return (
            <div className='left_main_container'>
                <div className='logo_text'>IMPEKABLE</div>
                <div className='menu_box'>
                    <div id="home" className='menu_icon'></div>
                    <div className="menu_item">Home</div>
                </div>
                <div className='menu_box'>
                    <div id="dashboard" className='menu_icon'></div>
                    <div className="menu_item">Dashboard</div>
                </div>
                <div className='menu_box'>
                    <div id="inbox" className='menu_icon'></div>
                    <div className="menu_item">Inbox</div>
                </div>
                <div className='menu_box'>
                    <div id="product" className='menu_icon'></div>
                    <div className="menu_item">Products</div>
                </div>
            </div>
        )
    }
}
export default SideMenu;