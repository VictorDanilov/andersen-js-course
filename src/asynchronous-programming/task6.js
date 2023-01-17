// eslint-disable-next-line import/prefer-default-export
function getResolvedPromise(value) {
    return Promise.resolve(value);
  }
  
  // eslint-disable-next-line import/prefer-default-export
  export const task6 = value => {
    getResolvedPromise(value)
      .then(res => {
        if (res > 300) {
          throw new Error('Ошибка');
        }
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        console.log('This is Finally!');
      });
  };