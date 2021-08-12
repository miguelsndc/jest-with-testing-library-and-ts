import type { NextPage } from "next";

import Counter from "../components/Counter/Counter";

const Home: NextPage = () => {
  return (
    <div>
      <Counter description="Hello Testing react fellas" defaultCounter={0} />
    </div>
  );
};

export default Home;
