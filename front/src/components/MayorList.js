import React, { useContext, useEffect } from 'react';
import Store from './Store';

const HOST_API = "http://localhost:8080/api";

const MayorList = () =>{
    const { dispatch, state: { mayorlist } } = useContext(Store);
    const currentList = mayorlist.list;

    useEffect(() => {
        fetch(HOST_API + "/mayorlists")
            .then(response => response.json())
            .then((list) => {
                dispatch({ type: "update-list", list });
            });
    }, [dispatch]);


    const onChangeMayor = (event, mayorlist) => {
        const request = {
            nameDTO: mayorlist.nameDTO,
            id: mayorlist.id,
            completedDTO: event.target.checked
        };
        fetch(HOST_API + "/mayorlist", {
            method: "PUT",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((mayorlist) => {
                dispatch({ type: "update-item", item: mayorlist });
            });
    };
}