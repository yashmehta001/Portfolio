function About (){
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I&rsquo;m Yash Mehta, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis donec et odio pellentesque diam volutpat commodo. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Lobortis scelerisque fermentum dui faucibus in. </p>  
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;