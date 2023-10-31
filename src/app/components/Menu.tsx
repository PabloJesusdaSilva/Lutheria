import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
} from '@heroicons/react/24/outline'

import Link from 'next/link';

const solutions = [
  { name: 'Violino', description: 'Conheça nossos violinos', href: '/violins', icon: ChartPieIcon },
  { name: 'Viola', description: 'Conheça nossas violas', href: '/violas', icon: FingerPrintIcon },
  { name: 'Violocelo', description: 'Conheça nossos violoncelos', href: '/cellos', icon: CursorArrowRaysIcon },
]

const Menu = () => {
  return (
    <Popover className='relative'>
      <Popover.Button className='inline-flex items-center gap-x-1 font-semibold leading-6 text-zinc-200'>
        <span>
          Instrumentos
        </span>
        <ChevronDownIcon 
          className='h-5 w-5' 
          aria-hidden='true' 
        />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4'>
          <div className='w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm tracking-widest leading-6 shadow-lg ring-1 ring-gray-900/5'>
            <div className='p-4'>
              {
                solutions.map((item) => (
                  <div 
                    key={item.name} 
                    className='group relative flex gap-x-6 rounded-lg p-4 transition-all duration-300 hover:bg-zinc-200'
                  >
                    <div>
                      <Link 
                        href={item.href} 
                        className='font-semibold text-gray-900 transition-all duration-300 hover:text-purple-700'
                      >
                        {item.name}

                        <span className='absolute inset-0' />
                      </Link>
                      <p className='mt-1 text-gray-600'>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}


export default Menu;