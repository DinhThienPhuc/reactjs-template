/* ERROR BOUNDARY COMPONENT
   ========================================================================== */

import { Component, ReactNode } from "react";

import Styled from "./error-boundary.style";

interface IErrorBoundaryProps {
  onReset: () => void;
  children: ReactNode | null;
}

interface IErrorBoundaryState {
  error: any;
  errorInfo: any;
}

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <Styled.Container>
          <Styled.Content>
            <Styled.Title>Whoops!</Styled.Title>
            <Styled.Description>
              Stuck in a blind spot. Reload to see the magic!
            </Styled.Description>
            <button onClick={this.props.onReset}>Reload</button>
          </Styled.Content>
        </Styled.Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
