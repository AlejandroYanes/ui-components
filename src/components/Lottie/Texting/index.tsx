import { FunctionComponent } from 'react';
import Lottie from 'lottie-react';
import textingData from './texting-data.json';

const Texting: FunctionComponent = () => {
  return (
    <Lottie animationData={textingData} />
  );
};

export default Texting;
