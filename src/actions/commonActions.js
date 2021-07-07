import axios from 'axios';
import { toast } from 'react-toastify';
import {
	ADD_FAQ,
	DELETE_FAQ,
	GET_EVENT_FAQS,
	GET_FAQS,
	UPDATE_FAQ,
} from '../constants/commonConstants';

export const getFaqs = () => async (dispatch, getState) => {
	dispatch({
		type: 'SET_LOADING',
		payload: true,
	});
	try {
		const { data } = await axios.post(`/api/admin/getFaqs`);
		dispatch({
			type: GET_FAQS,
			payload: data.data,
		});
		setTimeout(() => {
			dispatch({
				type: 'SET_LOADING',
				payload: false,
			});
		}, 600);
	} catch (error) {
		toast.error(`Failed with error : ${error}`);
		dispatch({
			type: 'SET_LOADING',
			payload: false,
		});
	}
};
export const getEventFaqs = () => async (dispatch, getState) => {
	dispatch({
		type: 'SET_LOADING',
		payload: true,
	});
	try {
		const { data } = await axios.post(`/api/admin/getEventFaqs`);

		dispatch({
			type: GET_EVENT_FAQS,
			payload: data.data,
		});
		setTimeout(() => {
			dispatch({
				type: 'SET_LOADING',
				payload: false,
			});
		}, 600);
	} catch (error) {
		toast.error(`Failed with error : ${error}`);
		dispatch({
			type: 'SET_LOADING',
			payload: false,
		});
	}
};

export const createFaq = (newData) => async (dispatch, getState) => {
	dispatch({
		type: 'SET_LOADING',
		payload: true,
	});
	const { data } = await axios.post(`/api/admin/createFaq`, { data: newData });

	dispatch({
		type: ADD_FAQ,
		payload: data.data,
	});
	setTimeout(() => {
		dispatch({
			type: 'SET_LOADING',
			payload: false,
		});
	}, 600);
};

export const updateFaq =
	({ question, answer, type, _id }) =>
	async (dispatch, getState) => {
		dispatch({
			type: 'SET_LOADING',
			payload: true,
		});
		try {
			let body = {
				question,
				answer,
				type,
			};

			const { data } = await axios.post(`/api/admin/updateFaq`, {
				id: _id,
				update: body,
			});

			dispatch({
				type: UPDATE_FAQ,
				payload: data.data,
			});
			setTimeout(() => {
				dispatch({
					type: 'SET_LOADING',
					payload: false,
				});
			}, 600);
		} catch (error) {
			toast.error(`Failed with error : ${error}`);
			dispatch({
				type: 'SET_LOADING',
				payload: false,
			});
		}
	};

export const deleteFaq = (id) => async (dispatch, getState) => {
	dispatch({
		type: 'SET_LOADING',
		payload: true,
	});
	try {
		const { data } = await axios.post(`/api/admin/deleteFaq`, {
			id: id,
		});

		if (data === 'OK') {
			dispatch({
				type: DELETE_FAQ,
				payload: id,
			});
			setTimeout(() => {
				dispatch({
					type: 'SET_LOADING',
					payload: false,
				});
			}, 100);
		}
	} catch (error) {
		toast.error(`Failed with error : ${error}`);
		dispatch({
			type: 'SET_LOADING',
			payload: false,
		});
	}
};
