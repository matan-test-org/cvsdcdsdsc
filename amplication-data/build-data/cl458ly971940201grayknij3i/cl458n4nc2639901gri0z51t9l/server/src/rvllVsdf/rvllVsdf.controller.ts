import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RvllVsdfService } from "./rvllVsdf.service";
import { RvllVsdfControllerBase } from "./base/rvllVsdf.controller.base";

@swagger.ApiTags("rvllVsdfs")
@common.Controller("rvllVsdfs")
export class RvllVsdfController extends RvllVsdfControllerBase {
  constructor(
    protected readonly service: RvllVsdfService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
