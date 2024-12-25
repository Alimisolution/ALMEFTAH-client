import React from "react";
import BlogCard from "../../components/user/blog/BlogCard";
import blogImg from "../../assets/images/blog/img.jpg";
import logoImg from "../../assets/images/logo/favicon.png";
import BlogHeadingSection from "../../components/user/blog/BlogHeadingSection";

const blogData = [
  {
    image: blogImg,
    category: "Real estate",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    authorLogo: logoImg,
    authorName: "ALMEFTAH",
    date: "August 20, 2022",
  },
  {
    image: blogImg,
    category: "Technology",
    title: "How Artificial Intelligence is Shaping the Future of Work",
    authorLogo: logoImg,
    authorName: "JOHN DOE",
    date: "July 10, 2023",
  },
  {
    image: blogImg,
    category: "Business",
    title: "The Future of Remote Work: Challenges and Opportunities",
    authorLogo: logoImg,
    authorName: "JANE SMITH",
    date: "May 15, 2023",
  },
  {
    image: blogImg,
    category: "Finance",
    title: "Investment Strategies for the Modern Economy",
    authorLogo: logoImg,
    authorName: "SARAH LEE",
    date: "March 25, 2023",
  },
  {
    image: blogImg,
    category: "Health",
    title: "The Role of Mental Health in the Workplace",
    authorLogo: logoImg,
    authorName: "MARK TAYLOR",
    date: "January 30, 2023",
  },
];

const Blog = () => {
  return (
    <>
      <BlogHeadingSection />
      <section className="md:px-[80px] px-[8px] mt-[50px] mb-[78px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] justify-center px-[40px] sm:px-[60px] md:px-[80px] lg:px-[100px] xl:px-[145px]">
          {blogData.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              category={blog.category}
              title={blog.title}
              authorLogo={blog.authorLogo}
              authorName={blog.authorName}
              date={blog.date}
            />
          ))}
        </div>
        <div className="flex justify-center mt-[32px]">
          <button className="px-[20px] py-[12px] bg-transparent border border-[#696a754d] text-[#696A75)] text-[16px] font-[500] leading-[24px] rounded-[6px] ">
            Load More
          </button>
        </div>
      </section>
    </>
  );
};

export default Blog;
