import axios from "axios";

const Article = (props) => {
  console.log(props);
  const result = props.result;
  return (
    <div>
      <div>{result.title}</div>
      <div>{result.overview}</div>
    </div>
  );
};

Article.getInitialProps = async ({ query }) => {
  const id = query.id;
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}}?api_key=e6e0dd53c79220875187320b4265f3d6&language=ko-KR`
  );
  return {
    result: data,
  };
};

export default Article;
