import { Button, TableCell, TableRow, TextField } from "@material-ui/core";
import { Cancel, Delete, Edit, Save } from "@material-ui/icons";
import React, { ChangeEvent, useState } from "react";
import { db } from "../firebaseconfig";
import { DeveloperDoc } from "../interfaces";

const ListItem = ({ id, firstName, lastName, team }: DeveloperDoc) => {
    const [editMode, setEditMode] = useState<boolean>(false);

    const [newFirstName, setNewFirstName] = useState<string>(firstName);
    const [newLastName, setNewLastName] = useState<string>(lastName);
    const [newTeam, setNewTeam] = useState<string>(team);

    const toggleEdit = () => setEditMode(!editMode);

    const deleteDeveloper = () => db.collection("developers").doc(id).delete();

    const saveChanges = () => {
        db.collection("developers").doc(id).set({
            firstName: newFirstName,
            lastName: newLastName,
            team: newTeam
        });
        toggleEdit();
    }

    if (editMode) {
        return (
            <TableRow>
                <TableCell><TextField type="text" placeholder="first name" value={newFirstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewFirstName(e.target.value)} /></TableCell>
                <TableCell><TextField type="text" placeholder="last name" value={newLastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewLastName(e.target.value)} /></TableCell>
                <TableCell><TextField type="text" placeholder="team name" value={newTeam} onChange={(e: ChangeEvent<HTMLInputElement>) => setNewTeam(e.target.value)} /></TableCell>
                <TableCell><Button variant="contained" color="primary" onClick={saveChanges}><Save /></Button></TableCell>
                <TableCell><Button variant="contained" color="secondary" onClick={toggleEdit}><Cancel /></Button></TableCell>
            </TableRow>
        );
    }

    return (
        <TableRow>
            <TableCell>{firstName}</TableCell>
            <TableCell>{lastName}</TableCell>
            <TableCell>{team}</TableCell>
            <TableCell><Button variant="contained" color="primary" onClick={toggleEdit}><Edit /></Button></TableCell>
            <TableCell><Button variant="contained" color="secondary" onClick={deleteDeveloper}><Delete /></Button></TableCell>
        </TableRow>
    );
};

export { ListItem };

