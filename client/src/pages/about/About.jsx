import React, { useState } from "react";
import axiosInstance from "../../config/axios.config";

const About = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // State for submission status
    const [status, setStatus] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Simulate API call (replace with your actual endpoint)
            setStatus("Sending...");

            const response = await axiosInstance.post("/user/feedback", formData);
            console.log(response);

            console.log("Form submitted:", formData);
            setStatus("Message sent successfully!");

            // Reset form
            setFormData({
                name: "",
                email: "",
                message: "",
            });

            // Clear status after 3 seconds
            setTimeout(() => setStatus(""), 3000);
        } catch (error) {
            setStatus("Error sending message. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header Section */}
            <header className="bg-black py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-white">About Us</h1>
                    <p className="mt-4 text-lg text-gray-300">
                        Learn more about our mission, vision, and the team behind the platform.
                    </p>
                </div>
            </header>

            {/* Main Content Section */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Introduction Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We are a dedicated team of professionals committed to revolutionizing the tender management
                        process. Our platform connects contractors and organizations, making it easier to find, bid on,
                        and manage tenders efficiently. With a focus on transparency, security, and user experience, we
                        aim to simplify the tender process for everyone involved.
                    </p>
                </section>

                {/* Mission and Vision Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mission</h3>
                            <p className="text-gray-600">
                                To provide a seamless and transparent platform for tender management, empowering
                                contractors and organizations to achieve their goals efficiently.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Vision</h3>
                            <p className="text-gray-600">
                                To become the leading global platform for tender management, fostering innovation and
                                collaboration in the construction and procurement industries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                            <p className="text-gray-600">CEO & Founder</p>
                            <p className="text-sm text-gray-500 mt-2">
                                John is a visionary leader with over 15 years of experience in the construction
                                industry.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                            <p className="text-gray-600">CTO</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Jane is a tech enthusiast with a passion for building scalable and secure platforms.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Team Member"
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">Mike Johnson</h3>
                            <p className="text-gray-600">Head of Operations</p>
                            <p className="text-sm text-gray-500 mt-2">
                                Mike ensures smooth operations and customer satisfaction across the platform.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <p className="text-gray-600 mb-4">Have questions or feedback? We'd love to hear from you!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="sr-only">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                        className="p-2 border border-gray-300 rounded-lg w-full"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                        className="p-2 border border-gray-300 rounded-lg w-full"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="sr-only">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full p-2 border border-gray-300 rounded-lg mt-4"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                            {status && (
                                <p
                                    className={`mt-2 text-sm ${
                                        status.includes("Error") ? "text-red-600" : "text-green-600"
                                    }`}
                                >
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
