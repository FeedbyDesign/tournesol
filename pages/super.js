// import React from "react"
// import { rhythm } from "../utils/typography"
//
// class Super extends React.Component {
//   render() {
//     console.log('PROPS', this.props.data.allLyrics.edges)
//     return (
//       <div
//         css={{
//           padding: rhythm(3 / 4),
//         }}
//       >
//         <p>This is another simple page</p>
//         <ul>
//         {
//           this.props.data.allLyrics.edges.map(({ node })=> {
//             return <li key={node.id}>{node.content}</li>
//           })
//         }
//         </ul>
//       </div>
//     )
//   }
// }
//
// export default Super
//
// export const pageQuery = `
// query allLyricsContent {
//   allLyrics {
//     edges {
//       node {
//         id
//         content
//       }
//     }
//   }
// }
// `
