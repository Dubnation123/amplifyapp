import React from "react"
import Layout from "../components/layout"
import scrollTo from 'gatsby-plugin-smoothscroll';
import bigPic from "../images/wallpaper.png";

const index = () => (
  <Layout>
    <div>
      <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        Let's build a website!
      </p>
      <div>
        <button onClick={() => scrollTo('#d')}>My link</button>
      </div>

      <div id={"d"}>
        Hello
      </div>
    </div>
  </Layout>
)

export default index;