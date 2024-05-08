import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainArea.css';
import ProductList from '../product-list/ProductList'
import AddProductArea from '../add-product-area/AddProductArea';
import HomeTabContent from '../home-tab-content/HomeTabContent';

function MainArea() {
    const [activeTab, setActiveTab] = useState('home');

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm bg-light border-bottom border-3 fixed-top shadow-sm">
                    <div className="container-fluid">
                        <button type="button" className="btn" data-bs-toggle="collapse" data-bs-target="#side-menu-toggler">
                            <i className="fa-solid fa-bars fa-lg"></i>
                        </button>
                        <a className="navbar-brand fw-bolder" style={{ fontSize: '1.9rem', position: 'absolute', left: '55px', color: '#3B4BBC' }} href="index.html">PKart</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {/* Add your nav menu items here */}
                            </ul>
                            <button type="button" className="btn rounded-pill shadow-sm border btn-sm position-relative me-3" style={{ background: '#9CA7F9' }}>
                                <i className="fa-regular fa-bell" style={{ color: '#9CA7F9' }}></i>
                            </button>
                            <div className="dropdown dropstart">
                                <button className="btn-secondary fw-bold text-dark" style={{ border: 'none', background: 'none' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="text-primary">Yashas
                                        <i className="fa-solid fa-caret-down"></i>
                                    </span>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Profile</a></li>
                                    <li><a className="dropdown-item" href="#">Account</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <div style={{ height: '56.5px' }}></div>

            <div className="row wrapper">
                {/* Sidebar */}
                <div className="col-5 col-sm-4 col-md-2 px-sm-2 px-0 overflow-fix" data-bs-toggle="collapse" id="side-menu-toggler" style={{ background: '#F4F9FF', borderRight: 'solid #ebebeb 0.1px' }}>
                    <div className="d-flex flex-column align-items-start pt-4 text-light" style={{ minHeight: '88vh' }}>
                        <div className={`border rounded shadow-sm h-75 w-75 mx-4 bg-light d-flex mt-2 flex-column align-items-center ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
                            <i className="fa-solid fa-house fa-xl pt-4" style={{ color: '#3B4BBC' }}></i>
                            <p className="fw-semibold pt-3 tabbtn">Home</p>
                        </div>
                        <div className={`border rounded shadow-sm h-75 w-75 mx-4 bg-light d-flex mt-2 flex-column align-items-center ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>
                            <i class="fa-brands fa-product-hunt fa-xl pt-4" style={{ color: '#3B4BBC' }}></i>
                            <p className="fw-semibold pt-3 tabbtn">Products</p>
                        </div>
                        <div className={`border rounded shadow-sm h-75 w-75 mx-4 bg-light d-flex mt-2 flex-column align-items-center ${activeTab === 'addProduct' ? 'active' : ''}`} onClick={() => setActiveTab('addProduct')}>
                            <i class="fa-solid fa-plus fa-xl pt-4" style={{ color: '#3B4BBC' }}></i>
                            <p className="fw-semibold pt-3 tabbtn">Add Products</p>
                        </div>

                    </div>
                </div>

                {/* Main content area */}
                <div className="col container-fluid overflow-fixed pt-3 pe-0 me-0" style={{ background: '#F4F9FF',height:'88vh' }}>
                    {activeTab === 'home' && (
                        <div>
                            <HomeTabContent />
                        </div>
                    )}
                    {activeTab === 'products' && (
                        <div className='mb-5'>
                            <ProductList />
                            <div style={{ minHeight: '150px' }}></div>
                        </div>
                    )}

                    {activeTab === 'addProduct' && (
                        <div className='mb-5'>
                            <AddProductArea />
                        </div>
                    )}

                </div>
            </div>

            {/* Footer */}
            <footer>
                <nav className="navbar fixed-bottom shadow-sm" style={{ background: '#7582D1' }}>
                    <div className="container-fluid align-items-center d-flex row">
                        <span className="navbar-brand mb-0 h1 text-center text-white fs-6">&copy;&nbsp;2022 All rights reserved.</span>
                    </div>
                </nav>
            </footer>
        </>
    );
}

export default MainArea;