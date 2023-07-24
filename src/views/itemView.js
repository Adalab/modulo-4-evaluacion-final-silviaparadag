//const itemViews = require('../views/itemView');

// const generateError = (errorText) => {
//   return {
//     success: false, 
//     error: errorText
//   };
// };

const generateSuccess = () => {
  return {success: true};
};

const generateJsonResult = () => {
  return {
    info: {
      count: results.length, 
        },
    results: results
  };
};

module.exports = {generateSuccess, generateJsonResult};