getTranslation () {
    let text = document.querySelector('#textInput').innerText

    let fField = document.querySelector("#fromBox")
    let tField = document.querySelector("#toBox")

    let f = fField.options[fField.selectedIndex].value
    let t = tField.options[tField.selectedIndex].value
    const url = "https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=" + f + "&to=" + t

    fetch(url, {
      method: 'POST',
      body: [{'Text': ' + text + '}],
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '2143d6e1024f4580a1007aa5f8ee334c'
      }
    }).then(res => res.json())
    .then(function(response) {
      if (response.length && response[0].translations && response[0].translations[0] && response[0].translations[0].text) {
        document.querySelector('#translationResult').innerText = response[0].translations[0].text
        document.querySelector('#original').innerText = document.querySelector('#textInput').innerText
        document.querySelector('#textInput').innerText = ""
      }
    })
    .catch(error => console.error('Error:', error));
  }