import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
    const { name, email } = deletingDoctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deleteCount) {
                    toast.success(`Doctor ${name} is Deleted`);
                    setDeletingDoctor(null);
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg ">You Went To Delete <span className='text-red-500'>{name}</span> </h3>
                    <div className="modal-action">
                        <button htmlFor="delete-confirm-modal" onClick={() => handleDelete()} class="btn btn-error">Delete</button>
                        <label htmlFor="delete-confirm-modal" className="btn btn-warning">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;