import {
  AppBridgeState,
  ClientApplication,
  createApp,
} from '@ctx/AppBridgeContext';
import { FrameContext } from '@ctx/FrameContext';
import { useContext } from 'react';

export const useAppBridge = (): ClientApplication<AppBridgeState> => {
  const { config } = useContext(FrameContext);
  const app = useContext(createApp(config));
  // @todo - check session token
  return app;
};
