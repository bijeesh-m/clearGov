import React, { useEffect } from "react";
import BidSubmit from "../../components/contractor/BidSubmit";
import axiosInstance from "../../config/axios.config";
import { useParams } from "react-router-dom";

const BidSubmission = () => {
    const { tenderId } = useParams();

    return (
        <div>
            <BidSubmit tenderId={tenderId} />
        </div>
    );
};

export default BidSubmission;
