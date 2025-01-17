const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [],
			agenda_slug: "contactosdelaura",
			onecontact: []
		},
		actions: {
			getAllContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agendadelaura", {
					method: "GET"
				})
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.log(error));
			},
			createContact: (full_name, email, phone, address) => {
				let myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				let raw = JSON.stringify({
					full_name: full_name,
					email: email,
					agenda_slug: "agendadelaura",
					address: address,
					phone: phone
				});

				let requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw,
					redirect: "follow"
				};

				fetch("https://assets.breatheco.de/apis/fake/contact/", requestOptions)
					.then(response => response.json())
					.then(result => console.log(result))
					.catch(error => console.log("error", error));
			},

			createOneContact: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
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
			getOneContact: id => {
				console.log(id);
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "GET"
				})
					.then(response => response.json())
					.then(data => setStore({ onecontact: data }))
					.catch(error => console.log(error));
			},
			updateOneContact: (full_name, email, address, phone, id) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "agendadelaura",
						address: address,
						phone: phone
					})
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
		
			deleteContact: id => {
				console.log(id);
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					// .then(resp =>console.log(resp), if(resp.status===200){actions.getAllContacts()} return response.json()})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};
export default getState;
