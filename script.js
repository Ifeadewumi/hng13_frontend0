// Display current time in milliseconds
const timeEl = document.querySelector('[data-testid="test-user-time"]');
function updateTime() {
  timeEl.textContent = Date.now();
}

const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.querySelector('[data-testid="test-contact-name"]');
    const email = document.querySelector('[data-testid="test-contact-email"]');
    const subject = document.querySelector('[data-testid="test-contact-subject"]');
    const message = document.querySelector('[data-testid="test-contact-message"]');
    const success = document.querySelector('[data-testid="test-contact-success"]');

    const errors = {
      name: document.querySelector('[data-testid="test-contact-error-name"]'),
      email: document.querySelector('[data-testid="test-contact-error-email"]'),
      subject: document.querySelector('[data-testid="test-contact-error-subject"]'),
      message: document.querySelector('[data-testid="test-contact-error-message"]') 
    };

    let valid = true;

    // Reset previous errors
    Object.values(errors).forEach(el => (el.textContent = ''));

    if (!name.value.trim()) {
      errors.name.textContent = 'Full name is required';
      valid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
      errors.email.textContent = 'Enter a valid email address';
      valid = false;
    }

    if (!subject.value.trim()) {
      errors.subject.textContent = 'Subject is required';
      valid = false;
    }

    if (!message.value.trim().length < 10) {
      errors.message.textContent = 'Message must be at least 10 characters';
      valid = false;
    }

    if (valid) {
      success.hidden = false;
      form.reset();
    } else {
      success.hidden = true;
    }
  });
}

updateTime(); // initial render
setInterval(updateTime, 1000); // update every second
