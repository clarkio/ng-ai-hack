export const environment = {
  production: false,
  apiServer: 'https://westcentralus.api.cognitive.microsoft.com',
  apiKeys: {
    computerVision: '<insert your computer vision API key here>',
    face: '<insert your face API key here>',
    textAnalytics: '<insert your text analytics API key here>'
  },
  faceImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-f5ab578f41fc8f93ac9c7f1cd40941f1dcde8887a48baba731a3bebf350cfb50/images/shared/cognitive-services-demos/face-detection/detection-6.jpg'
  ],
  faceImagePairs: [
    {
      image1:
        'https://ia.media-imdb.com/images/M/MV5BMjIyMDI4MzY0OV5BMl5BanBnXkFtZTgwMDYyODgxMzE@._V1_SY1000_CR0,0,1480,1000_AL_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMTkxNzAwODEzN15BMl5BanBnXkFtZTYwMDIzODM2._V1_.jpg'
    },
    {
      image1:
        'https://ia.media-imdb.com/images/M/MV5BYzcxZDliNzgtYjQ0NS00MDI0LTkzMDctMjUwMDhhODg4YTFiXkEyXkFqcGdeQXVyMjE5MzM3MjA@._V1_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMjA5ODgwNzA1NV5BMl5BanBnXkFtZTcwNDA0MzYyNw@@._V1_.jpg'
    },
    {
      image1: 'https://ia.media-imdb.com/images/M/MV5BMjA1NDM0MDc3NF5BMl5BanBnXkFtZTYwOTA4MDU2._V1_.jpg',
      image2: 'https://ia.media-imdb.com/images/M/MV5BMTI4ODEzNzkzM15BMl5BanBnXkFtZTYwMjczMTQ2._V1_.jpg'
    }
  ],
  emotionImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-c279d652f08698664d10c9ce4fc15527a238b442f47fc23d42515b257cf70957/images/shared/cognitive-services-demos/recognize-emotion/emotion-6.jpg'
  ],
  textImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-1.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-2.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-4.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-72608df6b76809061acf15373a0cd185c594a46fa873ad20f9f8e6c1739fa45b/images/shared/cognitive-services-demos/read-text/read-6.jpg'
  ],
  objectImageUrls: [
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-3.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-5.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-6.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-7.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-8.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-9.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-10.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-11.jpg',
    'https://azurecomcdn.azureedge.net/cvt-ada4056a687a0f024d478b2eba03524ad163dd9a6c0853326a5a71276dc4d3c6/images/shared/cognitive-services-demos/analyze-image/analyze-12.jpg'
  ]
};
