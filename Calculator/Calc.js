function appendToDisplay(valoare){
  document.getElementById('display').value+=valoare;
}

function calculateResult(){
  const display = document.getElementById('display');
  try{
    display.value = eval(display.value);
  } catch {
    display.value = 'Eroare';
  }
}

function clearDisplay(){
  document.getElementById('display').value = '';
}

function deleteLast(){
  display = document.getElementById('display');
  display.value = display.value.slice(0,-1);
}