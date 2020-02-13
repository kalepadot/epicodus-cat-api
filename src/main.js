import './scss/main.scss';
import $ from 'jquery';
import './styles.css'
$(document).ready(function() {
  $("form#whatKat").submit(function(event) {
    event.preventDefault();
    let request = new XMLHttpRequest;
    const url = `https://api.thecatapi.com/v1/images/search?appid=${process.env.API_KEY}`;
    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };
    request.open("GET", url, true);
    request.send();
    const getElements = function(response) {
      let photo = response[0].url;
      $("#randoKat").empty();
      $("#randoKat").append("<img src='"+ photo + "'></img>");
    };
  });
  // $("#giveKittyHat").click(function() {
  //   let request = new XMLHttpRequest;
  //   const url = `https://api.thecatapi.com/v1/images/search?category_ids=1`;
  //   request.onreadystatechange = function() {
  //     if (this.readyState === 4 && this.status === 200) {
  //       const response = JSON.parse(this.responseText);
  //       getElements(response);
  //     }
  //   };
  //   request.open("GET", url, true);
  //   request.send();

  //   const getElements = function(response) {
  //     let photo = response[0].url;
  //     $("#randomHat").empty();
  //     $("#randomHat").append("<img src='"+ photo + "'></img>");
  //   }; 
  // });  
  
});
