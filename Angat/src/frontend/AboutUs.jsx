import banner from '../assets/img/banner.png'
import about1 from '../assets/img/about1.png'
import about2 from '../assets/img/about2.png'
import about3 from '../assets/img/about3.png'
import about4 from '../assets/img/about4.png'
import './components/header'


function AboutUs() {

  return (
    <> 
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex absolute left-1/2 -translate-x-1/2 bg-primary text-white p-4 font-bold rounded-4xl mt-4  text-center text-xl">
            Sino nga ba ang Angat Cembo?
          </div>
          <div
            class="hero w-full lg:w-1/3 min-h-160 justify-items-start items-end "
            style={{
              backgroundImage: `url(${banner})`,
            }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-base-100">
              <div class="max-w-2xl">
                <h1 class="mb-5 text-3xl font-bold ">Boluntaryong grupo na bukas sa lahat ng edad at kasarian
                </h1>
              </div>
            </div>
          </div>
          <div
            class="hero w-full lg:w-1/3 min-h-160 justify-items-start items-end "
            style={{
              backgroundImage: `url(${about1})`,
            }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-base-100">
              <div class="max-w-2xl">
                <h1 class="mb-5 text-3xl font-bold ">Handang umagapay sa nangangailangan
                </h1>
              </div>
            </div>
          </div>
          <div
            class="hero w-full lg:w-1/3 min-h-160 justify-items-start items-end "
            style={{
              backgroundImage: `url(${about2})`,
            }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-base-100">
              <div class="max-w-2xl">
                <h1 class="mb-5 text-3xl font-bold ">Hatid ay serbisyong pangkalahatan

                </h1>
              </div>
            </div>
          </div>
          <div
            class="hero w-full lg:w-1/3 min-h-160 justify-items-start items-end "
            style={{
              backgroundImage: `url(${about3})`,
            }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-base-100">
              <div class="max-w-2xl">
                <h1 class="mb-5 text-3xl font-bold ">May malasakit at makatao

                </h1>
              </div>
            </div>
          </div>
          <div
            class="hero w-full lg:w-1/3 min-h-160 justify-items-start items-end "
            style={{
              backgroundImage: `url(${about4})`,
            }}>
            <div class="hero-overlay"></div>
            <div class="hero-content text-base-100">
              <div class="max-w-2xl">
                <h1 class="mb-5 text-3xl font-bold ">Hangad ay panlipunang pag-unlad

                </h1>
              </div>
            </div>
          </div>
        </div>
        
        {/* <div className='w-full p-8 md:p-14 bg-base-200 shadow-sm'>
          <div className="m-auto w-9/10 md:w-7/10">
            <div className="text-lg text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Morbi fermentum consectetur vestibulum. Etiam elementum porttitor mi eu rutrum. Duis ut varius ex, at egestas augue. Aenean dui ligula, mattis a mi eget, egestas dictum velit. Aliquam a arcu nec tortor imperdiet efficitur. Aenean ullamcorper nibh pharetra, hendrerit eros sit amet, venenatis sem. Integer laoreet nulla sem, vel vestibulum justo elementum quis. Suspendisse at molestie est, elementum aliquet est. Aenean enim lectus, maximus quis libero in, sagittis vulputate ante. Nulla pulvinar interdum tortor pulvinar dapibus. Nullam commodo hendrerit luctus. Suspendisse lacinia ligula ultricies tortor mollis maximus. Morbi ultrices lectus sit amet risus pretium, ac dignissim justo molestie.
            </div>
           
          </div>
        </div> */}

        {/* <div className='w-full p-8 md:p-14 bg-secondary shadow-sm'>
          <div className="m-auto w-7/10">
            <div className='flex flex-col-reverse lg:flex-row justify-between'>
              <div>
                <div className='text-2xl font-bold'>
                  Our Vision
                </div>
                <div className='text-3xl font-bold mt-6 max-w-2xl'>
                  j;slfkjds;kljf
                </div>
              </div>
              <div>
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
              </div>
            </div>
          </div>

          <div className="m-auto w-7/10">
            <div className='flex flex-col lg:flex-row  justify-between'>
              <div>
                <img src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" alt="" />
              </div>
              <div>
                <div className='text-2xl font-bold'>
                  Our Vision
                </div>
                <div className='text-3xl font-bold mt-6 max-w-2xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et ullamcorper ipsum. Morbi fermentum consectetur vestibulum. Etiam elementum porttitor mi eu rutrum. Duis ut varius ex, at egestas augue. Aenean dui ligula, mattis a mi eget, egestas dictum velit. Aliquam a arcu nec tortor imperdiet efficitur. 
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </>
  )
}

export default AboutUs
