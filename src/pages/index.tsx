import Layout from "@/components/Layout";
import Customer from "@/core/Customer";
import Table from "@/components/Table"
import Button from "@/components/Button";
import Form from "@/components/Form";

export default function Home() {

  const customers = [
    new Customer('Ana', 32, '1'),
    new Customer('Bia', 20, '2'),
    new Customer('Neto', 20, '3'),
    new Customer('Carlos', 33, '4'),
  ]

  function selectedCustomer(customer: Customer) {
    alert(customer.name)
  }

  function deletedCustomer(customer: Customer) {
    alert('Delete ' + customer.name)
  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
      <Layout title="Sign up">
        <div className="flex justify-end">
          <Button buttonColor="green" className="mb-4">
            New Customer
          </Button>
        </div>
        {/* <Table
          customers={customers}
          selectedCustomer={selectedCustomer}
          deletedCustomer={deletedCustomer} /> */}
          <Form customer={customers[3]}/>
      </Layout>
    </div>
  )
}
