import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/Api";
import ReactPlayer from "react-player";
import ChannelInfo from "./ChannelInfo";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import VideoCard from "./../../components/VideoCard"

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [comments, setComment] = useState(null);
  //Arama parametrelerine erişim için kulllanılmıştır.
  const [searchParams] = useSearchParams();
  // Url'den "v" isimli parametreye searchParams içindeki get methodu ile değere erişildi.
  const id = searchParams.get("v");

  // Id'si bilinen videonun bilgilerini apiden alma
  useEffect(() => {
    api.get(`/video/info?id=${id}&extend=1`).then((res) => setVideo(res.data));

    api.get(`/comments?id=${id}`).then((res) => setComment(res.data));
  }, [id]);

 
  return (
    <div className="detail-page h-screen p-[20px]  md:p-[40px]  lg:px-[50px] xl-[100px]">
      {/* video içeriği */}
      <div className="">
       <div className="h-[30vh]  md:h-[50vh] lg:h-[60vh]">
        <ReactPlayer
         width={'100%'} 
        height={'100%'} 
        url={`https://www.youtube.com/watch?v=${id}`}/>
       </div>
      {!video || !comments ?(
        <p>Yükleniyor</p>
      ) : ( 
      <>
       <ChannelInfo video={video}/>
       <VideoInfo video={video}/>
       <Comments data={comments}/>
       </>
      )}
      </div>

      {/* Alakalı Videolar  */}
      <div className=" wrapper flex flex-col gap-5 ps-5">
        {video?.relatedVideos.data.map((item) => (
          <VideoCard isRow ={true} key ={item.videoId} video={item}/>
          ))}
      </div>
</div>
  );
};

export default VideoDetail;
