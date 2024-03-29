import { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useRef } from 'react'
import IconText from '../components/IconText'

import {
    FaAt,
    FaFilePdf,
    FaMapPin,
    FaPhone,
} from 'react-icons/fa'
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa'
import { isValidForm } from '../utils/validators'
import { formData } from '../utils/interfaces'
import { sendEmail } from '../utils/email'
import { successToast } from '../utils/toasts'

const Contact: NextPage = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const subjectRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const formData: formData = {
            name: nameRef.current!.value,
            email: emailRef.current!.value,
            subject: subjectRef.current!.value,
            message: messageRef.current!.value,
        }
        if (isValidForm(formData)) {
            sendEmail(formData)
            successToast('Email sent!')
        }
    }

    return (
        <main className='page pt-[20px] lg:flex-row lg:justify-evenly lg:pt-0 '>
            <Head>
                <title>tcloma.dev | Contact</title>
            </Head>
            <section className='half-section gap-4 bg-dBg'>
                <h1 className='text-5xl font-semibold text-dCyan'> Contact Me </h1>
                <form className='relative flex w-[85%] flex-col gap-4 text-black lg:w-auto'>
                    <div className='flex flex-row gap-3'>
                        <input
                            className='input-field w-1/2'
                            placeholder='Name'
                            ref={nameRef}
                        />
                        <input
                            className='input-field w-1/2'
                            placeholder='Email'
                            ref={emailRef}
                        />
                    </div>
                    <input
                        className='input-field'
                        placeholder='Subject'
                        ref={subjectRef}
                    />
                    <textarea
                        className='input-field min-h-[20rem]'
                        placeholder='Message'
                        ref={messageRef}
                    />
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className='w-full rounded-md bg-dCyan p-4 text-dBg'
                    >
                        Submit
                    </button>
                </form>
            </section>

            <section className='half-section gap-4 bg-dOffBg'>
                <IconText
                    icon={<FaMapPin />}
                    text='New York, NY'
                />
                <IconText
                    icon={<FaAt />}
                    text='tyrone.cloma0219@gmail.com'
                />
                <IconText
                    icon={<FaFilePdf />}
                    text='Resume'
                    onClick={() => window.open('/data/Tyrone_Cloma_Resume.pdf')}
                />
                <div className='flex w-[20rem] flex-row justify-between rounded-md text-dBg'>
                    <div
                        onClick={() => window.open('https://github.com/tcloma')}
                        className='social-btn'
                    >
                        <FaGithub />
                    </div>
                    <div
                        onClick={() =>
                            window.open('https://www.linkedin.com/in/tyronecloma/')
                        }
                        className='social-btn'
                    >
                        <FaLinkedin />
                    </div>
                    <div
                        onClick={() => window.open('https://twitter.com/TClomaDev')}
                        className='social-btn'
                    >
                        <FaTwitter />
                    </div>
                    <div
                        onClick={() =>
                            window.open(
                                'https://www.youtube.com/channel/UC3If51Uhyyqg4WbN8QrUulw/featured'
                            )
                        }
                        className='social-btn'
                    >
                        <FaYoutube />
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Contact
