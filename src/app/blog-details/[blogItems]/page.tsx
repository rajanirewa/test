'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image';
// import { Helmet } from 'react-helmet'


interface BlogDetails {
  id: number;
  cover_image: string;
  title: string;
  category_name: string;
  created_at: string;
  description: string;
  slug: string;
}

export default function Page() {

  const [blog, setBlog] = useState<BlogDetails | null>(null)
  const params = useParams();
  const slug = params.blogItems;


  async function blogData() {
    const res = await fetch('https://tradable.codeandgrow.net/api/api-get-blog-info?blog_slug=' + slug)
    const data = await res.json()
    setBlog(data.blogInfo)
  }
  useEffect(() => {
    blogData()
  }, [])
  const imageUrl = "https://tradable.codeandgrow.net/uploads/all-images/";
  return (
    <>
      
      <div id="root" className="bg-black">
        <section className="banner-part banner-about pb-1 pt-7">
          <div className="Blog_content px-3">
            <h2 className="banner-subtitle-team title-other font-size-large">
              Our Blog
            </h2>
            <p className="text-center about-text pt-6 pb-6">
              Trade:able aims to be a thought leader in a world where passive
              listening is chosen over active learning.
              <br />
              With our gaming based learning approach, you can practice your
              skills, anytime, anywhere!
            </p>
          </div>

          <div className="container mb-5">
            <div className="row">
              <div className="col-md-12">
                {blog && (
                  <div className="card bg-transparent rounded-0 border-0">
                    <div className="card-body-title px-3">
                      <Image src={`${imageUrl}/${blog.cover_image}`} className='blog-item-image img-fluid' alt="" height={500} width={500} />
                      <h1 className="card-title text-light blog-about">
                        {blog.title}
                      </h1>

                      <div className="Dates d-flex ">
                        <h6 className="start-date text-light">
                          <span className="d-flex">

                            {blog.created_at}
                          </span>
                        </h6>
                      </div>
                    </div>
                    <div className="card-body mt-5" >
                      <p className="card-text" >
                        {blog.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>






            </div>
          </div>




        </section>
      </div>
    </>

  )
}
