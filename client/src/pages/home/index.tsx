import React from 'react'
import {
  // useDispatch,
  useSelector,
} from 'react-redux'
import { RootState } from '../../store/index'

const HomePage: React.FC = () => {
  //   const dispatch = useDispatch()
  const name = useSelector((state: RootState) => {
    console.log(state)
    return state.auth.name
  })
  //   const invoices = useSelector((state: RootState) => state.invoices.invoices)

  //   useEffect(() => {
  //     // Dispatch an action to fetch invoices when the component mounts
  //     dispatch(fetchInvoices())
  //   }, [dispatch])
  return (
    <div>
      <h2>{`Hello ${name}`}</h2>
      {/* <table>
        <thead>
          <tr>
            <th>Vendor Name</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice, index) => (
            <tr key={index}>
              <td>{invoice.vendorName}</td>
              <td>{invoice.description}</td>
              <td>{invoice.dueDate}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.paid ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default HomePage
