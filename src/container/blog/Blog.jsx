import React from "react";
import "./blog.scss";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";

const Blog = () => (
  <div className="blogSection">
    <div className="container">
      <div className="mainHeading">FROM THE BLOG</div>
      <div className="blogTxt">
        On our blog you’ll get a chance to learn a bit more about the people and
        ideas behind The Explorer. More importantly, you’ll get a chance to meet
        the local guides, as they pop in frequently to offer travel tips for
        their cities and towns. Want to know the Top 5 things to do in Kyoto,
        according to a local? Or where to eat in Rome? The real people in the
        know are here to provide you with up-to-the-minute suggestions.
      </div>

      <div className="row mt-5 mb-5">
        <div className="col-md-4">
          <div className="blogImages">
            <img src={blog1} alt="" />
          </div>
          <div className="blogCardInfo">
            <h3>Pakistan's Best Places for Fall Foliage</h3>
            <p className="post-date">Dec 14, 2022</p>
            <a className="read-more">Read More</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blogImages">
            <img src={blog2} alt="" />
          </div>
          <div className="blogCardInfo">
            <h3>Pakistan's Best Places for Fall Foliage</h3>
            <p className="post-date">Dec 14, 2022</p>
            <a className="read-more">Read More</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blogImages">
            <img src={blog3} alt="" />
          </div>
          <div className="blogCardInfo">
            <h3>Pakistan's Best Places for Fall Foliage</h3>
            <p className="post-date">Dec 14, 2022</p>
            <a className="read-more">Read More</a>
          </div>
        </div>
      </div>
      <div className="blogBtn">
        <button>View All Blog Posts</button>
      </div>
    </div>
  </div>
);

export default Blog;
