import { FunctionComponent, useState, memo } from 'react';
import User1 from './users/User1';
import User2 from './users/User2';
import User3 from './users/User3';
import User4 from './users/User4';

interface Props {
  src: string;
  alt?: string;
}

const users = {
  user1: User1,
  user2: User2,
  user3: User3,
  user4: User4,
};

const { REACT_APP_API_URL } = process.env

const Content: FunctionComponent<Props> = (props) => {
  const { src, alt } = props;
  const [imageFailed, setImageFailed] = useState(false);

  const handleOnError = () => {
    setImageFailed(true);
  };

  const isImage = src.startsWith(REACT_APP_API_URL);

  if (isImage && !imageFailed) {
    return (
      <img src={src} alt={alt} onError={handleOnError} />
    );
  }

  const showDrawnAvatar = (
    src === 'user1' ||
    src === 'user2' ||
    src === 'user3' ||
    src === 'user4'
  );

  if (showDrawnAvatar) {
    const SelectedUser = users[src];
    return <SelectedUser />;
  }

  return null;
};

export default memo(Content);
