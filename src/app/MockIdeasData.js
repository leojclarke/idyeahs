import uid from 'uid';

const ideaEntries = [
  {
    id: uid(),
    title: 'My Great Idea',
    text: 'Everything Begins With An Idea.',
    tags: ['sales', 'logistics'],
    timestamp: '1st Jun 2019, 12:00 pm',
    username: 'Jan Delay',
  },

  {
    id: uid(),
    title: 'My Other Great Idea',
    text:
      'No Matter What People Tell You, Words And Ideas Can Change The World.',
    tags: ['events', 'service'],
    timestamp: '1st Jun 2019, 12:00 pm',
    username: 'Jerry Bruckheimer',
  },
  {
    id: uid(),
    title: 'More Great Ideas',
    text:
      'There Is One Thing Stronger Than All The Armies In The World, And That Is An Idea Whose Time Has Come.',
    tags: ['sales', 'projects', 'development'],
    timestamp: '1st Jun 2019, 12:00 pm',
    username: 'Melli Mel',
  },
];

export default ideaEntries;
