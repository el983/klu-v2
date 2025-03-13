import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css"; // Import the CSS file
import pdf from "../assests/highpdf.pdf"
import blog123 from '../assests/blog.jpeg';
import towards from '../assests/towards.webp'
import digital from '../assests/digital.webp'
import dead from '../assests/dead.webp'
import how from '../assests/how.jpg'
import higher from '../assests/higher.png'
// Blog data (placed before the component)
const data = [
  {
    name: "How professional and skill development training is crucial for enhancing one’s employability.",
    img: how,
    review: "Skills and knowledge are the engines of economic growth and social development ...",
    link: "https://adamasuniversity.ac.in/author/joyc/",
  },
  {
    name: "Human Development as a Concept.",
    img: blog123,
    review: "Every action we take is the result of the way we communicate to ourselves...",
    link: "https://adamasuniversity.ac.in/the-central-concept-of-human-development-leadership/"
  },
  {
    name: "Teaching is Dead, Long Live the Teacher",
    img: dead,
    review: "With 15 months of campuses being closed and online learning being pursued...",
    link: "https://www.outlookbusiness.com/education/teaching-is-dead-long-live-the-teacher-7934"
  },
  {
    name: "Media Education of Today & Tomorrow",
    img: blog123,
    review: "The annual media business event, FICCI Frames in Mumbai comes out with a status report...",
    link: "https://medium.com/@ukcglobal/media-education-of-today-tomorrow-1dcee91eb5f"
  },
  {
    name: "Digital is being reborn almost every day...",
    img:digital,
    review:"The small handheld screen is taking the bigger tele-screen by the horns...",
    link: "https://www.afaqs.com/news/guest-article/53765_developing-media-skills-in-a-digital-world"
  },
  {
    name: "Towards Participative Learning",
    img: towards,
    review: "Education will now move from a system-imposed disciplined endeavor...",
    link: "https://www.outlookbusiness.com/education/towards-participative-learning-for-engagement-evaluation-7967"
  },
  {
    name: "Higher Emotional Intelligence in Blended Learning",
    img: higher,
    review: "Emotions are very complex state of mind and body...",
    link:pdf
  }
];

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
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
    <div className="main-container-blog" id="blog">
      <h2 className="main-heading">From The Blog</h2>
      <p className="sub-heading">Discover the latest insights, tips, and updates from our experts.</p>

      <div className="slider-container">
        <Slider {...settings}>
          {data.map((d, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <img src={d.img} alt={d.name} className="card-img"/>
              </div>
              <div className="card-body">
                <p className="card-name">{d.name}</p>
                <p className="card-review">{d.review}</p>
                <a href={d.link} target="_blank" rel="noopener noreferrer" className="card-link">
  Read More
</a>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
