import React, { FunctionComponent } from 'react';

export interface CaseProps {
  value: any;
  component: FunctionComponent<any>;
  [x: string]: any;
}

const Case: FunctionComponent<CaseProps> = () => <></>;

export default Case;
