const jwt = require("jsonwebtoken");

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secret) {
  const token = jwt.sign(payload, secret);
  return token;
}

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secret, expiryTime) {
  const token = jwt.sign(payload, secret, { expiresIn: expiryTime });
  return token;
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return false;
  }
}

// const result = createToken(
//   {
//     id: 153,
//     username: "sanchez",
//     email: "rick@sanchez.com",
//     role: "ADMIN",
//   },
//   "87764d1a-92dc-4ced-a758-9c898c31d525"
// );

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};
