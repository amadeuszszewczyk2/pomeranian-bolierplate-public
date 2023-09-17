import './styles.css';

export const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-date">01-07-2023</div>

        <div className="blog-content">
          <h1 className="blog-title">
            The Future of AI: Opportunities and Challenges
          </h1>
          <p className="blog-text">
            Artificial Intelligence (AI) is evolving at a rapid pace, unlocking
            a world of opportunities across various industries. From autonomous
            vehicles to intelligent chatbots, AI is revolutionizing the way we
            interact with the world. However, as AI continues to develop, it
            also presents several challenges that need to be addressed to
            maximize its potential and minimize its risks.
          </p>
          <p className="blog-text">
            Ethical considerations, data privacy, and the development of safe
            and explainable AI are some of the key challenges that researchers
            and practitioners are working to address. As AI continues to evolve,
            it is crucial to strike a balance between innovation and responsible
            development.
          </p>
        </div>

        <div className="blog-author">
          <p className="blog-author-name">Amadeusz Szewczyk</p>
          <p className="blog-author-role">Frontend Developer</p>
        </div>
      </div>
      <div className="blog-container">
        <div className="blog-date">19-07-2023</div>

        <div className="blog-content">
          <h1 className="blog-title">
            AI and Healthcare: A Match Made for the Future
          </h1>
          <p className="blog-text">
            The integration of Artificial Intelligence (AI) in healthcare has
            been a game-changer in recent years. AI-powered applications and
            devices are helping doctors and medical professionals diagnose
            diseases more accurately, predict patient outcomes, and develop
            personalized treatment plans. From medical imaging to drug
            discovery, AI is revolutionizing the way healthcare is delivered.
          </p>
          <p className="blog-text">
            Despite the progress, there are still challenges to overcome, such
            as data privacy, algorithmic bias, and the need for robust
            validation. However, with continuous research and development, AI
            has the potential to transform healthcare for the better, making it
            more accessible, efficient, and personalized.
          </p>
        </div>

        <div className="blog-author">
          <p className="blog-author-name">Amadeusz Szewczyk</p>
          <p className="blog-author-role">Frontend Developer</p>
        </div>
      </div>
    </div>
  );
};
