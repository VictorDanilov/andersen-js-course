export function parseJSON(jsonStr, resolve, reject) {
  try {
    const result = JSON.parse(jsonStr);
    resolve(result);
  } catch (error) {
    reject(error);
  }
}

export function successCb(data) {
  console.log('Success parse!');
  console.log(data);
}

export function failureCb(error) {
  console.log('Failure parse!');
  console.log(error);
}

