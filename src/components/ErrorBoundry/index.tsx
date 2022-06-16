import React, { Component, ReactNode } from 'react';
import { withRouter } from 'react-router-dom';
import { Title } from 'components/Typography';
import { ErrorBoundary as StyledErrorBoundary } from './styled';

interface Props {
  errorMessage?: string | ReactNode;
  hideAction?: boolean;
  history: any;
  location: any;
  match: any;
}

interface State {
  error: Error;
}

const defaultMessage = 'Oops, something went wrong. Someone is working to fix this.';

class ErrorBoundary extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { error: undefined };
  }
  componentDidUpdate(prevProps) {
    const { location } = this.props;
    if (location !== prevProps.location) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ error: undefined });
    }
  }
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    const { children, errorMessage } = this.props;
    const { error } = this.state;

    if (error) {
      if (typeof errorMessage === 'string') {
        return (
          <StyledErrorBoundary>
            <Title level={3}>{errorMessage || defaultMessage}</Title>
          </StyledErrorBoundary>
        );
      }

      return errorMessage;
    }

    return children;
  }
}

export default withRouter(ErrorBoundary);
