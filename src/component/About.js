import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <h3>This is About Us Page</h3>
      <p>Task-Tracker Website created in React JS,</p>
      <p>Created by Kevin..</p>
      <Link to="/">Go Back</Link>
    </>
  );
};

export default About;
