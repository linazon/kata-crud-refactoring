import React, { useContext, useRef, useState } from 'react';
import Store from './Store';

const HOST_API = "http://localhost:8080/api";

const MayorForm = () => {
    const formRef = useRef(null);
    const { dispatch, state: { mayorlist } } = useContext(Store);
    const item = mayorlist.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();

        const request = {
            groupname: state.groupname,
            id: null
        };


        fetch(HOST_API + "/mayorlist", {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((mayorlist) => {
                dispatch({ type: "add-mayor-list", item: mayorlist });
                setState({ groupname: "" });
                formRef.current.reset();
            });
    };

    return (
        <div>
            <form>
                <input
                    type="text"
                    nameDTO="nameDTO"
                    placeholder="Crear lista grande"
                    onChangeMayor={(event => {
                        setState ({...state, groupname: event.target.value})
                    })
                    }
                ></input>
                <button onClick={onAdd}>Crear</button>
            </form>
        </div>
    )
}

export default MayorForm;