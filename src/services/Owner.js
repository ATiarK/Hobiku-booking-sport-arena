import axios from "axios";
import { errorMessage, successMessage } from "../functions/Alert";
import { statusLogin, API } from "./Users";

export const fetchBookingData = async (setBookingData) => {
	const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;
	await axios
		.get(`${API}/owner/history`)
		.then((res) => {
			setBookingData(res.data.data);
		})
		.catch((err) => {
			console.log(err);
		});
};

export const deleteVenue = async (venue_id) => {
	// const API = `https://virtserver.swaggerhub.com/hafidhirsyad/sport-arena-api/1.0.0`;
	const token = statusLogin();
	axios
		.delete(`${API}/venues/${venue_id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
		.then((res) => {
			successMessage(res);
		})
		.catch((err) => {
			errorMessage(err);
		});
};

export const dummy = {
	venue_id: 1,
	days: ["none"],
	open_hour: "00:00",
	close_hour: "00:00",
	price: 0,
	facilities: ["none"],
};