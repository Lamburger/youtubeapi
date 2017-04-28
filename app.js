var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
var GOOGLE_KEY = 'AIzaSyBFwOrnxz26vxWS_vwYxU6KabSMyEd8yW0';

function getDataFromApi(searchTerm, callback) {
  var query = {
    q: "searchTerm",
    part: 'snippet',
    key: GOOGLE_KEY
  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}


function displayYoutubeSearchData(data) {
  var resultElement = '';
  if (data.Search) {
    data.Search.forEach(function(item) {
     resultElement += '<p>' + item.Title + '</p>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayYoutubeSearchData);
  });
}

$(function(){watchSubmit();});
