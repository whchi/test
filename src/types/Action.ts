export interface Dispatch<_> {
  <A extends AnyAction>(action: A): A;
}
export interface AnyAction {
  type: any;
  [extraProps: string]: any;
}

export interface ActionCallback {
  (data: any): void;
}

export interface Unsubscribe {
  (): void;
}
