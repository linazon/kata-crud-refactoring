import React, { useContext, useRef, useState } from 'react';
import Store from './Store';

const HOST_API = "http://localhost:8080/api";

const Form = () => {
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();

        const request = {
            nameDTO: state.nameDTO,
            id: null,
            completedDTO: false
        };


        fetch(HOST_API + "/todo", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((todo) => {
                dispatch({ type: "add-item", item: todo });
                setState({ nameDTO: "" });
                formRef.current.reset();
            });
    };

    const onEdit = (event) => {
        event.preventDefault();

        const request = {
            nameDTO: state.nameDTO,
            id: item.id,
            isCompletedDTO: item.isCompletedDTO
        };


        fetch(HOST_API + "/todo", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((todo) => {
                dispatch({ type: "update-item", item: todo });
                setState({ nameDTO: "" });
                formRef.current.reset();
            });
    };

    return <form ref={formRef}>
        <input
            type="text"
            nameDTO="nameDTO"
            placeholder="¿Qué piensas hacer hoy?"
            defaultValue={item.nameDTO}
            onChange={(event) => {
                setState({ ...state, nameDTO: event.target.value });
            }}></input>
        {item.id && <button onClick={onEdit}>Actualizar</button>}
        {!item.id && <button onClick={onAdd}>Crear</button>}
    </form>;
};

export default Form;