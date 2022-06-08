import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RvllVsdfServiceBase } from "./base/rvllVsdf.service.base";

@Injectable()
export class RvllVsdfService extends RvllVsdfServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
