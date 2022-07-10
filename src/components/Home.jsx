/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 10/07/2022 - 13:29:52
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/07/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React, { useContext } from 'react'
import { Context } from '../context/Context'

const Home = () => {
	const { greetings } = useContext(Context);
	return (
		<p>{greetings}</p>
	)
}

export default Home