import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RgerrerResolverBase } from "./base/rgerrer.resolver.base";
import { Rgerrer } from "./base/Rgerrer";
import { RgerrerService } from "./rgerrer.service";

@graphql.Resolver(() => Rgerrer)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RgerrerResolver extends RgerrerResolverBase {
  constructor(
    protected readonly service: RgerrerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
