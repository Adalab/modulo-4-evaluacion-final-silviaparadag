const callToApi = () => {
  return fetch ('http://localhost:4000/recetas')
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};

const sendToApi = (data) => {
  return fetch('http://localhost:4000/recetas', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const objToExport = { sendToApi:sendToApi, callToApi:callToApi};

export default objToExport;
