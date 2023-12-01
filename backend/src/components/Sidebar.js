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
                        <Link className="nav-link collapsed" data-bs-target="#product" data-bs-toggle="collapse" to="/#">
                            <i className="bi bi-menu-button-wide" /><span>Products</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="product" className="nav-content collapse " data-bs-parent="#sidebar-nav">
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
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#employee" data-bs-toggle="collapse" to="/#">
                            <i className="bi bi-menu-button-wide" /><span>Employees</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="employee" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/employees">
                                    <i className="bi bi-circle" /><span>All Employees</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/add-employee">
                                    <i className="bi bi-circle" /><span>Add Employee</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#sale" data-bs-toggle="collapse" to="/#">
                            <i className="bi bi-menu-button-wide" /><span>Sales</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="sale" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/products">
                                    <i className="bi bi-circle" /><span>All Sales</span>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#partner" data-bs-toggle="collapse" to="/#">
                            <i className="bi bi-menu-button-wide" /><span>Our Partner</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="partner" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link to="/products">
                                    <i className="bi bi-circle" /><span>All Partner</span>
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
                        <Link className="nav-link collapsed" to="/faq">
                            <i className="bi bi-question-circle" />
                            <span>F.A.Q</span>
                        </Link>
                    </li>{/* End F.A.Q Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/contact">
                            <i className="bi bi-envelope" />
                            <span>Contact</span>
                        </Link>
                    </li>{/* End Contact Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/register">
                            <i className="bi bi-card-list" />
                            <span>Register</span>
                        </Link>
                    </li>{/* End Register Page Nav */}
                    <li className="nav-item">
                        <Link className="nav-link collapsed" to="/login">
                            <i className="bi bi-box-arrow-in-right" />
                            <span>Login</span>
                        </Link>
                    </li>{/* End Login Page Nav */}
                </ul>
            </aside>
        </>
    )
}
