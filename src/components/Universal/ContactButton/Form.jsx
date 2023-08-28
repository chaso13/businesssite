import React, { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
    })

    const { name, email, phone, website, message } = formData


    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()

        const userData = {
            name,
            email,
            phone,
            website,
            message
        }

    }
  return (
    <section id="section-6-381" >
        <div class="ct-section-inner-wrap  py-[30px] bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
                <div id="div_block-14-381" class=" p-[20px] ">
                    <div id="shortcode-15-381" class="">
                        <div class="flex flex-wrap -mx-3 mb-6" >
                            <form onSubmit={onSubmit} className="">
                                <div class="frm_form_fields ">

                                        <div className="">
                                            <div className="flex flex-row w-[100%]">
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                                                    <label className="block text-gray-700 text-sm font-bold mb-2">
                                                        Name <span className="" aria-hidden="true">*</span>
                                                    </label>
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        name="name"
                                                        value={name}
                                                        placeholder="What's your name?"
                                                        data-reqmsg="This field cannot be blank."
                                                        aria-required="true"
                                                        data-invmsg="Text is invalid"
                                                        aria-invalid="false"
                                                    />
                                                </div>
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0  ">
                                                    <label for="field_1l11w" id="field_1l11w_label" class="block text-gray-700 text-sm font-bold mb-2">
                                                        Email
                                                        <span class="frm_required" aria-hidden="true">*</span>
                                                    </label>
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        type="email"
                                                        name="email"
                                                        value={email}
                                                        placeholder="Email address?"
                                                        data-reqmsg="This field cannot be blank."
                                                        aria-required="true"
                                                        data-invmsg="Email is invalid"
                                                        aria-invalid="false"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-row">
                                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                                                    <label for="field_30tzg" id="field_30tzg_label" class="block text-gray-700 text-sm font-bold mb-2">Phone Number
                                                        <span class="frm_required" aria-hidden="true"></span>
                                                    </label>
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        id="field_30tzg"
                                                        name="item_meta[8]"
                                                        value=""
                                                        placeholder="Phone number?"
                                                        data-invmsg="Phone is invalid"
                                                        aria-invalid="false"
                                                    />


                                                </div>
                                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
                                                    <label for="field_re7x0" id="field_re7x0_label" class="block text-gray-700 text-sm font-bold mb-2">
                                                        Website
                                                        <span class="frm_required" aria-hidden="true"></span>
                                                    </label>
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        type="text"
                                                        id="field_re7x0"
                                                        name="website"
                                                        value={website}
                                                        placeholder="Current site?"
                                                        data-invmsg="Text is invalid"
                                                        aria-invalid="false"
                                                    />


                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3 mb-6 ">
                                                <div id="" class=" w-full px-3 ">
                                                    <label for="field_9jv0r12" id="field_9jv0r12_label" class="block text-gray-700 text-sm font-bold mb-2">Message
                                                        <span class="frm_required" aria-hidden="true"></span>
                                                    </label>
                                                    <textarea
                                                        className=" ml-[20px] mt-[10px] border-b-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        name="message"
                                                        value={message}
                                                        id="field_9jv0r12"
                                                        rows="5"
                                                        placeholder="How can we help?"
                                                        data-invmsg="Message is invalid"
                                                        aria-invalid="false"
                                                    />
                                                </div>
                                            </div>
                                            <div class="frm_submit pt-[30px] pl-[65%]">
                                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                                    Send Message &gt;&gt;
                                                </button>
                                            </div>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div id="div_block-16-381" class="ct-div-block bigleftcircle motion-medium" style={{ translate: 'none', rotate: 'none', scale: 'none', transition: 'unset', transform: 'translate(1.26%, -1.26%) translate3d(0px, 0px, 0px)' }}></div>
    </section>
  )
}
