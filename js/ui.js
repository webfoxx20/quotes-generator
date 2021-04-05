class Ui {
  constructor() {
    //created the ui component 
    this.quoteText = document.getElementById('text');
    this.author = document.getElementById('author');

  }

  paintResult(quote) {
    //painted the fetch result to the ui
    this.quoteText.textContent = quote.quotes[0].text;
    this.author.textContent = quote.quotes[0].author;

  }
}