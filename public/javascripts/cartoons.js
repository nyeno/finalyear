let apiKey = "AIzaSyAKuCeP_jLxUXykpnsVjQOgIOoGxwbloRw"
let main = document.querySelector(".youtube")
let added = ""

  function loadClient() {
    gapi.client.setApiKey(apiKey);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { 
            console.log("GAPI client loaded for API");
            execute()
             },
              function(err) { console.error("Error loading GAPI client for API", err); });

  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part":"snippet",
      "maxResults": 50,
      "q": "cartoons for kids"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                const items = response.result.items
                items.forEach(item => {
                    let videoId = item.id.videoId;
                    let channelTitle = item.snippet.channelTitle
                    added += `
                    <section> 
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <h3>${channelTitle}</h3>
                    </section>  
                    `
                });
                main.innerHTML = added
              },
              function(err) { console.error("Execute error", err); });
  }
