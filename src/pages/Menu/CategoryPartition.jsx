import CardFood from "./CardFood.jsx";
import clsx from "clsx";

function CategoryPartition({ className, infoFoodList, heading, img, isReserve, bgDark }) {
  return (
    <div className={clsx(className , 'pb-5', {'bg-dark': bgDark})}>
      <div className="container">
        <h1 className="text-success text-center text-uppercase py-5 fw-bold">
          {heading}
        </h1>
        {/*   */}
        <div
          className={clsx("row", {
            ["flex-row-reverse"]: isReserve,
          })}
        >
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={img} alt="" className={clsx("w-75 img-fluid", {'border-white': bgDark})} />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-around align-items-around">
            {infoFoodList.map((item, index) => (
              <CardFood itemBreakFast={item} key={index}></CardFood>
            ))}
          </div>
          {/* {breakfast.map((item, index) => )} */}
        </div>
      </div>
    </div>
  );
}

export default CategoryPartition;
