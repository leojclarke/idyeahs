function handleIdeaSubmit(event, date, username, history) {
  event.preventDefault();
  console.log('activeUser:', username);
  const form = event.target;
  const newIdea = {
    id: uid(),
    title: form.title.value,
    text: form.text.value,
    tags: splitToArray(form.tags.value),
    timestamp: date,
    username: username,
  };
  setIdeas([newIdea, ...ideas]);
  history.push('/ideas');
}

function handleFeedbackSubmit(answers, history) {
  const newCounter = counter + 1;
  setCounter(newCounter);
  const responsesSum = responses.map(
    (number, index) => Number(number) + Number(answers[index])
  );
  setResponses(responsesSum);
  history.push('/feedback');
}

function handleTagClick(tag) {
  setFilteredTags([...filteredTags, tag]);
}

function handleLogin(event, history) {
  event.preventDefault();
  console.log('Users: ', users);
  const { username } = event.target;
  setActiveUser(username.value);
  history.push('/ideas');
}

function handleSignUp(event, history) {
  event.preventDefault();
  setUsers();
  setActiveUser(event.target.username.value);
  history.push('/');
}

function resetFilter() {
  setFilteredTags('');
}
