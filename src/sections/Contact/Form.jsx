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
    <section id="section-6-381" class=" ct-section">
        <div class="ct-section-inner-wrap px-[40px] pb-[120px] ">
            <div id="new_columns-7-381" class="ct-new-columns grid grid-cols-2">
                <div id="div_block-8-381" class="ct-div-block py-[20px] pl-[20px] pr-[40px] h-[100%] ">
                    <div id="div_block-9-381" class="ct-div-block p-[40px] bg-black text-white ">
                        <div id="_rich_text-17-381" class="oxy-rich-text ">
                            <p>Call: <a class="reverse-link" href="tel:2064517326">(206) 451-7326</a>
                                <br />
                                Email: <a class="reverse-link" href="mailto:hello@thrive.design">hello@thrive.design</a>
                            </p>
                        </div>
                        <div id="text_block-11-381" class="ct-text-block mt-[20px] ">
                            For the best results, use this form to have the appropriate team members get in touch.
                            <br />
                        </div>
                        <div id="div_block-12-381" class="ct-div-block w-[60px] h-[60px] absolute ">
                            <div id="fancy_icon-13-381" class="ct-fancy-icon">
                                <svg id="svg-fancy_icon-13-381">
                                    <use xlink:href="#ThriveThemeFilesicon-Arrow"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div_block-14-381" class="ct-div-block p-[20px] ">
                    <div id="shortcode-15-381" class="ct-shortcode">
                        <div class="frm_forms " >
                            <form onSubmit={onSubmit} className="">
                                <div class="frm_form_fields ">

                                        <div className=" ">
                                            <div className="flex flex-row w-[100%]">
                                                <div className="flex flex-col w-[50%] mb-[30px] ">
                                                    <label className="">
                                                        Name <span className="" aria-hidden="true">*</span>
                                                    </label>
                                                    <input
                                                        className="px-[20px] py-[10px] ml-[20px] mt-[10px] border-b-2 border-black"
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
                                                <div className="flex flex-col w-[50%] mb-[30px] ">
                                                    <label for="field_1l11w" id="field_1l11w_label" class="frm_primary_label">
                                                        Email
                                                        <span class="frm_required" aria-hidden="true">*</span>
                                                    </label>
                                                    <input
                                                        className="px-[20px] py-[10px] ml-[20px] mt-[10px] border-b-2 border-black"
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
                                            <div className="flex flex-col w-[50%] mb-[30px] ">
                                                    <label for="field_30tzg" id="field_30tzg_label" class="frm_primary_label">Phone Number
                                                        <span class="frm_required" aria-hidden="true"></span>
                                                    </label>
                                                    <input
                                                        className="px-[20px] py-[10px] ml-[20px] mt-[10px] border-b-2 border-black"
                                                        type="text"
                                                        id="field_30tzg"
                                                        name="item_meta[8]"
                                                        value=""
                                                        placeholder="Phone number?"
                                                        data-invmsg="Phone is invalid"
                                                        aria-invalid="false"
                                                    />


                                                </div>
                                                <div className="flex flex-col w-[50%] mb-[30px] ">
                                                    <label for="field_re7x0" id="field_re7x0_label" class="frm_primary_label">
                                                        Website
                                                        <span class="frm_required" aria-hidden="true"></span>
                                                    </label>
                                                    <input
                                                        className="px-[20px] py-[10px] ml-[20px] mt-[10px] border-b-2 border-black"
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
                                            <div className="flex flex-row ">
                                                <div id="frm_field_5_container" class="frm_form_field form-field  frm_top_container frm_full flex flex-col w-[100%] ">
                                                    <label for="field_9jv0r12" id="field_9jv0r12_label" class="frm_primary_label">Message
                                                        <span class="frm_required" aria-hidden="true"></span>
                                                    </label>
                                                    <textarea
                                                        className="px-[20px] py-[10px] ml-[20px] mt-[10px] border-b-2 border-black"
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
                                            <div class="frm_submit">
                                                <button className="" type="submit">
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
        </div>
    </section>
  )
}
