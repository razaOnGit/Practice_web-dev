function delay(time, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), time);
  });
}

async function withPromiseAll() {
  const p1 = delay(1000, "One");
  const p2 = delay(2000, "Two");
  const p3 = delay(3000, "Three");

  const results = await Promise.all([p1, p2, p3]);
  console.log("With Promise.all:", results);
}

async function withIndividualAwait() {
  const r1 = await delay(1000, "One");
  const r2 = await delay(2000, "Two");
  const r3 = await delay(3000, "Three");

  console.log("One by one:", [r1, r2, r3]);
}

withPromiseAll();
withIndividualAwait();
