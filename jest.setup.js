import '@testing-library/jest-dom';

global.Request = class Request {
    constructor(url, options = {}) {
        this.url = url;
        this.method = options.method || 'GET';
        this.headers = new Map(Object.entries(options.headers || {}));
        this.body = options.body;
    }

    json() {
        return Promise.resolve(JSON.parse(this.body || '{}'));
    }
};

global.Response = class Response {
    constructor(body, options = {}) {
        this.body = body;
        this.status = options.status || 200;
        this.headers = new Map(Object.entries(options.headers || {}));
    }

    static json(data, options = {}) {
        return new Response(JSON.stringify(data), {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });
    }
};

global.URL = class URL {
    constructor(url) {
        this.href = url;
        this.searchParams = new URLSearchParams(url.split('?')[1] || '');
    }
};

global.URLSearchParams = class URLSearchParams {
    constructor(search = '') {
        this.params = new Map();
        if (search) {
            search.split('&').forEach((param) => {
                const [key, value] = param.split('=');
                if (key) this.params.set(decodeURIComponent(key), decodeURIComponent(value || ''));
            });
        }
    }

    get(key) {
        return this.params.get(key);
    }

    set(key, value) {
        this.params.set(key, value);
    }
};

jest.mock('framer-motion', () => ({
    motion: {
        div: ({ children, ...props }) => <div {...props}>{children}</div>,
        button: ({ children, ...props }) => <button {...props}>{children}</button>,
        span: ({ children, ...props }) => <span {...props}>{children}</span>,
        h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
        h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
        h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
        p: ({ children, ...props }) => <p {...props}>{children}</p>,
        img: ({ children, ...props }) => <img {...props}>{children}</img>,
    },
    AnimatePresence: ({ children }) => children,
    useAnimation: () => ({
        start: jest.fn(),
        stop: jest.fn(),
    }),
}));

jest.mock('@dnd-kit/core', () => ({
    DndContext: ({ children }) => children,
    useDraggable: () => ({
        attributes: {},
        listeners: {},
        setNodeRef: jest.fn(),
        transform: null,
    }),
    useDroppable: () => ({
        setNodeRef: jest.fn(),
        isOver: false,
    }),
    DragOverlay: ({ children }) => children,
    closestCenter: jest.fn(),
    KeyboardSensor: jest.fn(),
    PointerSensor: jest.fn(),
    useSensor: jest.fn(),
    useSensors: jest.fn(() => []),
}));

jest.mock('@dnd-kit/sortable', () => ({
    SortableContext: ({ children }) => children,
    useSortable: () => ({
        attributes: {},
        listeners: {},
        setNodeRef: jest.fn(),
        transform: null,
        transition: null,
    }),
    verticalListSortingStrategy: 'vertical',
    arrayMove: jest.fn((array, oldIndex, newIndex) => {
        const result = Array.from(array);
        const [removed] = result.splice(oldIndex, 1);
        result.splice(newIndex, 0, removed);
        return result;
    }),
    sortableKeyboardCoordinates: jest.fn(),
}));

jest.mock('@dnd-kit/utilities', () => ({
    CSS: {
        Transform: {
            toString: () => '',
        },
    },
}));

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        pathname: '/',
        query: {},
        asPath: '/',
    }),
    useSearchParams: () => ({
        get: jest.fn(),
    }),
    usePathname: () => '/',
}));

jest.mock('next-auth/react', () => ({
    useSession: () => ({
        data: null,
        status: 'loading',
    }),
    signIn: jest.fn(),
    signOut: jest.fn(),
}));

jest.mock('lodash/debounce', () => (fn) => fn);

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() {
        return null;
    }
    disconnect() {
        return null;
    }
    unobserve() {
        return null;
    }
};

global.ResizeObserver = class ResizeObserver {
    constructor(cb) {
        this.cb = cb;
    }
    observe() {
        return null;
    }
    unobserve() {
        return null;
    }
    disconnect() {
        return null;
    }
};
