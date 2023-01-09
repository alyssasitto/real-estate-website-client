import { useState, useEffect } from "react";
import axios from "axios";

function useFetchData(endpoint) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const API_URL = "http://localhost:5005";

	useEffect(() => {
		// Set loading to true at that start of each re-render
		setLoading(true);

		// Use the API url and endpoint argument to make an axios.get() request
		axios
			.get(`${API_URL}/${endpoint}`)
			.then((response) => {
				// Set data state to the axios response
				setData(response.data);
			})
			.catch((err) => {
				// If there is an error set the error state to the error caught
				setError(err);
			})
			.finally(() => {
				// Set loading to false no matter what the outcome is
				setLoading(false);
			});
	}, [endpoint]);

	// Return the data, loading, and error states so any module using the hook can access these values
	return { data, loading, error };
}

export default useFetchData;
