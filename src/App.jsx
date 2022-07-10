/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 06/07/2022 - 06:13:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/07/2022
    * - Author          : Michael
    * - Modification    : 
**/

import FundAndWithdraw from "./components/FundAndWithdraw";
import Home from "./components/Home";
import { ContextProvider } from "./context/Context";

function App() {

  return (
    <>
      <ContextProvider>
        <div className="m-40">

          <Home />
          <FundAndWithdraw />

        </div>

      </ContextProvider>
    </>

  )
}
export default App;