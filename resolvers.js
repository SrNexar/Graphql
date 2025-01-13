// resolvers.js
let users = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  const resolvers = {
    Query: {
      users: () => users,
      user: (parent, args) => users.find(user => user.id === args.id)
    },
    Mutation: {
      createUser: (parent, args) => {
        const newUser = { id: String(users.length + 1), name: args.name, email: args.email };
        users.push(newUser);
        return newUser;
      }
    }
  };
  
  module.exports = resolvers;
  