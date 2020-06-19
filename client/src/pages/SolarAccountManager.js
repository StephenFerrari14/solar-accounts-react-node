import React from "react";
import DataTable from "../components/DataTable";
import { Link } from "react-router-dom";

export default function SolarAccountManager(props) {
  return (
    <div className="App">
      <h1>Solar Account Manager</h1>
      <h2>Customers</h2>
      <DataTable
        rows={props.customers}
        columns={[
          {
            key: "id",
            value: "ID",
            render: (row) => <Link to={`/profile/${row.id}`}>{row.id}</Link>,
          },
          { key: "first_name", value: "First Name" },
          { key: "last_name", value: "Last Name" },
          { key: "email", value: "Email" },
        ]}
      ></DataTable>
      <hr />
      <h2>Accounts</h2>
      <DataTable
        rows={props.accounts}
        columns={[
          { key: "address", value: "Address" },
          { key: "city", value: "City" },
          { key: "capacity_share", value: "Capacity Share" },
        ]}
      ></DataTable>
    </div>
  );
}
