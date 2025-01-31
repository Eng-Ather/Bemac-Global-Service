"use client"

import { useState } from "react";

const RatingAndReview = () => {
    const [rating, setRating] = useState<number>(0);
    const [review, setReview] = useState<string>("");

    const handleSubmit = () => {
        if (!rating || !review) {
            alert("Please write a review before submitting.");
            return;
        }

        const currentDate = new Date();                     // To get current date and time
        const formattedDate = currentDate.toLocaleString(); // Format the date and time

        const reviewData = { // Create an object to submit review in DB
            rating: rating,
            review: review,
            dateAndTime: formattedDate
        };

        console.log("Submitted Review Data: ", reviewData); 
        setRating(0);
        setReview("");
    };

    return (
        <div className="w-full md:w-2/3 space-y-6 mx-auto p-4 bg-white rounded-lg shadow-lg mb-8">
          
            {/* Star Rating Section */}

            <div className="flex flex-col md:flex-row gap-6">
            <div className="flex space-x-4 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button
                        key={star}
                        className={`text-4xl transition-colors duration-200 ${
                            rating >= star ? "text-red-900" : "text-gray-300"
                        } hover:text-red-900`}
                        onClick={() => setRating(star)}
                    >
                        ★
                    </button>
                ))}
            </div>

            {/* Review Textarea */}
            <textarea
                className="w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500 transition-all duration-200"
                rows={4}
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
            />
                </div>
            {/* Submit Button */}
            <button
                className="px-4 py-2 mt-4 bg-red-900 text-white font-semibold rounded-md hover:bg-red-950 transition-all duration-200"
                onClick={handleSubmit}
            >
                Submit Review
            </button>
        </div>
    );
};

export default RatingAndReview;
