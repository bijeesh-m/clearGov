import React, { useState } from "react";

const UserEditForm = () => {
    const [selectedTab, setSelectdTab] = useState("Basic-details");

    return (
        <div>
            <form>
                <div className=" space-y-3">
                    <h3 className="font-bold text-lg">User Edit Form</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        Username
                        <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Role
                        <select className="  grow outline-none">
                            <option disabled selected>
                                Who shot first?
                            </option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </label>
                    <label className=" input-bordered flex items-center  gap-2">
                        Avatar
                        <input type="file" className="file-input file-input-accent w-full" />                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Name
                        <input type="text" className="grow" placeholder="Daisy" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Email
                        <input type="text" className="grow" placeholder="daisy@site.com" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default UserEditForm;
