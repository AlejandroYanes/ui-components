import AppProviders from 'components/providers';

export default function TestWrapper({ component: Component, ...rest }) {

  return (
    <AppProviders>
      <Component {...rest} />
    </AppProviders>
  );
}
