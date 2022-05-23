import React from 'react'
import logo from '../logo.png'

export default function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light shadow">
                    
                        <a href="" className="navbar-brand">
                            <div  style={{display:'flex'}}>
                                <img src={logo} className='logo' />
                                <h3 style={{padding:'10px', marginBottom: '0px'}}>TARGET UPCURVE 2022</h3>
                            </div>
                        </a>
                  
                </nav>
            </header>
        </div>
    )
}
