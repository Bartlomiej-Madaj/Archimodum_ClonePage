import React, { createContext, useState } from "react";

const HeaderContext = createContext({
  headerActive: false,
  menuActive: false,
  changeActive: (active: boolean) => {},
  changeActiveMenu: (active: boolean) => {},
});

type HeaderContextProviderProps = {
  children?: React.ReactNode;
};

export const HeaderContextProvider = ({
  children,
}: HeaderContextProviderProps) => {
  const [active, setActive] = useState(false);
  const [activeMenu, setActivemenu] = useState(false);

  function changeActiveHandler(active: boolean) {
    setActive(active);
  }

  function changeActiveMenuHandler(active: boolean) {
    setActivemenu(active);
  }

  const context = {
    headerActive: active,
    menuActive: activeMenu,
    changeActive: changeActiveHandler,
    changeActiveMenu: changeActiveMenuHandler,
  };

  return (
    <HeaderContext.Provider value={context}>{children}</HeaderContext.Provider>
  );
};

export default HeaderContext;
