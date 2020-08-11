import { processors } from './../processors';
import Action from './action';

const ActionProcessors = {
  'block_ip': [processors.BlacklistIp],
  'unblock_ip': [processors.DeleteBlacklistedIp],
  'block_fp': [processors.BlacklistDevice],
  'unblock_fp': [processors.DeleteBlacklistedDevice],
  'allow_ip': [processors.WhitelistIp],
  'allow_fp': [processors.WhitelistDevice],
};

export default class ActionManager {
  static enforceActions = (actions: Array<Action>) => {
    actions.forEach((action: Action) => {
      const processors = ActionProcessors[action.name] || [];
      processors.forEach(processor => {
        new processor(action).apply();
      });
    });
  }
}
