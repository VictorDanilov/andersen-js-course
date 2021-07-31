const urls = [
    'http://www.json-generator.com/api/json/get/cevhxOsZnS',
    'http://www.json-generator.com/api/json/get/cguaPsRxAi',
    'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
    'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
    'http://www.json-generator.com/api/json/get/ceQMMKpidK',
  ];
  
  export function getDataParallel() {
    Promise.all(urls.map(url => fetch(url).then(res => res.json()))).then(data => {
      console.log('parallel');
      console.log(data);
    });
  }
  
  function getData(url) {
    return fetch(url).then(res => res.json());
  }
  
  // eslint-disable-next-line no-shadow
  export const getDataSequential = () => {
    const res = [];
  
    urls
      .map(getData)
      .reduce((prevProm, currProm) => {
        return prevProm.then(data => {
          res.push(data);
          return currProm;
        });
      })
      .then(data => {
        res.push(data);
        console.log(res);
      });
  };