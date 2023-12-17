import React, { useEffect, useState, Fragment } from "react"
import { FaBars } from "react-icons/fa6"
import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [isTopbarVisible, setIsTopbarVisible] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsTopbarVisible(true)
    } else {
      setIsTopbarVisible(false)
    }
  }

  return (
    <div
      className={`container-primary bg-primary flex justify-between items-center pt-8 pb-5 shadow ${
        isTopbarVisible && "fixed top-0 z-40 w-full" 
      }`}
    >
      <img src="/imgs/fox-logo.png" alt="logo" className="cursor-pointer" />

      <ul className="flex justify-between text-lg w-1/2 sm:hidden lg:flex">
        <li className="li-header">خانه</li>
        <li className="li-header">درباره</li>
        <li className="li-header">ویژگی ها</li>
        <li className="li-header">تصاویر</li>
        <li className="li-header">تیم</li>
        <li className="li-header">اخبار</li>
        <li className="li-header">تماس</li>
      </ul>
      <FaBars
        className="sm:block lg:hidden text-2xl cursor-pointer"
        onClick={() => setIsOpenSidebar(true)}
      />

      <Transition.Root show={isOpenSidebar} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setIsOpenSidebar(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none  fixed inset-y-0 right-0 flex sm:w-2/3 md:w-1/2 lg:1/3 pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-full relative">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setIsOpenSidebar(false)}
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col py-6 shadow-xl bg-primary">
                      <div className="px-4 sm:px-6 border-b-2 pb-6">
                        <Dialog.Title className="text-base leading-6 text-gray-900">
                          <img
                            src="/imgs/fox-logo.png"
                            alt="logo"
                            className="cursor-pointer"
                          />
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <ul className="space-y-5 text-lg text-white">
                          <li className="li-sidebar">خانه</li>
                          <li className="li-sidebar">درباره</li>
                          <li className="li-sidebar">ویژگی ها</li>
                          <li className="li-sidebar">تصاویر</li>
                          <li className="li-sidebar">تیم</li>
                          <li className="li-sidebar">اخبار</li>
                          <li className="li-sidebar">تماس</li>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
