import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'owusu',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },

    {
      name: 'vitech',
      email: 'vitech@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
}
