/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 06/07/2022 - 06:13:02
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 06/07/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React, { useState } from "react";
const Counter = () => {
	const [count, setCount] = useState(0)
	return (
		<div className="flex h-screen">
			<div className="m-auto">
				<div className="text-6xl text-red-600">{count}</div>
				<button className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white" type="button" onClick={() => setCount((count) => count + 1)}>
					count+
				</button>
			</div>
		</div>
	)
}
export default Counter;