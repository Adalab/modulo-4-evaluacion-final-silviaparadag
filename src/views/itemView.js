const generateErrorMsg = (errorText) => {
  return {
    success: false, 
    error: errorText
  };
};

const generateSuccessMsg = (msgText) => {
  return {
    success: true, 
    message: msgText
  };
};

const generateSuccess = (id) => {
  return {
    success: true, 
    id: id
  };
};


const generateJsonResult = (results) => {
  return {
    info: {
      count: results.length, 
        },
    results: results
  };
};

module.exports = {generateSuccess, generateJsonResult, generateErrorMsg, generateSuccessMsg};