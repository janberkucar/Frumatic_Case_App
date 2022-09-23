import Avatar from "./Avatar";
import Name from "./Name";

export default interface Account {
  id: string;
  ownerToken?: string;
  avatar?: Avatar;
  avatarHash?: string;
  name?: Name;
  nameFull_name?: string;
  adult?: boolean;
  username?: string;
}
