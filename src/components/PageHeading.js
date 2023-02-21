const PageHeading = ({ pageTitle, pageDescription }) => {
  return (
    <>
      <div className="section-title">
        <h2>{pageTitle}</h2>
        <p>{pageDescription}</p>
      </div>
    </>
  );
};
export default PageHeading;
