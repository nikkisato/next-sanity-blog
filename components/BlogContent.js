import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from "components/HighlightCode";
import { urlFor } from "lib/api"

const serializers = {
    types: {
      code: ({node: {language, code, filename}}) => {
        return (
          <HighlightCode language={language}>
            {code}
            <div className="code-filename">{filename}</div>
          </HighlightCode>
        )
      },
      image: ({node: {asset, alt}}) => {
        return (
          <div className="blog-image">
           <img src={urlFor(asset).height(300).fit('max').url()} />
            <div class="image-alt">{alt}</div>
          </div>
        )
      }
    }
}

const BlogContent = ({content}) =>
  <BlockContent
    serializers={serializers}
    blocks={content}
  />


export default BlogContent;