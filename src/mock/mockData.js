const users = [{
  id: 1,
  name: 'MS Dhoni',
  email: 'msd@bcci.com',
  password: '!abcd1234',
  avatar: 'http://s.ndtvimg.com/images/entities/120/ms-dhoni-700.png'
}, {
  id: 2,
  name: 'Virat Kohli',
  email: 'vkohli@bcci.com',
  password: '!abcd1234',
  avatar: 'http://s.ndtvimg.com/images/entities/120/virat-kohli-967.png'
}];

localStorage.setItem('users', JSON.stringify(users));