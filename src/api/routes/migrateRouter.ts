import express from 'express';

import { migrationManager } from '../../managers';

const router = express.Router();

/**
 * POST /api/user/login
 * Public
 * Login with username and password
 */
router.post('', async function (req, res) {
  migrationManager.migrateDb();

  res.status(204).end();
});

export default router;
