import { LogggerFactory } from "./util/factories/logger";
import { app } from "./app";

const logger = LogggerFactory();

const HOST = process.env.SERVER_HOST ?? "";
const PORT = process.env.SERVER_PORT ?? 5000;


app.listen(PORT, async () => {
  logger.info(`🔥 Server Started! ${HOST}:${PORT}`);
});
