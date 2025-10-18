// Display current time in milliseconds
const timeEl = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  timeEl.textContent = Date.now();
}
updateTime(); // initial render
setInterval(updateTime, 1000); // update every second
