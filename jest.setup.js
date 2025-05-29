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
        div: 'div',
        button: 'button',
        span: 'span',
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        p: 'p',
        img: 'img',
        section: 'section',
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
    useSession: jest.fn(() => ({
        data: null,
        status: 'loading',
    })),
    signIn: jest.fn(),
    signOut: jest.fn(),
}));

jest.mock('lodash/debounce', () => (fn) => fn);

// Mock clsx and tailwind-merge first
jest.mock('clsx', () => ({
    clsx: jest.fn((...args) => args.filter(Boolean).join(' ')),
    __esModule: true,
    default: jest.fn((...args) => args.filter(Boolean).join(' ')),
}));

jest.mock('tailwind-merge', () => ({
    twMerge: jest.fn((classNames) => classNames),
    __esModule: true,
    default: jest.fn((classNames) => classNames),
}));

// Mock the cn utility function and other utils - Use both relative and absolute paths
jest.mock('@/lib/utils', () => ({
    cn: jest.fn((...args) => {
        // Simple implementation that just joins all class names
        return args.filter(Boolean).join(' ');
    }),
    formatOdds: jest.fn((odds) => odds.toFixed(2)),
    formatDate: jest.fn(() => '01/01/2024 10:00'),
    formatCurrency: jest.fn((amount) => `R$ ${amount.toFixed(2)}`),
    getUserFirstName: jest.fn((name) => (name ? name.split(' ')[0] : '')),
    debounce: jest.fn((fn) => fn),
    generateSlug: jest.fn((text) => text.toLowerCase().replace(/\s+/g, '-')),
    prefersDarkMode: jest.fn(() => false),
}));

jest.mock('@/lib/utils/index', () => ({
    cn: jest.fn((...args) => {
        // Simple implementation that just joins all class names
        return args.filter(Boolean).join(' ');
    }),
    formatOdds: jest.fn((odds) => odds.toFixed(2)),
    formatDate: jest.fn(() => '01/01/2024 10:00'),
    formatCurrency: jest.fn((amount) => `R$ ${amount.toFixed(2)}`),
    getUserFirstName: jest.fn((name) => (name ? name.split(' ')[0] : '')),
    debounce: jest.fn((fn) => fn),
    generateSlug: jest.fn((text) => text.toLowerCase().replace(/\s+/g, '-')),
    prefersDarkMode: jest.fn(() => false),
}));

// Mock lucide-react icons
jest.mock('lucide-react', () => ({
    Search: () => 'SearchIcon',
    TrendingUp: () => 'TrendingUpIcon',
    HelpCircle: () => 'HelpCircleIcon',
    Clock: () => 'ClockIcon',
    MapPin: () => 'MapPinIcon',
    Star: () => 'StarIcon',
    Heart: () => 'HeartIcon',
}));

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
