function delay(ms) {
  return new Promise((resolve) => setTimeout(() => resolve(10), ms));
}

delay(2000).then((value) => console.log(`Done with ${value}`));
