import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import useFetchPublicPost from '../../hooks/usefetchpublicpost'
import PublicPostComponent from '../../components/publicpost'

function PublicPost () {
  const [postId, setPostId] = useState(null)
  const router = useRouter()

  useFetchPublicPost(postId)

  useEffect(() => {
    if (router.isReady) {
      if (postId === null) {
        setPostId(router.query.id)
      }
    }
  }, [postId, router.isReady, router.query])
  return (
    <PublicPostComponent />
  )
}

export default PublicPost