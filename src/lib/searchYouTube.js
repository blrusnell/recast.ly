var searchYouTube = (options, successCallback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    success: function(result) {
      successCallback(result); 
      console.log(result)},
    contentType: 'application/json',

  });
};

export default searchYouTube;
