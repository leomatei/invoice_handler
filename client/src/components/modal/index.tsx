import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/index'
import { closeModal } from '../../store/invoiceSlice'
import './styles.scss'

const Modal: React.FC = () => {
  const selectedInvoice = useSelector(
    (state: RootState) => state.invoices.selectedInvoice
  )
  const isModalOpen = useSelector(
    (state: RootState) => state.invoices.isModalOpen
  )
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <>
      {isModalOpen && (
        <div className='modal-overlay'>
          <div className='modal'>
            <h3>Invoice Details</h3>
            <p>Payee: {selectedInvoice?.vendorName}</p>
            <p>Description: {selectedInvoice?.description}</p>
            <p>Due Date:{selectedInvoice?.dueDate}</p>
            <p>Amount:{selectedInvoice?.amount}</p>
            <p>Paid:{selectedInvoice?.paid ? 'YES' : 'NO'}</p>
            <button className='close-button' onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
