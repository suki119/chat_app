import React, { Component } from 'react';
import Header from '../../Components/Hedder/Hedder';
import Sidebar from '../../Components/SideBar/SideBar';

class Home extends Component {
    render() {
        return (
            <div className='main-wrapper'>
                <div className='app-header'>
                    <Header />

                </div>
                <div className='app-body'>
                    <div className='body-wrapper'>
                        <div className='app-sidebar'>
                            <Sidebar />
                        </div>
                        <div className='app-content'>

                            aaaaaaaa




                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;