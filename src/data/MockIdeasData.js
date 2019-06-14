import uid from 'uid';

const ideaEntries = [
  {
    id: uid(),
    title: 'My Great Idea',
    text: 'Everything Begins With An Idea.',
    tags: ['sales', 'logistics'],
    timestamp: '2014-09-08T08:02:17-05:00',
    author: {
      username: 'pilot',
      firstname: 'R.J.',
      lastname: 'MacReady',
      email: 'macready@idyeahs.com',
      role: 'Pilot',
      department: 'outpost b19',
      avatar: {
        src: '/img/macready.jpg',
        alt: 'MacReady Avatar',
      },
      pwd: '123',
    },
    stars: 5,
    comments: [
      {
        id: uid(),
        author: {
          username: 'pilot',
          firstname: 'R.J.',
          lastname: 'MacReady',
          email: 'macready@idyeahs.com',
          role: 'Pilot',
          department: 'outpost b19',
          avatar: {
            src: '/img/macready.jpg',
            alt: 'MacReady Avatar',
          },
        },
        comment: 'This is my comment',
        timestamp: '2014-09-08T08:02:17-05:00',
      },
      {
        id: uid(),
        author: {
          username: 'pilot',
          firstname: 'R.J.',
          lastname: 'MacReady',
          email: 'macready@idyeahs.com',
          role: 'Pilot',
          department: 'outpost b19',
          avatar: {
            src: '/img/macready.jpg',
            alt: 'MacReady Avatar',
          },
        },
        comment: 'I too have a comment.',
        timestamp: '2014-09-08T08:02:17-05:00',
      },
    ],
  },
  {
    id: uid(),
    title: 'My Other Great Idea',
    text:
      'No Matter What People Tell You, Words And Ideas Can Change The World.',
    tags: ['events', 'service'],
    timestamp: '2014-09-08T08:02:17-05:00',
    author: {
      username: 'leojclarke',
      firstname: 'Leo',
      lastname: 'Clarke',
      email: 'leo@idyeahs.com',
      role: 'Helpdesk Technician',
      department: 'Helpdesk',
      avatar: {
        src: '/img/leo.jpg',
        alt: 'Leo Avatar Image',
      },
    },
    stars: 4,
    comments: [],
  },
  {
    id: uid(),
    title: 'This is also a great idea',
    text:
      'With the introduction of JavaScript ES6, new coding concepts were introduced to JavaScript and therefore to React. For instance, a JavaScript function can be expressed as lambda (arrow function). That’s why a Function Component is sometimes called Arrow Function Components (or maybe also Lambda Function Component). Let’s see our refactored React Component with an Arrow Function.',
    tags: ['events', 'service'],
    timestamp: '2014-09-08T08:02:17-05:00',
    author: {
      username: 'other user',
      firstname: 'James Anthony',
      lastname: 'Smith',
      email: 'jim@idyeahs.com',
      role: 'chief something officer',
      department: 'office',
      avatar: {
        src: '/img/defaultAvatar.png',
        alt: 'default Avatar',
      },
    },
    stars: 0,
    comments: [],
  },
];

export default ideaEntries;
