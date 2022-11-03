import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DeleteConfirm from './DeleteConfirm';
import OrderContainer from './OrderContainer';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [deleteId, setDeleteId] = useState('');
    const { currentUser } = useAuth();

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/orders?uid=${currentUser.uid}`,
        }).then((res) => {
            setOrders(res.data);
        });
    }, [currentUser.uid]);

    const handleDelete = () => {};

    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Service Name</th>
                            <th>Price</th>
                            {/* <th>Favorite Color</th> */}
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <OrderContainer
                                key={order._id}
                                order={order}
                                setDeleteId={setDeleteId}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <DeleteConfirm handleDelete={handleDelete} deleteId={deleteId} />
                </div>
            </div>
        </div>
    );
}

export default Orders;
