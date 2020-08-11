import ModifyHeaders from './modify-headers';
import DeleteHeaders from './delete-headers';
import BlacklistIp from './blacklist-ip';
import BlacklistDevice from './blacklist-device';
import WhitelistIp from './whitelist-ip';
import BlockRequest from './block-request';
import ChallengeRequest from './challenge-request';
import DeleteBlacklistedIp from './delete-blacklisted-ip';
import DeleteBlacklistedDevice from './delete-blacklisted-device';

export const processors = {
  ModifyHeaders,
  DeleteHeaders,
  BlacklistIp,
  DeleteBlacklistedIp,
  BlacklistDevice,
  DeleteBlacklistedDevice,
  WhitelistIp,
  BlockRequest,
  ChallengeRequest,
};
