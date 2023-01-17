// eslint-disable-next-line import/prefer-default-export
export function delay(ms) {
    return new Promise(resolve => {
      setTimeout(() => resolve(100), ms);
    });
  }