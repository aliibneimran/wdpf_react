import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " to="/">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </Link>
                    </li>{/* End Dashboard Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" to="/#">
                            <i className="bi bi-menu-button-wide" /><span>Products</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/products">
                                    <i className="bi bi-circle" /><span>All Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-product">
                                    <i className="bi bi-circle" /><span>Add Product</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-heading">Pages</li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/users-profile">
                            <i className="bi bi-person" />
                            <span>Profile</span>
                        </Link>
                    </li>{/* End Profile Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/pages-faq">
                            <i className="bi bi-question-circle" />
                            <span>F.A.Q</span>
                        </Link>
                    </li>{/* End F.A.Q Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/pages-contact">
                            <i className="bi bi-envelope" />
                            <span>Contact</span>
                        </Link>
                    </li>{/* End Contact Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/pages-register">
                            <i className="bi bi-card-list" />
                            <span>Register</span>
                        </Link>
                    </li>{/* End Register Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/pages-login">
                            <i className="bi bi-box-arrow-in-right" />
                            <span>Login</span>
                        </Link>
                    </li>{/* End Login Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/pages-error-404">
                            <i className="bi bi-dash-circle" />
                            <span>Error 404</span>
                        </Link>
                    </li>{/* End Error 404 Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/pages-blank">
                            <i className="bi bi-file-earmark" />
                            <span>Blank</span>
                        </Link>
                    </li>{/* End Blank Page Nav */}
                </ul>
            </aside>
        </>
    )
}
