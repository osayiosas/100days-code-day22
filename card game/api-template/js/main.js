//Get the deck

let deckId = ''

  fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        deckId = data.deck_id

      })
      .catch(err => {
          console.log(`error ${err}`)
      });


//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        let val1 =Number (cardValue(data.cards[0].value ))
        let val2 =Number (cardValue ( data.cards[1].value ))
        document.querySelector('#player1').src = data.cards[0].image
        document.querySelector('#player2').src = data.cards[1].image

        if(val1 > val2){
          document.querySelector('h3').innerText = 'player 1 WON!'
        }else if(val1 < val2){
          document.querySelector('h3').innerText = 'player 2 WON!'
        }else {
          document.querySelector('h3').innerText = 'WAR!'
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function cardValue(val){
  if(val === "ACE"){
    return 15
  }else if (val === "KINGS"){
    return 14
  }else if (val === "QUEEN"){
    return 13
  }else if(val === "JACK"){
    return 12
  }else {
    return val 
  }
}
