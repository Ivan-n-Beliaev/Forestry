import React from 'react';
import { Card, CardBody, Button } from '@nextui-org/react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background p-4">
          <Card className="max-w-md w-full">
            <CardBody className="text-center p-8">
              <AlertTriangle className="w-16 h-16 text-danger mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-danger mb-4">
                Something went wrong
              </h2>
              <p className="text-default-600 mb-6">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
              <Button
                color="primary"
                startContent={<RefreshCw size={20} />}
                onPress={this.handleReload}
              >
                Refresh Page
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
