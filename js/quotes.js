class quotes {
  async getQuotes() {
    //fetch quote
    let response = await fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1');

    let responseData = response.json();

    return responseData;
  }
}