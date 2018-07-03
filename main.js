var funko = ['camericacopy.png','captaincopy.jpg','flashcopy.png','lobocopy.jpg','rnwcopy.png'];

var gallery = document.getElementById('gallery');

// var count= 0;
// for (thisItem in funko) {
//  console.log(funko[count]);
//  count = count + 1;
// };

var count = 0;
for (thisItem in funko) {
  var newImage = document.createElement('img');
  newImage.src = 'img/' + funko[count];
  newImage.width = '150';
  newImage.height = '100';
  gallery.appendChild(newImage);
  count = count + 1;
};
