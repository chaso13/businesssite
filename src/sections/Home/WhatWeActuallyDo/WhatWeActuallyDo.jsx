import React from 'react'
import { row_one, row_two } from './constants'

import loadable from '@loadable/component'
const WhatWeDoCard = loadable(() => import('../../../components/Home/WhatWeDo/WhatWeDoCard'))

export default function WhatWeActuallyDo() {
    return (
        <section className="">
            <div className="pt-[20px] pb-[90px]">
                <div className="px-[40px] pt-[120px] pb-[20px]">
                    <div className="">
                        <div className="">
                            <h2 id="headline-116-119" class="ct-headline h2">
                                What we actually do
                            </h2>
                            <div id="div_block-117-119" class="ct-div-block preheadred"></div>
                        </div>
                        <div id="text_block-118-119" class="ct-text-block">
                            At Thrive, we know that simply designing a nice website isn't enough to get you the results you want.&nbsp;
                        </div>
                    </div>
                    <div className="pt-[20px] pb-[120px] px-[40px] ">
                        <div className="md:w-[80%] w-[100%] mx-auto mt-[40px] grid md:grid-cols-3 grid-cols-1">
                            {
                                row_one.map((item, index) => (
                                    <WhatWeDoCard data={item} key={index} />
                                ))
                            }
                        </div>
                        <div className="md:w-[80%] w-[100%] mx-auto mt-[40px] grid md:grid-cols-3 grid-cols-1">
                            {
                                row_two.map((item, index) => (
                                    <WhatWeDoCard data={item} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}