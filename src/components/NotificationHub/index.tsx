import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion';
import { EventChannelList, useEventCenterUpdate } from 'event-center';
import { NotificationModel } from 'notifications';
import { Layout, useAppLayout } from 'components/base-components/Configuration';
import Notification from './Notification';
import { Notifications } from './styled/list';

const wrapperMap = {
  [Layout.DESKTOP]: ({ children }) => children,
  [Layout.TABLET]: ({ children }) => children,
  [Layout.MOBILE]: ({ children }) => (
    ReactDOM.createPortal(children, document.body)
  ),
};

const NotificationCenter: FunctionComponent = () => {
  const layout = useAppLayout();
  const [notifications, setNotifications] = useState<NotificationModel[]>([]);

  const handlePushedNotification = useCallback((notification) => {
    setNotifications((old) => old.concat(notification))
  }, []);

  const handleRemoveNotification = useCallback((notificationId: string) => {
    setNotifications((old) => old.filter((n) => n.id !== notificationId));
  }, []);

  useEventCenterUpdate(EventChannelList.PUSHED_NOTIFICATION, handlePushedNotification);

  const notificationCards = useMemo(() => (
    notifications.map((notification) => (
      <Notification
        key={notification.id}
        onClose={handleRemoveNotification}
        {...notification}
      />
    ))
  ), [notifications, handleRemoveNotification]);

  const Wrapper = wrapperMap[layout];

  return (
    <Wrapper>
      <Notifications>
        <AnimateSharedLayout>
          <AnimatePresence>
            {notificationCards}
          </AnimatePresence>
        </AnimateSharedLayout>
      </Notifications>
    </Wrapper>
  );
};

export default NotificationCenter;
