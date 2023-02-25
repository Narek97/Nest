import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { JwtAuthGuard } from "../guards/jwt-auth.guard";
import { GetUser } from "../decorators/param.decorator";
import { Roles } from "../decorators/role.decorator";
import { RolesGuard } from "../guards/roles.guard";
import { AddRoleDto } from "./dto/add-role.dto";
import { BanUserDto } from "./dto/ban-user.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @UseGuards(JwtAuthGuard)
  // @Roles("USER")
  // @UseGuards(RolesGuard)
  @Get()
  getAll(@GetUser() user: CreateUserDto) {
    return this.usersService.getAllUsers();
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("/role")
  getUserRole(@Body() dto: AddRoleDto) {
    return this.usersService.addRole(dto);
  }

  @Roles("ADMIN")
  @UseGuards(RolesGuard)
  @Post("/role")
  banUser(@Body() dto: BanUserDto) {
    return this.usersService.banUser(dto);
  }
}
