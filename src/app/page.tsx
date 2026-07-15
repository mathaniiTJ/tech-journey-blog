import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = 'https://media.wired.com/photos/688260ef4f088f314b8487bc/master/w_1920,c_limit/Paramount-South-Park-Problem-Culture-TCDSOPA_EC204.jpg';

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div className="space-y-6">
        <section className="rounded-3xl border border-yellow-200 bg-[#fff8d6] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)]">
          <p className={'prose max-w-none text-[#3b2f2f]'}>
            Hey I&apos;m mathani. This is my site.
          </p>
          <div className={'my-4'}>
            <i>
              Check out the repo{' '}
                <Link href={'https://github.com/ludu12/tech-journey-blog'}>
                  <button className={'btn btn-sm btn-primary'}>
                      <span className={'text-primary-content'}>
                        here
                      </span>
                  </button>
                </Link>
            </i>
          </div>
        </section>

        <div className={'my-4 overflow-hidden rounded-3xl border border-yellow-200 shadow-[0_12px_35px_rgba(0,0,0,0.28)]'}>
          <Image className={'w-full object-cover'} src={imageUrl} alt={'My Image'} width={800}
                 height={320}/>
        </div>

        <section className={'prose max-w-none rounded-3xl border border-yellow-200 bg-[#fffef7] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.22)] text-[#3b2f2f]'}>
          <h2 className="!text-[#f59e0b]">Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`} className="text-[#3b2f2f] hover:text-[#f59e0b]">{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
