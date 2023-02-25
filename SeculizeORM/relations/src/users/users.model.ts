import {
  BelongsToMany,
  Column,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { Role } from "../roles/roles.model";
import { UserRoles } from "../user-role/user-role.model";
import { Post } from "../posts/posts.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttrs> {
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
    allowNull: true,
  })
  email: string;

  @Column({
    type: DataTypes.STRING,
  })
  password: string;

  @Column({
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  })
  banned: boolean;

  @Column({
    type: DataTypes.STRING,
    allowNull: true,
  })
  bannedReason: string;

  //relations
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @HasMany(() => Post)
  posts: Post[];
}
