import React from "react";
import blogs from "../css/blogs.css";
import blog1 from "../img/blog1.jpeg";
import blog2 from "../img/blog2.jpeg";
import blog3 from "../img/blog3.jpeg";
import bloguser1 from "../img/bloguser1.png";
import bloguser2 from "../img/bloguser2.png";
import bloguser3 from "../img/bloguser3.png";
import bloguser4 from "../img/bloguser4.png";
import date from "../img/date.png";
import locate2 from "../img/locate2.png";
import dots from "../img/dots.png";
import downarrow from "../img/downarrow.png";
import { FaPencilAlt , FaBook , FaCalendarAlt, FaLaptop , FaAngleDown , FaUsersCog, FaShareAltSquare} from "react-icons/fa";

const Blogs = () => {
  return (
    <div className="blogs" >
            <div className="blogs-head">
                <div className="blogs-tabs">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                        <a class="nav-link active" href="#">
                            All Posts(32)
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            Article
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            Event
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            Education
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                            Jobs
                        </a>
                        </li>
                    </ul>
                </div>

                    <div className="blogs-btn">
                            <button type="button" class="btn btn-light">
                                Write A Post  <FaAngleDown/>
                            </button>
                            <button type="button" class="btn btn-info  ml-3">
                                Join Group <FaUsersCog/>
                            </button>
                    </div>
            </div>

            <div className="mobile-blog-nav">
                <h4>Posts(368)</h4>
                <button type="button" class="btn btn-light">Filter  <img src= {downarrow} alt="" /></button>
            </div>

   <div className="blog">
      <div className="blog-box">
          <img className="blog-box-img" src={blog1} alt="" />
             <div className="blog-content">
                        <h6> <FaPencilAlt /> Article</h6>
                        {/* <FaUserAlt /> */}
                        <h5 className="blog-content-h5">What if famous brands had regular fonts? Meet regulaBrands! <img src={dots} alt="" /></h5>
                        <p className="blog-text">
                        I've worked in Ux for the better part of a decade, From now on, I
                        plan to rei.....
                        </p>
                <div className="blog-admin">
                        <div className="blog-admin1">
                            <img
                            className="blog-icon bloguser"
                            src={bloguser1}
                            />
                            <h6>Sarthak Kamra</h6>
                        </div>
                        <div className="blog-admin2">
                            <p>1.4k Views</p>
                            <FaShareAltSquare/>
                        </div>
                </div>
          
             </div>
        </div>

{/* 2 blog box */}
<div className="blog-box">
          <img className="blog-box-img" src={blog2} alt="" />
             <div className="blog-content">
                        <h6> <FaBook/>Education</h6>
                        <h5 className="blog-content-h5">Tax Benefits for Investment under National Pension Scheme launched by Government <img src={dots} alt="" /></h5>
                        <p className="blog-text">
                        I've worked in Ux for the better part of a decade, From now on, I
                        plan to rei.....
                        </p>
                <div className="blog-admin">
                        <div className="blog-admin1">
                        <img
                            className="blog-icon bloguser"
                            src={bloguser2}
                            />
                            <h6>Sarah West</h6>
                        </div>
                        <div className="blog-admin2">
                            <p>1.4k Views</p>

                            <FaShareAltSquare/>
                        </div>
                </div>
          
             </div>
        </div>

        {/* 3 blog box */}
        <div className="blog-box">
          <img className="blog-box-img" src={blog3} alt="" />
             <div className="blog-content">
                        <h6> <FaCalendarAlt />Meetup</h6>
                        <div className="blog-content-and-dropdown">
                            <div>
                                <h5>Finance & Investment Elite Social Mixer @LUjiazui</h5>
                            </div>
                            <div class="btn-group">
                                <h3>...</h3> 
                            </div>
                         
                        </div>
                            <div className="finance-details">
                                <h6><img src={date} alt="" /> Fri,12 Oct, 2018</h6>
                                <h6><img src={locate2} alt="" /> Ahmedabad,India</h6>
                                <div className="dropdown-details" >
                                        <a class="dropdown-item" href="#">Edit</a>
                                        <a class="dropdown-item" href="#"> Report</a>
                                        <a class="dropdown-item" href="#">Option 3</a>
                                    
                                    </div>
                            </div>
                            <div class="span9 btn-block color-g">
                                <button class="btn btn-large btn-block" type="button">Visit Website</button>
                            </div>
                        
                <div className="blog-admin">
                        <div className="blog-admin1">
                        <img
                            className="blog-icon bloguser"
                            src={bloguser3}
                            />
                            <h6>Ronal Jones</h6>
                        </div>
                        <div className="blog-admin2">
                            <p>1.4k Views</p>

                            <FaShareAltSquare/>
                        </div>
                </div>
          
             </div>
        </div>

      </div>
      {/* start div class */}

      {/* 4 box */}
        {/* 3 blog box */}
        <div className="blog-box">
             <div className="blog-content">
                        <h6><FaLaptop/>job</h6>
                        {/* <div className="blog-content-and-dropdown"> */}
                                <h5 className="blog-content-h5"> Software Developer <img src={dots} alt="" /></h5>                         
                        {/* </div> */}
                            <div className="finance-details">
                                <h6>Innovaccer Analytics Private Ltd.</h6>
                                <h6>Noida,India</h6>
                               
                            </div>
                            <div class="span9 btn-block">
                                <button class="btn btn-large btn-block" type="button">Apply on Times Job</button>
                            </div>
                        
                <div className="blog-admin">
                        <div className="blog-admin1">
                            <img
                            className="blog-icon bloguser"
                            src={bloguser4}
                            />
                            <h6> Joseph Gray</h6>
                        </div>
                        <div className="blog-admin2">
                            <p>1.4k Views</p>

                            <FaShareAltSquare/>
                        </div>

                </div>
          
             </div>
        </div>

       
      </div>
        // </div>
        );
    };

    export default Blogs;
    