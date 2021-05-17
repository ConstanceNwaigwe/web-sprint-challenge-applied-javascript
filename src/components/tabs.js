import axios from 'axios';
import { response } from 'msw';

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  let topic = document.createElement("div");
  topic.classList.add("topics");
  
  for (let i = 0; i < topics.length; i++){
    let tab1 = document.createElement("div");
    tab1.textContent = topics[i];
    topic.appendChild(tab1);
    tab1.classList.add("tab");
  }
  
  /*let tab2 = document.createElement("div");
  tab2.textContent = topics[1];
  topic.appendChild(tab2);
  tab2.classList.add("tab");
  
  let tab3 = document.createElement("div");
  tab3.textContent = topics[2];
  topic.appendChild(tab3);
  tab3.classList.add("tab");*/

  return topic;

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  axios
  .get("https://lambda-times-api.herokuapp.com/topics")
  .then((response) => 
  {
    let tabs = Tabs(response["topics"]);

    document.querySelector(selector).appendChild(tabs);
  }
  )

  //let topics = ['javascript', 'bootstrap', 'technology'];

  //let tabs = Tabs(topics);

  //document.querySelector(selector).appendChild(tabs);

}

export { Tabs, tabsAppender }
