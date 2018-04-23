import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import CreatePostMutation from '../mutations/CreatePostMutation'
import { QueryRenderer, graphql } from 'react-relay'
import environment from '../Environment'
import Loading from '../assets/images/loading.gif'
import DefaultImg from '../assets/images/default.jpeg'
import { GC_USER_ID } from '../constants'
import styled, { css } from 'styled-components'

const CreatePostViewerQuery = graphql`
  query CreatePostViewerQuery {
    viewer {
      id,
      allPosts(
        last: 100,
        orderBy: createdAt_DESC
      ) @connection(
        key: "ListPage_allPosts",
        filters: []
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`

class CreatePost extends PureComponent {
  state = {
    description: '',
    imageUrl: '',
    siteUrl: ''
  }
  componentDidMount(){
    const userId = localStorage.getItem(GC_USER_ID)
    if(!userId) this.props.history.replace('/')
  }
  render() {
    const { description, imageUrl, siteUrl } = this.state

    return (
      <QueryRenderer
        environment={environment}
        query={CreatePostViewerQuery}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>
          } else if (props) {
            return (
              <Wrapper>
                <div>
                  <Input
                    type='text'
                    value={description}
                    placeholder='Description'
                    onChange={(e) => this.setState({ description: e.target.value })}
                  />
                  <Input
                    type='text'
                    value={imageUrl}
                    placeholder='Image Url'
                    onChange={(e) => this.setState({ imageUrl: e.target.value })}
                  />
                  <Input
                    type='text'
                    value={siteUrl}
                    placeholder='Site Url'
                    onChange={(e) => this.setState({ siteUrl: e.target.value })}
                  />
                  {imageUrl &&
                    <img
                      src={imageUrl}
                      onError={e => e.target.src = DefaultImg}
                      alt={description}
                    />
                  }
                  {description && imageUrl && siteUrl &&
                    <PostBtn onClick={() => this._handlePost(props.viewer.id)}>
                      Post
                    </PostBtn>
                  }
                  <LinkContainer>
                    <Link to="/" >
                      Cancel
                    </Link>
                 </LinkContainer>
               </div>
             </Wrapper>
            )
          }
          return (
            <Wrapper>
              <img
                src={Loading}
                alt="Loading..."
              />
            </Wrapper>
          )
        }}
      />
    )
  }
  _handlePost = viewerId => {
    const { description, imageUrl, siteUrl } = this.state,
    postedById = localStorage.getItem(GC_USER_ID)

    CreatePostMutation(
      description,
      imageUrl,
      siteUrl,
      postedById,
      viewerId,
      () => this.props.history.replace('/')
    )
  }
}

export default CreatePost

const Dim = css`
  opacity: 1;
  transition: opacity .15s ease-in;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
  }
`,
Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  justify-content: center;
  display: flex;

  div {
    max-width: 400px;

    img {
      width: 100%;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`,
Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-top: .5rem;
  margin-bottom: .5rem;
  box-sizing: border-box;
`,
LinkContainer = styled.div`
  text-align: center;
  color: red;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
  ${Dim}
`,
PostBtn = styled.button`
  padding: 1rem;
  text-transform: uppercase;
  background-color: rgba( 0, 0, 0, .1 );
  border: none;
  ${Dim}
`