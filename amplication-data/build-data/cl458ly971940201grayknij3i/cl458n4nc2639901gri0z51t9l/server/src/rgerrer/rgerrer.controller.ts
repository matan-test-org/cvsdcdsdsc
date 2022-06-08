import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RgerrerService } from "./rgerrer.service";
import { RgerrerControllerBase } from "./base/rgerrer.controller.base";

@swagger.ApiTags("rgerrers")
@common.Controller("rgerrers")
export class RgerrerController extends RgerrerControllerBase {
  constructor(
    protected readonly service: RgerrerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
