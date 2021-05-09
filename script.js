const message = "In our darkest hour\nIn my deepest despair\nWill you still care?\nWill you be there?\n\nIn my trials\nAnd my tribulations\nThrough our doubts\nAnd frustrations\n\nIn my violence\nIn my turbulence\nThrough my fear\nAnd my confessions\n\nIn my anguish and my pain\nThrough my joy and my sorrow\nIn the promise of another tomorrow\nI'll never let you part\nFor you're always in my heart.";

// const message = 'test';

const messageElem = document.getElementById('message');
const cursorElem = document.getElementById('cursor');
const videoElem = document.getElementById('background-video');

document.addEventListener('click', (e) => {
    videoElem.muted = !videoElem.muted;
})

function makeCursorVisible() {
  cursorElem.classList.add('visible');
  cursorElem.classList.remove('hidden'); 
}

function makeCursorHidden() {
  cursorElem.classList.add('hidden');
  cursorElem.classList.remove('visible');
}

makeCursorHidden();

function displayMessage() {
  const array = [];
  for(i=0;i<message.length;i++){
    array.push(message.substr(0, i + 1));
  }
  
  let arrayIndexRef = 0;
  const timer = setInterval(() => {
    if(arrayIndexRef >= message.length - 1){
      clearInterval(timer);
      makeCursorVisible();
      return;
    }
    arrayIndexRef++;
    messageElem.innerHTML = array[arrayIndexRef];
  }, 150);
}

displayMessage();