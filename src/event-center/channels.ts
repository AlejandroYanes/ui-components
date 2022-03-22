export enum EventChannelList {
  PUSHED_NOTIFICATION = 'PUSHED_NOTIFICATION',
}

export type EventChannel = keyof (typeof EventChannelList);
