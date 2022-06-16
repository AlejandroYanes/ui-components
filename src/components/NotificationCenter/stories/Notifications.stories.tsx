import { ComponentStory, Meta } from '@storybook/react';
import { NotificationDuration, NotificationType, showNotification } from 'notifications';
import { Button } from 'components/Button';
import NotificationComp from '../Notification';

const meta = {
  title: 'Example/Notifications',
  component: NotificationComp,
  parameters: {
    controls: { expanded: true },
  },
  argTypes: {
  },
} as Meta;

export const Notifications: ComponentStory<typeof NotificationComp> = (args) => {
  const handleClick = () => {
    showNotification(args);
  };
  return (
    <Button onClick={handleClick} label="Show notification" variant="fill" color="font" />
  );
}

Notifications.args = {
  title: 'Test Notification',
  message: 'test message',
  type: NotificationType.SUCCESS,
  duration: NotificationDuration.SHORT,
};

export default meta;
