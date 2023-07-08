import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const [fullName, setFullName] = useState({ fullName: "" });
	const [email, setEmail] = useState({ email: "" });
	const [phone, setPhone] = useState({ phone: "" });
	const [address, setAddress] = useState({ address: "" });

	const { store, actions } = useContext(Context);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(fullName, email, phone, address);
		actions.createContact(fullName, email, phone, address);
		// setFullName("");
		// setEmail("");
		// setAddress("");
		// setPhone("");
		// actions.updateOneContact()
	}

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form onSubmit={e => handleSubmit(e)}>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							onChange={e => setFullName(e.target.value)}
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							onChange={e => setEmail(e.target.value)}
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							onChange={e => setPhone(e.target.value)}
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							onChange={e => setAddress(e.target.value)}
							className="form-control"
							placeholder="Enter address"
						/>
					</div>
					<button type="submit" className="btn btn-primary form-control">
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
