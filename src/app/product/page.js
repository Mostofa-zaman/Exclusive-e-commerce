import BreadCrumb from "../components/common/BreadCrumb";
import Container from "../components/common/Container";
import ProductPageLeft from "../components/productPageComponents/ProductPageLeft";

export default function Product() {
  const {data, error , isLoading}= useGetAllProductCategoryListQuery ();
  return (
    <>
      <div className=" py-10">
        <Container>
          <BreadCrumb />
          <div className="flex justify-between ">
            {/* <ProductPageLeft
              categoryData={data}
              error={error}
              isLoading={isLoading}
            /> */}
            {/* <ProductPageRight /> */}
          </div>
        </Container>
      </div>
    </>
  );
}
