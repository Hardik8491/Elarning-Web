
import * as crypto from "crypto";
import { DateTime } from "luxon"; // Install Luxon for date/time manipulation

// Interface for JWT Secret with expiry
interface JWTSecret {
  secret: string;
  expiry: string; // ISO 8601 formatted expiry time
}

// Generate a secure random string for JWT secret with 15 minutes expiry
const generateJWTSecret: () => JWTSecret = () => {
  const secret = crypto.randomBytes(10).toString("hex");
  const expiry = DateTime.utc().plus({ minutes: 15 }).toISO(); // Generate expiry 15 minutes from now
  return { secret, expiry };
};

export { generateJWTSecret };
