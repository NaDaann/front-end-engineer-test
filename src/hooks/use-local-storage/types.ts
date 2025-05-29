export type LocalStorageValue<T> = T;

export type LocalStorageSetter<T> = (value: T | ((val: T) => T)) => void;

export interface UseLocalStorageOptions {
    serializer?: (value: unknown) => string;

    deserializer?: (value: string) => unknown;

    syncAcrossTabs?: boolean;

    errorHandling?: 'fallback-to-initial' | 'throw' | 'return-null';
}

export interface UseLocalStorageReturn<T> {
    value: T;

    setValue: LocalStorageSetter<T>;

    removeValue: () => void;

    hasValue: boolean;

    rawValue: string | null;

    clearAll: () => void;
}

export interface LocalStorageError {
    type:
        | 'storage-not-available'
        | 'serialization-error'
        | 'deserialization-error'
        | 'quota-exceeded';
    message: string;
    originalError?: Error;
}
