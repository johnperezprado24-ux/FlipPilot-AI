const marginValue = document.getElementById('dealMargin');

if (marginValue) {
  let current = 18;
  const target = 38;

  const timer = setInterval(() => {
    current += 1;
    marginValue.textContent = `${current}%`;

    if (current >= target) {
      clearInterval(timer);
    }
  }, 150);
}
