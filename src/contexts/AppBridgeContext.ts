import { ActionCallback, AnyAction, Dispatch, Unsubscribe } from '@/types/Action';
import React, { createContext } from 'react';

interface StaffMemberDetails {
  accountAccess: string;
  locale: string;
}
enum Context {
  Modal = 'Modal',
  Main = 'Main',
}
export interface AppBridgeState {
  staffMember: StaffMemberDetails;
  context: Context;
}

interface ErrorSubscriber {
  (callback: ErrorCallback, id?: string): Unsubscribe;
}
interface DispatchActionHook {
  (next: Function): DispatchActionHandler;
}
interface DispatchActionHandler {
  <A extends MetaAction>(this: ClientApplication, action: A): any;
}
interface ClientInterface {
  name?: string;
  version?: string;
}
interface MetaAction extends AnyAction {
  clientInterface?: ClientInterface;
  readonly version: string;
  readonly group: string;
  readonly type: string;
  payload?: any;
}
interface HooksInterface {
  set(hook: LifecycleHook.DispatchAction, handler: DispatchActionHook): any;
  set(hook: LifecycleHook, handler: LifecycleHandler): any;
  get(hook: LifecycleHook): LifecycleHandler[] | undefined;
  run<C>(hook: LifecycleHook, final: Function, context: C, ...arg: any[]): any;
}

enum LifecycleHook {
  DispatchAction = 'DispatchAction',
}
interface LifecycleHandler {
  (next: Function): (...args: any[]) => any;
}
export interface ClientApplication<S extends AppBridgeState = AppBridgeState> {
  dispatch: Dispatch<AnyAction>;
  localOrigin: string;
  hostOrigin: string;
  error: ErrorSubscriber;
  hooks?: HooksInterface;
  getState(): Promise<S>;
  subscribe(callback: ActionCallback): Unsubscribe;
}
export interface AppConfig {
  apiKey: string;
  host: string;
  forceRedirect?: boolean;
}
export type IAppBridgeContext = ClientApplication | null;

export const AppBridgeContext = createContext<ClientApplication>({
  dispatch: (): any => {},
  localOrigin: '',
  hostOrigin: '',
  error: {} as ErrorSubscriber,
  hooks: {} as HooksInterface,
  async getState(): Promise<AppBridgeState> {
    return {
      staffMember: {
        accountAccess: '',
        locale: '',
      },
      context: Context.Main,
    };
  },
  subscribe: () => () => {},
});

export interface ClientApplicationCreator {
  (config: AppConfig | null): React.Context<ClientApplication>;
}

export const createApp: ClientApplicationCreator = config => {
  if (config?.apiKey !== import.meta.env.VITE_CYBERBIZ_APP_API_KEY) {
    throw new Error('AppBridgeContext: invalid config apiKey');
  }
  return AppBridgeContext;
};
