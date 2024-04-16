import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/index'
import { useFetchInvoices, openModal, Invoice } from '../../store/invoiceSlice'
import Modal from '../../components/modal'
import './styles.scss'

const HomePage: React.FC = () => {
  const { data: invoices, isLoading, isError } = useFetchInvoices()
  const selectedInvoice = useSelector(
    (state: RootState) => state.invoices.selectedInvoice
  )
  const name = useSelector((state: RootState) => {
    console.log(state)
    return state.auth.name
  })
  const dispatch = useDispatch()
  const handleRowClick = (invoice: Invoice) => {
    dispatch(openModal(invoice))
  }
  console.log(invoices)
  return (
    <div className='home-page'>
      <h2>{`Hello ${name}`}</h2>
      <div className='invoices-table'>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        {invoices && (
          <table>
            <thead>
              <tr>
                <th>Payee</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Amount</th>
                <th>Paid</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={index} onClick={() => handleRowClick(invoice)}>
                  <td>{invoice.vendorName}</td>
                  <td>{invoice.description}</td>
                  <td>{invoice.dueDate}</td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.paid ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {selectedInvoice && <Modal />}
      </div>
    </div>
  )
}

export default HomePage
