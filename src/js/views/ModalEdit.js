import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Contacts } from "./Contacts.js";

export const ModalEdit = props => {
	const [full_name, setFullName] = useState({ full_name: "" });
	const [email, setEmail] = useState({ email: "" });
	const [phone, setPhone] = useState({ phone: "" });
	const [address, setAddress] = useState({ address: "" });

	const { store, actions } = useContext(Context);
	const info = store.onecontact;
	console.log(info);
	function handleSubmit(e, info) {
		e.preventDefault();
		console.log(full_name, email, phone, address);
		// actions.updateOneContact(props.id);
		// actions.getOneContact(info.id);
		actions.updateOneContact(info);
	}

	// }

	// actions.deleteContact();
	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Do you want to edit your contact?</h5>
						{props.onClose ? (
							<button
								onClick={() => props.onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<div className="container">
							<div>
								<h1 className="text-center mt-1 mb-1">Add a new contact</h1>
								<form onSubmit={e => handleSubmit(e)}>
									<div className="form-group">
										<label>Full Name</label>
										<input
											type="text"
											onChange={e => setFullName(e.target.value)}
											className="form-control"
											defaultValue={info.full_name}
										/>
									</div>
									<div className="form-group">
										<label>Email</label>
										<input
											type="email"
											onChange={e => setEmail(e.target.value)}
											className="form-control"
											defaultValue={info.email}
										/>
									</div>
									<div className="form-group">
										<label>Phone</label>
										<input
											type="phone"
											onChange={e => setPhone(e.target.value)}
											className="form-control"
											defaultValue={info.phone}
										/>
									</div>
									<div className="form-group">
										<label>Address</label>
										<input
											type="text"
											onChange={e => setAddress(e.target.value)}
											className="form-control"
											defaultValue={info.address}
										/>
									</div>
									<button type="submit" className="btn btn-primary form-control">
										Save changes
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										or get back to contacts
									</Link>
								</form>
							</div>
						</div>
					</div>
					<div className="modal-footer"></div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
ModalEdit.propTypes = {
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool,
	id: PropTypes.string,
	full_name: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.number,
	email: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEdit.defaultProps = {
	show: false,
	onClose: null
};
