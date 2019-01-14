const users = [{
  id: 1,
  name: 'MS Dhoni',
  email: 'msd@bcci.com',
  password: '!abcd1234',
  role: 'Wicket Keeper',
  avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
}, {
  id: 2,
  name: 'Virat Kohli',
  email: 'vkohli@bcci.com',
  password: '!abcd1234',
  role: 'Captain',
  avatar: 'http://s.ndtvimg.com/images/entities/120/virat-kohli-967.png'
}, {
  id: 1,
  name: 'MS Dhoni',
  email: 'a@b.c',
  password: 'a',
  role: 'Wicket Keeper',
  avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
}];

localStorage.setItem('users', JSON.stringify(users));