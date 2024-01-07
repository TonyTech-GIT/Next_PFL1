import Image from 'next/image'
import Link from 'next/link'

import horse from '../public/horse.png'
import cliff from '../public/cliff.webp'
import trees from '../public/trees.webp'
import stars from '../public/stars.png'

export default function Home() {
  return (
    <main className='w-screen h-screen relative'>
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: 'url(/main-bg.webp)'}}>
        <div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]'>

          <h1 className='text-[50px]   text-white font-semibold'>
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500"> 
            {" "}
            Web Development
            </span>
          </h1>
          
          <p className="text-gray-200 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5 ">
            <Link 
            href='/my-skills' 
            className='rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-width-[200px]'>
              Learn More
            </Link>

            <Link 
            href='/my-projects' 
            className='rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-width-[200px]'>
              <div className="absolute rounded-[20px] z-[1] inset-0 bg-white opacity-0 group-hover:opacity-20" />
              
              My Projects
            </Link>

            <Link 
            href='/contact-me' 
            className='rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-width-[200px]'>
            <div className="absolute rounded-[20px] z-[1] inset-0 bg-white opacity-0 group-hover:opacity-20" />
              
             
              Contact Me
            </Link>
          </div>

        </div>
      </div>


      <div className=" absolute flex z-[20] bottom-10 right-5 flex-col md:hidden gap-5 ">
            <Link 
            href='/my-skills' 
            className='rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-width-[200px]'>
              Learn More
            </Link>

            <Link 
            href='/my-projects' 
            className='rounded-[20px] group bg-transparent border border-white  px-5 py-3 text-lg text-white max-w-[200px]'>
              
              
              My Projects
            </Link>

            <Link href='/contact-me' className='rounded-[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
             
              Contact Me
            </Link>
          </div>

        <div className="absolute bottom-0 right-0 z-[10]">
          <Image 
          src={horse} 
          alt='horse' 
          height={300} 
          width={400} 
          className='absolute right-55 top-40'
          />

          <Image src={cliff} alt='cliff' height={480} width={480}/>
        </div>

        <div className="absolute bottom-0 z-[5] w-full h-auto">
          <Image 
          src={trees}
          alt='trees'
          height={2000}
          width={2000}
          className='w-full h-full'
          />
        </div>
      
        <div className="absolute bottom-0 z-[5] w-full h-auto">
          <Image 
          src={stars}
          alt='stars'
          height={300}
          width={300}
          className='absolute top-0 left-0 z-[10] '
          />
        </div>


    </main>
  )
}
