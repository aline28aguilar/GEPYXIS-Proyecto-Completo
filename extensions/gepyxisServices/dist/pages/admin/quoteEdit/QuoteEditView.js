import Area from '@evershop/evershop/components/common/Area.js';
import React from 'react';
export default function QuoteEditView() {
    return /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 gap-5"
    }, /*#__PURE__*/ React.createElement("div", {
        className: "grid grid-cols-1 gap-5 auto-rows-max"
    }, /*#__PURE__*/ React.createElement(Area, {
        id: "leftSide",
        noOuter: true
    })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
