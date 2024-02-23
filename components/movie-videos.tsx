import { API_URL } from "../app/(home)/page";

export const getVideos = async (id: string) => {
  const res = await fetch(`${API_URL}/${id}/videos`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  throw new Error("ㅋㅋㄹㅃㅃ");
  return res.json();
};

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
