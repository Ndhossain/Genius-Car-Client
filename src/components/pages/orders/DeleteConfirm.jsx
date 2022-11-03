/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function DeleteConfirm({ handleDelete, deleteId }) {
    return (
        <div className="modal-box">
            <h3 className="font-bold text-lg">Are You Sure you want to delete?</h3>
            <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                    Cancel
                </label>
                <label
                    onClick={() => handleDelete(deleteId)}
                    htmlFor="my-modal"
                    className="btn btn-primary"
                >
                    Okay
                </label>
            </div>
        </div>
    );
}

export default DeleteConfirm;
