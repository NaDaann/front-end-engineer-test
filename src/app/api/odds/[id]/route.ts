import { NextRequest, NextResponse } from 'next/server';
import { getOddWithDetailsById } from '@/lib/mocks';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 400));

        // Buscar odd específica com todos os detalhes
        const oddDetails = getOddWithDetailsById(id);

        if (oddDetails) {
            return NextResponse.json({
                success: true,
                data: oddDetails,
                message: 'Odd details fetched successfully',
            });
        }

        return NextResponse.json(
            {
                success: false,
                data: null,
                message: 'Odd not found',
            },
            { status: 404 },
        );
    } catch (error) {
        console.error('Error fetching odd details:', error);

        return NextResponse.json(
            {
                success: false,
                data: null,
                message: 'Failed to fetch odd details',
            },
            { status: 500 },
        );
    }
}
