const express = require('express');
const path = require('path');

const app = express();

const customers = require('./data/customers');
const accounts = require('./data/accounts');

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/api/getCustomers', (req, res) => {
	res.json(customers);
});

app.get('/api/getAccounts', (req, res) => {
	res.json(accounts);
});

app.get('/api/getCustomer/:id', (req, res) => {
	const customer_id = req.params.id
	const customer = customers.filter((item) => item.id == customer_id)[0];
	const customerAccounts = accounts.filter(account => account.customer_id == customer_id);
	res.json({customer, accounts: customerAccounts})
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
