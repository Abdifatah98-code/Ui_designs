import { HiOutlinePlusSm } from "react-icons/hi"
import { HiMiniPhone, HiUser } from "react-icons/hi2"
import { MdLocationPin } from "react-icons/md";
import { BiMaleFemale } from "react-icons/bi";
import { GiWorld } from "react-icons/gi";


import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

const inputCss =
    "border border-l-0 border-gray-400  w-full rounded rounded-l-none -ml-1 text-[#504d4d] focus:ring-gray-200 dark:bg-gray-800 dark:border-gray-700  dark:focus:ring-offset-gray-800";

function ModalTest() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="flex flex-col bg-white my-5 px-4 w-[98%] mx-auto font-pops font-semibold">
                <span onClick={() => setOpenModal(true)} className='bg-black text-white w-fit py-1 px-2 rounded cursor-pointer'>
                    <HiOutlinePlusSm />
                </span>
            </div>


            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Tests</Modal.Header>
                <Modal.Body>
                    <div className="w-full grid grid-cols-2 gap-2 text-[14px] text-[#504d4d] font-normal">

                        <div className="flex flex-col">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                test name <strong className="text-red-700">*</strong>
                            </label>
                            <div className="flex flex-row ">
                                <div className="bg-gray-300 px-4 py-3 rounded text-[#504d4d]">
                                    <HiUser />
                                </div>
                                <input type="text" className={inputCss} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                test number <strong className="text-red-700">*</strong>
                            </label>
                            <div className="flex flex-row ">
                                <div className="bg-gray-300 px-4 py-3 rounded text-[#504d4d]">
                                    <HiMiniPhone className="text-[#504d4d]" />
                                </div>
                                <input type="text" className={inputCss} />
                            </div>
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                test
                            </label>
                            <div className="flex flex-row ">
                                <div className="bg-gray-300 px-4 py-3 rounded text-[#504d4d]">
                                    <MdLocationPin className="text-[#504d4d]" />
                                </div>
                                <input type="text" className={inputCss} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                gender <strong className="text-red-700">*</strong>
                            </label>
                            <div className="flex flex-row ">
                                <div className="bg-gray-300 px-4 py-3 rounded text-[#504d4d]">
                                    <BiMaleFemale className="text-[#504d4d]" />
                                </div>
                                <select name="" id="" className={inputCss} required={true}>
                                    <option value="" selected disabled>
                                        Gender
                                    </option>
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="" className="capitalize text-[12px] my-2">
                                Nationality <strong className="text-red-700">*</strong>
                            </label>
                            <div className="flex flex-row ">
                                <div className="bg-gray-300 px-4 py-3 rounded text-[#504d4d]">
                                    <GiWorld className="text-[#504d4d]" />
                                </div>
                                <select name="" id="" className={inputCss} required={true}>
                                    <option value="" selected disabled>
                                        {" "}
                                        Nationality{" "}
                                    </option>
                                    <option value="somali">somali</option>
                                    <option value="phalastin">phalastin</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>I accept</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalTest;

