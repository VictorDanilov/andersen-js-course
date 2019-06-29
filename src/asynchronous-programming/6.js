
    getResolvedPromise(500)
      .then(value => {
        if (value > 300) {
          throw new Error('Ошибка');
        }
      })

      ..........

  
