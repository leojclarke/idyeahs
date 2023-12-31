import uid from 'uid';

const ideaEntries = [
  {
    id: uid(),
    title: 'Greater Employee Autonomy',
    text: 'I think if we were able to make .',
    tags: ['sales', 'logistics'],
    timestamp: '2021-09-08T08:02:17',
    author: {
      username: 'pilot',
      firstname: 'R.J.',
      lastname: 'MacReady',
      email: 'macready@idyeahs.com',
      role: 'Pilot',
      department: 'outpost b19',
      avatar: {
        src: '/images/macready.jpg',
        alt: 'MacReady Avatar',
      },
      pwd: '123',
    },
    stars: [
      {
        timestamp: '2010-01-01T08:02:17-05:00',
        author: {
          username: 'pilot',
          email: 'macready@idyeahs.com',
        },
      },
      {
        timestamp: '2010-01-02T08:02:17-05:00',
        author: {
          username: 'leojclarke',
          email: 'leo@idyeahs.com',
        },
      },
      {
        timestamp: '2010-04-02T08:02:17-05:00',
        author: {
          username: 'blair',
          email: 'blair@idyeahs.com',
        },
      },
    ],
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
            src: '/images/macready.jpg',
            alt: 'MacReady Avatar',
          },
        },
        comment: 'This is my comment',
        timestamp: '2021-09-08T08:02:17-05:00',
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
            src: '/images/macready.jpg',
            alt: 'MacReady Avatar',
          },
        },
        comment: 'I too have a comment.',
        timestamp: '2021-09-08T08:02:17-05:00',
      },
    ],
  },
  {
    id: uid(),
    title: 'My Other Great Idea',
    text:
      'No Matter What People Tell You, Words And Ideas Can Change The World.',
    tags: ['events', 'service'],
    timestamp: '2021-09-08T08:02:17',
    author: {
      username: 'leojclarke',
      firstname: 'Leo',
      lastname: 'Clarke',
      email: 'leo@idyeahs.com',
      role: 'Helpdesk Technician',
      department: 'Helpdesk',
      avatar: {
        src: '/images/leo.jpg',
        alt: 'Leo Avatar Image',
      },
    },
    stars: [],
    comments: [],
  },
  {
    id: uid(),
    title: 'This is also a great idea',
    text:
      // eslint-disable-next-line no-multi-str
      "Beautiful is better than ugly.\
      Explicit is better than implicit.\
      Simple is better than complex.\
      Complex is better than complicated.\
      Flat is better than nested.\
      Sparse is better than dense.\
      Readability counts.\
      Special cases aren't special enough to break the rules.\
      Although practicality beats purity.\
      Errors should never pass silently.\
      Unless explicitly silenced.\
      In the face of ambiguity, refuse the temptation to guess.\
      There should be one—and preferably only one—obvious way to do it.\
      Although that way may not be obvious at first unless you're Dutch.\
      Now is better than never.\
      Although never is often better than right now.\
      If the implementation is hard to explain, it's a bad idea.\
      If the implementation is easy to explain, it may be a good idea.\
      Namespaces are one honking great idea—let's do more of those!",
    tags: ['events', 'service'],
    timestamp: '2021-09-08T08:02:17',
    author: {
      username: 'defaultUser',
      firstname: 'Tim',
      lastname: 'Peters',
      email: 'tim@idyeahs.com',
      role: 'software developer',
      department: 'python',
      avatar: {
        src: '/images/defaultAvatar.png',
        alt: 'default Avatar',
      },
    },
    stars: [],
    comments: [],
  },
];

export default ideaEntries;
