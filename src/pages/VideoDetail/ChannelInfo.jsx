import millify from "millify";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";


const ChannelInfo = ({ video }) => {

  return (
    <>
      <h1 className="text-xl my-3 font-bold ">{video.title}</h1>

      <section className="flex justify-between">
        {/* sol */}
        <div className=" flex items-center gap-4">
          <img
            className="w-12 h-12 rounded-full "
            src={video.channelThumbnail[0].url}
            alt={video.channelTittle}
          />
        
        <div>
            <h4 className="font-bold">{video.channelTittle}</h4>
            <p className="text-gray-400">{video.subscriberCountText}</p>
        </div>
     </div>
     {/* sağ */}
     <div className="flex items-center bg-zinc-700 rounded-full cursor-pointer">
        <div className=" flex gap-1 items-center py-2 px-6 border-r">
            <AiOutlineLike/>
            {millify(video.likeCount)} 
            </div>
        <div className="py-2 px-6 ">
            <AiOutlineDislike />
        </div>
     </div>
      </section>
    </>
  );
};

export default ChannelInfo;
