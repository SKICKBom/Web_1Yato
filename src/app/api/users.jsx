import client from '../../edgedb';
import e from '../../dbschema/edgeql-js';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      // Fetch users from the database
      const users = await e.select(e.User).run(client);
      res.status(200).json(users);
      break;
    case 'POST':
      // Insert a new user into the database
      const { name, email } = req.body;
      await e.insert(e.User, {
        name,
        email,
      }).run(client);
      res.status(201).json({ message: 'User created' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}