import uid from 'uid';

const usersList = [
  {
    id: uid(),
    avatar: '../img/leo.jpg',
    username: 'leojclarke',
    firstname: 'Leo',
    lastname: 'Clarke',
    role: 'technician',
    department: 'service helpdesk',
    email: 'leo@idyeahs.com',
    password: '123',
    comments: 0,
    stars: 0,
  },
  {
    id: uid(),
    avatar: '../img/macready.jpg',
    username: 'macready',
    role: 'pilot',
    department: 'aviation services',
    firstname: 'R.J.',
    lastname: 'MacReady',
    email: 'macready@idyeahs.com',
    password: '123',
    comments: 0,
    stars: 0,
  },
  {
    id: uid(),
    avatar: '../img/default.jpg',
    username: '',
    role: '',
    department: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '123',
    comments: 0,
    stars: 0,
  },
];

export default usersList;
