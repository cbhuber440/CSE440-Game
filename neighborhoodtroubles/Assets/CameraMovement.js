#pragma strict

var myTerrain : Terrain; // link from inspector or obtained via GetComponent / Object.Find
 
//this value is used to further clamp the camera away from the edge.
//Transform will not travel closer than nonPassibleBorderWidth from a terrain edge
var nonPassibleBorderWidth:float = 0;
 
var mapMinBounds:Vector3;
var mapMaxBounds:Vector3;
 
function Start()
    {
    //calculate Terrain bounds
    var myTerrainTransform=myTerrain.transform;
    mapMinBounds =Vector3(myTerrainTransform.position.x,0,myTerrainTransform.position.z);
    mapMaxBounds+=minBounds+Vector3(myTerrain.terrainData.size.x,0,myTerrain.terrainData.size.z);
 
    //apply any border edging spce clamping
    mapMinBounds.x+=nonPassibleBorderWidth;
    mapMinBounds.z+=nonPassibleBorderWidth;
    mapMaxBounds.x-=nonPassibleBorderWidth;
    mapMaxBounds.z-=nonPassibleBorderWidth;
    }
 
function Update()
    {
    //bounds check on camera transform code
    if(transform.position.x > maxBounds.x) {
        transform.position.x = maxBounds.x;
        }
    if(transform.position.z > maxBounds.z) {
        transform.position.z = maxBounds.z;
        }
    if(transform.position.x < minBounds.x) {
        transform.position.x=minBounds.x;
        }
    if(transform.position.z < minBounds.z) {
        transform.position.z=minBounds.z;
        }
    }