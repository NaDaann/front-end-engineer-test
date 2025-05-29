export const WELCOME_SECTION_DEFAULTS = {
    title: 'Bem-vindo',
    subtitle: 'Explore as melhores odds e organize suas categorias favoritas',
    buttonText: 'Ver Tutorial',
    showTutorialButton: true,
} as const;

export const WELCOME_SECTION_STYLES = {
    container: 'bg-gradient-to-r from-green-800 to-green-1000 text-white',
    header: {
        title: 'text-2xl',
        subtitle: 'text-blue-100',
    },
    content: {
        wrapper: 'pb-6',
        button: 'flex items-center space-x-2 bg-black/50 hover:bg-black/100 text-white',
        icon: 'w-4 h-4',
    },
} as const;
