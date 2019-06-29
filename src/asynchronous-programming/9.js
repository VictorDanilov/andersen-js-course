    const asyncBar = async () => 'Some string';
  
    async function foo() {
      const somesrt = await asyncBar();
      console.log(somesrt);
    }
    foo();