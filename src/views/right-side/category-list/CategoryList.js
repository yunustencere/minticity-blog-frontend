import SingleCategoryListItem from "./SinleCategoryListItem";
import "./CategoryList.scss";
import { Link } from "react-router-dom";
import { CATEGORY_FORM } from "../../../routes/routes";

const CategoryList = () => {
  return (
    <div className="row category-list">
      <div className="col-lg-12">
        <div className="row justify-content-center py-3">
          <div className="col-lg-8">
            <h2 className="text-center font--prompt fs--18rem fsw--200">Category Options</h2>
          </div>
        </div>
        <SingleCategoryListItem />
        <SingleCategoryListItem />
        <SingleCategoryListItem />
        <div className="row g-0 pt-5">
          <div className="col-lg-12">
            <Link to={CATEGORY_FORM}>
              <button className="btn bg-green c-blue px-4 font--prompt fs--09rem fsw--500 br-2">
                Add New Category +
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
