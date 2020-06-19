import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import DataTable from "../components/DataTable";

export default function Profile(props) {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      props.loadCustomer(id);
    }
  }, [id]);

  const rows = props.customer.accounts ? props.customer.accounts : [];

  return (
    <div className="App">
      <h1>Profile</h1>
      {props.customer.customer && (
        <div style={{ marginTop: "10px" }}>
          <span style={{ fontWeight: "bold" }}>
            {props.customer.customer.first_name}{" "}
            {props.customer.customer.last_name}
          </span>
          <p>{props.customer.customer.email}</p>
        </div>
      )}
      <div style={{ marginTop: "10px" }}>
        <p style={{ float: "left" }}>Accounts</p>
        <DataTable
          columns={[
            { key: "address", value: "Address" },
            { key: "city", value: "City" },
            { key: "capacity_share", value: "Capacity Share" },
          ]}
          rows={rows}
        ></DataTable>
      </div>
    </div>
  );
}

Profile.propTypes = {
  loadCustomer: PropTypes.func,
  customer: PropTypes.object,
};
