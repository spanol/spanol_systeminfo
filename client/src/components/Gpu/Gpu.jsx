const Gpu = ({ data }) => {
  const { controllers, displays } = data;
  return (
    <div className="gpu">
      <h1>Graphics info:</h1>
      {/* testar em mais c mais de uma teala */}

      {controllers.map(({ vendor, model, subDeviceId, vram }) => (
        <div className="controllers" key={"controller"}>
          <h3>Controllers</h3>
          <>
            <p>{vendor}</p>
            <p>{model}</p>
            <p>{subDeviceId}</p>
            <p>{vram}</p>
          </>
        </div>
      ))}

      {displays.map(
        ({
          vendor,
          model,
          resolutionX,
          resolutionY,
          currentRefreshRate,
          sizeX,
          sizeY,
        }) => (
          <div className="displays" key={"display"}>
            <h3>Displays</h3>
            <>
              <p>{vendor}</p>
              <p>{model}</p>
              <p>{resolutionX}</p>
              <p>{resolutionY}</p>
              <p>{currentRefreshRate}</p>
              <p>{sizeX}</p>
              <p>{sizeY}</p>
            </>
          </div>
        )
      )}
    </div>
  );
};

export default Gpu;