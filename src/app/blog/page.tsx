"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from 'next/head'
import { useParams } from "next/navigation";
// import { Helmet } from "react-helmet";


interface BlogItem {
  id: number;
  cover_image: string;
  title: string;
  category_name: string;
  created_at: string;
  description: string;
  slug: string;
}
export default function Page() {

  const [blog, setBlog] = useState<BlogItem[]>([]);

  async function blogData() {
    const res = await fetch("https://tradable.codeandgrow.net/api/api-get-blog-list?category_id=");
    const data = await res.json();
    setBlog(data.getBlogList);
  }
  useEffect(() => {
    blogData();
  }, []);


  const imageUrl = "https://tradable.codeandgrow.net/uploads/all-images";
  const title = 'Trade:able- Blog';
  const description = "This is a Tradeable Blog Page "
  return (
    <>
   


      <div id="root" className="bg-black">
        <section className="banner-part banner-about pb-1 pt-7">
          <div className="Blog_content px-3">
            <h2 className="banner-subtitle-team title-other font-size-large py-3">
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

          <div className="container mb-3">
            <div className="row">
              {blog ? (
                blog.map((blog_list) => (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 py-2"
                    id="Blog-card"
                    key={blog_list.id}
                  >
                    <div className="card-blog">
                      <Image
                        className="card-img-top"
                        src={`${imageUrl}/${blog_list.cover_image}`}
                         alt="Card image cap"
                        height={500}
                        width={1000}
                      />
                      <div className="card-body-blog">
                        <h5 className="card-title-blog ">
                          {blog_list.title}
                        </h5>
                        <div className="blog_list_time d-flex justify-content-between">
                          <h6 className="py-3 text-light">{blog_list.category_name}</h6>
                          <h6 className="py-3 text-light">{blog_list.created_at}</h6>
                        </div>
                        <p className="card-text-blog">
                          {blog_list.description.slice(0, 200) + "...."}
                        </p>
                          <Link
                            href={`/blog-details/${blog_list.slug}`}
                            className="btn btn-outline-success my-2"
                          >
                            <span>Read More</span>
                          </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="not-found-traits">
                  <h1 className="not-found-traits">Record not found</h1>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>

  );

}
