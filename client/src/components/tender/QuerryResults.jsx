import React, { useMemo, useState } from "react";

const QuerryResults = ({ tenders, searchQuerry }) => {

    const filteredTenders = useMemo(() => {
        return tenders.filter((tender) => {
            return (
                tender.workItemDetails.title.toLowerCase().includes(searchQuerry.toLowerCase()) ||
                tender.tenderReferenceNumber === searchQuerry ||
                tender.tenderID === searchQuerry
            );
        });
    }, [searchQuerry, tenders]);

    return (
        <div className="p-6  min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Tender Search Results</h1>
            <div className="space-y-4">
                {filteredTenders.length ? (
                    filteredTenders?.map((tender) => (
                        <div key={tender._id} className="bg-white p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold text-gray-800">{tender?.workItemDetails.title}</h2>
                            <p className="text-gray-600">
                                <span className="font-semibold">Reference Number:</span> {tender?.tenderReferenceNumber}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Category:</span> {tender?.category}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-semibold">Closing Date:</span> {tender?.closingDate}
                            </p>
                            <p
                                className={`font-semibold ${
                                    tender.status === "Open" ? "text-green-500" : "text-red-500"
                                }`}
                            >
                                {tender.status}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No tenders found for "{searchQuerry}".</p>
                )}
            </div>
        </div>
    );
};

export default QuerryResults;
