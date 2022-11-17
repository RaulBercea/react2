import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowById, ShowDetailType } from "../api";

const DetailPage = () => {
  const { showId } = useParams();
  const [showDetail, setShowDetail] = useState<ShowDetailType | null>(null);

  useEffect(() => {
    if (!!showId) {
      try {
        const showIdNum = parseInt(showId);
        getShowById(showIdNum).then((show) => {
          setShowDetail(show);
        });
      } catch (err) {
        console.log("NaN");
      }
    }
  }, [showId]);

  return <><img src={showDetail?.image} alt="" />
  {showDetail?.summary?.replace(/<[^>]*>/g, "")}</>;
};

export default DetailPage;
