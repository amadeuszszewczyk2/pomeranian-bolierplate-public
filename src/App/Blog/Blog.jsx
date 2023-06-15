import './styles.css';
import { Title } from './Title/Title';
import { Author } from './Author/Author';

export const Blog = () => {
  return (
    <div class="blog">
      <div class="blog-post">
        <span class="blog-post-date">30-11-2022</span>
        <Title />
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
      
        <Author name="Amadeusz" title="Bla Bla" />
          
      </div>
      <div class="blog-post">
        <span class="blog-post-date">30-11-2022</span>
        <h2 class="blog-post-title">Why are we so nostalgic for the 1990s?</h2>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
        <p>
          My links
          <ul>
            <li>
              <a class="blog-link" href="http://wp.pl">
                wp.pl 1
              </a>
            </li>
            <li>
              <a class="blog-link" href="http://wp.pl">
                wp.pl 2
              </a>
            </li>
            <li>
              <a class="blog-link" href="http://onet.pl">
                onet.pl
              </a>
            </li>
            <li>
              <a class="blog-link" href="http://onet123.pl">
                onet123.pl
              </a>
            </li>
          </ul>
        </p>
        <p>Example p</p>
        <div class="blog-post-author">
          Radosława Majdan
          <br />
          Senior Marketing Specialist
        </div>
      </div>
      <div class="blog-post">
        <span class="blog-post-date">30-11-2022</span>
        <h2 class="blog-post-title">Why are we so nostalgic for the 1990s?</h2>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
        <p>
          Pop culture used to define a generation, but it seems the cultural,
          music and fashion trends of the 1990s have been recycled, and what
          Generation X considered its rite of passage into adulthood, is being
          discovered and claimed by fledgling grown-ups as their own. There's
          been the resurgence of vinyl as the trend-setters' choice of music
          consumption rather than the ease of a digital download, and now the
          hipsters have discovered the nostalgic sound of a whirring cassette
          from which to enjoy the dulcet tones of everyone from Salt-N-Pepa to
          Rick Astley.
        </p>
        <div class="blog-post-author">
          Radosława Majdan
          <br />
          Senior Marketing Specialist
        </div>
      </div>
    </div>
  );
};