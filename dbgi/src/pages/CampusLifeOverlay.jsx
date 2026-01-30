import { useState, useEffect } from 'react';
import '../styles/CampusLifeOverlay.css';

// Import local images
import sports from '../assets/campus_life/sports.webp';
import alumni from '../assets/campus_life/almuni.webp';
import fresher from '../assets/campus_life/fresher.webp';
import industry_visit from '../assets/campus_life/industrial_visit.webp';
import tvaran from '../assets/campus_life/tvaran.webp';
import job from '../assets/campus_life/job_fair.webp';
import trip from '../assets/campus_life/trip.webp';
import girl_game from '../assets/campus_life/girls_competition.webp';
import play from '../assets/campus_life/nukkad_play.webp';
import star_night from '../assets/campus_life/star_night.webp';
import women_empower from '../assets/campus_life/women_empowerment.webp';
import farewell from '../assets/campus_life/farewell_party.webp';
import winners from '../assets/campus_life/winners.webp';
import guest_visit from '../assets/campus_life/guests.webp';
import jagrukta from '../assets/campus_life/jagrukta_karyakram.webp';
import seminar from '../assets/campus_life/seminars.webp';
import supportive_faculty from '../assets/campus_life/supportive_faculty.webp';
import yoga from '../assets/campus_life/yoga.webp';
import lovely_faculty from '../assets/campus_life/lovely_faculty.webp';
import parents_felicitation from '../assets/campus_life/parents_felicitation_ceremoney.webp';
import moot_court from '../assets/campus_life/moot_court_competition.webp';

