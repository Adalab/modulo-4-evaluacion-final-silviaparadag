// Fichero src/services/api.js
const callToApi = async() => {
  // Llamamos a la API
  /* con promesa THEN
  return fetch('') 
    .then((response) => response.json())
    .then((response) => {
      // Cuando responde la API podemos limpiar los datos aquí
      const result = {
        
      };
      return result;
    });
 */
    const fetchApi = await fetch ('http://localhost:4500/api/kittens');
  const dataJson = await fetchApi.json();
  return dataJson;
};

const sendToApi = (data) => {
  return fetch('https://programadoras-junior.onrender.com/api/projectCard', {
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