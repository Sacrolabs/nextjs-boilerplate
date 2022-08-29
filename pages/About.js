import Axios from "axios";
import styles from "../styles/About.module.css";

const Contact = (props) => {
  const posts = props.data;

  return (
    <div className={styles.about_section}>
      <ol>
        {posts.map((post, id) => (
          <li key={post.id}>
            <a className={styles.data_title}>{post.title}</a>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contact;

export const getStaticProps = async () => {
  const res = await Axios.get("https://jsonplaceholder.typicode.com/posts");
  return {
    props: { data: res.data.slice(0, 10) },
  };
};
