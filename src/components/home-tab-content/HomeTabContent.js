import React, { useState, useEffect } from 'react';
import AvailableProducts from '../total-available-product/AvailableProduct';
import arrowup from '../assets/arrowup.jpg';
import { getRevenue } from "../../services/services";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './HomeTabContent.css';

function HomeTabContent() {
    const [show, setShow] = useState(false);
    const [employees, setEmployees] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [requestComplete, setRequestComplete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getData = () => {
        getRevenue()
            .then((httpResponse) => {
                const records = httpResponse.data;
                console.log(records); // Log the data to check its structure
                setEmployees(records);
                setErrorMessage('');
                setRequestComplete(true);
            })
            .catch((err) => {
                setEmployees(undefined);
                setErrorMessage(err.message);
                setRequestComplete(true);
            });
    };


    useEffect(() => {
        getData();
    }, []);

    let design;
    if (!requestComplete) {
        design = <span>Loading...please wait</span>;
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>;
    } else if (!employees || employees.length === 0) {
        design = <span>No records</span>;
    } else {
        design = (
            <>
                <br />
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Month</th>
                            <th>Total Revenue</th>
                        </tr>
                    </thead>
                    <tbody>

                        {employees.map((employee, index) => (
                            <tr key={index}>
                                <td>{employee.sortByYear}</td>
                                <td>{employee.sortByMonth}</td>
                                <td>{employee.total_revenue}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </>
        );
    }

    return (
        <div>
            <h2 className='font-monospace'>Home</h2>
            <hr style={{ width: '90%' }} />
            <br />
            <div className='row ms-3'>
                <div className='col-4 me-5 rounded shadow border' style={{ width: '25%', height: '180px', backgroundColor: 'white', backgroundImage: `url(${arrowup})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    <AvailableProducts />
                </div>
                <div className='col-12' style={{ width: '68%', height: '180px' }}>
                    <div className='row rounded' style={{ width: '100%', height: '82px' }}>
                        <div id='revTab' className='col-5 fs-5 font-monospace me-4 rounded shadow border' onClick={handleShow} style={{ height: '82px', backgroundColor: '#F8F9FA' }}>
                           <p className='my-auto pt-4'> Total Revenue Generated</p>
                        </div>
                        <div className='col-5 rounded shadow border' style={{ height: '82px', backgroundColor: '#F8F9FA' }}></div>
                    </div>
                    <div className='row rounded mt-3' style={{ width: '100%', height: '82px' }}>
                        <div className='col-5 me-4 rounded shadow border' style={{ height: '82px', backgroundColor: '#F8F9FA' }}></div>
                        <div className='col-5 rounded shadow border' style={{ height: '82px', backgroundColor: '#F8F9FA' }}></div>
                    </div>
                </div>
            </div>
            <Modal className='font-monospace' show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Revenue Generated</Modal.Title>
                </Modal.Header>
                <Modal.Body>{design}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="info" onClick={handleClose}>Print</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HomeTabContent;
