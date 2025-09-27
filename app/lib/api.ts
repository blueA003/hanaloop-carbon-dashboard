import { companies, countries, posts } from "./seed";
import { Post } from "./types";

const _countries = [...countries];
const _companies = [...companies];
let _posts = [...posts];

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const jitter = () => 200 + Math.random() * 600;
const maybeFail = () => Math.random() < 0.1; // 실패 확률 10%

export async function fetchCountries() {
  await delay(jitter());
  if (maybeFail()) throw new Error("국가 데이터를 불러오는 데 실패했습니다.");
  return _countries;
}

export async function fetchCompanies() {
  await delay(jitter());
  if (maybeFail()) throw new Error("회사 데이터를 불러오는 데 실패했습니다.");
  return _companies;
}

export async function fetchPosts() {
  await delay(jitter());
  if (maybeFail()) throw new Error("게시물을 불러오는 데 실패했습니다.");
  return _posts;
}

export async function createOrUpdatePost(p: Omit<Post, "id"> & { id?: string }) {
  await delay(jitter());
  if (maybeFail()) throw new Error("저장 실패");
  if (p.id) {
    _posts = _posts.map((x) => (x.id === p.id ? (p as Post) : x));
    return p as Post;
  }
  const created = { ...p, id: crypto.randomUUID() };
  _posts = [..._posts, created];
  return created;
}

export async function deletePost(id: string) {
  await delay(jitter());
  if (maybeFail()) throw new Error("삭제 실패");
  _posts = _posts.filter((p) => p.id !== id);
  return true;
}
