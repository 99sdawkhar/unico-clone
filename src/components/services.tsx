import { services } from '@/constants/services'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <section className='pt-14 pb-16'>
        <div className='wrapper'>
            <span className='mb-3 inline-block text-sm uppercase text-[#101010] font-medium'>SERVICES</span>
            <h3 className='mb-12 text-3xl font-semibold text-[#1a8ef7]'>The &nbsp; 
                <span className='line-through'>Unique</span> Unico Approach</h3>
                <ul className='flex gap-5 flex-col lg:flex-row'>
                    {Array.isArray(services) && services.length > 0 && services.map((service, i) => (
                        <li key={i} className={`group text-base font-normal px-5 pt-2.5 pb-10 text-center lg:text-left md:hover:!bg-black md:hover:text-white`} style={{
                            backgroundColor: service.color
                        }}>
                            <figure className='mb-5 md:mb-10'>
                                <Image className='inline-block rounded-full ring-2 ring-white' src={service.image} width={90} height={90} alt={''} />
                            </figure>
                            <h4 className='mb-4 md:mb-8 text-2xl font-medium'>{service.title}</h4>
                            <p className='mb-[35px] md:mb-[70px]'>{service.desc}</p>
                            <Link href={service.link} className='text-base font-normal inline-block uppercase px-5 py-3.5 bg-black text-white md:group-hover:bg-sky-600'>know more</Link>
                        </li>
                    ))}
                </ul>
        </div>
    </section>
  )
}

export default Services