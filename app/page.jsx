import Photo from '@/components/Photo'
import Social from '@/components/Social'
import Stats from '@/components/Stats'
import { Button } from '@/components/ui/button'
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
          {/* text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='text-xl'>Desarrollador de Software y Analista en Ciberseguridad</span>
            <h1 className='h1 mb-6'>
              Hola Soy <span className='text-accent'>José Molina</span>
            </h1>
            <p className='max-w-[600px] mb-9 text-white/80'>
              Me especializo en crear experiencias digitales elegantes y seguras, combinando mi dominio en diversos lenguajes de programación y tecnologías con un sólido enfoque en la ciberseguridad. Mi pasión por el desarrollo web y la protección de datos me impulsa a ofrecer soluciones innovadoras y robustas, asegurando la integridad y privacidad de la información en cada proyecto.
            </p>
            {/* btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              {/* 
              <Button
                variant='outline'
                size='lg'
                className='uppercase flex items-center gap-2'
              >
                <span>Descargar CV</span>
                <FiDownload className='text-xl' />
              </Button>
              */}
              <div className='mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home