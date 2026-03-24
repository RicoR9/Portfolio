import bcrypt from 'bcryptjs';

const saltRounds = 10;

const hash = (password: string): string => {
  const hashed = bcrypt.hashSync(password, saltRounds);
  return hashed;
};

const compare = (password: string, hashed: string): boolean => {
  const match = bcrypt.compareSync(password, hashed);
  return match;
};

export default { hash, compare };