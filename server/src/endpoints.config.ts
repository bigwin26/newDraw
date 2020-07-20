import { defaults } from "request";

export default {
  MONGO_URL:
    process.env.MONGO_URL ?? `mongodb://yourdraw:yourkim@15.165.109.82:27017`,
};
