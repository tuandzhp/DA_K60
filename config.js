let { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_CALLBACK_URL, SERVER_SESSION_SECRET, PORT } = process.env;
if (!APS_CLIENT_ID || !APS_CLIENT_SECRET || !APS_CALLBACK_URL || !SERVER_SESSION_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
const INTERNAL_TOKEN_SCOPES = ['data:read'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];
PORT = PORT || 8000;

module.exports = {
    APS_CLIENT_ID:'Ab2HsnptzXAbqpU8xNMG6nLpZGtnRyfS',
    APS_CLIENT_SECRET:'Kc8535009044f46f',
    APS_CALLBACK_URL:'http://localhost:8000/api/auth/callback',
    SERVER_SESSION_SECRET:'0000000000000000',
    INTERNAL_TOKEN_SCOPES,
    PUBLIC_TOKEN_SCOPES,
    PORT: PORT
};
