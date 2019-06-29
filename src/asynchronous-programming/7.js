const getProm1 = () => Promise.resolve(2);
const getProm2 = () => Promise.resolve(3);
const getProm3 = () => Promise.resolve(7);

async function foo() {
  const v1 = await getProm1();
  const v2 = await getProm2(v1);
  const v3 = await getProm3(v2);

  console.log(v1 * (v2 + v3));
}

foo();