var api = "https://api.giphy.com/v1/gifs/search?";

var apiKey = "&api_key=0UG01kS1ABG8wu8AcbEL7z1Hm6DvfBDj";

var query = "&q=dog";


function setup() {
  noCanvas();
  var url = api + apiKey + query;
  loadJSON(url, gotData);
}

function gotData(giphy) {
  for (var i = 0; i < giphy.data.length; i++){
  createImg(giphy.data[0].images.original.url);
}
}

function draw() {

}
