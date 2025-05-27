function main() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject("Promise rejected after 3 seconds");
    }, 3000);
  });
}

async function handleRejection() {
  try {
    const result = await main();
    console.log(result);
  } catch (error) {
    console.error("Caught error:", error);
  }
}

handleRejection();
