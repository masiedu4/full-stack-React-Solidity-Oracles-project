/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 10/07/2022 - 15:22:20
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/07/2022
    * - Author          : Michael
    * - Modification    : 
**/
import React from 'react'

const FundAndWithdraw = () => {
	return (
		<div className='flex justify-center mt-10 w-full'>


			<button type="button" class=" mr-5 py-2 px-4 w-1/5  bg-red-600  focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
				<p className='text-xs'> Fund</p>
			</button>

			<button type="button" class="py-2 px-4 w-1/5 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
				<p className='text-xs'> Withdraw</p>
			</button>


		</div>
	)
}

export default FundAndWithdraw