
import { HiOutlinePlusSm } from "react-icons/hi"

import { LuLogIn } from "react-icons/lu";


import { Modal } from 'flowbite-react';
import { useState } from 'react';

const inputCss =
    "border  border-gray-400  w-full rounded   text-[#504d4d] focus:ring-gray-200 dark:bg-gray-800 dark:border-gray-700  dark:focus:ring-offset-gray-800";


const Cls = () => {
    const [openModal, setOpenModal] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <div className="flex flex-col bg-white my-5 px-4 w-[98%] mx-auto font-pops font-semibold">
                <span onClick={() => setOpenModal(true)} className='bg-black text-white w-fit py-1 px-2 rounded cursor-pointer'>
                    <HiOutlinePlusSm />
                </span>
            </div>


            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Tests Cls</Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => handleSubmit(e)} className="w-full grid grid-cols-2 gap-2 px-2 text-[14px] text-[#504d4d] font-normal">

                        <div className="flex flex-col">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                test year <strong className="text-red-700">*</strong>
                            </label>
                            <div className="flex flex-row ">

                                <input type="text" className={inputCss} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                standard <strong className="text-red-700">*</strong>
                            </label>
                            <div className="flex flex-row ">

                                <select name="" id="" className={inputCss} required={true}>
                                    <option value="" selected disabled>
                                        choose standard
                                    </option>
                                    <option value="standard">standard</option>
                                    <option value="standard">standard</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                Shift <strong className="text-red-700">*</strong>
                            </label>
                            <div className="flex flex-row ">

                                <select name="" id="" className={inputCss} required={true}>
                                    <option value="" selected disabled>
                                        choose Shift
                                    </option>
                                    <option value="Shift">Shift</option>
                                    <option value="Shift">Shift</option>
                                </select>
                            </div>
                        </div>



                    </form>


                </Modal.Body>
                <Modal.Footer className="self-end">
                    <button type="submit" className="flex items-center space-x-2  px-5 py-1 rounded bg-mainColor text-white text-[14px]"><LuLogIn />
                        <span>save</span>
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cls

