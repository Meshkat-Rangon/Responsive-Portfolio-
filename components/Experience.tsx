import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { ecg, sdis, dps,sam } from '../public/asset'

const Experience = () => {
  return (
    <section id='experience' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>


  <SectionTitle title='My Experience'/>

  <div className='flex flex-col lg:flex-row gap-16'>
<div className=' w-full lg:w-2/3 text-justify text-sm text-slate-400'>
<h1 className=' text-2xl hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>From Dec-2022 to Feb-2023</h1>

    <p className=' hover:text-black hover:translate-x-2 transition-all duration-300'>
Manage, monitor Google admin console as a Super admin.
Provide users organizational email ID and configure user with
data for attendance system.
HIKVISION DVR management.
Operation of organizations ERP portal as a super admin.
Manage organizations website with WordPress CMS.
Analysing requirement for the organizations ERP system and deployment on cloud.
network printer photocopy machine and bar-code scanner issues.
Network operations for LAN trouble shooting.

    </p>

</div>
<div className=' w-full lg:w-1/3  relative group justify-center'>
    
            <Image
            className=' rounded-lg h-full object-cover hover:translate-x-2 transition-all duration-300'
            src={sdis}
            alt='sdis'
           
            />
            <h1 className='hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>Senior Executive, IT</h1>
</div>

</div>


<div className='flex flex-col lg:flex-row gap-16'>




<div className=' w-full lg:w-1/3  relative group'>
    
    <Image
    className=' rounded-lg h-full object-cover hover:translate-x-2 transition-all duration-300'
    src={ecg}
    alt='ecg'
    />
     <h1 className='hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>Executive, IT</h1>
</div>
<div className=' w-full lg:w-2/3 text-justify text-sm text-slate-400'>
<h1 className='text-2xl hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>East Coast Group, From Aug 2021-Nov-2022</h1>
    <p className=' hover:text-black hover:translate-x-2 transition-all duration-300'>
Smooth operation of organizations IT infrastructure.
Troubleshoot LAN and WAN issues.
Management and maintain of printer and photocopy machines .
Involved with any new installation of the company organogram.
Vendor communication and IT purchase.
Troubleshoot factory side IT issues remotely or by physical visit.
Unify Access point management.
    </p>

</div>


</div>



<div className='flex flex-col lg:flex-row gap-16'>
<div className=' w-full lg:w-2/3 text-justify text-sm text-slate-400'>
<h1 className=' text-2xl hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>Delhi Public School</h1>
<h1 className='hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>From Apr-2020-Jul-2021</h1>

    <p className=' hover:text-black hover:translate-x-2 transition-all duration-300'>
Manage, monitor Google admin console as a general admin.
Provide users organizational email ID and configure user with
data for attendance system.
HIKVISION DVR management.
Train up teachers and employees with modern education system.
Operation of organizations ERP portal as a super admin.
Manage organizations website with WordPress CMS.
Installing windows and Linux OS on different circumstances.
Elastix IP PBX dashboard monitoring and configure user
role for extension users.
Respond to inquiries and assist in troubleshooting and resolving
network printer photocopy machine and bar-code scanner issues.
Network operations for LAN trouble shooting.
Register all the computers with organization domain and apply
group policy for different OU.

    </p>

</div>
<div className=' w-full lg:w-1/3  relative group'>
    
            <Image
            className=' rounded-lg h-full object-cover hover:translate-x-2 transition-all duration-300'
            src={dps}
            alt='dps'
            />
             <h1 className='hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>Executive, IT</h1>
</div>

</div>

<div className='flex flex-col lg:flex-row gap-8'>




<div className=' w-full lg:w-1/3  relative group'>
    
    <Image
    className=' rounded-lg h-full object-cover hover:translate-x-2 transition-all duration-300'
    src={sam}
    alt='sam'
    />
     <h1 className='hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>System Support Engineer(NOC)</h1>
</div>
<div className=' w-full lg:w-2/3 text-justify text-sm text-slate-400'>
<h1 className='text-2xl hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>Sam Solution Limited</h1>
<h1 className='hover:translate-x-2 transition-all duration-300 text-white hover:text-black  '>From Apr-2019-Mar-2020</h1>
    <p className=' hover:text-black hover:translate-x-2 transition-all duration-300'>
Manage, monitor and install VPN systems on client end via
management portal system.
Installation and troubleshooting of Its equipment’s like Mikrotik
router, Network Printer Operating systems .
Install, configure, IPPBX server on client end..
Network configuration of Din star/GOIP/SKYLINE other VOIP
gateways.
Provide 2nd and 3rd level support.
Network operations for LAN/WAN and trouble shooting.
    </p>

</div>


</div>




    </section>
  )
}

export default Experience