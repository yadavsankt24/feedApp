import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
    const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
      const response = await axios.post('http://localhost:3000/create-post', formData)
      console.log(response.data)
      navigate('/feed')
  }

  return (
    <section className="create-post">
        <h2>Create Post</h2>
        <form onSubmit={handleSubmit}>
            <input type="file" name='image' accept="image/*" />
            <input type="text" name='caption' placeholder='Enter caption' required />
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default CreatePost
