import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import ToDoItem from './ToDoItem';
import CustomScrollbars from "util/CustomScrollbars";
import CircularProgress from '../../CircularProgress/index';

const ToDoList = SortableContainer(({ toDos, onTodoSelect, onTodoChecked, onMarkAsStart, width }) => {
    return (
        <div className="module-list">
            <CustomScrollbars className="module-list-scroll scrollbar"
                style={{ height: width >= 1200 ? 'calc(100vh - 265px)' : 'calc(100vh - 245px)' }}>
                {toDos.length > 0 ? toDos.map((todo, index) =>
                    <ToDoItem key={index} index={index} todo={todo} onTodoSelect={onTodoSelect}
                        onMarkAsStart={onMarkAsStart}
                        onTodoChecked={onTodoChecked} />
                ) : <CircularProgress />}
            </CustomScrollbars>
        </div>
    )
});

export default ToDoList;
