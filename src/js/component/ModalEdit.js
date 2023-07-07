import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ModalEdit = props => {
	const [state, setState] = useState({
		//initialize state here
	});
	const [fullName, setFullName] = useState({ fullName: "" });
	const [email, setEmail] = useState({ email: "" });
	const [phone, setPhone] = useState({ phone: "" });
	const [address, setAddress] = useState({ address: "" });

	const { store, actions } = useContext(Context);

	function handleSubmit(e) {
		e.preventDefault();
		console.log(fullName, email, phone, address);
		actions.updateOneContact(fullName, email, phone, address);
		// actions.updateOneContact()
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
									<button
										type="submit"
										className="btn btn-primary form-control"
										onClick={() => actions.updateOneContact(props.id)}
										data-dismiss="modal">
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
	id: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/
ModalEdit.defaultProps = {
	show: false,
	onClose: null
};
