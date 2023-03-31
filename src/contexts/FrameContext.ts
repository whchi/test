import React, { PropsWithChildren, createContext } from 'react';
import { AppConfig } from './AppBridgeContext';

type LocationOrHref =
  | string
  | {
      search: string;
      hash: string;
      pathname: string;
    };

export interface Router {
  location: LocationOrHref;
  history: History;
}

interface Props {
  config: AppConfig | null;
  children?: React.ReactNode;
  router: Router | null;
}

export type FrameProps = PropsWithChildren<Props>;

export const FrameContext = createContext<Props>({
  config: null,
  children: null,
  router: null,
});
