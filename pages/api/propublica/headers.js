import process from 'process';

export const headers = {
  headers: {
    'X-API-KEY': process.env.PROPUBLICA_API_KEY,
  },
};
