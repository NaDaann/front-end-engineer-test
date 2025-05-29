'use client';

import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    ArrowLeft,
    TrendingUp,
    Calendar,
    MapPin,
    Activity,
    Target,
    DollarSign,
    Clock,
    BarChart3,
    Zap,
    Eye,
    ChevronRight,
    Trophy,
    Flame,
} from 'lucide-react';
import { useApi } from '@/hooks/use-api';
import { useHotOddCheck } from '@/hooks/use-hot-odd-check';
import { formatDate, formatOdds } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { OddWithDetails } from '@/lib/mocks';
import { RelatedOddsDisplay } from '@/features/odds';

export default function OddDetailsPage() {
    const params = useParams();
    const oddId = params.id as string;

    const { data: oddDetails, loading, error } = useApi<OddWithDetails>(`/odds/${oddId}`);

    // Use BFF to determine if this odd is hot
    const { isHot: isHotOdd, isLoading: hotOddsLoading } = useHotOddCheck(oddId, {
        sportId: oddDetails?.match.sportId,
        percentile: 0.15,
        enabled: !!oddDetails, // Only enable when odd details are loaded
    });

    if (loading || hotOddsLoading) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full"
                />
            </div>
        );
    }

    if (error || !oddDetails) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center min-h-96"
            >
                <Card className="bg-card border-destructive/20">
                    <CardContent className="p-8 text-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                            <Target className="w-8 h-8 text-destructive" />
                        </motion.div>
                        <h3 className="text-lg font-semibold mb-2">Odd não encontrada</h3>
                        <p className="text-muted-foreground mb-6">
                            Não foi possível carregar os detalhes desta odd
                        </p>
                        <Link href="/odds">
                            <Button variant="outline">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Voltar para Odds
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </motion.div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                damping: 20,
                stiffness: 100,
            },
        },
    };

    const scaleOnHover = {
        scale: 1.02,
        transition: { type: 'spring', damping: 15 },
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'live':
                return 'bg-red-500/10 text-red-400 border-red-500/20';
            case 'upcoming':
                return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
            case 'finished':
                return 'bg-green-500/10 text-green-400 border-green-500/20';
            default:
                return 'bg-muted text-muted-foreground';
        }
    };

    const getStatusText = (status: string) => {
        switch (status) {
            case 'live':
                return 'Ao Vivo';
            case 'upcoming':
                return 'Agendado';
            case 'finished':
                return 'Finalizado';
            default:
                return status;
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 max-w-7xl mx-auto"
        >
            {/* Header Navigation */}
            <motion.div variants={itemVariants} className="flex items-center justify-between">
                <Link href="/odds">
                    <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            className="border-border/40 hover:border-primary/40"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Voltar para Odds
                        </Button>
                    </motion.div>
                </Link>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center space-x-2 text-sm text-muted-foreground"
                >
                    <Eye className="w-4 h-4" />
                    <span>Detalhes da Odd</span>
                </motion.div>
            </motion.div>

            {/* Hero Section - Match Header */}
            <motion.div variants={itemVariants}>
                <motion.div
                    whileHover={scaleOnHover}
                    className="relative overflow-hidden rounded-2xl"
                >
                    <div
                        className={`absolute inset-0 ${
                            isHotOdd
                                ? 'bg-gradient-to-br from-orange-500/20 via-red-500/10 to-orange-600/20'
                                : 'bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20'
                        }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

                    {/* Animated background elements */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        className={`absolute top-4 right-4 w-32 h-32 rounded-full blur-xl ${
                            isHotOdd ? 'bg-orange-500/10' : 'bg-primary/5'
                        }`}
                    />

                    {/* Hot floating flames animation */}
                    {isHotOdd && (
                        <>
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    x: [0, 10, -5, 0],
                                    rotate: [0, 15, -10, 0],
                                    opacity: [0.3, 0.8, 0.3],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 0,
                                }}
                                className="absolute top-8 right-16 z-20"
                            >
                                <Flame className="w-6 h-6 text-orange-400" />
                            </motion.div>
                            <motion.div
                                animate={{
                                    y: [0, -15, 0],
                                    x: [0, -8, 12, 0],
                                    rotate: [0, -20, 10, 0],
                                    opacity: [0.2, 0.6, 0.2],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 1,
                                }}
                                className="absolute top-12 right-8 z-20"
                            >
                                <Flame className="w-4 h-4 text-red-400" />
                            </motion.div>
                            <motion.div
                                animate={{
                                    y: [0, -25, 0],
                                    x: [0, 15, -10, 0],
                                    rotate: [0, 25, -15, 0],
                                    opacity: [0.4, 0.9, 0.4],
                                }}
                                transition={{
                                    duration: 2.5,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: 2,
                                }}
                                className="absolute top-6 right-24 z-20"
                            >
                                <Flame className="w-5 h-5 text-orange-500" />
                            </motion.div>
                        </>
                    )}

                    <Card className="border-0 bg-transparent relative z-10">
                        <CardContent className="p-8">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                                <div className="space-y-4">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center space-x-3"
                                    >
                                        <div
                                            className={`w-2 h-8 ${
                                                isHotOdd
                                                    ? 'bg-gradient-to-r from-orange-600 via-red-700 to-orange-600'
                                                    : ' bg-green-800'
                                            } rounded-full`}
                                        />
                                        <h1
                                            className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${
                                                isHotOdd
                                                    ? 'from-orange-400 via-red-500 to-orange-400'
                                                    : 'from-foreground via-primary to-foreground'
                                            } bg-clip-text text-transparent`}
                                        >
                                            {oddDetails.match.homeTeam}
                                        </h1>
                                        <span className="text-2xl text-muted-foreground font-light">
                                            vs
                                        </span>
                                        <h1
                                            className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${
                                                isHotOdd
                                                    ? 'from-orange-400 via-red-500 to-orange-400'
                                                    : 'from-foreground via-primary to-foreground'
                                            } bg-clip-text text-transparent`}
                                        >
                                            {oddDetails.match.awayTeam}
                                        </h1>
                                    </motion.div>

                                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-lg border border-border/40"
                                        >
                                            <Calendar
                                                className={`w-4 h-4 ${
                                                    isHotOdd ? 'text-orange-500' : 'text-primary'
                                                }`}
                                            />
                                            <span className="text-sm">
                                                {formatDate(new Date(oddDetails.match.startTime))}
                                            </span>
                                        </motion.div>

                                        {oddDetails.match.venue && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-lg border border-border/40"
                                            >
                                                <MapPin
                                                    className={`w-4 h-4 ${
                                                        isHotOdd
                                                            ? 'text-orange-500'
                                                            : 'text-primary'
                                                    }`}
                                                />
                                                <span className="text-sm">
                                                    {oddDetails.match.venue}
                                                </span>
                                            </motion.div>
                                        )}

                                        {oddDetails.match.league && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center space-x-2 bg-card/50 px-3 py-2 rounded-lg border border-border/40"
                                            >
                                                <Trophy
                                                    className={`w-4 h-4 ${
                                                        isHotOdd
                                                            ? 'text-orange-500'
                                                            : 'text-primary'
                                                    }`}
                                                />
                                                <span className="text-sm">
                                                    {oddDetails.match.league}
                                                </span>
                                            </motion.div>
                                        )}
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ delay: 0.4, type: 'spring' }}
                                    className="flex flex-col items-center lg:items-end space-y-3"
                                >
                                    <Badge
                                        className={`px-4 py-2 text-sm font-medium border ${getStatusColor(oddDetails.match.status)}`}
                                    >
                                        {oddDetails.match.status === 'live' && (
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1] }}
                                                transition={{ duration: 1, repeat: Infinity }}
                                                className="w-2 h-2 bg-red-500 rounded-full mr-2"
                                            />
                                        )}
                                        {getStatusText(oddDetails.match.status)}
                                    </Badge>

                                    <div className="text-center lg:text-right">
                                        <div className="flex items-center justify-center lg:justify-end gap-2 mb-2">
                                            <p className="text-xs text-muted-foreground">
                                                Odd Principal
                                            </p>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className={`text-5xl font-bold bg-gradient-to-r ${
                                                isHotOdd
                                                    ? 'from-orange-500 via-red-500/80 to-orange-500'
                                                    : 'from-primary via-primary/80 to-primary'
                                            } bg-clip-text text-transparent`}
                                        >
                                            {formatOdds(oddDetails.odds)}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                    {/* Odd Details Card */}
                    <motion.div variants={itemVariants}>
                        <motion.div whileHover={scaleOnHover}>
                            <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <CardTitle className="flex items-center space-x-3 text-xl">
                                        <div className="p-2 bg-primary/10 rounded-xl">
                                            <TrendingUp
                                                className={`w-6 h-6 ${
                                                    isHotOdd ? 'text-orange-500' : 'text-primary'
                                                }`}
                                            />
                                        </div>
                                        <span>Análise Detalhada</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Current Odd Showcase */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className={`relative p-6 rounded-xl border ${
                                            isHotOdd
                                                ? 'bg-gradient-to-br from-orange-900/20 via-red-900/10 to-orange-900/20 border-orange-500/30'
                                                : 'bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border-primary/20'
                                        }`}
                                    >
                                        <div
                                            className={`absolute inset-0 rounded-xl ${
                                                isHotOdd
                                                    ? 'bg-gradient-to-r from-transparent via-orange-500/10 to-transparent'
                                                    : 'bg-gradient-to-r from-transparent via-primary/5 to-transparent'
                                            }`}
                                        />

                                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="text-center"
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                                                        isHotOdd
                                                            ? 'bg-orange-500/20'
                                                            : 'bg-primary/10'
                                                    }`}
                                                >
                                                    <DollarSign
                                                        className={`w-6 h-6 ${
                                                            isHotOdd
                                                                ? 'text-orange-500'
                                                                : 'text-primary'
                                                        }`}
                                                    />
                                                </div>
                                                <p className="text-xs text-muted-foreground mb-1">
                                                    Casa de Apostas
                                                </p>
                                                <p className="font-semibold text-foreground">
                                                    {oddDetails.bookmaker}
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="text-center"
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                                                        isHotOdd
                                                            ? 'bg-orange-500/20'
                                                            : 'bg-primary/10'
                                                    }`}
                                                >
                                                    <BarChart3
                                                        className={`w-6 h-6 ${
                                                            isHotOdd
                                                                ? 'text-orange-500'
                                                                : 'text-primary'
                                                        }`}
                                                    />
                                                </div>
                                                <p className="text-xs text-muted-foreground mb-1">
                                                    Mercado
                                                </p>
                                                <p className="font-semibold text-foreground">
                                                    {oddDetails.market}
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="text-center"
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                                                        isHotOdd
                                                            ? 'bg-orange-500/20'
                                                            : 'bg-primary/10'
                                                    }`}
                                                >
                                                    <Target
                                                        className={`w-6 h-6 ${
                                                            isHotOdd
                                                                ? 'text-orange-500'
                                                                : 'text-primary'
                                                        }`}
                                                    />
                                                </div>
                                                <p className="text-xs text-muted-foreground mb-1">
                                                    Seleção
                                                </p>
                                                <p className="font-semibold text-foreground">
                                                    {oddDetails.selection}
                                                </p>
                                            </motion.div>

                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                className="text-center"
                                            >
                                                <div
                                                    className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 ${
                                                        isHotOdd
                                                            ? 'bg-gradient-to-br from-orange-500 to-red-500'
                                                            : 'bg-gradient-to-br from-primary to-primary/60'
                                                    }`}
                                                >
                                                    <Zap className="w-6 h-6 text-white" />
                                                </div>
                                                <p className="text-xs text-muted-foreground mb-1">
                                                    Odd Atual
                                                </p>
                                                <motion.p
                                                    whileHover={{ scale: 1.1 }}
                                                    className={`text-3xl font-bold bg-gradient-to-r ${
                                                        isHotOdd
                                                            ? 'from-orange-500 to-red-500/70'
                                                            : 'from-primary to-primary/70'
                                                    } bg-clip-text text-transparent`}
                                                >
                                                    {formatOdds(oddDetails.odds)}
                                                </motion.p>
                                            </motion.div>
                                        </div>
                                    </motion.div>

                                    {/* Odd History */}
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold flex items-center space-x-2">
                                            <Activity
                                                className={`w-5 h-5 ${
                                                    isHotOdd ? 'text-orange-500' : 'text-primary'
                                                }`}
                                            />
                                            <span>Histórico de Variação</span>
                                        </h3>

                                        <div className="space-y-2 max-h-60">
                                            <AnimatePresence>
                                                {oddDetails.history &&
                                                    oddDetails.history.map((entry, index) => (
                                                        <motion.div
                                                            key={index}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: 20 }}
                                                            whileHover={{
                                                                x: 10,
                                                                backgroundColor: isHotOdd
                                                                    ? 'var(--orange-100)'
                                                                    : 'var(--accent)',
                                                            }}
                                                            className={`flex justify-between items-center p-4 rounded-lg border transition-all duration-100 ${
                                                                isHotOdd
                                                                    ? 'border-orange-500/40 hover:border-orange-500/60'
                                                                    : 'border-border/40 hover:border-primary/40'
                                                            }`}
                                                        >
                                                            <div className="flex items-center space-x-3">
                                                                <Clock className="w-4 h-4 text-muted-foreground" />
                                                                <span className="text-sm text-muted-foreground">
                                                                    {formatDate(
                                                                        new Date(entry.timestamp),
                                                                    )}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center space-x-2">
                                                                <span className="font-semibold text-foreground">
                                                                    {formatOdds(entry.odds)}
                                                                </span>
                                                                <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Related Odds */}
                    <motion.div variants={itemVariants}>
                        <motion.div>
                            <RelatedOddsDisplay oddId={oddId} maxItems={3} />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
