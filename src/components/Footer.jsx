import { Link, useParams } from "react-router-dom";

const Footer = ({ lastId }) => {
  const { slug, id } = useParams();
  return (
    <div className="flex justify-between">
      {id > 1 && (
        <Link
          to={`/${slug}/${id - 1}`}
          className="flex justify-start items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>

          <div className="text-[12px] px-2">Previous Chapter</div>
        </Link>
      )}
      {id < lastId && (
        <Link
          to={`/${slug}/${parseInt(id) + 1}`}
          className="flex justify-start items-center"
        >
          <div className="text-[12px] px-2">Next Chapter</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Footer;
