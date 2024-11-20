import React, { useEffect, useState } from "react";
import AppService from "../appwrite/appconfig";
import { useNavigate, useParams } from "react-router-dom";
import { Container, PostForm } from "../components";


const EditPost = () => {

    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    const {slug} = useParams();

    useEffect(() => {
        if(slug){
            AppService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            });
        }else{
            navigate("/")
        }
    }, [slug, navigate]);

  return post ? (
    <div className=" py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null
}

export default EditPost