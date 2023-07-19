import './styles.css';

export const Blog = () => {
  return (
    <div>
      {/* First Blog Entry */}
      <div className="blog-container">
        <div className="blog-date">
          01-07-2023
        </div>

        <div className="blog-content">
          <h1 className="blog-title">Why are we so nostalgic for the 1990s?</h1>
          <p className="blog-text">
            Pop culture used to define a generation, but it seems the cultural, music, and fashion trends of the 1990s have been recycled, and what Generation X considered its rite of passage into adulthood is being discovered and claimed by fledgling grown-ups as their own.
          </p>
          <p className="blog-text">
            There's been a resurgence of vinyl as the trend-setters' choice of music consumption rather than the ease of a digital download, and now the hipsters have discovered the nostalgic sound of a whirring cassette from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to Rick Astley.
          </p>
        </div>

        <div className="blog-author">
          <p className="blog-author-name">Jan Kowalski</p>
          <p className="blog-author-role">Senior Marketing Specialist</p>
        </div>
      </div>

      {/* Second Blog Entry */}
      <div className="blog-container">
        <div className="blog-date">
          19-07-2023
        </div>

        <div className="blog-content">
          <h1 className="blog-title">The Rise of Artificial Intelligence in Everyday Life</h1>
          <p className="blog-text">
            Artificial Intelligence (AI) has permeated various aspects of our daily lives, transforming the way we live and interact with technology. From voice assistants like Siri and Alexa to personalized recommendations on streaming platforms, AI has become an integral part of our routines.
          </p>
          <p className="blog-text">
            Advancements in AI have led to significant improvements in fields such as healthcare, finance, and transportation. Machine learning algorithms now help diagnose diseases, predict market trends, and optimize logistics operations.
          </p>
        </div>

        <div className="blog-author">
          <p className="blog-author-name">Emily Johnson</p>
          <p className="blog-author-role">AI Researcher</p>
        </div>
      </div>
    </div>
  );
};

