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
            <p>Vendor: {vendor}</p>
            <p>Model: {model}</p>
            <p>DeviceId: {subDeviceId}</p>
            <p>Vram: {vram}</p>
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
              Vendor: <p>{vendor}</p>
              Model: <p>{model}</p>
              Resolution: <p>{resolutionX}x{resolutionY}</p>
              Refreshrate: <p>{currentRefreshRate}</p>
              SizeX: <p>{sizeX}</p>
              SizeY: <p>{sizeY}</p>
            </>
          </div>
        )
      )}
    </div>
  );
};

export default Gpu;
