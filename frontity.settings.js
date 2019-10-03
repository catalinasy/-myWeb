const settings = {
  "name": "my-web",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Catalina Syddall",
      "description": "Software Developer"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "CV",
              "/cv/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "data":{
            "/": {
              is404: false,
              isFetching: false,
              isReady: true
            },
            "/cv/": {
              is404: false,
              isFetching: false,
              isReady: true
            }
          }
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
