import { NextResponse } from 'next/server';
import { mockSports } from '@/lib/mocks';

// request: NextRequest
export async function GET() {
    try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json({
            success: true,
            data: mockSports,
            message: 'Sports fetched successfully',
        });
    } catch (error: unknown) {
        console.error('Error fetching sports:', error);
        return NextResponse.json(
            {
                success: false,
                data: null,
                message: 'Failed to fetch sports',
            },
            { status: 500 },
        );
    }
}
