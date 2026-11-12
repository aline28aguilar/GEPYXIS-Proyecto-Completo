import Area from '@evershop/evershop/components/common/Area.js';
import React from 'react';

export default function QuoteEditView() {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="grid grid-cols-1 gap-5 auto-rows-max">
        <Area id="leftSide" noOuter />
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 10
};