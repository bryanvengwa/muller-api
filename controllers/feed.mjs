const dummyData = [
  {
    _id: 1,
    title: 'First Post',
    content: 'This is the content of the first post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 2,
    title: 'Second Post',
    content: 'This is the content of the second post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 3,
    title: 'Third Post',
    content: 'This is the content of the third post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 4,
    title: 'Fourth Post',
    content: 'This is the content of the fourth post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 5,
    title: 'Fifth Post',
    content: 'This is the content of the fifth post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 6,
    title: 'Sixth Post',
    content: 'This is the content of the sixth post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 7,
    title: 'Seventh Post',
    content: 'This is the content of the seventh post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 8,
    title: 'Eighth Post',
    content: 'This is the content of the eighth post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    _id: 9,
    title: 'Ninth Post',
    content: 'This is the content of the ninth post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
  {
    i_d: 10,
    title: 'Tenth Post',
    content: 'This is the content of the tenth post.',
    imageUrl:'images/duck.jpg',
    creator:{
      name:'bryanvengwa',
      
    },
    date: new Date()
  },
];

export const getPost = (request, response, next) => {
  return response.status(200).json({ posts: dummyData });
};

export const createPost = (request, response, next) => {
  const {
    body: { title, content },
  } = request;
  return response.status(201).json({
    message: 'Post created successfully',
    post: { id: new Date().toISOString(), title: title, content: content },
  });
};
