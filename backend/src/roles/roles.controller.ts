import { Controller, Get, Param } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Get()
  getAllRoles() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  getRoleById(@Param('id') id: string) {
    return this.rolesService.findById(Number(id));
  }
}
