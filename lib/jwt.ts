import jwt, { JwtPayload } from "jsonwebtoken";

interface SignOption {
  expiresIn?: string | number;
}

const DEFAULT_SIGN_OPTIONS: SignOption = {
  expiresIn: "1h",
};
export function signJwtAccessToken(
  payload: JwtPayload,
  options: SignOption = DEFAULT_SIGN_OPTIONS
) {
  const secretKey = process.env.JSON_WEB_TOKEN_SECRET!;
  return jwt.sign(payload, secretKey, options);
}

export function verifyJwt(token: string) {
  try {
    const secretKey = process.env.JSON_WEB_TOKEN_SECRET!;
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null; // invalid token
  }
}
