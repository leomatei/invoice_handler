import { useQuery } from 'react-query'
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface InvoiceState {
  selectedInvoice: Invoice | null
  isModalOpen: boolean
}

const initialState: InvoiceState = {
  selectedInvoice: null,
  isModalOpen: false,
}

export interface Invoice {
  id: string
  vendorName: string
  amount: string
  dueDate: string
  description: string
  paid: boolean
}

export const useFetchInvoices = () => {
  return useQuery<Invoice[], Error>('invoices', async () => {
    const response = await axios.get('http://localhost:3000/invoices')
    return response.data
  })
}

const invoiceSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    openModal(state, action) {
      state.selectedInvoice = action.payload
      state.isModalOpen = true
    },
    closeModal(state) {
      state.selectedInvoice = null
      state.isModalOpen = false
    },
  },
})

export const { openModal, closeModal } = invoiceSlice.actions
export default invoiceSlice.reducer
