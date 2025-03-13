import React, { useState } from 'react';
import './Services.css';
import Footer from './Footer';
import Blog from './Blog';
import Contact from './Contact';
import pic1 from '../assests/prof/p2.jpeg'
import pic2 from '../assests/prof/p1.jpg'
import pic3 from '../assests/prof/p3.jpg'
import pic4 from '../assests/prof/p4.jpg'
import pic5 from '../assests/prof/p6.jpg'
import pic6 from '../assests/prof/p5.jpg'
import Video from './Video';

const teamMembers = [
  { id: 1, name: 'Prof. Joy Chowdhury', role: 'Managing Director and CEO', image: pic1, description: 'Prof. Joy Chowdhury is the Managing Director and CEO of Kairos Learning Universe. He is an eminent Learning and development professional, a motivator, and an emotional intelligence Coach. He has interacted, imparted and managed inter-disciplinary training for multiple clients across the globe. His professional stint encompasses a variety of Corporates and Academic Institutions as Vice President and Directorship. He has been awarded Icon of India by Business Talkz in 2024. A Guest Lecturer with multiple universities across Europe and India. Had been an integral part and led teams on educational projects and global knowledge transition. Innovative and experienced strategic leader with expertise in project management and creative problem-solving. Skilled in managing complex training, educational and knowledge management projects and innovative solution development. Committed to creating engaging and meaningful content for learners. A well-acclaimed motivational speaker and author. He is an experienced thought leader with expertise in project management and creative problem-solving. Skilled in project coordination, training management and innovative solution development. Detail-oriented team player with strong organizational skills. Ability to handle multiple projects simultaneously with a high degree of accuracy.', social: { facebook: '#', twitter: '#', google: '#' }
 },
  { id: 2, name: 'Prof. Ujjwal Anu Chowdhury', role: 'Mentor & Chairman', image: pic2, description: 'Prof Ujjwal Anu Chowdhury is the Mentor & Chairman of Kairos Learning Universe. Prof UKC, as he is lovingly called, is currently the Director General of Mumbai based Management School of Events, Entertainment and Design (MSEED), and has been till December, 2024, the Vice President, Global Marketing, International Relations, and Media-Design Education of Washington University of Science and Technology, based out of Virginia. He was earlier the Pro Vice Chancellor of Kolkata based Adamas University, Dean of Symbiosis and Amity Universities, Pearl Academy and Whistling Woods International, all of India. He had been Dean of the Amsterdam Film School and Strategic Adviser of Daffodil International University of Bangladesh. He had worked in the World Health Organization, Times of India Group, Zee News and Business World. He runs a school for the talented children of marginalized fishermen families in the Sundarban area of Bengal and Bangladesh borde', social: { facebook: '#', twitter: '#', google: '#' } 
},
{
  id: 3,
  name: 'Manuel Fernandes',
  role: 'HR Advisor and Mentor',
  image: pic3,
  description: `
    Manuel's career spans over 3 decades as a leader. 
    He is widely known to improve the bottom line of organizations. 
    He has set multiple green field projects, enhanced scalability, 
    and created an employer brand. 

    Manuel has worked with small, medium, and large organizations Globally.
    • Manuel's experience spans a multitude of industry domains 
    • Manuel has an MBA in Strategy & HR from Institute of Public Enterprise (IPE). 
    • Manuel possesses a transformational leadership style and is a strong people's person with good interpersonal skills.
  `,
  social: { facebook: '#', twitter: '#', google: '#' }
},

{
  id: 4,
  name: 'Avik Roy',
  role: 'Advisor & Mentor in Fashion & Design Studies',
  image: pic4,
  description: 
    "Advisor & Mentor in Fashion & Design Studies for Kairos Learning Universe.\n\n" +
    "Avik Roy is a Fashion Professional and Strategic Design Leader with over 21 years of stellar experience in the apparel and retail industries. His career highlights include spearheading design innovation at Raymond Limited, where he served as the Design Head for Center of Excellence, transforming tailoring standards, and pioneering branding initiatives.\n\n" +
    "As an Associate Professor at Pearl Academy, he has mentored the next generation of designers, emphasizing sustainability and intellectual property in fashion apart from mentoring them for the likes of London Fashion Week and so on.\n\n" +
    "His international contributions span collaborations with the Beijing Institute of Fashion Technology and representing India as the only ever jury at the 27th FAMT competition held in Daegu, South Korea.\n\n" +
    "Recognized for his leadership and innovation, Avik has helped redesign uniforms for institutions like the Indian Army and Delhi Police, leaving an indelible mark on institutional fashion.\n\n" +
    "With advanced credentials in fashion technology from the UK, his expertise seamlessly blends creative vision with strategic execution, inspiring excellence across cultures and industries.",
  social: { facebook: '#', twitter: '#', google: '#' }
},

{
  id: 5,
  name: 'Pritha Mohinta',
  role: 'Mentor for Communication & Finance',
  image: pic5,
  description: 
    "Mentor for Communication & Finance in Kairos Learning Universe.\n\n" +
    "With a multifaceted career spanning 20 years in Human Resources across corporate and education sectors, as well as experience as a moderator for news channels, Pritha Mohinta emerges as a versatile professional excelling in training, career counselling, NLP coaching, and image consulting.\n\n" +
    "Drawing upon her background in HR management, talent acquisition, and educational training, Pritha has honed her skills to create impactful learning experiences and foster growth in individuals and organizations.\n\n" +
    "Her tenure as a news channel moderator has further enriched her communication skills and ability to engage diverse audiences, showcasing her versatility and adaptability in high-pressure environments.\n\n" +
    "Certified in NLP coaching and image consulting, Pritha brings a holistic approach to her practice, empowering individuals to unlock their full potential and project a confident image.\n\n" +
    "By integrating her expertise in human behavior, communication, and personal branding, she guides clients towards self-discovery and personal transformation, enabling them to achieve their professional and personal goals.\n\n" +
    "Her approach is characterized by a blend of empathy, strategic thinking, and a deep understanding of human psychology.\n\n" +
    "As a seasoned professional with a diverse skill set and a passion for empowering individuals through education, coaching, and image consultancy, Pritha Mohinta epitomizes excellence in the fields of training and personal development.\n\n" +
    "Her unique blend of experience, expertise, and dedication sets her apart as a transformative force, guiding individuals towards success, fulfillment, and personal growth.",
  social: { facebook: '#', twitter: '#', google: '#' }
},
  { id: 6, name: 'Rhea Fernandes', role: 'Mentor for Digital Marketing & Communications', image: pic6, description: 'Rhea is a marketing and PR professional, with a background in digital marketing, content creation, and campaign management. She holds a postgraduate certificate in Public Relations and Digital Marketing from York University, Toronto with a Bachelors in Mass Communication from Manipal. She is skilled in using tools like Google, HubSpot, Apollo.io, and Hootsuite to manage social media strategy, email marketing, SEO, and analytics. Her expertise includes engagement through the success of effective campaigns, content creation driven by SEO, and the management of promotional initiatives. Rhea is passionate about storytelling and brand growth and desires to put her skills into practical application in the marketing sector.', social: { facebook: '#', twitter: '#', google: '#' } },
];

const Services = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openPopup = (member) => setSelectedMember(member);
  const closePopup = () => setSelectedMember(null);

  return (
    <div className='services' id="ourteam">
      <div className="our-team-heading">
        <h1>OUR TEAM</h1>
      </div>
      <div className="team-container">
        {teamMembers.map((member) => (
          <div className="team-member" key={member.id}>
            <div className="our-team">
              <img src={member.image} alt={member.name} />
              <div className="team-content">
                <h3 className="title">{member.name}</h3>
                <span className="post">{member.role}</span>
                <ul className="social">
                  <li><a href={member.social.facebook}><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href={member.social.twitter}><i class="fa-brands fa-x-twitter"></i></a></li>


                  <li><a href={member.social.google}><i class="fa-brands fa-linkedin"></i></a></li>
                </ul>
                <button className="show-more-btn" onClick={() => openPopup(member)}>Show More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedMember && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closePopup}>&times;</span>
            <img src={selectedMember.image} alt={selectedMember.name} className="popup-img" />
            <h2>{selectedMember.name}</h2>
            <h4>{selectedMember.role}</h4>
            <p>{selectedMember.description}</p>
          </div>
        </div>
      )}
      
      <Blog />
    <Video/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Services;