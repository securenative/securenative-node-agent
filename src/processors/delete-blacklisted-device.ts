import ActionsList from '../actions-list';
import Action from '../actions/action';
import SetType from '../enums/set-type';
import { Logger } from '../logger';

export default class DeleteBlacklistedDevice {
  constructor(private action: Action) { }

  apply() {
    if (this.action.values) {
      this.action.values.forEach(value => {
        Logger.debug(`Deleting blacklisted device: ${value}`);
        ActionsList.blackList.delete(SetType.Device, value);
      });
    }
  }
}
