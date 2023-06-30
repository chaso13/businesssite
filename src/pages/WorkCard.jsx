import React from 'react'

export default function WorkCard() {
    return (
        <div className="w-full p-2.5">
            <div className="h-[250px] bg-[#5F2EEF] ">

            </div>
            <div className="h-[155.195px] p-[20px]">
                <a href="#" className="text-black ">
                    <div>
                        <h3>
                            site title
                        </h3>
                        <div className="mt-[20px]">
                            <span>Reinventing the digital presence of a PNW based insurance brokerage.</span>
                        </div>
                        <div className="flex flex-row mt-[20px]">
                        <div className="bg-clip-text bg-[0%] hover:bg-[100%] " style={{ backgroundSize: '200% 100%', backgroundImage: 'linear-gradient(to right, #EC4176, #EC4176 50%, #141414 50%)', overflow: 'hidden',  transition: 'all .2s ease' }}>
                                take a look
                            </div>
                            <div>
                                take a look
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}