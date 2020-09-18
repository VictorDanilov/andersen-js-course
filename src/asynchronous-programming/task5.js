const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];
function getDataParallel(urls) {
  const arrayOfPromisesRequest = urls.map((url) => fetch(url));
  Promise.all(arrayOfPromisesRequest).then((responses) =>
    responses.map((response) => response.json().then((result) => console.log(result)))
  );
}

function getDataSequence(urls) {
  const arrayOfPromisesRequest = urls.map((url) => fetch(url));
  for (let url of arrayOfPromisesRequest) {
    Promise.resolve(url).then((response) => response.json().then((result) => console.log(result)));
  }
}

getDataParallel(urls);
getDataSequence(urls);
