import uid from 'uid';

const ideaEntries = [
  {
    id: uid(),
    title: 'My Great Idea',
    text: 'Everything Begins With An Idea.',
    tags: ['sales', 'logistics'],
    timestamp: '1st Jun 2019, 12:00 pm',
    author: {
      username: 'pilot',
      firstname: 'R.J.',
      lastname: 'MacReady',
      email: 'macready@idyeahs.com',
      avatar: {
        src: '/img/macready.jpg',
        alt: 'MacReady Avatar',
      },
      pwd: '123',
    },
  },
  {
    id: uid(),
    title: 'My Other Great Idea',
    text:
      'No Matter What People Tell You, Words And Ideas Can Change The World.',
    tags: ['events', 'service'],
    timestamp: '1st Jun 2019, 12:00 pm',
    author: {
      username: 'leojclarke',
      firstname: 'Leo',
      lastname: 'Clarke',
      email: 'leo@idyeahs.com',
      avatar: {
        src: '/img/leo.jpg',
        alt: 'Leo Avatar',
      },
      pwd: '123',
    },
  },
  {
    id: uid(),
    title: 'This is also a great idea',
    text:
      'With the introduction of JavaScript ES6, new coding concepts were introduced to JavaScript and therefore to React. For instance, a JavaScript function can be expressed as lambda (arrow function). That’s why a Function Component is sometimes called Arrow Function Components (or maybe also Lambda Function Component). Let’s see our refactored React Component with an Arrow Function.',
    tags: ['events', 'service'],
    timestamp: '1st Jun 2019, 12:00 pm',
    author: {
      username: 'other user',
      firstname: 'James Anthony',
      lastname: 'Smith',
      email: 'jim@idyeahs.com',
      avatar: {
        src: '/img/defaultAvatar.png',
        alt: 'default Avatar',
      },
      pwd: '123',
    },
  },
];

export default ideaEntries;