  successCb = result => {
    console.log('Success parse!',result);
  };

  failureCb = error => {
    console.log('Failure parse',error);
  };

  parseJSON = (jsonStr, sucCb, failCb) => {
    try {
      result = JSON.parse(jsonStr);
      sucCb(result);
    } catch (error) {
      failCb(error);
    }
  };

  parseJSON('{"x": 10}', successCb, failureCb);
  parseJSON('{x}', successCb, failureCb);