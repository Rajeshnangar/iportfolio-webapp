import PageHeading from "../components/PageHeading";
import factData from '../data/facts.json'
import FactItems from "../components/FactItems";

export default function Facts() {
  return (
    <>
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts">
        <div className="container">
          <PageHeading
            pageTitle="Facts"
            pageDescription="Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                Quia fugiat sit in iste officiis commodi quidem hic quas."
          />

          <div className="row no-gutters">
          <FactItems data={factData}/>
          </div>
        </div>
      </section>
      {/* End Facts Section */}
    </>
  );
}
