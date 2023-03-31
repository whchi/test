import { FrameContext, FrameProps } from '@ctx/FrameContext';

export const FrameProvider = ({ config, children, router }: FrameProps) => {
  return (
    <FrameContext.Provider value={{ config, router }}>
      {children}
    </FrameContext.Provider>
  );
};
