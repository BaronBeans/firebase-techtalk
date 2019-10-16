import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@material-ui/core";
import { Add, Clear } from "@material-ui/icons";
import React, { ChangeEvent, useState } from "react";
import { db } from "../../firebaseconfig";
import { useCollection } from "../../hooks";
import { ListItem, Loading } from "../index";
import { Developer, DeveloperDoc } from "../../interfaces";

const List = () => {
    const [data, loading] = useCollection("developers");

    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [team, setTeam] = useState<string>("");

    const clearFields = () => {
        setFirstName("");
        setLastName("");
        setTeam("");
    }

    const addDeveloper = () => {
        db.collection("developers").add({
            firstName,
            lastName,
            team
        });
        clearFields();
    }

    if (loading) {
        return <Loading />
    }

    return (
        <div className="App">
            <h3>NewOrbit Developers</h3>
            <div className="table-container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Team</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((d: DeveloperDoc) => (
                            <ListItem key={d.id} id={d.id} firstName={d.firstName} lastName={d.lastName} team={d.team} />
                        ))}
                        <TableRow>
                            <TableCell><TextField type="text" placeholder="first name" value={firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} /></TableCell>
                            <TableCell><TextField type="text" placeholder="last name" value={lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} /></TableCell>
                            <TableCell><TextField type="text" placeholder="team name" value={team} onChange={(e: ChangeEvent<HTMLInputElement>) => setTeam(e.target.value)} /></TableCell>
                            <TableCell><Button variant="contained" color="primary" onClick={addDeveloper}><Add /></Button></TableCell>
                            <TableCell><Button variant="contained" color="secondary" onClick={clearFields}><Clear /></Button></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export { List };

