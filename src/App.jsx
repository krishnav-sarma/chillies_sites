import React, { useEffect } from "react";
import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });

  return (
    <>
      {/* //page 1 bg-red-400*/}

      <div className="w-full relative min-h-screen">
        {/* {data[0].map((canvasdets, index) => ( 
          <Canvas key={index} details={canvasdets} />
        ))} */}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">chillies</div>
            <div className="links flex gap-10">
              {[
                "Born to Burn",
                "Heat Makers",
                "Fueling the Fire",
                "Let’s Get Spicy",
              ].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.2]">
                At Chillies, we build immersive digital experiences for brands
                with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-7 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-7">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1 className="text-[25rem]  font-normal leading-0 pl-12 tracking-[20px]">
              Chillies
            </h1>
          </div>
        </div>
      </div>

      {/* //page 2 bg-green-400 */}

      <div className="w-full relative min-h-screen">
        {/* {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))} */}
        <div class="w-full min-h-screen px-75 py-40 flex mt-50">
          <div class="w-1/2 relative">
            <div class="flex items-center gap-3 text-sm tracking-widest">
              <span>01</span>
              <span class="block w-12 h-[1px] bg-black/50"></span>
              <span>WHAT WE DO</span>
            </div>
          </div>

          <div class="w-1/2 flex flex-col justify-between">
            <h1 class="text-[40px] leading-tight font-medium max-w-lg">
              We aim to elevate digital production in the advertising space,
              bringing your ideas to life.
            </h1>

            <div class="max-w-md text-sm space-y-6">
              <p>
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver current digital work.
              </p>
              <p>
                Our commitment to innovation and simplicity, paired with our
                agile approach, ensures your journey with us is smooth and
                enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* //page 3 bg-blue-400*/}

      <div className="w-full relative h-[60vh]">
        {/* {data[2].map((canvasdets, index) => ( 
          <Canvas key={index} details={canvasdets} />
        ))} */}
        <div class="w-full min-h-screen px-75 py-40 flex">
          <div class="w-1/2 relative">
            <div class="flex items-center gap-3 text-sm tracking-widest">
              <span>02</span>
              <span class="block w-12 h-[1px] bg-black/50"></span>
              <span>WHO WE ARE</span>
            </div>
          </div>

          <div class="w-1/2 flex flex-col justify-between">
            <h1 class="text-[40px] leading-tight font-medium max-w-lg">
              Our vision is to refine digital production while creating social
              impact and opportunity.
            </h1>
          </div>
        </div>
      </div>

      {/* // page 4 bg-purple-400*/}

      <div className="w-full relative min-h-screen ">
        {/* {data[5].map((canvasdets, index) => ( 
          <Canvas key={index} details={canvasdets} />
        ))} */}
        <div class="w-full min-h-screen px-20 py-20 ">
          <div class="max-w-4xl mx-auto flex flex-col gap-10">
            <div class="flex items-center gap-3 text-sm tracking-widest">
              <span>03</span>
              <span class="block w-12 h-[1px] bg-black/50"></span>
              <span>HOW WE GIVE BACK</span>
            </div>
            <p class="text-[32px] leading-snug font-medium">
              At Chillies, we recognize that our industry can perpetuate harm.
              We believe we have to try and reverse some of these imbalances.
              That’s why we’re launching SS36, our local social sustainability
              hub.
            </p>

            <p class="text-[32px] leading-snug font-medium">
              Through SS36, we reinvest some of our revenue and expertise into
              the communities that shape the culture and trends our field so
              heavily relies on. Our main focus is on bridging gaps for those
              affected by systemic obstacles related to race, sexuality, wealth,
              and gender identity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
