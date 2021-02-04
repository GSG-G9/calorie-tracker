const boomify = (status, msg) => {
    const error = new Error();
  
    error.status = status;
    error.msg = msg;
  
    return error;
  };
  
  module.exports = boomify;
  