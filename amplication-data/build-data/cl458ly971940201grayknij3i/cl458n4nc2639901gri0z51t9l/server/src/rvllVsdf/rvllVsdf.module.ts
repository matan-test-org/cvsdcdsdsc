import { Module } from "@nestjs/common";
import { RvllVsdfModuleBase } from "./base/rvllVsdf.module.base";
import { RvllVsdfService } from "./rvllVsdf.service";
import { RvllVsdfController } from "./rvllVsdf.controller";
import { RvllVsdfResolver } from "./rvllVsdf.resolver";

@Module({
  imports: [RvllVsdfModuleBase],
  controllers: [RvllVsdfController],
  providers: [RvllVsdfService, RvllVsdfResolver],
  exports: [RvllVsdfService],
})
export class RvllVsdfModule {}
