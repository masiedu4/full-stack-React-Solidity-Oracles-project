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
    const { isConnected, account, connectWallet, buttonConnectText } = useContext(Context);
    return (
        <>
            <main className="">


                <div className='flex justify-center mb-4'>
                    {
                        !isConnected ?
                            <p>{account}</p>
                            :
                            <p> Account: {account} </p>
                    }

                </div>
                <div class="flex justify-center">
                    {!isConnected ?

                        <button onClick={connectWallet} type="button" class="py-2 px-4  bg-red-600  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/5 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            {buttonConnectText}
                        </button>
                        :
                        <button type="button" class="py-2 px-4  bg-green-600  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-1/5 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            {buttonConnectText}
                        </button>

                    }
                </div>
            </main>
        </>
    )
}

export default Home