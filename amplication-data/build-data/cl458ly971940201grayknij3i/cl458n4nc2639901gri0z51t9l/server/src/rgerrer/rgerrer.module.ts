import { Module } from "@nestjs/common";
import { RgerrerModuleBase } from "./base/rgerrer.module.base";
import { RgerrerService } from "./rgerrer.service";
import { RgerrerController } from "./rgerrer.controller";
import { RgerrerResolver } from "./rgerrer.resolver";

@Module({
  imports: [RgerrerModuleBase],
  controllers: [RgerrerController],
  providers: [RgerrerService, RgerrerResolver],
  exports: [RgerrerService],
})
export class RgerrerModule {}
