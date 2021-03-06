import ActionsList from './../actions-list';
import Action from '../actions/action';
import SetType from '../enums/set-type';
import { Logger } from '../logger';

export default class WhitelistDevice {
  constructor(private action: Action) { }

  apply() {
    if (this.action.values) {
      this.action.values.forEach(value => {
        Logger.debug(`Whitelisting device: ${value}`);
        ActionsList.whitelist.add(SetType.Device, value, this.action.ttl);
      });
    }
  }
}
