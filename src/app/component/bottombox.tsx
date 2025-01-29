
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import bottombox1image from "@/app/lib/bottombox1image.png"

// const BottomBox1 = ()=>{
//     return(
//         // <div className=" bg-primary w-[1921px] h-[574px] py-14 px-28">
//         //     <Image
//         //     src={bottombox1image}
//         //     alt="image"
//         //     width={1921}
//         //     height={574}
//         //     />
//         // </div>

//         <div>
            
//         </div>
//     )
// }

// export default BottomBox1

// ---------------------------
"use client";
import React, { useState } from "react";

interface Story {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SuccessStories: React.FC = () => {
  const stories: Story[] = [
    {
      id: 1,
      title: "ManPower Recrutriment",
      description:
        "This is a short description of success story 1. It highlights the achievement and the positive impact it had on the community.",
      image: "https://catalog.wlimg.com/5/290338/small-images/manpower-recruitment-7535.jpg",
    },
    {
      id: 2,
      title: "Immigration Service",
      description:
        "This is a short description of success story 2. It showcases the progress made and the journey toward success.",
      image: "https://content3.jdmagicbox.com/comp/vadodara/r4/0265px265.x265.180731112029.d6r4/catalogue/arpan-immigration-services-manjalpur-vadodara-visa-assistance-35r1sfjabb.jpg",
    },
    {
      id: 3,
      title: "Banking Investment and Finance",
      description:
        "This is a short description of success story 3. It reflects the challenges faced and how they were overcome.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXGRBQruzFZ_GAtvhCoVqUT7UA51OaVi__w&s",
    },
    {
      id: 4,
      title: "Success Story 4",
      description:
        "This is a short description of success story 4. It demonstrates the creative solutions implemented to achieve success.",
      image: "https://www.mangobaaz.com/wp-content/uploads/2024/10/ecommerce-760x510.jpg",
    },
    {
      id: 5,
      title: "Success Story 5",
      description:
        "This is a short description of success story 5. It highlights the teamwork and effort involved.",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 6,
      title: "Success Story 6",
      description:
        "This is a short description of success story 6. It emphasizes the importance of perseverance.",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expandedStory, setExpandedStory] = useState<number | null>(null);
  const storiesPerPage = 4;

  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const currentStories = stories.slice(indexOfFirstStory, indexOfLastStory);

  const handleToggleDescription = (id: number) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  const totalPages = Math.ceil(stories.length / storiesPerPage);

  return (
    <div className=" p-8">
      <h2 className="font-bold  text-red-900 text-2xl md:text-2xl lg:text-2xl mb-4">
        Success Stories
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {currentStories.map((story) => (
          <div
            key={story.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {story.title}
              </h3>
              <p className="text-gray-600 text-base">
                {expandedStory === story.id
                  ? story.description
                  : `${story.description.substring(0, 50)}...`}
              </p>
              <button
                onClick={() => handleToggleDescription(story.id)}
                className="mt-2 text-blue-500 hover:underline"
              >
                {expandedStory === story.id ? "View Less" : "View More"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-red-900 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === index + 1
                ? "bg-red-900 text-white"
                : "bg-red-700 text-white"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-red-700 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SuccessStories;
