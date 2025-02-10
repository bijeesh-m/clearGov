import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../config/axios.config";

const UserProfile = () => {
    const user = useSelector((state) => state.user);
    const [edit, setEdit] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [image, setImage] = useState("");

    const handleEditButton = () => {
        setEdit(!edit);
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // const reader = new FileReader();
        // reader.onloadend = () => {
        //     setPreviewUrl(reader.result); // Set the image URL to the state
        // };
        // if (file) {
        //     reader.readAsDataURL(file); // Read the file as a data URL
        // }
        axios.put("/user/update-profile-picture", image).then((res) => {
            console.log(res);
        });
    };

    return (
        <div className=" h-screen md:flex">
            <div className=" w-fit flex flex-col flex-1 p-5 md:p-10 items-center gap-5">
                <div
                    onMouseEnter={handleEditButton}
                    onMouseLeave={handleEditButton}
                    className=" bg-white w-[100px] relative h-[100px] rounded-full p-0 overflow-hidden "
                >
                    <img
                        className=" w-full h-full object-cover object-center"
                        src={previewUrl ? previewUrl : user.avatar}
                        alt="profile picture"
                    />
                    {edit && (
                        <div className=" -z-0 absolute w-full h-full top-0  opacity-70 bg-gray-500 flex justify-center items-center ">
                            <input
                                type="file"
                                // value={file}
                                onChange={handleFileChange}
                                className="absolute w-full h-full opacity-0"
                            />
                            <p className=" ">✏️</p>
                        </div>
                    )}
                </div>
                <div className=" flex items-center gap-3">
                    <input
                        disabled
                        className=" text-xl font-bold border capitalize py-1 px-3 focus:outline-none "
                        value={user.username}
                    />
                    <div className="tooltip " data-tip="Edit">
                        <button className="">✏️</button>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <input
                        disabled
                        className=" text-xl font-bold border py-1 px-3 focus:outline-none "
                        value={user.email}
                    />
                    <div className="tooltip " data-tip="Edit">
                        <button className="">✏️</button>
                    </div>
                </div>
                <div className=" flex items-center gap-3">
                    <input
                        disabled
                        className=" text-xl font-bold border py-1 px-3 focus:outline-none "
                        value={user.phone}
                    />
                    <div className="tooltip " data-tip="Edit">
                        <button className="">✏️</button>
                    </div>
                </div>
            </div>
            <div className="  w-fit flex-1 flex flex-col ">
                <div>
                    <h1 className=" text-3xl font-bold p-5">Latest tenders</h1>
                </div>
                <div className="flex-1  p-5">
                    <table className="md:table-md rounded-md overflow-hidden">
                        <thead className=" bg-gray-300">
                            <tr>
                                <th>tenderID</th>
                                <th>tenderValue</th>
                                <th>tenderLocation</th>
                            </tr>
                        </thead>
                        <tbody className=" bg-red-200">
                            {[1, 2, 3, 4, 5].map((tender, i) => {
                                return (
                                    <tr key={i}>
                                        <td>124</td>
                                        <td>500000</td>
                                        <td>Malappuram</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
