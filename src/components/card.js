import axios from 'axios';

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  let cards = document.createElement("div");
  cards.classList.add("cards");
  
  let headline = document.createElement("div");
  headline.textContent = article[0][0]["headline"];
  headline.classList.add("headline");
  cards.appendChild(headline);
  
  let author = document.createElement("div");
  //author.textContent = article[1][1]["authorName"];
  author.classList.add("author");
  cards.appendChild(author);
  
  let imgcontainer = document.createElement("div");
  //imgcontainer.textContent = "";
  imgcontainer.classList.add("img-container");
  author.appendChild(imgcontainer);
  
  let img = document.createElement("img");
  img.src = article[0][0]["authorPhoto"];
  imgcontainer.appendChild(img);
  
  let span = document.createElement("span");
  span.textContent = article[0][0]["authorName"];
  author.appendChild(span);

  return cards;
  
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((response) => 
  {
    let cards = Card(response["data"]);

    document.querySelector(selector).appendChild(cards);
  }
  )

}

export { Card, cardAppender }
