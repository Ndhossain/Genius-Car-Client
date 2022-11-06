import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import DeleteConfirm from './DeleteConfirm';
import OrderContainer from './OrderContainer';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [deleteId, setDeleteId] = useState('');
    const { currentUser, logout } = useAuth();

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/orders?uid=${currentUser.uid}`,
            headers: {
                authorization: `bearer ${localStorage.getItem('gen-token')}`,
            },
        })
            .then((res) => {
                setOrders(res.data);
            })
            .catch((err) => {
                if (err.response.status === 401 || err.response.status === 403) {
                    logout();
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser.uid]);

    const handleDelete = (id) => {
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/orders/${id}`,
        })
            .then((res) => {
                if (res.data.deletedCount === 1) {
                    toast.success('Items Deleted');
                    const restOrders = orders.filter((order) => order._id !== id);
                    setOrders(restOrders);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleApproved = (id) => {
        const restOrders = orders.filter((order) => order._id !== id);
        const currentOrder = orders.find((order) => order._id === id);
        if (!currentOrder.isApprove) {
            axios({
                method: 'PATCH',
                url: `http://localhost:5000/orders/${id}`,
                data: { isApprove: 'Approved' },
            }).then((res) => {
                if (res.data?.matchedCount > 0) {
                    currentOrder.isApprove = 'Approved';
                    setOrders([currentOrder, ...restOrders]);
                }
            });
        } else {
            toast.error('Already approved');
        }
    };

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
                                handleApproved={handleApproved}
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
