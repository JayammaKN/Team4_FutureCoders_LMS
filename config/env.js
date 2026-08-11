import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  BASE_URL: process.env.LMS_URL,
  USERNAME: process.env.LMS_USERNAME,
  PASSWORD: process.env.LMS_PASSWORD,
  ROLE: process.env.LMS_ROLE,
};