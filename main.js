document.querySelector('button').addEventListener('click', getJoke)

function getJoke(){
  const url = 'https://api.chucknorris.io/jokes/random'

  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data.value)
        document.querySelector('h2').innerText = data.value
        document.querySelector('img').src = data.icon_url
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
