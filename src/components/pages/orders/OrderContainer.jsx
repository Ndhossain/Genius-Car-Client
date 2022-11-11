/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImCross } from 'react-icons/im';

function OrderContainer({ order, setDeleteId, handleApproved }) {
    const [serviceDetails, setServiceDetails] = useState({});
    const { service, _id, isApprove } = order;
    const { img, price, title } = serviceDetails;

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://genius-car-server-ndhossain.vercel.app/services/${service}`,
        }).then((res) => {
            if (res.status === 200) {
                setServiceDetails(res.data);
            }
        });
    }, [service]);

    return (
        <tr>
            <th>
                <label
                    htmlFor="my-modal"
                    className="btn btn-sm rounded-full btn-primary btn-outline px-2 text-center"
                    onClick={() => setDeleteId(_id)}
                >
                    <ImCross />
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt={title} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                    </div>
                </div>
            </td>
            <td>${price}</td>
            {/* <td>Red</td> */}
            <th>
                <button
                    onClick={() => handleApproved(_id)}
                    type="button"
                    className={`btn ${isApprove ? 'btn-success' : 'btn-primary'} btn-outline`}
                >
                    {isApprove ? 'Approved' : 'Pending'}
                </button>
            </th>
        </tr>
    );
}

export default OrderContainer;
