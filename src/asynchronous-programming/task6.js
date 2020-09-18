function getResolvedPromise(value) {
  return new Promise((resolve) => resolve(value));
}
getResolvedPromise(500)
  .then((result) => {
    if (result > 300) {
      throw new Error('Attention error');
    }
  })
  .catch((error) => console.log(error.message))
  .finally(console.log('This is finally'));
