export const primaryUrl =
	'https://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=';

export const fetchSaleItems = async () => {
	const response = await fetch(`${primaryUrl}sale&resultsFormat=native&page=2`);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const responseJson = await response.json();
	return responseJson;
};

export const fetchSearchedItems = async (searchTerm, pageNum) => {
	const response = await fetch(
		`${primaryUrl}${searchTerm}&resultsFormat=native&page=${pageNum}`
	);
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	const responseJson = await response.json();
	return responseJson;
};