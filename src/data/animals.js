const Queue = require('./queue');

let catQueue = new Queue();
let dogQueue = new Queue();


const cats = [
  {
    imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  },
  {
    imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg',
    imageDescription: 'Orange bengal cat with yellow eyes looking directly at the camera',
    name: 'Fred',
    sex: 'Male',
    age: 4,
    breed: 'Bengal',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'http://images6.fanpop.com/image/photos/41500000/Beautiful-Black-Cat-cherl12345-tamara-41506320-1630-1688.jpg',
    imageDescription: 'Black cat laying on the bed',
    name: 'Hank',
    sex: 'Male',
    age: 1,
    breed: 'Bombay',
    story: 'Born in the wilderness'
  },
  {
    imageURL: 'https://static01.nyt.com/images/2018/07/24/well/fat-cat/fat-cat-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
    imageDescription: 'Grey and white cat laying on her back',
    name: 'Miss Pouncy',
    sex: 'Female',
    age: 2,
    breed: 'Norwegian Forest',
    story: 'Abandoned'
  },
  {
    imageURL: 'https://www.argospetinsurance.co.uk/assets/uploads/2017/12/cat-pet-animal-domestic-104827.jpeg',
    imageDescription: 'Grey and white cat with yellow eyes',
    name: 'Sir Ferocious',
    sex: 'Male',
    age: '6 Months',
    breed: 'Egyptian Mau',
    story: 'Born outside as a feral cat'
  }

];

const dogs = [
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://www.ucdavis.edu/sites/default/files/styles/panopoly_image_full/public/images/article/german_shepherd_dog_getty.jpg?itok=LsVcvmv1',
    imageDescription: 'German Shepard laying in the grass',
    name: 'Fido',
    sex: 'Male',
    age: 2,
    breed: 'German Shepard',
    story: 'Was a police dog'
  },
  {
    imageURL: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2018/02/Bernese-Mountain-Dog_01.jpg',
    imageDescription: 'Bernese Mountain Dog laying in the woods',
    name: 'Sally',
    sex: 'Female',
    age: 1,
    breed: 'Bernese',
    story: 'Owner Passed away'
  },
  {
    imageURL: 'https://www.rover.com/blog/wp-content/uploads/2017/06/7683806832_59688557b2_o-960x540.jpg',
    imageDescription: 'Siberian Husky one blue and one brown eye' ,
    name: 'Indy',
    sex: 'Male',
    age: 4,
    breed: 'Siberian Husky',
    story: 'Abandoned'
  },
  {
    imageURL: 'https://www.telegraph.co.uk/content/dam/science/2017/09/10/TELEMMGLPICT000107300056_trans_NvBQzQNjv4BqyuLFFzXshuGqnr8zPdDWXiTUh73-1IAIBaONvUINpkg.jpeg?imwidth=450',
    imageDescription: 'Black Lab looking right into the camera',
    name: 'Lacey',
    sex: 'Female',
    age: 3,
    breed: 'Black Lab',
    story: 'Owner left the country and could not keep her'
  }
];

for (let i = 0; i < cats.length; i++) {
  catQueue.enqueue(cats[i]);
}

for (let i = 0; i < dogs.length; i++) {
  dogQueue.enqueue(dogs[i]);
}



module.exports = { catQueue, dogQueue };
