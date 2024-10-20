import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'




const MainOutlet: React.FC = () => {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainOutlet
