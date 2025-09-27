"use client";
import { FaEdit } from "react-icons/fa"; 
import { BsPlusSquare } from "react-icons/bs"; 
import { AiOutlineDelete } from "react-icons/ai"; 
import React, { useEffect, useState } from 'react'
import { Post } from '../../lib/types';
import { fetchPosts, createOrUpdatePost, deletePost } from '../../lib/api';
import PostModal from "./PostModal";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectPost, setSelectPost] = useState<Post | null>(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch(() => setError("게시물을 불러오는 데 실패했습니다."))
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async(p: Omit<Post, "id"> & { id?: string }) => {
    try {
      const saved = await createOrUpdatePost(p);
      setPosts((prev) =>
        p.id ? prev.map((x) => (x.id === saved.id ? saved : x)) : [...prev, saved]
      );
      setModalOpen(false);
    } catch (err) {
      setError("게시물 저장 실패");
    }
  }

  const handleDelete = async(id: string) => {
    const prev = [...posts];
    setPosts(posts.filter((p) => p.id !==id));
    try {
      await deletePost(id);
      setModalOpen(false);
    } catch (err) {
      setError("게시물 삭제 실패");
      setPosts(prev);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-400 border"></div>
        <span className="ml-3 text-blue-400 font-semibold">Loading posts...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-6">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 bg-white rounded-lg shadow border ">
      <div className="flex justify-between pb-2">
        <div className="text-2xl font-bold">Post</div>
        <button
          onClick={() => {
            setSelectPost(null);
            setModalOpen(true);
          }}
          className="flex justify-between items-center gap-1 text-3xl rounded "
        >
          <BsPlusSquare/><span className="pl-1 text-xl">Add Post</span>
        </button>
      </div>
      {posts.length === 0 ? (
        <div>게시물이 없습니다.</div>
      ) : (
        <table className="w-full border-collapse">
          <thead className="border-b font-semibold">
            <tr>
              <th className="text-left p-2">Title</th>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Content</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b align-middle">
                <td className="p-2">{post.title}</td>
                <td className="p-2">{post.dateTime}</td>
                <td className="p-2">{post.content}</td>
                <td className="p-2 text-right">
                  <div className="flex items-center justify-end">
                    <button
                      onClick={() => {
                        setSelectPost(post);
                        setModalOpen(true);
                      }}
                      className="pr-2 text-2xl"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-0 text-2xl"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <PostModal
        modalOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        post={selectPost}
      />
    </div>
  )
}
