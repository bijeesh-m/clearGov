import React, { useEffect, useState } from "react";
import BidSubmit from "../../components/contractor/BidSubmit";
import axiosInstance from "../../config/axios.config";
import { useParams } from "react-router-dom";

const BidSubmission = () => {
    const { tenderId } = useParams();

    const [covers, setCovers] = useState([]);
    const [tId, setTid] = useState("");

    useEffect(() => {
        const fetchTenders = async () => {
            try {
                const response = await axiosInstance.get(`/tender/tender/${tenderId}`);
                console.log(response);
                if (response.status === 200) {
                    console.log(response);
                    setCovers(response.data.tender.covers);
                    setTid(response.data.tender._id);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchTenders();
    }, []);

    return (
        <div>
            <BidSubmit tenderId={tId} covers={covers} />
        </div>
    );
};

export default BidSubmission;
