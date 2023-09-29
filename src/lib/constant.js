export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL
    : "https://green-messengers.vercel.app";