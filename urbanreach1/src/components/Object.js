import img from "./pic/ur.jpg";
import img1 from "./pic/ur1.png";
import img2 from "./pic/ur2.png";
import img3 from "./pic/ur3.png";
import img4 from "./pic/sad farmer.jpg";
import img5 from "./pic/hap farmer.jpg";

export const ob = {
  ob1: {
    title: "Urban Reach",
    page: "Instagram Page",
    content: "Please visit our Instagram Page!",
    link: "instagram.com/urbanreach.in/",
  },
  ob2: {
    title: "Urban Reach",
    page: "Facebook Page",
    content: "Please visit our facebook Page!",
    link: "facebook.com/urbanreach.in",
  },
  ob3: {
    title: "Urban Reach",
    page: "Twitter Page",
    content: "Please visit our Twitter Page!",
    link: "twitter.com/",
  },
};
export const obj = {
  ob1: {
    image: img1,
    title: "Read Blog",
    page: "Blog1",
    content: "Please visit our Blog Page!",
    link: "ureach.herokuapp.com/",
  },
  ob2: {
    image: img2,
    title: "Read Blog",
    page: "Blog2",
    content: "Please visit our Blog Page!",
    link: "ureach.herokuapp.com/",
  },
  ob3: {
    image: img3,
    title: "Read Blog",
    page: "Blog3",
    content: "Please visit our Blog Page!",
    link: "ureach.herokuapp.com/",
  },
};

export const Problem = () => {
  return (
    <div>
      <h3>Problems</h3>
      <img src={img4} class="card-img-top imc" alt="..." />
      <div class="card-body">
        <ul>
          <li>
            Farmers experience price risk, information asymmetry about demand,
            distribution inefficiency, and receive late payments.
          </li>
          <li>
            Retailers face problems like higher costs, low quality and
            unhygienic produce, high price volatility, and the everyday hassle
            of going to the market.
          </li>
          <li>
            The traditional Supply Chain is highly inefficient, unorganized, and
            has a high rate of food wastage.
          </li>
        </ul>
      </div>
    </div>
  );
};
export const Solution = () => {
  return (
    <div>
      <h3> Our Solution</h3>
      <img src={img5} class="card-img-top" alt="..." />
      <div class="card-body">
        <ul>
          <li>
            We eliminate intermediaries by taking control of the Supply Chain by
            using technology and analytics.
          </li>
          <li>
            We build reliable, cost-effective, and high-speed logistics and
            infrastructure to solve for inefficiencies in the Supply Chain.
          </li>
          <li>
            On one end, farmers get better prices and consistent demand, and on
            the other end, retailers receive fresh produce at competitive prices
            that are delivered to their doorstep.
          </li>
        </ul>
      </div>
    </div>
  );
};

export const Paragraph = () => {
  return (
    <div>
      <p className="text-white mx-2">
        Urban Reach is India's largest fresh produce supply chain company that
        is solving one of the toughest problems in the world through technology.
      </p>
      <p className="text-white mx-2 mb-4">
        We connect producers of food directly with retailers, restaurants, and
        service providers using in-house applications that drive end to end
        operations. we are ready to provide services to consumer 24*7.
      </p>
    </div>
  );
};
