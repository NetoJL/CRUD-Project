import Layout from "@/components/Layout";
import Customer from "@/core/Customer";
import Table from "@/components/Table"
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";

export default function Home() {

  const customers = [
    new Customer('Ana', 32, '1'),
    new Customer('Bia', 20, '2'),
    new Customer('Neto', 20, '3'),
    new Customer('Carlos', 33, '4'),
  ]

  const [visible, setVisible] = useState<'table' | 'form'>('table')
  const [customer, setCustomer] = useState<Customer>(Customer.empty())

  function selectedCustomer(customer: Customer) {
    setCustomer(customer)
    setVisible('form')
  }

  function deletedCustomer(customer: Customer) {
    alert('Delete ' + customer.name)
  }

  function SaveCustomer(customer: Customer) {
    console.log(customer)
    setVisible('table')
  }

  function newCustomer() {
    setCustomer(Customer.empty())
    setVisible('form')
  }

  return (
    <div className="
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    ">
      <Layout title="Sign up">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button color="green" style="mb-4" onClick={newCustomer}>
                New Customer
              </Button>
            </div>
            <Table
              customers={customers}
              selectedCustomer={selectedCustomer}
              deletedCustomer={deletedCustomer} />
          </>
        ) : (
          <Form customer={customer} customerUpdated={SaveCustomer} cancelled={() => setVisible('table')}/>
        )}
      </Layout>
    </div>
  )
}
