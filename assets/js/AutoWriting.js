let counter = 1;
const autoWrite = () => {
  const title = "AhmedQandil";
  h1.innerText = title.slice(0, counter);
  counter++;

  if (title.length < counter) {
    counter = 1;
  }
};

const Auto = setInterval(autoWrite, 400);
