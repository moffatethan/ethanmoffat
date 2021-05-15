import React from 'react'
import client from '../apollo-client'

import { DarkModeToggle } from '../components/darkModeToggle'
import { Header } from '../components/header'
import { Showcase } from '../components/showcase'
import About from '../components/about'
import Quote from '../components/quote'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Head from 'next/head'
import gql from 'graphql-tag'


export default function Home({ posts, projects }) {
  return (
    <>
      <Head>
        <title>Ethan Moffat | Software Developer</title>
      </Head>
      <div className="dark:bg-gray-700 transition">
        <DarkModeToggle />
        <Header posts={posts} />
        <Showcase projects={projects} />
        <Quote />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query BlogPostsAndProjects {
        projectCollection(limit: 4) {
          items {
            description,
            isConcept,
            metadata,
            title,
            projectImage {
              url
            },
            projectLogo {
              url
            }
          }
        },
        blogPostCollection(limit: 3) {
          items {
            title,
            publishDate,
            description,
            bodyContent {
              json
            },
            postImage {
              url
            }
          }
        }
      }
    `
  }) 
  const { items } = data.blogPostCollection
  console.log(items)
  const projectItems = data.projectCollection.items
  return {
    props: {
      posts: items,
      projects: projectItems
    }
  }
}
