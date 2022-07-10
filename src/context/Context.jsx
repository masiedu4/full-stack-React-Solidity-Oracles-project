/**
 * @description      :
 * @author           : Michael
 * @group            :
 * @created          : 10/07/2022 - 13:01:34
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 10/07/2022
 * - Author          : Michael
 * - Modification    :
 **/
import React from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [greetings, setGreetings] = React.useState("Hello");

  return (<Context.Provider value={{ greetings }}>{children}</Context.Provider>);
};

