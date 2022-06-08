import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RvllVsdfResolverBase } from "./base/rvllVsdf.resolver.base";
import { RvllVsdf } from "./base/RvllVsdf";
import { RvllVsdfService } from "./rvllVsdf.service";

@graphql.Resolver(() => RvllVsdf)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RvllVsdfResolver extends RvllVsdfResolverBase {
  constructor(
    protected readonly service: RvllVsdfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
