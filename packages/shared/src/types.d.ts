import type { Store } from '@building-blocks/store';

/** Common context interface definition for block models. */
export interface BlockHost {
  store: Store;

  selection: {
    addChangeListener: (
      blockId: string,
      handler: (selected: boolean) => void
    ) => void;
    removeChangeListener: (blockId: string) => void;
  };
}