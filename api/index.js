import app from '../server/index.js';

import connectDb from '../server/config/db.js';

export default async function handler(req, res) {
  await connectDb();
  return app(req, res);
}
