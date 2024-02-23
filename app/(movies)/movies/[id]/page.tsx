import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async ({ params: { id } }: { params: { id: string } }) => {
  /* 1. 각각 request => 순차적으로 실행 */
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  /* 2. Promise.all 메서드 사용 => 병렬 request 처리를 하지만 Array로 묶인 요청의 응답을 전부 기다려야함 */
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  /* 3. suspense => 병렬 request 처리, 개별 response 처리, loading.tsx 파일도 필요 없음 */
  // suspense가 알아서 child component를 await로 처리 => 현재 컴포넌트를 async로 선언
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
};
