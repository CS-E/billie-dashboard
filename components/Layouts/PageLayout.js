const PageLayout = (Page) => {
  return (props) => {
    return <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }} className="nord-dark">
        <div style={{ flex: "1" }}>
          <Page {...props} />
        </div>
      </div>
  };
};

export default PageLayout;