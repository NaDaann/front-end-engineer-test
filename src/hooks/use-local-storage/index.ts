export type {
    LocalStorageValue,
    LocalStorageSetter,
    UseLocalStorageOptions,
    UseLocalStorageReturn,
    LocalStorageError,
} from './types';

export {
    isLocalStorageAvailable,
    defaultSerializer,
    defaultDeserializer,
    getStorageValue,
    setStorageValue,
    removeStorageValue,
    hasStorageValue,
    getRawStorageValue,
    clearAllStorage,
} from './use-local-storage-utils';

export { useLocalStorageData } from './use-local-storage-data';

export { useLocalStorage } from './use-local-storage-main';

export { useLocalStorage as default } from './use-local-storage-main';
