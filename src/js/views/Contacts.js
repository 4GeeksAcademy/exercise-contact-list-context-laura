import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { ModalEdit } from "../views/ModalEdit";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		showModalEdit: false,
		id: null
	});
	useEffect(() => {
		actions.getAllContacts();
	}, [state]);

	useEffect(() => {
		actions.getAllContacts();
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contacts.length > 0
							? store.contacts.map(item => (
									<ContactCard
										id={item.id}
										key={item.id}
										onDelete={() => setState({ showModal: true, id: item.id })}
										onEdit={() => setState({ showModalEdit: true, id: item.id })}
										full_name={item.full_name}
										email={item.email}
										address={item.address}
										phone={item.phone}
									/>
							  ))
							: null}
					</ul>
				</div>
			</div>
			<Modal
				show={state.showModal}
				id={state.id}
				onClose={() => {
					actions.getAllContacts();
					setState({ showModal: false });
				}}
			/>

			<ModalEdit
				show={state.showModalEdit}
				id={state.id}
				onClose={() => {
					actions.getAllContacts();
					setState({ showModalEdit: false });
				}}
			/>
		</div>
	);
};
