import UpdateProgressForm from "../../components/contractor/UpdateProgressForm";
import { useParams } from "react-router-dom";

const UpdateProgressPage = () => {
    const { tenderId } = useParams();

    return (
        <div>
            <UpdateProgressForm tenderId={tenderId} />
        </div>
    );
};

export default UpdateProgressPage;
