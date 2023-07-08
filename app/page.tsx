import React from 'react'
import { Job } from '@/components'
import { getJobs } from '@/firebase/db/jobs';

export default async function Home() {
  const jobs = await getJobs();

  return (
    <main className='px-6 md:px-8 py-6'>
      <section className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-screen-xl mx-auto gap-6'>
        {jobs.map(job => (
          <Job {...job} key={job.id}/>
        ))}
      </section>
      <div className="h-[4000px]"></div>
      <span>{new Date().getTime()}</span>
    </main> 
  )
}