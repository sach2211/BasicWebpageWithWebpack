import agent from 'superagent';

export function fetchRandomDogPicture() {
  return agent
  .get('https://dog.ceo/api/breeds/image/random')
}
