import React from 'react'

class Index extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>Youtube images</h2>
          {
            this.props.data.images.edges.map(({ node }) => {
              // console.log(node.relativePath.slice(0, 6));
              // return node.relativePath.slice(0, 6) == 'ytImgs' ? <img key={node.relativePath} src={'data/' + node.relativePath}></img> : null
              return (
                <div>
                  {node.title}
                  <img src={node.image.children[0].small.src}></img>
                </div>
              )
            })
          }
        </div>
        <div>
          <h2>Google Sheet import</h2>
          <ul>
            {
              this.props.data.sheet.edges.map(({ node })=> {
                return <li key={node.text}>{node.text}</li>
              })
            }
          </ul>
        </div>
        <div>
          <h2>Facebook ratings</h2>
          <ul>
            {
              this.props.data.ratings.edges.map(({ node }) => {
                return (
                  <li key={node.created_time}>{node.reviewer.name + ': \"' + node.review_text + '\"'}</li>
                )
              })
            }
          </ul>
        </div>
        <div>
          <h2>Markdown posts</h2>
          <div>
            {
              this.props.data.posts.edges.map(({ node }) => {
                return (
                  <div key={node.id}>
                    <h3>{node.frontmatter.title}</h3>
                    {
                      node.frontmatter.imagePath ?
                      <img src={node.frontmatter.imagePath.children[0].small.src}></img> : null
                    }
                    <div
                      dangerouslySetInnerHTML={{
                        __html: node.html,
                      }}
                    ></div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div>
          Images
        </div>
      </div>
    )
  }
}

export default Index

export const pageQuery = `
query {
  images: allMusic {
    edges {
      node {
        id
        title
        image {
          children {
            ... on ImageSharp {
              small: responsiveSizes(maxWidth: 292) {
                src
                srcSet
              }
              big: responsiveSizes(maxWidth: 640, maxHeight: 640) {
                src
                srcSet
              }
            }
          }
        }
      }
    }
  }
  sheet: allSheet {
    edges {
      node {
        text
      }
    }
  }
  ratings: allRatings {
    edges {
      node {
        reviewer {
          id
          name
        },
        rating
        review_text
        created_time
      }
    }
  }
  posts: allMarkdownRemark {
    edges {
      node {
        id
        excerpt(pruneLength: 300)
        html
        frontmatter {
          title
          date
          layout
          imagePath {
            children {
              ... on ImageSharp {
                small: responsiveSizes(maxWidth: 100) {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
}
`
