import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero bg-zinc-200 rounded-2xl h-[480px] mb-24">
      <div className="hero-content flex-col justify-between lg:flex-row">
        <img
          src="../../../public/Photos/Banner.jpg"
          className="max-w-sm rounded-lg shadow-2xl" />
        <div className="w-3/5">
          <h1 className="text-5xl font-bold font-serif mb-16">Books open your mind, broaden your horizons, and feed your soul.</h1>
          <Link to="/listedBooks">
            <button className="btn btn-success text-white text-xl font-bold">View The List</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;