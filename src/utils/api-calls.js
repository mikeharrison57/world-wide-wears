const primaryUrl =
	'http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=';

export const fetchSaleItems = async () => {
	const response = await fetch(`${primaryUrl}sale&resultsFormat=native&page=1`);
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
	console.log( { pageNum } )
	const responseJson = await response.json();
	return responseJson;
};