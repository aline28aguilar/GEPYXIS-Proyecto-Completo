
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

      <div className="header__middle w-full flex items-center gap-8 px-8 py-4">
        {/* Logo y menú principal */}
        <Area
          id="headerMiddleLeft"
          className="header__middle__left flex items-center justify-start shrink-0 gap-8"
          isGlobal
          editableInPageBuilder
        />

        {/* Navegación central */}
        <Area
          id="headerMiddleCenter"
          className="header__middle__center flex flex-1 items-center justify-start"
          isGlobal
          editableInPageBuilder
        />

        {/* Buscador, cuenta y carrito */}
        <Area
          id="headerMiddleRight"
          className="header__middle__right flex items-center justify-end gap-4 shrink-0"
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
