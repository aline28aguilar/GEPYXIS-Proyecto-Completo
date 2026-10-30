
import Area from '@components/common/Area.js';
import React from 'react';

export function Header() {
  return (
    <header className="header bg-background">
      <Area
        id="headerTop"
        className="header__top"
        isGlobal
        editableInPageBuilder
      />

      <div className="header__middle w-full flex items-center gap-8 px-4 py-5">
        <Area
          id="headerMiddleLeft"
          className="header__middle__left flex justify-start items-center shrink-0"
          isGlobal
          editableInPageBuilder
        />

        <Area
          id="headerMiddleCenter"
          className="header__middle__center flex flex-1 justify-start items-center"
          isGlobal
          editableInPageBuilder
        />

        <Area
          id="headerMiddleRight"
          className="header__middle__right flex justify-end items-center gap-4 shrink-0"
          isGlobal
          editableInPageBuilder
        />
      </div>

      <Area
        id="headerBottom"
        className="header__bottom"
        isGlobal
        editableInPageBuilder
      />
    </header>
  );
}
