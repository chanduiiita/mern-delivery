import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {DropdownButton,Dropdown} from 'react-bootstrap'
import { logoutUser } from '../actions/userActions'
export default function Navbar() {
    const cartstate = useSelector(state => state.cartReducer)
    const userstate = useSelector(state => state.loginUserReducer)
    const dispatch=useDispatch()
    const { currentUser } = userstate
    return (
        <div>

            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/">EASY ORDER</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    {/* <i style={{color:'black'}} className="fas fa-bars"></i> */}
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">

                        {currentUser ? (

                            // <div className="dropdown mt-2">
                            //     <a className=" dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            //        {currentUser.name}
                            //     </a>
                            //     <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            //         <a className="dropdown-item" href="#">Orders</a>
                            //         <a className="dropdown-item" href="#">Log Out</a>
                                    
                            //     </div>
                            // </div>
                            <DropdownButton  id="dropdown-basic-button"  title={currentUser.name}>
                            <Dropdown.Item href="/orders">Orders</Dropdown.Item>
                            <Dropdown.Item href="#"  onClick={()=>{dispatch(logoutUser())}}><li>Logout</li></Dropdown.Item>
                            
                          </DropdownButton>

                        ) : (
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Login
                           </a>
                            </li>
                        )}

                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart ({cartstate.cartItems.length})</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
