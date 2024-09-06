import millify from "millify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video,isRow }) => {
  const [isHover, setIsHover] = useState(false);
 const navigate = useNavigate();

 if(video.type !== "video") return;
  return (
    <div
    onClick={() => navigate(`/watch?v=${video.videoId}`)}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className={`${isRow ? 'row': ''} "cursor-pointer" `}
    >
      {/* Resim Alanı */}
      <div className="">
        <img
          src={
            isHover && video.richThumbnail
              ? video.richThumbnail[0].url
              : video.thumbnail[video.thumbnail.length - 1].url
          }
          alt=""
          className="w-[400px] h-[200px] rounded-lg"
        />
      </div>
      {/* Video Alt Detay Alanı */}
      <div className="flex gap-2 mt-5">
        <img
          src={video.channelThumbnail && video.channelThumbnail[0].url}
          alt="logo"
          className="w-8 h-8 rounded-full c-pic "
        />
        <div>
          <h4 className=" font-bold line-clamp-2">{video.title}</h4>
          <p>{video.channelTitle}</p>
          <div className="flex gap-3">
            <p className="flex gap-1">
              <span>{millify(video.viewCount)}</span>
              <span className="text">Görüntülenme</span>
            </p>
            *{" "}
            <p className="whitespace-nowrap text-[14px]">
              {" "}
              {video.publishedTimeText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
