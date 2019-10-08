import { CircularProgress } from "@material-ui/core";
import React from "react";

const Loading = () => {
    return (
        <div className="App">
            <div className="progress-container">
                <CircularProgress />
            </div>
        </div>
    );
};

export { Loading };

