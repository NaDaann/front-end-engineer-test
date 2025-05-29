import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Star,
    MousePointer2,
    Eye,
    Home,
    TrendingUp,
    Search,
    Gamepad2,
    Trophy,
    Zap,
    Target,
    Filter,
    ArrowUpDown,
    Sparkles,
    Flame,
    ShieldCheck,
    Award,
    Settings,
    BookOpen,
    Users,
    BarChart3,
    CirclePlay,
    Move,
} from 'lucide-react';
import { OnboardingStep } from './types';

export const createOnboardingSteps = (getProgressPercentage: () => number): OnboardingStep[] => [
    {
        id: 1,
        title: 'Bem-vindo à plataforma Daniel Gaming!',
        description: 'Sua plataforma completa para visualização de apostas esportivas',
        content: (
            <div className="text-center space-y-6">
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="relative mx-auto w-20 h-20"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-green-1000 rounded-full animate-pulse" />
                    <div className="absolute inset-1 bg-gradient-to-tr from-green-400 to-green-1000 rounded-full flex items-center justify-center">
                        <Gamepad2 className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -inset-2 border-2 border-dashed border-emerald-400/30 rounded-full"
                    />
                </motion.div>
                
                <div className="space-y-3">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-muted-foreground text-lg"
                    >
                        Descubra as <span className="text-emerald-400 font-semibold">melhores odds</span>, organize suas 
                        <span className="text-green-400 font-semibold"> categorias favoritas</span> e explore o
                        mundo das apostas esportivas de forma intuitiva.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg p-3"
                    >
                        <Sparkles className="w-5 h-5 text-emerald-400" />
                        <span className="text-sm font-medium">Experiência profissional em apostas</span>
                        <Sparkles className="w-5 h-5 text-green-400" />
                    </motion.div>
                </div>
            </div>
        ),
        action: { label: 'Iniciar Tour', highlight: true },
    },
    {
        id: 2,
        title: 'Navegação Principal',
        description: 'Conheça as principais seções da plataforma',
        content: (
            <div className="space-y-4">
                <div className="grid gap-3">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-500/10 to-green-600/5 border border-green-500/20 rounded-lg hover:border-green-500/40 transition-colors"
                    >
                        <div className="p-2 bg-green-500 rounded-lg">
                            <Home className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-green-400">Home Dashboard</p>
                            <p className="text-sm text-muted-foreground">
                                Categorias, jogos e suas odds favoritas
                            </p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Principal</Badge>
                    </motion.div>
                    
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-lg hover:border-emerald-500/40 transition-colors"
                    >
                        <div className="p-2 bg-emerald-500 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                            <p className="font-semibold text-emerald-400">Odds Explorer</p>
                            <p className="text-sm text-muted-foreground">
                                Análise detalhada de todas as apostas
                            </p>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">Principal</Badge>
                    </motion.div>
                </div>
                
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center p-3 bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-500/10 rounded-lg"
                >
                    <Award className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                        Use o menu superior para navegar entre as seções
                    </p>
                </motion.div>
            </div>
        ),
        action: { label: 'Explorar Seções' },
    },
    {
        id: 3,
        title: 'Categorias Favoritas',
        description: 'Organize seus esportes preferidos para acesso rápido',
        content: (
            <div className="space-y-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="relative p-4 bg-gradient-to-br from-yellow-500/10 via-amber-500/5 to-orange-500/10 border-2 border-dashed border-yellow-400/30 rounded-lg overflow-hidden"
                >
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute top-2 right-2"
                    >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                    
                    <div className="flex items-start space-x-3">
                        <div className="p-2 bg-yellow-500/20 rounded-lg">
                            <Target className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-yellow-400 mb-1">Marcar como Favorito</p>
                            <p className="text-sm text-muted-foreground">
                                Clique na <Star className="w-4 h-4 inline mx-1 text-yellow-400" /> dos cards de esportes para 
                                adicioná-los aos seus favoritos e ter acesso rápido.
                            </p>
                        </div>
                    </div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-3 flex flex-wrap gap-2"
                    >
                        <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                            <CirclePlay className="w-3 h-3 mr-1" />
                            Futebol
                        </Badge>
                        <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                            <CirclePlay className="w-3 h-3 mr-1" />
                            Basquete
                        </Badge>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            <CirclePlay className="w-3 h-3 mr-1" />
                            Tênis
                        </Badge>
                    </motion.div>
                </motion.div>
                
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg"
                >
                    <div className="flex items-center space-x-2">
                        <Filter className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-medium text-green-400">Filtragem Inteligente</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                        Use o filtro &quot;Favoritos&quot; para ver apenas suas categorias marcadas
                    </p>
                </motion.div>
            </div>
        ),
        action: { label: 'Entendi!' },
    },
    {
        id: 4,
        title: 'Drag & Drop',
        description: 'Reorganize categorias com funcionalidade avançada',
        content: (
            <div className="space-y-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 bg-gradient-to-br from-green-500/10 via-indigo-500/5 to-purple-500/10 border-2 border-dashed border-green-400/30 rounded-lg"
                >
                    <div className="flex items-start space-x-3">
                        <div className="p-2 bg-green-500 rounded-lg">
                            <ArrowUpDown className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-green-400 mb-1">Reorganização Dinâmica</p>
                            <p className="text-sm text-muted-foreground">
                                Clique e arraste os cards de categorias para reorganizá-los conforme sua 
                                preferência. A ordem é salva automaticamente.
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                <div className="space-y-3">
                    <motion.div
                        animate={{ x: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex items-center space-x-2"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2 p-3 bg-gray-800 border border-gray-700 rounded-lg cursor-grab active:cursor-grabbing shadow-lg"
                        >
                            <MousePointer2 className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-medium flex items-center">
                                <CirclePlay className="w-4 h-4 mr-2 text-green-400" />
                                Futebol
                            </span>
                        </motion.div>
                        <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="flex items-center justify-center"
                        >
                            <Move className="w-6 h-6 text-green-400" />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-lg"
                    >
                        <div className="flex items-center space-x-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span className="text-sm font-medium text-emerald-400">Auto-Save</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Suas preferências são salvas automaticamente
                        </p>
                    </motion.div>
                </div>
            </div>
        ),
        action: { label: 'Incrível!' },
    },
    {
        id: 5,
        title: 'Explorar Odds',
        description: 'Sistema avançado de visualização de apostas',
        content: (
            <div className="space-y-4">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="p-4 bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10 border-2 border-dashed border-emerald-400/30 rounded-lg"
                >
                    <div className="flex items-start space-x-3">
                        <div className="p-2 bg-emerald-500 rounded-lg">
                            <Eye className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-emerald-400 mb-1">Análise Profunda</p>
                            <p className="text-sm text-muted-foreground">
                                Clique em qualquer odd para ver análise completa, histórico de variação,
                                odds relacionadas e indicadores de &quot;Hot Odds&quot;.
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                <div className="space-y-3">
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="grid grid-cols-3 gap-2"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-3 bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 rounded-lg text-center cursor-pointer"
                        >
                            <div className="text-xs text-muted-foreground">Casa</div>
                            <div className="font-bold text-green-400">2.50</div>
                            <Flame className="w-3 h-3 text-orange-400 mx-auto mt-1" />
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-3 bg-gradient-to-br from-gray-500/20 to-gray-600/10 border border-gray-500/30 rounded-lg text-center cursor-pointer"
                        >
                            <div className="text-xs text-muted-foreground">Empate</div>
                            <div className="font-bold text-gray-400">3.20</div>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="p-3 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-lg text-center cursor-pointer"
                        >
                            <div className="text-xs text-muted-foreground">Visitante</div>
                            <div className="font-bold text-emerald-400">2.80</div>
                            <Zap className="w-3 h-3 text-yellow-400 mx-auto mt-1" />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center space-x-2 p-2 bg-purple-500/5 border border-purple-500/20 rounded-lg"
                    >
                        <BarChart3 className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-purple-400 font-medium">Hot Odds detectadas automaticamente</span>
                    </motion.div>
                </div>
            </div>
        ),
        action: { label: 'Entendido!' },
    },
    {
        id: 6,
        title: 'Filtros e Busca',
        description: 'Sistema inteligente de descoberta',
        content: (
            <div className="space-y-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="p-4 bg-gradient-to-br from-purple-500/10 via-violet-500/5 to-indigo-500/10 border-2 border-dashed border-purple-400/30 rounded-lg"
                >
                    <div className="flex items-start space-x-3">
                        <div className="p-2 bg-purple-500 rounded-lg">
                            <Search className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <p className="font-semibold text-purple-400 mb-1">Busca Inteligente</p>
                            <p className="text-sm text-muted-foreground">
                                Use a barra de busca para encontrar times específicos e os filtros
                                avançados para visualizar apenas suas categorias favoritas.
                            </p>
                        </div>
                    </div>
                </motion.div>
                
                <div className="space-y-3">
                    <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-2 flex-wrap"
                    >
                        <Button size="sm" variant="outline" className="border-gray-600 hover:border-purple-500">
                            Todos
                        </Button>
                        <Button size="sm" className="border-yellow-500 bg-yellow-500/60  hover:bg-black/70">
                            <Star className="w-3 h-3 mr-1" />
                            Favoritos
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600 hover:border-emerald-500">
                            <CirclePlay className="w-3 h-3 mr-1" />
                            Futebol
                        </Button>
                        <Button size="sm" variant="outline" className="border-gray-600 hover:border-green-500">
                            <CirclePlay className="w-3 h-3 mr-1" />
                            Basquete
                        </Button>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="grid grid-cols-2 gap-2"
                    >
                        <div className="p-2 bg-green-500/5 border border-green-500/20 rounded text-center">
                            <BookOpen className="w-4 h-4 text-green-400 mx-auto mb-1" />
                            <span className="text-xs text-green-400">Filtros</span>
                        </div>
                        <div className="p-2 bg-emerald-500/5 border border-emerald-500/20 rounded text-center">
                            <Users className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                            <span className="text-xs text-emerald-400">Times</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        ),
        action: { label: 'Perfeito!' },
    },
    {
        id: 7,
        title: 'Funcionalidades',
        description: 'Recursos avançados para apostadores experientes',
        content: (
            <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                    <motion.div
                        initial={{ scale: 0, rotateY: -90 }}
                        animate={{ scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.1, type: 'spring' }}
                        className="p-3 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg text-center"
                    >
                        <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-orange-400">Hot Odds</p>
                        <p className="text-xs text-muted-foreground">Detecção automática</p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ scale: 0, rotateY: 90 }}
                        animate={{ scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="p-3 bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg text-center"
                    >
                        <BarChart3 className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-emerald-400">Analytics</p>
                        <p className="text-xs text-muted-foreground">Histórico detalhado</p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ scale: 0, rotateY: -90 }}
                        animate={{ scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.3, type: 'spring' }}
                        className="p-3 bg-gradient-to-br from-green-500/10 to-indigo-500/10 border border-green-500/20 rounded-lg text-center"
                    >
                        <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-green-400">Precisão</p>
                        <p className="text-xs text-muted-foreground">Odds em tempo real</p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ scale: 0, rotateY: 90 }}
                        animate={{ scale: 1, rotateY: 0 }}
                        transition={{ delay: 0.4, type: 'spring' }}
                        className="p-3 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg text-center"
                    >
                        <Settings className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-purple-400">Customização</p>
                        <p className="text-xs text-muted-foreground">Interface adaptável</p>
                    </motion.div>
                </div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-4 bg-gradient-to-r from-indigo-500/10 via-purple-500/5 to-pink-500/10 border border-indigo-500/20 rounded-lg"
                >
                    <div className="flex items-center space-x-2 mb-2">
                        <Trophy className="w-5 h-5 text-indigo-400" />
                        <span className="font-semibold text-indigo-400">Experiência Premium</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Todos os recursos foram desenvolvidos pensando na experiência profissional 
                        de apostadores experientes.
                    </p>
                </motion.div>
            </div>
        ),
        action: { label: 'Impressionante!' },
    },
    {
        id: 8,
        title: 'Pronto para Apostar!',
        description: 'Sua jornada no Daniel Gaming começa agora',
        content: (
            <div className="text-center space-y-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className="relative mx-auto w-24 h-24"
                >
                    <div
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/60 to-orange-500/60 animate-pulse"
                    />
                    <div className="absolute inset-2 bg-gray-900 rounded-full flex items-center justify-center">
                        <Trophy className="w-8 h-8 text-yellow-400" />
                    </div>
                </motion.div>
                
                <div className="space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent flex items-center gap-2">
                            Tudo Pronto! <Target className="w-5 h-5 text-green-400" />
                        </h3>
                        <p className="text-muted-foreground mt-2">
                            Você conheceu todas as funcionalidades principais do Daniel Gaming!
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="space-y-3"
                    >
                        <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 rounded">
                                <Star className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                                <span className="text-xs text-emerald-400">Favoritos</span>
                            </div>
                            <div className="p-2 bg-green-500/10 border border-green-500/20 rounded">
                                <ArrowUpDown className="w-4 h-4 text-green-400 mx-auto mb-1" />
                                <span className="text-xs text-green-400">Drag & Drop</span>
                            </div>
                            <div className="p-2 bg-purple-500/10 border border-purple-500/20 rounded">
                                <Eye className="w-4 h-4 text-purple-400 mx-auto mb-1" />
                                <span className="text-xs text-purple-400">Análises</span>
                            </div>
                        </div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="p-3 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 border border-indigo-500/20 rounded-lg"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-medium text-indigo-400">
                                    Progresso do Tutorial
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    {Math.round(getProgressPercentage())}% completo
                                </span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-1.5">
                                <motion.div
                                    className="bg-gradient-to-r from-green-500 to-purple-600 h-1.5 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${getProgressPercentage()}%` }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                />
                            </div>
                        </motion.div>
                        
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="text-sm text-muted-foreground"
                        >
                            Comece organizando suas categorias favoritas e explorando as melhores
                            odds do mercado esportivo!
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        ),
        action: { label: 'Começar a Apostar', highlight: true },
    },
];
