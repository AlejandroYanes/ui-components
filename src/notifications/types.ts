import { ReactNode } from 'react';

export enum NotificationType {
  INFO = 'INFO',
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export enum NotificationDuration {
  SHORT = 3000,
  MEDIUM = 5000,
  INDEFINITE = -1,
}

export interface NotificationModel {
  id?: string;
  type?: NotificationType;
  duration?: NotificationDuration;
  title?: string;
  message: string | ReactNode;
}
