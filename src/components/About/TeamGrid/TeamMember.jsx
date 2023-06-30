import React from 'react'

export default function TeamMember() {
  return (
    <div className="flex flex-col items-center p-[20px] ">
        <h2 className="text-[42px] leading-[42px] font-crimsonPro">
            <span className="">
                noah
            </span>
        </h2>
        <div className="text-[22px] leading-[30.8px]">
            <span className="">
                Founder &amp; CEO
            </span>
        </div>
        <div className="my-[10px] ">
            <div className="h-[250px] w-[250px] grayscale rounded-full bg-[50%_0%] bg-cover" style={{ backgroundImage: 'url(https://thrive.design/wp-content/uploads/2022/03/Noah-removebg-preview-e1678246995471.png)' }}></div>
            <div className=""></div>
        </div>
        <div className="">
            <span className="leading-[25.2px] text-[18px] ">
                <p className="my-[18px] ">
                    Our head honcho Noah focuses on understanding the goals and problems
                    of our clients and proposing the appropriate solution. He's deeply
                    passionate about the tools, systems, and processes required to make
                    amazing things happen.
                </p>
            </span>
        </div>
    </div>
  )
}