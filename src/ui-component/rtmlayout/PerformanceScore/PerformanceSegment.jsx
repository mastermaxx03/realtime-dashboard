import React from 'react';
import PerformanceGaugeChart from './PerformanceGaugeChart';
import Card from '../../common/commonCard'; // Adjust path if needed

// Simplified component - removed all API dependencies and context updates
export default function PerformanceSegment({ score = 87 }) {
  // Removed all useEffect, context, and API-related logic
  const headerControls = null;

  return (
    <Card title="Real Time Performance Score" headerControls={headerControls}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
        <div style={{ width: '200px', height: '200px' }}>
          <PerformanceGaugeChart value={score} />
        </div>
      </div>
    </Card>
  );
}
