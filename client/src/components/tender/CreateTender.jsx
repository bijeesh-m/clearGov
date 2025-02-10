import { useState } from "react";
import { tenderFormSchema } from "../../utils/yupSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const CreateTender = ({ projectID }) => {
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(tenderFormSchema),
    // });

    // const handleclick = () => {
    //     console.log("hello");
    // };

    const [covers, setCovers] = useState([""]);

    const addCover = () => {
        setCovers([...covers, ""]);
    };

    const removeCover = (index) => {
        const updatedCovers = [...covers];
        updatedCovers.splice(index, 1);
        setCovers(updatedCovers);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(tenderFormSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        // Add your form submission logic here
    };

 
    // const handleNestedChange = (e, category) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [category]: { ...formData[category], [name]: value },
    //     });
    // };

    // const handleCoverChange = (index, e) => {
    //     const updatedCovers = [...formData.covers];
    //     updatedCovers[index] = e.target.value;
    //     setFormData({ ...formData, covers: updatedCovers });
    // };

    // const addCoverField = () => {
    //     setFormData({
    //         ...formData,
    //         covers: [...formData.covers, ""],
    //     });
    // };

    // const removeCoverField = (index) => {
    //     const updatedCovers = formData.covers.filter((_, i) => i !== index);
    //     setFormData({ ...formData, covers: updatedCovers });
    // };

    // const handleTenderSubmit = async (e, data) => {
    //     console.log("sjflaksjf");

    //     e.preventDefault();
    //     console.log("askdjfl");

    //     try {
    //         console.log(formData);

    //         // const response = await axios.post("/api/tenders", {
    //         //     projectID,
    //         //     ...formData,
    //         // });
    //         // console.log("Tender created:", response.data);
    //     } catch (error) {
    //         console.error("Error creating tender:", error);
    //     }
    // };

    return (
        
        <div className="mx-auto p-6 sm:p-10 md:p-20 bg-white shadow-lg ">
            <h1 className="text-2xl font-bold mb-4">Tender Submission Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Organisation Chain */}
                <div>
                    <label className="block text-sm font-medium">Organisation Chain</label>
                    <input
                        {...register("organisationChain")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.organisationChain && (
                        <span className="text-red-500 text-sm">{errors.organisationChain.message}</span>
                    )}
                </div>

                {/* Tender Type */}
                <div>
                    <label className="block text-sm font-medium">Tender Type</label>
                    <input
                        {...register("tenderType")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.tenderType && <span className="text-red-500 text-sm">{errors.tenderType.message}</span>}
                </div>

                {/* Tender Category */}
                <div>
                    <label className="block text-sm font-medium">Tender Category</label>
                    <input
                        {...register("tenderCategory")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.tenderCategory && (
                        <span className="text-red-500 text-sm">{errors.tenderCategory.message}</span>
                    )}
                </div>

                {/* Tender Location */}
                <div>
                    <label className="block text-sm font-medium">Tender Location</label>
                    <input
                        {...register("tenderLocation")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.tenderLocation && (
                        <span className="text-red-500 text-sm">{errors.tenderLocation.message}</span>
                    )}
                </div>

                

                {/* Payment Mode */}
                <div>
                    <label className="block text-sm font-medium">Payment Mode</label>
                    <input
                        {...register("paymentMode")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.paymentMode && <span className="text-red-500 text-sm">{errors.paymentMode.message}</span>}
                </div>

                {/* Form of Contract */}
                <div>
                    <label className="block text-sm font-medium">Form Of Contract</label>
                    <input
                        {...register("formOfContract")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors.formOfContract && (
                        <span className="text-red-500 text-sm">{errors.formOfContract.message}</span>
                    )}
                </div>

                {/* Covers */}
                {/* <div>
          <label className="block text-sm font-medium">Covers</label>
          <input {...register('covers[0]')} className="mt-1 block w-full p-2 border border-gray-300 rounded" />
          {errors.covers && <span className="text-red-500 text-sm">{errors.covers.message}</span>}
        </div> */}

                <fieldset className="p-4 border border-gray-200 rounded-lg">
                    <legend className="text-lg font-semibold">Covers</legend>

                    {covers.map((cover, index) => (
                        <div key={index} className="flex items-center space-x-4">
                            <input
                                {...register(`covers[${index}]`)}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                                placeholder={`Cover ${index + 1}`}
                            />
                            {errors.covers && errors.covers[index] && (
                                <span className="text-red-500 text-sm">{errors.covers[index].message}</span>
                            )}

                            {index > 0 && (
                                <button
                                    type="button"
                                    onClick={() => removeCover(index)}
                                    className=" text-red-500 p-2 rounded hover:bg-red-700"
                                >
                                    X
                                </button>
                            )}
                        </div>
                    ))}

                    <button
                        type="button"
                        onClick={addCover}
                        className="mt-2 bg-blue-950 text-white p-2 rounded hover:bg-green-700"
                    >
                        Add Cover
                    </button>
                </fieldset>
                <div>
                    <label className="block text-sm font-medium">Tender Fee</label>
                    <input
                        type="number"
                        {...register("tenderFee")}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded"
                    />
                    {errors?.tenderFee && <span className="text-red-500 text-sm">{errors?.tenderFee.message}</span>}
                </div>

                {/* Work Item Details */}
                <fieldset className="p-4 border border-gray-200 rounded-lg">
                    <legend className="text-lg font-semibold">Work Item Details</legend>

                    <div>
                        <label className="block text-sm font-medium">Work Title</label>
                        <input
                            {...register("workItemDetails.title")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.workItemDetails?.title && (
                            <span className="text-red-500 text-sm">{errors.workItemDetails.title.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Work Description</label>
                        <textarea
                            {...register("workItemDetails.description")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.workItemDetails?.description && (
                            <span className="text-red-500 text-sm">{errors.workItemDetails.description.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Tender Value</label>
                        <input
                            type="number"
                            {...register("workItemDetails.tenderValue")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.workItemDetails?.tenderValue && (
                            <span className="text-red-500 text-sm">{errors.workItemDetails.tenderValue.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Location</label>
                        <input
                            {...register("workItemDetails.location")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.workItemDetails?.location && (
                            <span className="text-red-500 text-sm">{errors.workItemDetails.location.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Bid Validity Days</label>
                        <input
                            type="number"
                            {...register("workItemDetails.bidValidityDays")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.workItemDetails?.bidValidityDays && (
                            <span className="text-red-500 text-sm">
                                {errors.workItemDetails.bidValidityDays.message}
                            </span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Period of Work Days</label>
                        <input
                            type="number"
                            {...register("workItemDetails.periodOfWorkDays")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.workItemDetails?.periodOfWorkDays && (
                            <span className="text-red-500 text-sm">
                                {errors.workItemDetails.periodOfWorkDays.message}
                            </span>
                        )}
                    </div>
                </fieldset>

                {/* Critical Dates */}
                <fieldset className="p-4 border border-gray-200 rounded-lg">
                    <legend className="text-lg font-semibold">Critical Dates</legend>

                    <div>
                        <label className="block text-sm font-medium">Bid Opening Date</label>
                        <input
                            type="date"
                            {...register("criticalDates.bidOpeningDate")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.criticalDates?.bidOpeningDate && (
                            <span className="text-red-500 text-sm">{errors.criticalDates.bidOpeningDate.message}</span>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Bid Submission End Date</label>
                        <input
                            type="date"
                            {...register("criticalDates.bidSubmissionEndDate")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.criticalDates?.bidSubmissionEndDate && (
                            <span className="text-red-500 text-sm">
                                {errors.criticalDates.bidSubmissionEndDate.message}
                            </span>
                        )}
                    </div>
                </fieldset>

                {/* Submit Button */}
                <button type="submit" className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-700">
                    Submit Tender
                </button>
            </form>
        </div>
    );
};

export default CreateTender;
