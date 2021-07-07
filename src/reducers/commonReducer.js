import {
	ADD_FAQ,
	UPDATE_FAQ,
	DELETE_FAQ,
	GET_FAQS,
	GET_EVENT_FAQS,
} from '../constants/commonConstants';

import { toast } from 'react-toastify';

const initialState = {
	faqs: [],
	eventFaqs: [],
};

export const commonReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_FAQS:
			console.log(payload);
			return {
				...state,
				faqs: payload,
			};
		case GET_EVENT_FAQS:
			console.log(payload);
			return {
				...state,
				eventFaqs: payload,
			};
		case ADD_FAQ:
			console.log(payload);
			return {
				...state,
				faqs: [...state.faqs, payload],
			};
		case UPDATE_FAQ:
			let newData = state.faqs.map((faq) => {
				if (faq._id === payload._id) {
					faq = payload;
				}
				return faq;
			});
			return {
				...state,
				faqs: newData,
			};
		case DELETE_FAQ:
			let remainingData = state.faqs.filter(
				(faq) => faq._id !== action.payload
			);
			return {
				...state,
				faqs: remainingData,
			};

		case 'SET_LOADING':
			return {
				...state,
				loading: payload,
			};

		default:
			return state;
	}
};
