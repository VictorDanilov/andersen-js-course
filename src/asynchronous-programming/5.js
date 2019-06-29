const fetch = require('./node_modules/node-fetch');

getFromSite = url => fetch(url).then(response => response.json());

const urls = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK',
  ];

  const parallel = () => {
    Promise.all(urls.map(getFromSite)).then(element => {
      console.log('parallel');
      console.log(element);
    });
  };

  const sequence = () => {
    const result = urls.reduce((accum, next) => {
      return accum.then(coupling => getFromSite(next).then(element => [...coupling, element]));
    }, Promise.resolve([]));

    result.then(element => {
      console.log('sequence');
      console.log(element);
    });
  };
  parallel();
  sequence();