const CampusLife = () => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Campus data with multiple images for each card
  const campusCards = [
    {
      id: 'sports',
      title: 'Sports & Athletics',
      images: [sports, sports, sports], // You can add more images
      description: 'Annual sports meet with various competitions including athletics, football, basketball, and more. Our students excel in inter-college tournaments.',
      altTexts: [
        'Sports competition at campus',
        'Football match in progress',
        'Basketball tournament final'
      ]
    },
    {
      id: 'alumni',
      title: 'Alumni Network',
      images: [alumni, alumni, alumni],
      description: 'Active alumni network with regular meetups, mentorship programs, and career guidance sessions for current students.',
      altTexts: [
        'Alumni meet annual gathering',
        'Alumni sharing experiences',
        'Alumni networking event'
      ]
    },
    {
      id: 'fresher',
      title: 'Freshers Welcome',
      images: [fresher, fresher, fresher],
      description: 'Grand welcome ceremony for new students with cultural performances, ice-breaking sessions, and campus orientation.',
      altTexts: [
        'Freshers welcome ceremony',
        'New students orientation',
        'Welcome party for freshers'
      ]
    },
    {
      id: 'industry_visit',
      title: 'Industrial Visits',
      images: [industry_visit, industry_visit, industry_visit],
      description: 'Regular industrial visits to leading companies for practical exposure and understanding of real-world applications.',
      altTexts: [
        'Students on industrial visit',
        'Factory tour for students',
        'Industrial exposure program'
      ]
    },
    {
      id: 'tvaran',
      title: 'Tvaran Events',
      images: [tvaran, tvaran, tvaran],
      description: 'Annual cultural fest featuring music, dance, drama, art exhibitions, and various competitions.',
      altTexts: [
        'Cultural fest performance',
        'Tvaran event stage show',
        'Cultural festival activities'
      ]
    },
    {
      id: 'job',
      title: 'Job Fair',
      images: [job, job, job],
      description: 'Campus placement drive with top recruiters from various industries offering excellent career opportunities.',
      altTexts: [
        'Campus placement drive',
        'Job fair interaction',
        'Recruitment process'
      ]
    },
    {
      id: 'trip',
      title: 'Educational Trips',
      images: [trip, trip, trip],
      description: 'Educational and recreational trips to historical sites, tech parks, and natural wonders for holistic learning.',
      altTexts: [
        'Educational trip group photo',
        'Students on excursion',
        'Learning outside classroom'
      ]
    },
    {
      id: 'girl_game',
      title: 'Girls Competition',
      images: [girl_game, girl_game, girl_game],
      description: 'Special competitions and events celebrating women empowerment and encouraging female participation in sports.',
      altTexts: [
        'Girls sports competition',
        'Women empowerment event',
        'Female students in competition'
      ]
    },
    {
      id: 'play',
      title: 'Nukkad Natak',
      images: [play, play, play],
      description: 'Street plays addressing social issues, performed by students to create awareness in the community.',
      altTexts: [
        'Street play performance',
        'Nukkad natak on social issues',
        'Theatre group performance'
      ]
    },
    {
      id: 'star_night',
      title: 'Star Night',
      images: [star_night, star_night, star_night],
      description: 'Musical night featuring popular artists, bands, and student performances under the stars.',
      altTexts: [
        'Star night concert',
        'Musical performance night',
        'Evening cultural program'
      ]
    },
    {
      id: 'women_empower',
      title: 'Women Empowerment',
      images: [women_empower, women_empower, women_empower],
      description: 'Programs and workshops focused on women empowerment, self-defense, and career development.',
      altTexts: [
        'Women empowerment workshop',
        'Self-defense training',
        'Career development for women'
      ]
    },
    {
      id: 'farewell',
      title: 'Farewell Party',
      images: [farewell, farewell, farewell],
      description: 'Emotional farewell ceremony for graduating students with awards, speeches, and cultural performances.',
      altTexts: [
        'Farewell ceremony',
        'Graduating students celebration',
        'Goodbye party'
      ]
    },
    {
      id: 'winners',
      title: 'Achievers',
      images: [winners, winners, winners],
      description: 'Celebrating student achievements in academics, sports, and extracurricular activities.',
      altTexts: [
        'Award ceremony',
        'Achievers being felicitated',
        'Prize distribution'
      ]
    },
    {
      id: 'guest_visit',
      title: 'Guest Lectures',
      images: [guest_visit, guest_visit, guest_visit],
      description: 'Regular sessions with industry experts, entrepreneurs, and alumni for knowledge sharing.',
      altTexts: [
        'Guest lecture session',
        'Industry expert interaction',
        'Knowledge sharing program'
      ]
    },
    {
      id: 'jagrukta',
      title: 'Awareness Programs',
      images: [jagrukta, jagrukta, jagrukta],
      description: 'Social awareness campaigns on important issues like environment, health, and digital literacy.',
      altTexts: [
        'Awareness program',
        'Social campaign',
        'Community service'
      ]
    },
    {
      id: 'seminar',
      title: 'Seminars & Workshops',
      images: [seminar, seminar, seminar],
      description: 'Regular seminars, workshops, and training sessions for skill development and knowledge enhancement.',
      altTexts: [
        'Seminar in progress',
        'Workshop session',
        'Training program'
      ]
    },
    {
      id: 'supportive_faculty',
      title: 'Supportive Faculty',
      images: [supportive_faculty, supportive_faculty, supportive_faculty],
      description: 'Dedicated faculty members providing mentorship, guidance, and support to students.',
      altTexts: [
        'Faculty guidance session',
        'Teacher-student interaction',
        'Mentorship program'
      ]
    },
    {
      id: 'yoga',
      title: 'Yoga & Wellness',
      images: [yoga, yoga, yoga],
      description: 'Regular yoga sessions, meditation programs, and wellness workshops for students and staff.',
      altTexts: [
        'Yoga session',
        'Meditation program',
        'Wellness workshop'
      ]
    },
    {
      id: 'lovely_faculty',
      title: 'Faculty Interaction',
      images: [lovely_faculty, lovely_faculty, lovely_faculty],
      description: 'Friendly and approachable faculty creating a positive learning environment.',
      altTexts: [
        'Faculty interaction',
        'Informal discussion',
        'Faculty-student bonding'
      ]
    },
    {
      id: 'parents_felicitation',
      title: 'Parents Day',
      images: [parents_felicitation, parents_felicitation, parents_felicitation],
      description: 'Annual parents felicitation ceremony recognizing student achievements and parent involvement.',
      altTexts: [
        'Parents day ceremony',
        'Parent-teacher meeting',
        'Felicitation program'
      ]
    },
    {
      id: 'moot_court',
      title: 'Moot Court',
      images: [moot_court, moot_court, moot_court],
      description: 'Mock court competitions for law students to develop advocacy and legal reasoning skills.',
      altTexts: [
        'Moot court competition',
        'Law students in action',
        'Mock trial session'
      ]
    }
  ];

  // Open modal with specific card
  const openModal = (index) => {
    setCurrentCardIndex(index);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    setIsLoading(true);
    document.body.classList.add('modal-open');
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove('modal-open');
  };

  // Navigate to next image
  const nextImage = () => {
    const currentCard = campusCards[currentCardIndex];
    setCurrentImageIndex((prev) => 
      prev === currentCard.images.length - 1 ? 0 : prev + 1
    );
  };

  // Navigate to previous image
  const prevImage = () => {
    const currentCard = campusCards[currentCardIndex];
    setCurrentImageIndex((prev) => 
      prev === 0 ? currentCard.images.length - 1 : prev - 1
    );
  };

  // Handle image load
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      
      switch(e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, currentCardIndex]);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="section-title">
            <h2>Campus Life</h2>
            <p>
              Experience a vibrant campus community with diverse activities,
              clubs, and resources that enrich your college experience.
            </p>
          </div>
          <div className="campus-grid">
            {campusCards.map((card, index) => (
              <div 
                className={`campus-card ${card.id}`}
                key={index} 
                id={card.id}
                onClick={() => openModal(index)}
              >
                <h3>{card.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div 
          className="modal-overlay" 
          onClick={handleOverlayClick}
        >
          <div className="modal-content">
            {/* Close button */}
            {/* <button
              onClick={closeModal}
              className="modal-close-btn"
              aria-label="Close modal"
            >
              ×
            </button> */}

            {/* Image container */}
            <div className="modal-image-container">
              {isLoading && (
                <div className="image-loading">
                  <div className="loading-spinner"></div>
                </div>
              )}
              <img
                src={campusCards[currentCardIndex].images[currentImageIndex]}
                alt={campusCards[currentCardIndex].altTexts[currentImageIndex] || 
                     `${campusCards[currentCardIndex].title} - Image ${currentImageIndex + 1}`}
                className={`modal-image ${isLoading ? 'loading' : 'loaded'}`}
                onLoad={handleImageLoad}
                loading="eager"
              />

              {/* Previous button */}
              <button
                onClick={prevImage}
                className="nav-btn prev-btn"
                aria-label="Previous image"
                disabled={isLoading}
              >
                <i class="fa-solid fa-angle-left"></i>
              </button>

              {/* Next button */}
              <button
                onClick={nextImage}
                className="nav-btn next-btn"
                aria-label="Next image"
                disabled={isLoading}
              >
                <i class="fa-solid fa-angle-right"></i>
              </button>

              {/* Image counter */}
              <div className="image-counter">
                {currentImageIndex + 1} / {campusCards[currentCardIndex].images.length}
              </div>
            </div>

            {/* Content section */}
            {/* <div className="modal-body"> */}
              {/* <h2 className="modal-title">
                {campusCards[currentCardIndex].title}
              </h2>
              <p className="modal-description">
                {campusCards[currentCardIndex].description}
              </p> */}
              
              {/* Thumbnail navigation */}
              {/* <div className="thumbnail-container">
                {campusCards[currentCardIndex].images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsLoading(true);
                    }}
                    className={`thumbnail-btn ${currentImageIndex === index ? 'active' : ''}`}
                    aria-label={`View image ${index + 1}`}
                    disabled={isLoading && currentImageIndex === index}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className="thumbnail-img"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default CampusLife;