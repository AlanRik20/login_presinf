import { applyDecorators, UseGuards } from "@nestjs/common";
import { Role } from "../enum/role.enum";
import { JwtAuthGuard } from "../guard/jwt-auth.guard";
import { RolesGuard } from "../guard/roles.guard";
import { Roles } from "./roles.decorator";

export function Auth(role: Role) {
  return applyDecorators(Roles(role), UseGuards(JwtAuthGuard, RolesGuard));
}