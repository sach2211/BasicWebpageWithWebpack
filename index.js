import { fetchRandomDogPicture } from './helpers';

const url = fetchRandomDogPicture().then((resp) => {
    if (resp.body.status === 'success') {
      document.getElementById('dogImage').src = resp.body.message;      
    }
});

