import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axios.config";
import TenderDetails from "../../components/admin/TenderDetails";

const Tender = () => {
    const { tenderId } = useParams();

    const [tender, setTender] = useState(null);

    useEffect(() => {
        axios
            .get(`/tender/tender/${tenderId}`)
            .then((res) => {
                setTender(res.data.tender);
            })
            .catch((err) => {
                console.log(err.response.message);
            });
    }, [tenderId]);

    return (
        <div>
            <TenderDetails tender={tender} />
        </div>
    );
};

export default Tender;
