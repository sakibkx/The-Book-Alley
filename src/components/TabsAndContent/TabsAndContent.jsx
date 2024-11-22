
const TabsAndContent = () => {
  return (
    <div className="text-slate-500 mx-6">
      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab text-lg font-semibold" aria-label="Read Books" />
        <div role="tabpanel" className="tab-content border-t-slate-300 p-6">
          Tab content 1
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg font-semibold"
          aria-label="Wishlisted Books"
          defaultChecked />
        <div role="tabpanel" className="tab-content border-t-slate-300 p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default TabsAndContent;