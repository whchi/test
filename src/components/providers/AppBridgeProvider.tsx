// @ts-nocheck
import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FrameProvider } from './FrameProvider';
import { CLIENT_RENEG_WINDOW } from 'tls';

/**
 * A component to configure App Bridge.
 * @desc A thin wrapper around AppBridgeProvider that provides the following capabilities:
 *
 * 1. Ensures that navigating inside the app updates the host URL.
 * 2. Configures the App Bridge Provider, which unlocks functionality provided by the host.
 *
 * See: https://shopify.dev/apps/tools/app-bridge/react-components
 */
export function AppBridgeProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const history = useMemo(
    () => ({
      replace: (path) => {
        navigate(path, { replace: true });
      },
    }),
    [navigate]
  );
  const routerConfig = useMemo(
    () => ({ history, location }),
    [history, location]
  );

  const [appBridgeConfig] = useState(() => {
    const host =
      new URLSearchParams(location.search).get('shop') ||
      'http://localhost:5173';

    return {
      host,
      //   apiKey: new URLSearchParams(location.search).get('code'),
      apiKey: 'random-uuidv4-key',
      forceRedirect: true,
    };
  });
  return (
    <FrameProvider config={appBridgeConfig} router={routerConfig}>
      {children}
    </FrameProvider>
  );
  if (!appBridgeConfig.host) {
    const bannerProps = true
      ? {
          title: 'Missing Shopify API Key',
          children: (
            <>
              Your app is running without the SHOPIFY_API_KEY environment
              variable. Please ensure that it is set when running or building
              your React app.
            </>
          ),
        }
      : {
          title: 'Missing host query argument',
          children: (
            <>
              Your app can only load if the URL has a <b>host</b> argument.
              Please ensure that it is set, or access your app using the
              Partners Dashboard <b>Test your app</b> feature
            </>
          ),
        };

    return <div>not exists</div>;
  }
  return (
    <FrameProvider config={appBridgeConfig} router={routerConfig}>
      {children}
    </FrameProvider>
  );
}
