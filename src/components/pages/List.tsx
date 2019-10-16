import React from "react";
import { useCollection } from "../../hooks";
import { Loading } from "../Loading";
// import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";

const List = () => {
    const [data, loading] = useCollection("test");

    if (loading) {
        return <Loading />
    }

    return (
        <div className="App">
            <h3>This is a test.</h3>
        </div>
        // <>
        //     <h3>This is a list of documents in the collection.</h3>
        //     <Table>
        //         <TableHead>
        //             <TableRow>
        //                 {/* TODO: Add columns for your specific data structure */}
        //                 {/* <TableCell>[Header goes here]</TableCell> */}
        //                 <TableCell>ID</TableCell>
        //                 <TableCell>True/False</TableCell>
        //             </TableRow>
        //         </TableHead>
        //         <TableBody>
        //             {data.map((doc: any) => (
        //                 <TableRow key={doc.id}>
        //                     <TableCell>{doc.id}</TableCell>
        //                     <TableCell>{doc.test}</TableCell>
        //                 </TableRow>
        //             ))}
        //         </TableBody>
        //     </Table>
        // </>
    );
};

export { List };