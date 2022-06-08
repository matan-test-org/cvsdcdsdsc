import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RgerrerServiceBase } from "./base/rgerrer.service.base";

@Injectable()
export class RgerrerService extends RgerrerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
