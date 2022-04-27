import { EnumPermissions } from "../config/constants/General";
import { BaseModel } from "./BaseModel";

export class User extends BaseModel {
  name: string;
  email: string;
  permission: EnumPermissions;
}
