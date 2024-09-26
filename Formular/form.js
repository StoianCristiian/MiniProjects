document.querySelector('form').addEventListener('submit', function(event){
event.preventDefault();

  const nume = document.getElementById('nume');
  const prenume = document.getElementById('prenume');
  const email = document.getElementById('email');
  const mesaj = document.getElementById('msg');

  let hasError = false;
  
  document.getElementById('nume-error').textContent = '';
  document.getElementById('prenume-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';

  if(nume.value.trim() === '') {
    document.getElementById('nume-error').textContent = 'Numele este obligatoriu!';
    hasError = true;
  }

  if(prenume.value.trim() === ''){
    document.getElementById('prenume-error').textContent = 'Prenumele este obligatoriu!';
    hasError = true;
  }

  if(!validateEmail(email.value)){
    document.getElementById('email-error').textContent = 'Email invalid!';
    hasError = true;
  }

  if(mesaj.value.trim() === ''){
    document.getElementById('message-error').textContent = 'Mesajul este obligatoriu!'
    hasError = true;
  }

  if(!hasError){
    alert('Formular completat corect!');
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}