const asyncBar = async () => 'Some string!';

// eslint-disable-next-line import/prefer-default-export
export async function foo() {
  console.log(await asyncBar());
}