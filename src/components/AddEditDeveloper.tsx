import React, { useState, ChangeEvent } from "react";
import { TextField, Button } from "@material-ui/core";
import { db } from "../firebaseconfig";

interface AddEditDeveloperProps {
    closeModal: () => void;
    editMode: boolean;
    existingFirstName?: string;
    existingLastName?: string;
    existingTeam?: string;
}

const AddEditDeveloper = ({ closeModal, editMode, existingFirstName, existingLastName, existingTeam }: AddEditDeveloperProps) => {
    const [firstName, setFirstName] = useState<string>(existingFirstName || "");
    const [lastName, setLastName] = useState<string>(existingLastName || "");
    const [team, setTeam] = useState<string>(existingTeam || "");

    const handleSubmit = () => {
        db.collection("developers").add({
            firstName,
            lastName,
            team
        });
        closeModal();
    }

    return (
        <div className="add-developer-modal">
            <h3>Add a new developer</h3>
            <TextField type="text" placeholder="first name" value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
            <TextField type="text" placeholder="last name" value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} />
            <TextField type="text" placeholder="team" value={team} onChange={(e: ChangeEvent<HTMLInputElement>) => setTeam(e.target.value)} />
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
        </div >
    );
};

export { AddEditDeveloper };