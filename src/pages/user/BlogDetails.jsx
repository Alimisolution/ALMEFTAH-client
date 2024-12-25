import BlogDetailsHeadingSection from "../../components/user/blog-details/BlogDetailsHeadingSection";
import blogImg from "../../assets/images/blog-details/img.jpg";
import  EmptyHeartIcon from "../../assets/icons/EmptyHeartIcon";
const BlogDetails = () => {
  return (
    <>
      <BlogDetailsHeadingSection />
      <section className="md:px-[80px] px-[8px] mt-[59px] mb-[40px]">
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels.
        </p>
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>{" "}
        <h2 className="text-[24px] text-[#181A2A] font-[600] leading-[28px] mb-[16px]">
          Research Your Destination
        </h2>
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
        <h2 className="text-[24px] text-[#181A2A] font-[600] leading-[28px] mb-[16px]">
          Plan Your Itinerary{" "}
        </h2>
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          While it's essential to leave room for spontaneity and unexpected
          adventures, having a rough itinerary can help you make the most of
          your time and budget. Identify the must-see sights and experiences and
          prioritize them according to your interests and preferences. This will
          help you avoid overscheduling and ensure that you have time to relax
          and enjoy your journey.{" "}
        </p>
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
          lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
          felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.{" "}
        </p>
        <img
          src={blogImg}
          alt="Blog"
          className="w-full h-full block mb-[40px]"
        />
        <h2 className="text-[24px] text-[#181A2A] font-[600] leading-[28px] mb-[16px]">
          Immerse Yourself in the Local Culture{" "}
        </h2>
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          One of the most rewarding aspects of traveling is immersing yourself
          in the local culture and customs. This includes trying local cuisine,
          attending cultural events and festivals, and interacting with locals.
          Learning a few phrases in the local language can also go a long way in
          making connections and showing respect.
        </p>
        <h2 className="text-[24px] text-[#181A2A] font-[600] leading-[28px] mb-[16px]">
          Capture Memories{" "}
        </h2>
        <p className="text-[20px] text-[#3B3C4A] font-[400] leading-[32px] mb-[40px]">
          Finally, don't forget to capture memories of your journey. Whether
          it's through photographs, journaling, or souvenirs, preserving the
          moments and experiences of your travels can bring joy and nostalgia
          for years to come. However, it's also essential to be present in the
          moment and not let technology distract you from the beauty of your
          surroundings.
        </p>
        <div className="flex items-center justify-center gap-[10px] min-h-[73px] w-[182px] text-[20px] text-[#000000] font-[700] leading-[22px] tracking-[-1%] border-2 border-[#C4D9F22] rounded-[10px] bg-white">
<EmptyHeartIcon width="48px" height="48px"/> 25 K
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
