//init the  quotes object
const quote = new quotes();

//init ui object
const ui = new Ui()

// get quote when button is click
this.btn = document.getElementById('btn').addEventListener('click', getQuotes)


//get the quote and  paint to ui
function getQuotes() {
  quote.getQuotes().then(res => ui.paintResult(res)).catch(err => console.log(err))

};