import React from 'react';
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import Gravatar from 'react-gravatar';


const DragHandle = SortableHandle(() =>
    <i className="zmdi zmdi-menu draggable-icon d-none d-sm-flex" style={{ fontSize: 25 }} />);


const ToDoItem = SortableElement(({ todo, onTodoSelect, onTodoChecked, onMarkAsStart }) => {
    return (
        <div className="module-list-item">
            <div className="module-list-icon">
                <span className="bar-icon">
                    <DragHandle />
                </span>

                <div className="form-control-checkbox d-flex">
                    <div className="form-checkbox">
                        <input type="checkbox"
                            checked={todo.selected}
                            onChange={(event) => {
                                event.stopPropagation();
                                onTodoChecked(todo);
                            }}
                            value="SelectTodo"
                        />

                        <span className="check">
                            <i className="zmdi zmdi-check zmdi-hc-lg" />
                        </span>
                    </div>

                    <span className="icon-btn" onClick={() => {
                        todo.starred = !todo.starred;
                        onMarkAsStart(todo);
                    }}>
                        {todo.starred ?
                            <i className="zmdi zmdi-star zmdi-hc-lg" /> :
                            <i className="zmdi zmdi-star-outline zmdi-hc-lg" />
                        }

                    </span>
                </div>
            </div>

            <div className="module-list-info" onClick={() => {
                onTodoSelect(todo);
            }}>
                <div className="row">
                    <div className="module-todo-content col-9 col-sm-10 col-md-9">
                        <div className={`subject ${todo.completed && 'text-muted text-strikethrough'}`}>
                            {todo.userName}
                        </div>
                    </div>
                    <div className="module-todo-right col-3 col-sm-2 col-md-2">
                        <div className="d-flex flex-row-reverse">
                            <Gravatar email={todo.emailAddress}
                                className="pointer user-avatar size-30" rating="pg" default='mm' />

                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
});

export default ToDoItem;
