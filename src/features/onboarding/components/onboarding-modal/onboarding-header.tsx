'use client';

import { Button } from '@/components/ui/button';
import { CardHeader, CardTitle } from '@/components/ui/card';
import { X, Target, Gamepad2, Star, ArrowUpDown, BarChart3, Search, Diamond, Rocket } from 'lucide-react';
import { OnboardingHeaderProps } from './types';

export function OnboardingHeader({ currentStep, totalSteps, onClose }: OnboardingHeaderProps) {
    const getStepIcon = () => {
        switch (currentStep) {
            case 0: return <Target className="w-5 h-5 text-green-400" />;
            case 1: return <Gamepad2 className="w-5 h-5 text-green-400" />;
            case 2: return <Star className="w-5 h-5 text-yellow-400" />;
            case 3: return <ArrowUpDown className="w-5 h-5 text-green-400" />;
            case 4: return <BarChart3 className="w-5 h-5 text-emerald-400" />;
            case 5: return <Search className="w-5 h-5 text-purple-400" />;
            case 6: return <Diamond className="w-5 h-5 text-indigo-400" />;
            case 7: return <Rocket className="w-5 h-5 text-emerald-400" />;
            default: return <Target className="w-5 h-5 text-green-400" />;
        }
    };



    return (
        <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-lg font-bold bg-gradient-to-r from-green-800 to-green-900"
                    >
                        {currentStep + 1}
                    </div>
                    <div>
                        <CardTitle className="text-xl text-white flex items-center gap-2">
                            {getStepIcon()}
                        </CardTitle>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>Passo {currentStep + 1} de {totalSteps}</span>
                            <div className="flex space-x-1">
                                {Array.from({ length: totalSteps }, (_, i) => (
                                    <div
                                        key={i + currentStep}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            i <= currentStep ? 'bg-emerald-400' : 'bg-gray-600'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="text-gray-400 hover:text-white hover:bg-gray-800"
                >
                    <X className="w-4 h-4" />
                </Button>
            </div>
        </CardHeader>
    );
}
