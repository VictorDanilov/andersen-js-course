const asyncBar = async () => 'Some string';
async function foo() {
  const result = await asyncBar();
  console.log(result);
}

foo();
