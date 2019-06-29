const fetch = require('./node_modules/node-fetch');

getFromSite = url => fetch(url).then(response => response.json());

getFromSite('http://www.json-generator.com/api/json/get/cfQCylRjuG').then(data => {
    const { getUsersData } = data;
    if (getUsersData) {
      getFromSite('http://www.json-generator.com/api/json/get/cfVGucaXPC').then(result =>
        console.log(result)
      );
    }
  });