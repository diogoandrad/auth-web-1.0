import { IBase } from './Base';
import { IProfile } from './Profile';

export interface IUser extends IBase {
  id: string;
  name: string;
  email: string;
  password: string;
  profile: IProfile;
}