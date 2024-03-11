import { useEffect } from 'react'
import { usePostsContext } from "../hooks/usePostsContext"
import { useAuthContext } from "../hooks/useAuthContext"

// components
import PostDetails from '../components/PostDetails'
import PostForm from '../components/PostForm'
import Filter from '../components/Filter'
import BottomNavbar from '../components/BottomNavbar'

import Navbar from '../components/Navbar'
import BubbleNav from '../components/BubbleNav'



const Home = () => {
  const { posts, dispatch } = usePostsContext()
  const { user } = useAuthContext()

  useEffect(() => {
    document.title = "Audory"
    const fetchPosts = async () => {
      const response = await fetch('/api/posts', {
        headers: { 'Authorization': `Bearer ${user.token}` },
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_POSTS', payload: json })
      }
    }

    if (user) {
      fetchPosts()
    }
  }, [dispatch, user])

  return (
    <div className="home">
      <Navbar />
      <BottomNavbar />
      <BubbleNav />
      <div className="flex flex-col sm:p-10 ">
        <div className="flex flex-col self-center p-5 mb-3 mt-[4.75rem] bg-gray-500 shadow-[0px_0px_10px_0px_#1e1b4b] rounded-xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-700 text-white w-11/12">
          <div className='mb-5 text-2xl md:text-3xl lg:text-4xl'>Feedback</div>
          <Filter />
          {posts && posts.map((post) => (
            <PostDetails key={post._id} post={post} />
          ))}
        </div>
        
            <PostForm />
          
        

      </div>

    </div>
  )
}

export default Home