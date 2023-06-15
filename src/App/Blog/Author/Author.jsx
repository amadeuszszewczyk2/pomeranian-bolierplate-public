import './styles.css';

export const Author = (props) => {
  return (
  <div>
    <div className="blog-post-author">
    
    <div className="signature name">{props.name}</div>
    <div className="signature title">{props.title}</div>
    
    </div>
    </div>
    )
};
