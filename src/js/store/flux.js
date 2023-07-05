const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			agenda: "contactosdelaura"
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			// getAllAgendas: () => {
			// 	fetch("https://assets.breatheco.de/apis/fake/contact/agenda", {
			// 		method: "GET"
			// 	})
			// 		.then(response => console.log(response))
			// 		.then(data => console.log(data))
			// 		.catch(error => console.log(error));
			// },
			getAllContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agendadelaura", {
					method: "GET"
				})
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},
			createContact: (fullName, email, agendadelaura, phone, address) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agendadelaura", {
					method: "POST",
					Headers: { "Content-Type": "application/json" },
					body: {
						fullName: fullName,
						email: email,
						agenda_slug: agendadelaura,
						address: address,
						phone: phone
					}
				})
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},

			createOneContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact", {
					method: "POST",
					headers: { "Content-Type": "application.json" },
					body: {
						full_name: "Dave Bradley",
						email: "dave@gmail.com",
						agenda_slug: "agendadelaura",
						address: "47568 NW 34ST, 33434 FL, USA",
						phone: "7864445566"
					}
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			// getOneContact: () => {
			// 	fetch("https://assets.breatheco.de/apis/fake/contact/laura", {
			// 		method: "GET"
			// 	})
			// 		.then(response => response.json())
			// 		.then(data => console.log(data))
			// 		.catch(error => console.log(error));
			// },
			updateOneContact: (fullName, email, agendadelaura, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/laura", {
					method: "PUT",
					headers: { "Content-Type": "application.json" },
					body: {
						full_name: fullName,
						email: email,
						agenda_slug: agendadelaura,
						address: address,
						phone: phone
					}
				})
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			}
		}
	};
};
// };
export default getState;
