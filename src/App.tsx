import React, { useCallback, useRef } from 'react';
import { Cartesian3, Color, Viewer as CesiumViewer, Cesium3DTileset } from "cesium";
import { Viewer, Entity, Cesium3DTileset as Resium3DTileset, CesiumComponentRef } from "resium";

function App()
{
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);

  const onAllTilesLoad = useCallback(() =>
  {
    console.log("onAllTilesLoad")
  }, [])

  const onInitialTilesLoad = useCallback(() =>
  {
    console.log("onInitialTilesLoad")
  }, [])

  const onTileFailed = useCallback((error: any) =>
  {
    console.log("onTileFailed", error)
  }, [])

  const onTileLoad = useCallback((tile: Cesium3DTileset) =>
  {
    console.log("onTileLoad", tile)
  }, [])

  const onTileUnload = useCallback(() =>
  {
    console.log("onTileUnload")
  }, [])

  return (
    <Viewer full ref={ref}>
      <Resium3DTileset
        url="http://data.mars3d.cn/3dtiles/max-fsdzm/tileset.json"
        onAllTilesLoad={onAllTilesLoad}
        onInitialTilesLoad={onInitialTilesLoad}
        onTileFailed={onTileFailed}
        onTileLoad={onTileLoad}
        onTileUnload={onTileUnload}
        onReady={tileset =>
        {
          ref.current?.cesiumElement?.zoomTo(tileset)
        }}
      />
    </Viewer>
  );
}

export default App;
