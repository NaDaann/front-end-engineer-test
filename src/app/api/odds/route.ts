import { NextRequest, NextResponse } from 'next/server';
import { mockMatches } from '@/lib/mocks';

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const sportId = searchParams.get('sportId');
        const status = searchParams.get('status');

        let filteredMatches = mockMatches;

        if (sportId) {
            filteredMatches = filteredMatches.filter((match) => match.sportId === sportId);
        }

        if (status) {
            filteredMatches = filteredMatches.filter((match) => match.status === status);
        }

        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 300));

        return NextResponse.json({
            success: true,
            data: filteredMatches,
            message: 'Matches fetched successfully',
        });
    } catch (error) {
        console.error('Error fetching matches:', error);

        return NextResponse.json(
            {
                success: false,
                data: null,
                message: 'Failed to fetch matches',
            },
            { status: 500 },
        );
    }
}
