import ActionsList from './../actions-list';
import Action from '../actions/action';
import SetType from '../enums/set-type';
import { Logger } from '../logger';

export default class BlacklistDevice {
  constructor(private action: Action) { }

  apply() {
    if (this.action.values) {
      this.action.values.forEach(value => {
        Logger.debug(`Blacklisting device: ${value}`);
        ActionsList.blackList.add(SetType.Device, value, this.action.ts, this.action.ttl);
      });
    }
  }
}
