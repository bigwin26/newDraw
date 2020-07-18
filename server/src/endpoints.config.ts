import { defaults } from "request";

export default {
  MONGO_URL:
    process.env.MONGO_URL ?? `mongodb://yourdraw:yourkim@13.125.216.20:27017`,
};
