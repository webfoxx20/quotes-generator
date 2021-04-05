//init the  quotes object
const quote = new quotes();

//init ui object
const ui = new Ui()

// get quote when button is click
this.btn = document.getElementById('btn').addEventListener('click', getQuotes)


//get the quote and  paint to ui
function getQuotes() {
  loader(true, false);
  quote.getQuotes().then(res => {

    if (res.status === 200) {
      loader(false, true);
      ui.paintResult(res);
    }
  }).catch(err => console.log(err));
  // quote.getQuotes().then(res => console.log(res)).catch(err => console.log(err))

};

function loader(loader, quotes) {
  let display;
  let show;
  loader === true ? display = 'block' : display = 'none';
  quotes === true ? show = 'block' : show = 'none';
  document.querySelector('.qoutes').style.display = show;
  document.getElementById('loader').style.display = display;


}