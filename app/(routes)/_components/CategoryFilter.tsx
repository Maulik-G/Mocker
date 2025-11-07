// app/(routes)/_components/CategoryFilter.tsx
'use client'; // This component uses search params, so it's a Client Component

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export function CategoryFilter() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const categories = ['All', 'CAT', 'GATE']; // Add more as needed

  return (
    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem' }}>
      {categories.map(category => {
        // Check if this button is the active one
        const isActive = 
          (category === 'All' && !currentCategory) || // "All" is active if no param
          currentCategory === category; // "CAT" is active if param is "CAT"

        // Create the link for this button
        const href = category === 'All' 
          ? '/dashboard' 
          : `/dashboard?category=${category}`;
        
        return (
          <Link 
            key={category} 
            href={href}
            // Simple styling to show which filter is active
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '99px',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'white' : 'black',
              backgroundColor: isActive ? '#007bff' : '#f0f0f0', // Blue for active, gray for inactive
              border: '1px solid #ccc'
            }}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}