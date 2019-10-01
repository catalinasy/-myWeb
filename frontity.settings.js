const settings = {
  "name": "my-web",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "Catalina Syddall",
      "description": "Jr Software Developer"
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
        },
        "content": {
          "home": [
            { title: 'Hello World!',
            content: ""}
           ],
           "cv": [
            { title: 'CV section title',
            content: "CV section content"}
           ],
           "projects":[
            { title: 'Projects section title',
            content: "Projects section content"}
           ]
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
              isFetching: true,
              isReady: true
            },
            "/cv/": {
              is404: false,
              isFetching: true,
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
