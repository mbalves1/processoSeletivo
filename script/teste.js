function getData(url) { 
    return new Promise(function(resolve, reject){ 
      const req = new XMLHttpRequest() 

      req.open('GET',"https://unsplash.com/photos/yC-Yzbqy7PY") 
      req.onload = function () {

        if (req.status === 200) { 
          resolve(req.response)
        } else {
          reject(req.status, req.statusText) 
        }
      }
      req.onerror = function () { 
        reject("erro de conexão")

      }

       req.send() 
     })
  }

  const catchImage = document.getElementById("carouselExampleControls") 

  getData 

  const url = getData("https://picsum.photos/id/0/5616/3744").then(function(response)
  {
    const jsonResponse =JSON.parse(response.images.url)
    console.log(response)
    catchImage.innerHTML = ""
    for (const url of jsonResponse["url"]) {
        catchImage.innerHTML = catchImage.innerHTML + "<img src='" + images.url +  "' />"
      console.log(url)
    }
  }, function(error) { console.log(error)}) 