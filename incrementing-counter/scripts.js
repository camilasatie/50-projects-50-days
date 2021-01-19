const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));
    const incrementNumber = Number(counter.innerText);

    const increment = target / 200;

    if (incrementNumber < target) {
      counter.innerText = `${Math.ceil(incrementNumber + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
