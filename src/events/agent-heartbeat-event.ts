import EventType from '../enums/event-type';
import IEvent from './event';
import { getHostIdSync } from '../utils/host-utils';
import { hostname } from 'os';
import { PackageManager, Package } from '../package-manager';
import { join } from 'path';

const PACKAGE_FILE_NAME = 'package.json';

export default class AgentHeartBeatEvent implements IEvent {
  public eventType = EventType.HEART_BEAT;
  public timestamp: string;
  private hostId: string;
  private hostname: string;
  private agentVersion: string;
  private runtime: string;
  private static agentPkg: Package = PackageManager.getPackage(join(process.cwd(), '/node_modules/@securenative/agent', PACKAGE_FILE_NAME));

  constructor(private appName: string) {
    this.timestamp = new Date().toISOString();
    this.hostId = getHostIdSync();
    this.hostname = hostname();
    this.agentVersion = AgentHeartBeatEvent.agentPkg?.version;
    this.runtime = 'node.js';
  }
}
