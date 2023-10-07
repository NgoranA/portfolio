import Image from 'next/image'
import profile from '../../public/profile.jpeg'
import bg from '../../public/bg1.png'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container max-w-7xl py-20 gap-5">
      <section className='grid grid-cols-2 gap-5'>
        <Link href={''} className='group' >
          <article className=' w-full px-10 py-12 grid grid-cols-2 gap-6  rounded-[30px] h-full relative bg-gradient-to-br from-zinc-800 to-neutral-900'>
            <Image src={bg} fill alt='bg_picture' priority className='rounded=[30px] overflow-clip opacity-10 ' sizes='100vw' />
            <div className='h-60 w-60 rounded-tl-[34px] bg-stone-700 rounded-br-[34px] relative' >
              <Image src={profile} alt='profile picture' className='overflow-hidden rounded-tl-[34px] rounded-br-[34px]' fill priority sizes='100vw' />
            </div>
            <div className='flex flex-col gap-3 justify-end' >
              <p className='text-neutral-400 text-sm'>A FULLSTACK DEVELOPER</p>
              <h1 className='text-4xl font-bold text-neutral-200'>Ngoran Aristide F.</h1>
              <p className='text-neutral-400 text-sm'>I am a Fullstack Developer based in Cameroon</p>
              <div className='flex justify-end'>

                <svg className='group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1' width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1' d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z" fill="#F4F4F4" stroke="#F4F4F4" />
                  <rect y="21.6981" width="0.999999" height="18" transform="rotate(-90 0 21.6981)" className='group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1' fill="#F4F4F4" />
                  <path className='group-hover:stroke-neutral-50 stroke-neutral-500 stroke-1' d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314" stroke="#F4F4F4" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                {/* <Image src={linkIcon} alt='linkIcon' className='group-hover:text-neutral-50 fill-neutral-900' height={40} width={40} /> */}
              </div>
            </div>
          </article>
        </Link>
        <article className='flex flex-col gap-5 w-full h-full'>
          <div className='h-16  rounded-[30px] px-5 flex items-center text-neutral-50 py-3 bg-zinc-800'>hi</div>
          <div className='grid grid-cols-2 gap-5 h-full'>
            <div className='bg-zinc-800 rounded-[30px] h-full w-full' ></div>
            <div className='bg-zinc-800 rounded-[30px] h-full w-full' ></div>
          </div>
        </article>

      </section>
      <section className='grid grid-cols-4 gap-5 h-64'>
        <div className='bg-zinc-800 rounded-[30px] h-full w-full' ></div>
        <div className='bg-zinc-800 rounded-[30px] h-full w-full col-span-2' ></div>
        <div className='bg-zinc-800 rounded-[30px] h-full w-full' ></div>
      </section>
      <section className='grid grid-cols-2 gap-5 h-64'>
        <div className='text-neutral-50 bg-zinc-800 grid grid-cols-3 gap-5 rounded-[30px] h-64 p-5 w-full bg-gradient-to-br from-zinc-800 to-neutral-900' >
          <div className='rounded-[30px] h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-zinc-700 to-neutral-900' >heo</div>
          <div className='bg-zinc-800 rounded-[30px] h-full w-full  flex flex-col items-center justify-center bg-gradient-to-br from-zinc-700 to-neutral-900' ></div>
          <div className='bg-zinc-800 rounded-[30px] h-full w-full  flex flex-col items-center justify-center bg-gradient-to-br from-zinc-700 to-neutral-900' ></div>
        </div>
        <div className='bg-zinc-800 rounded-[30px] h-full w-full' ></div>
      </section>
    </main>
  )
}
