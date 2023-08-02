import './TodoItem.css';

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    return date.toLocaleString(undefined, options);
  };

export function TodoItem (props) {
const { title, author, createdAt, isDone, doneDate, note } = props.todo;

const itemClasses = `todo-container__list__item ${
    isDone ? 'todo-container__list__item--darker' : ''
    }`;

      return (
        <div className={itemClasses}>
          <div className="todo-container__list__item__wrapper">
            <h3 className="todo-container__list__item__wrapper__title">
              {title}
            </h3>
            <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
              {author}
            </div>
            <div className="todo-container__list__item__wrapper__text todo-container__list__item__wrapper__text--smaller">
              {formatDate(createdAt)}
            </div>
            <p className="todo-container__list__item__wrapper__text">
              {note}
            </p>
          </div>
          <div className="todo-container__list__item__side">
            {isDone && (
              <>
                <div className="todo-container__list__item__side__checkmark">
                  &#10003;
                </div>
                <div>{formatDate(doneDate)}</div>
              </>
            )}
          </div>
        </div>
      );
    }