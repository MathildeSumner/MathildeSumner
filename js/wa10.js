const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 200 fahrenheit outside, so :insertx: went to the pool. When they got to :inserty:, they started to jump for joy, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let Xitem = randomValueFromArray(insertX);
    let Yitem = randomValueFromArray(insertY);
    let Zitem = randomValueFromArray(insertZ);
    
    newStory = newStory.replaceAll(':insertx:', Xitem);
    newStory = newStory.replaceAll(':inserty:', Yitem);
    newStory = newStory.replaceAll(':insertz:', Zitem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + "stone";
    const temperature =  Math.round((94 - 32) * 5/9) + "centigrade";
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}