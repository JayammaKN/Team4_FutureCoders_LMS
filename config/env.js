import dotenv from "dotenv";
dotenv.config();

export const ENV = {
  BASE_URL: process.env.LMS_URL,
  INVALID_URL: process.env.LMS_INVALID_URL,  //|| `https://invalid.${new URL(process.env.LMS_URL).hostname}`,
  USERNAME: process.env.LMS_USERNAME,
  PASSWORD: process.env.LMS_PASSWORD,
  ROLE: process.env.LMS_ROLE,
};
