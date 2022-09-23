import Account from "./Account";
import Gravatar from "./Gravatar";

export default interface Avatar {
  gravatar: Gravatar;
  gravatarHash: string;
  account: Account;
}
