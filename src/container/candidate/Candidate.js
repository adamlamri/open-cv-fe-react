import React from 'react';
import CreateCandidate from "./CreateCandidate";
import CandidateTable from "./CandidateTable";

class Candidate extends React.Component<>{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <h1>Candidate</h1>
                <CreateCandidate/>
                <CandidateTable/>
            </div>
        );
    }
}

export default Candidate;