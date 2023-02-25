import { BelongsToMany, Column, Model, Table } from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { User } from "../users/users.model";
import { UserRoles } from "../user-role/user-role.model";

interface RolesCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: "roles" })
export class Role extends Model<Role, RolesCreationAttrs> {
  @Column({
    type: DataTypes.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
  })
  description: string;

  //relations
  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}
