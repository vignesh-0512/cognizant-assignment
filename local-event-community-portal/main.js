  (function(){
    const images = document.querySelectorAll("#imageSlider img");
    const captions = [
      "Community gathering outdoor",
      "People dancing at street festival",
      "Live music concert performance",
      "Art exhibition event"
    ];
    const captionElement = document.getElementById('sliderCaption');
    let currentIndex = 0;

    const showImage = index => {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
      captionElement.textContent = captions[index];
    };

    document.getElementById('prevBtn').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 5000);
  })();

  (() => {
    const form = document.getElementById('registrationForm');
    const eventSelect = document.getElementById('eventType');
    const feeDisplay = document.getElementById('eventFee');
    const phoneInput = document.getElementById('phone');
    const formMessage = document.getElementById('formMessage');

    function showEventFee() {
      const value = eventSelect.value;
      switch(value) {
        case 'picnic':
          feeDisplay.textContent = 'Registration Fee: Free';
          break;
        case 'festival':
          feeDisplay.textContent = 'Registration Fee: $10';
          break;
        case 'concert':
          feeDisplay.textContent = 'Registration Fee: $15';
          break;
        case 'art':
          feeDisplay.textContent = 'Registration Fee: Free';
          break;
        default:
          feeDisplay.textContent = '';
      }
    }

    eventSelect.addEventListener('change', showEventFee);

    form.addEventListener('submit', e => {
      e.preventDefault();
      formMessage.textContent = '';
      form.classList.add('was-validated');

      if (phoneInput.value && !phoneInput.checkValidity()) {
        phoneInput.classList.add('is-invalid');
        phoneInput.focus();
        return;
      } else {
        phoneInput.classList.remove('is-invalid');
      }

      if (!form.checkValidity()) {
        return;
      }

      formMessage.textContent = 'Thank you for registering! We have received your information.';
      formMessage.className = 'text-success fw-bold mt-3';

      setTimeout(() => {
        form.reset();
        feeDisplay.textContent = '';
        form.classList.remove('was-validated');
        formMessage.textContent = '';
      }, 3000);
    });

    window.showEventFee = showEventFee; 
  })();
