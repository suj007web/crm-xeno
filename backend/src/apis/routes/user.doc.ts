
/**
 * @openapi
 * /api/users/create:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *                 description: The OAuth token received from the client
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *        description: Bad request, token is required
 *       401:
 *        description: Unauthorized, invalid token
 *       422:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */