import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css"; // Import the CSS file
import blog123 from '../assests/blog.jpeg'
// Custom Previous Arrow
// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <button 
//       className={`custom-arrow prev-arrow ${className}`} 
//       style={{ ...style }} 
//       onClick={onClick}
//     >
//       ❮
//     </button>
//   );
// };

// Custom Next Arrow
// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <button 
//       className={`custom-arrow next-arrow ${className}`} 
//       style={{ ...style }} 
//       onClick={onClick}
//     >
//       ❯
//     </button>
//   );
// };

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    // prevArrow: <PrevArrow />, // Custom left arrow
    // nextArrow: <NextArrow />, // Custom right arrow
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="main-container-blog" id='blog'>
      <h2 className="main-heading">From The Blog</h2>
      <p className="sub-heading">Discover the latest insights, tips, and updates from our experts.</p>

      <div className="slider-container">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="card">
              <div className="card-header">
                <img src={d.img} alt={d.name} className="card-img"/>
              </div>
              <div className="card-body">
                <p className="card-name">{d.name}</p>
                <p className="card-review">{d.review}</p>
                <button className="card-button">Read More</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const data = [
  {
    name: "How professional and skill development training is crucial for enhancing one’s employability.",
    img: blog123,
    review: "Skills and knowledge are the engines of economic growth and social development ..."
  },
  {
    name: "Human Development as a Concept.",
    img: blog123,
    review: "Every action we take is the result of the way we communicate to ourselves..."
  },
  {
    name: "Teaching is Dead, Long Live the Teacher",
    img: blog123,
    review: "With 15 months of campuses being closed and online learning being pursued..."
  },
  {
    name: "The Future of Learning",
    img:blog123,
    review: "How digital transformation is changing the way we learn..."
  },
  {
    name: "Embracing AI in Education",
    img: blog123,
    review: "AI is transforming the education sector like never before..."
  },
  {
    name: "The Role of Soft Skills",
    img: blog123,
    review: "Technical skills are important, but soft skills are equally valuable..."
  }
  
];

export default Blog;
