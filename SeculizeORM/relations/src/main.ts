import * as process from "process";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { JwtAuthGuard } from "./guards/jwt-auth.guard";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  // app.useGlobalGuards(JwtAuthGuard);

  await app.listen(PORT, () => console.log(`Server started on port = ${PORT}`));
}

start();
