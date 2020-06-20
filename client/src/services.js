/*
File for calls to services
*/

export function fetchAccounts() {
  return fetch("/api/getAccounts")
      .then((res) => res.json());
}

export function fetchCustomers() {
  return fetch("/api/getCustomers")
      .then((res) => res.json());
}

export function fetchCustomer(id) {
  return fetch(`/api/getCustomer/${id}`)
      .then((res) => res.json());
}