'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { blogList, blogLatest, getCategories } from '../api/blogAPI';
import AOS from 'aos';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function AppWrapper({ children }) {
  // Initialize AOS
  useEffect(() => {
    AOS.init();
  }, []);

  const pathname = usePathname();

  // Blog state management
  let savedlatestPostData = [];
  try {
    if (typeof window !== 'undefined') {
      savedlatestPostData = JSON.parse(sessionStorage.getItem('latestPostData') || "[]");
    }
  } catch (error) {
    console.error('Error parsing latestPostData from sessionStorage:', error);
    savedlatestPostData = [];
  }

  const [postsLatest, setPostsLatest] = useState(savedlatestPostData || []);
  const [PostsCategories, setPostsCategories] = useState();
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 12;

  // Add page class to body
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const pathClass = pathname === "/"
        ? "home"
        : pathname.replace(/\//g, "-").replace(/^-|-$/g, "");
      document.body.classList.add(`page-${pathClass}`);
      return () => {
        document.body.classList.remove(`page-${pathClass}`);
      };
    }
  }, [pathname]);

  // Fetch latest posts
  useEffect(() => {
    const fetchDataLatest = async () => {
      try {
        const dataLatest = await blogLatest();
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('latestPostData', JSON.stringify(dataLatest));
        }
        setPostsLatest(dataLatest);
      } catch (err) {
        console.log('Error during getting the latest post:', err);
      }
    };

    if (!postsLatest?.length) fetchDataLatest();
  }, [postsLatest?.length]);

  // Fetch categories
  useEffect(() => {
    const fetchCateLatest = async () => {
      try {
        const dataCat = await getCategories();
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('latestCat', JSON.stringify(dataCat));
        }
        setPostsCategories(dataCat);
      } catch (err) {
        console.log('Error during getting the latest post:', err);
      }
    };

    if (!PostsCategories?.length) fetchCateLatest();
  }, [PostsCategories?.length]);

  const handleTabClick = (categoryId) => {
    if (activeCategory !== categoryId) {
      setActiveCategory(categoryId);
      setPosts([]);
      setCurrentPage(1);
    }
  };

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await blogList(currentPage, limit, activeCategory);
        const { data, total } = response;
        if (!data) throw new Error("No data found");
        setTotalPosts(total);
        setPosts((prevPosts) => {
          const uniquePosts = data?.filter(
            (newPost) => !prevPosts.some((post) => post.id === newPost.id)
          );
          return [...prevPosts, ...uniquePosts];
        });
      } catch (error) {
        setError(error);
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage, activeCategory]);

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Pass all the data to children
  const childrenWithProps = React.cloneElement(children, {
    postsLatest,
    PostsCategories,
    posts,
    activeCategory,
    handleTabClick,
    totalPosts,
    loading,
    handleNext,
    error
  });

  return (
    <div className="App">
      {childrenWithProps}
    </div>
  );
}