import { useDisclosure } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import AddPodcast from './Modals/AddPodcast';

function NOPodcast() {
  const { isOpen, onOpen, onClose } = useDisclosure();
    let uplodeOption = [
        {
          name: "Youtube Vedio",
          Link: "/icons/youtube_icon.webp",
        },
        {
          name: "Spotify Podcast",
          Link: "/icons/spotify_icon.webp",
        },
        {
          name: "RSS Feed",
          Link: "/icons/ress_icon.webp",
        },
      ];

  return (
    <div>
      <h3 className="text-[#7E22CE] font-bold text-[40px] my-4 max-lg:my-2">Uplode</h3>
      <div className="grid grid-cols-3 gap-y-5 max-lg:gap-y-3 max-lg:grid-cols-2">
        {uplodeOption.map((card,ind) => (
          <div key={ind} onClick={onOpen}
            id="box-shadow"
            className="p-3 max-sm:p-1 max-sm:px-2 flex justify-self-center items-center gap-5 max-xl:gap-2 max-w-[300px] w-[90%]  rounded-lg font-bold max-sm:font-semibold max-sm:text-[12px] border-[1px] border-[gray]"
          >
            <Image
              className=""
              src={card.Link}
              alt="Example SVG"
              width={50}
              height={60}
            />
            <div>
              <p>Uplode</p>
              <p>{card.name}</p>
            </div>
          </div>
        ))}
        {uplodeOption.map((card,ind) => (
          <div key={ind}  onClick={onOpen}
            id="box-shadow"
            className="p-3 max-sm:p-1 max-sm:px-2 flex justify-self-center items-center gap-5 max-xl:gap-2 max-w-[300px] w-[90%] rounded-lg font-bold border-[1px] max-sm:font-semibold max-sm:text-[12px] border-[gray]"
          >
            <Image
              className=""
              src={card.Link}
              alt="Example SVG"
              width={50}
              height={60}
            />
            <div>
              <p>Uplode</p>
              <p>{card.name}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center my-5 max-lg:my-3 text-[gray] text-[30px]">or</p>
      <div className="border-dotted border-[2px] border-[gray] py-[20px] rounded-lg max-lg:pt-0">
        <svg
          width="128"
          height="129"
          className="m-auto"
          viewBox="0 0 128 129"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M103.2 54.4666C99.5733 36.0666 83.4133 22.2533 64 22.2533C48.5867 22.2533 35.2 31 28.5333 43.8C12.48 45.5066 0 59.1066 0 75.5866C0 93.24 14.3467 107.587 32 107.587H101.333C116.053 107.587 128 95.64 128 80.92C128 66.84 117.067 55.4266 103.2 54.4666ZM101.333 96.92H32C20.2133 96.92 10.6667 87.3733 10.6667 75.5866C10.6667 64.6533 18.8267 55.5333 29.6533 54.4133L35.36 53.8266L38.0267 48.76C43.0933 39 53.0133 32.92 64 32.92C77.9733 32.92 90.0267 42.84 92.7467 56.5466L94.3467 64.5466L102.507 65.1333C110.827 65.6666 117.333 72.6533 117.333 80.92C117.333 89.72 110.133 96.92 101.333 96.92ZM42.6667 70.2533H56.2667V86.2533H71.7333V70.2533H85.3333L64 48.92L42.6667 70.2533Z"
            fill="#7E22CE"
          />
        </svg>
        <p className="text-center font-semibold">Select a file or drag and drop here (Podcast Media or Transcription Text)</p>
        <p className="text-center text-[gray]">MP4, MOV, MP3, WAV, PDF, DOCX or TXT file</p>
        <button className="block m-auto border-purple-500 border-[2px] text-[#7E22CE] rounded-[20px] py-2 px-5 mt-2"> Select </button>
      </div>
      <AddPodcast isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default NOPodcast
