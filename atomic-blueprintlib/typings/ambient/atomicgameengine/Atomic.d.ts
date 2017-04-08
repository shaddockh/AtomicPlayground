//////////////////////////////////////////////////////////
// IMPORTANT: THIS FILE IS GENERATED, CHANGES WILL BE LOST
//////////////////////////////////////////////////////////

// Atomic TypeScript Definitions

declare module Atomic {

   /** enum BodyType2D*/
   export enum BodyType2D {
       BT_STATIC,
       BT_KINEMATIC,
       BT_DYNAMIC
    }

   /** enum CurveType*/
   export enum CurveType {
       INSTANT,
       LINEAR,
       QUADRATIC,
       CUBIC
    }

   /** enum EmitterType2D*/
   export enum EmitterType2D {
       EMITTER_TYPE_GRAVITY,
       EMITTER_TYPE_RADIAL
    }

   /** enum LightType2D*/
   export enum LightType2D {
       LIGHT2D_DIRECTIONAL,
       LIGHT2D_POINT
    }

   /** enum LoopMode*/
   export enum LoopMode {
       Default,
       ForceLooped,
       ForceClamped
    }

   /** enum LoopMode2D*/
   export enum LoopMode2D {
       LM_DEFAULT,
       LM_FORCE_LOOPED,
       LM_FORCE_CLAMPED
    }

   /** enum ObjectType*/
   export enum ObjectType {
       BONE,
       SPRITE
    }

   /** enum Orientation2D*/
   export enum Orientation2D {
       O_ORTHOGONAL,
       O_ISOMETRIC,
       O_STAGGERED,
       O_HEXAGONAL
    }

   /** enum TileMapLayerType2D*/
   export enum TileMapLayerType2D {
       LT_TILE_LAYER,
       LT_OBJECT_GROUP,
       LT_IMAGE_LAYER,
       LT_INVALID
    }

   /** enum TileMapObjectType2D*/
   export enum TileMapObjectType2D {
       OT_RECTANGLE,
       OT_ELLIPSE,
       OT_POLYGON,
       OT_POLYLINE,
       OT_TILE,
       OT_INVALID
    }

   /** enum InstantiationType*/
   export enum InstantiationType {
       INSTANTIATION_NATIVE,
       INSTANTIATION_JAVASCRIPT,
       INSTANTIATION_NET
    }

   /** enum InterpolationMode*/
   export enum InterpolationMode {
       BEZIER_CURVE,
       CATMULL_ROM_CURVE,
       LINEAR_CURVE,
       CATMULL_ROM_FULL_CURVE
    }

   /** enum VariantType*/
   export enum VariantType {
       VAR_NONE,
       VAR_INT,
       VAR_BOOL,
       VAR_FLOAT,
       VAR_VECTOR2,
       VAR_VECTOR3,
       VAR_VECTOR4,
       VAR_QUATERNION,
       VAR_COLOR,
       VAR_STRING,
       VAR_BUFFER,
       VAR_VOIDPTR,
       VAR_RESOURCEREF,
       VAR_RESOURCEREFLIST,
       VAR_VARIANTVECTOR,
       VAR_VARIANTMAP,
       VAR_INTRECT,
       VAR_INTVECTOR2,
       VAR_PTR,
       VAR_MATRIX3,
       VAR_MATRIX3X4,
       VAR_MATRIX4,
       VAR_DOUBLE,
       VAR_STRINGVECTOR,
       MAX_VAR_TYPES
    }

   /** enum AnimationBlendMode*/
   export enum AnimationBlendMode {
       ABM_LERP,
       ABM_ADDITIVE
    }

   /** enum BlendMode*/
   export enum BlendMode {
       BLEND_REPLACE,
       BLEND_ADD,
       BLEND_MULTIPLY,
       BLEND_ALPHA,
       BLEND_ADDALPHA,
       BLEND_PREMULALPHA,
       BLEND_INVDESTALPHA,
       BLEND_SUBTRACT,
       BLEND_SUBTRACTALPHA,
       MAX_BLENDMODES
    }

   /** enum CompareMode*/
   export enum CompareMode {
       CMP_ALWAYS,
       CMP_EQUAL,
       CMP_NOTEQUAL,
       CMP_LESS,
       CMP_LESSEQUAL,
       CMP_GREATER,
       CMP_GREATEREQUAL,
       MAX_COMPAREMODES
    }

   /** enum CubeMapFace*/
   export enum CubeMapFace {
       FACE_POSITIVE_X,
       FACE_NEGATIVE_X,
       FACE_POSITIVE_Y,
       FACE_NEGATIVE_Y,
       FACE_POSITIVE_Z,
       FACE_NEGATIVE_Z,
       MAX_CUBEMAP_FACES
    }

   /** enum CubeMapLayout*/
   export enum CubeMapLayout {
       CML_HORIZONTAL,
       CML_HORIZONTALNVIDIA,
       CML_HORIZONTALCROSS,
       CML_VERTICALCROSS,
       CML_BLENDER
    }

   /** enum CullMode*/
   export enum CullMode {
       CULL_NONE,
       CULL_CCW,
       CULL_CW,
       MAX_CULLMODES
    }

   /** enum DeferredLightPSVariation*/
   export enum DeferredLightPSVariation {
       DLPS_NONE,
       DLPS_SPOT,
       DLPS_POINT,
       DLPS_POINTMASK,
       DLPS_SPEC,
       DLPS_SPOTSPEC,
       DLPS_POINTSPEC,
       DLPS_POINTMASKSPEC,
       DLPS_SHADOW,
       DLPS_SPOTSHADOW,
       DLPS_POINTSHADOW,
       DLPS_POINTMASKSHADOW,
       DLPS_SHADOWSPEC,
       DLPS_SPOTSHADOWSPEC,
       DLPS_POINTSHADOWSPEC,
       DLPS_POINTMASKSHADOWSPEC,
       DLPS_SHADOWNORMALOFFSET,
       DLPS_SPOTSHADOWNORMALOFFSET,
       DLPS_POINTSHADOWNORMALOFFSET,
       DLPS_POINTMASKSHADOWNORMALOFFSET,
       DLPS_SHADOWSPECNORMALOFFSET,
       DLPS_SPOTSHADOWSPECNORMALOFFSET,
       DLPS_POINTSHADOWSPECNORMALOFFSET,
       DLPS_POINTMASKSHADOWSPECNORMALOFFSET,
       DLPS_ORTHO,
       DLPS_ORTHOSPOT,
       DLPS_ORTHOPOINT,
       DLPS_ORTHOPOINTMASK,
       DLPS_ORTHOSPEC,
       DLPS_ORTHOSPOTSPEC,
       DLPS_ORTHOPOINTSPEC,
       DLPS_ORTHOPOINTMASKSPEC,
       DLPS_ORTHOSHADOW,
       DLPS_ORTHOSPOTSHADOW,
       DLPS_ORTHOPOINTSHADOW,
       DLPS_ORTHOPOINTMASKSHADOW,
       DLPS_ORTHOSHADOWSPEC,
       DLPS_ORTHOSPOTSHADOWSPEC,
       DLPS_ORTHOPOINTSHADOWSPEC,
       DLPS_ORTHOPOINTMASKSHADOWSPEC,
       DLPS_ORTHOSHADOWNORMALOFFSET,
       DLPS_ORTHOSPOTSHADOWNORMALOFFSET,
       DLPS_ORTHOPOINTSHADOWNORMALOFFSET,
       DLPS_ORTHOPOINTMASKSHADOWNORMALOFFSET,
       DLPS_ORTHOSHADOWSPECNORMALOFFSET,
       DLPS_ORTHOSPOTSHADOWSPECNORMALOFFSET,
       DLPS_ORTHOPOINTSHADOWSPECNORMALOFFSET,
       DLPS_ORTHOPOINTMASKSHADOWSPECNORMALOFFSET,
       MAX_DEFERRED_LIGHT_PS_VARIATIONS
    }

   /** enum DeferredLightVSVariation*/
   export enum DeferredLightVSVariation {
       DLVS_NONE,
       DLVS_DIR,
       DLVS_ORTHO,
       DLVS_ORTHODIR,
       MAX_DEFERRED_LIGHT_VS_VARIATIONS
    }

   /** enum EmitterType*/
   export enum EmitterType {
       EMITTER_SPHERE,
       EMITTER_BOX
    }

   /** enum FaceCameraMode*/
   export enum FaceCameraMode {
       FC_NONE,
       FC_ROTATE_XYZ,
       FC_ROTATE_Y,
       FC_LOOKAT_XYZ,
       FC_LOOKAT_Y,
       FC_LOOKAT_MIXED,
       FC_DIRECTION
    }

   /** enum FillMode*/
   export enum FillMode {
       FILL_SOLID,
       FILL_WIREFRAME,
       FILL_POINT
    }

   /** enum GeometryType*/
   export enum GeometryType {
       GEOM_STATIC,
       GEOM_SKINNED,
       GEOM_INSTANCED,
       GEOM_BILLBOARD,
       GEOM_DIRBILLBOARD,
       GEOM_TRAIL_FACE_CAMERA,
       GEOM_TRAIL_BONE,
       GEOM_STATIC_NOINSTANCING,
       MAX_GEOMETRYTYPES
    }

   /** enum LegacyVertexElement*/
   export enum LegacyVertexElement {
       ELEMENT_POSITION,
       ELEMENT_NORMAL,
       ELEMENT_COLOR,
       ELEMENT_TEXCOORD1,
       ELEMENT_TEXCOORD2,
       ELEMENT_CUBETEXCOORD1,
       ELEMENT_CUBETEXCOORD2,
       ELEMENT_TANGENT,
       ELEMENT_BLENDWEIGHTS,
       ELEMENT_BLENDINDICES,
       ELEMENT_INSTANCEMATRIX1,
       ELEMENT_INSTANCEMATRIX2,
       ELEMENT_INSTANCEMATRIX3,
       ELEMENT_OBJECTINDEX,
       MAX_LEGACY_VERTEX_ELEMENTS
    }

   /** enum LightPSVariation*/
   export enum LightPSVariation {
       LPS_NONE,
       LPS_SPOT,
       LPS_POINT,
       LPS_POINTMASK,
       LPS_SPEC,
       LPS_SPOTSPEC,
       LPS_POINTSPEC,
       LPS_POINTMASKSPEC,
       LPS_SHADOW,
       LPS_SPOTSHADOW,
       LPS_POINTSHADOW,
       LPS_POINTMASKSHADOW,
       LPS_SHADOWSPEC,
       LPS_SPOTSHADOWSPEC,
       LPS_POINTSHADOWSPEC,
       LPS_POINTMASKSHADOWSPEC,
       MAX_LIGHT_PS_VARIATIONS
    }

   /** enum LightType*/
   export enum LightType {
       LIGHT_DIRECTIONAL,
       LIGHT_SPOT,
       LIGHT_POINT
    }

   /** enum LightVSVariation*/
   export enum LightVSVariation {
       LVS_DIR,
       LVS_SPOT,
       LVS_POINT,
       LVS_SHADOW,
       LVS_SPOTSHADOW,
       LVS_POINTSHADOW,
       LVS_SHADOWNORMALOFFSET,
       LVS_SPOTSHADOWNORMALOFFSET,
       LVS_POINTSHADOWNORMALOFFSET,
       MAX_LIGHT_VS_VARIATIONS
    }

   /** enum LockState*/
   export enum LockState {
       LOCK_NONE,
       LOCK_HARDWARE,
       LOCK_SHADOW,
       LOCK_SCRATCH
    }

   /** enum PassLightingMode*/
   export enum PassLightingMode {
       LIGHTING_UNLIT,
       LIGHTING_PERVERTEX,
       LIGHTING_PERPIXEL
    }

   /** enum PrimitiveType*/
   export enum PrimitiveType {
       TRIANGLE_LIST,
       LINE_LIST,
       POINT_LIST,
       TRIANGLE_STRIP,
       LINE_STRIP,
       TRIANGLE_FAN
    }

   /** enum RayQueryLevel*/
   export enum RayQueryLevel {
       RAY_AABB,
       RAY_OBB,
       RAY_TRIANGLE,
       RAY_TRIANGLE_UV
    }

   /** enum RenderCommandSortMode*/
   export enum RenderCommandSortMode {
       SORT_FRONTTOBACK,
       SORT_BACKTOFRONT
    }

   /** enum RenderCommandType*/
   export enum RenderCommandType {
       CMD_NONE,
       CMD_CLEAR,
       CMD_SCENEPASS,
       CMD_QUAD,
       CMD_FORWARDLIGHTS,
       CMD_LIGHTVOLUMES,
       CMD_RENDERUI,
       CMD_SENDEVENT
    }

   /** enum RenderSurfaceUpdateMode*/
   export enum RenderSurfaceUpdateMode {
       SURFACE_MANUALUPDATE,
       SURFACE_UPDATEVISIBLE,
       SURFACE_UPDATEALWAYS
    }

   /** enum RenderTargetSizeMode*/
   export enum RenderTargetSizeMode {
       SIZE_ABSOLUTE,
       SIZE_VIEWPORTDIVISOR,
       SIZE_VIEWPORTMULTIPLIER
    }

   /** enum ShaderParameterGroup*/
   export enum ShaderParameterGroup {
       SP_FRAME,
       SP_CAMERA,
       SP_ZONE,
       SP_LIGHT,
       SP_MATERIAL,
       SP_OBJECT,
       SP_CUSTOM,
       MAX_SHADER_PARAMETER_GROUPS
    }

   /** enum ShaderType*/
   export enum ShaderType {
       VS,
       PS
    }

   /** enum ShadowQuality*/
   export enum ShadowQuality {
       SHADOWQUALITY_SIMPLE_16BIT,
       SHADOWQUALITY_SIMPLE_24BIT,
       SHADOWQUALITY_PCF_16BIT,
       SHADOWQUALITY_PCF_24BIT,
       SHADOWQUALITY_VSM,
       SHADOWQUALITY_BLUR_VSM
    }

   /** enum StencilOp*/
   export enum StencilOp {
       OP_KEEP,
       OP_ZERO,
       OP_REF,
       OP_INCR,
       OP_DECR
    }

   /** enum TextureAddressMode*/
   export enum TextureAddressMode {
       ADDRESS_WRAP,
       ADDRESS_MIRROR,
       ADDRESS_CLAMP,
       ADDRESS_BORDER,
       MAX_ADDRESSMODES
    }

   /** enum TextureCoordinate*/
   export enum TextureCoordinate {
       COORD_U,
       COORD_V,
       COORD_W,
       MAX_COORDS
    }

   /** enum TextureFilterMode*/
   export enum TextureFilterMode {
       FILTER_NEAREST,
       FILTER_BILINEAR,
       FILTER_TRILINEAR,
       FILTER_ANISOTROPIC,
       FILTER_DEFAULT,
       MAX_FILTERMODES
    }

   /** enum TextureUnit*/
   export enum TextureUnit {
       TU_DIFFUSE,
       TU_ALBEDOBUFFER,
       TU_NORMAL,
       TU_NORMALBUFFER,
       TU_SPECULAR,
       TU_EMISSIVE,
       TU_ENVIRONMENT,
       TU_LIGHTRAMP,
       TU_LIGHTSHAPE,
       TU_SHADOWMAP,
       MAX_MATERIAL_TEXTURE_UNITS,
       MAX_TEXTURE_UNITS
    }

   /** enum TextureUsage*/
   export enum TextureUsage {
       TEXTURE_STATIC,
       TEXTURE_DYNAMIC,
       TEXTURE_RENDERTARGET,
       TEXTURE_DEPTHSTENCIL
    }

   /** enum TrailType*/
   export enum TrailType {
       TT_FACE_CAMERA,
       TT_BONE
    }

   /** enum UpdateGeometryType*/
   export enum UpdateGeometryType {
       UPDATE_NONE,
       UPDATE_MAIN_THREAD,
       UPDATE_WORKER_THREAD
    }

   /** enum VertexElementSemantic*/
   export enum VertexElementSemantic {
       SEM_POSITION,
       SEM_NORMAL,
       SEM_BINORMAL,
       SEM_TANGENT,
       SEM_TEXCOORD,
       SEM_COLOR,
       SEM_BLENDWEIGHTS,
       SEM_BLENDINDICES,
       SEM_OBJECTINDEX,
       MAX_VERTEX_ELEMENT_SEMANTICS
    }

   /** enum VertexElementType*/
   export enum VertexElementType {
       TYPE_INT,
       TYPE_FLOAT,
       TYPE_VECTOR2,
       TYPE_VECTOR3,
       TYPE_VECTOR4,
       TYPE_UBYTE4,
       TYPE_UBYTE4_NORM,
       MAX_VERTEX_ELEMENT_TYPES
    }

   /** enum VertexLightVSVariation*/
   export enum VertexLightVSVariation {
       VLVS_NOLIGHTS,
       VLVS_1LIGHT,
       VLVS_2LIGHTS,
       VLVS_3LIGHTS,
       VLVS_4LIGHTS,
       MAX_VERTEXLIGHT_VS_VARIATIONS
    }

   /** enum FileMode*/
   export enum FileMode {
       FILE_READ,
       FILE_WRITE,
       FILE_READWRITE,
       FILE_APPEND
    }

   /** enum MouseMode*/
   export enum MouseMode {
       MM_ABSOLUTE,
       MM_RELATIVE,
       MM_WRAP,
       MM_FREE,
       MM_INVALID
    }

   /** enum FrustumPlane*/
   export enum FrustumPlane {
       PLANE_NEAR,
       PLANE_LEFT,
       PLANE_RIGHT,
       PLANE_UP,
       PLANE_DOWN,
       PLANE_FAR
    }

   /** enum Intersection*/
   export enum Intersection {
       OUTSIDE,
       INTERSECTS,
       INSIDE
    }

   /** enum CrowdAgentRequestedTarget*/
   export enum CrowdAgentRequestedTarget {
       CA_REQUESTEDTARGET_NONE,
       CA_REQUESTEDTARGET_POSITION,
       CA_REQUESTEDTARGET_VELOCITY
    }

   /** enum CrowdAgentState*/
   export enum CrowdAgentState {
       CA_STATE_INVALID,
       CA_STATE_WALKING,
       CA_STATE_OFFMESH
    }

   /** enum CrowdAgentTargetState*/
   export enum CrowdAgentTargetState {
       CA_TARGET_NONE,
       CA_TARGET_FAILED,
       CA_TARGET_VALID,
       CA_TARGET_REQUESTING,
       CA_TARGET_WAITINGFORQUEUE,
       CA_TARGET_WAITINGFORPATH,
       CA_TARGET_VELOCITY
    }

   /** enum NavigationPathPointFlag*/
   export enum NavigationPathPointFlag {
       NAVPATHFLAG_NONE,
       NAVPATHFLAG_START,
       NAVPATHFLAG_END,
       NAVPATHFLAG_OFF_MESH
    }

   /** enum NavigationPushiness*/
   export enum NavigationPushiness {
       NAVIGATIONPUSHINESS_LOW,
       NAVIGATIONPUSHINESS_MEDIUM,
       NAVIGATIONPUSHINESS_HIGH,
       NAVIGATIONPUSHINESS_NONE
    }

   /** enum NavigationQuality*/
   export enum NavigationQuality {
       NAVIGATIONQUALITY_LOW,
       NAVIGATIONQUALITY_MEDIUM,
       NAVIGATIONQUALITY_HIGH
    }

   /** enum NavmeshPartitionType*/
   export enum NavmeshPartitionType {
       NAVMESH_PARTITION_WATERSHED,
       NAVMESH_PARTITION_MONOTONE
    }

   /** enum ClientConnectToGameServerState*/
   export enum ClientConnectToGameServerState {
       GAME_NOT_CONNECTED,
       GAME_CONNECTING_INTERNAL_IP,
       GAME_VERIFYING_SERVER,
       GAME_CONNECTING_EXTERNAL_IP,
       GAME_CONNECTED,
       GAME_CONNECTION_FAILED
    }

   /** enum ConnectToMasterState*/
   export enum ConnectToMasterState {
       MASTER_NOT_CONNECTED,
       MASTER_CONNECTING_UDP,
       MASTER_CONNECTING_TCP,
       MASTER_CONNECTED,
       MASTER_CONNECTION_FAILED
    }

   /** enum HttpRequestState*/
   export enum HttpRequestState {
       HTTP_INITIALIZING,
       HTTP_ERROR,
       HTTP_OPEN,
       HTTP_CLOSED
    }

   /** enum ObserverPositionSendMode*/
   export enum ObserverPositionSendMode {
       OPSM_NONE,
       OPSM_POSITION,
       OPSM_POSITION_ROTATION
    }

   /** enum CollisionEventMode*/
   export enum CollisionEventMode {
       COLLISION_NEVER,
       COLLISION_ACTIVE,
       COLLISION_ALWAYS
    }

   /** enum ConstraintType*/
   export enum ConstraintType {
       CONSTRAINT_POINT,
       CONSTRAINT_HINGE,
       CONSTRAINT_SLIDER,
       CONSTRAINT_CONETWIST
    }

   /** enum ShapeType*/
   export enum ShapeType {
       SHAPE_BOX,
       SHAPE_SPHERE,
       SHAPE_STATICPLANE,
       SHAPE_CYLINDER,
       SHAPE_CAPSULE,
       SHAPE_CONE,
       SHAPE_TRIANGLEMESH,
       SHAPE_CONVEXHULL,
       SHAPE_TERRAIN
    }

   /** enum AsyncLoadState*/
   export enum AsyncLoadState {
       ASYNC_DONE,
       ASYNC_QUEUED,
       ASYNC_LOADING,
       ASYNC_SUCCESS,
       ASYNC_FAIL
    }

   /** enum CompressedFormat*/
   export enum CompressedFormat {
       CF_NONE,
       CF_RGBA,
       CF_DXT1,
       CF_DXT3,
       CF_DXT5,
       CF_ETC1,
       CF_PVRTC_RGB_2BPP,
       CF_PVRTC_RGBA_2BPP,
       CF_PVRTC_RGB_4BPP,
       CF_PVRTC_RGBA_4BPP
    }

   /** enum JSONNumberType*/
   export enum JSONNumberType {
       JSONNT_NAN,
       JSONNT_INT,
       JSONNT_UINT,
       JSONNT_FLOAT_DOUBLE
    }

   /** enum JSONValueType*/
   export enum JSONValueType {
       JSON_NULL,
       JSON_BOOL,
       JSON_NUMBER,
       JSON_STRING,
       JSON_ARRAY,
       JSON_OBJECT
    }

   /** enum PListValueType*/
   export enum PListValueType {
       PLVT_NONE,
       PLVT_INT,
       PLVT_BOOL,
       PLVT_FLOAT,
       PLVT_STRING,
       PLVT_VALUEMAP,
       PLVT_VALUEVECTOR
    }

   /** enum ResourceRequest*/
   export enum ResourceRequest {
       RESOURCE_CHECKEXISTS,
       RESOURCE_GETFILE
    }

   /** enum AutoRemoveMode*/
   export enum AutoRemoveMode {
       REMOVE_DISABLED,
       REMOVE_COMPONENT,
       REMOVE_NODE
    }

   /** enum CreateMode*/
   export enum CreateMode {
       REPLICATED,
       LOCAL
    }

   /** enum InterpMethod*/
   export enum InterpMethod {
       IM_NONE,
       IM_LINEAR,
       IM_SPLINE
    }

   /** enum LoadMode*/
   export enum LoadMode {
       LOAD_RESOURCES_ONLY,
       LOAD_SCENE,
       LOAD_SCENE_AND_RESOURCES
    }

   /** enum TransformSpace*/
   export enum TransformSpace {
       TS_LOCAL,
       TS_PARENT,
       TS_WORLD
    }

   /** enum WrapMode*/
   export enum WrapMode {
       WM_LOOP,
       WM_ONCE,
       WM_CLAMP
    }

   /** enum DebugHudProfileMode*/
   export enum DebugHudProfileMode {
       DEBUG_HUD_PROFILE_PERFORMANCE,
       DEBUG_HUD_PROFILE_METRICS
    }

   /** enum UI_AXIS*/
   export enum UI_AXIS {
       UI_AXIS_X,
       UI_AXIS_Y
    }

   /** enum UI_EDIT_TYPE*/
   export enum UI_EDIT_TYPE {
       UI_EDIT_TYPE_TEXT,
       UI_EDIT_TYPE_SEARCH,
       UI_EDIT_TYPE_PASSWORD,
       UI_EDIT_TYPE_EMAIL,
       UI_EDIT_TYPE_PHONE,
       UI_EDIT_TYPE_URL,
       UI_EDIT_TYPE_NUMBER
    }

   /** enum UI_EVENT_TYPE*/
   export enum UI_EVENT_TYPE {
       UI_EVENT_TYPE_CLICK,
       UI_EVENT_TYPE_LONG_CLICK,
       UI_EVENT_TYPE_POINTER_DOWN,
       UI_EVENT_TYPE_POINTER_UP,
       UI_EVENT_TYPE_POINTER_MOVE,
       UI_EVENT_TYPE_RIGHT_POINTER_DOWN,
       UI_EVENT_TYPE_RIGHT_POINTER_UP,
       UI_EVENT_TYPE_WHEEL,
       UI_EVENT_TYPE_CHANGED,
       UI_EVENT_TYPE_KEY_DOWN,
       UI_EVENT_TYPE_KEY_UP,
       UI_EVENT_TYPE_SHORTCUT,
       UI_EVENT_TYPE_CONTEXT_MENU,
       UI_EVENT_TYPE_FILE_DROP,
       UI_EVENT_TYPE_TAB_CHANGED,
       UI_EVENT_TYPE_CUSTOM,
       UI_EVENT_TYPE_TOUCH_DOWN,
       UI_EVENT_TYPE_TOUCH_UP,
       UI_EVENT_TYPE_TOUCH_MOVE,
       UI_EVENT_TYPE_TOUCH_CANCEL
    }

   /** enum UI_GRAVITY*/
   export enum UI_GRAVITY {
       UI_GRAVITY_NONE,
       UI_GRAVITY_LEFT,
       UI_GRAVITY_RIGHT,
       UI_GRAVITY_TOP,
       UI_GRAVITY_BOTTOM,
       UI_GRAVITY_LEFT_RIGHT,
       UI_GRAVITY_TOP_BOTTOM,
       UI_GRAVITY_ALL,
       UI_GRAVITY_DEFAULT
    }

   /** enum UI_LAYOUT_DISTRIBUTION*/
   export enum UI_LAYOUT_DISTRIBUTION {
       UI_LAYOUT_DISTRIBUTION_PREFERRED,
       UI_LAYOUT_DISTRIBUTION_AVAILABLE,
       UI_LAYOUT_DISTRIBUTION_GRAVITY
    }

   /** enum UI_LAYOUT_DISTRIBUTION_POSITION*/
   export enum UI_LAYOUT_DISTRIBUTION_POSITION {
       UI_LAYOUT_DISTRIBUTION_POSITION_CENTER,
       UI_LAYOUT_DISTRIBUTION_POSITION_LEFT_TOP,
       UI_LAYOUT_DISTRIBUTION_POSITION_RIGHT_BOTTOM
    }

   /** enum UI_LAYOUT_POSITION*/
   export enum UI_LAYOUT_POSITION {
       UI_LAYOUT_POSITION_CENTER,
       UI_LAYOUT_POSITION_LEFT_TOP,
       UI_LAYOUT_POSITION_RIGHT_BOTTOM,
       UI_LAYOUT_POSITION_GRAVITY
    }

   /** enum UI_LAYOUT_SIZE*/
   export enum UI_LAYOUT_SIZE {
       UI_LAYOUT_SIZE_GRAVITY,
       UI_LAYOUT_SIZE_PREFERRED,
       UI_LAYOUT_SIZE_AVAILABLE
    }

   /** enum UI_MESSAGEWINDOW_SETTINGS*/
   export enum UI_MESSAGEWINDOW_SETTINGS {
       UI_MESSAGEWINDOW_SETTINGS_OK,
       UI_MESSAGEWINDOW_SETTINGS_OK_CANCEL,
       UI_MESSAGEWINDOW_SETTINGS_YES_NO
    }

   /** enum UI_SCROLL_MODE*/
   export enum UI_SCROLL_MODE {
       UI_SCROLL_MODE_X_Y,
       UI_SCROLL_MODE_Y,
       UI_SCROLL_MODE_Y_AUTO,
       UI_SCROLL_MODE_X_AUTO_Y_AUTO,
       UI_SCROLL_MODE_OFF
    }

   /** enum UI_SIZE_DEP*/
   export enum UI_SIZE_DEP {
       UI_SIZE_DEP_NONE,
       UI_SIZE_DEP_WIDTH_DEPEND_ON_HEIGHT,
       UI_SIZE_DEP_HEIGHT_DEPEND_ON_WIDTH,
       UI_SIZE_DEP_BOTH
    }

   /** enum UI_TEXT_ALIGN*/
   export enum UI_TEXT_ALIGN {
       UI_TEXT_ALIGN_LEFT,
       UI_TEXT_ALIGN_RIGHT,
       UI_TEXT_ALIGN_CENTER
    }

   /** enum UI_WIDGET_STATE*/
   export enum UI_WIDGET_STATE {
       UI_WIDGET_STATE_NONE,
       UI_WIDGET_STATE_DISABLED,
       UI_WIDGET_STATE_FOCUSED,
       UI_WIDGET_STATE_PRESSED,
       UI_WIDGET_STATE_SELECTED,
       UI_WIDGET_STATE_HOVERED,
       UI_WIDGET_STATE_ALL
    }

   /** enum UI_WIDGET_VISIBILITY*/
   export enum UI_WIDGET_VISIBILITY {
       UI_WIDGET_VISIBILITY_VISIBLE,
       UI_WIDGET_VISIBILITY_INVISIBLE,
       UI_WIDGET_VISIBILITY_GONE
    }

   /** enum UI_WIDGET_Z_REL*/
   export enum UI_WIDGET_Z_REL {
       UI_WIDGET_Z_REL_BEFORE,
       UI_WIDGET_Z_REL_AFTER
    }

   /** enum UI_WINDOW_SETTINGS*/
   export enum UI_WINDOW_SETTINGS {
       UI_WINDOW_SETTINGS_NONE,
       UI_WINDOW_SETTINGS_TITLEBAR,
       UI_WINDOW_SETTINGS_RESIZABLE,
       UI_WINDOW_SETTINGS_CLOSE_BUTTON,
       UI_WINDOW_SETTINGS_CAN_ACTIVATE,
       UI_WINDOW_SETTINGS_DEFAULT
    }

   /** enum WebRequestState*/
   export enum WebRequestState {
       HTTP_INITIALIZING,
       HTTP_ERROR,
       HTTP_OPEN,
       HTTP_CLOSED
    }

   /** enum WebSocketMessageType*/
   export enum WebSocketMessageType {
       WSMT_CONTINUATION,
       WSMT_TEXT,
       WSMT_BINARY,
       WSMT_RSV3,
       WSMT_RSV4,
       WSMT_RSV5,
       WSMT_RSV6,
       WSMT_RSV7,
       WSMT_CLOSE,
       WSMT_PING,
       WSMT_PONG,
       WSMT_CONTROL_RSVB,
       WSMT_CONTROL_RSVC,
       WSMT_CONTROL_RSVD,
       WSMT_CONTROL_RSVE,
       WSMT_CONTROL_RSVF
    }

   /** enum WebSocketState*/
   export enum WebSocketState {
       WS_CONNECTING,
       WS_OPEN,
       WS_CLOSING,
       WS_CLOSED,
       WS_INVALID,
       WS_FAIL_TO_CONNECT
    }


   export var PIXEL_SIZE: number;


   export var SOUND_AMBIENT: number;
   export var SOUND_EFFECT: number;
   export var SOUND_MASTER: number;
   export var SOUND_MUSIC: number;
   export var SOUND_VOICE: number;
   export var STREAM_BUFFER_LENGTH: number;


   export var CONVERSION_BUFFER_LENGTH: number;
   export var MATRIX_CONVERSION_BUFFER_LENGTH: number;
   export var QUICKSORT_THRESHOLD: number;


   export var AM_COMPONENTID: number;
   export var AM_DEFAULT: number;
   export var AM_EDIT: number;
   export var AM_FILE: number;
   export var AM_LATESTDATA: number;
   export var AM_NET: number;
   export var AM_NODEID: number;
   export var AM_NODEIDVECTOR: number;
   export var AM_NOEDIT: number;


   export var ANIMATION_LOD_BASESCALE: number;
   export var BITS_PER_COMPONENT: number;
   export var BONECOLLISION_BOX: number;
   export var BONECOLLISION_NONE: number;
   export var BONECOLLISION_SPHERE: number;
   export var CHANNEL_POSITION: number;
   export var CHANNEL_ROTATION: number;
   export var CHANNEL_SCALE: number;
   export var CLEAR_COLOR: number;
   export var CLEAR_DEPTH: number;
   export var CLEAR_STENCIL: number;
   export var DEFAULT_CAMERA_FOV: number;
   export var DEFAULT_FARCLIP: number;
   export var DEFAULT_LIGHTMASK: number;
   export var DEFAULT_NEARCLIP: number;
   export var DEFAULT_NUM_PARTICLES: number;
   export var DEFAULT_ORTHOSIZE: number;
   export var DEFAULT_RENDER_ORDER: number;
   export var DEFAULT_SHADOWMASK: number;
   export var DEFAULT_VIEWMASK: number;
   export var DEFAULT_ZONEMASK: number;
   export var DRAWABLE_ANY: number;
   export var DRAWABLE_GEOMETRY: number;
   export var DRAWABLE_GEOMETRY2D: number;
   export var DRAWABLE_LIGHT: number;
   export var DRAWABLE_UNDEFINED: number;
   export var DRAWABLE_ZONE: number;
   export var INSTANCING_BUFFER_DEFAULT_SIZE: number;
   export var MASK_BLENDINDICES: number;
   export var MASK_BLENDWEIGHTS: number;
   export var MASK_COLOR: number;
   export var MASK_CUBETEXCOORD1: number;
   export var MASK_CUBETEXCOORD2: number;
   export var MASK_INSTANCEMATRIX1: number;
   export var MASK_INSTANCEMATRIX2: number;
   export var MASK_INSTANCEMATRIX3: number;
   export var MASK_NONE: number;
   export var MASK_NORMAL: number;
   export var MASK_OBJECTINDEX: number;
   export var MASK_POSITION: number;
   export var MASK_TANGENT: number;
   export var MASK_TEXCOORD1: number;
   export var MASK_TEXCOORD2: number;
   export var MAX_BILLBOARDS: number;
   export var MAX_CASCADE_SPLITS: number;
   export var MAX_CONSTANT_REGISTERS: number;
   export var MAX_LIGHT_SPLITS: number;
   export var MAX_RENDERTARGETS: number;
   export var MAX_TEXTURE_QUALITY_LEVELS: number;
   export var MAX_VERTEX_LIGHTS: number;
   export var MAX_VERTEX_STREAMS: number;
   export var MAX_VIEWPORT_TEXTURES: number;
   export var MODEL_VERSION: number;
   export var NUM_OCTANTS: number;
   export var OCCLUSION_DEFAULT_MAX_TRIANGLES: number;
   export var OCCLUSION_FIXED_BIAS: number;
   export var OCCLUSION_MIN_SIZE: number;
   export var OCCLUSION_RELATIVE_BIAS: number;
   export var OCCLUSION_X_SCALE: number;
   export var OCCLUSION_Z_SCALE: number;
   export var QUALITY_HIGH: number;
   export var QUALITY_LOW: number;
   export var QUALITY_MAX: number;
   export var QUALITY_MEDIUM: number;
   export var ROOT_INDEX: number;
   export var SHADOW_MIN_PIXELS: number;
   export var SHADOW_MIN_QUANTIZE: number;
   export var SHADOW_MIN_VIEW: number;
   export var VO_DISABLE_OCCLUSION: number;
   export var VO_DISABLE_SHADOWS: number;
   export var VO_LOW_MATERIAL_QUALITY: number;
   export var VO_NONE: number;


   export var LOG_DEBUG: number;
   export var LOG_ERROR: number;
   export var LOG_INFO: number;
   export var LOG_NONE: number;
   export var LOG_RAW: number;
   export var LOG_WARNING: number;
   export var SCAN_DIRS: number;
   export var SCAN_FILES: number;
   export var SCAN_HIDDEN: number;


   export var IPC_MESSAGE_EVENT: number;
   export var IPC_MESSAGE_UNDEFINED: number;


   export var CONTROLLER_AXIS_LEFTX: number;
   export var CONTROLLER_AXIS_LEFTY: number;
   export var CONTROLLER_AXIS_RIGHTX: number;
   export var CONTROLLER_AXIS_RIGHTY: number;
   export var CONTROLLER_AXIS_TRIGGERLEFT: number;
   export var CONTROLLER_AXIS_TRIGGERRIGHT: number;
   export var CONTROLLER_BUTTON_A: number;
   export var CONTROLLER_BUTTON_B: number;
   export var CONTROLLER_BUTTON_BACK: number;
   export var CONTROLLER_BUTTON_DPAD_DOWN: number;
   export var CONTROLLER_BUTTON_DPAD_LEFT: number;
   export var CONTROLLER_BUTTON_DPAD_RIGHT: number;
   export var CONTROLLER_BUTTON_DPAD_UP: number;
   export var CONTROLLER_BUTTON_GUIDE: number;
   export var CONTROLLER_BUTTON_LEFTSHOULDER: number;
   export var CONTROLLER_BUTTON_LEFTSTICK: number;
   export var CONTROLLER_BUTTON_RIGHTSHOULDER: number;
   export var CONTROLLER_BUTTON_RIGHTSTICK: number;
   export var CONTROLLER_BUTTON_START: number;
   export var CONTROLLER_BUTTON_X: number;
   export var CONTROLLER_BUTTON_Y: number;
   export var HAT_CENTER: number;
   export var HAT_DOWN: number;
   export var HAT_LEFT: number;
   export var HAT_RIGHT: number;
   export var HAT_UP: number;
   export var KEY_0: number;
   export var KEY_1: number;
   export var KEY_2: number;
   export var KEY_3: number;
   export var KEY_4: number;
   export var KEY_5: number;
   export var KEY_6: number;
   export var KEY_7: number;
   export var KEY_8: number;
   export var KEY_9: number;
   export var KEY_A: number;
   export var KEY_AC_BACK: number;
   export var KEY_AC_BOOKMARKS: number;
   export var KEY_AC_FORWARD: number;
   export var KEY_AC_HOME: number;
   export var KEY_AC_REFRESH: number;
   export var KEY_AC_SEARCH: number;
   export var KEY_AC_STOP: number;
   export var KEY_AGAIN: number;
   export var KEY_ALT: number;
   export var KEY_ALTERASE: number;
   export var KEY_AMPERSAND: number;
   export var KEY_APPLICATION: number;
   export var KEY_ASTERISK: number;
   export var KEY_AT: number;
   export var KEY_AUDIOMUTE: number;
   export var KEY_AUDIONEXT: number;
   export var KEY_AUDIOPLAY: number;
   export var KEY_AUDIOPREV: number;
   export var KEY_AUDIOSTOP: number;
   export var KEY_B: number;
   export var KEY_BACKQUOTE: number;
   export var KEY_BACKSLASH: number;
   export var KEY_BACKSPACE: number;
   export var KEY_BRIGHTNESSDOWN: number;
   export var KEY_BRIGHTNESSUP: number;
   export var KEY_C: number;
   export var KEY_CALCULATOR: number;
   export var KEY_CANCEL: number;
   export var KEY_CAPSLOCK: number;
   export var KEY_CARET: number;
   export var KEY_CLEAR: number;
   export var KEY_CLEARAGAIN: number;
   export var KEY_COLON: number;
   export var KEY_COMMA: number;
   export var KEY_COMPUTER: number;
   export var KEY_COPY: number;
   export var KEY_CRSEL: number;
   export var KEY_CTRL: number;
   export var KEY_CURRENCYSUBUNIT: number;
   export var KEY_CURRENCYUNIT: number;
   export var KEY_CUT: number;
   export var KEY_D: number;
   export var KEY_DECIMALSEPARATOR: number;
   export var KEY_DELETE: number;
   export var KEY_DISPLAYSWITCH: number;
   export var KEY_DOLLAR: number;
   export var KEY_DOWN: number;
   export var KEY_E: number;
   export var KEY_EJECT: number;
   export var KEY_END: number;
   export var KEY_EQUALS: number;
   export var KEY_ESCAPE: number;
   export var KEY_EXCLAIM: number;
   export var KEY_EXSEL: number;
   export var KEY_F: number;
   export var KEY_F1: number;
   export var KEY_F10: number;
   export var KEY_F11: number;
   export var KEY_F12: number;
   export var KEY_F13: number;
   export var KEY_F14: number;
   export var KEY_F15: number;
   export var KEY_F16: number;
   export var KEY_F17: number;
   export var KEY_F18: number;
   export var KEY_F19: number;
   export var KEY_F2: number;
   export var KEY_F20: number;
   export var KEY_F21: number;
   export var KEY_F22: number;
   export var KEY_F23: number;
   export var KEY_F24: number;
   export var KEY_F3: number;
   export var KEY_F4: number;
   export var KEY_F5: number;
   export var KEY_F6: number;
   export var KEY_F7: number;
   export var KEY_F8: number;
   export var KEY_F9: number;
   export var KEY_FIND: number;
   export var KEY_G: number;
   export var KEY_GREATER: number;
   export var KEY_GUI: number;
   export var KEY_H: number;
   export var KEY_HASH: number;
   export var KEY_HELP: number;
   export var KEY_HOME: number;
   export var KEY_I: number;
   export var KEY_INSERT: number;
   export var KEY_J: number;
   export var KEY_K: number;
   export var KEY_KBDILLUMDOWN: number;
   export var KEY_KBDILLUMTOGGLE: number;
   export var KEY_KBDILLUMUP: number;
   export var KEY_KP_0: number;
   export var KEY_KP_00: number;
   export var KEY_KP_000: number;
   export var KEY_KP_1: number;
   export var KEY_KP_2: number;
   export var KEY_KP_3: number;
   export var KEY_KP_4: number;
   export var KEY_KP_5: number;
   export var KEY_KP_6: number;
   export var KEY_KP_7: number;
   export var KEY_KP_8: number;
   export var KEY_KP_9: number;
   export var KEY_KP_A: number;
   export var KEY_KP_AMPERSAND: number;
   export var KEY_KP_AT: number;
   export var KEY_KP_B: number;
   export var KEY_KP_BACKSPACE: number;
   export var KEY_KP_BINARY: number;
   export var KEY_KP_C: number;
   export var KEY_KP_CLEAR: number;
   export var KEY_KP_CLEARENTRY: number;
   export var KEY_KP_COLON: number;
   export var KEY_KP_COMMA: number;
   export var KEY_KP_D: number;
   export var KEY_KP_DBLAMPERSAND: number;
   export var KEY_KP_DBLVERTICALBAR: number;
   export var KEY_KP_DECIMAL: number;
   export var KEY_KP_DIVIDE: number;
   export var KEY_KP_E: number;
   export var KEY_KP_ENTER: number;
   export var KEY_KP_EQUALS: number;
   export var KEY_KP_EQUALSAS400: number;
   export var KEY_KP_EXCLAM: number;
   export var KEY_KP_F: number;
   export var KEY_KP_GREATER: number;
   export var KEY_KP_HASH: number;
   export var KEY_KP_HEXADECIMAL: number;
   export var KEY_KP_LEFTBRACE: number;
   export var KEY_KP_LEFTPAREN: number;
   export var KEY_KP_LESS: number;
   export var KEY_KP_MEMADD: number;
   export var KEY_KP_MEMCLEAR: number;
   export var KEY_KP_MEMDIVIDE: number;
   export var KEY_KP_MEMMULTIPLY: number;
   export var KEY_KP_MEMRECALL: number;
   export var KEY_KP_MEMSTORE: number;
   export var KEY_KP_MEMSUBTRACT: number;
   export var KEY_KP_MINUS: number;
   export var KEY_KP_MULTIPLY: number;
   export var KEY_KP_OCTAL: number;
   export var KEY_KP_PERCENT: number;
   export var KEY_KP_PERIOD: number;
   export var KEY_KP_PLUS: number;
   export var KEY_KP_PLUSMINUS: number;
   export var KEY_KP_POWER: number;
   export var KEY_KP_RIGHTBRACE: number;
   export var KEY_KP_RIGHTPAREN: number;
   export var KEY_KP_SPACE: number;
   export var KEY_KP_TAB: number;
   export var KEY_KP_VERTICALBAR: number;
   export var KEY_KP_XOR: number;
   export var KEY_L: number;
   export var KEY_LALT: number;
   export var KEY_LCTRL: number;
   export var KEY_LEFT: number;
   export var KEY_LEFTBRACKET: number;
   export var KEY_LEFTPAREN: number;
   export var KEY_LESS: number;
   export var KEY_LGUI: number;
   export var KEY_LSHIFT: number;
   export var KEY_M: number;
   export var KEY_MAIL: number;
   export var KEY_MEDIASELECT: number;
   export var KEY_MENU: number;
   export var KEY_MINUS: number;
   export var KEY_MODE: number;
   export var KEY_MUTE: number;
   export var KEY_N: number;
   export var KEY_NUMLOCKCLEAR: number;
   export var KEY_O: number;
   export var KEY_OPER: number;
   export var KEY_OUT: number;
   export var KEY_P: number;
   export var KEY_PAGEDOWN: number;
   export var KEY_PAGEUP: number;
   export var KEY_PASTE: number;
   export var KEY_PAUSE: number;
   export var KEY_PERCENT: number;
   export var KEY_PERIOD: number;
   export var KEY_PLUS: number;
   export var KEY_POWER: number;
   export var KEY_PRINTSCREEN: number;
   export var KEY_PRIOR: number;
   export var KEY_Q: number;
   export var KEY_QUESTION: number;
   export var KEY_QUOTE: number;
   export var KEY_QUOTEDBL: number;
   export var KEY_R: number;
   export var KEY_RALT: number;
   export var KEY_RCTRL: number;
   export var KEY_RETURN: number;
   export var KEY_RETURN2: number;
   export var KEY_RGUI: number;
   export var KEY_RIGHT: number;
   export var KEY_RIGHTBRACKET: number;
   export var KEY_RIGHTPAREN: number;
   export var KEY_RSHIFT: number;
   export var KEY_S: number;
   export var KEY_SCROLLLOCK: number;
   export var KEY_SELECT: number;
   export var KEY_SEMICOLON: number;
   export var KEY_SEPARATOR: number;
   export var KEY_SHIFT: number;
   export var KEY_SLASH: number;
   export var KEY_SLEEP: number;
   export var KEY_SPACE: number;
   export var KEY_STOP: number;
   export var KEY_SYSREQ: number;
   export var KEY_T: number;
   export var KEY_TAB: number;
   export var KEY_THOUSANDSSEPARATOR: number;
   export var KEY_U: number;
   export var KEY_UNDERSCORE: number;
   export var KEY_UNDO: number;
   export var KEY_UNKNOWN: number;
   export var KEY_UP: number;
   export var KEY_V: number;
   export var KEY_VOLUMEDOWN: number;
   export var KEY_VOLUMEUP: number;
   export var KEY_W: number;
   export var KEY_WWW: number;
   export var KEY_X: number;
   export var KEY_Y: number;
   export var KEY_Z: number;
   export var MOUSEB_LEFT: number;
   export var MOUSEB_MIDDLE: number;
   export var MOUSEB_RIGHT: number;
   export var MOUSEB_X1: number;
   export var MOUSEB_X2: number;
   export var QUAL_ALT: number;
   export var QUAL_ANY: number;
   export var QUAL_CTRL: number;
   export var QUAL_SHIFT: number;
   export var SCANCODE_0: number;
   export var SCANCODE_1: number;
   export var SCANCODE_2: number;
   export var SCANCODE_3: number;
   export var SCANCODE_4: number;
   export var SCANCODE_5: number;
   export var SCANCODE_6: number;
   export var SCANCODE_7: number;
   export var SCANCODE_8: number;
   export var SCANCODE_9: number;
   export var SCANCODE_A: number;
   export var SCANCODE_AC_BACK: number;
   export var SCANCODE_AC_BOOKMARKS: number;
   export var SCANCODE_AC_FORWARD: number;
   export var SCANCODE_AC_HOME: number;
   export var SCANCODE_AC_REFRESH: number;
   export var SCANCODE_AC_SEARCH: number;
   export var SCANCODE_AC_STOP: number;
   export var SCANCODE_AGAIN: number;
   export var SCANCODE_ALT: number;
   export var SCANCODE_ALTERASE: number;
   export var SCANCODE_APOSTROPHE: number;
   export var SCANCODE_APP1: number;
   export var SCANCODE_APP2: number;
   export var SCANCODE_APPLICATION: number;
   export var SCANCODE_AUDIOMUTE: number;
   export var SCANCODE_AUDIONEXT: number;
   export var SCANCODE_AUDIOPLAY: number;
   export var SCANCODE_AUDIOPREV: number;
   export var SCANCODE_AUDIOSTOP: number;
   export var SCANCODE_B: number;
   export var SCANCODE_BACKSLASH: number;
   export var SCANCODE_BACKSPACE: number;
   export var SCANCODE_BRIGHTNESSDOWN: number;
   export var SCANCODE_BRIGHTNESSUP: number;
   export var SCANCODE_C: number;
   export var SCANCODE_CALCULATOR: number;
   export var SCANCODE_CANCEL: number;
   export var SCANCODE_CAPSLOCK: number;
   export var SCANCODE_CLEAR: number;
   export var SCANCODE_CLEARAGAIN: number;
   export var SCANCODE_COMMA: number;
   export var SCANCODE_COMPUTER: number;
   export var SCANCODE_COPY: number;
   export var SCANCODE_CRSEL: number;
   export var SCANCODE_CTRL: number;
   export var SCANCODE_CURRENCYSUBUNIT: number;
   export var SCANCODE_CURRENCYUNIT: number;
   export var SCANCODE_CUT: number;
   export var SCANCODE_D: number;
   export var SCANCODE_DECIMALSEPARATOR: number;
   export var SCANCODE_DELETE: number;
   export var SCANCODE_DISPLAYSWITCH: number;
   export var SCANCODE_DOWN: number;
   export var SCANCODE_E: number;
   export var SCANCODE_EJECT: number;
   export var SCANCODE_END: number;
   export var SCANCODE_EQUALS: number;
   export var SCANCODE_ESCAPE: number;
   export var SCANCODE_EXECUTE: number;
   export var SCANCODE_EXSEL: number;
   export var SCANCODE_F: number;
   export var SCANCODE_F1: number;
   export var SCANCODE_F10: number;
   export var SCANCODE_F11: number;
   export var SCANCODE_F12: number;
   export var SCANCODE_F13: number;
   export var SCANCODE_F14: number;
   export var SCANCODE_F15: number;
   export var SCANCODE_F16: number;
   export var SCANCODE_F17: number;
   export var SCANCODE_F18: number;
   export var SCANCODE_F19: number;
   export var SCANCODE_F2: number;
   export var SCANCODE_F20: number;
   export var SCANCODE_F21: number;
   export var SCANCODE_F22: number;
   export var SCANCODE_F23: number;
   export var SCANCODE_F24: number;
   export var SCANCODE_F3: number;
   export var SCANCODE_F4: number;
   export var SCANCODE_F5: number;
   export var SCANCODE_F6: number;
   export var SCANCODE_F7: number;
   export var SCANCODE_F8: number;
   export var SCANCODE_F9: number;
   export var SCANCODE_FIND: number;
   export var SCANCODE_G: number;
   export var SCANCODE_GRAVE: number;
   export var SCANCODE_GUI: number;
   export var SCANCODE_H: number;
   export var SCANCODE_HELP: number;
   export var SCANCODE_HOME: number;
   export var SCANCODE_I: number;
   export var SCANCODE_INSERT: number;
   export var SCANCODE_INTERNATIONAL1: number;
   export var SCANCODE_INTERNATIONAL2: number;
   export var SCANCODE_INTERNATIONAL3: number;
   export var SCANCODE_INTERNATIONAL4: number;
   export var SCANCODE_INTERNATIONAL5: number;
   export var SCANCODE_INTERNATIONAL6: number;
   export var SCANCODE_INTERNATIONAL7: number;
   export var SCANCODE_INTERNATIONAL8: number;
   export var SCANCODE_INTERNATIONAL9: number;
   export var SCANCODE_J: number;
   export var SCANCODE_K: number;
   export var SCANCODE_KBDILLUMDOWN: number;
   export var SCANCODE_KBDILLUMTOGGLE: number;
   export var SCANCODE_KBDILLUMUP: number;
   export var SCANCODE_KP_0: number;
   export var SCANCODE_KP_00: number;
   export var SCANCODE_KP_000: number;
   export var SCANCODE_KP_1: number;
   export var SCANCODE_KP_2: number;
   export var SCANCODE_KP_3: number;
   export var SCANCODE_KP_4: number;
   export var SCANCODE_KP_5: number;
   export var SCANCODE_KP_6: number;
   export var SCANCODE_KP_7: number;
   export var SCANCODE_KP_8: number;
   export var SCANCODE_KP_9: number;
   export var SCANCODE_KP_A: number;
   export var SCANCODE_KP_AMPERSAND: number;
   export var SCANCODE_KP_AT: number;
   export var SCANCODE_KP_B: number;
   export var SCANCODE_KP_BACKSPACE: number;
   export var SCANCODE_KP_BINARY: number;
   export var SCANCODE_KP_C: number;
   export var SCANCODE_KP_CLEAR: number;
   export var SCANCODE_KP_CLEARENTRY: number;
   export var SCANCODE_KP_COLON: number;
   export var SCANCODE_KP_COMMA: number;
   export var SCANCODE_KP_D: number;
   export var SCANCODE_KP_DBLAMPERSAND: number;
   export var SCANCODE_KP_DBLVERTICALBAR: number;
   export var SCANCODE_KP_DECIMAL: number;
   export var SCANCODE_KP_DIVIDE: number;
   export var SCANCODE_KP_E: number;
   export var SCANCODE_KP_ENTER: number;
   export var SCANCODE_KP_EQUALS: number;
   export var SCANCODE_KP_EQUALSAS400: number;
   export var SCANCODE_KP_EXCLAM: number;
   export var SCANCODE_KP_F: number;
   export var SCANCODE_KP_GREATER: number;
   export var SCANCODE_KP_HASH: number;
   export var SCANCODE_KP_HEXADECIMAL: number;
   export var SCANCODE_KP_LEFTBRACE: number;
   export var SCANCODE_KP_LEFTPAREN: number;
   export var SCANCODE_KP_LESS: number;
   export var SCANCODE_KP_MEMADD: number;
   export var SCANCODE_KP_MEMCLEAR: number;
   export var SCANCODE_KP_MEMDIVIDE: number;
   export var SCANCODE_KP_MEMMULTIPLY: number;
   export var SCANCODE_KP_MEMRECALL: number;
   export var SCANCODE_KP_MEMSTORE: number;
   export var SCANCODE_KP_MEMSUBTRACT: number;
   export var SCANCODE_KP_MINUS: number;
   export var SCANCODE_KP_MULTIPLY: number;
   export var SCANCODE_KP_OCTAL: number;
   export var SCANCODE_KP_PERCENT: number;
   export var SCANCODE_KP_PERIOD: number;
   export var SCANCODE_KP_PLUS: number;
   export var SCANCODE_KP_PLUSMINUS: number;
   export var SCANCODE_KP_POWER: number;
   export var SCANCODE_KP_RIGHTBRACE: number;
   export var SCANCODE_KP_RIGHTPAREN: number;
   export var SCANCODE_KP_SPACE: number;
   export var SCANCODE_KP_TAB: number;
   export var SCANCODE_KP_VERTICALBAR: number;
   export var SCANCODE_KP_XOR: number;
   export var SCANCODE_L: number;
   export var SCANCODE_LALT: number;
   export var SCANCODE_LANG1: number;
   export var SCANCODE_LANG2: number;
   export var SCANCODE_LANG3: number;
   export var SCANCODE_LANG4: number;
   export var SCANCODE_LANG5: number;
   export var SCANCODE_LANG6: number;
   export var SCANCODE_LANG7: number;
   export var SCANCODE_LANG8: number;
   export var SCANCODE_LANG9: number;
   export var SCANCODE_LCTRL: number;
   export var SCANCODE_LEFT: number;
   export var SCANCODE_LEFTBRACKET: number;
   export var SCANCODE_LGUI: number;
   export var SCANCODE_LSHIFT: number;
   export var SCANCODE_M: number;
   export var SCANCODE_MAIL: number;
   export var SCANCODE_MEDIASELECT: number;
   export var SCANCODE_MENU: number;
   export var SCANCODE_MINUS: number;
   export var SCANCODE_MODE: number;
   export var SCANCODE_MUTE: number;
   export var SCANCODE_N: number;
   export var SCANCODE_NONUSBACKSLASH: number;
   export var SCANCODE_NONUSHASH: number;
   export var SCANCODE_NUMLOCKCLEAR: number;
   export var SCANCODE_O: number;
   export var SCANCODE_OPER: number;
   export var SCANCODE_OUT: number;
   export var SCANCODE_P: number;
   export var SCANCODE_PAGEDOWN: number;
   export var SCANCODE_PAGEUP: number;
   export var SCANCODE_PASTE: number;
   export var SCANCODE_PAUSE: number;
   export var SCANCODE_PERIOD: number;
   export var SCANCODE_POWER: number;
   export var SCANCODE_PRINTSCREEN: number;
   export var SCANCODE_PRIOR: number;
   export var SCANCODE_Q: number;
   export var SCANCODE_R: number;
   export var SCANCODE_RALT: number;
   export var SCANCODE_RCTRL: number;
   export var SCANCODE_RETURN: number;
   export var SCANCODE_RETURN2: number;
   export var SCANCODE_RGUI: number;
   export var SCANCODE_RIGHT: number;
   export var SCANCODE_RIGHTBRACKET: number;
   export var SCANCODE_RSHIFT: number;
   export var SCANCODE_S: number;
   export var SCANCODE_SCROLLLOCK: number;
   export var SCANCODE_SELECT: number;
   export var SCANCODE_SEMICOLON: number;
   export var SCANCODE_SEPARATOR: number;
   export var SCANCODE_SHIFT: number;
   export var SCANCODE_SLASH: number;
   export var SCANCODE_SLEEP: number;
   export var SCANCODE_SPACE: number;
   export var SCANCODE_STOP: number;
   export var SCANCODE_SYSREQ: number;
   export var SCANCODE_T: number;
   export var SCANCODE_TAB: number;
   export var SCANCODE_THOUSANDSSEPARATOR: number;
   export var SCANCODE_U: number;
   export var SCANCODE_UNDO: number;
   export var SCANCODE_UNKNOWN: number;
   export var SCANCODE_UP: number;
   export var SCANCODE_V: number;
   export var SCANCODE_VOLUMEDOWN: number;
   export var SCANCODE_VOLUMEUP: number;
   export var SCANCODE_W: number;
   export var SCANCODE_WWW: number;
   export var SCANCODE_X: number;
   export var SCANCODE_Y: number;
   export var SCANCODE_Z: number;


   export var M_DEGTORAD: number;
   export var M_DEGTORAD_2: number;
   export var M_EPSILON: number;
   export var M_HALF_PI: number;
   export var M_INFINITY: number;
   export var M_LARGE_EPSILON: number;
   export var M_LARGE_VALUE: number;
   export var M_MAX_FOV: number;
   export var M_MAX_INT: number;
   export var M_MAX_UNSIGNED: number;
   export var M_MIN_INT: number;
   export var M_MIN_NEARCLIP: number;
   export var M_MIN_UNSIGNED: number;
   export var M_PI: number;
   export var M_RADTODEG: number;
   export var NUM_FRUSTUM_PLANES: number;
   export var NUM_FRUSTUM_VERTICES: number;


   export var CONTROLS_CONTENT_ID: number;
   export var MSG_COMPONENTDELTAUPDATE: number;
   export var MSG_COMPONENTLATESTDATA: number;
   export var MSG_CONTROLS: number;
   export var MSG_CREATECOMPONENT: number;
   export var MSG_CREATENODE: number;
   export var MSG_IDENTITY: number;
   export var MSG_LOADSCENE: number;
   export var MSG_NODEDELTAUPDATE: number;
   export var MSG_NODELATESTDATA: number;
   export var MSG_PACKAGEDATA: number;
   export var MSG_PACKAGEINFO: number;
   export var MSG_REMOTEEVENT: number;
   export var MSG_REMOTENODEEVENT: number;
   export var MSG_REMOVECOMPONENT: number;
   export var MSG_REMOVENODE: number;
   export var MSG_REQUESTPACKAGE: number;
   export var MSG_SCENECHECKSUMERROR: number;
   export var MSG_SCENELOADED: number;
   export var MSG_STRING: number;
   export var PACKAGE_FRAGMENT_SIZE: number;


   export var DEFAULT_MAX_NETWORK_ANGULAR_VELOCITY: number;


   export var COLOR_LUT_SIZE: number;
   export var PRIORITY_LAST: number;


   export var FIRST_LOCAL_ID: number;
   export var FIRST_REPLICATED_ID: number;
   export var LAST_LOCAL_ID: number;
   export var LAST_REPLICATED_ID: number;
   export var MAX_NETWORK_ATTRIBUTES: number;
   export var SMOOTH_NONE: number;
   export var SMOOTH_POSITION: number;
   export var SMOOTH_ROTATION: number;
   export var USE_FIXEDPOSTUPDATE: number;
   export var USE_FIXEDUPDATE: number;
   export var USE_POSTUPDATE: number;
   export var USE_UPDATE: number;


   export var UI_VERTEX_SIZE: number;


//----------------------------------------------------
// MODULE: Atomic2D
//----------------------------------------------------


   export class AnimatedSprite2D extends StaticSprite2D {

      animationSet: AnimationSet2D;
      entity: string;
      loopMode: LoopMode2D;
      speed: number;
      animation: string;
      animationAttr: string;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Set animation set. */
      setAnimationSet(animationSet: AnimationSet2D): void;
      /**  Set entity name (skin name for spine, entity name for spriter). */
      setEntity(name: string): void;
      /**  Set animation by name and loop mode. */
      setAnimation(name: string, loopMode?: LoopMode2D): void;
      /**  Set loop mode. */
      setLoopMode(loopMode: LoopMode2D): void;
      /**  Set speed. */
      setSpeed(speed: number): void;
      /**  Return animation. */
      getAnimationSet(): AnimationSet2D;
      /**  Return entity name. */
      getEntity(): string;
      /**  Return animation name. */
      getAnimation(): string;
      /**  Return loop mode. */
      getLoopMode(): LoopMode2D;
      /**  Return speed. */
      getSpeed(): number;
      /**  Set animation by name. */
      setAnimationAttr(name: string): void;

   }

   export class AnimationSet2D extends Resource {

      numAnimations: number;
      sprite: Sprite2D;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Get number of animations. */
      getNumAnimations(): number;
      /**  Return animation name. */
      getAnimation(index: number): string;
      /**  Check has animation. */
      hasAnimation(animation: string): boolean;
      /**  Return sprite. */
      getSprite(): Sprite2D;
      /**  Return spriter file sprite. */
      getSpriterFileSprite(folderId: number, fileId: number): Sprite2D;

   }

   export class CollisionBox2D extends CollisionShape2D {

      size: Vector2;
      angle: number;
      center: Vector2;

      /**  Construct. */
      constructor();

      /**  Set size. */
      setSize(size: Vector2): void;
      /**  Set angle. */
      setAngle(angle: number): void;
      /**  Return size. */
      getSize(): Vector2;
      /**  Return center. */
      getCenter(): Vector2;
      /**  Return angle. */
      getAngle(): number;

   }

   export class CollisionChain2D extends CollisionShape2D {

      loop: boolean;
      vertexCount: number;

      /**  Construct. */
      constructor();

      /**  Set loop. */
      setLoop(loop: boolean): void;
      /**  Set vertex count. */
      setVertexCount(count: number): void;
      /**  Set vertex. */
      setVertex(index: number, vertex: Vector2): void;
      /**  Return loop. */
      getLoop(): boolean;
      /**  Return vertex count. */
      getVertexCount(): number;
      /**  Return vertex. */
      getVertex(index: number): Vector2;

   }

   export class CollisionCircle2D extends CollisionShape2D {

      radius: number;
      center: Vector2;

      /**  Construct. */
      constructor();

      /**  Set radius. */
      setRadius(radius: number): void;
      /**  Return radius. */
      getRadius(): number;
      /**  Return center. */
      getCenter(): Vector2;

   }

   export class CollisionEdge2D extends CollisionShape2D {

      vertex1: Vector2;
      vertex2: Vector2;

      /**  Construct. */
      constructor();

      /**  Set vertex 1. */
      setVertex1(vertex: Vector2): void;
      /**  Set vertex 2. */
      setVertex2(vertex: Vector2): void;
      /**  Set vertices. */
      setVertices(vertex1: Vector2, vertex2: Vector2): void;
      /**  Return vertex 1. */
      getVertex1(): Vector2;
      /**  Return vertex 2. */
      getVertex2(): Vector2;

   }

   export class CollisionPolygon2D extends CollisionShape2D {

      vertexCount: number;

      /**  Construct. */
      constructor();

      /**  Set vertex count. */
      setVertexCount(count: number): void;
      /**  Set vertex. */
      setVertex(index: number, vertex: Vector2): void;
      /**  Return vertex count. */
      getVertexCount(): number;
      /**  Return vertex. */
      getVertex(index: number): Vector2;

   }

   export class CollisionShape2D extends Component {

      trigger: boolean;
      categoryBits: number;
      maskBits: number;
      groupIndex: number;
      density: number;
      friction: number;
      restitution: number;
      mass: number;
      inertia: number;
      massCenter: Vector2;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Set trigger. */
      setTrigger(trigger: boolean): void;
      /**  Set filter category bits. */
      setCategoryBits(categoryBits: number): void;
      /**  Set filter mask bits. */
      setMaskBits(maskBits: number): void;
      /**  Set filter group index. */
      setGroupIndex(groupIndex: number): void;
      /**  Set density. */
      setDensity(density: number): void;
      /**  Set friction. */
      setFriction(friction: number): void;
      /**  Set restitution . */
      setRestitution(restitution: number): void;
      /**  Create fixture. */
      createFixture(): void;
      /**  Release fixture. */
      releaseFixture(): void;
      /**  Return trigger. */
      isTrigger(): boolean;
      /**  Return filter category bits. */
      getCategoryBits(): number;
      /**  Return filter mask bits. */
      getMaskBits(): number;
      /**  Return filter group index. */
      getGroupIndex(): number;
      /**  Return density. */
      getDensity(): number;
      /**  Return friction. */
      getFriction(): number;
      /**  Return restitution. */
      getRestitution(): number;
      /**  Return mass. */
      getMass(): number;
      /**  Return inertia. */
      getInertia(): number;
      /**  Return mass center. */
      getMassCenter(): Vector2;

   }

   export class Constraint2D extends Component {

      otherBody: RigidBody2D;
      collideConnected: boolean;
      attachedConstraint: Constraint2D;
      ownerBody: RigidBody2D;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Create joint. */
      createJoint(): void;
      /**  Release joint. */
      releaseJoint(): void;
      /**  Set other rigid body. */
      setOtherBody(body: RigidBody2D): void;
      /**  Set collide connected. */
      setCollideConnected(collideConnected: boolean): void;
      /**  Set attached constriant (for gear). */
      setAttachedConstraint(constraint: Constraint2D): void;
      /**  Return owner body. */
      getOwnerBody(): RigidBody2D;
      /**  Return other body. */
      getOtherBody(): RigidBody2D;
      /**  Return collide connected. */
      getCollideConnected(): boolean;
      /**  Return attached constraint (for gear). */
      getAttachedConstraint(): Constraint2D;

   }

   export class ConstraintDistance2D extends Constraint2D {

      ownerBodyAnchor: Vector2;
      otherBodyAnchor: Vector2;
      frequencyHz: number;
      dampingRatio: number;

      /**  Construct. */
      constructor();

      /**  Set owner body anchor. */
      setOwnerBodyAnchor(anchor: Vector2): void;
      /**  Set other body anchor. */
      setOtherBodyAnchor(anchor: Vector2): void;
      /**  Set frequency Hz. */
      setFrequencyHz(frequencyHz: number): void;
      /**  Set damping ratio. */
      setDampingRatio(dampingRatio: number): void;
      /**  Return owner body anchor. */
      getOwnerBodyAnchor(): Vector2;
      /**  Return other body anchor. */
      getOtherBodyAnchor(): Vector2;
      /**  Return frequency Hz. */
      getFrequencyHz(): number;
      /**  Return damping ratio. */
      getDampingRatio(): number;

   }

   export class ConstraintFriction2D extends Constraint2D {

      anchor: Vector2;
      maxForce: number;
      maxTorque: number;

      /**  Construct. */
      constructor();

      /**  Set anchor. */
      setAnchor(anchor: Vector2): void;
      /**  Set max force. */
      setMaxForce(maxForce: number): void;
      /**  Set max torque. */
      setMaxTorque(maxTorque: number): void;
      /**  Return anchor. */
      getAnchor(): Vector2;
      /**  Set max force. */
      getMaxForce(): number;
      /**  Set max torque. */
      getMaxTorque(): number;

   }

   export class ConstraintGear2D extends Constraint2D {

      ownerConstraint: Constraint2D;
      otherConstraint: Constraint2D;
      ratio: number;

      /**  Construct. */
      constructor();

      /**  Set owner constraint. */
      setOwnerConstraint(constraint: Constraint2D): void;
      /**  Set other constraint. */
      setOtherConstraint(constraint: Constraint2D): void;
      /**  Set ratio. */
      setRatio(ratio: number): void;
      /**  Return owner constraint. */
      getOwnerConstraint(): Constraint2D;
      /**  Return other constraint. */
      getOtherConstraint(): Constraint2D;
      /**  Return ratio. */
      getRatio(): number;

   }

   export class ConstraintMotor2D extends Constraint2D {

      linearOffset: Vector2;
      angularOffset: number;
      maxForce: number;
      maxTorque: number;
      correctionFactor: number;

      /**  Construct. */
      constructor();

      /**  Set linear offset. */
      setLinearOffset(linearOffset: Vector2): void;
      /**  Set angular offset. */
      setAngularOffset(angularOffset: number): void;
      /**  Set max force. */
      setMaxForce(maxForce: number): void;
      /**  Set max torque. */
      setMaxTorque(maxTorque: number): void;
      /**  Set correction factor. */
      setCorrectionFactor(correctionFactor: number): void;
      /**  Return linear offset. */
      getLinearOffset(): Vector2;
      /**  Return angular offset. */
      getAngularOffset(): number;
      /**  Return max force. */
      getMaxForce(): number;
      /**  Return max torque. */
      getMaxTorque(): number;
      /**  Return correction factor. */
      getCorrectionFactor(): number;

   }

   export class ConstraintMouse2D extends Constraint2D {

      target: Vector2;
      maxForce: number;
      frequencyHz: number;
      dampingRatio: number;

      /**  Construct. */
      constructor();

      /**  Set target. */
      setTarget(target: Vector2): void;
      /**  Set max force. */
      setMaxForce(maxForce: number): void;
      /**  Set frequency Hz. */
      setFrequencyHz(frequencyHz: number): void;
      /**  Set damping ratio. */
      setDampingRatio(dampingRatio: number): void;
      /**  Return target. */
      getTarget(): Vector2;
      /**  Return max force. */
      getMaxForce(): number;
      /**  Return frequency Hz. */
      getFrequencyHz(): number;
      /**  Return damping ratio. */
      getDampingRatio(): number;

   }

   export class ConstraintPrismatic2D extends Constraint2D {

      anchor: Vector2;
      axis: Vector2;
      enableLimit: boolean;
      lowerTranslation: number;
      upperTranslation: number;
      enableMotor: boolean;
      maxMotorForce: number;
      motorSpeed: number;

      /**  Construct. */
      constructor();

      /**  Set anchor. */
      setAnchor(anchor: Vector2): void;
      /**  Set axis. */
      setAxis(axis: Vector2): void;
      /**  Set enable limit. */
      setEnableLimit(enableLimit: boolean): void;
      /**  Set lower translation. */
      setLowerTranslation(lowerTranslation: number): void;
      /**  Set upper translation. */
      setUpperTranslation(upperTranslation: number): void;
      /**  Set enable motor. */
      setEnableMotor(enableMotor: boolean): void;
      /**  Set maxmotor force. */
      setMaxMotorForce(maxMotorForce: number): void;
      /**  Set motor speed. */
      setMotorSpeed(motorSpeed: number): void;
      /**  Return anchor. */
      getAnchor(): Vector2;
      /**  Return axis. */
      getAxis(): Vector2;
      /**  Return enable limit. */
      getEnableLimit(): boolean;
      /**  Return lower translation. */
      getLowerTranslation(): number;
      /**  Return upper translation. */
      getUpperTranslation(): number;
      /**  Return enable motor. */
      getEnableMotor(): boolean;
      /**  Return maxmotor force. */
      getMaxMotorForce(): number;
      /**  Return motor speed. */
      getMotorSpeed(): number;

   }

   export class ConstraintPulley2D extends Constraint2D {

      ownerBodyGroundAnchor: Vector2;
      otherBodyGroundAnchor: Vector2;
      ownerBodyAnchor: Vector2;
      otherBodyAnchor: Vector2;
      ratio: number;

      /**  Construct. */
      constructor();

      /**  Set other body ground anchor point. */
      setOwnerBodyGroundAnchor(groundAnchor: Vector2): void;
      /**  Set other body ground anchor point. */
      setOtherBodyGroundAnchor(groundAnchor: Vector2): void;
      /**  Set owner body anchor point. */
      setOwnerBodyAnchor(anchor: Vector2): void;
      /**  Set other body anchor point. */
      setOtherBodyAnchor(anchor: Vector2): void;
      /**  Set ratio. */
      setRatio(ratio: number): void;
      /**  Return owner body ground anchor. */
      getOwnerBodyGroundAnchor(): Vector2;
      /**  return other body ground anchor. */
      getOtherBodyGroundAnchor(): Vector2;
      /**  Return owner body anchor. */
      getOwnerBodyAnchor(): Vector2;
      /**  Return other body anchor. */
      getOtherBodyAnchor(): Vector2;
      /**  Return ratio. */
      getRatio(): number;

   }

   export class ConstraintRevolute2D extends Constraint2D {

      anchor: Vector2;
      enableLimit: boolean;
      lowerAngle: number;
      upperAngle: number;
      enableMotor: boolean;
      motorSpeed: number;
      maxMotorTorque: number;

      /**  Construct. */
      constructor();

      /**  Set anchor. */
      setAnchor(anchor: Vector2): void;
      /**  Set enable limit. */
      setEnableLimit(enableLimit: boolean): void;
      /**  Set lower angle. */
      setLowerAngle(lowerAngle: number): void;
      /**  Set upper angle. */
      setUpperAngle(upperAngle: number): void;
      /**  Set enable motor. */
      setEnableMotor(enableMotor: boolean): void;
      /**  Set motor speed. */
      setMotorSpeed(motorSpeed: number): void;
      /**  Set max motor torque. */
      setMaxMotorTorque(maxMotorTorque: number): void;
      /**  Return anchor. */
      getAnchor(): Vector2;
      /**  Return enable limit. */
      getEnableLimit(): boolean;
      /**  Return lower angle. */
      getLowerAngle(): number;
      /**  Return upper angle. */
      getUpperAngle(): number;
      /**  Return enable motor. */
      getEnableMotor(): boolean;
      /**  Return motor speed. */
      getMotorSpeed(): number;
      /**  Return max motor torque. */
      getMaxMotorTorque(): number;

   }

   export class ConstraintRope2D extends Constraint2D {

      ownerBodyAnchor: Vector2;
      otherBodyAnchor: Vector2;
      maxLength: number;

      /**  Construct. */
      constructor();

      /**  Set owner body anchor. */
      setOwnerBodyAnchor(anchor: Vector2): void;
      /**  Set other body anchor. */
      setOtherBodyAnchor(anchor: Vector2): void;
      /**  Set max length. */
      setMaxLength(maxLength: number): void;
      /**  Return owner body anchor. */
      getOwnerBodyAnchor(): Vector2;
      /**  Return other body anchor. */
      getOtherBodyAnchor(): Vector2;
      /**  Return max length. */
      getMaxLength(): number;

   }

   export class ConstraintWeld2D extends Constraint2D {

      anchor: Vector2;
      frequencyHz: number;
      dampingRatio: number;

      /**  Construct. */
      constructor();

      /**  Set anchor. */
      setAnchor(anchor: Vector2): void;
      /**  Set frequency Hz. */
      setFrequencyHz(frequencyHz: number): void;
      /**  Set damping ratio. */
      setDampingRatio(dampingRatio: number): void;
      /**  Return anchor. */
      getAnchor(): Vector2;
      /**  Return frequency Hz. */
      getFrequencyHz(): number;
      /**  Return damping ratio. */
      getDampingRatio(): number;

   }

   export class ConstraintWheel2D extends Constraint2D {

      anchor: Vector2;
      axis: Vector2;
      enableMotor: boolean;
      maxMotorTorque: number;
      motorSpeed: number;
      frequencyHz: number;
      dampingRatio: number;

      /**  Construct. */
      constructor();

      /**  Set anchor. */
      setAnchor(anchor: Vector2): void;
      /**  Set axis. */
      setAxis(axis: Vector2): void;
      /**  Set enable motor. */
      setEnableMotor(enableMotor: boolean): void;
      /**  Set max motor torque. */
      setMaxMotorTorque(maxMotorTorque: number): void;
      /**  Set motor speed. */
      setMotorSpeed(motorSpeed: number): void;
      /**  Set frequency Hz. */
      setFrequencyHz(frequencyHz: number): void;
      /**  Set damping ratio. */
      setDampingRatio(dampingRatio: number): void;
      /**  Return anchor. */
      getAnchor(): Vector2;
      /**  Return axis. */
      getAxis(): Vector2;
      /**  Return enable motor. */
      getEnableMotor(): boolean;
      /**  Return maxMotor torque. */
      getMaxMotorTorque(): number;
      /**  Return motor speed. */
      getMotorSpeed(): number;
      /**  Return frequency Hz. */
      getFrequencyHz(): number;
      /**  Return damping ratio. */
      getDampingRatio(): number;

   }

   export class DirectionalLight2D extends Light2D {

      direction: number;

      /**  Construct. */
      constructor();

      updateVertices(): void;
      getDirection(): number;
      setDirection(direction: number): void;

   }

   export class Drawable2D extends Drawable {

      layer: number;
      orderInLayer: number;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Set layer. */
      setLayer(layer: number): void;
      /**  Set order in layer. */
      setOrderInLayer(orderInLayer: number): void;
      /**  Return layer. */
      getLayer(): number;
      /**  Return order in layer. */
      getOrderInLayer(): number;

   }

   export class Light2D extends Component {

      lightGroupID: number;
      color: Color;
      numRays: number;
      lightType: LightType2D;
      castShadows: boolean;
      softShadows: boolean;
      softShadowLength: number;
      backtrace: boolean;

      /**  Construct. */
      constructor();

      setLightGroupID(id: number): void;
      getLightGroupID(): number;
      getColor(): Color;
      setColor(color: Color): void;
      updateVertices(): void;
      setNumRays(numRays: number): void;
      getNumRays(): number;
      onSetEnabled(): void;
      getLightType(): LightType2D;
      getCastShadows(): boolean;
      setCastShadows(castShadows: boolean): void;
      getSoftShadows(): boolean;
      setSoftShadows(softShadows: boolean): void;
      getSoftShadowLength(): number;
      setSoftShadowLength(softShadowLength: number): void;
      getBacktrace(): boolean;
      setBacktrace(backtrace: boolean): void;

   }

   export class Light2DGroup extends Drawable2D {

      physicsWorld: PhysicsWorld2D;
      ambientColor: Color;
      lightGroupID: number;
      frustumBox: BoundingBox;

      /**  Construct. */
      constructor();

      getPhysicsWorld(): PhysicsWorld2D;
      addLight2D(light: Light2D): void;
      removeLight2D(light: Light2D): void;
      setDirty(): void;
      setAmbientColor(color: Color): void;
      getAmbientColor(): Color;
      setLightGroupID(id: number): void;
      getLightGroupID(): number;
      getFrustumBox(): BoundingBox;

   }

   export class ParticleEffect2D extends Resource {

      sprite: Sprite2D;
      sourcePositionVariance: Vector2;
      speed: number;
      speedVariance: number;
      particleLifeSpan: number;
      particleLifespanVariance: number;
      angle: number;
      angleVariance: number;
      gravity: Vector2;
      radialAcceleration: number;
      tangentialAcceleration: number;
      radialAccelVariance: number;
      tangentialAccelVariance: number;
      startColor: Color;
      startColorVariance: Color;
      finishColor: Color;
      finishColorVariance: Color;
      maxParticles: number;
      startParticleSize: number;
      startParticleSizeVariance: number;
      finishParticleSize: number;
      finishParticleSizeVariance: number;
      duration: number;
      emitterType: EmitterType2D;
      maxRadius: number;
      maxRadiusVariance: number;
      minRadius: number;
      minRadiusVariance: number;
      rotatePerSecond: number;
      rotatePerSecondVariance: number;
      blendMode: BlendMode;
      rotationStart: number;
      rotationStartVariance: number;
      rotationEnd: number;
      rotationEndVariance: number;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set sprite. */
      setSprite(sprite: Sprite2D): void;
      /**  Set source position variance. */
      setSourcePositionVariance(sourcePositionVariance: Vector2): void;
      /**  Set speed. */
      setSpeed(speed: number): void;
      /**  Set speed variance. */
      setSpeedVariance(speedVariance: number): void;
      /**  Set particle lifespan. */
      setParticleLifeSpan(particleLifeSpan: number): void;
      /**  Set particle lifespan variance. */
      setParticleLifespanVariance(particleLifespanVariance: number): void;
      /**  Set angle. */
      setAngle(angle: number): void;
      /**  Set angle variance. */
      setAngleVariance(angleVariance: number): void;
      /**  Set gravity. */
      setGravity(gravity: Vector2): void;
      /**  Set radial acceleration. */
      setRadialAcceleration(radialAcceleration: number): void;
      /**  Set tangential acceleration. */
      setTangentialAcceleration(tangentialAcceleration: number): void;
      /**  Set radial acceleration variance. */
      setRadialAccelVariance(radialAccelVariance: number): void;
      /**  Set tangential acceleration variance. */
      setTangentialAccelVariance(tangentialAccelVariance: number): void;
      /**  Set start color. */
      setStartColor(startColor: Color): void;
      /**  Set start color variance. */
      setStartColorVariance(startColorVariance: Color): void;
      /**  Set finish color. */
      setFinishColor(finishColor: Color): void;
      /**  Set finish color variance. */
      setFinishColorVariance(finishColorVariance: Color): void;
      /**  Set max particles. */
      setMaxParticles(maxParticles: number): void;
      /**  Set start particle size. */
      setStartParticleSize(startParticleSize: number): void;
      /**  Set start particle size variance. */
      setStartParticleSizeVariance(startParticleSizeVariance: number): void;
      /**  Set finish particle size. */
      setFinishParticleSize(finishParticleSize: number): void;
      /**  Set finish particle size variance. */
      setFinishParticleSizeVariance(FinishParticleSizeVariance: number): void;
      /**  Set duration. */
      setDuration(duration: number): void;
      /**  Set emitter type. */
      setEmitterType(emitterType: EmitterType2D): void;
      /**  Set max radius. */
      setMaxRadius(maxRadius: number): void;
      /**  Set max radius variance. */
      setMaxRadiusVariance(maxRadiusVariance: number): void;
      /**  Set min radius. */
      setMinRadius(minRadius: number): void;
      /**  Set min radius variance. */
      setMinRadiusVariance(minRadiusVariance: number): void;
      /**  Set rotate per second. */
      setRotatePerSecond(rotatePerSecond: number): void;
      /**  Set rotate per second variance. */
      setRotatePerSecondVariance(rotatePerSecondVariance: number): void;
      /**  Set blend mode. */
      setBlendMode(blendMode: BlendMode): void;
      /**  Set rotation start. */
      setRotationStart(rotationStart: number): void;
      /**  Set rotation start variance. */
      setRotationStartVariance(rotationStartVariance: number): void;
      /**  Set rotation end. */
      setRotationEnd(rotationEnd: number): void;
      /**  Set rotation end variance. */
      setRotationEndVariance(rotationEndVariance: number): void;
      /**  Clone the 2D particle effect. */
      clone(cloneName?: string): ParticleEffect2D;
      /**  Return sprite. */
      getSprite(): Sprite2D;
      /**  Return source position variance. */
      getSourcePositionVariance(): Vector2;
      /**  Return speed. */
      getSpeed(): number;
      /**  Return speed variance. */
      getSpeedVariance(): number;
      /**  Return particle lifespan. */
      getParticleLifeSpan(): number;
      /**  Return particle lifespan variance. */
      getParticleLifespanVariance(): number;
      /**  Return angle. */
      getAngle(): number;
      /**  Return angle variance. */
      getAngleVariance(): number;
      /**  Return gravity. */
      getGravity(): Vector2;
      /**  Return radial acceleration. */
      getRadialAcceleration(): number;
      /**  Return tangential acceleration. */
      getTangentialAcceleration(): number;
      /**  Return radial acceleration variance. */
      getRadialAccelVariance(): number;
      /**  Return tangential acceleration variance. */
      getTangentialAccelVariance(): number;
      /**  Return start color. */
      getStartColor(): Color;
      /**  Return start color variance. */
      getStartColorVariance(): Color;
      /**  Return finish color. */
      getFinishColor(): Color;
      /**  Return finish color variance. */
      getFinishColorVariance(): Color;
      /**  Return max particles. */
      getMaxParticles(): number;
      /**  Return start particle size. */
      getStartParticleSize(): number;
      /**  Return start particle size variance. */
      getStartParticleSizeVariance(): number;
      /**  Return finish particle size. */
      getFinishParticleSize(): number;
      /**  Return finish particle size variance. */
      getFinishParticleSizeVariance(): number;
      /**  Return duration. */
      getDuration(): number;
      /**  Return emitter type. */
      getEmitterType(): EmitterType2D;
      /**  Return max radius. */
      getMaxRadius(): number;
      /**  Return max radius variance. */
      getMaxRadiusVariance(): number;
      /**  Return min radius. */
      getMinRadius(): number;
      /**  Return min radius variance. */
      getMinRadiusVariance(): number;
      /**  Return rotate per second. */
      getRotatePerSecond(): number;
      /**  Return rotate per second variance. */
      getRotatePerSecondVariance(): number;
      /**  Return blend mode. */
      getBlendMode(): BlendMode;
      /**  Return rotation start. */
      getRotationStart(): number;
      /**  Return rotation start variance. */
      getRotationStartVariance(): number;
      /**  Return rotation end. */
      getRotationEnd(): number;
      /**  Return rotation end variance. */
      getRotationEndVariance(): number;

   }

   export class ParticleEmitter2D extends Drawable2D {

      effect: ParticleEffect2D;
      sprite: Sprite2D;
      blendMode: BlendMode;
      maxParticles: number;
      emitting: boolean;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Set particle effect. */
      setEffect(effect: ParticleEffect2D): void;
      /**  Set sprite. */
      setSprite(sprite: Sprite2D): void;
      /**  Set blend mode. */
      setBlendMode(blendMode: BlendMode): void;
      /**  Set max particles. */
      setMaxParticles(maxParticles: number): void;
      /**  Return particle effect. */
      getEffect(): ParticleEffect2D;
      /**  Return sprite. */
      getSprite(): Sprite2D;
      /**  Return blend mode. */
      getBlendMode(): BlendMode;
      /**  Return max particles. */
      getMaxParticles(): number;
      /**  Set emission state. */
      setEmitting(enable: boolean): void;
      /**  Return emission state. */
      isEmitting(): boolean;

   }

   export class PhysicsWorld2D extends Component {

      updateEnabled: boolean;
      drawShape: boolean;
      drawJoint: boolean;
      drawAabb: boolean;
      drawPair: boolean;
      drawCenterOfMass: boolean;
      allowSleeping: boolean;
      warmStarting: boolean;
      continuousPhysics: boolean;
      subStepping: boolean;
      gravity: Vector2;
      autoClearForces: boolean;
      velocityIterations: number;
      positionIterations: number;
      applyingTransforms: boolean;

      /**  Construct. */
      constructor();

      /**  Step the simulation forward. */
      update(timeStep: number): void;
      /**  Add debug geometry to the debug renderer. */
      drawDebugGeometry(): void;
      /**  Enable or disable automatic physics simulation during scene update. Enabled by default. */
      setUpdateEnabled(enable: boolean): void;
      /**  Set draw shape. */
      setDrawShape(drawShape: boolean): void;
      /**  Set draw joint. */
      setDrawJoint(drawJoint: boolean): void;
      /**  Set draw aabb. */
      setDrawAabb(drawAabb: boolean): void;
      /**  Set draw pair. */
      setDrawPair(drawPair: boolean): void;
      /**  Set draw center of mass. */
      setDrawCenterOfMass(drawCenterOfMass: boolean): void;
      /**  Set allow sleeping. */
      setAllowSleeping(enable: boolean): void;
      /**  Set warm starting. */
      setWarmStarting(enable: boolean): void;
      /**  Set continuous physics. */
      setContinuousPhysics(enable: boolean): void;
      /**  Set sub stepping. */
      setSubStepping(enable: boolean): void;
      /**  Set gravity. */
      setGravity(gravity: Vector2): void;
      /**  Set auto clear forces. */
      setAutoClearForces(enable: boolean): void;
      /**  Set velocity iterations. */
      setVelocityIterations(velocityIterations: number): void;
      /**  Set position iterations. */
      setPositionIterations(positionIterations: number): void;
      /**  Add rigid body. */
      addRigidBody(rigidBody: RigidBody2D): void;
      /**  Remove rigid body. */
      removeRigidBody(rigidBody: RigidBody2D): void;
      /**  Return whether physics world will automatically simulate during scene update. */
      isUpdateEnabled(): boolean;
      /**  Return draw shape. */
      getDrawShape(): boolean;
      /**  Return draw joint. */
      getDrawJoint(): boolean;
      /**  Return draw aabb. */
      getDrawAabb(): boolean;
      /**  Return draw pair. */
      getDrawPair(): boolean;
      /**  Return draw center of mass. */
      getDrawCenterOfMass(): boolean;
      /**  Return allow sleeping. */
      getAllowSleeping(): boolean;
      /**  Return warm starting. */
      getWarmStarting(): boolean;
      /**  Return continuous physics. */
      getContinuousPhysics(): boolean;
      /**  Return sub stepping. */
      getSubStepping(): boolean;
      /**  Return auto clear forces. */
      getAutoClearForces(): boolean;
      /**  Return gravity. */
      getGravity(): Vector2;
      /**  Return velocity iterations. */
      getVelocityIterations(): number;
      /**  Return position iterations. */
      getPositionIterations(): number;
      /**  Set node dirtying to be disregarded. */
      setApplyingTransforms(enable: boolean): void;
      /**  Return whether node dirtying should be disregarded. */
      isApplyingTransforms(): boolean;

   }

   export class PointLight2D extends PositionalLight2D {

      radius: number;

      /**  Construct. */
      constructor();

      updateVertices(): void;
      setRadius(radius: number): void;
      getRadius(): number;

   }

   export class PositionalLight2D extends Light2D {

      /**  Construct. */
      constructor();

      updateVertices(): void;

   }

   export class PropertySet2D extends RefCounted {

      constructor();

      /**  Return has property. */
      hasProperty(name: string): boolean;
      /**  Return property value. */
      getProperty(name: string): string;

   }

   export class RigidBody2D extends Component {

      bodyType: BodyType2D;
      mass: number;
      inertia: number;
      massCenter: Vector2;
      useFixtureMass: boolean;
      linearDamping: number;
      angularDamping: number;
      allowSleep: boolean;
      fixedRotation: boolean;
      bullet: boolean;
      gravityScale: number;
      awake: boolean;
      linearVelocity: Vector2;
      angularVelocity: number;
      castShadows: boolean;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Set body type. */
      setBodyType(bodyType: BodyType2D): void;
      /**  Set mass. */
      setMass(mass: number): void;
      /**  Set inertia. */
      setInertia(inertia: number): void;
      /**  Set mass center. */
      setMassCenter(center: Vector2): void;
      /**  Set whether to automatically calculate mass and inertia from collision shapes. Default true. */
      setUseFixtureMass(useFixtureMass: boolean): void;
      /**  Set linear damping. */
      setLinearDamping(linearDamping: number): void;
      /**  Set angular damping. */
      setAngularDamping(angularDamping: number): void;
      /**  Set allow sleep. */
      setAllowSleep(allowSleep: boolean): void;
      /**  Set fixed rotation. */
      setFixedRotation(fixedRotation: boolean): void;
      /**  Set bullet mode. */
      setBullet(bullet: boolean): void;
      /**  Set gravity scale. */
      setGravityScale(gravityScale: number): void;
      /**  Set awake. */
      setAwake(awake: boolean): void;
      /**  Set linear velocity. */
      setLinearVelocity(linearVelocity: Vector2): void;
      /**  Set angular velocity. */
      setAngularVelocity(angularVelocity: number): void;
      /**  Apply force. */
      applyForce(force: Vector2, point: Vector2, wake: boolean): void;
      /**  Apply force to center. */
      applyForceToCenter(force: Vector2, wake: boolean): void;
      /**  Apply Torque. */
      applyTorque(torque: number, wake: boolean): void;
      /**  Apply linear impulse. */
      applyLinearImpulse(impulse: Vector2, point: Vector2, wake: boolean): void;
      /**  Apply angular impulse. */
      applyAngularImpulse(impulse: number, wake: boolean): void;
      /**  Create body. */
      createBody(): void;
      /**  Release body. */
      releaseBody(): void;
      /**  Add collision shape. */
      addCollisionShape2D(collisionShape: CollisionShape2D): void;
      /**  Remove collision shape. */
      removeCollisionShape2D(collisionShape: CollisionShape2D): void;
      /**  Add constraint. */
      addConstraint2D(constraint: Constraint2D): void;
      /**  Remove constraint. */
      removeConstraint2D(constraint: Constraint2D): void;
      /**  Return body type. */
      getBodyType(): BodyType2D;
      /**  Return mass. */
      getMass(): number;
      /**  Return inertia. */
      getInertia(): number;
      /**  Return mass center. */
      getMassCenter(): Vector2;
      /**  Return whether to calculate mass and inertia from collision shapes automatically. */
      getUseFixtureMass(): boolean;
      /**  Return linear damping. */
      getLinearDamping(): number;
      /**  Return angular damping. */
      getAngularDamping(): number;
      /**  Return allow sleep. */
      isAllowSleep(): boolean;
      /**  Return fixed rotation. */
      isFixedRotation(): boolean;
      /**  Return bullet mode. */
      isBullet(): boolean;
      /**  Return gravity scale. */
      getGravityScale(): number;
      /**  Return awake. */
      isAwake(): boolean;
      /**  Return linear velocity. */
      getLinearVelocity(): Vector2;
      /**  Return angular velocity. */
      getAngularVelocity(): number;
      getCastShadows(): boolean;
      setCastShadows(castShadows: boolean): void;

   }

   export class Sprite2D extends Resource {

      texture: Texture2D;
      rectangle: IntRect;
      hotSpot: Vector2;
      offset: IntVector2;
      textureEdgeOffset: number;
      spriteSheet: SpriteSheet2D;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set texture. */
      setTexture(texture: Texture2D): void;
      /**  Set rectangle. */
      setRectangle(rectangle: IntRect): void;
      /**  Set hot spot. */
      setHotSpot(hotSpot: Vector2): void;
      /**  Set offset. */
      setOffset(offset: IntVector2): void;
      /**  Set texture edge offset in pixels. This affects the left/right and top/bottom edges equally to prevent edge sampling artifacts. Default 0. */
      setTextureEdgeOffset(offset: number): void;
      /**  Set sprite sheet. */
      setSpriteSheet(spriteSheet: SpriteSheet2D): void;
      /**  Return texture. */
      getTexture(): Texture2D;
      /**  Return rectangle. */
      getRectangle(): IntRect;
      /**  Return hot spot. */
      getHotSpot(): Vector2;
      /**  Return offset. */
      getOffset(): IntVector2;
      /**  Return texture edge offset. */
      getTextureEdgeOffset(): number;
      /**  Return sprite sheet. */
      getSpriteSheet(): SpriteSheet2D;
      /**  Return texture rectangle. */
      getTextureRectangle(rect: Rect, flipX?: boolean, flipY?: boolean): boolean;

   }

   export class SpriteSheet2D extends Resource {

      texture: Texture2D;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set texture. */
      setTexture(texture: Texture2D): void;
      /**  Define sprite. */
      defineSprite(name: string, rectangle: IntRect, hotSpot?: Vector2, offset?: IntVector2): void;
      /**  Return texture. */
      getTexture(): Texture2D;
      /**  Return sprite. */
      getSprite(name: string): Sprite2D;

   }

   export class StaticSprite2D extends Drawable2D {

      sprite: Sprite2D;
      blendMode: BlendMode;
      flipX: boolean;
      flipY: boolean;
      color: Color;
      alpha: number;
      useHotSpot: boolean;
      hotSpot: Vector2;
      customMaterial: Material;

      /**  Construct. */
      constructor();

      /**  Set sprite. */
      setSprite(sprite: Sprite2D): void;
      /**  Set blend mode. */
      setBlendMode(blendMode: BlendMode): void;
      /**  Set flip. */
      setFlip(flipX: boolean, flipY: boolean): void;
      /**  Set flip X. */
      setFlipX(flipX: boolean): void;
      /**  Set flip Y. */
      setFlipY(flipY: boolean): void;
      /**  Set color. */
      setColor(color: Color): void;
      /**  Set alpha. */
      setAlpha(alpha: number): void;
      /**  Set use hot spot. */
      setUseHotSpot(useHotSpot: boolean): void;
      /**  Set hot spot. */
      setHotSpot(hotspot: Vector2): void;
      /**  Set custom material. */
      setCustomMaterial(customMaterial: Material): void;
      /**  Return sprite. */
      getSprite(): Sprite2D;
      /**  Return blend mode. */
      getBlendMode(): BlendMode;
      /**  Return flip X. */
      getFlipX(): boolean;
      /**  Return flip Y. */
      getFlipY(): boolean;
      /**  Return color. */
      getColor(): Color;
      /**  Return alpha. */
      getAlpha(): number;
      /**  Return use hot spot. */
      getUseHotSpot(): boolean;
      /**  Return hot spot. */
      getHotSpot(): Vector2;
      /**  Return custom material. */
      getCustomMaterial(): Material;

   }

   export class Tile2D extends RefCounted {

      gid: number;
      sprite: Sprite2D;
      objectGroup: TmxObjectGroup2D;

      /**  Construct. */
      constructor();

      /**  Return gid. */
      getGid(): number;
      /**  Return sprite. */
      getSprite(): Sprite2D;
      /**  Return has property. */
      hasProperty(name: string): boolean;
      /**  Return property. */
      getProperty(name: string): string;
      /**  Return Object Group. */
      getObjectGroup(): TmxObjectGroup2D;

   }

   export class TileMap2D extends Component {

      tmxFile: TmxFile2D;
      numLayers: number;

      /**  Construct. */
      constructor();

      /**  Set tmx file. */
      setTmxFile(tmxFile: TmxFile2D): void;
      /**  Return tmx file. */
      getTmxFile(): TmxFile2D;
      /**  Return number of layers. */
      getNumLayers(): number;
      /**  Return tile map layer at index. */
      getLayer(index: number): TileMapLayer2D;
      /**  Convert tile index to position. */
      tileIndexToPosition(x: number, y: number): Vector2;
      getLayerByName(name: string): TileMapLayer2D;

   }

   export class TileMapLayer2D extends Component {

      drawOrder: number;
      visible: boolean;
      tileMap: TileMap2D;
      tmxLayer: TmxLayer2D;
      layerType: TileMapLayerType2D;
      width: number;
      height: number;
      numObjects: number;
      imageNode: Node;
      name: string;

      /**  Construct. */
      constructor();

      /**  Add debug geometry to the debug renderer. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Initialize with tile map and tmx layer. */
      initialize(tileMap: TileMap2D, tmxLayer: TmxLayer2D): void;
      /**  Set draw order */
      setDrawOrder(drawOrder: number): void;
      /**  Set visible. */
      setVisible(visible: boolean): void;
      /**  Return tile map. */
      getTileMap(): TileMap2D;
      /**  Return tmx layer. */
      getTmxLayer(): TmxLayer2D;
      /**  Return draw order. */
      getDrawOrder(): number;
      /**  Return visible. */
      isVisible(): boolean;
      /**  Return has property */
      hasProperty(name: string): boolean;
      /**  Return property. */
      getProperty(name: string): string;
      /**  Return layer type. */
      getLayerType(): TileMapLayerType2D;
      /**  Return width (for tile layer only). */
      getWidth(): number;
      /**  Return height (for tile layer only). */
      getHeight(): number;
      /**  Return tile node (for tile layer only). */
      getTileNode(x: number, y: number): Node;
      /**  Return tile (for tile layer only). */
      getTile(x: number, y: number): Tile2D;
      /**  Return number of tile map objects (for object group only). */
      getNumObjects(): number;
      /**  Return tile map object (for object group only). */
      getObject(index: number): TileMapObject2D;
      /**  Return object node (for object group only). */
      getObjectNode(index: number): Node;
      /**  Return image node (for image layer only). */
      getImageNode(): Node;
      getName(): string;

   }

   export class TileMapObject2D extends RefCounted {

      objectType: TileMapObjectType2D;
      name: string;
      type: string;
      position: Vector2;
      size: Vector2;
      numPoints: number;
      tileGid: number;
      tileSprite: Sprite2D;

      constructor();

      /**  Return type. */
      getObjectType(): TileMapObjectType2D;
      /**  Return name. */
      getName(): string;
      /**  Return type. */
      getType(): string;
      /**  Return position. */
      getPosition(): Vector2;
      /**  Return size (for rectangle and ellipse). */
      getSize(): Vector2;
      /**  Return number of points (use for script). */
      getNumPoints(): number;
      /**  Return point at index (use for script). */
      getPoint(index: number): Vector2;
      /**  Return tile Gid. */
      getTileGid(): number;
      /**  Return tile sprite. */
      getTileSprite(): Sprite2D;
      /**  Return has property. */
      hasProperty(name: string): boolean;
      /**  Return property value. */
      getProperty(name: string): string;
      validCollisionShape(): boolean;
      createCollisionShape(node: Node): CollisionShape2D;

   }

   export class TmxFile2D extends Resource {

      numLayers: number;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set Tilemap information. */
      setInfo(orientation: Orientation2D, width: number, height: number, tileWidth: number, tileHeight: number): boolean;
      /**  Return tile sprite by gid, if not exist return 0. */
      getTileSprite(gid: number): Sprite2D;
      /**  Return tile property set by gid, if not exist return 0. */
      getTilePropertySet(gid: number): PropertySet2D;
      /**  Return number of layers. */
      getNumLayers(): number;
      /**  Return layer at index. */
      getLayer(index: number): TmxLayer2D;
      getTileObjectGroup(gid: number): TmxObjectGroup2D;

   }

   export class TmxImageLayer2D extends TmxLayer2D {

      position: Vector2;
      source: string;
      sprite: Sprite2D;

      constructor(tmxFile: TmxFile2D);

      /**  Return position. */
      getPosition(): Vector2;
      /**  Return source. */
      getSource(): string;
      /**  Return sprite. */
      getSprite(): Sprite2D;

   }

   export class TmxLayer2D extends RefCounted {

      tmxFile: TmxFile2D;
      type: TileMapLayerType2D;
      name: string;
      width: number;
      height: number;
      visible: boolean;

      constructor(tmxFile?: TmxFile2D, type?: TileMapLayerType2D);

      /**  Return tmx file. */
      getTmxFile(): TmxFile2D;
      /**  Return type. */
      getType(): TileMapLayerType2D;
      /**  Return name. */
      getName(): string;
      /**  Return width. */
      getWidth(): number;
      /**  Return height. */
      getHeight(): number;
      /**  Return is visible. */
      isVisible(): boolean;
      /**  Return has property (use for script). */
      hasProperty(name: string): boolean;
      /**  Return property value (use for script). */
      getProperty(name: string): string;

   }

   export class TmxObjectGroup2D extends TmxLayer2D {

      numObjects: number;

      constructor(tmxFile: TmxFile2D);

      /**  Return number of objects. */
      getNumObjects(): number;
      /**  Return tile map object at index. */
      getObject(index: number): TileMapObject2D;

   }

   export class TmxTileLayer2D extends TmxLayer2D {

      constructor(tmxFile: TmxFile2D);

      /**  Return tile. */
      getTile(x: number, y: number): Tile2D;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PhysicsBeginContact2D" **/
    export var PhysicsBeginContact2DEventType : Atomic.EventType;

    /** object returned in the callback for the PhysicsBeginContact2D event.**/
    export interface PhysicsBeginContact2DEvent extends Atomic.EventData {
        world : Atomic.PhysicsWorld2D;
        bodyA : Atomic.RigidBody2D;
        bodyB : Atomic.RigidBody2D;
        nodeA : Atomic.Node;
        nodeB : Atomic.Node;
        /** Unmapped Native Type: b2Contact */
        contact : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PhysicsBeginContact2D event. 

     / Physics begin contact. Global event sent by PhysicsWorld2D.
    **/
    export function PhysicsBeginContact2DEvent (callback : Atomic.EventCallback<PhysicsBeginContact2DEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PhysicsBeginContact2D event. **/ 
    export function PhysicsBeginContact2DEventData (callbackData : PhysicsBeginContact2DEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PhysicsEndContact2D" **/
    export var PhysicsEndContact2DEventType : Atomic.EventType;

    /** object returned in the callback for the PhysicsEndContact2D event.**/
    export interface PhysicsEndContact2DEvent extends Atomic.EventData {
        world : Atomic.PhysicsWorld2D;
        bodyA : Atomic.RigidBody2D;
        bodyB : Atomic.RigidBody2D;
        nodeA : Atomic.Node;
        nodeB : Atomic.Node;
        /** Unmapped Native Type: b2Contact */
        contact : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PhysicsEndContact2D event. 

     / Physics end contact. Global event sent by PhysicsWorld2D.
    **/
    export function PhysicsEndContact2DEvent (callback : Atomic.EventCallback<PhysicsEndContact2DEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PhysicsEndContact2D event. **/ 
    export function PhysicsEndContact2DEventData (callbackData : PhysicsEndContact2DEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeBeginContact2D" **/
    export var NodeBeginContact2DEventType : Atomic.EventType;

    /** object returned in the callback for the NodeBeginContact2D event.**/
    export interface NodeBeginContact2DEvent extends Atomic.EventData {
        body : Atomic.RigidBody2D;
        otherNode : Atomic.Node;
        otherBody : Atomic.RigidBody2D;
        /** Unmapped Native Type: b2Contact */
        contact : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeBeginContact2D event. 

     / Node begin contact. Sent by scene nodes participating in a collision.
    **/
    export function NodeBeginContact2DEvent (callback : Atomic.EventCallback<NodeBeginContact2DEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeBeginContact2D event. **/ 
    export function NodeBeginContact2DEventData (callbackData : NodeBeginContact2DEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeEndContact2D" **/
    export var NodeEndContact2DEventType : Atomic.EventType;

    /** object returned in the callback for the NodeEndContact2D event.**/
    export interface NodeEndContact2DEvent extends Atomic.EventData {
        body : Atomic.RigidBody2D;
        otherNode : Atomic.Node;
        otherBody : Atomic.RigidBody2D;
        /** Unmapped Native Type: b2Contact */
        contact : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeEndContact2D event. 

     / Node end contact. Sent by scene nodes participating in a collision.
    **/
    export function NodeEndContact2DEvent (callback : Atomic.EventCallback<NodeEndContact2DEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeEndContact2D event. **/ 
    export function NodeEndContact2DEventData (callbackData : NodeEndContact2DEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Audio
//----------------------------------------------------


   export class Audio extends AObject {

      listener: SoundListener;
      sampleSize: number;
      mixRate: number;
      interpolation: boolean;
      stereo: boolean;
      playing: boolean;
      initialized: boolean;

      /**  Construct. */
      constructor();

      /**  Initialize sound output with specified buffer length and output mode. */
      setMode(bufferLengthMSec: number, mixRate: number, stereo: boolean, interpolation?: boolean): boolean;
      /**  Run update on sound sources. Not required for continued playback, but frees unused sound sources & sounds and updates 3D positions. */
      update(timeStep: number): void;
      /**  Restart sound output. */
      play(): boolean;
      /**  Suspend sound output. */
      stop(): void;
      /**  Set master gain on a specific sound type such as sound effects, music or voice. */
      setMasterGain(type: string, gain: number): void;
      /**  Pause playback of specific sound type. This allows to suspend e.g. sound effects or voice when the game is paused. By default all sound types are unpaused. */
      pauseSoundType(type: string): void;
      /**  Resume playback of specific sound type. */
      resumeSoundType(type: string): void;
      /**  Resume playback of all sound types. */
      resumeAll(): void;
      /**  Set active sound listener for 3D sounds. */
      setListener(listener: SoundListener): void;
      /**  Stop any sound source playing a certain sound clip. */
      stopSound(sound: Sound): void;
      /**  Return byte size of one sample. */
      getSampleSize(): number;
      /**  Return mixing rate. */
      getMixRate(): number;
      /**  Return whether output is interpolated. */
      getInterpolation(): boolean;
      /**  Return whether output is stereo. */
      isStereo(): boolean;
      /**  Return whether audio is being output. */
      isPlaying(): boolean;
      /**  Return whether an audio stream has been reserved. */
      isInitialized(): boolean;
      /**  Return master gain for a specific sound source type. Unknown sound types will return full gain (1). */
      getMasterGain(type: string): number;
      /**  Return whether specific sound type has been paused. */
      isSoundTypePaused(type: string): boolean;
      /**  Return active sound listener. */
      getListener(): SoundListener;
      /**  Return whether the specified master gain has been defined. */
      hasMasterGain(type: string): boolean;
      /**  Add a sound source to keep track of. Called by SoundSource. */
      addSoundSource(soundSource: SoundSource): void;
      /**  Remove a sound source. Called by SoundSource. */
      removeSoundSource(soundSource: SoundSource): void;
      /**  Return sound type specific gain multiplied by master gain. */
      getSoundSourceMasterGain(typeHash: string): number;

   }

   export class Sound extends Resource {

      size: number;
      looped: boolean;
      length: number;
      dataSize: number;
      sampleSize: number;
      frequency: number;
      intFrequency: number;
      sixteenBit: boolean;
      stereo: boolean;
      compressed: boolean;

      /**  Construct. */
      constructor();

      /**  Set sound size in bytes. Also resets the sound to be uncompressed and one-shot. */
      setSize(dataSize: number): void;
      /**  Set uncompressed sound data format. */
      setFormat(frequency: number, sixteenBit: boolean, stereo: boolean): void;
      /**  Set loop on/off. If loop is enabled, sets the full sound as loop range. */
      setLooped(enable: boolean): void;
      /**  Define loop. */
      setLoop(repeatOffset: number, endOffset: number): void;
      /**  Return length in seconds. */
      getLength(): number;
      /**  Return total sound data size. */
      getDataSize(): number;
      /**  Return sample size. */
      getSampleSize(): number;
      /**  Return default frequency as a float. */
      getFrequency(): number;
      /**  Return default frequency as an integer. */
      getIntFrequency(): number;
      /**  Return whether is looped. */
      isLooped(): boolean;
      /**  Return whether data is sixteen bit. */
      isSixteenBit(): boolean;
      /**  Return whether data is stereo. */
      isStereo(): boolean;
      /**  Return whether is compressed. */
      isCompressed(): boolean;
      /**  Fix interpolation by copying data from loop start to loop end (looped), or adding silence (oneshot.) Called internally, does not normally need to be called, unless the sound data is modified manually on the fly. */
      fixInterpolation(): void;
      setData(data: Int16Array);

   }

   export class SoundListener extends Component {

      /**  Construct. */
      constructor();


   }

   export class SoundSource extends Component {

      soundType: string;
      frequency: number;
      gain: number;
      attenuation: number;
      panning: number;
      autoRemoveMode: AutoRemoveMode;
      sound: Sound;
      timePosition: number;
      playing: boolean;
      positionAttr: number;
      playingAttr: boolean;

      /**  Construct. */
      constructor();

      /**  Play a sound. */
      play(sound: Sound): void;
      /**  Stop playback. */
      stop(): void;
      /**  Set sound type, determines the master gain group. */
      setSoundType(type: string): void;
      /**  Set frequency. */
      setFrequency(frequency: number): void;
      /**  Set gain. 0.0 is silence, 1.0 is full volume. */
      setGain(gain: number): void;
      /**  Set attenuation. 1.0 is unaltered. Used for distance attenuated playback. */
      setAttenuation(attenuation: number): void;
      /**  Set stereo panning. -1.0 is full left and 1.0 is full right. */
      setPanning(panning: number): void;
      /** / Set to remove either the sound source component or its owner node from the scene automatically on sound playback completion. Disabled by default. */
      setAutoRemoveMode(mode: AutoRemoveMode): void;
      /**  Return sound. */
      getSound(): Sound;
      /**  Return sound type, determines the master gain group. */
      getSoundType(): string;
      /**  Return playback time position. */
      getTimePosition(): number;
      /**  Return frequency. */
      getFrequency(): number;
      /**  Return gain. */
      getGain(): number;
      /**  Return attenuation. */
      getAttenuation(): number;
      /**  Return stereo panning. */
      getPanning(): number;
      /**  Return automatic removal mode on sound playback completion. */
      getAutoRemoveMode(): AutoRemoveMode;
      /**  Return whether is playing. */
      isPlaying(): boolean;
      /**  Update the sound source. Perform subclass specific operations. Called by Audio. */
      update(timeStep: number): void;
      /**  Update the effective master gain. Called internally and by Audio when the master gain changes. */
      updateMasterGain(): void;
      /**  Set sound position attribute. */
      setPositionAttr(value: number): void;
      /**  Set sound playing attribute */
      setPlayingAttr(value: boolean): void;
      /**  Return sound position attribute. */
      getPositionAttr(): number;

   }

   export class SoundSource3D extends SoundSource {

      nearDistance: number;
      farDistance: number;
      innerAngle: number;
      outerAngle: number;
      rolloffFactor: number;

      /**  Construct. */
      constructor();

      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Update sound source. */
      update(timeStep: number): void;
      /**  Set attenuation parameters. */
      setDistanceAttenuation(nearDistance: number, farDistance: number, rolloffFactor: number): void;
      /**  Set angle attenuation parameters. */
      setAngleAttenuation(innerAngle: number, outerAngle: number): void;
      /**  Set near distance. Inside this range sound will not be attenuated. */
      setNearDistance(distance: number): void;
      /**  Set far distance. Outside this range sound will be completely attenuated. */
      setFarDistance(distance: number): void;
      /**  Set inner angle in degrees. Inside this angle sound will not be attenuated.By default 360, meaning direction never has an effect. */
      setInnerAngle(angle: number): void;
      /**  Set outer angle in degrees. Outside this angle sound will be completely attenuated. By default 360, meaning direction never has an effect. */
      setOuterAngle(angle: number): void;
      /**  Set rolloff power factor, defines attenuation function shape. */
      setRolloffFactor(factor: number): void;
      /**  Calculate attenuation and panning based on current position and listener position. */
      calculateAttenuation(): void;
      /**  Return near distance. */
      getNearDistance(): number;
      /**  Return far distance. */
      getFarDistance(): number;
      /**  Return inner angle in degrees. */
      getInnerAngle(): number;
      /**  Return outer angle in degrees. */
      getOuterAngle(): number;
      /**  Return rolloff power factor. */
      rollAngleoffFactor(): number;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SoundFinished" **/
    export var SoundFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the SoundFinished event.**/
    export interface SoundFinishedEvent extends Atomic.EventData {
        node : Atomic.Node;
        soundSource : Atomic.SoundSource;
        sound : Atomic.Sound;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SoundFinished event. 

     / Sound playback finished. Sent through the SoundSource's Node.
    **/
    export function SoundFinishedEvent (callback : Atomic.EventCallback<SoundFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SoundFinished event. **/ 
    export function SoundFinishedEventData (callbackData : SoundFinishedEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Container
//----------------------------------------------------


   export class RefCounted {

      typeName: string;
      instantiationType: InstantiationType;

      /**  Construct. Allocate the reference count structure and set an initial self weak reference. */
      constructor();

      /**  Increment reference count. Can also be called outside of a SharedPtr for traditional reference counting. */
      addRef(): void;
      /**  Decrement reference count and delete self if no more references. Can also be called outside of a SharedPtr for traditional reference counting. */
      releaseRef(): void;
      /**  Return reference count. */
      refs(): number;
      /**  Return weak reference count. */
      weakRefs(): number;
      isObject(): boolean;
      getTypeName(): string;
      /**  Increment reference count. Do not call any lifetime book keeping */
      addRefSilent(): void;
      getInstantiationType(): InstantiationType;
      setInstantiationType(type: InstantiationType): void;

   }



//----------------------------------------------------
// MODULE: Core
//----------------------------------------------------


   export class AObject extends RefCounted {

      type: string;
      typeName: string;
      context: Context;
      eventSender: AObject;
      category: string;

      /**  Construct. */
      constructor();

      /**  Return type hash. */
      getType(): string;
      /**  Return type name. */
      getTypeName(): string;
      /**  Check current type is type of specified type. */
      static isTypeOf(type: string): boolean;
      /**  Check current instance is type of specified type. */
      isInstanceOf(type: string): boolean;
      /**  Unsubscribe from an event. */
      unsubscribeFromEvent(eventType: string): void;
      /**  Unsubscribe from a specific sender's events. */
      unsubscribeFromEvents(sender: AObject): void;
      /**  Unsubscribe from all events. */
      unsubscribeFromAllEvents(): void;
      /**  Return execution context. */
      getContext(): Context;
      /**  Return subsystem by type. */
      getSubsystem(type: string): AObject;
      /**  Return active event sender. Null outside event handling. */
      getEventSender(): AObject;
      /**  Return whether has subscribed to any event. */
      hasEventHandlers(): boolean;
      /**  Return object category. Categories are (optionally) registered along with the object factory. Return an empty string if the object category is not registered. */
      getCategory(): string;
      isObject(): boolean;
      /**  Unsubscribe from event for specific receiver (where the event handler isn't necessarily in the subscribed object) */
      unsubscribeFromEventReceiver(receiver: AObject): void;
      static getTypeNameStatic(): string;
      sendEvent(eventType:string, data?:Object);
      sendEvent<T extends Atomic.EventCallbackMetaData>(eventCallbackMetaData:T);
      subscribeToEvent(eventType:string, callback:(data:any) => void);
      subscribeToEvent(sender:AObject, eventType:string, callback:(data: any) => void);
      subscribeToEvent(eventMetaData:Atomic.EventMetaData);
      subscribeToEvent(sender:AObject, eventMetaData:Atomic.EventMetaData);

   }

   export class AtomicBuildInfo extends RefCounted {


      constructor();

      /**  Get the Git SHA of the build */
      static getGitSHA(): string;
      /**  Get the Date of the build */
      static getBuildDate(): string;
      /**  Get the Time of the build */
      static getBuildTime(): string;
      /**  Get the build release name */
      static getBuildName(): string;
      /**  Get the build string in form (BuildName): BuildDate BuildTime Git:SHA */
      static getBuildString(): string;
      /**  Get whether this is binary or source tree development build */
      static getDevBuild(): boolean;
      /**  Get whether this is a distibution/installer binary build */
      static getDistBuild(): boolean;
      /**  Get vendor string */
      static getBuildVendor(): string;

   }

   export class Context extends RefCounted {

      eventSender: AObject;
      editorContext: boolean;

      /**  Construct. */
      constructor();

      /**  Create an object by type hash. Return pointer to it or null if no factory found. */
      createObject(objectType: string): AObject;
      /**  Register a subsystem. */
      registerSubsystem(subsystem: AObject): void;
      /**  Remove a subsystem. */
      removeSubsystem(objectType: string): void;
      /**  Copy base class attributes to derived class. */
      copyBaseAttributes(baseType: string, derivedType: string): void;
      /**  Return subsystem by type. */
      getSubsystem(type: string): AObject;
      /**  Return active event sender. Null outside event handling. */
      getEventSender(): AObject;
      /**  Get whether an Editor Context */
      getEditorContext(): boolean;
      /**  Get whether an Editor Context */
      setEditorContext(editor: boolean): void;

   }

   export class Time extends AObject {

      timerPeriod: number;
      frameNumber: number;
      timeStep: number;
      elapsedTime: number;

      /**  Construct. */
      constructor();

      /**  Begin new frame, with (last) frame duration in seconds and send frame start event. */
      beginFrame(timeStep: number): void;
      /**  End frame. Increment total time and send frame end event. */
      endFrame(): void;
      /**  Set the low-resolution timer period in milliseconds. 0 resets to the default period. */
      setTimerPeriod(mSec: number): void;
      /**  Return frame number, starting from 1 once BeginFrame() is called for the first time. */
      getFrameNumber(): number;
      /**  Return current frame timestep as seconds. */
      getTimeStep(): number;
      /**  Return current low-resolution timer period in milliseconds. */
      getTimerPeriod(): number;
      /**  Return elapsed time from program start as seconds. */
      getElapsedTime(): number;
      /**  Get system time as milliseconds. */
      static getSystemTime(): number;
      /**  Get system time as seconds since 1.1.1970. */
      static getTimeSinceEpoch(): number;
      /**  Get a date/time stamp as a string. */
      static getTimeStamp(): string;
      /**  Sleep for a number of milliseconds. */
      static sleep(mSec: number): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "BeginFrame" **/
    export var BeginFrameEventType : Atomic.EventType;

    /** object returned in the callback for the BeginFrame event.**/
    export interface BeginFrameEvent extends Atomic.EventData {
        frameNumber : number;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the BeginFrame event. 

     / Frame begin event.
    **/
    export function BeginFrameEvent (callback : Atomic.EventCallback<BeginFrameEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the BeginFrame event. **/ 
    export function BeginFrameEventData (callbackData : BeginFrameEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "Update" **/
    export var UpdateEventType : Atomic.EventType;

    /** object returned in the callback for the Update event.**/
    export interface UpdateEvent extends Atomic.EventData {
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the Update event. 

     / Application-wide logic update event.
    **/
    export function UpdateEvent (callback : Atomic.EventCallback<UpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the Update event. **/ 
    export function UpdateEventData (callbackData : UpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PostUpdate" **/
    export var PostUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the PostUpdate event.**/
    export interface PostUpdateEvent extends Atomic.EventData {
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PostUpdate event. 

     / Application-wide logic post-update event.
    **/
    export function PostUpdateEvent (callback : Atomic.EventCallback<PostUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PostUpdate event. **/ 
    export function PostUpdateEventData (callbackData : PostUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "RenderUpdate" **/
    export var RenderUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the RenderUpdate event.**/
    export interface RenderUpdateEvent extends Atomic.EventData {
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the RenderUpdate event. 

     / Render update event.
    **/
    export function RenderUpdateEvent (callback : Atomic.EventCallback<RenderUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the RenderUpdate event. **/ 
    export function RenderUpdateEventData (callbackData : RenderUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PostRenderUpdate" **/
    export var PostRenderUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the PostRenderUpdate event.**/
    export interface PostRenderUpdateEvent extends Atomic.EventData {
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PostRenderUpdate event. 

     / Post-render update event.
    **/
    export function PostRenderUpdateEvent (callback : Atomic.EventCallback<PostRenderUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PostRenderUpdate event. **/ 
    export function PostRenderUpdateEventData (callbackData : PostRenderUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EndFrame" **/
    export var EndFrameEventType : Atomic.EventType;

    /** object returned in the callback for the EndFrame event.**/
    export interface EndFrameEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EndFrame event. 

     / Frame end event.
    **/
    export function EndFrameEvent (callback : Atomic.EventCallback<EndFrameEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EndFrame event. **/ 
    export function EndFrameEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UpdatesPaused" **/
    export var UpdatesPausedEventType : Atomic.EventType;

    /** object returned in the callback for the UpdatesPaused event.**/
    export interface UpdatesPausedEvent extends Atomic.EventData {
        paused : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UpdatesPaused event. 

     / Updating paused or resumed event.
    **/
    export function UpdatesPausedEvent (callback : Atomic.EventCallback<UpdatesPausedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UpdatesPaused event. **/ 
    export function UpdatesPausedEventData (callbackData : UpdatesPausedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "GoJSDebugger" **/
    export var GoJSDebuggerEventType : Atomic.EventType;

    /** object returned in the callback for the GoJSDebugger event.**/
    export interface GoJSDebuggerEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the GoJSDebugger event. 

     we want the js debugger to connect to the player
    **/
    export function GoJSDebuggerEvent (callback : Atomic.EventCallback<GoJSDebuggerEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the GoJSDebugger event. **/ 
    export function GoJSDebuggerEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WorkItemCompleted" **/
    export var WorkItemCompletedEventType : Atomic.EventType;

    /** object returned in the callback for the WorkItemCompleted event.**/
    export interface WorkItemCompletedEvent extends Atomic.EventData {
        /** Unmapped Native Type: WorkItem */
        item : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WorkItemCompleted event. 

     / Work item completed event.
    **/
    export function WorkItemCompletedEvent (callback : Atomic.EventCallback<WorkItemCompletedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WorkItemCompleted event. **/ 
    export function WorkItemCompletedEventData (callbackData : WorkItemCompletedEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Engine
//----------------------------------------------------


   export class Application extends AObject {


      /**  Construct. Parse default engine parameters from the command line, and create the engine in an uninitialized state. */
      constructor();

      /**  Setup before engine initialization. This is a chance to eg. modify the engine parameters. Call ErrorExit() to terminate without initializing the engine. Called by Application. */
      setup(): void;
      /**  Setup after engine initialization and before running the main loop. Call ErrorExit() to terminate without running the main loop. Called by Application. */
      start(): void;
      /**  Cleanup after the main loop. Called by Application. */
      stop(): void;
      /**  Show an error message (last log message if empty), terminate the main loop, and set failure exit code. */
      errorExit(message?: string): void;
      static getAutoMetrics(): boolean;
      static setAutoMetrics(value: boolean): void;

   }

   export class Engine extends AObject {

      minFps: number;
      maxFps: number;
      maxInactiveFps: number;
      timeStepSmoothing: number;
      pauseMinimized: boolean;
      autoExit: boolean;
      nextTimeStep: number;
      initialized: boolean;
      exiting: boolean;
      headless: boolean;
      paused: boolean;
      runNextPausedFrame: boolean;
      fps: number;
      debugBuild: boolean;

      /**  Construct. */
      constructor();

      /**  Run one frame. */
      runFrame(): void;
      /**  Set minimum frames per second. If FPS goes lower than this, time will appear to slow down. */
      setMinFps(fps: number): void;
      /**  Set maximum frames per second. The engine will sleep if FPS is higher than this. */
      setMaxFps(fps: number): void;
      /**  Set maximum frames per second when the application does not have input focus. */
      setMaxInactiveFps(fps: number): void;
      /**  Set how many frames to average for timestep smoothing. Default is 2. 1 disables smoothing. */
      setTimeStepSmoothing(frames: number): void;
      /**  Set whether to pause update events and audio when minimized. */
      setPauseMinimized(enable: boolean): void;
      /**  Set whether to exit automatically on exit request (window close button.) */
      setAutoExit(enable: boolean): void;
      /**  Override timestep of the next frame. Should be called in between RunFrame() calls. */
      setNextTimeStep(seconds: number): void;
      /**  Close the graphics window and set the exit flag. No-op on iOS, as an iOS application can not legally exit. */
      exit(): void;
      /**  Dump profiling information to the log. */
      dumpProfiler(): void;
      /**  Dump information of all resources to the log. */
      dumpResources(dumpFileName?: boolean): void;
      /**  Dump information of all memory allocations to the log. Supported in MSVC debug mode only. */
      dumpMemory(): void;
      /**  Get timestep of the next frame. Updated by ApplyFrameLimit(). */
      getNextTimeStep(): number;
      /**  Return the minimum frames per second. */
      getMinFps(): number;
      /**  Return the maximum frames per second. */
      getMaxFps(): number;
      /**  Return the maximum frames per second when the application does not have input focus. */
      getMaxInactiveFps(): number;
      /**  Return how many frames to average for timestep smoothing. */
      getTimeStepSmoothing(): number;
      /**  Return whether to pause update events and audio when minimized. */
      getPauseMinimized(): boolean;
      /**  Return whether to exit automatically on exit request. */
      getAutoExit(): boolean;
      /**  Return whether engine has been initialized. */
      isInitialized(): boolean;
      /**  Return whether exit has been requested. */
      isExiting(): boolean;
      /**  Return whether the engine has been created in headless mode. */
      isHeadless(): boolean;
      /**  Send frame update events. */
      update(): void;
      /**  Render after frame update. */
      render(): void;
      /**  Get the timestep for the next frame and sleep for frame limiting if necessary. */
      applyFrameLimit(): void;
      /**  Set whether the engine is paused. */
      setPaused(paused: boolean): void;
      /**  Set whether to run the next frame even if paused (for stepping frame by frame) */
      setRunNextPausedFrame(run: boolean): void;
      /**  Return whether the engine is paused. */
      isPaused(): boolean;
      /**  Return whether to run the next frame even if paused (for stepping frame by frame) */
      getRunNextPausedFrame(): boolean;
      /**  Return the engine's current framerate (updated at 1/2 second intervals) */
      getFps(): number;
      getDebugBuild(): boolean;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ConsoleCommand" **/
    export var ConsoleCommandEventType : Atomic.EventType;

    /** object returned in the callback for the ConsoleCommand event.**/
    export interface ConsoleCommandEvent extends Atomic.EventData {
        command : string;
        id : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ConsoleCommand event. 

     / A command has been entered on the console.
    **/
    export function ConsoleCommandEvent (callback : Atomic.EventCallback<ConsoleCommandEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ConsoleCommand event. **/ 
    export function ConsoleCommandEventData (callbackData : ConsoleCommandEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Environment
//----------------------------------------------------


   export class ProcSky extends Drawable {

      dayTime: number;
      autoUpdate: boolean;
      updateGeometryType: UpdateGeometryType;

      constructor();

      setDayTime(time: number): number;
      getDayTime(): number;
      setAutoUpdate(autoUpdate: boolean): void;
      /**  Return whether a geometry update is necessary, and if it can happen in a worker thread. */
      getUpdateGeometryType(): UpdateGeometryType;
      static getTimeOfDay(): number;

   }



//----------------------------------------------------
// MODULE: Graphics
//----------------------------------------------------


   export class AnimatedModel extends StaticModel {

      updateGeometryType: UpdateGeometryType;
      animationLodBias: number;
      updateInvisible: boolean;
      boneCreationOverride: boolean;
      animationStates: string[];
      numAnimationStates: number;
      morphVertexBuffers: string[];
      numMorphs: number;
      master: boolean;
      bonesEnabledAttr: ScriptVector;
      animationStatesAttr: ScriptVector;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Return whether a geometry update is necessary, and if it can happen in a worker thread. */
      getUpdateGeometryType(): UpdateGeometryType;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set model. */
      setModel(model: Model, createBones?: boolean): void;
      /**  Add an animation. */
      addAnimationState(animation: Animation): AnimationState;
      /**  Remove all animations. */
      removeAllAnimationStates(): void;
      /**  Set animation LOD bias. */
      setAnimationLodBias(bias: number): void;
      /**  Set whether to update animation and the bounding box when not visible. Recommended to enable for physically controlled models like ragdolls. */
      setUpdateInvisible(enable: boolean): void;
      /**  Set bone creation override. Useful for previewing animations in the editor scene view. */
      setBoneCreationOverride(enabled: boolean): void;
      /**  Reset all vertex morphs to zero. */
      resetMorphWeights(): void;
      /**  Return the node of a skeleton bone (for script access) */
      getSkeletonBoneNode(boneName: string): Node;
      /**  Return all animation states. */
      getAnimationStates(): string[];
      /**  Return number of animation states. */
      getNumAnimationStates(): number;
      /**  Return animation LOD bias. */
      getAnimationLodBias(): number;
      /**  Return whether to update animation when not visible. */
      getUpdateInvisible(): boolean;
      /**  Return all morph vertex buffers. */
      getMorphVertexBuffers(): string[];
      /**  Return number of vertex morphs. */
      getNumMorphs(): number;
      /**  Return whether is the master (first) animated model. */
      isMaster(): boolean;
      /**  Set bones' animation enabled attribute. */
      setBonesEnabledAttr(value: ScriptVector): void;
      /**  Set animation states attribute. */
      setAnimationStatesAttr(value: ScriptVector): void;
      /**  Return bones' animation enabled attribute. */
      getBonesEnabledAttr(outVector: ScriptVector): void;
      /**  Return animation states attribute. */
      getAnimationStatesAttr(outVector: ScriptVector): void;
      /**  Recalculate the bone bounding box. Normally called internally, but can also be manually called if up-to-date information before rendering is necessary. */
      updateBoneBoundingBox(): void;

   }

   export class Animation extends Resource {

      animationName: string;
      length: number;
      numTriggers: number;
      animationNameHash: string;
      numTracks: number;

      /**  Construct. */
      constructor();

      /**  Set animation name. */
      setAnimationName(name: string): void;
      /**  Set animation length. */
      setLength(length: number): void;
      /**  Remove a track by name. Return true if was found and removed successfully. This is unsafe if the animation is currently used in playback. */
      removeTrack(name: string): boolean;
      /**  Remove all tracks. This is unsafe if the animation is currently used in playback. */
      removeAllTracks(): void;
      /**  Remove a trigger point by index. */
      removeTrigger(index: number): void;
      /**  Remove all trigger points. */
      removeAllTriggers(): void;
      /**  Resize trigger point vector. */
      setNumTriggers(num: number): void;
      /**  Clone the animation. */
      clone(cloneName?: string): Animation;
      /**  Return animation name. */
      getAnimationName(): string;
      /**  Return animation name hash. */
      getAnimationNameHash(): string;
      /**  Return animation length. */
      getLength(): number;
      /**  Return number of animation tracks. */
      getNumTracks(): number;
      /**  Return number of animation trigger points. */
      getNumTriggers(): number;

   }

   export class AnimationController extends Component {

      animationsAttr: ScriptVector;
      nodeAnimationStatesAttr: ScriptVector;
      animationResources: string[];

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Update the animations. Is called from HandleScenePostUpdate(). */
      update(timeStep: number): void;
      /**  Play an animation and set full target weight. Name must be the full resource name. Return true on success. */
      play(name: string, layer: number, looped: boolean, fadeInTime?: number): boolean;
      /**  Play an animation, set full target weight and fade out all other animations on the same layer. Name must be the full resource name. Return true on success. */
      playExclusive(name: string, layer: number, looped: boolean, fadeTime?: number): boolean;
      /**  Stop an animation. Zero fadetime is instant. Return true on success. */
      stop(name: string, fadeOutTime?: number): boolean;
      /**  Stop all animations on a specific layer. Zero fadetime is instant. */
      stopLayer(layer: number, fadeOutTime?: number): void;
      /**  Stop all animations. Zero fadetime is instant. */
      stopAll(fadeTime?: number): void;
      /**  Fade animation to target weight. Return true on success. */
      fade(name: string, targetWeight: number, fadeTime: number): boolean;
      /**  Fade other animations on the same layer to target weight. Return true on success. */
      fadeOthers(name: string, targetWeight: number, fadeTime: number): boolean;
      /**  Set animation blending layer priority. Return true on success. */
      setLayer(name: string, layer: number): boolean;
      /**  Set animation start bone. Return true on success. */
      setStartBone(name: string, startBoneName: string): boolean;
      /**  Set animation time position. Return true on success. */
      setTime(name: string, time: number): boolean;
      /**  Set animation weight. Return true on success. */
      setWeight(name: string, weight: number): boolean;
      /**  Set animation looping. Return true on success. */
      setLooped(name: string, enable: boolean): boolean;
      /**  Set animation speed. Return true on success. */
      setSpeed(name: string, speed: number): boolean;
      /**  Set animation autofade at end (non-looped animations only.) Zero time disables. Return true on success. */
      setAutoFade(name: string, fadeOutTime: number): boolean;
      /**  Set whether an animation auto-removes on completion. */
      setRemoveOnCompletion(name: string, removeOnCompletion: boolean): boolean;
      /**  Set animation blending mode. Return true on success. */
      setBlendMode(name: string, mode: AnimationBlendMode): boolean;
      /**  Return whether an animation is active. Note that non-looping animations that are being clamped at the end also return true. */
      isPlaying(name: string): boolean;
      /**  Return whether an animation is fading in. */
      isFadingIn(name: string): boolean;
      /**  Return whether an animation is fading out. */
      isFadingOut(name: string): boolean;
      /**  Return whether an animation is at its end. Will return false if the animation is not active at all. */
      isAtEnd(name: string): boolean;
      /**  Return animation blending layer. */
      getLayer(name: string): number;
      /**  Return animation start bone name, or empty string if no such animation. */
      getStartBoneName(name: string): string;
      /**  Return animation time position. */
      getTime(name: string): number;
      /**  Return animation weight. */
      getWeight(name: string): number;
      /**  Return animation looping. */
      isLooped(name: string): boolean;
      /**  Return animation blending mode. */
      getBlendMode(name: string): AnimationBlendMode;
      /**  Return animation length. */
      getLength(name: string): number;
      /**  Return animation speed. */
      getSpeed(name: string): number;
      /**  Return animation fade target weight. */
      getFadeTarget(name: string): number;
      /**  Return animation fade time. */
      getFadeTime(name: string): number;
      /**  Return animation autofade time. */
      getAutoFade(name: string): number;
      /**  Return whether animation auto-removes on completion, or false if no such animation. */
      getRemoveOnCompletion(name: string): boolean;
      /**  Set animation control structures attribute. */
      setAnimationsAttr(value: ScriptVector): void;
      /**  Set node animation states attribute. */
      setNodeAnimationStatesAttr(value: ScriptVector): void;
      /**  Return animation control structures attribute. */
      getAnimationsAttr(outVector: ScriptVector): void;
      /**  Return node animation states attribute. */
      getNodeAnimationStatesAttr(outVector: ScriptVector): void;
      addAnimationResource(animation: Animation): void;
      removeAnimationResource(animation: Animation): void;
      clearAnimationResources(): void;
      getAnimationResources(): string[];

   }

   export class AnimationState extends RefCounted {

      looped: boolean;
      weight: number;
      blendMode: AnimationBlendMode;
      time: number;
      layer: number;
      animation: Animation;
      model: AnimatedModel;
      node: Node;
      enabled: boolean;
      length: number;

      /**  Construct with animated model and animation pointers. */
      constructor(model: AnimatedModel, animation: Animation);

      /**  Set looping enabled/disabled. */
      setLooped(looped: boolean): void;
      /**  Set blending weight. */
      setWeight(weight: number): void;
      /**  Set blending mode. */
      setBlendMode(mode: AnimationBlendMode): void;
      /**  Set time position. Does not fire animation triggers. */
      setTime(time: number): void;
      /**  Modify blending weight. */
      addWeight(delta: number): void;
      /**  Modify time position. %Animation triggers will be fired. */
      addTime(delta: number): void;
      /**  Set blending layer. */
      setLayer(layer: number): void;
      /**  Return animation. */
      getAnimation(): Animation;
      /**  Return animated model this state belongs to (model mode.) */
      getModel(): AnimatedModel;
      /**  Return root scene node this state controls (node hierarchy mode.) */
      getNode(): Node;
      /**  Return whether weight is nonzero. */
      isEnabled(): boolean;
      /**  Return whether looped. */
      isLooped(): boolean;
      /**  Return blending weight. */
      getWeight(): number;
      /**  Return blending mode. */
      getBlendMode(): AnimationBlendMode;
      /**  Return time position. */
      getTime(): number;
      /**  Return animation length. */
      getLength(): number;
      /**  Return blending layer. */
      getLayer(): number;
      /**  Apply the animation at the current time position. */
      apply(): void;

   }

   export class Billboard extends RefCounted {

      position: Vector3;
      size: Vector2;
      uv: Rect;
      color: Color;
      rotation: number;
      direction: Vector3;
      enabled: boolean;
      sortDistance: number;

      constructor();

      getPosition(): Vector3;
      setPosition(position: Vector3): void;
      getSize(): Vector2;
      setSize(size: Vector2): void;
      getUV(): Rect;
      setUV(uv: Rect): void;
      getColor(): Color;
      setColor(color: Color): void;
      getRotation(): number;
      setRotation(rotation: number): void;
      getDirection(): Vector3;
      setDirection(direction: Vector3): void;
      isEnabled(): boolean;
      setEnabled(enabled: boolean): void;
      getSortDistance(): number;
      setSortDistance(sortDistance: number): void;

   }

   export class BillboardSet extends Drawable {

      updateGeometryType: UpdateGeometryType;
      material: Material;
      numBillboards: number;
      relative: boolean;
      scaled: boolean;
      sorted: boolean;
      fixedScreenSize: boolean;
      faceCameraMode: FaceCameraMode;
      minAngle: number;
      animationLodBias: number;
      billboardsAttr: ScriptVector;

      /**  Construct. */
      constructor();

      /**  Return whether a geometry update is necessary, and if it can happen in a worker thread. */
      getUpdateGeometryType(): UpdateGeometryType;
      /**  Set material. */
      setMaterial(material: Material): void;
      /**  Set number of billboards. */
      setNumBillboards(num: number): void;
      /**  Set whether billboards are relative to the scene node. Default true. */
      setRelative(enable: boolean): void;
      /**  Set whether scene node scale affects billboards' size. Default true. */
      setScaled(enable: boolean): void;
      /**  Set whether billboards are sorted by distance. Default false. */
      setSorted(enable: boolean): void;
      /**  Set whether billboards have fixed size on screen (measured in pixels) regardless of distance to camera. Default false. */
      setFixedScreenSize(enable: boolean): void;
      /**  Set how the billboards should rotate in relation to the camera. Default is to follow camera rotation on all axes (FC_ROTATE_XYZ.) */
      setFaceCameraMode(mode: FaceCameraMode): void;
      /**  Set minimal angle between billboard normal and look-at direction. */
      setMinAngle(angle: number): void;
      /**  Set animation LOD bias. */
      setAnimationLodBias(bias: number): void;
      /**  Mark for bounding box and vertex buffer update. Call after modifying the billboards. */
      commit(): void;
      /**  Return material. */
      getMaterial(): Material;
      /**  Return number of billboards. */
      getNumBillboards(): number;
      /**  Return billboard by index. */
      getBillboard(index: number): Billboard;
      /**  Return whether billboards are relative to the scene node. */
      isRelative(): boolean;
      /**  Return whether scene node scale affects billboards' size. */
      isScaled(): boolean;
      /**  Return whether billboards are sorted. */
      isSorted(): boolean;
      /**  Return whether billboards are fixed screen size. */
      isFixedScreenSize(): boolean;
      /**  Return how the billboards rotate in relation to the camera. */
      getFaceCameraMode(): FaceCameraMode;
      /**  Return minimal angle between billboard normal and look-at direction. */
      getMinAngle(): number;
      /**  Return animation LOD bias. */
      getAnimationLodBias(): number;
      /**  Set billboards attribute. */
      setBillboardsAttr(value: ScriptVector): void;
      /**  Return billboards attribute. */
      getBillboardsAttr(outVector: ScriptVector): void;

   }

   export class Camera extends Component {

      nearClip: number;
      farClip: number;
      fov: number;
      orthoSize: number;
      aspectRatio: number;
      fillMode: FillMode;
      zoom: number;
      lodBias: number;
      viewMask: number;
      viewOverrideFlags: number;
      orthographic: boolean;
      autoAspectRatio: boolean;
      projectionOffset: Vector2;
      useReflection: boolean;
      useClipping: boolean;
      flipVertical: boolean;
      frustum: Frustum;
      halfViewSize: number;
      viewSpaceFrustum: Frustum;
      reverseCulling: boolean;
      projectionValid: boolean;
      aspectRatioInternal: number;
      orthoSizeAttr: number;
      reflectionPlaneAttr: Vector4;
      clipPlaneAttr: Vector4;

      /**  Construct. */
      constructor();

      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set near clip distance. */
      setNearClip(nearClip: number): void;
      /**  Set far clip distance. */
      setFarClip(farClip: number): void;
      /**  Set vertical field of view in degrees. */
      setFov(fov: number): void;
      /**  Set orthographic mode view uniform size. */
      setOrthoSize(orthoSize: number): void;
      /**  Set aspect ratio manually. Disables the auto aspect ratio -mode. */
      setAspectRatio(aspectRatio: number): void;
      /**  Set polygon fill mode to use when rendering a scene. */
      setFillMode(mode: FillMode): void;
      /**  Set zoom. */
      setZoom(zoom: number): void;
      /**  Set LOD bias. */
      setLodBias(bias: number): void;
      /**  Set view mask. Will be and'ed with object's view mask to see if the object should be rendered. */
      setViewMask(mask: number): void;
      /**  Set view override flags. */
      setViewOverrideFlags(flags: number): void;
      /**  Set orthographic mode enabled/disabled. */
      setOrthographic(enable: boolean): void;
      /**  Set automatic aspect ratio based on viewport dimensions. Enabled by default. */
      setAutoAspectRatio(enable: boolean): void;
      /**  Set projection offset. It needs to be calculated as (offset in pixels) / (viewport dimensions.) */
      setProjectionOffset(offset: Vector2): void;
      /**  Set reflection mode. */
      setUseReflection(enable: boolean): void;
      /**  Set whether to use a custom clip plane. */
      setUseClipping(enable: boolean): void;
      /**  Set vertical flipping mode. Called internally by View to resolve OpenGL / Direct3D9 rendertarget sampling differences. */
      setFlipVertical(enable: boolean): void;
      /**  Return far clip distance. If a custom projection matrix is in use, is calculated from it instead of the value assigned with SetFarClip(). */
      getFarClip(): number;
      /**  Return near clip distance. If a custom projection matrix is in use, is calculated from it instead of the value assigned with SetNearClip(). */
      getNearClip(): number;
      /**  Return vertical field of view in degrees. */
      getFov(): number;
      /**  Return orthographic mode size. */
      getOrthoSize(): number;
      /**  Return aspect ratio. */
      getAspectRatio(): number;
      /**  Return zoom. */
      getZoom(): number;
      /**  Return LOD bias. */
      getLodBias(): number;
      /**  Return view mask. */
      getViewMask(): number;
      /**  Return view override flags. */
      getViewOverrideFlags(): number;
      /**  Return fill mode. */
      getFillMode(): FillMode;
      /**  Return orthographic flag. */
      isOrthographic(): boolean;
      /**  Return auto aspect ratio flag. */
      getAutoAspectRatio(): boolean;
      /**  Return frustum in world space. */
      getFrustum(): Frustum;
      /**  Return frustum near and far sizes. */
      getFrustumSize(near: Vector3, far: Vector3): void;
      /**  Return half view size. */
      getHalfViewSize(): number;
      /**  Return frustum split by custom near and far clip distances. */
      getSplitFrustum(nearClip: number, farClip: number): Frustum;
      /**  Return frustum in view space. */
      getViewSpaceFrustum(): Frustum;
      /**  Return split frustum in view space. */
      getViewSpaceSplitFrustum(nearClip: number, farClip: number): Frustum;
      /**  Convert a world space point to normalized screen coordinates (0 - 1). */
      worldToScreenPoint(worldPos: Vector3): Vector2;
      /**  Note that a HitDistance() from the camera screen ray is not the same as distance along the view Z axis, as under a perspective projection the ray is likely to not be Z-aligned.
      */
      screenToWorldPoint(screenPos: Vector3): Vector3;
      /**  Return projection offset. */
      getProjectionOffset(): Vector2;
      /**  Return whether is using reflection. */
      getUseReflection(): boolean;
      /**  Return whether is using a custom clipping plane. */
      getUseClipping(): boolean;
      /**  Return vertical flipping mode. */
      getFlipVertical(): boolean;
      /**  Return whether to reverse culling; affected by vertical flipping and reflection. */
      getReverseCulling(): boolean;
      /**  Return distance to position. In orthographic mode uses only Z coordinate. */
      getDistance(worldPos: Vector3): number;
      /**  Return squared distance to position. In orthographic mode uses only Z coordinate. */
      getDistanceSquared(worldPos: Vector3): number;
      /**  Return a scene node's LOD scaled distance. */
      getLodDistance(distance: number, scale: number, bias: number): number;
      /**  Return a world rotation for facing a camera on certain axes based on the existing world rotation. */
      getFaceCameraRotation(position: Vector3, rotation: Quaternion, mode: FaceCameraMode, minAngle?: number): Quaternion;
      /**  Return if projection parameters are valid for rendering and raycasting. */
      isProjectionValid(): boolean;
      /**  Set aspect ratio without disabling the "auto aspect ratio" mode. Called internally by View. */
      setAspectRatioInternal(aspectRatio: number): void;
      /**  Set orthographic size attribute without forcing the aspect ratio. */
      setOrthoSizeAttr(orthoSize: number): void;
      /**  Set reflection plane attribute. */
      setReflectionPlaneAttr(value: Vector4): void;
      /**  Return reflection plane attribute. */
      getReflectionPlaneAttr(): Vector4;
      /**  Set clipping plane attribute. */
      setClipPlaneAttr(value: Vector4): void;
      /**  Return clipping plane attribute. */
      getClipPlaneAttr(): Vector4;

   }

   export class CustomGeometry extends Drawable {

      numOccluderTriangles: number;
      numGeometries: number;
      dynamic: boolean;
      material: Material;

      /**  Construct. */
      constructor();

      /**  Return number of occlusion geometry triangles. */
      getNumOccluderTriangles(): number;
      /**  Clear all geometries. */
      clear(): void;
      /**  Set number of geometries. */
      setNumGeometries(num: number): void;
      /**  Set vertex buffer dynamic mode. A dynamic buffer should be faster to update frequently. Effective at the next Commit() call. */
      setDynamic(enable: boolean): void;
      /**  Begin defining a geometry. Clears existing vertices in that index. */
      beginGeometry(index: number, type: PrimitiveType): void;
      /**  Define a vertex position. This begins a new vertex. */
      defineVertex(position: Vector3): void;
      /**  Define a vertex normal. */
      defineNormal(normal: Vector3): void;
      /**  Define a vertex color. */
      defineColor(color: Color): void;
      /**  Define a vertex UV coordinate. */
      defineTexCoord(texCoord: Vector2): void;
      /**  Define a vertex tangent. */
      defineTangent(tangent: Vector4): void;
      /**  Set the primitive type, number of vertices and elements in a geometry, after which the vertices can be edited with GetVertex(). An alternative to BeginGeometry() / DefineVertex(). */
      defineGeometry(index: number, type: PrimitiveType, numVertices: number, hasNormals: boolean, hasColors: boolean, hasTexCoords: boolean, hasTangents: boolean): void;
      /**  Update vertex buffer and calculate the bounding box. Call after finishing defining geometry. */
      commit(): void;
      /**  Set material on all geometries. */
      setMaterial(material: Material): void;
      /**  Return number of geometries. */
      getNumGeometries(): number;
      /**  Return number of vertices in a geometry. */
      getNumVertices(index: number): number;
      /**  Return whether vertex buffer dynamic mode is enabled. */
      isDynamic(): boolean;
      /**  Return material by geometry index. */
      getMaterial(index?: number): Material;
      setMaterialIndex(index:number, material:Material);

   }

   export class DebugRenderer extends Component {

      view: Camera;
      frustum: Frustum;

      /**  Construct. */
      constructor();

      /**  Set the camera viewpoint. Call before rendering, or before adding geometry if you want to use culling. */
      setView(camera: Camera): void;
      /**  Add a scene node represented as its coordinate axes. */
      addNode(node: Node, scale?: number, depthTest?: boolean): void;
      /**  Add a bounding box. */
      addBoundingBox(box: BoundingBox, color: Color, depthTest?: boolean): void;
      /**  Add a frustum. */
      addFrustum(frustum: Frustum, color: Color, depthTest?: boolean): void;
      /**  Add a cylinder */
      addCylinder(position: Vector3, radius: number, height: number, color: Color, depthTest?: boolean): void;
      /**  Add a circle. */
      addCircle(center: Vector3, normal: Vector3, radius: number, color: Color, steps?: number, depthTest?: boolean): void;
      /**  Add a cross. */
      addCross(center: Vector3, size: number, color: Color, depthTest?: boolean): void;
      /**  Add a quad on the XZ plane. */
      addQuad(center: Vector3, width: number, height: number, color: Color, depthTest?: boolean): void;
      /**  Update vertex buffer and render all debug lines. The viewport and rendertarget should be set before. */
      render(): void;
      /**  Return the view frustum. */
      getFrustum(): Frustum;
      /**  Check whether a bounding box is inside the view frustum. */
      isInside(box: BoundingBox): boolean;
      /**  Return whether has something to render. */
      hasContent(): boolean;
      /**  Creates a grid on all axis */
      createGrid(grid: Color, depthTest: boolean, position: Vector3): void;
      createXAxisLines(gridColor: number, depthTest: boolean, x: number, y: number, z: number): void;
      createZAxisLines(gridColor: number, depthTest: boolean, x: number, y: number, z: number): void;

   }

   export class DecalSet extends Drawable {

      updateGeometryType: UpdateGeometryType;
      material: Material;
      maxVertices: number;
      maxIndices: number;
      numDecals: number;
      numVertices: number;
      numIndices: number;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Return whether a geometry update is necessary, and if it can happen in a worker thread. */
      getUpdateGeometryType(): UpdateGeometryType;
      /**  Set material. The material should use a small negative depth bias to avoid Z-fighting. */
      setMaterial(material: Material): void;
      /**  Set maximum number of decal vertices. */
      setMaxVertices(num: number): void;
      /**  Set maximum number of decal vertex indices. */
      setMaxIndices(num: number): void;
      /**  Add a decal at world coordinates, using a target drawable's geometry for reference. If the decal needs to move with the target, the decal component should be created to the target's node. Return true if successful. */
      addDecal(target: Drawable, worldPosition: Vector3, worldRotation: Quaternion, size: number, aspectRatio: number, depth: number, topLeftUV: Vector2, bottomRightUV: Vector2, timeToLive?: number, normalCutoff?: number, subGeometry?: number): boolean;
      /**  Remove n oldest decals. */
      removeDecals(num: number): void;
      /**  Remove all decals. */
      removeAllDecals(): void;
      /**  Return material. */
      getMaterial(): Material;
      /**  Return number of decals. */
      getNumDecals(): number;
      /**  Retur number of vertices in the decals. */
      getNumVertices(): number;
      /**  Retur number of vertex indices in the decals. */
      getNumIndices(): number;
      /**  Return maximum number of decal vertices. */
      getMaxVertices(): number;
      /**  Return maximum number of decal vertex indices. */
      getMaxIndices(): number;

   }

   export class Drawable extends Component {

      updateGeometryType: UpdateGeometryType;
      numOccluderTriangles: number;
      drawDistance: number;
      shadowDistance: number;
      lodBias: number;
      viewMask: number;
      lightMask: number;
      shadowMask: number;
      zoneMask: number;
      maxLights: number;
      castShadows: boolean;
      occluder: boolean;
      occludee: boolean;
      boundingBox: BoundingBox;
      worldBoundingBox: BoundingBox;
      drawableFlags: number;
      sortValue: number;
      basePass: number;
      zone: Zone;
      zoneDirty: boolean;
      distance: number;
      lodDistance: number;
      firstLight: Light;
      minZ: number;
      maxZ: number;

      constructor(drawableFlags?: number);

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Return whether a geometry update is necessary, and if it can happen in a worker thread. */
      getUpdateGeometryType(): UpdateGeometryType;
      /**  Return number of occlusion geometry triangles. */
      getNumOccluderTriangles(): number;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set draw distance. */
      setDrawDistance(distance: number): void;
      /**  Set shadow draw distance. */
      setShadowDistance(distance: number): void;
      /**  Set LOD bias. */
      setLodBias(bias: number): void;
      /**  Set view mask. Is and'ed with camera's view mask to see if the object should be rendered. */
      setViewMask(mask: number): void;
      /**  Set light mask. Is and'ed with light's and zone's light mask to see if the object should be lit. */
      setLightMask(mask: number): void;
      /**  Set shadow mask. Is and'ed with light's light mask and zone's shadow mask to see if the object should be rendered to a shadow map. */
      setShadowMask(mask: number): void;
      /**  Set zone mask. Is and'ed with zone's zone mask to see if the object should belong to the zone. */
      setZoneMask(mask: number): void;
      /**  Set maximum number of per-pixel lights. Default 0 is unlimited. */
      setMaxLights(num: number): void;
      /**  Set shadowcaster flag. */
      setCastShadows(enable: boolean): void;
      /**  Set occlusion flag. */
      setOccluder(enable: boolean): void;
      /**  Set occludee flag. */
      setOccludee(enable: boolean): void;
      /**  Mark for update and octree reinsertion. Update is automatically queued when the drawable's scene node moves or changes scale. */
      markForUpdate(): void;
      /**  Return local space bounding box. May not be applicable or properly updated on all drawables. */
      getBoundingBox(): BoundingBox;
      /**  Return world-space bounding box. */
      getWorldBoundingBox(): BoundingBox;
      /**  Return drawable flags. */
      getDrawableFlags(): number;
      /**  Return draw distance. */
      getDrawDistance(): number;
      /**  Return shadow draw distance. */
      getShadowDistance(): number;
      /**  Return LOD bias. */
      getLodBias(): number;
      /**  Return view mask. */
      getViewMask(): number;
      /**  Return light mask. */
      getLightMask(): number;
      /**  Return shadow mask. */
      getShadowMask(): number;
      /**  Return zone mask. */
      getZoneMask(): number;
      /**  Return maximum number of per-pixel lights. */
      getMaxLights(): number;
      /**  Return shadowcaster flag. */
      getCastShadows(): boolean;
      /**  Return occluder flag. */
      isOccluder(): boolean;
      /**  Return occludee flag. */
      isOccludee(): boolean;
      /**  Set new zone. Zone assignment may optionally be temporary, meaning it needs to be re-evaluated on the next frame. */
      setZone(zone: Zone, temporary?: boolean): void;
      /**  Set sorting value. */
      setSortValue(value: number): void;
      /**  Set view-space depth bounds. */
      setMinMaxZ(minZ: number, maxZ: number): void;
      /**  Mark in view without specifying a camera. Used for shadow casters. */
      markInView(frameNumber: number): void;
      /**  Sort and limit per-pixel lights to maximum allowed. Convert extra lights into vertex lights. */
      limitLights(): void;
      /**  Sort and limit per-vertex lights to maximum allowed. */
      limitVertexLights(removeConvertedLights: boolean): void;
      /**  Set base pass flag for a batch. */
      setBasePass(batchIndex: number): void;
      /**  Return current zone. */
      getZone(): Zone;
      /**  Return whether current zone is inconclusive or dirty due to the drawable moving. */
      isZoneDirty(): boolean;
      /**  Return distance from camera. */
      getDistance(): number;
      /**  Return LOD scaled distance from camera. */
      getLodDistance(): number;
      /**  Return sorting value. */
      getSortValue(): number;
      /**  Return whether has a base pass. */
      hasBasePass(batchIndex: number): boolean;
      /**  Return the first added per-pixel light. */
      getFirstLight(): Light;
      /**  Return the minimum view-space depth. */
      getMinZ(): number;
      /**  Return the maximum view-space depth. */
      getMaxZ(): number;
      /**  Add a per-pixel light affecting the object this frame. */
      addLight(light: Light): void;
      /**  Add a per-vertex light affecting the object this frame. */
      addVertexLight(light: Light): void;

   }

   export class Graphics extends AObject {

      windowTitle: string;
      windowIcon: Image;
      srgb: boolean;
      dither: boolean;
      flushGPU: boolean;
      forceGL2: boolean;
      orientations: string;
      vertexBuffer: VertexBuffer;
      textureForUpdate: Texture;
      defaultTextureFilterMode: TextureFilterMode;
      defaultTextureAnisotropy: number;
      viewport: IntRect;
      colorWrite: boolean;
      cullMode: CullMode;
      depthTest: CompareMode;
      depthWrite: boolean;
      fillMode: FillMode;
      clipPlane: boolean;
      initialized: boolean;
      apiName: string;
      windowPosition: IntVector2;
      width: number;
      height: number;
      multiSample: number;
      fullscreen: boolean;
      borderless: boolean;
      resizable: boolean;
      highDPI: boolean;
      vSync: boolean;
      tripleBuffer: boolean;
      deviceLost: boolean;
      numPrimitives: number;
      numBatches: number;
      dummyColorFormat: number;
      shadowMapFormat: number;
      hiresShadowMapFormat: number;
      instancingSupport: boolean;
      lightPrepassSupport: boolean;
      deferredSupport: boolean;
      anisotropySupport: boolean;
      hardwareShadowSupport: boolean;
      readableDepthSupport: boolean;
      sRGBSupport: boolean;
      sRGBWriteSupport: boolean;
      desktopResolution: IntVector2;
      vertexShader: ShaderVariation;
      pixelShader: ShaderVariation;
      depthStencil: RenderSurface;
      blendMode: BlendMode;
      alphaToCoverage: boolean;
      depthConstantBias: number;
      depthSlopeScaledBias: number;
      stencilTest: boolean;
      scissorTest: boolean;
      scissorRect: IntRect;
      stencilTestMode: CompareMode;
      stencilPass: StencilOp;
      stencilFail: StencilOp;
      stencilZFail: StencilOp;
      stencilRef: number;
      stencilCompareMask: number;
      stencilWriteMask: number;
      useClipPlane: boolean;
      renderTargetDimensions: IntVector2;
      vbo: number;
      ubo: number;
      currentMonitor: number;
      numMonitors: number;
      maximized: boolean;

      /**  Construct. */
      constructor();

      /**  Set window title. */
      setWindowTitle(windowTitle: string): void;
      /**  Set window icon. */
      setWindowIcon(windowIcon: Image): void;
      /**  Set window position. Sets initial position if window is not created yet. */
      setWindowPosition(x: number, y: number): void;
      /**  Set whether the main window uses sRGB conversion on write. */
      setSRGB(enable: boolean): void;
      /**  Set whether rendering output is dithered. Default true on OpenGL. No effect on Direct3D. */
      setDither(enable: boolean): void;
      /**  Set whether to flush the GPU command buffer to prevent multiple frames being queued and uneven frame timesteps. Default off, may decrease performance if enabled. Not currently implemented on OpenGL. */
      setFlushGPU(enable: boolean): void;
      /**  Set forced use of OpenGL 2 even if OpenGL 3 is available. Must be called before setting the screen mode for the first time. Default false. No effect on Direct3D9 & 11. */
      setForceGL2(enable: boolean): void;
      /**  Set allowed screen orientations as a space-separated list of "LandscapeLeft", "LandscapeRight", "Portrait" and "PortraitUpsideDown". Affects currently only iOS platform. */
      setOrientations(orientations: string): void;
      /**  Toggle between full screen and windowed mode. Return true if successful. */
      toggleFullscreen(): boolean;
      /**  Close the window. */
      close(): void;
      /**  Take a screenshot. Return true if successful. */
      takeScreenShot(destImage: Image): boolean;
      /**  Begin frame rendering. Return true if device available and can render. */
      beginFrame(): boolean;
      /**  End frame rendering and swap buffers. */
      endFrame(): void;
      /**  Clear any or all of rendertarget, depth buffer and stencil buffer. */
      clear(flags: number, color?: Color, depth?: number, stencil?: number): void;
      /**  Resolve multisampled backbuffer to a texture rendertarget. The texture's size should match the viewport size. */
      resolveToTexture(destination: Texture2D, viewport: IntRect): boolean;
      /**  Draw non-indexed geometry. */
      draw(type: PrimitiveType, vertexStart: number, vertexCount: number): void;
      /**  Set vertex buffer. */
      setVertexBuffer(buffer: VertexBuffer): void;
      /**  Set shaders. */
      setShaders(vs: ShaderVariation, ps: ShaderVariation): void;
      /**  Check whether a shader parameter exists on the currently set shaders. */
      hasShaderParameter(param: string): boolean;
      /**  Check whether the current vertex or pixel shader uses a texture unit. */
      hasTextureUnit(unit: TextureUnit): boolean;
      /**  Clear remembered shader parameter source group. */
      clearParameterSource(group: ShaderParameterGroup): void;
      /**  Clear remembered shader parameter sources. */
      clearParameterSources(): void;
      /**  Clear remembered transform shader parameter sources. */
      clearTransformSources(): void;
      /**  Set texture. */
      setTexture(index: number, texture: Texture): void;
      /**  Bind texture unit 0 for update. Called by Texture. Used only on OpenGL. */
      setTextureForUpdate(texture: Texture): void;
      /**  Dirty texture parameters of all textures (when global settings change.) */
      setTextureParametersDirty(): void;
      /**  Set default texture filtering mode. Called by Renderer before rendering. */
      setDefaultTextureFilterMode(mode: TextureFilterMode): void;
      /**  Set default texture anisotropy level. Called by Renderer before rendering. */
      setDefaultTextureAnisotropy(level: number): void;
      /**  Reset all rendertargets, depth-stencil surface and viewport. */
      resetRenderTargets(): void;
      /**  Reset specific rendertarget. */
      resetRenderTarget(index: number): void;
      /**  Reset depth-stencil surface. */
      resetDepthStencil(): void;
      /**  Set viewport. */
      setViewport(rect: IntRect): void;
      /**  Set blending and alpha-to-coverage modes. Alpha-to-coverage is not supported on Direct3D9. */
      setBlendMode(mode: BlendMode, alphaToCoverage?: boolean): void;
      /**  Set color write on/off. */
      setColorWrite(enable: boolean): void;
      /**  Set hardware culling mode. */
      setCullMode(mode: CullMode): void;
      /**  Set depth bias. */
      setDepthBias(constantBias: number, slopeScaledBias: number): void;
      /**  Set depth compare. */
      setDepthTest(mode: CompareMode): void;
      /**  Set depth write on/off. */
      setDepthWrite(enable: boolean): void;
      /**  Set polygon fill mode. */
      setFillMode(mode: FillMode): void;
      /**  Set stencil test. */
      setStencilTest(enable: boolean, mode?: CompareMode, pass?: StencilOp, fail?: StencilOp, zFail?: StencilOp, stencilRef?: number, compareMask?: number, writeMask?: number): void;
      /**  Set a custom clipping plane. The plane is specified in world space, but is dependent on the view and projection matrices. */
      setClipPlane(enable: boolean): void;
      /**  Begin dumping shader variation names to an XML file for precaching. */
      beginDumpShaders(fileName: string): void;
      /**  End dumping shader variations names. */
      endDumpShaders(): void;
      /**  Return whether rendering initialized. */
      isInitialized(): boolean;
      /**  Return window title. */
      getWindowTitle(): string;
      /**  Return graphics API name. */
      getApiName(): string;
      /**  Return window position. */
      getWindowPosition(): IntVector2;
      /**  Return window width in pixels. */
      getWidth(): number;
      /**  Return window height in pixels. */
      getHeight(): number;
      /**  Return multisample mode (1 = no multisampling.) */
      getMultiSample(): number;
      /**  Return whether window is fullscreen. */
      getFullscreen(): boolean;
      /**  Return whether window is borderless. */
      getBorderless(): boolean;
      /**  Return whether window is resizable. */
      getResizable(): boolean;
      /**  Return whether window is high DPI. */
      getHighDPI(): boolean;
      /**  Return whether vertical sync is on. */
      getVSync(): boolean;
      /**  Return whether triple buffering is enabled. */
      getTripleBuffer(): boolean;
      /**  Return whether the main window is using sRGB conversion on write. */
      getSRGB(): boolean;
      /**  Return whether rendering output is dithered. */
      getDither(): boolean;
      /**  Return whether the GPU command buffer is flushed each frame. */
      getFlushGPU(): boolean;
      /**  Return whether OpenGL 2 use is forced. Effective only on OpenGL. */
      getForceGL2(): boolean;
      /**  Return allowed screen orientations. */
      getOrientations(): string;
      /**  Return whether graphics context is lost and can not render or load GPU resources. */
      isDeviceLost(): boolean;
      /**  Return number of primitives drawn this frame. */
      getNumPrimitives(): number;
      /**  Return number of batches drawn this frame. */
      getNumBatches(): number;
      /**  Return dummy color texture format for shadow maps. Is "NULL" (consume no video memory) if supported. */
      getDummyColorFormat(): number;
      /**  Return shadow map depth texture format, or 0 if not supported. */
      getShadowMapFormat(): number;
      /**  Return 24-bit shadow map depth texture format, or 0 if not supported. */
      getHiresShadowMapFormat(): number;
      /**  Return whether hardware instancing is supported. */
      getInstancingSupport(): boolean;
      /**  Return whether light pre-pass rendering is supported. */
      getLightPrepassSupport(): boolean;
      /**  Return whether deferred rendering is supported. */
      getDeferredSupport(): boolean;
      /**  Return whether anisotropic texture filtering is supported. */
      getAnisotropySupport(): boolean;
      /**  Return whether shadow map depth compare is done in hardware. */
      getHardwareShadowSupport(): boolean;
      /**  Return whether a readable hardware depth format is available. */
      getReadableDepthSupport(): boolean;
      /**  Return whether sRGB conversion on texture sampling is supported. */
      getSRGBSupport(): boolean;
      /**  Return whether sRGB conversion on rendertarget writing is supported. */
      getSRGBWriteSupport(): boolean;
      /**  Return the desktop resolution. */
      getDesktopResolution(): IntVector2;
      /**  Return a shader variation by name and defines. */
      getShader(type: ShaderType, name: string, defines?: string): ShaderVariation;
      /**  Return current vertex buffer by index. */
      getVertexBuffer(index: number): VertexBuffer;
      /**  Return current vertex shader. */
      getVertexShader(): ShaderVariation;
      /**  Return current pixel shader. */
      getPixelShader(): ShaderVariation;
      /**  Return texture unit index by name. */
      getTextureUnit(name: string): TextureUnit;
      /**  Return texture unit name by index. */
      getTextureUnitName(unit: TextureUnit): string;
      /**  Return current texture by texture unit index. */
      getTexture(index: number): Texture;
      /**  Return default texture filtering mode. */
      getDefaultTextureFilterMode(): TextureFilterMode;
      /**  Return default texture max. anisotropy level. */
      getDefaultTextureAnisotropy(): number;
      /**  Return current rendertarget by index. */
      getRenderTarget(index: number): RenderSurface;
      /**  Return current depth-stencil surface. */
      getDepthStencil(): RenderSurface;
      /**  Return the viewport coordinates. */
      getViewport(): IntRect;
      /**  Return blending mode. */
      getBlendMode(): BlendMode;
      /**  Return whether alpha-to-coverage is enabled. */
      getAlphaToCoverage(): boolean;
      /**  Return whether color write is enabled. */
      getColorWrite(): boolean;
      /**  Return hardware culling mode. */
      getCullMode(): CullMode;
      /**  Return depth constant bias. */
      getDepthConstantBias(): number;
      /**  Return depth slope scaled bias. */
      getDepthSlopeScaledBias(): number;
      /**  Return depth compare mode. */
      getDepthTest(): CompareMode;
      /**  Return whether depth write is enabled. */
      getDepthWrite(): boolean;
      /**  Return polygon fill mode. */
      getFillMode(): FillMode;
      /**  Return whether stencil test is enabled. */
      getStencilTest(): boolean;
      /**  Return whether scissor test is enabled. */
      getScissorTest(): boolean;
      /**  Return scissor rectangle coordinates. */
      getScissorRect(): IntRect;
      /**  Return stencil compare mode. */
      getStencilTestMode(): CompareMode;
      /**  Return stencil operation to do if stencil test passes. */
      getStencilPass(): StencilOp;
      /**  Return stencil operation to do if stencil test fails. */
      getStencilFail(): StencilOp;
      /**  Return stencil operation to do if depth compare fails. */
      getStencilZFail(): StencilOp;
      /**  Return stencil reference value. */
      getStencilRef(): number;
      /**  Return stencil compare bitmask. */
      getStencilCompareMask(): number;
      /**  Return stencil write bitmask. */
      getStencilWriteMask(): number;
      /**  Return whether a custom clipping plane is in use. */
      getUseClipPlane(): boolean;
      /**  Return current rendertarget width and height. */
      getRenderTargetDimensions(): IntVector2;
      /**  Window was resized through user interaction. Called by Input subsystem. */
      onWindowResized(): void;
      /**  Window was moved through user interaction. Called by Input subsystem. */
      onWindowMoved(): void;
      /**  Restore GPU objects and reinitialize state. Requires an open window. Used only on OpenGL. */
      restore(): void;
      /**  Maximize the window. */
      maximize(): void;
      /**  Minimize the window. */
      minimize(): void;
      /**  Clean up too large scratch buffers. */
      cleanupScratchBuffers(): void;
      /**  Clean up shader parameters when a shader variation is released or destroyed. */
      cleanupShaderPrograms(variation: ShaderVariation): void;
      /**  Clean up a render surface from all FBOs. Used only on OpenGL. */
      cleanupRenderSurface(surface: RenderSurface): void;
      /**  Mark the FBO needing an update. Used only on OpenGL. */
      markFBODirty(): void;
      /**  Bind a VBO, avoiding redundant operation. Used only on OpenGL. */
      setVBO(object: number): void;
      /**  Bind a UBO, avoiding redundant operation. Used only on OpenGL. */
      setUBO(object: number): void;
      /**  Return the API-specific alpha texture format. */
      static getAlphaFormat(): number;
      /**  Return the API-specific luminance texture format. */
      static getLuminanceFormat(): number;
      /**  Return the API-specific luminance alpha texture format. */
      static getLuminanceAlphaFormat(): number;
      /**  Return the API-specific RGB texture format. */
      static getRGBFormat(): number;
      /**  Return the API-specific RGBA texture format. */
      static getRGBAFormat(): number;
      /**  Return the API-specific RGBA 16-bit texture format. */
      static getRGBA16Format(): number;
      /**  Return the API-specific RGBA 16-bit float texture format. */
      static getRGBAFloat16Format(): number;
      /**  Return the API-specific RGBA 32-bit float texture format. */
      static getRGBAFloat32Format(): number;
      /**  Return the API-specific RG 16-bit texture format. */
      static getRG16Format(): number;
      /**  Return the API-specific RG 16-bit float texture format. */
      static getRGFloat16Format(): number;
      /**  Return the API-specific RG 32-bit float texture format. */
      static getRGFloat32Format(): number;
      /**  Return the API-specific single channel 16-bit float texture format. */
      static getFloat16Format(): number;
      /**  Return the API-specific single channel 32-bit float texture format. */
      static getFloat32Format(): number;
      /**  Return the API-specific linear depth texture format. */
      static getLinearDepthFormat(): number;
      /**  Return the API-specific hardware depth-stencil texture format. */
      static getDepthStencilFormat(): number;
      /**  Return the API-specific readable hardware depth format, or 0 if not supported. */
      static getReadableDepthFormat(): number;
      /**  Return UV offset required for pixel perfect rendering. */
      static getPixelUVOffset(): Vector2;
      /**  Return maximum number of supported bones for skinning. */
      static getMaxBones(): number;
      /**  Return whether is using an OpenGL 3 context. Return always false on Direct3D9 & Direct3D11. */
      static getGL3Support(): boolean;
      getCurrentMonitor(): number;
      getNumMonitors(): number;
      getMaximized(): boolean;
      getMonitorResolution(monitorId: number): IntVector2;
      raiseWindow(): void;
      /**  Return number of passes drawn this frame */
      static getNumPasses(): number;
      /**  Set number of passes drawn this frame */
      static setNumPasses(value: number): void;
      /**  Return number of single render pass primitives drawn this frame (D3D9 Only) */
      static getSinglePassPrimitives(): number;
      /**  Set number of single render pass primitives drawn this frame (D3D9 Only) */
      static setSinglePassPrimitives(value: number): void;

   }

   export class Light extends Drawable {

      lightType: LightType;
      perVertex: boolean;
      color: Color;
      temperature: number;
      usePhysicalValues: boolean;
      specularIntensity: number;
      brightness: number;
      range: number;
      fov: number;
      aspectRatio: number;
      fadeDistance: number;
      shadowFadeDistance: number;
      shadowIntensity: number;
      shadowResolution: number;
      shadowNearFarRatio: number;
      shadowMaxExtrusion: number;
      rampTexture: Texture;
      shapeTexture: Texture;
      colorFromTemperature: Color;
      effectiveColor: Color;
      effectiveSpecularIntensity: number;
      frustum: Frustum;
      numShadowSplits: number;
      negative: boolean;

      /**  Construct. */
      constructor();

      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set light type. */
      setLightType(type: LightType): void;
      /**  Set vertex lighting mode. */
      setPerVertex(enable: boolean): void;
      /**  Set color. */
      setColor(color: Color): void;
      /**  Set temperature of the light in Kelvin. Modulates the light color when "use physical values" is enabled. */
      setTemperature(temperature: number): void;
      /**  Set use physical light values. */
      setUsePhysicalValues(enable: boolean): void;
      /**  Set specular intensity. Zero disables specular calculations. */
      setSpecularIntensity(intensity: number): void;
      /**  Set light brightness multiplier. Both the color and specular intensity are multiplied with this. When "use physical values" is enabled, the value is specified in lumens. */
      setBrightness(brightness: number): void;
      /**  Set range. */
      setRange(range: number): void;
      /**  Set spotlight field of view. */
      setFov(fov: number): void;
      /**  Set spotlight aspect ratio. */
      setAspectRatio(aspectRatio: number): void;
      /**  Set fade out start distance. */
      setFadeDistance(distance: number): void;
      /**  Set shadow fade out start distance. Only has effect if shadow distance is also non-zero. */
      setShadowFadeDistance(distance: number): void;
      /**  Set light intensity in shadow between 0.0 - 1.0. 0.0 (the default) gives fully dark shadows. */
      setShadowIntensity(intensity: number): void;
      /**  Set shadow resolution between 0.25 - 1.0. Determines the shadow map to use. */
      setShadowResolution(resolution: number): void;
      /**  Set shadow camera near/far clip distance ratio for spot and point lights. Does not affect directional lights, since they are orthographic and have near clip 0. */
      setShadowNearFarRatio(nearFarRatio: number): void;
      /**  Set maximum shadow extrusion for directional lights. The actual extrusion will be the smaller of this and camera far clip. Default 1000. */
      setShadowMaxExtrusion(extrusion: number): void;
      /**  Set range attenuation texture. */
      setRampTexture(texture: Texture): void;
      /**  Set spotlight attenuation texture. */
      setShapeTexture(texture: Texture): void;
      /**  Return light type. */
      getLightType(): LightType;
      /**  Return vertex lighting mode. */
      getPerVertex(): boolean;
      /**  Return color. */
      getColor(): Color;
      /**  Return the temperature of the light in Kelvin. */
      getTemperature(): number;
      /**  Return if light uses temperature and brightness in lumens. */
      getUsePhysicalValues(): boolean;
      /**  Return the color value of the temperature in Kelvin. */
      getColorFromTemperature(): Color;
      /**  Return specular intensity. */
      getSpecularIntensity(): number;
      /**  Return brightness multiplier. Specified in lumens when "use physical values" is enabled. */
      getBrightness(): number;
      /**  Return effective color, multiplied by brightness and affected by temperature when "use physical values" is enabled. Alpha is always 1 so that can compare against the default black color to detect a light with no effect. */
      getEffectiveColor(): Color;
      /**  Return effective specular intensity, multiplied by absolute value of brightness. */
      getEffectiveSpecularIntensity(): number;
      /**  Return range. */
      getRange(): number;
      /**  Return spotlight field of view. */
      getFov(): number;
      /**  Return spotlight aspect ratio. */
      getAspectRatio(): number;
      /**  Return fade start distance. */
      getFadeDistance(): number;
      /**  Return shadow fade start distance. */
      getShadowFadeDistance(): number;
      /**  Return light intensity in shadow. */
      getShadowIntensity(): number;
      /**  Return shadow resolution. */
      getShadowResolution(): number;
      /**  Return shadow camera near/far clip distance ratio. */
      getShadowNearFarRatio(): number;
      /**  Return maximum shadow extrusion distance for directional lights. */
      getShadowMaxExtrusion(): number;
      /**  Return range attenuation texture. */
      getRampTexture(): Texture;
      /**  Return spotlight attenuation texture. */
      getShapeTexture(): Texture;
      /**  Return spotlight frustum. */
      getFrustum(): Frustum;
      /**  Return number of shadow map cascade splits for a directional light, considering also graphics API limitations. */
      getNumShadowSplits(): number;
      /**  Return whether light has negative (darkening) color. */
      isNegative(): boolean;
      /**  Return a divisor value based on intensity for calculating the sort value. */
      getIntensityDivisor(attenuation?: number): number;
      getShadowCascade():Number[];
      setShadowCascade(split1:number, split2:number, split3:number, split4:number, fadeStart:number, biasAutoAdjust?:number);
      setShadowCascadeParameter(index:number, value:number);

   }

   export class Material extends Resource {

      numTechniques: number;
      vertexShaderDefines: string;
      pixelShaderDefines: string;
      cullMode: CullMode;
      shadowCullMode: CullMode;
      fillMode: FillMode;
      alphaToCoverage: boolean;
      renderOrder: number;
      occlusion: boolean;
      scene: Scene;
      auxViewFrameNumber: number;
      specular: boolean;
      shaderParameterHash: number;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set number of techniques. */
      setNumTechniques(num: number): void;
      /**  Set technique. */
      setTechnique(index: number, tech: Technique, qualityLevel?: number, lodDistance?: number): void;
      /**  Set additional vertex shader defines. Separate multiple defines with spaces. Setting defines at the material level causes technique(s) to be cloned as necessary. */
      setVertexShaderDefines(defines: string): void;
      /**  Set additional pixel shader defines. Separate multiple defines with spaces. Setting defines at the material level causes technique(s) to be cloned as necessary. */
      setPixelShaderDefines(defines: string): void;
      setShaderParameterAnimation(name: string, animation: ValueAnimation, wrapMode?: WrapMode, speed?: number): void;
      /**  Set shader parameter animation wrap mode. */
      setShaderParameterAnimationWrapMode(name: string, wrapMode: WrapMode): void;
      /**  Set shader parameter animation speed. */
      setShaderParameterAnimationSpeed(name: string, speed: number): void;
      /**  Set texture. */
      setTexture(unit: TextureUnit, texture: Texture): void;
      /**  Set culling mode. */
      setCullMode(mode: CullMode): void;
      /**  Set culling mode for shadows. */
      setShadowCullMode(mode: CullMode): void;
      /**  Set polygon fill mode. Interacts with the camera's fill mode setting so that the "least filled" mode will be used. */
      setFillMode(mode: FillMode): void;
      /**  Set alpha-to-coverage mode on all passes. */
      setAlphaToCoverage(enable: boolean): void;
      /**  Set 8-bit render order within pass. Default 128. Lower values will render earlier and higher values later, taking precedence over e.g. state and distance sorting. */
      setRenderOrder(order: number): void;
      /**  Set whether to use in occlusion rendering. Default true. */
      setOcclusion(enable: boolean): void;
      /**  Associate the material with a scene to ensure that shader parameter animation happens in sync with scene update, respecting the scene time scale. If no scene is set, the global update events will be used. */
      setScene(scene: Scene): void;
      /**  Remove shader parameter. */
      removeShaderParameter(name: string): void;
      /**  Reset all shader pointers. */
      releaseShaders(): void;
      /**  Clone the material. */
      clone(cloneName?: string): Material;
      /**  Ensure that material techniques are listed in correct order. */
      sortTechniques(): void;
      /**  Mark material for auxiliary view rendering. */
      markForAuxView(frameNumber: number): void;
      /**  Return number of techniques. */
      getNumTechniques(): number;
      /**  Return technique by index. */
      getTechnique(index: number): Technique;
      /**  Return pass by technique index and pass name. */
      getPass(index: number, passName: string): Pass;
      /**  Return texture by unit. */
      getTexture(unit: TextureUnit): Texture;
      /**  Return additional vertex shader defines. */
      getVertexShaderDefines(): string;
      /**  Return additional pixel shader defines. */
      getPixelShaderDefines(): string;
      /**  Return shader parameter animation. */
      getShaderParameterAnimation(name: string): ValueAnimation;
      /**  Return shader parameter animation wrap mode. */
      getShaderParameterAnimationWrapMode(name: string): WrapMode;
      /**  Return shader parameter animation speed. */
      getShaderParameterAnimationSpeed(name: string): number;
      /**  Return normal culling mode. */
      getCullMode(): CullMode;
      /**  Return culling mode for shadows. */
      getShadowCullMode(): CullMode;
      /**  Return polygon fill mode. */
      getFillMode(): FillMode;
      /**  Return alpha-to-coverage mode. */
      getAlphaToCoverage(): boolean;
      /**  Return render order. */
      getRenderOrder(): number;
      /**  Return last auxiliary view rendered frame number. */
      getAuxViewFrameNumber(): number;
      /**  Return whether should render occlusion. */
      getOcclusion(): boolean;
      /**  Return whether should render specular. */
      getSpecular(): boolean;
      /**  Return the scene associated with the material for shader parameter animation updates. */
      getScene(): Scene;
      /**  Return shader parameter hash value. Used as an optimization to avoid setting shader parameters unnecessarily. */
      getShaderParameterHash(): number;
      /**  Return name for texture unit. */
      static getTextureUnitName(unit: TextureUnit): string;
      static getTextureUnitName(unit:TextureUnit):string;
      getShaderParameters():ShaderParameter[];

   }

   export class Model extends Resource {

      boundingBox: BoundingBox;
      numGeometries: number;
      vertexBuffers: string[];
      numMorphs: number;
      geometryNames: string[];

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set local-space bounding box. */
      setBoundingBox(box: BoundingBox): void;
      /**  Set number of geometries. */
      setNumGeometries(num: number): void;
      /**  Set number of LOD levels in a geometry. */
      setNumGeometryLodLevels(index: number, num: number): boolean;
      /**  Set geometry center. */
      setGeometryCenter(index: number, center: Vector3): boolean;
      /**  Clone the model. The geometry data is deep-copied and can be modified in the clone without affecting the original. */
      clone(cloneName?: string): Model;
      /**  Return bounding box. */
      getBoundingBox(): BoundingBox;
      /**  Return vertex buffers. */
      getVertexBuffers(): string[];
      /**  Return number of geometries. */
      getNumGeometries(): number;
      /**  Return number of LOD levels in geometry. */
      getNumGeometryLodLevels(index: number): number;
      /**  Return geometry center by index. */
      getGeometryCenter(index: number): Vector3;
      /**  Return number of vertex morphs. */
      getNumMorphs(): number;
      /**  Return vertex buffer morph range start. */
      getMorphRangeStart(bufferIndex: number): number;
      /**  Return vertex buffer morph range vertex count. */
      getMorphRangeCount(bufferIndex: number): number;
      setGeometryName(index: number, name: string): boolean;
      getGeometryName(index: number): string;
      getGeometryNames(): string[];

   }

   export class Octree extends Component {

      numLevels: number;

      /**  Construct. */
      constructor();

      /**  Set size and maximum subdivision levels. If octree is not empty, drawable objects will be temporarily moved to the root. */
      setSize(box: BoundingBox, numLevels: number): void;
      /**  Add a drawable manually. */
      addManualDrawable(drawable: Drawable): void;
      /**  Remove a manually added drawable. */
      removeManualDrawable(drawable: Drawable): void;
      /**  Return subdivision levels. */
      getNumLevels(): number;
      /**  Mark drawable object as requiring an update and a reinsertion. */
      queueUpdate(drawable: Drawable): void;
      /**  Cancel drawable object's update. */
      cancelUpdate(drawable: Drawable): void;

   }

   export class ParticleEffect extends Resource {

      material: Material;
      numParticles: number;
      updateInvisible: boolean;
      relative: boolean;
      scaled: boolean;
      sorted: boolean;
      fixedScreenSize: boolean;
      animationLodBias: number;
      emitterType: EmitterType;
      emitterSize: Vector3;
      minDirection: Vector3;
      maxDirection: Vector3;
      constantForce: Vector3;
      dampingForce: number;
      activeTime: number;
      inactiveTime: number;
      minEmissionRate: number;
      maxEmissionRate: number;
      minParticleSize: Vector2;
      maxParticleSize: Vector2;
      minTimeToLive: number;
      maxTimeToLive: number;
      minVelocity: number;
      maxVelocity: number;
      minRotation: number;
      maxRotation: number;
      minRotationSpeed: number;
      maxRotationSpeed: number;
      sizeAdd: number;
      sizeMul: number;
      faceCameraMode: FaceCameraMode;
      numColorFrames: number;
      numTextureFrames: number;
      randomDirection: Vector3;
      randomSize: Vector2;
      randomVelocity: number;
      randomTimeToLive: number;
      randomRotationSpeed: number;
      randomRotation: number;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set material. */
      setMaterial(material: Material): void;
      /**  Set maximum number of particles. */
      setNumParticles(num: number): void;
      /**  Set whether to update when particles are not visible. */
      setUpdateInvisible(enable: boolean): void;
      /**  Set whether billboards are relative to the scene node. */
      setRelative(enable: boolean): void;
      /**  Set whether scene node scale affects billboards' size. */
      setScaled(enable: boolean): void;
      /**  Set whether billboards are sorted by distance. */
      setSorted(enable: boolean): void;
      /**  Set whether billboards have fixed size on screen (measured in pixels) regardless of distance to camera. */
      setFixedScreenSize(enable: boolean): void;
      /**  Set animation LOD bias. */
      setAnimationLodBias(lodBias: number): void;
      /**  Set emitter type. */
      setEmitterType(type: EmitterType): void;
      /**  Set emitter size. */
      setEmitterSize(size: Vector3): void;
      /**  Set negative direction limit. */
      setMinDirection(direction: Vector3): void;
      /**  Set positive direction limit. */
      setMaxDirection(direction: Vector3): void;
      /**  Set constant force acting on particles. */
      setConstantForce(force: Vector3): void;
      /**  Set particle velocity damping force. */
      setDampingForce(force: number): void;
      /**  Set emission active period length (0 = infinite.) */
      setActiveTime(time: number): void;
      /**  Set emission inactive period length (0 = infinite.) */
      setInactiveTime(time: number): void;
      /**  Set minimum emission rate. */
      setMinEmissionRate(rate: number): void;
      /**  Set maximum emission rate. */
      setMaxEmissionRate(rate: number): void;
      /**  Set particle minimum size. */
      setMinParticleSize(size: Vector2): void;
      /**  Set particle maximum size. */
      setMaxParticleSize(size: Vector2): void;
      /**  Set particle minimum time to live. */
      setMinTimeToLive(time: number): void;
      /**  Set particle maximum time to live. */
      setMaxTimeToLive(time: number): void;
      /**  Set particle minimum velocity. */
      setMinVelocity(velocity: number): void;
      /**  Set particle maximum velocity. */
      setMaxVelocity(velocity: number): void;
      /**  Set particle minimum rotation. */
      setMinRotation(rotation: number): void;
      /**  Set particle maximum rotation. */
      setMaxRotation(rotation: number): void;
      /**  Set particle minimum rotation speed. */
      setMinRotationSpeed(speed: number): void;
      /**  Set particle maximum rotation speed. */
      setMaxRotationSpeed(speed: number): void;
      /**  Set particle size additive modifier. */
      setSizeAdd(sizeAdd: number): void;
      /**  Set particle size multiplicative modifier. */
      setSizeMul(sizeMul: number): void;
      /**  Set how the particles should rotate in relation to the camera. Default is to follow camera rotation on all axes (FC_ROTATE_XYZ.) */
      setFaceCameraMode(mode: FaceCameraMode): void;
      /**  Add a color frame sorted in the correct position based on time. */
      addColorTime(color: Color, time: number): void;
      /**  Remove color frame at index */
      removeColorFrame(index: number): void;
      /**  Set number of color frames. */
      setNumColorFrames(number: number): void;
      /**  Sort the list of color frames based on time. */
      sortColorFrames(): void;
      /**  Add a texture frame sorted in the correct position based on time. */
      addTextureTime(uv: Rect, time: number): void;
      /**  Remove texture frame at index */
      removeTextureFrame(index: number): void;
      /**  Set number of texture frames. */
      setNumTextureFrames(number: number): void;
      /**  Sort the list of texture frames based on time. */
      sortTextureFrames(): void;
      /**  Clone the particle effect. */
      clone(cloneName?: string): ParticleEffect;
      /**  Return material. */
      getMaterial(): Material;
      /**  Return maximum number of particles. */
      getNumParticles(): number;
      /**  Return whether to update when particles are not visible. */
      getUpdateInvisible(): boolean;
      /**  Return whether billboards are relative to the scene node. */
      isRelative(): boolean;
      /**  Return whether scene node scale affects billboards' size. */
      isScaled(): boolean;
      /**  Return whether billboards are sorted. */
      isSorted(): boolean;
      /**  Return whether billboards are fixed screen size. */
      isFixedScreenSize(): boolean;
      /**  Return animation Lod bias. */
      getAnimationLodBias(): number;
      /**  Return emitter type. */
      getEmitterType(): EmitterType;
      /**  Return emitter size. */
      getEmitterSize(): Vector3;
      /**  Return negative direction limit. */
      getMinDirection(): Vector3;
      /**  Return positive direction limit. */
      getMaxDirection(): Vector3;
      /**  Return constant force acting on particles. */
      getConstantForce(): Vector3;
      /**  Return particle velocity damping force. */
      getDampingForce(): number;
      /**  Return emission active period length (0 = infinite.) */
      getActiveTime(): number;
      /**  Return emission inactive period length (0 = infinite.) */
      getInactiveTime(): number;
      /**  Return minimum emission rate. */
      getMinEmissionRate(): number;
      /**  Return maximum emission rate. */
      getMaxEmissionRate(): number;
      /**  Return particle minimum size. */
      getMinParticleSize(): Vector2;
      /**  Return particle maximum size. */
      getMaxParticleSize(): Vector2;
      /**  Return particle minimum time to live. */
      getMinTimeToLive(): number;
      /**  Return particle maximum time to live. */
      getMaxTimeToLive(): number;
      /**  Return particle minimum velocity. */
      getMinVelocity(): number;
      /**  Return particle maximum velocity. */
      getMaxVelocity(): number;
      /**  Return particle minimum rotation. */
      getMinRotation(): number;
      /**  Return particle maximum rotation. */
      getMaxRotation(): number;
      /**  Return particle minimum rotation speed. */
      getMinRotationSpeed(): number;
      /**  Return particle maximum rotation speed. */
      getMaxRotationSpeed(): number;
      /**  Return particle size additive modifier. */
      getSizeAdd(): number;
      /**  Return particle size multiplicative modifier. */
      getSizeMul(): number;
      /**  Return number of color animation frames. */
      getNumColorFrames(): number;
      /**  Return number of texture animation frames. */
      getNumTextureFrames(): number;
      /**  Return how the particles rotate in relation to the camera. */
      getFaceCameraMode(): FaceCameraMode;
      /**  Return random direction. */
      getRandomDirection(): Vector3;
      /**  Return random size. */
      getRandomSize(): Vector2;
      /**  Return random velocity. */
      getRandomVelocity(): number;
      /**  Return random timetolive. */
      getRandomTimeToLive(): number;
      /**  Return random rotationspeed. */
      getRandomRotationSpeed(): number;
      /**  Return random rotation. */
      getRandomRotation(): number;

   }

   export class ParticleEmitter extends BillboardSet {

      effect: ParticleEffect;
      numParticles: number;
      emitting: boolean;
      serializeParticles: boolean;
      autoRemoveMode: AutoRemoveMode;
      particlesAttr: ScriptVector;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Set particle effect. */
      setEffect(effect: ParticleEffect): void;
      /**  Set maximum number of particles. */
      setNumParticles(num: number): void;
      /**  Set whether should be emitting. If the state was changed, also resets the emission period timer. */
      setEmitting(enable: boolean): void;
      /**  Set whether particles should be serialized. Default true, set false to reduce scene file size. */
      setSerializeParticles(enable: boolean): void;
      /** / Set to remove either the emitter component or its owner node from the scene automatically on particle effect completion. Disabled by default. */
      setAutoRemoveMode(mode: AutoRemoveMode): void;
      /**  Reset the emission period timer. */
      resetEmissionTimer(): void;
      /**  Remove all current particles. */
      removeAllParticles(): void;
      /**  Reset the particle emitter completely. Removes current particles, sets emitting state on, and resets the emission timer. */
      reset(): void;
      /**  Apply not continuously updated values such as the material, the number of particles and sorting mode from the particle effect. Call this if you change the effect programmatically. */
      applyEffect(): void;
      /**  Return particle effect. */
      getEffect(): ParticleEffect;
      /**  Return maximum number of particles. */
      getNumParticles(): number;
      /**  Return whether is currently emitting. */
      isEmitting(): boolean;
      /**  Return whether particles are to be serialized. */
      getSerializeParticles(): boolean;
      /**  Return automatic removal mode on particle effect completion. */
      getAutoRemoveMode(): AutoRemoveMode;
      /**  Set particles attribute. */
      setParticlesAttr(value: ScriptVector): void;
      /**  Return particles attribute. Returns particle amount only if particles are not to be serialized. */
      getParticlesAttr(outVector: ScriptVector): void;
      /**  Return billboards attribute. Returns billboard amount only if particles are not to be serialized. */
      getParticleBillboardsAttr(outVector: ScriptVector): void;

   }

   export class Pass extends RefCounted {

      blendMode: BlendMode;
      cullMode: CullMode;
      depthTestMode: CompareMode;
      lightingMode: PassLightingMode;
      depthWrite: boolean;
      alphaToCoverage: boolean;
      isDesktop: boolean;
      vertexShader: string;
      pixelShader: string;
      vertexShaderDefines: string;
      pixelShaderDefines: string;
      vertexShaderDefineExcludes: string;
      pixelShaderDefineExcludes: string;
      name: string;
      index: number;
      shadersLoadedFrameNumber: number;
      effectiveVertexShaderDefines: string;
      effectivePixelShaderDefines: string;

      /**  Construct. */
      constructor(passName: string);

      /**  Set blend mode. */
      setBlendMode(mode: BlendMode): void;
      /**  Set culling mode override. By default culling mode is read from the material instead. Set the illegal culling mode MAX_CULLMODES to disable override again. */
      setCullMode(mode: CullMode): void;
      /**  Set depth compare mode. */
      setDepthTestMode(mode: CompareMode): void;
      /**  Set pass lighting mode, affects what shader variations will be attempted to be loaded. */
      setLightingMode(mode: PassLightingMode): void;
      /**  Set depth write on/off. */
      setDepthWrite(enable: boolean): void;
      /**  Set alpha-to-coverage on/off. */
      setAlphaToCoverage(enable: boolean): void;
      /**  Set whether requires desktop level hardware. */
      setIsDesktop(enable: boolean): void;
      /**  Set vertex shader name. */
      setVertexShader(name: string): void;
      /**  Set pixel shader name. */
      setPixelShader(name: string): void;
      /**  Set vertex shader defines. Separate multiple defines with spaces. */
      setVertexShaderDefines(defines: string): void;
      /**  Set pixel shader defines. Separate multiple defines with spaces. */
      setPixelShaderDefines(defines: string): void;
      /**  Set vertex shader define excludes. Use to mark defines that the shader code will not recognize, to prevent compiling redundant shader variations. */
      setVertexShaderDefineExcludes(excludes: string): void;
      /**  Set pixel shader define excludes. Use to mark defines that the shader code will not recognize, to prevent compiling redundant shader variations. */
      setPixelShaderDefineExcludes(excludes: string): void;
      /**  Reset shader pointers. */
      releaseShaders(): void;
      /**  Mark shaders loaded this frame. */
      markShadersLoaded(frameNumber: number): void;
      /**  Return pass name. */
      getName(): string;
      /**  Return pass index. This is used for optimal render-time pass queries that avoid map lookups. */
      getIndex(): number;
      /**  Return blend mode. */
      getBlendMode(): BlendMode;
      /**  Return culling mode override. If pass is not overriding culling mode (default), the illegal mode MAX_CULLMODES is returned. */
      getCullMode(): CullMode;
      /**  Return depth compare mode. */
      getDepthTestMode(): CompareMode;
      /**  Return pass lighting mode. */
      getLightingMode(): PassLightingMode;
      /**  Return last shaders loaded frame number. */
      getShadersLoadedFrameNumber(): number;
      /**  Return depth write mode. */
      getDepthWrite(): boolean;
      /**  Return alpha-to-coverage mode. */
      getAlphaToCoverage(): boolean;
      /**  Return vertex shader name. */
      getVertexShader(): string;
      /**  Return pixel shader name. */
      getPixelShader(): string;
      /**  Return vertex shader defines. */
      getVertexShaderDefines(): string;
      /**  Return pixel shader defines. */
      getPixelShaderDefines(): string;
      /**  Return vertex shader define excludes. */
      getVertexShaderDefineExcludes(): string;
      /**  Return pixel shader define excludes. */
      getPixelShaderDefineExcludes(): string;
      /**  Return the effective vertex shader defines, accounting for excludes. Called internally by Renderer. */
      getEffectiveVertexShaderDefines(): string;
      /**  Return the effective pixel shader defines, accounting for excludes. Called internally by Renderer. */
      getEffectivePixelShaderDefines(): string;

   }

   export class RenderPath extends RefCounted {

      numRenderTargets: number;
      numCommands: number;

      /**  Construct. */
      constructor();

      /**  Clone the rendering path. */
      clone(): RenderPath;
      /**  Clear existing data and load from an XML file. Return true if successful. */
      load(file: XMLFile): boolean;
      /**  Append data from an XML file. Return true if successful. */
      append(file: XMLFile): boolean;
      /**  Enable/disable commands and rendertargets by tag. */
      setEnabled(tag: string, active: boolean): void;
      /**  Toggle enabled state of commands and rendertargets by tag. */
      toggleEnabled(tag: string): void;
      /**  Remove rendertargets by tag name. */
      removeRenderTargets(tag: string): void;
      /**  Remove a command by index. */
      removeCommand(index: number): void;
      /**  Remove commands by tag name. */
      removeCommands(tag: string): void;
      /**  Return number of rendertargets. */
      getNumRenderTargets(): number;
      /**  Return number of commands. */
      getNumCommands(): number;

   }

   export class RenderSurface extends RefCounted {

      numViewports: number;
      updateMode: RenderSurfaceUpdateMode;
      linkedRenderTarget: RenderSurface;
      linkedDepthStencil: RenderSurface;
      width: number;
      height: number;
      usage: TextureUsage;
      updateQueued: boolean;
      parentTexture: Texture;
      target: number;
      renderBuffer: number;

      /**  Construct with parent texture. */
      constructor(parentTexture: Texture);

      /**  Set number of viewports. */
      setNumViewports(num: number): void;
      /**  Set viewport. */
      setViewport(index: number, viewport: Viewport): void;
      /**  Set viewport update mode. Default is to update when visible. */
      setUpdateMode(mode: RenderSurfaceUpdateMode): void;
      /**  Set linked color rendertarget. */
      setLinkedRenderTarget(renderTarget: RenderSurface): void;
      /**  Set linked depth-stencil surface. */
      setLinkedDepthStencil(depthStencil: RenderSurface): void;
      /**  Queue manual update of the viewport(s). */
      queueUpdate(): void;
      /**  Release surface. */
      release(): void;
      /**  Mark the GPU resource destroyed on graphics context destruction. Only used on OpenGL. */
      onDeviceLost(): void;
      /**  Create renderbuffer that cannot be sampled as a texture. Only used on OpenGL. */
      createRenderBuffer(width: number, height: number, format: number): boolean;
      /**  Return width. */
      getWidth(): number;
      /**  Return height. */
      getHeight(): number;
      /**  Return usage. */
      getUsage(): TextureUsage;
      /**  Return number of viewports. */
      getNumViewports(): number;
      /**  Return viewport by index. */
      getViewport(index: number): Viewport;
      /**  Return viewport update mode. */
      getUpdateMode(): RenderSurfaceUpdateMode;
      /**  Return linked color rendertarget. */
      getLinkedRenderTarget(): RenderSurface;
      /**  Return linked depth-stencil surface. */
      getLinkedDepthStencil(): RenderSurface;
      /**  Return whether manual update queued. Called internally. */
      isUpdateQueued(): boolean;
      /**  Reset update queued flag. Called internally. */
      resetUpdateQueued(): void;
      /**  Return parent texture. */
      getParentTexture(): Texture;
      /**  Return surface's OpenGL target. */
      getTarget(): number;
      /**  Return OpenGL renderbuffer if created. */
      getRenderBuffer(): number;

   }

   export class Renderer extends AObject {

      numViewports: number;
      defaultTechnique: Technique;
      hDRRendering: boolean;
      specularLighting: boolean;
      textureAnisotropy: number;
      textureFilterMode: TextureFilterMode;
      textureQuality: number;
      materialQuality: number;
      drawShadows: boolean;
      shadowMapSize: number;
      shadowQuality: ShadowQuality;
      shadowSoftness: number;
      reuseShadowMaps: boolean;
      maxShadowMaps: number;
      dynamicInstancing: boolean;
      numExtraInstancingBufferElements: number;
      minInstances: number;
      maxSortedInstances: number;
      maxOccluderTriangles: number;
      occlusionBufferSize: number;
      occluderSizeThreshold: number;
      threadedOcclusion: boolean;
      mobileShadowBiasMul: number;
      mobileShadowBiasAdd: number;
      mobileNormalOffsetMul: number;
      defaultRenderPath: RenderPath;
      vSMShadowParameters: Vector2;
      numViews: number;
      numPrimitives: number;
      numBatches: number;
      defaultZone: Zone;
      defaultMaterial: Material;
      defaultLightRamp: Texture2D;
      defaultLightSpot: Texture2D;
      faceSelectCubeMap: TextureCube;
      indirectionCubeMap: TextureCube;
      instancingBuffer: VertexBuffer;
      shadowCamera: Camera;

      /**  Construct. */
      constructor();

      /**  Set number of backbuffer viewports to render. */
      setNumViewports(num: number): void;
      /**  Set a backbuffer viewport. */
      setViewport(index: number, viewport: Viewport): void;
      /**  Set default non-textured material technique. */
      setDefaultTechnique(tech: Technique): void;
      /**  Set HDR rendering on/off. */
      setHDRRendering(enable: boolean): void;
      /**  Set specular lighting on/off. */
      setSpecularLighting(enable: boolean): void;
      /**  Set default texture max anisotropy level. */
      setTextureAnisotropy(level: number): void;
      /**  Set default texture filtering. */
      setTextureFilterMode(mode: TextureFilterMode): void;
      /**  Set texture quality level. See the QUALITY constants in GraphicsDefs.h. */
      setTextureQuality(quality: number): void;
      /**  Set material quality level. See the QUALITY constants in GraphicsDefs.h. */
      setMaterialQuality(quality: number): void;
      /**  Set shadows on/off. */
      setDrawShadows(enable: boolean): void;
      /**  Set shadow map resolution. */
      setShadowMapSize(size: number): void;
      /**  Set shadow quality mode. See the SHADOWQUALITY enum in GraphicsDefs.h. */
      setShadowQuality(quality: ShadowQuality): void;
      /**  Set shadow softness, only works when SHADOWQUALITY_BLUR_VSM is used. */
      setShadowSoftness(shadowSoftness: number): void;
      /**  Set shadow parameters when VSM is used, they help to reduce light bleeding. LightBleeding must be in [0, 1[ */
      setVSMShadowParameters(minVariance: number, lightBleedingReduction: number): void;
      /**  Set reuse of shadow maps. Default is true. If disabled, also transparent geometry can be shadowed. */
      setReuseShadowMaps(enable: boolean): void;
      /**  Set maximum number of shadow maps created for one resolution. Only has effect if reuse of shadow maps is disabled. */
      setMaxShadowMaps(shadowMaps: number): void;
      /**  Set dynamic instancing on/off. When on (default), drawables using the same static-type geometry and material will be automatically combined to an instanced draw call. */
      setDynamicInstancing(enable: boolean): void;
      /**  Set number of extra instancing buffer elements. Default is 0. Extra 4-vectors are available through TEXCOORD7 and further. */
      setNumExtraInstancingBufferElements(elements: number): void;
      /**  Set minimum number of instances required in a batch group to render as instanced. */
      setMinInstances(instances: number): void;
      /**  Set maximum number of sorted instances per batch group. If exceeded, instances are rendered unsorted. */
      setMaxSortedInstances(instances: number): void;
      /**  Set maximum number of occluder triangles. */
      setMaxOccluderTriangles(triangles: number): void;
      /**  Set occluder buffer width. */
      setOcclusionBufferSize(size: number): void;
      /**  Set required screen size (1.0 = full screen) for occluders. */
      setOccluderSizeThreshold(screenSize: number): void;
      /**  Set whether to thread occluder rendering. Default false. */
      setThreadedOcclusion(enable: boolean): void;
      /**  Set shadow depth bias multiplier for mobile platforms to counteract possible worse shadow map precision. Default 1.0 (no effect.) */
      setMobileShadowBiasMul(mul: number): void;
      /**  Set shadow depth bias addition for mobile platforms to counteract possible worse shadow map precision. Default 0.0 (no effect.) */
      setMobileShadowBiasAdd(add: number): void;
      /**  Set shadow normal offset multiplier for mobile platforms to counteract possible worse shadow map precision. Default 1.0 (no effect.) */
      setMobileNormalOffsetMul(mul: number): void;
      /**  Force reload of shaders. */
      reloadShaders(): void;
      /**  Apply post processing filter to the shadow map. Called by View. */
      applyShadowMapFilter(view: View, shadowMap: Texture2D, blurScale: number): void;
      /**  Return number of backbuffer viewports. */
      getNumViewports(): number;
      /**  Return backbuffer viewport by index. */
      getViewport(index: number): Viewport;
      /**  Return default renderpath. */
      getDefaultRenderPath(): RenderPath;
      /**  Return default non-textured material technique. */
      getDefaultTechnique(): Technique;
      /**  Return whether HDR rendering is enabled. */
      getHDRRendering(): boolean;
      /**  Return whether specular lighting is enabled. */
      getSpecularLighting(): boolean;
      /**  Return whether drawing shadows is enabled. */
      getDrawShadows(): boolean;
      /**  Return default texture max. anisotropy level. */
      getTextureAnisotropy(): number;
      /**  Return default texture filtering mode. */
      getTextureFilterMode(): TextureFilterMode;
      /**  Return texture quality level. */
      getTextureQuality(): number;
      /**  Return material quality level. */
      getMaterialQuality(): number;
      /**  Return shadow map resolution. */
      getShadowMapSize(): number;
      /**  Return shadow quality. */
      getShadowQuality(): ShadowQuality;
      /**  Return shadow softness. */
      getShadowSoftness(): number;
      /**  Return VSM shadow parameters */
      getVSMShadowParameters(): Vector2;
      /**  Return whether shadow maps are reused. */
      getReuseShadowMaps(): boolean;
      /**  Return maximum number of shadow maps per resolution. */
      getMaxShadowMaps(): number;
      /**  Return whether dynamic instancing is in use. */
      getDynamicInstancing(): boolean;
      /**  Return number of extra instancing buffer elements. */
      getNumExtraInstancingBufferElements(): number;
      /**  Return minimum number of instances required in a batch group to render as instanced. */
      getMinInstances(): number;
      /**  Return maximum number of sorted instances per batch group. */
      getMaxSortedInstances(): number;
      /**  Return maximum number of occluder triangles. */
      getMaxOccluderTriangles(): number;
      /**  Return occlusion buffer width. */
      getOcclusionBufferSize(): number;
      /**  Return occluder screen size threshold. */
      getOccluderSizeThreshold(): number;
      /**  Return whether occlusion rendering is threaded. */
      getThreadedOcclusion(): boolean;
      /**  Return shadow depth bias multiplier for mobile platforms. */
      getMobileShadowBiasMul(): number;
      /**  Return shadow depth bias addition for mobile platforms. */
      getMobileShadowBiasAdd(): number;
      /**  Return shadow normal offset multiplier for mobile platforms. */
      getMobileNormalOffsetMul(): number;
      /**  Return number of views rendered. */
      getNumViews(): number;
      /**  Return number of primitives rendered. */
      getNumPrimitives(): number;
      /**  Return number of batches rendered. */
      getNumBatches(): number;
      /**  Return number of geometries rendered. */
      getNumGeometries(allViews?: boolean): number;
      /**  Return number of lights rendered. */
      getNumLights(allViews?: boolean): number;
      /**  Return number of shadow maps rendered. */
      getNumShadowMaps(allViews?: boolean): number;
      /**  Return number of occluders rendered. */
      getNumOccluders(allViews?: boolean): number;
      /**  Return the default zone. */
      getDefaultZone(): Zone;
      /**  Return the default material. */
      getDefaultMaterial(): Material;
      /**  Return the default range attenuation texture. */
      getDefaultLightRamp(): Texture2D;
      /**  Return the default spotlight attenuation texture. */
      getDefaultLightSpot(): Texture2D;
      /**  Return the shadowed pointlight face selection cube map. */
      getFaceSelectCubeMap(): TextureCube;
      /**  Return the shadowed pointlight indirection cube map. */
      getIndirectionCubeMap(): TextureCube;
      /**  Return the instancing vertex buffer */
      getInstancingBuffer(): VertexBuffer;
      /**  Update for rendering. Called by HandleRenderUpdate(). */
      update(timeStep: number): void;
      /**  Render. Called by Engine. */
      render(): void;
      /**  Add debug geometry to the debug renderer. */
      drawDebugGeometry(depthTest: boolean): void;
      /**  Queue a render surface's viewports for rendering. Called by the surface, or by View. */
      queueRenderSurface(renderTarget: RenderSurface): void;
      /**  Queue a viewport for rendering. Null surface means backbuffer. */
      queueViewport(renderTarget: RenderSurface, viewport: Viewport): void;
      /**  Allocate a shadow map. If shadow map reuse is disabled, a different map is returned each time. */
      getShadowMap(light: Light, camera: Camera, viewWidth: number, viewHeight: number): Texture2D;
      /**  Allocate a rendertarget or depth-stencil texture for deferred rendering or postprocessing. Should only be called during actual rendering, not before. */
      getScreenBuffer(width: number, height: number, format: number, cubemap: boolean, filtered: boolean, srgb: boolean, persistentKey?: number): Texture;
      /**  Allocate a depth-stencil surface that does not need to be readable. Should only be called during actual rendering, not before. */
      getDepthStencil(width: number, height: number): RenderSurface;
      /**  Allocate a temporary shadow camera and a scene node for it. Is thread-safe. */
      getShadowCamera(): Camera;
      /**  Mark a view as prepared by the specified culling camera. */
      storePreparedView(view: View, cullCamera: Camera): void;
      /**  Return a prepared view if exists for the specified camera. Used to avoid duplicate view preparation CPU work. */
      getPreparedView(cullCamera: Camera): View;
      /**  Set cull mode while taking possible projection flipping into account. */
      setCullMode(mode: CullMode, camera: Camera): void;
      /**  Ensure sufficient size of the instancing vertex buffer. Return true if successful. */
      resizeInstancingBuffer(numInstances: number): boolean;
      /**  Save the screen buffer allocation status. Called by View. */
      saveScreenBufferAllocations(): void;
      /**  Restore the screen buffer allocation status. Called by View. */
      restoreScreenBufferAllocations(): void;
      /**  Optimize a light by scissor rectangle. */
      optimizeLightByScissor(light: Light, camera: Camera): void;
      /**  Optimize a light by marking it to the stencil buffer and setting a stencil test. */
      optimizeLightByStencil(light: Light, camera: Camera): void;
      /**  Return a scissor rectangle for a light. */
      getLightScissor(light: Light, camera: Camera): Rect;
      /**  Return a view or its source view if it uses one. Used internally for render statistics. */
      static getActualView(view: View): View;
      /**  Reload textures. */
      reloadTextures(): void;

   }

   export class RibbonTrail extends Drawable {

      updateGeometryType: UpdateGeometryType;
      material: Material;
      vertexDistance: number;
      width: number;
      startColor: Color;
      endColor: Color;
      startScale: number;
      endScale: number;
      trailType: TrailType;
      sorted: boolean;
      lifetime: number;
      emitting: boolean;
      updateInvisible: boolean;
      tailColumn: number;
      animationLodBias: number;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Return whether a geometry update is necessary, and if it can happen in a worker thread. */
      getUpdateGeometryType(): UpdateGeometryType;
      /**  Set material. */
      setMaterial(material: Material): void;
      /**  Set distance between points. */
      setVertexDistance(length: number): void;
      /**  Set width of the tail. Only works for face camera trail type. */
      setWidth(width: number): void;
      /**  Set vertex blended color for start of trail. */
      setStartColor(color: Color): void;
      /**  Set vertex blended scale for end of trail. */
      setEndColor(color: Color): void;
      /**  Set vertex blended color for start of trail. */
      setStartScale(startScale: number): void;
      /**  Set vertex blended scale for end of trail. */
      setEndScale(endScale: number): void;
      /**  Set how the trail behave. */
      setTrailType(type: TrailType): void;
      /**  Set whether tails are sorted by distance. Default false. */
      setSorted(enable: boolean): void;
      /**  Set tail time to live. */
      setLifetime(time: number): void;
      /**  Set whether trail should be emitting. */
      setEmitting(emitting: boolean): void;
      /**  Set whether to update when trail emiiter are not visible. */
      setUpdateInvisible(enable: boolean): void;
      /**  Set number of column for every tails. Can be useful for fixing distortion at high angle. */
      setTailColumn(tailColumn: number): void;
      /**  Set animation LOD bias. */
      setAnimationLodBias(bias: number): void;
      /**  Mark for bounding box and vertex buffer update. Call after modifying the trails. */
      commit(): void;
      /**  Return material. */
      getMaterial(): Material;
      /**  Get distance between points. */
      getVertexDistance(): number;
      /**  Get width of the trail. */
      getWidth(): number;
      /**  Get vertex blended color for start of trail. */
      getStartColor(): Color;
      /**  Get vertex blended color for end of trail. */
      getEndColor(): Color;
      /**  Get vertex blended scale for start of trail. */
      getStartScale(): number;
      /**  Get vertex blended scale for end of trail. */
      getEndScale(): number;
      /**  Return whether tails are sorted. */
      isSorted(): boolean;
      /**  Return tail time to live. */
      getLifetime(): number;
      /**  Return animation LOD bias. */
      getAnimationLodBias(): number;
      /**  Return how the trail behave. */
      getTrailType(): TrailType;
      /**  Get number of column for tails. */
      getTailColumn(): number;
      /**  Return whether is currently emitting. */
      isEmitting(): boolean;
      /**  Return whether to update when trail emitter are not visible. */
      getUpdateInvisible(): boolean;

   }

   export class Shader extends Resource {

      timeStamp: number;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Return a variation with defines. Separate multiple defines with spaces. */
      getVariation(type: ShaderType, defines: string): ShaderVariation;
      /**  Return either vertex or pixel shader source code. */
      getSourceCode(type: ShaderType): string;
      /**  Return the latest timestamp of the shader code and its includes. */
      getTimeStamp(): number;

   }

   export class ShaderPrecache extends AObject {

      /**  Construct and begin collecting shader combinations. Load existing combinations from XML if the file exists. */
      constructor(fileName: string);

      /**  Collect a shader combination. Called by Graphics when shaders have been set. */
      storeShaders(vs: ShaderVariation, ps: ShaderVariation): void;

   }

   export class ShaderVariation extends RefCounted {

      name: string;
      defines: string;
      owner: Shader;
      shaderType: ShaderType;
      fullName: string;
      elementHash: number;
      compilerOutput: string;
      definesClipPlane: string;

      /**  Construct. */
      constructor(owner: Shader, type: ShaderType);

      /**  Mark the GPU resource destroyed on graphics context destruction. */
      onDeviceLost(): void;
      /**  Release the shader. */
      release(): void;
      /**  Compile the shader. Return true if successful. */
      create(): boolean;
      /**  Set name. */
      setName(name: string): void;
      /**  Set defines. */
      setDefines(defines: string): void;
      /**  Return the owner resource. */
      getOwner(): Shader;
      /**  Return shader type. */
      getShaderType(): ShaderType;
      /**  Return shader name. */
      getName(): string;
      /**  Return full shader name. */
      getFullName(): string;
      /**  Return whether uses a parameter. Not applicable on OpenGL, where this information is contained in ShaderProgram instead. */
      hasParameter(param: string): boolean;
      /**  Return whether uses a texture unit (only for pixel shaders.) Not applicable on OpenGL, where this information is contained in ShaderProgram instead. */
      hasTextureUnit(unit: TextureUnit): boolean;
      /**  Return vertex element hash. */
      getElementHash(): number;
      /**  Return defines. */
      getDefines(): string;
      /**  Return compile error/warning string. */
      getCompilerOutput(): string;
      /**  Return defines with the CLIPPLANE define appended. Used internally on Direct3D11 only, will be empty on other APIs. */
      getDefinesClipPlane(): string;

   }

   export class Skybox extends StaticModel {

      /**  Construct. */
      constructor();


   }

   export class StaticModel extends Drawable {

      numOccluderTriangles: number;
      model: Model;
      material: Material;
      occlusionLodLevel: number;
      numGeometries: number;
      geometryHidden: boolean;
      geometryEnabledAttr: ScriptVector;

      /**  Construct. */
      constructor();

      /**  Return number of occlusion geometry triangles. */
      getNumOccluderTriangles(): number;
      /**  Set model. */
      setModel(model: Model): void;
      /**  Set material on all geometries. */
      setMaterial(material: Material): void;
      /**  Set occlusion LOD level. By default (M_MAX_UNSIGNED) same as visible. */
      setOcclusionLodLevel(level: number): void;
      /**  Apply default materials from a material list file. If filename is empty (default), the model's resource name with extension .txt will be used. */
      applyMaterialList(fileName?: string): void;
      /**  Return model. */
      getModel(): Model;
      /**  Return number of geometries. */
      getNumGeometries(): number;
      /**  Return material by geometry index. */
      getMaterial(index?: number): Material;
      /**  Return occlusion LOD level. */
      getOcclusionLodLevel(): number;
      /**  Determines if the given world space point is within the model geometry. */
      isInside(point: Vector3): boolean;
      /**  Determines if the given local space point is within the model geometry. */
      isInsideLocal(point: Vector3): boolean;
      /**  Get whether a named submesh is visible */
      getGeometryVisible(name: string): boolean;
      /**  Show a named submesh */
      showGeometry(name: string): void;
      /**  Hide a named submesh */
      hideGeometry(name: string): void;
      /**  Returns true if any geometry is hidden in the model */
      getGeometryHidden(): boolean;
      setGeometryEnabledAttr(value: ScriptVector): void;
      getGeometryEnabledAttr(outVector: ScriptVector): void;
      setMaterialIndex(index:number, material:Material);

   }

   export class StaticModelGroup extends StaticModel {

      numOccluderTriangles: number;
      numInstanceNodes: number;
      nodeIDsAttr: ScriptVector;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Return number of occlusion geometry triangles. */
      getNumOccluderTriangles(): number;
      /**  Add an instance scene node. It does not need any drawable components of its own. */
      addInstanceNode(node: Node): void;
      /**  Remove an instance scene node. */
      removeInstanceNode(node: Node): void;
      /**  Remove all instance scene nodes. */
      removeAllInstanceNodes(): void;
      /**  Return number of instance nodes. */
      getNumInstanceNodes(): number;
      /**  Return instance node by index. */
      getInstanceNode(index: number): Node;
      /**  Set node IDs attribute. */
      setNodeIDsAttr(value: ScriptVector): void;
      /**  Return node IDs attribute. */
      getNodeIDsAttr(outVector: ScriptVector): void;

   }

   export class Technique extends Resource {

      isDesktop: boolean;
      supported: boolean;
      numPasses: number;

      /**  Construct. */
      constructor();

      /**  Set whether requires desktop level hardware. */
      setIsDesktop(enable: boolean): void;
      /**  Create a new pass. */
      createPass(passName: string): Pass;
      /**  Remove a pass. */
      removePass(passName: string): void;
      /**  Reset shader pointers in all passes. */
      releaseShaders(): void;
      /**  Clone the technique. Passes will be deep copied to allow independent modification. */
      clone(cloneName?: string): Technique;
      /**  Return whether technique is supported by the current hardware. */
      isSupported(): boolean;
      /**  Return number of passes. */
      getNumPasses(): number;
      /**  Return a clone with added shader compilation defines. Called internally by Material. */
      cloneWithDefines(vsDefines: string, psDefines: string): Technique;
      /**  Return a pass type index by name. Allocate new if not used yet. */
      static getPassIndex(passName: string): number;

   }

   export class Terrain extends Component {

      patchSize: number;
      spacing: Vector3;
      maxLodLevels: number;
      occlusionLodLevel: number;
      smoothing: boolean;
      material: Material;
      northNeighbor: Terrain;
      southNeighbor: Terrain;
      westNeighbor: Terrain;
      eastNeighbor: Terrain;
      drawDistance: number;
      shadowDistance: number;
      lodBias: number;
      viewMask: number;
      lightMask: number;
      shadowMask: number;
      zoneMask: number;
      maxLights: number;
      castShadows: boolean;
      occluder: boolean;
      occludee: boolean;
      numVertices: IntVector2;
      numPatches: IntVector2;
      heightMap: Image;
      visible: boolean;
      patchSizeAttr: number;
      maxLodLevelsAttr: number;
      occlusionLodLevelAttr: number;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Set patch quads per side. Must be a power of two. */
      setPatchSize(size: number): void;
      /**  Set vertex (XZ) and height (Y) spacing. */
      setSpacing(spacing: Vector3): void;
      /**  Set maximum number of LOD levels for terrain patches. This can be between 1-4. */
      setMaxLodLevels(levels: number): void;
      /**  Set LOD level used for terrain patch occlusion. By default (M_MAX_UNSIGNED) the coarsest. Since the LOD level used needs to be fixed, using finer LOD levels may result in false positive occlusion in cases where the actual rendered geometry is coarser, so use with caution. */
      setOcclusionLodLevel(level: number): void;
      /**  Set smoothing of heightmap. */
      setSmoothing(enable: boolean): void;
      /**  Set heightmap image. Dimensions should be a power of two + 1. Uses 8-bit grayscale, or optionally red as MSB and green as LSB for 16-bit accuracy. Return true if successful. */
      setHeightMap(image: Image): boolean;
      /**  Set material. */
      setMaterial(material: Material): void;
      /**  Set north (positive Z) neighbor terrain for seamless LOD changes across terrains. */
      setNorthNeighbor(north: Terrain): void;
      /**  Set south (negative Z) neighbor terrain for seamless LOD changes across terrains. */
      setSouthNeighbor(south: Terrain): void;
      /**  Set west (negative X) neighbor terrain for seamless LOD changes across terrains. */
      setWestNeighbor(west: Terrain): void;
      /**  Set east (positive X) neighbor terrain for seamless LOD changes across terrains. */
      setEastNeighbor(east: Terrain): void;
      /**  Set all neighbor terrains at once. */
      setNeighbors(north: Terrain, south: Terrain, west: Terrain, east: Terrain): void;
      /**  Set draw distance for patches. */
      setDrawDistance(distance: number): void;
      /**  Set shadow draw distance for patches. */
      setShadowDistance(distance: number): void;
      /**  Set LOD bias for patches. Affects which terrain LOD to display. */
      setLodBias(bias: number): void;
      /**  Set view mask for patches. Is and'ed with camera's view mask to see if the object should be rendered. */
      setViewMask(mask: number): void;
      /**  Set light mask for patches. Is and'ed with light's and zone's light mask to see if the object should be lit. */
      setLightMask(mask: number): void;
      /**  Set shadow mask for patches. Is and'ed with light's light mask and zone's shadow mask to see if the object should be rendered to a shadow map. */
      setShadowMask(mask: number): void;
      /**  Set zone mask for patches. Is and'ed with zone's zone mask to see if the object should belong to the zone. */
      setZoneMask(mask: number): void;
      /**  Set maximum number of per-pixel lights for patches. Default 0 is unlimited. */
      setMaxLights(num: number): void;
      /**  Set shadowcaster flag for patches. */
      setCastShadows(enable: boolean): void;
      /**  Set occlusion flag for patches. Occlusion uses the coarsest LOD by default. */
      setOccluder(enable: boolean): void;
      /**  Set occludee flag for patches. */
      setOccludee(enable: boolean): void;
      /**  Apply changes from the heightmap image. */
      applyHeightMap(): void;
      /**  Return patch quads per side. */
      getPatchSize(): number;
      /**  Return vertex and height spacing. */
      getSpacing(): Vector3;
      /**  Return heightmap size in vertices. */
      getNumVertices(): IntVector2;
      /**  Return heightmap size in patches. */
      getNumPatches(): IntVector2;
      /**  Return maximum number of LOD levels for terrain patches. This can be between 1-4. */
      getMaxLodLevels(): number;
      /**  Return LOD level used for occlusion. */
      getOcclusionLodLevel(): number;
      /**  Return whether smoothing is in use. */
      getSmoothing(): boolean;
      /**  Return heightmap image. */
      getHeightMap(): Image;
      /**  Return material. */
      getMaterial(): Material;
      /**  Return patch by patch coordinates including neighbor terrains. */
      getNeighborPatch(x: number, z: number): TerrainPatch;
      /**  Return height at world coordinates. */
      getHeight(worldPosition: Vector3): number;
      /**  Return normal at world coordinates. */
      getNormal(worldPosition: Vector3): Vector3;
      /**  Convert world position to heightmap pixel position. Note that the internal height data representation is reversed vertically, but in the heightmap image north is at the top. */
      worldToHeightMap(worldPosition: Vector3): IntVector2;
      /**  Return north neighbor terrain. */
      getNorthNeighbor(): Terrain;
      /**  Return south neighbor terrain. */
      getSouthNeighbor(): Terrain;
      /**  Return west neighbor terrain. */
      getWestNeighbor(): Terrain;
      /**  Return east neighbor terrain. */
      getEastNeighbor(): Terrain;
      /**  Return draw distance. */
      getDrawDistance(): number;
      /**  Return shadow draw distance. */
      getShadowDistance(): number;
      /**  Return LOD bias. */
      getLodBias(): number;
      /**  Return view mask. */
      getViewMask(): number;
      /**  Return light mask. */
      getLightMask(): number;
      /**  Return shadow mask. */
      getShadowMask(): number;
      /**  Return zone mask. */
      getZoneMask(): number;
      /**  Return maximum number of per-pixel lights. */
      getMaxLights(): number;
      /**  Return visible flag. */
      isVisible(): boolean;
      /**  Return shadowcaster flag. */
      getCastShadows(): boolean;
      /**  Return occluder flag. */
      isOccluder(): boolean;
      /**  Return occludee flag. */
      isOccludee(): boolean;
      /**  Regenerate patch geometry. */
      createPatchGeometry(patch: TerrainPatch): void;
      /**  Update patch based on LOD and neighbor LOD. */
      updatePatchLod(patch: TerrainPatch): void;
      /**  Set patch size attribute. */
      setPatchSizeAttr(value: number): void;
      /**  Set max LOD levels attribute. */
      setMaxLodLevelsAttr(value: number): void;
      /**  Set occlusion LOD level attribute. */
      setOcclusionLodLevelAttr(value: number): void;

   }

   export class TerrainPatch extends Drawable {

      updateGeometryType: UpdateGeometryType;
      numOccluderTriangles: number;
      owner: Terrain;
      material: Material;
      boundingBox: BoundingBox;
      coordinates: IntVector2;
      vertexBuffer: VertexBuffer;
      northPatch: TerrainPatch;
      southPatch: TerrainPatch;
      westPatch: TerrainPatch;
      eastPatch: TerrainPatch;
      lodLevel: number;

      /**  Construct. */
      constructor();

      /**  Return whether a geometry update is necessary, and if it can happen in a worker thread. */
      getUpdateGeometryType(): UpdateGeometryType;
      /**  Return number of occlusion geometry triangles. */
      getNumOccluderTriangles(): number;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set owner terrain. */
      setOwner(terrain: Terrain): void;
      /**  Set neighbor patches. */
      setNeighbors(north: TerrainPatch, south: TerrainPatch, west: TerrainPatch, east: TerrainPatch): void;
      /**  Set material. */
      setMaterial(material: Material): void;
      /**  Set local-space bounding box. */
      setBoundingBox(box: BoundingBox): void;
      /**  Set patch coordinates. */
      setCoordinates(coordinates: IntVector2): void;
      /**  Reset to LOD level 0. */
      resetLod(): void;
      /**  Return vertex buffer. */
      getVertexBuffer(): VertexBuffer;
      /**  Return owner terrain. */
      getOwner(): Terrain;
      /**  Return north neighbor patch. */
      getNorthPatch(): TerrainPatch;
      /**  Return south neighbor patch. */
      getSouthPatch(): TerrainPatch;
      /**  Return west neighbor patch. */
      getWestPatch(): TerrainPatch;
      /**  Return east neighbor patch. */
      getEastPatch(): TerrainPatch;
      /**  Return patch coordinates. */
      getCoordinates(): IntVector2;
      /**  Return current LOD level. */
      getLodLevel(): number;

   }

   export class Texture extends Resource {

      numLevels: number;
      filterMode: TextureFilterMode;
      anisotropy: number;
      shadowCompare: boolean;
      borderColor: Color;
      srgb: boolean;
      backupTexture: Texture;
      format: number;
      compressed: boolean;
      levels: number;
      width: number;
      height: number;
      depth: number;
      usage: TextureUsage;
      components: number;
      parametersDirty: boolean;
      parameters: XMLFile;
      target: number;

      /**  Construct. */
      constructor();

      /**  Set number of requested mip levels. Needs to be called before setting size. */
      setNumLevels(levels: number): void;
      /**  Set filtering mode. */
      setFilterMode(filter: TextureFilterMode): void;
      /**  Set addressing mode by texture coordinate. */
      setAddressMode(coord: TextureCoordinate, address: TextureAddressMode): void;
      /**  Set texture max. anisotropy level. No effect if not using anisotropic filtering. Value 0 (default) uses the default setting from Renderer. */
      setAnisotropy(level: number): void;
      /**  Set shadow compare mode. Not used on Direct3D9. */
      setShadowCompare(enable: boolean): void;
      /**  Set border color for border addressing mode. */
      setBorderColor(color: Color): void;
      /**  Set sRGB sampling and writing mode. */
      setSRGB(enable: boolean): void;
      /**  Set backup texture to use when rendering to this texture. */
      setBackupTexture(texture: Texture): void;
      /**  Set mip levels to skip on a quality setting when loading. Ensures higher quality levels do not skip more. */
      setMipsToSkip(quality: number, toSkip: number): void;
      /**  Return API-specific texture format. */
      getFormat(): number;
      /**  Return whether the texture format is compressed. */
      isCompressed(): boolean;
      /**  Return number of mip levels. */
      getLevels(): number;
      /**  Return width. */
      getWidth(): number;
      /**  Return height. */
      getHeight(): number;
      /**  Return height. */
      getDepth(): number;
      /**  Return filtering mode. */
      getFilterMode(): TextureFilterMode;
      /**  Return addressing mode by texture coordinate. */
      getAddressMode(coord: TextureCoordinate): TextureAddressMode;
      /**  Return texture max. anisotropy level. Value 0 means to use the default value from Renderer. */
      getAnisotropy(): number;
      /**  Return whether shadow compare is enabled. Not used on Direct3D9. */
      getShadowCompare(): boolean;
      /**  Return border color. */
      getBorderColor(): Color;
      /**  Return whether is using sRGB sampling and writing. */
      getSRGB(): boolean;
      /**  Return backup texture. */
      getBackupTexture(): Texture;
      /**  Return mip levels to skip on a quality setting when loading. */
      getMipsToSkip(quality: number): number;
      /**  Return mip level width, or 0 if level does not exist. */
      getLevelWidth(level: number): number;
      /**  Return mip level width, or 0 if level does not exist. */
      getLevelHeight(level: number): number;
      /**  Return mip level depth, or 0 if level does not exist. */
      getLevelDepth(level: number): number;
      /**  Return texture usage type. */
      getUsage(): TextureUsage;
      /**  Return data size in bytes for a pixel or block row. */
      getRowDataSize(width: number): number;
      /**  Return number of image components required to receive pixel data from GetData(), or 0 for compressed images. */
      getComponents(): number;
      /**  Return whether the parameters are dirty. */
      getParametersDirty(): boolean;
      /**  Set additional parameters from an XML file. */
      setParameters(xml: XMLFile): void;
      /**  Mark parameters dirty. Called by Graphics. */
      setParametersDirty(): void;
      /**  Update dirty parameters to the texture object. Called by Graphics when assigning the texture. */
      updateParameters(): void;
      /**  Return texture's target. Only used on OpenGL. */
      getTarget(): number;
      /**  Convert format to sRGB. Not used on Direct3D9. */
      getSRGBFormat(format: number): number;
      /**  Return the shader resource view format corresponding to a texture format. Handles conversion of typeless depth texture formats. Only used on Direct3D11. */
      static getSRVFormat(format: number): number;
      /**  Return the depth-stencil view format corresponding to a texture format. Handles conversion of typeless depth texture formats. Only used on Direct3D11. */
      static getDSVFormat(format: number): number;
      /**  Return the non-internal texture format corresponding to an OpenGL internal format. */
      static getExternalFormat(format: number): number;
      /**  Return the data type corresponding to an OpenGL internal format. */
      static getDataType(format: number): number;

   }

   export class Texture2D extends Texture {

      renderSurface: RenderSurface;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Mark the GPU resource destroyed on context destruction. */
      onDeviceLost(): void;
      /**  Recreate the GPU resource and restore data if applicable. */
      onDeviceReset(): void;
      /**  Release the texture. */
      release(): void;
      /**  Set size, format and usage. Zero size will follow application window size. Return true if successful. */
      setSize(width: number, height: number, format: number, usage?: TextureUsage): boolean;
      /**  Set data from an image. Return true if successful. Optionally make a single channel image alpha-only. */
      setData(image: Image, useAlpha?: boolean): boolean;
      /**  Return render surface. */
      getRenderSurface(): RenderSurface;

   }

   export class Texture3D extends Texture {

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Mark the GPU resource destroyed on context destruction. */
      onDeviceLost(): void;
      /**  Recreate the GPU resource and restore data if applicable. */
      onDeviceReset(): void;
      /**  Release the texture. */
      release(): void;
      /**  Set size, format and usage. Zero size will follow application window size. Return true if successful. */
      setSize(width: number, height: number, depth: number, format: number, usage?: TextureUsage): boolean;
      /**  Set data from an image. Return true if successful. Optionally make a single channel image alpha-only. */
      setData(image: Image, useAlpha?: boolean): boolean;

   }

   export class TextureCube extends Texture {

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Mark the GPU resource destroyed on context destruction. */
      onDeviceLost(): void;
      /**  Recreate the GPU resource and restore data if applicable. */
      onDeviceReset(): void;
      /**  Release the texture. */
      release(): void;
      /**  Set size, format and usage. Return true if successful. */
      setSize(size: number, format: number, usage?: TextureUsage): boolean;
      /**  Return render surface for one face. */
      getRenderSurface(face: CubeMapFace): RenderSurface;

   }

   export class VertexBuffer extends AObject {

      shadowed: boolean;
      dynamic: boolean;
      locked: boolean;
      vertexCount: number;
      elementMask: number;

      /**  Construct. Optionally force headless (no GPU-side buffer) operation. */
      constructor(forceHeadless?: boolean);

      /**  Mark the buffer destroyed on graphics context destruction. May be a no-op depending on the API. */
      onDeviceLost(): void;
      /**  Recreate the buffer and restore data if applicable. May be a no-op depending on the API. */
      onDeviceReset(): void;
      /**  Release buffer. */
      release(): void;
      /**  Enable shadowing in CPU memory. Shadowing is forced on if the graphics subsystem does not exist. */
      setShadowed(enable: boolean): void;
      /**  Set size and vertex elements and dynamic mode using legacy element bitmask. Previous data will be lost. */
      setSize(vertexCount: number, elementMask: number, dynamic?: boolean): boolean;
      /**  Unlock the buffer and apply changes to the GPU buffer. */
      unlock(): void;
      /**  Return whether CPU memory shadowing is enabled. */
      isShadowed(): boolean;
      /**  Return whether is dynamic. */
      isDynamic(): boolean;
      /**  Return whether is currently locked. */
      isLocked(): boolean;
      /**  Return number of vertices. */
      getVertexCount(): number;
      /**  Return legacy vertex element mask. Note that both semantic and type must match the legacy element for a mask bit to be set. */
      getElementMask(): number;
      /**  Return buffer hash for building vertex declarations. Used internally. */
      getBufferHash(streamIndex: number): number;

   }

   export class View extends AObject {

      graphics: Graphics;
      renderer: Renderer;
      scene: Scene;
      octree: Octree;
      camera: Camera;
      cullCamera: Camera;
      renderTarget: RenderSurface;
      drawDebug: boolean;
      viewRect: IntRect;
      viewSize: IntVector2;
      numActiveOccluders: number;
      sourceView: View;
      cameraShaderParameters: Camera;

      /**  Construct. */
      constructor();

      /**  Define with rendertarget and viewport. Return true if successful. */
      define(renderTarget: RenderSurface, viewport: Viewport): boolean;
      /**  Render batches. */
      render(): void;
      /**  Return graphics subsystem. */
      getGraphics(): Graphics;
      /**  Return renderer subsystem. */
      getRenderer(): Renderer;
      /**  Return scene. */
      getScene(): Scene;
      /**  Return octree. */
      getOctree(): Octree;
      /**  Return viewport camera. */
      getCamera(): Camera;
      /**  Return culling camera. Normally same as the viewport camera. */
      getCullCamera(): Camera;
      /**  Return the rendertarget. 0 if using the backbuffer. */
      getRenderTarget(): RenderSurface;
      /**  Return whether should draw debug geometry. */
      getDrawDebug(): boolean;
      /**  Return view rectangle. */
      getViewRect(): IntRect;
      /**  Return view dimensions. */
      getViewSize(): IntVector2;
      /**  Return number of occluders that were actually rendered. Occluders may be rejected if running out of triangles or if behind other occluders. */
      getNumActiveOccluders(): number;
      /**  Return the source view that was already prepared. Used when viewports specify the same culling camera. */
      getSourceView(): View;
      /**  Set global (per-frame) shader parameters. Called by Batch and internally by View. */
      setGlobalShaderParameters(): void;
      /**  Set camera-specific shader parameters. Called by Batch and internally by View. */
      setCameraShaderParameters(camera: Camera): void;
      /**  Set G-buffer offset and inverse size shader parameters. Called by Batch and internally by View. */
      setGBufferShaderParameters(texSize: IntVector2, viewRect: IntRect): void;
      /**  Draw a fullscreen quad. Shaders and renderstates must have been set beforehand. Quad will be drawn to the middle of depth range, similarly to deferred directional lights. */
      drawFullscreenQuad(setIdentityProjection?: boolean): void;
      /**  Get a named texture from the rendertarget list or from the resource cache, to be either used as a rendertarget or texture binding. */
      findNamedTexture(name: string, isRenderTarget: boolean, isVolumeMap?: boolean): Texture;

   }

   export class Viewport extends AObject {

      scene: Scene;
      camera: Camera;
      rect: IntRect;
      renderPath: RenderPath;
      drawDebug: boolean;
      cullCamera: Camera;
      view: View;

      /**  Construct with a full rectangle. */
      constructor(scene: Scene, camera: Camera, renderPath?: RenderPath);

      /**  Set scene. */
      setScene(scene: Scene): void;
      /**  Set viewport camera. */
      setCamera(camera: Camera): void;
      /**  Set view rectangle. A zero rectangle (0 0 0 0) means to use the rendertarget's full dimensions. */
      setRect(rect: IntRect): void;
      /**  Set rendering path from an XML file. */
      setRenderPath(file: XMLFile): void;
      /**  Set whether to render debug geometry. Default true. */
      setDrawDebug(enable: boolean): void;
      /**  Set separate camera to use for culling. Sharing a culling camera between several viewports allows to prepare the view only once, saving in CPU use. The culling camera's frustum should cover all the viewport cameras' frusta or else objects may be missing from the rendered view. */
      setCullCamera(camera: Camera): void;
      /**  Return scene. */
      getScene(): Scene;
      /**  Return viewport camera. */
      getCamera(): Camera;
      /**  Return the internal rendering structure. May be null if the viewport has not been rendered yet. */
      getView(): View;
      /**  Return view rectangle. A zero rectangle (0 0 0 0) means to use the rendertarget's full dimensions. In this case you could fetch the actual view rectangle from View object, though it will be valid only after the first frame. */
      getRect(): IntRect;
      /**  Return rendering path. */
      getRenderPath(): RenderPath;
      /**  Return whether to draw debug geometry. */
      getDrawDebug(): boolean;
      /**  Return the culling camera. If null, the viewport camera will be used for culling (normal case.) */
      getCullCamera(): Camera;
      /**  Convert a world space point to normalized screen coordinates. */
      worldToScreenPoint(worldPos: Vector3): IntVector2;
      /**  Convert screen coordinates and depth to a world space point. */
      screenToWorldPoint(x: number, y: number, depth: number): Vector3;
      /**  Allocate the view structure. Called by Renderer. */
      allocateView(): void;

   }

   export class Zone extends Drawable {

      boundingBox: BoundingBox;
      ambientColor: Color;
      fogColor: Color;
      fogStart: number;
      fogEnd: number;
      fogHeight: number;
      fogHeightScale: number;
      priority: number;
      heightFog: boolean;
      override: boolean;
      ambientGradient: boolean;
      zoneTexture: Texture;
      ambientStartColor: Color;
      ambientEndColor: Color;

      /**  Construct. */
      constructor();

      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set local-space bounding box. Will be used as an oriented bounding box to test whether objects or the camera are inside. */
      setBoundingBox(box: BoundingBox): void;
      /**  Set ambient color */
      setAmbientColor(color: Color): void;
      /**  Set fog color. */
      setFogColor(color: Color): void;
      /**  Set fog start distance. */
      setFogStart(start: number): void;
      /**  Set fog end distance. */
      setFogEnd(end: number): void;
      /**  Set fog height distance relative to the scene node's world position. Effective only in height fog mode. */
      setFogHeight(height: number): void;
      /**  Set fog height scale. Effective only in height fog mode. */
      setFogHeightScale(scale: number): void;
      /**  Set zone priority. If an object or camera is inside several zones, the one with highest priority is used. */
      setPriority(priority: number): void;
      /**  Set height fog mode. */
      setHeightFog(enable: boolean): void;
      /**  Set override mode. If camera is inside an override zone, that zone will be used for all rendered objects instead of their own zone. */
      setOverride(enable: boolean): void;
      /**  Set ambient gradient mode. In gradient mode ambient color is interpolated from neighbor zones. */
      setAmbientGradient(enable: boolean): void;
      /**  Set zone texture. This will be bound to the zone texture unit when rendering objects inside the zone. Note that the default shaders do not use it. */
      setZoneTexture(texture: Texture): void;
      /**  Return zone's own ambient color, disregarding gradient mode. */
      getAmbientColor(): Color;
      /**  Return ambient start color. Not safe to call from worker threads due to possible octree query. */
      getAmbientStartColor(): Color;
      /**  Return ambient end color. Not safe to call from worker threads due to possible octree query. */
      getAmbientEndColor(): Color;
      /**  Return fog color. */
      getFogColor(): Color;
      /**  Return fog start distance. */
      getFogStart(): number;
      /**  Return fog end distance. */
      getFogEnd(): number;
      /**  Return fog height distance relative to the scene node's world position. */
      getFogHeight(): number;
      /**  Return fog height scale. */
      getFogHeightScale(): number;
      /**  Return zone priority. */
      getPriority(): number;
      /**  Return whether height fog mode is enabled. */
      getHeightFog(): boolean;
      /**  Return whether override mode is enabled. */
      getOverride(): boolean;
      /**  Return whether ambient gradient mode is enabled. */
      getAmbientGradient(): boolean;
      /**  Return zone texture. */
      getZoneTexture(): Texture;
      /**  Check whether a point is inside. */
      isInside(point: Vector3): boolean;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "BoneHierarchyCreated" **/
    export var BoneHierarchyCreatedEventType : Atomic.EventType;

    /** object returned in the callback for the BoneHierarchyCreated event.**/
    export interface BoneHierarchyCreatedEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the BoneHierarchyCreated event. 

     / AnimatedModel bone hierarchy created.
    **/
    export function BoneHierarchyCreatedEvent (callback : Atomic.EventCallback<BoneHierarchyCreatedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the BoneHierarchyCreated event. **/ 
    export function BoneHierarchyCreatedEventData (callbackData : BoneHierarchyCreatedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AnimationTrigger" **/
    export var AnimationTriggerEventType : Atomic.EventType;

    /** object returned in the callback for the AnimationTrigger event.**/
    export interface AnimationTriggerEvent extends Atomic.EventData {
        node : Atomic.Node;
        animation : Atomic.Animation;
        name : string;
        time : number;
        /**  data type */
        /** Unmapped Native Type: User-defined */
        data : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AnimationTrigger event. 

     / AnimatedModel animation trigger.
    **/
    export function AnimationTriggerEvent (callback : Atomic.EventCallback<AnimationTriggerEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AnimationTrigger event. **/ 
    export function AnimationTriggerEventData (callbackData : AnimationTriggerEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AnimationFinished" **/
    export var AnimationFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the AnimationFinished event.**/
    export interface AnimationFinishedEvent extends Atomic.EventData {
        node : Atomic.Node;
        animation : Atomic.Animation;
        name : string;
        looped : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AnimationFinished event. 

     / AnimatedModel animation finished or looped.
    **/
    export function AnimationFinishedEvent (callback : Atomic.EventCallback<AnimationFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AnimationFinished event. **/ 
    export function AnimationFinishedEventData (callbackData : AnimationFinishedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ParticleEffectFinished" **/
    export var ParticleEffectFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the ParticleEffectFinished event.**/
    export interface ParticleEffectFinishedEvent extends Atomic.EventData {
        node : Atomic.Node;
        effect : Atomic.ParticleEffect;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ParticleEffectFinished event. 

     / Particle effect finished.
    **/
    export function ParticleEffectFinishedEvent (callback : Atomic.EventCallback<ParticleEffectFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ParticleEffectFinished event. **/ 
    export function ParticleEffectFinishedEventData (callbackData : ParticleEffectFinishedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TerrainCreated" **/
    export var TerrainCreatedEventType : Atomic.EventType;

    /** object returned in the callback for the TerrainCreated event.**/
    export interface TerrainCreatedEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TerrainCreated event. 

     / Terrain geometry created.
    **/
    export function TerrainCreatedEvent (callback : Atomic.EventCallback<TerrainCreatedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the TerrainCreated event. **/ 
    export function TerrainCreatedEventData (callbackData : TerrainCreatedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ScreenMode" **/
    export var ScreenModeEventType : Atomic.EventType;

    /** object returned in the callback for the ScreenMode event.**/
    export interface ScreenModeEvent extends Atomic.EventData {
        width : number;
        height : number;
        fullscreen : boolean;
        borderless : boolean;
        resizable : boolean;
        highDPI : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ScreenMode event. 

     / New screen mode set.
    **/
    export function ScreenModeEvent (callback : Atomic.EventCallback<ScreenModeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ScreenMode event. **/ 
    export function ScreenModeEventData (callbackData : ScreenModeEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WindowPos" **/
    export var WindowPosEventType : Atomic.EventType;

    /** object returned in the callback for the WindowPos event.**/
    export interface WindowPosEvent extends Atomic.EventData {
        x : number;
        y : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WindowPos event. 

     / Window position changed.
    **/
    export function WindowPosEvent (callback : Atomic.EventCallback<WindowPosEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WindowPos event. **/ 
    export function WindowPosEventData (callbackData : WindowPosEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "RenderSurfaceUpdate" **/
    export var RenderSurfaceUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the RenderSurfaceUpdate event.**/
    export interface RenderSurfaceUpdateEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the RenderSurfaceUpdate event. 

     / Request for queuing rendersurfaces either in manual or always-update mode.
    **/
    export function RenderSurfaceUpdateEvent (callback : Atomic.EventCallback<RenderSurfaceUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the RenderSurfaceUpdate event. **/ 
    export function RenderSurfaceUpdateEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "BeginRendering" **/
    export var BeginRenderingEventType : Atomic.EventType;

    /** object returned in the callback for the BeginRendering event.**/
    export interface BeginRenderingEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the BeginRendering event. 

     / Frame rendering started.
    **/
    export function BeginRenderingEvent (callback : Atomic.EventCallback<BeginRenderingEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the BeginRendering event. **/ 
    export function BeginRenderingEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EndRendering" **/
    export var EndRenderingEventType : Atomic.EventType;

    /** object returned in the callback for the EndRendering event.**/
    export interface EndRenderingEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EndRendering event. 

     / Frame rendering ended.
    **/
    export function EndRenderingEvent (callback : Atomic.EventCallback<EndRenderingEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EndRendering event. **/ 
    export function EndRenderingEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "BeginViewUpdate" **/
    export var BeginViewUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the BeginViewUpdate event.**/
    export interface BeginViewUpdateEvent extends Atomic.EventData {
        view : Atomic.View;
        texture : Atomic.Texture;
        surface : Atomic.RenderSurface;
        scene : Atomic.Scene;
        camera : Atomic.Camera;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the BeginViewUpdate event. 

     / Update of a view started.
    **/
    export function BeginViewUpdateEvent (callback : Atomic.EventCallback<BeginViewUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the BeginViewUpdate event. **/ 
    export function BeginViewUpdateEventData (callbackData : BeginViewUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EndViewUpdate" **/
    export var EndViewUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the EndViewUpdate event.**/
    export interface EndViewUpdateEvent extends Atomic.EventData {
        view : Atomic.View;
        texture : Atomic.Texture;
        surface : Atomic.RenderSurface;
        scene : Atomic.Scene;
        camera : Atomic.Camera;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EndViewUpdate event. 

     / Update of a view ended.
    **/
    export function EndViewUpdateEvent (callback : Atomic.EventCallback<EndViewUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EndViewUpdate event. **/ 
    export function EndViewUpdateEventData (callbackData : EndViewUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "BeginViewRender" **/
    export var BeginViewRenderEventType : Atomic.EventType;

    /** object returned in the callback for the BeginViewRender event.**/
    export interface BeginViewRenderEvent extends Atomic.EventData {
        view : Atomic.View;
        texture : Atomic.Texture;
        surface : Atomic.RenderSurface;
        scene : Atomic.Scene;
        camera : Atomic.Camera;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the BeginViewRender event. 

     / Render of a view started.
    **/
    export function BeginViewRenderEvent (callback : Atomic.EventCallback<BeginViewRenderEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the BeginViewRender event. **/ 
    export function BeginViewRenderEventData (callbackData : BeginViewRenderEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EndViewRender" **/
    export var EndViewRenderEventType : Atomic.EventType;

    /** object returned in the callback for the EndViewRender event.**/
    export interface EndViewRenderEvent extends Atomic.EventData {
        view : Atomic.View;
        texture : Atomic.Texture;
        surface : Atomic.RenderSurface;
        scene : Atomic.Scene;
        camera : Atomic.Camera;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EndViewRender event. 

     / Render of a view ended.
    **/
    export function EndViewRenderEvent (callback : Atomic.EventCallback<EndViewRenderEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EndViewRender event. **/ 
    export function EndViewRenderEventData (callbackData : EndViewRenderEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "RenderPathEvent" **/
    export var RenderPathEventType : Atomic.EventType;

    /** object returned in the callback for the RenderPathEvent event.**/
    export interface RenderPathEvent extends Atomic.EventData {
        name : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the RenderPathEvent event. 

     / A render path event has occurred.
    **/
    export function RenderPathEvent (callback : Atomic.EventCallback<RenderPathEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the RenderPathEvent event. **/ 
    export function RenderPathEventData (callbackData : RenderPathEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "DeviceLost" **/
    export var DeviceLostEventType : Atomic.EventType;

    /** object returned in the callback for the DeviceLost event.**/
    export interface DeviceLostEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the DeviceLost event. 

     / Graphics context has been lost. Some or all (depending on the API) GPU objects have lost their contents.
    **/
    export function DeviceLostEvent (callback : Atomic.EventCallback<DeviceLostEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the DeviceLost event. **/ 
    export function DeviceLostEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "DeviceReset" **/
    export var DeviceResetEventType : Atomic.EventType;

    /** object returned in the callback for the DeviceReset event.**/
    export interface DeviceResetEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the DeviceReset event. 

     / Graphics context has been recreated after being lost. GPU objects in the "data lost" state can be restored now.
    **/
    export function DeviceResetEvent (callback : Atomic.EventCallback<DeviceResetEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the DeviceReset event. **/ 
    export function DeviceResetEventData () : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: IO
//----------------------------------------------------


   export class BufferQueue extends AObject {

      name: string;
      checksum: number;
      eof: boolean;
      position: number;
      size: number;

      /**  Construct. */
      constructor();

      /**  Seek operation is not supported for a BufferQueue. */
      seek(position: number): number;
      /**  Remove all buffered data. */
      clear(): void;
      /**  Return name of the stream. */
      getName(): string;
      /**  Return a checksum if applicable. */
      getChecksum(): number;
      /**  Return whether the end of stream has been reached. */
      isEof(): boolean;
      /**  Return current position. */
      getPosition(): number;
      /**  Return size. */
      getSize(): number;
      /**  Read a 64-bit integer. */
      readInt64(): number;
      /**  Read a 32-bit integer. */
      readInt(): number;
      /**  Read a 16-bit integer. */
      readShort(): number;
      /**  Read an 8-bit integer. */
      readByte(): number;
      /**  Read a 64-bit unsigned integer. */
      readUInt64(): number;
      /**  Read a 32-bit unsigned integer. */
      readUInt(): number;
      /**  Read a 16-bit unsigned integer. */
      readUShort(): number;
      /**  Read an 8-bit unsigned integer. */
      readUByte(): number;
      /**  Read a bool. */
      readBool(): boolean;
      /**  Read a float. */
      readFloat(): number;
      /**  Read a double. */
      readDouble(): number;
      /**  Read an IntRect. */
      readIntRect(): IntRect;
      /**  Read an IntVector2. */
      readIntVector2(): IntVector2;
      /**  Read a Rect. */
      readRect(): Rect;
      /**  Read a Vector2. */
      readVector2(): Vector2;
      /**  Read a Vector3. */
      readVector3(): Vector3;
      /**  Read a Vector3 packed into 3 x 16 bits with the specified maximum absolute range. */
      readPackedVector3(maxAbsCoord: number): Vector3;
      /**  Read a Vector4. */
      readVector4(): Vector4;
      /**  Read a quaternion. */
      readQuaternion(): Quaternion;
      /**  Read a quaternion with each component packed in 16 bits. */
      readPackedQuaternion(): Quaternion;
      /**  Read a color. */
      readColor(): Color;
      /**  Read a bounding box. */
      readBoundingBox(): BoundingBox;
      /**  Read a null-terminated string. */
      readString(): string;
      /**  Read a four-letter file ID. */
      readFileID(): string;
      /**  Read a 32-bit StringHash. */
      readStringHash(): string;
      /**  Read a variant vector. */
      readVariantVector(outVector: ScriptVector): void;
      /**  Read a variable-length encoded unsigned integer, which can use 29 bits maximum. */
      readVLE(): number;
      /**  Read a 24-bit network object ID. */
      readNetID(): number;
      /**  Read a text line. */
      readLine(): string;
      /**  Write a 64-bit integer. */
      writeInt64(value: number): boolean;
      /**  Write a 32-bit integer. */
      writeInt(value: number): boolean;
      /**  Write a 16-bit integer. */
      writeShort(value: number): boolean;
      /**  Write an 8-bit integer. */
      writeByte(value: number): boolean;
      /**  Write a 64-bit unsigned integer. */
      writeUInt64(value: number): boolean;
      /**  Write a 32-bit unsigned integer. */
      writeUInt(value: number): boolean;
      /**  Write a 16-bit unsigned integer. */
      writeUShort(value: number): boolean;
      /**  Write an 8-bit unsigned integer. */
      writeUByte(value: number): boolean;
      /**  Write a bool. */
      writeBool(value: boolean): boolean;
      /**  Write a float. */
      writeFloat(value: number): boolean;
      /**  Write a double. */
      writeDouble(value: number): boolean;
      /**  Write an IntRect. */
      writeIntRect(value: IntRect): boolean;
      /**  Write an IntVector2. */
      writeIntVector2(value: IntVector2): boolean;
      /**  Write a Rect. */
      writeRect(value: Rect): boolean;
      /**  Write a Vector2. */
      writeVector2(value: Vector2): boolean;
      /**  Write a Vector3. */
      writeVector3(value: Vector3): boolean;
      /**  Write a Vector3 packed into 3 x 16 bits with the specified maximum absolute range. */
      writePackedVector3(value: Vector3, maxAbsCoord: number): boolean;
      /**  Write a Vector4. */
      writeVector4(value: Vector4): boolean;
      /**  Write a quaternion. */
      writeQuaternion(value: Quaternion): boolean;
      /**  Write a quaternion with each component packed in 16 bits. */
      writePackedQuaternion(value: Quaternion): boolean;
      /**  Write a color. */
      writeColor(value: Color): boolean;
      /**  Write a bounding box. */
      writeBoundingBox(value: BoundingBox): boolean;
      /**  Write a null-terminated string. */
      writeString(value: string): boolean;
      /**  Write a four-letter file ID. If the string is not long enough, spaces will be appended. */
      writeFileID(value: string): boolean;
      /**  Write a 32-bit StringHash. */
      writeStringHash(value: string): boolean;
      /**  Write a variant vector. */
      writeVariantVector(value: ScriptVector): boolean;
      /**  Write a variable-length encoded unsigned integer, which can use 29 bits maximum. */
      writeVLE(value: number): boolean;
      /**  Write a 24-bit network object ID. */
      writeNetID(value: number): boolean;
      /**  Write a text line. Char codes 13 & 10 will be automatically appended. */
      writeLine(value: string): boolean;

   }

   export class File extends AObject {

      name: string;
      checksum: number;
      mode: FileMode;
      open: boolean;
      packaged: boolean;
      fullPath: string;
      eof: boolean;
      position: number;
      size: number;

      /**  Construct and open a filesystem file. */
      constructor(fileName: string, mode?: FileMode);

      /**  Set position from the beginning of the file. */
      seek(position: number): number;
      /**  Return the file name. */
      getName(): string;
      /**  Return a checksum of the file contents using the SDBM hash algorithm. */
      getChecksum(): number;
      /**  Close the file. */
      close(): void;
      /**  Flush any buffered output to the file. */
      flush(): void;
      /**  Change the file name. Used by the resource system. */
      setName(name: string): void;
      /**  Return the open mode. */
      getMode(): FileMode;
      /**  Return whether is open. */
      isOpen(): boolean;
      /**  Return whether the file originates from a package. */
      isPackaged(): boolean;
      /**  Reads a text file, ensuring data from file is 0 terminated */
      readText(): string;
      /**  Return the fullpath to the file */
      getFullPath(): string;
      /**  Unlike FileSystem.Copy this copy works when the source file is in a package file */
      copy(srcFile: File): boolean;
      /**  Return whether the end of stream has been reached. */
      isEof(): boolean;
      /**  Return current position. */
      getPosition(): number;
      /**  Return size. */
      getSize(): number;
      /**  Read a 64-bit integer. */
      readInt64(): number;
      /**  Read a 32-bit integer. */
      readInt(): number;
      /**  Read a 16-bit integer. */
      readShort(): number;
      /**  Read an 8-bit integer. */
      readByte(): number;
      /**  Read a 64-bit unsigned integer. */
      readUInt64(): number;
      /**  Read a 32-bit unsigned integer. */
      readUInt(): number;
      /**  Read a 16-bit unsigned integer. */
      readUShort(): number;
      /**  Read an 8-bit unsigned integer. */
      readUByte(): number;
      /**  Read a bool. */
      readBool(): boolean;
      /**  Read a float. */
      readFloat(): number;
      /**  Read a double. */
      readDouble(): number;
      /**  Read an IntRect. */
      readIntRect(): IntRect;
      /**  Read an IntVector2. */
      readIntVector2(): IntVector2;
      /**  Read a Rect. */
      readRect(): Rect;
      /**  Read a Vector2. */
      readVector2(): Vector2;
      /**  Read a Vector3. */
      readVector3(): Vector3;
      /**  Read a Vector3 packed into 3 x 16 bits with the specified maximum absolute range. */
      readPackedVector3(maxAbsCoord: number): Vector3;
      /**  Read a Vector4. */
      readVector4(): Vector4;
      /**  Read a quaternion. */
      readQuaternion(): Quaternion;
      /**  Read a quaternion with each component packed in 16 bits. */
      readPackedQuaternion(): Quaternion;
      /**  Read a color. */
      readColor(): Color;
      /**  Read a bounding box. */
      readBoundingBox(): BoundingBox;
      /**  Read a null-terminated string. */
      readString(): string;
      /**  Read a four-letter file ID. */
      readFileID(): string;
      /**  Read a 32-bit StringHash. */
      readStringHash(): string;
      /**  Read a variant vector. */
      readVariantVector(outVector: ScriptVector): void;
      /**  Read a variable-length encoded unsigned integer, which can use 29 bits maximum. */
      readVLE(): number;
      /**  Read a 24-bit network object ID. */
      readNetID(): number;
      /**  Read a text line. */
      readLine(): string;
      /**  Write a 64-bit integer. */
      writeInt64(value: number): boolean;
      /**  Write a 32-bit integer. */
      writeInt(value: number): boolean;
      /**  Write a 16-bit integer. */
      writeShort(value: number): boolean;
      /**  Write an 8-bit integer. */
      writeByte(value: number): boolean;
      /**  Write a 64-bit unsigned integer. */
      writeUInt64(value: number): boolean;
      /**  Write a 32-bit unsigned integer. */
      writeUInt(value: number): boolean;
      /**  Write a 16-bit unsigned integer. */
      writeUShort(value: number): boolean;
      /**  Write an 8-bit unsigned integer. */
      writeUByte(value: number): boolean;
      /**  Write a bool. */
      writeBool(value: boolean): boolean;
      /**  Write a float. */
      writeFloat(value: number): boolean;
      /**  Write a double. */
      writeDouble(value: number): boolean;
      /**  Write an IntRect. */
      writeIntRect(value: IntRect): boolean;
      /**  Write an IntVector2. */
      writeIntVector2(value: IntVector2): boolean;
      /**  Write a Rect. */
      writeRect(value: Rect): boolean;
      /**  Write a Vector2. */
      writeVector2(value: Vector2): boolean;
      /**  Write a Vector3. */
      writeVector3(value: Vector3): boolean;
      /**  Write a Vector3 packed into 3 x 16 bits with the specified maximum absolute range. */
      writePackedVector3(value: Vector3, maxAbsCoord: number): boolean;
      /**  Write a Vector4. */
      writeVector4(value: Vector4): boolean;
      /**  Write a quaternion. */
      writeQuaternion(value: Quaternion): boolean;
      /**  Write a quaternion with each component packed in 16 bits. */
      writePackedQuaternion(value: Quaternion): boolean;
      /**  Write a color. */
      writeColor(value: Color): boolean;
      /**  Write a bounding box. */
      writeBoundingBox(value: BoundingBox): boolean;
      /**  Write a null-terminated string. */
      writeString(value: string): boolean;
      /**  Write a four-letter file ID. If the string is not long enough, spaces will be appended. */
      writeFileID(value: string): boolean;
      /**  Write a 32-bit StringHash. */
      writeStringHash(value: string): boolean;
      /**  Write a variant vector. */
      writeVariantVector(value: ScriptVector): boolean;
      /**  Write a variable-length encoded unsigned integer, which can use 29 bits maximum. */
      writeVLE(value: number): boolean;
      /**  Write a 24-bit network object ID. */
      writeNetID(value: number): boolean;
      /**  Write a text line. Char codes 13 & 10 will be automatically appended. */
      writeLine(value: string): boolean;
      readText():string;
      writeString(text:string):void;

   }

   export class FileSystem extends AObject {

      executeConsoleCommands: boolean;
      currentDir: string;
      programDir: string;
      userDocumentsDir: string;

      /**  Construct. */
      constructor();

      /**  Set the current working directory. */
      setCurrentDir(pathName: string): boolean;
      /**  Create a directory. */
      createDir(pathName: string): boolean;
      /**  Set whether to execute engine console commands as OS-specific system command. */
      setExecuteConsoleCommands(enable: boolean): void;
      /**  Run a program using the command interpreter, block until it exits and return the exit code. Will fail if any allowed paths are defined. */
      systemCommand(commandLine: string, redirectStdOutToLog?: boolean): number;
      /**  Run a specific program, block until it exits and return the exit code. Will fail if any allowed paths are defined. */
      systemRun(fileName: string, args: string[]): number;
      /**  Run a program using the command interpreter asynchronously. Return a request ID or M_MAX_UNSIGNED if failed. The exit code will be posted together with the request ID in an AsyncExecFinished event. Will fail if any allowed paths are defined. */
      systemCommandAsync(commandLine: string): number;
      /**  Run a specific program asynchronously. Return a request ID or M_MAX_UNSIGNED if failed. The exit code will be posted together with the request ID in an AsyncExecFinished event. Will fail if any allowed paths are defined. */
      systemRunAsync(fileName: string, args: string[]): number;
      /**  Open a file in an external program, with mode such as "edit" optionally specified. Will fail if any allowed paths are defined. */
      systemOpen(fileName: string, mode?: string): boolean;
      /**  Copy a file. Return true if successful. */
      copy(srcFileName: string, destFileName: string): boolean;
      /**  Rename a file. Return true if successful. */
      rename(srcFileName: string, destFileName: string): boolean;
      /**  Delete a file. Return true if successful. */
      delete(fileName: string): boolean;
      /**  Register a path as allowed to access. If no paths are registered, all are allowed. Registering allowed paths is considered securing the Urho3D execution environment: running programs and opening files externally through the system will fail afterward. */
      registerPath(pathName: string): void;
      /**  Set a file's last modified time as seconds since 1.1.1970. Return true on success. */
      setLastModifiedTime(fileName: string, newTime: number): boolean;
      /**  Return the absolute current working directory. */
      getCurrentDir(): string;
      /**  Return whether is executing engine console commands as OS-specific system command. */
      getExecuteConsoleCommands(): boolean;
      /**  Return whether paths have been registered. */
      hasRegisteredPaths(): boolean;
      /**  Check if a path is allowed to be accessed. If no paths are registered, all are allowed. */
      checkAccess(pathName: string): boolean;
      /**  Returns the file's last modified time as seconds since 1.1.1970, or 0 if can not be accessed. */
      getLastModifiedTime(fileName: string): number;
      /**  Check if a file exists. */
      fileExists(fileName: string): boolean;
      /**  Check if a directory exists. */
      dirExists(pathName: string): boolean;
      /**  Return the program's directory. If it does not contain the Urho3D default CoreData and Data directories, and the current working directory does, return the working directory instead. */
      getProgramDir(): string;
      /**  Return the user documents directory. */
      getUserDocumentsDir(): string;
      /**  Return the application preferences directory. */
      getAppPreferencesDir(org: string, app: string): string;
      /**  Check if a file or directory exists at the specified path */
      exists(pathName: string): boolean;
      copyDir(directoryIn: string, directoryOut: string): boolean;
      createDirs(root: string, subdirectory: string): boolean;
      createDirsRecursive(directoryIn: string): boolean;
      removeDir(directoryIn: string, recursive: boolean): boolean;
      scanDir(pathName:string, filter:string, flags:number, recursive:boolean):Array<string>;

   }

   export class FileWatcher extends AObject {

      delay: number;
      path: string;

      /**  Construct. */
      constructor();

      /**  Directory watching loop. */
      threadFunction(): void;
      /**  Start watching a directory. Return true if successful. */
      startWatching(pathName: string, watchSubDirs: boolean): boolean;
      /**  Stop watching the directory. */
      stopWatching(): void;
      /**  Set the delay in seconds before file changes are notified. This (hopefully) avoids notifying when a file save is still in progress. Default 1 second. */
      setDelay(interval: number): void;
      /**  Add a file change into the changes queue. */
      addChange(fileName: string): void;
      /**  Return the path being watched, or empty if not watching. */
      getPath(): string;
      /**  Return the delay in seconds for notifying file changes. */
      getDelay(): number;

   }

   export class Log extends AObject {

      level: number;
      timeStamp: boolean;
      quiet: boolean;
      lastMessage: string;
      logFile: File;

      /**  Construct. */
      constructor();

      /**  Open the log file. */
      open(fileName: string): void;
      /**  Close the log file. */
      close(): void;
      /**  Set logging level. */
      setLevel(level: number): void;
      /**  Set whether to timestamp log messages. */
      setTimeStamp(enable: boolean): void;
      /**  Set quiet mode ie. only print error entries to standard error stream (which is normally redirected to console also). Output to log file is not affected by this mode. */
      setQuiet(quiet: boolean): void;
      /**  Return logging level. */
      getLevel(): number;
      /**  Return whether log messages are timestamped. */
      getTimeStamp(): boolean;
      /**  Return last log message. */
      getLastMessage(): string;
      /**  Return whether log is in quiet mode (only errors printed to standard error stream). */
      isQuiet(): boolean;
      /**  Write to the log. If logging level is higher than the level of the message, the message is ignored. */
      static write(level: number, message: string): void;
      /**  Write raw output to the log. */
      static writeRaw(message: string, error?: boolean): void;
      getLogFile(): File;

   }

   export class PackageFile extends AObject {

      name: string;
      nameHash: string;
      numFiles: number;
      totalSize: number;
      totalDataSize: number;
      checksum: number;
      compressed: boolean;

      /**  Construct and open. */
      constructor(fileName: string, startOffset?: number);

      /**  Open the package file. Return true if successful. */
      open(fileName: string, startOffset?: number): boolean;
      /**  Check if a file exists within the package file. This will be case-insensitive on Windows and case-sensitive on other platforms. */
      exists(fileName: string): boolean;
      /**  Return the package file name. */
      getName(): string;
      /**  Return hash of the package file name. */
      getNameHash(): string;
      /**  Return number of files. */
      getNumFiles(): number;
      /**  Return total size of the package file. */
      getTotalSize(): number;
      /**  Return total data size from all the file entries in the package file. */
      getTotalDataSize(): number;
      /**  Return checksum of the package file contents. */
      getChecksum(): number;
      /**  Return whether the files are compressed. */
      isCompressed(): boolean;
      /**  Return a file name in the package at the specified index */
      getEntryName(index: number): string;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LogMessage" **/
    export var LogMessageEventType : Atomic.EventType;

    /** object returned in the callback for the LogMessage event.**/
    export interface LogMessageEvent extends Atomic.EventData {
        message : string;
        level : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LogMessage event. 

     / Log message event.
    **/
    export function LogMessageEvent (callback : Atomic.EventCallback<LogMessageEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the LogMessage event. **/ 
    export function LogMessageEventData (callbackData : LogMessageEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AsyncExecFinished" **/
    export var AsyncExecFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the AsyncExecFinished event.**/
    export interface AsyncExecFinishedEvent extends Atomic.EventData {
        requestID : number;
        exitCode : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AsyncExecFinished event. 

     / Async system command execution finished.
    **/
    export function AsyncExecFinishedEvent (callback : Atomic.EventCallback<AsyncExecFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AsyncExecFinished event. **/ 
    export function AsyncExecFinishedEventData (callbackData : AsyncExecFinishedEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: IPC
//----------------------------------------------------


   export class IPC extends AObject {

      /**  Construct. */
      constructor();

      shutdown(): void;
      sendEventToBroker(eventType: string): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCWorkerStart" **/
    export var IPCWorkerStartEventType : Atomic.EventType;

    /** object returned in the callback for the IPCWorkerStart event.**/
    export interface IPCWorkerStartEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCWorkerStart event. 

     / Worker start
    **/
    export function IPCWorkerStartEvent (callback : Atomic.EventCallback<IPCWorkerStartEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the IPCWorkerStart event. **/ 
    export function IPCWorkerStartEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCWorkerExit" **/
    export var IPCWorkerExitEventType : Atomic.EventType;

    /** object returned in the callback for the IPCWorkerExit event.**/
    export interface IPCWorkerExitEvent extends Atomic.EventData {
        /** Unmapped Native Type: Broker */
        broker : any;
        exitCode : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCWorkerExit event. 

     / Worker exited
    **/
    export function IPCWorkerExitEvent (callback : Atomic.EventCallback<IPCWorkerExitEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCWorkerExit event. **/ 
    export function IPCWorkerExitEventData (callbackData : IPCWorkerExitEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCInitialize" **/
    export var IPCInitializeEventType : Atomic.EventType;

    /** object returned in the callback for the IPCInitialize event.**/
    export interface IPCInitializeEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCInitialize event. 

     / broker -> worker start
    **/
    export function IPCInitializeEvent (callback : Atomic.EventCallback<IPCInitializeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the IPCInitialize event. **/ 
    export function IPCInitializeEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCWorkerLog" **/
    export var IPCWorkerLogEventType : Atomic.EventType;

    /** object returned in the callback for the IPCWorkerLog event.**/
    export interface IPCWorkerLogEvent extends Atomic.EventData {
        /**  log level */
        level : number;
        message : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCWorkerLog event. 

     / Worker Log
    **/
    export function IPCWorkerLogEvent (callback : Atomic.EventCallback<IPCWorkerLogEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCWorkerLog event. **/ 
    export function IPCWorkerLogEventData (callbackData : IPCWorkerLogEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCMessage" **/
    export var IPCMessageEventType : Atomic.EventType;

    /** object returned in the callback for the IPCMessage event.**/
    export interface IPCMessageEvent extends Atomic.EventData {
        message : string;
        value : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCMessage event. 

     / Worker Log
    **/
    export function IPCMessageEvent (callback : Atomic.EventCallback<IPCMessageEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCMessage event. **/ 
    export function IPCMessageEventData (callbackData : IPCMessageEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCCmd" **/
    export var IPCCmdEventType : Atomic.EventType;

    /** object returned in the callback for the IPCCmd event.**/
    export interface IPCCmdEvent extends Atomic.EventData {
        command : string;
        iD : number;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCCmd event. **/
    export function IPCCmdEvent (callback : Atomic.EventCallback<IPCCmdEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCCmd event. **/ 
    export function IPCCmdEventData (callbackData : IPCCmdEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCCmdResult" **/
    export var IPCCmdResultEventType : Atomic.EventType;

    /** object returned in the callback for the IPCCmdResult event.**/
    export interface IPCCmdResultEvent extends Atomic.EventData {
        command : string;
        iD : number;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCCmdResult event. **/
    export function IPCCmdResultEvent (callback : Atomic.EventCallback<IPCCmdResultEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCCmdResult event. **/ 
    export function IPCCmdResultEventData (callbackData : IPCCmdResultEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Input
//----------------------------------------------------


   export class Input extends AObject {

      toggleFullscreen: boolean;
      screenKeyboardVisible: boolean;
      touchEmulation: boolean;
      mousePosition: IntVector2;
      qualifiers: number;
      mouseMove: IntVector2;
      mouseMoveX: number;
      mouseMoveY: number;
      mouseMoveWheel: number;
      numTouches: number;
      numJoysticks: number;
      screenKeyboardSupport: boolean;
      mouseVisible: boolean;
      mouseGrabbed: boolean;
      mouseLocked: boolean;
      mouseMode: MouseMode;
      minimized: boolean;

      /**  Construct. */
      constructor();

      /**  Poll for window messages. Called by HandleBeginFrame(). */
      update(): void;
      /**  Set whether ALT-ENTER fullscreen toggle is enabled. */
      setToggleFullscreen(enable: boolean): void;
      /**  Set whether the operating system mouse cursor is visible. When not visible (default), is kept centered to prevent leaving the window. Mouse visibility event can be suppressed-- this also recalls any unsuppressed SetMouseVisible which can be returned by ResetMouseVisible(). */
      setMouseVisible(enable: boolean, suppressEvent?: boolean): void;
      /**  Reset last mouse visibility that was not suppressed in SetMouseVisible. */
      resetMouseVisible(): void;
      /**  Set whether the mouse is currently being grabbed by an operation. */
      setMouseGrabbed(grab: boolean, suppressEvent?: boolean): void;
      /**  Reset the mouse grabbed to the last unsuppressed SetMouseGrabbed call */
      resetMouseGrabbed(): void;
      /**  Set the mouse mode behaviour.
     *  MM_ABSOLUTE is the default behaviour, allowing the toggling of operating system cursor visibility and allowing the cursor to escape the window when visible.
     *  When the operating system cursor is invisible in absolute mouse mode, the mouse is confined to the window.
     *  If the operating system and UI cursors are both invisible, interaction with the Urho UI will be limited (eg: drag move / drag end events will not trigger).
     *  SetMouseMode(MM_ABSOLUTE) will call SetMouseGrabbed(false).
     *
     *  MM_RELATIVE sets the operating system cursor to invisible and confines the cursor to the window.
     *  The operating system cursor cannot be set to be visible in this mode via SetMouseVisible(), however changes are tracked and will be restored when another mouse mode is set.
     *  When the virtual cursor is also invisible, UI interaction will still function as normal (eg: drag events will trigger).
     *  SetMouseMode(MM_RELATIVE) will call SetMouseGrabbed(true).
     *
     *  MM_WRAP grabs the mouse from the operating system and confines the operating system cursor to the window, wrapping the cursor when it is near the edges.
     *  SetMouseMode(MM_WRAP) will call SetMouseGrabbed(true).
     *
     *  MM_FREE does not grab/confine the mouse cursor even when it is hidden. This can be used for cases where the cursor should render using the operating system
     *  outside the window, and perform custom rendering (with SetMouseVisible(false)) inside.
     */
      setMouseMode(mode: MouseMode, suppressEvent?: boolean): void;
      /**  Reset the last mouse mode that wasn't suppressed in SetMouseMode */
      resetMouseMode(): void;
      /**  Show or hide on-screen keyboard on platforms that support it. When shown, keypresses from it are delivered as key events. */
      setScreenKeyboardVisible(enable: boolean): void;
      /**  Set touch emulation by mouse. Only available on desktop platforms. When enabled, actual mouse events are no longer sent and the mouse cursor is forced visible. */
      setTouchEmulation(enable: boolean): void;
      /**  Begin recording a touch gesture. Return true if successful. The E_GESTURERECORDED event (which contains the ID for the new gesture) will be sent when recording finishes. */
      recordGesture(): boolean;
      /**  Remove an in-memory gesture by ID. Return true if was found. */
      removeGesture(gestureID: number): boolean;
      /**  Remove all in-memory gestures. */
      removeAllGestures(): void;
      /**  Set the mouse cursor position. */
      setMousePosition(position: IntVector2): void;
      /**  Center the mouse position. */
      centerMousePosition(): void;
      /**  Return keycode from key name. */
      getKeyFromName(name: string): number;
      /**  Return keycode from scancode. */
      getKeyFromScancode(scancode: number): number;
      /**  Return name of key from keycode. */
      getKeyName(key: number): string;
      /**  Return scancode from keycode. */
      getScancodeFromKey(key: number): number;
      /**  Return scancode from key name. */
      getScancodeFromName(name: string): number;
      /**  Return name of key from scancode. */
      getScancodeName(scancode: number): string;
      /**  Check if a key is held down. */
      getKeyDown(key: number): boolean;
      /**  Check if a key has been pressed on this frame. */
      getKeyPress(key: number): boolean;
      /**  Check if a key is held down by scancode. */
      getScancodeDown(scancode: number): boolean;
      /**  Check if a key has been pressed on this frame by scancode. */
      getScancodePress(scancode: number): boolean;
      /**  Check if a mouse button is held down. */
      getMouseButtonDown(button: number): boolean;
      /**  Check if a mouse button has been pressed on this frame. */
      getMouseButtonPress(button: number): boolean;
      /**  Check if a qualifier key is held down. */
      getQualifierDown(qualifier: number): boolean;
      /**  Check if a qualifier key has been pressed on this frame. */
      getQualifierPress(qualifier: number): boolean;
      /**  Return the currently held down qualifiers. */
      getQualifiers(): number;
      /**  Return mouse position within window. Should only be used with a visible mouse cursor. */
      getMousePosition(): IntVector2;
      /**  Return mouse movement since last frame. */
      getMouseMove(): IntVector2;
      /**  Return horizontal mouse movement since last frame. */
      getMouseMoveX(): number;
      /**  Return vertical mouse movement since last frame. */
      getMouseMoveY(): number;
      /**  Return mouse wheel movement since last frame. */
      getMouseMoveWheel(): number;
      /**  Return number of active finger touches. */
      getNumTouches(): number;
      /**  Return number of connected joysticks. */
      getNumJoysticks(): number;
      /**  Return joystick state by index, or null if does not exist. 0 = first connected joystick. */
      getJoystickByIndex(index: number): JoystickState;
      /**  Return joystick state by name, or null if does not exist. */
      getJoystickByName(name: string): JoystickState;
      /**  Return whether fullscreen toggle is enabled. */
      getToggleFullscreen(): boolean;
      /**  Return whether on-screen keyboard is supported. */
      getScreenKeyboardSupport(): boolean;
      /**  Return whether on-screen keyboard is being shown. */
      isScreenKeyboardVisible(): boolean;
      /**  Return whether touch emulation is enabled. */
      getTouchEmulation(): boolean;
      /**  Return whether the operating system mouse cursor is visible. */
      isMouseVisible(): boolean;
      /**  Return whether the mouse is currently being grabbed by an operation. */
      isMouseGrabbed(): boolean;
      /**  Return whether the mouse is locked to the window */
      isMouseLocked(): boolean;
      /**  Return the mouse mode. */
      getMouseMode(): MouseMode;
      /**  Return whether application window has input focus. */
      hasFocus(): boolean;
      /**  Return whether application window is minimized. */
      isMinimized(): boolean;
      /**  Binds UIButton element to the given button */
      bindButton(touchButton: UIButton, button: number): void;
      simulateButtonDown(button: number): void;
      simulateButtonUp(button: number): void;
      getJoystickRumble(id: number): boolean;
      /**  return if rumble is supported on game controller */
      joystickRumble(id: number, strength: number, length: number): void;
      /**  produce rumble */
      joystickSimulateMouseMove(xpos: number, ypos: number): void;
      /**  moves the on screen cursor */
      joystickSimulateMouseButton(button: number): void;
      getTouchID(index: number): number;
      getTouchPosition(index: number): IntVector2;
      getTouchLastPosition(index: number): IntVector2;
      getTouchDelta(index: number): IntVector2;
      getTouchPressure(index: number): number;
      getTouchWidget(index: number): UIWidget;
      getTouch(index:number):any;

   }

   export class JoystickState extends RefCounted {

      controller: boolean;
      numButtons: number;
      numAxes: number;
      numHats: number;
      rumble: boolean;

      /**  Construct with defaults. */
      constructor();

      /**  Initialize the number of buttons, axes and hats and set them to neutral state. */
      initialize(numButtons: number, numAxes: number, numHats: number): void;
      /**  Reset button, axis and hat states to neutral. */
      reset(): void;
      /**  Return whether is a game controller. Game controllers will use standardized axis and button mappings. */
      isController(): boolean;
      /**  Return number of buttons. */
      getNumButtons(): number;
      /**  Return number of axes. */
      getNumAxes(): number;
      /**  Return number of hats. */
      getNumHats(): number;
      /**  Check if a button is held down. */
      getButtonDown(index: number): boolean;
      /**  Check if a button has been pressed on this frame. */
      getButtonPress(index: number): boolean;
      /**  Return axis position. */
      getAxisPosition(index: number): number;
      /**  Return hat position. */
      getHatPosition(index: number): number;
      /**  Haptic aka Rumble support */
      startRumble(): boolean;
      stopRumble(): void;
      isRumble(): boolean;
      doRumble(strength: number, length: number): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MouseButtonDown" **/
    export var MouseButtonDownEventType : Atomic.EventType;

    /** object returned in the callback for the MouseButtonDown event.**/
    export interface MouseButtonDownEvent extends Atomic.EventData {
        button : number;
        buttons : number;
        qualifiers : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MouseButtonDown event. 

     / Mouse button pressed.
    **/
    export function MouseButtonDownEvent (callback : Atomic.EventCallback<MouseButtonDownEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MouseButtonDown event. **/ 
    export function MouseButtonDownEventData (callbackData : MouseButtonDownEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MouseButtonUp" **/
    export var MouseButtonUpEventType : Atomic.EventType;

    /** object returned in the callback for the MouseButtonUp event.**/
    export interface MouseButtonUpEvent extends Atomic.EventData {
        button : number;
        buttons : number;
        qualifiers : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MouseButtonUp event. 

     / Mouse button released.
    **/
    export function MouseButtonUpEvent (callback : Atomic.EventCallback<MouseButtonUpEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MouseButtonUp event. **/ 
    export function MouseButtonUpEventData (callbackData : MouseButtonUpEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MouseMove" **/
    export var MouseMoveEventType : Atomic.EventType;

    /** object returned in the callback for the MouseMove event.**/
    export interface MouseMoveEvent extends Atomic.EventData {
        /**  only when mouse visible */
        x : number;
        /**  only when mouse visible */
        y : number;
        dX : number;
        dY : number;
        buttons : number;
        qualifiers : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MouseMove event. 

     / Mouse moved.
    **/
    export function MouseMoveEvent (callback : Atomic.EventCallback<MouseMoveEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MouseMove event. **/ 
    export function MouseMoveEventData (callbackData : MouseMoveEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MouseWheel" **/
    export var MouseWheelEventType : Atomic.EventType;

    /** object returned in the callback for the MouseWheel event.**/
    export interface MouseWheelEvent extends Atomic.EventData {
        wheel : number;
        buttons : number;
        qualifiers : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MouseWheel event. 

     / Mouse wheel moved.
    **/
    export function MouseWheelEvent (callback : Atomic.EventCallback<MouseWheelEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MouseWheel event. **/ 
    export function MouseWheelEventData (callbackData : MouseWheelEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "KeyDown" **/
    export var KeyDownEventType : Atomic.EventType;

    /** object returned in the callback for the KeyDown event.**/
    export interface KeyDownEvent extends Atomic.EventData {
        key : number;
        scancode : number;
        buttons : number;
        qualifiers : number;
        repeat : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the KeyDown event. 

     / Key pressed.
    **/
    export function KeyDownEvent (callback : Atomic.EventCallback<KeyDownEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the KeyDown event. **/ 
    export function KeyDownEventData (callbackData : KeyDownEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "KeyUp" **/
    export var KeyUpEventType : Atomic.EventType;

    /** object returned in the callback for the KeyUp event.**/
    export interface KeyUpEvent extends Atomic.EventData {
        key : number;
        scancode : number;
        buttons : number;
        qualifiers : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the KeyUp event. 

     / Key released.
    **/
    export function KeyUpEvent (callback : Atomic.EventCallback<KeyUpEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the KeyUp event. **/ 
    export function KeyUpEventData (callbackData : KeyUpEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TextInput" **/
    export var TextInputEventType : Atomic.EventType;

    /** object returned in the callback for the TextInput event.**/
    export interface TextInputEvent extends Atomic.EventData {
        text : string;
        buttons : number;
        qualifiers : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TextInput event. 

     / Text input event.
    **/
    export function TextInputEvent (callback : Atomic.EventCallback<TextInputEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the TextInput event. **/ 
    export function TextInputEventData (callbackData : TextInputEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JoystickConnected" **/
    export var JoystickConnectedEventType : Atomic.EventType;

    /** object returned in the callback for the JoystickConnected event.**/
    export interface JoystickConnectedEvent extends Atomic.EventData {
        joystickID : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JoystickConnected event. 

     / Joystick connected.
    **/
    export function JoystickConnectedEvent (callback : Atomic.EventCallback<JoystickConnectedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JoystickConnected event. **/ 
    export function JoystickConnectedEventData (callbackData : JoystickConnectedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JoystickDisconnected" **/
    export var JoystickDisconnectedEventType : Atomic.EventType;

    /** object returned in the callback for the JoystickDisconnected event.**/
    export interface JoystickDisconnectedEvent extends Atomic.EventData {
        joystickID : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JoystickDisconnected event. 

     / Joystick disconnected.
    **/
    export function JoystickDisconnectedEvent (callback : Atomic.EventCallback<JoystickDisconnectedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JoystickDisconnected event. **/ 
    export function JoystickDisconnectedEventData (callbackData : JoystickDisconnectedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JoystickButtonDown" **/
    export var JoystickButtonDownEventType : Atomic.EventType;

    /** object returned in the callback for the JoystickButtonDown event.**/
    export interface JoystickButtonDownEvent extends Atomic.EventData {
        joystickID : number;
        button : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JoystickButtonDown event. 

     / Joystick button pressed.
    **/
    export function JoystickButtonDownEvent (callback : Atomic.EventCallback<JoystickButtonDownEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JoystickButtonDown event. **/ 
    export function JoystickButtonDownEventData (callbackData : JoystickButtonDownEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JoystickButtonUp" **/
    export var JoystickButtonUpEventType : Atomic.EventType;

    /** object returned in the callback for the JoystickButtonUp event.**/
    export interface JoystickButtonUpEvent extends Atomic.EventData {
        joystickID : number;
        button : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JoystickButtonUp event. 

     / Joystick button released.
    **/
    export function JoystickButtonUpEvent (callback : Atomic.EventCallback<JoystickButtonUpEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JoystickButtonUp event. **/ 
    export function JoystickButtonUpEventData (callbackData : JoystickButtonUpEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JoystickAxisMove" **/
    export var JoystickAxisMoveEventType : Atomic.EventType;

    /** object returned in the callback for the JoystickAxisMove event.**/
    export interface JoystickAxisMoveEvent extends Atomic.EventData {
        joystickID : number;
        button : number;
        position : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JoystickAxisMove event. 

     / Joystick axis moved.
    **/
    export function JoystickAxisMoveEvent (callback : Atomic.EventCallback<JoystickAxisMoveEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JoystickAxisMove event. **/ 
    export function JoystickAxisMoveEventData (callbackData : JoystickAxisMoveEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JoystickHatMove" **/
    export var JoystickHatMoveEventType : Atomic.EventType;

    /** object returned in the callback for the JoystickHatMove event.**/
    export interface JoystickHatMoveEvent extends Atomic.EventData {
        joystickID : number;
        button : number;
        position : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JoystickHatMove event. 

     / Joystick POV hat moved.
    **/
    export function JoystickHatMoveEvent (callback : Atomic.EventCallback<JoystickHatMoveEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JoystickHatMove event. **/ 
    export function JoystickHatMoveEventData (callbackData : JoystickHatMoveEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TouchBegin" **/
    export var TouchBeginEventType : Atomic.EventType;

    /** object returned in the callback for the TouchBegin event.**/
    export interface TouchBeginEvent extends Atomic.EventData {
        touchID : number;
        x : number;
        y : number;
        pressure : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TouchBegin event. 

     / Finger pressed on the screen.
    **/
    export function TouchBeginEvent (callback : Atomic.EventCallback<TouchBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the TouchBegin event. **/ 
    export function TouchBeginEventData (callbackData : TouchBeginEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TouchEnd" **/
    export var TouchEndEventType : Atomic.EventType;

    /** object returned in the callback for the TouchEnd event.**/
    export interface TouchEndEvent extends Atomic.EventData {
        touchID : number;
        x : number;
        y : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TouchEnd event. 

     / Finger released from the screen.
    **/
    export function TouchEndEvent (callback : Atomic.EventCallback<TouchEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the TouchEnd event. **/ 
    export function TouchEndEventData (callbackData : TouchEndEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TouchMove" **/
    export var TouchMoveEventType : Atomic.EventType;

    /** object returned in the callback for the TouchMove event.**/
    export interface TouchMoveEvent extends Atomic.EventData {
        touchID : number;
        x : number;
        y : number;
        dX : number;
        dY : number;
        pressure : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TouchMove event. 

     / Finger moved on the screen.
    **/
    export function TouchMoveEvent (callback : Atomic.EventCallback<TouchMoveEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the TouchMove event. **/ 
    export function TouchMoveEventData (callbackData : TouchMoveEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "GestureRecorded" **/
    export var GestureRecordedEventType : Atomic.EventType;

    /** object returned in the callback for the GestureRecorded event.**/
    export interface GestureRecordedEvent extends Atomic.EventData {
        gestureID : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the GestureRecorded event. 

     / A touch gesture finished recording.
    **/
    export function GestureRecordedEvent (callback : Atomic.EventCallback<GestureRecordedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the GestureRecorded event. **/ 
    export function GestureRecordedEventData (callbackData : GestureRecordedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "GestureInput" **/
    export var GestureInputEventType : Atomic.EventType;

    /** object returned in the callback for the GestureInput event.**/
    export interface GestureInputEvent extends Atomic.EventData {
        gestureID : number;
        centerX : number;
        centerY : number;
        numFingers : number;
        error : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the GestureInput event. 

     / A recognized touch gesture was input by the user.
    **/
    export function GestureInputEvent (callback : Atomic.EventCallback<GestureInputEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the GestureInput event. **/ 
    export function GestureInputEventData (callbackData : GestureInputEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MultiGesture" **/
    export var MultiGestureEventType : Atomic.EventType;

    /** object returned in the callback for the MultiGesture event.**/
    export interface MultiGestureEvent extends Atomic.EventData {
        centerX : number;
        centerY : number;
        numFingers : number;
        dTheta : number;
        dDist : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MultiGesture event. 

     / Pinch/rotate multi-finger touch gesture motion update.
    **/
    export function MultiGestureEvent (callback : Atomic.EventCallback<MultiGestureEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MultiGesture event. **/ 
    export function MultiGestureEventData (callbackData : MultiGestureEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "DropFile" **/
    export var DropFileEventType : Atomic.EventType;

    /** object returned in the callback for the DropFile event.**/
    export interface DropFileEvent extends Atomic.EventData {
        fileName : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the DropFile event. 

     / A file was drag-dropped into the application window.
    **/
    export function DropFileEvent (callback : Atomic.EventCallback<DropFileEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the DropFile event. **/ 
    export function DropFileEventData (callbackData : DropFileEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "InputFocus" **/
    export var InputFocusEventType : Atomic.EventType;

    /** object returned in the callback for the InputFocus event.**/
    export interface InputFocusEvent extends Atomic.EventData {
        focus : boolean;
        minimized : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the InputFocus event. 

     / Application input focus or minimization changed.
    **/
    export function InputFocusEvent (callback : Atomic.EventCallback<InputFocusEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the InputFocus event. **/ 
    export function InputFocusEventData (callbackData : InputFocusEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MouseVisibleChanged" **/
    export var MouseVisibleChangedEventType : Atomic.EventType;

    /** object returned in the callback for the MouseVisibleChanged event.**/
    export interface MouseVisibleChangedEvent extends Atomic.EventData {
        visible : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MouseVisibleChanged event. 

     / OS mouse cursor visibility changed.
    **/
    export function MouseVisibleChangedEvent (callback : Atomic.EventCallback<MouseVisibleChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MouseVisibleChanged event. **/ 
    export function MouseVisibleChangedEventData (callbackData : MouseVisibleChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MouseModeChanged" **/
    export var MouseModeChangedEventType : Atomic.EventType;

    /** object returned in the callback for the MouseModeChanged event.**/
    export interface MouseModeChangedEvent extends Atomic.EventData {
        /** Unmapped Native Type: MouseMode */
        mode : any;
        mouseLocked : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MouseModeChanged event. 

     / Mouse mode changed.
    **/
    export function MouseModeChangedEvent (callback : Atomic.EventCallback<MouseModeChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MouseModeChanged event. **/ 
    export function MouseModeChangedEventData (callbackData : MouseModeChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ExitRequested" **/
    export var ExitRequestedEventType : Atomic.EventType;

    /** object returned in the callback for the ExitRequested event.**/
    export interface ExitRequestedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ExitRequested event. 

     / Application exit requested.
    **/
    export function ExitRequestedEvent (callback : Atomic.EventCallback<ExitRequestedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ExitRequested event. **/ 
    export function ExitRequestedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SDLRawInput" **/
    export var SDLRawInputEventType : Atomic.EventType;

    /** object returned in the callback for the SDLRawInput event.**/
    export interface SDLRawInputEvent extends Atomic.EventData {
        /** Unmapped Native Type: SDL_Event */
        sDLEvent : any;
        consumed : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SDLRawInput event. 

     / Raw SDL input event.
    **/
    export function SDLRawInputEvent (callback : Atomic.EventCallback<SDLRawInputEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SDLRawInput event. **/ 
    export function SDLRawInputEventData (callbackData : SDLRawInputEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "InputBegin" **/
    export var InputBeginEventType : Atomic.EventType;

    /** object returned in the callback for the InputBegin event.**/
    export interface InputBeginEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the InputBegin event. 

     / Input handling begins.
    **/
    export function InputBeginEvent (callback : Atomic.EventCallback<InputBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the InputBegin event. **/ 
    export function InputBeginEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "InputEnd" **/
    export var InputEndEventType : Atomic.EventType;

    /** object returned in the callback for the InputEnd event.**/
    export interface InputEndEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the InputEnd event. 

     / Input handling ends.
    **/
    export function InputEndEvent (callback : Atomic.EventCallback<InputEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the InputEnd event. **/ 
    export function InputEndEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PauseResumeRequested" **/
    export var PauseResumeRequestedEventType : Atomic.EventType;

    /** object returned in the callback for the PauseResumeRequested event.**/
    export interface PauseResumeRequestedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PauseResumeRequested event. 

     / Application pause requested.
    **/
    export function PauseResumeRequestedEvent (callback : Atomic.EventCallback<PauseResumeRequestedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the PauseResumeRequested event. **/ 
    export function PauseResumeRequestedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PauseStepRequested" **/
    export var PauseStepRequestedEventType : Atomic.EventType;

    /** object returned in the callback for the PauseStepRequested event.**/
    export interface PauseStepRequestedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PauseStepRequested event. 

     / Application step frame while paused requested.
    **/
    export function PauseStepRequestedEvent (callback : Atomic.EventCallback<PauseStepRequestedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the PauseStepRequested event. **/ 
    export function PauseStepRequestedEventData () : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Javascript
//----------------------------------------------------


   export class JSComponent extends ScriptComponent {

      updateEventMask: number;
      delayedStartCalled: boolean;
      instanceInitialized: boolean;
      componentFile: ScriptComponentFile;
      componentClassName: string;

      /**  Construct. */
      constructor();

      /**  Match script name */
      matchScriptName(path: string): boolean;
      /**  Handle enabled/disabled state change. Changes update event subscription. */
      onSetEnabled(): void;
      /**  Set what update events should be subscribed to. Use this for optimization: by default all are in use. Note that this is not an attribute and is not saved or network-serialized, therefore it should always be called eg. in the subclass constructor. */
      setUpdateEventMask(mask: number): void;
      /**  Return what update events are subscribed to. */
      getUpdateEventMask(): number;
      /**  Return whether the DelayedStart() function has been called. */
      isDelayedStartCalled(): boolean;
      setDestroyed(): void;
      isInstanceInitialized(): boolean;
      initInstance(hasArgs?: boolean, argIdx?: number): void;
      getComponentFile(): ScriptComponentFile;
      /**  Set script attribute. */
      setComponentFile(cfile: JSComponentFile): void;
      getComponentClassName(): string;

   }

   export class JSComponentFile extends ScriptComponentFile {

      scriptClass: boolean;
      typeScriptClass: boolean;

      /**  Construct. */
      constructor();

      getScriptClass(): boolean;
      /**  Returns true is this component file containes a TypeScript class */
      getTypeScriptClass(): boolean;
      createJSComponent(): JSComponent;
      pushModule(): boolean;

   }

   export class JSEventHelper extends AObject {

      /**  Construct. */
      constructor(object: AObject);

      clear(): void;

   }

   export class ScriptObject extends AObject {

      /**  Construct. */
      constructor();


   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ObjectAdded" **/
    export var ObjectAddedEventType : Atomic.EventType;

    /** object returned in the callback for the ObjectAdded event.**/
    export interface ObjectAddedEvent extends Atomic.EventData {
        object : Atomic.AObject;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ObjectAdded event. **/
    export function ObjectAddedEvent (callback : Atomic.EventCallback<ObjectAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ObjectAdded event. **/ 
    export function ObjectAddedEventData (callbackData : ObjectAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ObjectRemoved" **/
    export var ObjectRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the ObjectRemoved event.**/
    export interface ObjectRemovedEvent extends Atomic.EventData {
        object : Atomic.AObject;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ObjectRemoved event. **/
    export function ObjectRemovedEvent (callback : Atomic.EventCallback<ObjectRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ObjectRemoved event. **/ 
    export function ObjectRemovedEventData (callbackData : ObjectRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JSError" **/
    export var JSErrorEventType : Atomic.EventType;

    /** object returned in the callback for the JSError event.**/
    export interface JSErrorEvent extends Atomic.EventData {
        errorName : string;
        errorMessage : string;
        errorFileName : string;
        errorLineNumber : number;
        errorStack : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JSError event. **/
    export function JSErrorEvent (callback : Atomic.EventCallback<JSErrorEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JSError event. **/ 
    export function JSErrorEventData (callbackData : JSErrorEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "JSPrint" **/
    export var JSPrintEventType : Atomic.EventType;

    /** object returned in the callback for the JSPrint event.**/
    export interface JSPrintEvent extends Atomic.EventData {
        text : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the JSPrint event. **/
    export function JSPrintEvent (callback : Atomic.EventCallback<JSPrintEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the JSPrint event. **/ 
    export function JSPrintEventData (callbackData : JSPrintEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCJSError" **/
    export var IPCJSErrorEventType : Atomic.EventType;

    /** object returned in the callback for the IPCJSError event.**/
    export interface IPCJSErrorEvent extends Atomic.EventData {
        errorName : string;
        errorMessage : string;
        errorFileName : string;
        errorLineNumber : number;
        errorStack : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCJSError event. **/
    export function IPCJSErrorEvent (callback : Atomic.EventCallback<IPCJSErrorEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCJSError event. **/ 
    export function IPCJSErrorEventData (callbackData : IPCJSErrorEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Math
//----------------------------------------------------


   export class BoundingBox {


   }

   export class Color {


   }

   export class Frustum {


   }

   export class IntRect {


   }

   export class IntVector2 {


   }

   export class Quaternion {


   }

   export class Rect {


   }

   export class Vector2 {


   }

   export class Vector3 {


   }

   export class Vector4 {


   }



//----------------------------------------------------
// MODULE: Metrics
//----------------------------------------------------


   export class Metrics extends AObject {

      enabled: boolean;

      /**  Construct. */
      constructor();

      enable(): boolean;
      getEnabled(): boolean;
      capture(snapshot: MetricsSnapshot): void;

   }

   export class MetricsSnapshot extends RefCounted {

      constructor();

      printData(columns?: number, minCount?: number): string;
      clear(): void;

   }



//----------------------------------------------------
// MODULE: Navigation
//----------------------------------------------------


   export class CrowdAgent extends Component {

      targetPosition: Vector3;
      targetVelocity: Vector3;
      updateNodePosition: boolean;
      maxAccel: number;
      maxSpeed: number;
      radius: number;
      height: number;
      queryFilterType: number;
      obstacleAvoidanceType: number;
      navigationQuality: NavigationQuality;
      navigationPushiness: NavigationPushiness;
      position: Vector3;
      desiredVelocity: Vector3;
      actualVelocity: Vector3;
      requestedTargetType: CrowdAgentRequestedTarget;
      agentState: CrowdAgentState;
      targetState: CrowdAgentTargetState;
      agentCrowdId: number;
      inCrowd: boolean;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Submit a new target position request for this agent. */
      setTargetPosition(position: Vector3): void;
      /**  Submit a new target velocity request for this agent. */
      setTargetVelocity(velocity: Vector3): void;
      /**  Reset any target request for the specified agent. Note that the agent will continue to move into the current direction; set a zero target velocity to actually stop. */
      resetTarget(): void;
      /**  Update the node position. When set to false, the node position should be updated by other means (e.g. using Physics) in response to the E_CROWD_AGENT_REPOSITION event. */
      setUpdateNodePosition(unodepos: boolean): void;
      /**  Set the agent's max acceleration. */
      setMaxAccel(maxAccel: number): void;
      /**  Set the agent's max velocity. */
      setMaxSpeed(maxSpeed: number): void;
      /**  Set the agent's radius. */
      setRadius(radius: number): void;
      /**  Set the agent's height. */
      setHeight(height: number): void;
      /**  Set the agent's query filter type. */
      setQueryFilterType(queryFilterType: number): void;
      /**  Set the agent's obstacle avoidance type. */
      setObstacleAvoidanceType(obstacleAvoidanceType: number): void;
      /**  Set the agent's navigation quality. */
      setNavigationQuality(val: NavigationQuality): void;
      /**  Set the agent's navigation pushiness. */
      setNavigationPushiness(val: NavigationPushiness): void;
      /**  Return the agent's position. */
      getPosition(): Vector3;
      /**  Return the agent's desired velocity. */
      getDesiredVelocity(): Vector3;
      /**  Return the agent's actual velocity. */
      getActualVelocity(): Vector3;
      /**  Return the agent's requested target position. */
      getTargetPosition(): Vector3;
      /**  Return the agent's requested target velocity. */
      getTargetVelocity(): Vector3;
      /**  Return the agent's requested target type, if any. */
      getRequestedTargetType(): CrowdAgentRequestedTarget;
      /**  Return the agent's  state. */
      getAgentState(): CrowdAgentState;
      /**  Return the agent's target state. */
      getTargetState(): CrowdAgentTargetState;
      /**  Return true when the node's position should be updated by the CrowdManager. */
      getUpdateNodePosition(): boolean;
      /**  Return the agent id. */
      getAgentCrowdId(): number;
      /**  Get the agent's max acceleration. */
      getMaxAccel(): number;
      /**  Get the agent's max velocity. */
      getMaxSpeed(): number;
      /**  Get the agent's radius. */
      getRadius(): number;
      /**  Get the agent's height. */
      getHeight(): number;
      /**  Get the agent's query filter type. */
      getQueryFilterType(): number;
      /**  Get the agent's obstacle avoidance type. */
      getObstacleAvoidanceType(): number;
      /**  Get the agent's navigation quality. */
      getNavigationQuality(): NavigationQuality;
      /**  Get the agent's navigation pushiness. */
      getNavigationPushiness(): NavigationPushiness;
      /**  Return true when the agent has a target. */
      hasRequestedTarget(): boolean;
      /**  Return true when the agent has arrived at its target. */
      hasArrived(): boolean;
      /**  Return true when the agent is in crowd (being managed by a crowd manager). */
      isInCrowd(): boolean;

   }

   export class CrowdManager extends Component {

      maxAgents: number;
      maxAgentRadius: number;
      navigationMesh: NavigationMesh;
      queryFilterTypesAttr: ScriptVector;
      obstacleAvoidanceTypesAttr: ScriptVector;
      numQueryFilterTypes: number;
      numObstacleAvoidanceTypes: number;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Set the crowd target position. The target position is set to all crowd agents found in the specified node. Defaulted to scene node. */
      setCrowdTarget(position: Vector3, node?: Node): void;
      /**  Set the crowd move velocity. The move velocity is applied to all crowd agents found in the specified node. Defaulted to scene node. */
      setCrowdVelocity(velocity: Vector3, node?: Node): void;
      /**  Reset any crowd target for all crowd agents found in the specified node. Defaulted to scene node. */
      resetCrowdTarget(node?: Node): void;
      /**  Set the maximum number of agents. */
      setMaxAgents(maxAgents: number): void;
      /**  Set the maximum radius of any agent. */
      setMaxAgentRadius(maxAgentRadius: number): void;
      /**  Assigns the navigation mesh for the crowd. */
      setNavigationMesh(navMesh: NavigationMesh): void;
      /**  Set all the query filter types configured in the crowd based on the corresponding attribute. */
      setQueryFilterTypesAttr(value: ScriptVector): void;
      /**  Set the include flags for the specified query filter type. */
      setIncludeFlags(queryFilterType: number, flags: number): void;
      /**  Set the exclude flags for the specified query filter type. */
      setExcludeFlags(queryFilterType: number, flags: number): void;
      /**  Set the cost of an area for the specified query filter type. */
      setAreaCost(queryFilterType: number, areaID: number, cost: number): void;
      /**  Set all the obstacle avoidance types configured in the crowd based on the corresponding attribute. */
      setObstacleAvoidanceTypesAttr(value: ScriptVector): void;
      /**  Find the nearest point on the navigation mesh to a given point using the crowd initialized query extent (based on maxAgentRadius) and the specified query filter type. */
      findNearestPoint(point: Vector3, queryFilterType: number): Vector3;
      /**  Try to move along the surface from one point to another using the crowd initialized query extent (based on maxAgentRadius) and the specified query filter type. */
      moveAlongSurface(start: Vector3, end: Vector3, queryFilterType: number, maxVisited?: number): Vector3;
      /**  Return a random point on the navigation mesh using the crowd initialized query extent (based on maxAgentRadius) and the specified query filter type. */
      getRandomPoint(queryFilterType: number): Vector3;
      /**  Return a random point on the navigation mesh within a circle using the crowd initialized query extent (based on maxAgentRadius) and the specified query filter type. The circle radius is only a guideline and in practice the returned point may be further away. */
      getRandomPointInCircle(center: Vector3, radius: number, queryFilterType: number): Vector3;
      /**  Return distance to wall from a point using the crowd initialized query extent (based on maxAgentRadius) and the specified query filter type. Maximum search radius must be specified. */
      getDistanceToWall(point: Vector3, radius: number, queryFilterType: number): number;
      /**  Perform a walkability raycast on the navigation mesh between start and end using the crowd initialized query extent (based on maxAgentRadius) and the specified query filter type. Return the point where a wall was hit, or the end point if no walls. */
      raycast(start: Vector3, end: Vector3, queryFilterType: number): Vector3;
      /**  Get the maximum number of agents. */
      getMaxAgents(): number;
      /**  Get the maximum radius of any agent. */
      getMaxAgentRadius(): number;
      /**  Get the Navigation mesh assigned to the crowd. */
      getNavigationMesh(): NavigationMesh;
      /**  Get the number of configured query filter types. */
      getNumQueryFilterTypes(): number;
      /**  Get the number of configured area in the specified query filter type. */
      getNumAreas(queryFilterType: number): number;
      /**  Return all the filter types configured in the crowd as attribute. */
      getQueryFilterTypesAttr(outVector: ScriptVector): void;
      /**  Get the include flags for the specified query filter type. */
      getIncludeFlags(queryFilterType: number): number;
      /**  Get the exclude flags for the specified query filter type. */
      getExcludeFlags(queryFilterType: number): number;
      /**  Get the cost of an area for the specified query filter type. */
      getAreaCost(queryFilterType: number, areaID: number): number;
      /**  Get the number of configured obstacle avoidance types. */
      getNumObstacleAvoidanceTypes(): number;
      /**  Return all the obstacle avoidance types configured in the crowd as attribute. */
      getObstacleAvoidanceTypesAttr(outVector: ScriptVector): void;

   }

   export class DynamicNavigationMesh extends NavigationMesh {

      maxObstacles: number;
      maxLayers: number;
      drawObstacles: boolean;

      /**  Constructor. */
      constructor();

      /**  Set the maximum number of obstacles allowed. */
      setMaxObstacles(maxObstacles: number): void;
      /**  Set the maximum number of layers that navigation construction can create. */
      setMaxLayers(maxLayers: number): void;
      /**  Return the maximum number of obstacles allowed. */
      getMaxObstacles(): number;
      /**  Return the maximum number of layers permitted to build. */
      getMaxLayers(): number;
      /**  Draw debug geometry for Obstacles. */
      setDrawObstacles(enable: boolean): void;
      /**  Return whether to draw Obstacles. */
      getDrawObstacles(): boolean;

   }

   export class NavArea extends Component {

      areaID: number;
      boundingBox: BoundingBox;
      worldBoundingBox: BoundingBox;

      /**  Construct. */
      constructor();

      /**  Render debug geometry for the bounds. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Get the area id for this volume. */
      getAreaID(): number;
      /**  Set the area id for this volume. */
      setAreaID(newID: number): void;
      /**  Get the bounding box of this navigation area, in local space. */
      getBoundingBox(): BoundingBox;
      /**  Set the bounding box of this area, in local space. */
      setBoundingBox(bnds: BoundingBox): void;
      /**  Get the bounds of this navigation area in world space. */
      getWorldBoundingBox(): BoundingBox;

   }

   export class Navigable extends Component {

      recursive: boolean;

      /**  Construct. */
      constructor();

      /**  Set whether geometry is automatically collected from child nodes. Default true. */
      setRecursive(enable: boolean): void;
      /**  Return whether geometry is automatically collected from child nodes. */
      isRecursive(): boolean;

   }

   export class NavigationMesh extends Component {

      tileSize: number;
      cellSize: number;
      cellHeight: number;
      agentHeight: number;
      agentRadius: number;
      agentMaxClimb: number;
      agentMaxSlope: number;
      regionMinSize: number;
      regionMergeSize: number;
      edgeMaxLength: number;
      edgeMaxError: number;
      detailSampleDistance: number;
      detailSampleMaxError: number;
      padding: Vector3;
      randomPoint: Vector3;
      meshName: string;
      initialized: boolean;
      boundingBox: BoundingBox;
      worldBoundingBox: BoundingBox;
      numTiles: IntVector2;
      partitionType: NavmeshPartitionType;
      drawOffMeshConnections: boolean;
      drawNavAreas: boolean;

      /**  Construct. */
      constructor();

      /**  Set tile size. */
      setTileSize(size: number): void;
      /**  Set cell size. */
      setCellSize(size: number): void;
      /**  Set cell height. */
      setCellHeight(height: number): void;
      /**  Set navigation agent height. */
      setAgentHeight(height: number): void;
      /**  Set navigation agent radius. */
      setAgentRadius(radius: number): void;
      /**  Set navigation agent max vertical climb. */
      setAgentMaxClimb(maxClimb: number): void;
      /**  Set navigation agent max slope. */
      setAgentMaxSlope(maxSlope: number): void;
      /**  Set region minimum size. */
      setRegionMinSize(size: number): void;
      /**  Set region merge size. */
      setRegionMergeSize(size: number): void;
      /**  Set edge max length. */
      setEdgeMaxLength(length: number): void;
      /**  Set edge max error. */
      setEdgeMaxError(error: number): void;
      /**  Set detail sampling distance. */
      setDetailSampleDistance(distance: number): void;
      /**  Set detail sampling maximum error. */
      setDetailSampleMaxError(error: number): void;
      /**  Set padding of the navigation mesh bounding box. Having enough padding allows to add geometry on the extremities of the navigation mesh when doing partial rebuilds. */
      setPadding(padding: Vector3): void;
      /**  Set the cost of an area. */
      setAreaCost(areaID: number, cost: number): void;
      /**  Rebuild the navigation mesh. Return true if successful. */
      build(): boolean;
      /**  Find the nearest point on the navigation mesh to a given point. Extents specifies how far out from the specified point to check along each axis. */
      findNearestPoint(point: Vector3, extents?: Vector3): Vector3;
      /**  Try to move along the surface from one point to another. */
      moveAlongSurface(start: Vector3, end: Vector3, extents?: Vector3, maxVisited?: number): Vector3;
      /**  Return a random point on the navigation mesh. */
      getRandomPoint(): Vector3;
      /**  Return a random point on the navigation mesh within a circle. The circle radius is only a guideline and in practice the returned point may be further away. */
      getRandomPointInCircle(center: Vector3, radius: number, extents?: Vector3): Vector3;
      /**  Return distance to wall from a point. Maximum search radius must be specified. */
      getDistanceToWall(point: Vector3, radius: number, extents?: Vector3): number;
      /**  Perform a walkability raycast on the navigation mesh between start and end and return the point where a wall was hit, or the end point if no walls. */
      raycast(start: Vector3, end: Vector3, extents?: Vector3): Vector3;
      /**  Return the given name of this navigation mesh. */
      getMeshName(): string;
      /**  Set the name of this navigation mesh. */
      setMeshName(newName: string): void;
      /**  Return tile size. */
      getTileSize(): number;
      /**  Return cell size. */
      getCellSize(): number;
      /**  Return cell height. */
      getCellHeight(): number;
      /**  Return navigation agent height. */
      getAgentHeight(): number;
      /**  Return navigation agent radius. */
      getAgentRadius(): number;
      /**  Return navigation agent max vertical climb. */
      getAgentMaxClimb(): number;
      /**  Return navigation agent max slope. */
      getAgentMaxSlope(): number;
      /**  Return region minimum size. */
      getRegionMinSize(): number;
      /**  Return region merge size. */
      getRegionMergeSize(): number;
      /**  Return edge max length. */
      getEdgeMaxLength(): number;
      /**  Return edge max error. */
      getEdgeMaxError(): number;
      /**  Return detail sampling distance. */
      getDetailSampleDistance(): number;
      /**  Return detail sampling maximum error. */
      getDetailSampleMaxError(): number;
      /**  Return navigation mesh bounding box padding. */
      getPadding(): Vector3;
      /**  Get the current cost of an area */
      getAreaCost(areaID: number): number;
      /**  Return whether has been initialized with valid navigation data. */
      isInitialized(): boolean;
      /**  Return local space bounding box of the navigation mesh. */
      getBoundingBox(): BoundingBox;
      /**  Return world space bounding box of the navigation mesh. */
      getWorldBoundingBox(): BoundingBox;
      /**  Return number of tiles. */
      getNumTiles(): IntVector2;
      /**  Set the partition type used for polygon generation. */
      setPartitionType(aType: NavmeshPartitionType): void;
      /**  Return Partition Type. */
      getPartitionType(): NavmeshPartitionType;
      /**  Draw debug geometry for OffMeshConnection components. */
      setDrawOffMeshConnections(enable: boolean): void;
      /**  Return whether to draw OffMeshConnection components. */
      getDrawOffMeshConnections(): boolean;
      /**  Draw debug geometry for NavArea components. */
      setDrawNavAreas(enable: boolean): void;
      /**  Return whether to draw NavArea components. */
      getDrawNavAreas(): boolean;

   }

   export class Obstacle extends Component {

      height: number;
      radius: number;
      obstacleID: number;

      /**  Construct. */
      constructor();

      /**  Update the owning mesh when enabled status has changed. */
      onSetEnabled(): void;
      /**  Get the height of this obstacle. */
      getHeight(): number;
      /**  Set the height of this obstacle. */
      setHeight(height: number): void;
      /**  Get the blocking radius of this obstacle. */
      getRadius(): number;
      /**  Set the blocking radius of this obstacle. */
      setRadius(radius: number): void;
      /**  Get the internal obstacle ID. */
      getObstacleID(): number;

   }

   export class OffMeshConnection extends Component {

      endPoint: Node;
      radius: number;
      bidirectional: boolean;
      mask: number;
      areaID: number;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set endpoint node. */
      setEndPoint(node: Node): void;
      /**  Set radius. */
      setRadius(radius: number): void;
      /**  Set bidirectional flag. Default true. */
      setBidirectional(enabled: boolean): void;
      /**  Set a user assigned mask */
      setMask(newMask: number): void;
      /**  Sets the assigned area Id for the connection */
      setAreaID(newAreaID: number): void;
      /**  Return endpoint node. */
      getEndPoint(): Node;
      /**  Return radius. */
      getRadius(): number;
      /**  Return whether is bidirectional. */
      isBidirectional(): boolean;
      /**  Return the user assigned mask */
      getMask(): number;
      /**  Return the user assigned area ID */
      getAreaID(): number;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NavigationMeshRebuilt" **/
    export var NavigationMeshRebuiltEventType : Atomic.EventType;

    /** object returned in the callback for the NavigationMeshRebuilt event.**/
    export interface NavigationMeshRebuiltEvent extends Atomic.EventData {
        node : Atomic.Node;
        mesh : Atomic.NavigationMesh;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NavigationMeshRebuilt event. 

     / Complete rebuild of navigation mesh.
    **/
    export function NavigationMeshRebuiltEvent (callback : Atomic.EventCallback<NavigationMeshRebuiltEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NavigationMeshRebuilt event. **/ 
    export function NavigationMeshRebuiltEventData (callbackData : NavigationMeshRebuiltEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NavigationAreaRebuilt" **/
    export var NavigationAreaRebuiltEventType : Atomic.EventType;

    /** object returned in the callback for the NavigationAreaRebuilt event.**/
    export interface NavigationAreaRebuiltEvent extends Atomic.EventData {
        node : Atomic.Node;
        mesh : Atomic.NavigationMesh;
        boundsMin : Atomic.Vector3;
        boundsMax : Atomic.Vector3;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NavigationAreaRebuilt event. 

     / Partial bounding box rebuild of navigation mesh.
    **/
    export function NavigationAreaRebuiltEvent (callback : Atomic.EventCallback<NavigationAreaRebuiltEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NavigationAreaRebuilt event. **/ 
    export function NavigationAreaRebuiltEventData (callbackData : NavigationAreaRebuiltEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentFormation" **/
    export var CrowdAgentFormationEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentFormation event.**/
    export interface CrowdAgentFormationEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        index : number;
        size : number;
        position : Atomic.Vector3;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentFormation event. 

     / Crowd agent formation.
    **/
    export function CrowdAgentFormationEvent (callback : Atomic.EventCallback<CrowdAgentFormationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentFormation event. **/ 
    export function CrowdAgentFormationEventData (callbackData : CrowdAgentFormationEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentNodeFormation" **/
    export var CrowdAgentNodeFormationEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentNodeFormation event.**/
    export interface CrowdAgentNodeFormationEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        index : number;
        size : number;
        position : Atomic.Vector3;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentNodeFormation event. 

     / Crowd agent formation specific to a node.
    **/
    export function CrowdAgentNodeFormationEvent (callback : Atomic.EventCallback<CrowdAgentNodeFormationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentNodeFormation event. **/ 
    export function CrowdAgentNodeFormationEventData (callbackData : CrowdAgentNodeFormationEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentReposition" **/
    export var CrowdAgentRepositionEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentReposition event.**/
    export interface CrowdAgentRepositionEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        position : Atomic.Vector3;
        velocity : Atomic.Vector3;
        arrived : boolean;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentReposition event. 

     / Crowd agent has been repositioned.
    **/
    export function CrowdAgentRepositionEvent (callback : Atomic.EventCallback<CrowdAgentRepositionEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentReposition event. **/ 
    export function CrowdAgentRepositionEventData (callbackData : CrowdAgentRepositionEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentNodeReposition" **/
    export var CrowdAgentNodeRepositionEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentNodeReposition event.**/
    export interface CrowdAgentNodeRepositionEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        position : Atomic.Vector3;
        velocity : Atomic.Vector3;
        arrived : boolean;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentNodeReposition event. 

     / Crowd agent has been repositioned, specific to a node
    **/
    export function CrowdAgentNodeRepositionEvent (callback : Atomic.EventCallback<CrowdAgentNodeRepositionEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentNodeReposition event. **/ 
    export function CrowdAgentNodeRepositionEventData (callbackData : CrowdAgentNodeRepositionEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentFailure" **/
    export var CrowdAgentFailureEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentFailure event.**/
    export interface CrowdAgentFailureEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        position : Atomic.Vector3;
        velocity : Atomic.Vector3;
        crowdAgentState : number;
        crowdTargetState : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentFailure event. 

     / Crowd agent's internal state has become invalidated. This is a special case of CrowdAgentStateChanged event.
    **/
    export function CrowdAgentFailureEvent (callback : Atomic.EventCallback<CrowdAgentFailureEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentFailure event. **/ 
    export function CrowdAgentFailureEventData (callbackData : CrowdAgentFailureEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentNodeFailure" **/
    export var CrowdAgentNodeFailureEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentNodeFailure event.**/
    export interface CrowdAgentNodeFailureEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        position : Atomic.Vector3;
        velocity : Atomic.Vector3;
        crowdAgentState : number;
        crowdTargetState : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentNodeFailure event. 

     / Crowd agent's internal state has become invalidated. This is a special case of CrowdAgentStateChanged event.
    **/
    export function CrowdAgentNodeFailureEvent (callback : Atomic.EventCallback<CrowdAgentNodeFailureEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentNodeFailure event. **/ 
    export function CrowdAgentNodeFailureEventData (callbackData : CrowdAgentNodeFailureEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentStateChanged" **/
    export var CrowdAgentStateChangedEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentStateChanged event.**/
    export interface CrowdAgentStateChangedEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        position : Atomic.Vector3;
        velocity : Atomic.Vector3;
        crowdAgentState : number;
        crowdTargetState : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentStateChanged event. 

     / Crowd agent's state has been changed.
    **/
    export function CrowdAgentStateChangedEvent (callback : Atomic.EventCallback<CrowdAgentStateChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentStateChanged event. **/ 
    export function CrowdAgentStateChangedEventData (callbackData : CrowdAgentStateChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CrowdAgentNodeStateChanged" **/
    export var CrowdAgentNodeStateChangedEventType : Atomic.EventType;

    /** object returned in the callback for the CrowdAgentNodeStateChanged event.**/
    export interface CrowdAgentNodeStateChangedEvent extends Atomic.EventData {
        node : Atomic.Node;
        crowdAgent : Atomic.CrowdAgent;
        position : Atomic.Vector3;
        velocity : Atomic.Vector3;
        crowdAgentState : number;
        crowdTargetState : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CrowdAgentNodeStateChanged event. 

     / Crowd agent's state has been changed.
    **/
    export function CrowdAgentNodeStateChangedEvent (callback : Atomic.EventCallback<CrowdAgentNodeStateChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CrowdAgentNodeStateChanged event. **/ 
    export function CrowdAgentNodeStateChangedEventData (callbackData : CrowdAgentNodeStateChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NavigationObstacleAdded" **/
    export var NavigationObstacleAddedEventType : Atomic.EventType;

    /** object returned in the callback for the NavigationObstacleAdded event.**/
    export interface NavigationObstacleAddedEvent extends Atomic.EventData {
        node : Atomic.Node;
        obstacle : Atomic.Obstacle;
        position : Atomic.Vector3;
        radius : number;
        height : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NavigationObstacleAdded event. 

     / Addition of obstacle to dynamic navigation mesh.
    **/
    export function NavigationObstacleAddedEvent (callback : Atomic.EventCallback<NavigationObstacleAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NavigationObstacleAdded event. **/ 
    export function NavigationObstacleAddedEventData (callbackData : NavigationObstacleAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NavigationObstacleRemoved" **/
    export var NavigationObstacleRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the NavigationObstacleRemoved event.**/
    export interface NavigationObstacleRemovedEvent extends Atomic.EventData {
        node : Atomic.Node;
        obstacle : Atomic.Obstacle;
        position : Atomic.Vector3;
        radius : number;
        height : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NavigationObstacleRemoved event. 

     / Removal of obstacle from dynamic navigation mesh.
    **/
    export function NavigationObstacleRemovedEvent (callback : Atomic.EventCallback<NavigationObstacleRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NavigationObstacleRemoved event. **/ 
    export function NavigationObstacleRemovedEventData (callbackData : NavigationObstacleRemovedEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Network
//----------------------------------------------------


   export class Connection extends AObject {

      scene: Scene;
      position: Vector3;
      rotation: Quaternion;
      connectPending: boolean;
      logStatistics: boolean;
      timeStamp: number;
      client: boolean;
      connected: boolean;
      sceneLoaded: boolean;
      address: string;
      port: number;
      roundTripTime: number;
      lastHeardTime: number;
      bytesInPerSec: number;
      bytesOutPerSec: number;
      packetsInPerSec: number;
      packetsOutPerSec: number;
      numDownloads: number;
      downloadName: string;
      downloadProgress: number;

      constructor();

      /**  Assign scene. On the server, this will cause the client to load it. */
      setScene(newScene: Scene): void;
      /**  Set the observer position for interest management, to be sent to the server. */
      setPosition(position: Vector3): void;
      /**  Set the observer rotation for interest management, to be sent to the server. Note: not used by the NetworkPriority component. */
      setRotation(rotation: Quaternion): void;
      /**  Set the connection pending status. Called by Network. */
      setConnectPending(connectPending: boolean): void;
      /**  Set whether to log data in/out statistics. */
      setLogStatistics(enable: boolean): void;
      /**  Disconnect. If wait time is non-zero, will block while waiting for disconnect to finish. */
      disconnect(waitMSec?: number): void;
      /**  Send scene update messages. Called by Network. */
      sendServerUpdate(): void;
      /**  Send latest controls from the client. Called by Network. */
      sendClientUpdate(): void;
      /**  Send queued remote events. Called by Network. */
      sendRemoteEvents(): void;
      /**  Send package files to client. Called by network. */
      sendPackages(): void;
      /**  Process pending latest data for nodes and components. */
      processPendingLatestData(): void;
      /**  Return the scene used by this connection. */
      getScene(): Scene;
      /**  Return the controls timestamp, sent from client to server along each control update. */
      getTimeStamp(): number;
      /**  Return the observer position sent by the client for interest management. */
      getPosition(): Vector3;
      /**  Return the observer rotation sent by the client for interest management. */
      getRotation(): Quaternion;
      /**  Return whether is a client connection. */
      isClient(): boolean;
      /**  Return whether is fully connected. */
      isConnected(): boolean;
      /**  Return whether connection is pending. */
      isConnectPending(): boolean;
      /**  Return whether the scene is loaded and ready to receive server updates. */
      isSceneLoaded(): boolean;
      /**  Return whether to log data in/out statistics. */
      getLogStatistics(): boolean;
      /**  Return remote address. */
      getAddress(): string;
      /**  Return remote port. */
      getPort(): number;
      /**  Return the connection's round trip time in milliseconds. */
      getRoundTripTime(): number;
      /**  Return the time since last received data from the remote host in milliseconds. */
      getLastHeardTime(): number;
      /**  Return bytes received per second. */
      getBytesInPerSec(): number;
      /**  Return bytes sent per second. */
      getBytesOutPerSec(): number;
      /**  Return packets received per second. */
      getPacketsInPerSec(): number;
      /**  Return packets sent per second. */
      getPacketsOutPerSec(): number;
      /**  Return an address:port string. */
      toString(): string;
      /**  Return number of package downloads remaining. */
      getNumDownloads(): number;
      /**  Return name of current package download, or empty if no downloads. */
      getDownloadName(): string;
      /**  Return progress of current package download, or 1.0 if no downloads. */
      getDownloadProgress(): number;
      /**  Trigger client connection to download a package file from the server. Can be used to download additional resource packages when client is already joined in a scene. The package must have been added as a requirement to the scene the client is joined in, or else the eventual download will fail. */
      sendPackageToClient(package: PackageFile): void;
      /**  Set network simulation parameters. Called by Network. */
      configureNetworkSimulator(latencyMs: number, packetLoss: number): void;
      /**  Expose control methods for current controls */
      setControlButtons(buttons: number, down?: boolean): void;
      /**  Check if a button is held down. */
      isControlButtonDown(button: number): boolean;
      setControlDataInt(key: string, value: number): void;
      getControlDataInt(key: string): number;
      /**  Send a message. */
      sendStringMessage(message: string): void;

   }

   export class HttpRequest extends RefCounted {

      eof: boolean;
      url: string;
      verb: string;
      error: string;
      state: HttpRequestState;
      availableSize: number;
      open: boolean;
      name: string;
      checksum: number;
      position: number;
      size: number;

      /**  Construct with parameters. */
      constructor(url: string, verb: string, headers: string[], postData: string);

      /**  Process the connection in the worker thread until closed. */
      threadFunction(): void;
      /**  Set position from the beginning of the stream. Not supported. */
      seek(position: number): number;
      /**  Return whether all response data has been read. */
      isEof(): boolean;
      /**  Return URL used in the request. */
      getURL(): string;
      /**  Return verb used in the request. Default GET if empty verb specified on construction. */
      getVerb(): string;
      /**  Return error. Only non-empty in the error state. */
      getError(): string;
      /**  Return connection state. */
      getState(): HttpRequestState;
      /**  Return amount of bytes in the read buffer. */
      getAvailableSize(): number;
      /**  Return whether connection is in the open state. */
      isOpen(): boolean;
      /**  Return name of the stream. */
      getName(): string;
      /**  Return a checksum if applicable. */
      getChecksum(): number;
      /**  Return current position. */
      getPosition(): number;
      /**  Return size. */
      getSize(): number;
      /**  Read a 64-bit integer. */
      readInt64(): number;
      /**  Read a 32-bit integer. */
      readInt(): number;
      /**  Read a 16-bit integer. */
      readShort(): number;
      /**  Read an 8-bit integer. */
      readByte(): number;
      /**  Read a 64-bit unsigned integer. */
      readUInt64(): number;
      /**  Read a 32-bit unsigned integer. */
      readUInt(): number;
      /**  Read a 16-bit unsigned integer. */
      readUShort(): number;
      /**  Read an 8-bit unsigned integer. */
      readUByte(): number;
      /**  Read a bool. */
      readBool(): boolean;
      /**  Read a float. */
      readFloat(): number;
      /**  Read a double. */
      readDouble(): number;
      /**  Read an IntRect. */
      readIntRect(): IntRect;
      /**  Read an IntVector2. */
      readIntVector2(): IntVector2;
      /**  Read a Rect. */
      readRect(): Rect;
      /**  Read a Vector2. */
      readVector2(): Vector2;
      /**  Read a Vector3. */
      readVector3(): Vector3;
      /**  Read a Vector3 packed into 3 x 16 bits with the specified maximum absolute range. */
      readPackedVector3(maxAbsCoord: number): Vector3;
      /**  Read a Vector4. */
      readVector4(): Vector4;
      /**  Read a quaternion. */
      readQuaternion(): Quaternion;
      /**  Read a quaternion with each component packed in 16 bits. */
      readPackedQuaternion(): Quaternion;
      /**  Read a color. */
      readColor(): Color;
      /**  Read a bounding box. */
      readBoundingBox(): BoundingBox;
      /**  Read a null-terminated string. */
      readString(): string;
      /**  Read a four-letter file ID. */
      readFileID(): string;
      /**  Read a 32-bit StringHash. */
      readStringHash(): string;
      /**  Read a variant vector. */
      readVariantVector(outVector: ScriptVector): void;
      /**  Read a variable-length encoded unsigned integer, which can use 29 bits maximum. */
      readVLE(): number;
      /**  Read a 24-bit network object ID. */
      readNetID(): number;
      /**  Read a text line. */
      readLine(): string;

   }

   export class MasterServerClient extends AObject {

      /**  Construct. */
      constructor();

      connectToMaster(address: string, port: number): void;
      disconnectFromMaster(): void;
      requestServerListFromMaster(): void;
      connectToServerViaMaster(serverId: string, internalAddress: string, internalPort: number, externalAddress: string, externalPort: number, scene: Scene): void;
      connectToMasterAndRegister(address: string, port: number, serverName: string): void;
      /**  Convenience method to start server and register it with the master server */
      startServerAndRegisterWithMaster(serverPort: number, masterAddress: string, masterPort: number, serverName: string): boolean;

   }

   export class Network extends AObject {

      updateFps: number;
      simulatedLatency: number;
      simulatedPacketLoss: number;
      packageCacheDir: string;
      serverConnection: Connection;
      serverRunning: boolean;
      serverPort: number;

      /**  Construct. */
      constructor();

      /**  Connect to a server using UDP protocol. Return true if connection process successfully started. */
      connect(address: string, port: number, scene: Scene): boolean;
      /**  Disconnect the connection to the server. If wait time is non-zero, will block while waiting for disconnect to finish. */
      disconnect(waitMSec?: number): void;
      /**  Start a server on a port using UDP protocol. Return true if successful. */
      startServer(port: number): boolean;
      /**  Stop the server. */
      stopServer(): void;
      /**  Set network update FPS. */
      setUpdateFps(fps: number): void;
      /**  Set simulated latency in milliseconds. This adds a fixed delay before sending each packet. */
      setSimulatedLatency(ms: number): void;
      /**  Set simulated packet loss probability between 0.0 - 1.0. */
      setSimulatedPacketLoss(probability: number): void;
      /**  Register a remote event as allowed to be received. There is also a fixed blacklist of events that can not be allowed in any case, such as ConsoleCommand. */
      registerRemoteEvent(eventType: string): void;
      /**  Unregister a remote event as allowed to received. */
      unregisterRemoteEvent(eventType: string): void;
      /**  Unregister all remote events. */
      unregisterAllRemoteEvents(): void;
      /**  Set the package download cache directory. */
      setPackageCacheDir(path: string): void;
      /**  Trigger all client connections in the specified scene to download a package file from the server. Can be used to download additional resource packages when clients are already joined in the scene. The package must have been added as a requirement to the scene, or else the eventual download will fail. */
      sendPackageToClients(scene: Scene, package: PackageFile): void;
      /**  Perform an HTTP request to the specified URL. Empty verb defaults to a GET request. Return a request object which can be used to read the response data. */
      makeHttpRequest(url: string, verb?: string, headers?: string[], postData?: string): HttpRequest;
      /**  Return network update FPS. */
      getUpdateFps(): number;
      /**  Return simulated latency in milliseconds. */
      getSimulatedLatency(): number;
      /**  Return simulated packet loss probability. */
      getSimulatedPacketLoss(): number;
      /**  Return the connection to the server. Null if not connected. */
      getServerConnection(): Connection;
      /**  Return whether the server is running. */
      isServerRunning(): boolean;
      /**  Return whether a remote event is allowed to be received. */
      checkRemoteEvent(eventType: string): boolean;
      /**  Return the package download cache directory. */
      getPackageCacheDir(): string;
      /**  Process incoming messages from connections. Called by HandleBeginFrame. */
      update(timeStep: number): void;
      /**  Send outgoing messages after frame logic. Called by HandleRenderUpdate. */
      postUpdate(timeStep: number): void;
      getServerPort(): number;

   }

   export class NetworkPriority extends Component {

      basePriority: number;
      distanceFactor: number;
      minPriority: number;
      alwaysUpdateOwner: boolean;

      /**  Construct. */
      constructor();

      /**  Set base priority. Default 100 (send updates at full frequency.) */
      setBasePriority(priority: number): void;
      /**  Set priority reduction distance factor. Default 0 (no effect.) */
      setDistanceFactor(factor: number): void;
      /**  Set minimum priority. Default 0 (no updates when far away enough.) */
      setMinPriority(priority: number): void;
      /**  Set whether updates to owner should be sent always at full rate. Default true. */
      setAlwaysUpdateOwner(enable: boolean): void;
      /**  Return base priority. */
      getBasePriority(): number;
      /**  Return priority reduction distance factor. */
      getDistanceFactor(): number;
      /**  Return minimum priority. */
      getMinPriority(): number;
      /**  Return whether updates to owner should be sent always at full rate. */
      getAlwaysUpdateOwner(): boolean;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ServerConnected" **/
    export var ServerConnectedEventType : Atomic.EventType;

    /** object returned in the callback for the ServerConnected event.**/
    export interface ServerConnectedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ServerConnected event. 

     / Server connection established.
    **/
    export function ServerConnectedEvent (callback : Atomic.EventCallback<ServerConnectedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ServerConnected event. **/ 
    export function ServerConnectedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ServerDisconnected" **/
    export var ServerDisconnectedEventType : Atomic.EventType;

    /** object returned in the callback for the ServerDisconnected event.**/
    export interface ServerDisconnectedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ServerDisconnected event. 

     / Server connection disconnected.
    **/
    export function ServerDisconnectedEvent (callback : Atomic.EventCallback<ServerDisconnectedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ServerDisconnected event. **/ 
    export function ServerDisconnectedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ConnectFailed" **/
    export var ConnectFailedEventType : Atomic.EventType;

    /** object returned in the callback for the ConnectFailed event.**/
    export interface ConnectFailedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ConnectFailed event. 

     / Server connection failed.
    **/
    export function ConnectFailedEvent (callback : Atomic.EventCallback<ConnectFailedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ConnectFailed event. **/ 
    export function ConnectFailedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ClientConnected" **/
    export var ClientConnectedEventType : Atomic.EventType;

    /** object returned in the callback for the ClientConnected event.**/
    export interface ClientConnectedEvent extends Atomic.EventData {
        connection : Atomic.Connection;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ClientConnected event. 

     / New client connection established.
    **/
    export function ClientConnectedEvent (callback : Atomic.EventCallback<ClientConnectedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ClientConnected event. **/ 
    export function ClientConnectedEventData (callbackData : ClientConnectedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ClientDisconnected" **/
    export var ClientDisconnectedEventType : Atomic.EventType;

    /** object returned in the callback for the ClientDisconnected event.**/
    export interface ClientDisconnectedEvent extends Atomic.EventData {
        connection : Atomic.Connection;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ClientDisconnected event. 

     / Client connection disconnected.
    **/
    export function ClientDisconnectedEvent (callback : Atomic.EventCallback<ClientDisconnectedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ClientDisconnected event. **/ 
    export function ClientDisconnectedEventData (callbackData : ClientDisconnectedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ClientIdentity" **/
    export var ClientIdentityEventType : Atomic.EventType;

    /** object returned in the callback for the ClientIdentity event.**/
    export interface ClientIdentityEvent extends Atomic.EventData {
        connection : Atomic.Connection;
        allow : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ClientIdentity event. 

     / Client has sent identity: identity map is in the event data.
    **/
    export function ClientIdentityEvent (callback : Atomic.EventCallback<ClientIdentityEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ClientIdentity event. **/ 
    export function ClientIdentityEventData (callbackData : ClientIdentityEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ClientSceneLoaded" **/
    export var ClientSceneLoadedEventType : Atomic.EventType;

    /** object returned in the callback for the ClientSceneLoaded event.**/
    export interface ClientSceneLoadedEvent extends Atomic.EventData {
        connection : Atomic.Connection;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ClientSceneLoaded event. 

     / Client has informed to have loaded the scene.
    **/
    export function ClientSceneLoadedEvent (callback : Atomic.EventCallback<ClientSceneLoadedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ClientSceneLoaded event. **/ 
    export function ClientSceneLoadedEventData (callbackData : ClientSceneLoadedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NetworkMessage" **/
    export var NetworkMessageEventType : Atomic.EventType;

    /** object returned in the callback for the NetworkMessage event.**/
    export interface NetworkMessageEvent extends Atomic.EventData {
        connection : Atomic.Connection;
        messageID : number;
        /** Unmapped Native Type: Buffer */
        data : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NetworkMessage event. 

     / Unhandled network message received.
    **/
    export function NetworkMessageEvent (callback : Atomic.EventCallback<NetworkMessageEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NetworkMessage event. **/ 
    export function NetworkMessageEventData (callbackData : NetworkMessageEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NetworkUpdate" **/
    export var NetworkUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the NetworkUpdate event.**/
    export interface NetworkUpdateEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NetworkUpdate event. 

     / About to send network update on the client or server.
    **/
    export function NetworkUpdateEvent (callback : Atomic.EventCallback<NetworkUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the NetworkUpdate event. **/ 
    export function NetworkUpdateEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NetworkUpdateSent" **/
    export var NetworkUpdateSentEventType : Atomic.EventType;

    /** object returned in the callback for the NetworkUpdateSent event.**/
    export interface NetworkUpdateSentEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NetworkUpdateSent event. 

     / Network update has been sent on the client or server.
    **/
    export function NetworkUpdateSentEvent (callback : Atomic.EventCallback<NetworkUpdateSentEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the NetworkUpdateSent event. **/ 
    export function NetworkUpdateSentEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NetworkSceneLoadFailed" **/
    export var NetworkSceneLoadFailedEventType : Atomic.EventType;

    /** object returned in the callback for the NetworkSceneLoadFailed event.**/
    export interface NetworkSceneLoadFailedEvent extends Atomic.EventData {
        connection : Atomic.Connection;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NetworkSceneLoadFailed event. 

     / Scene load failed, either due to file not found or checksum error.
    **/
    export function NetworkSceneLoadFailedEvent (callback : Atomic.EventCallback<NetworkSceneLoadFailedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NetworkSceneLoadFailed event. **/ 
    export function NetworkSceneLoadFailedEventData (callbackData : NetworkSceneLoadFailedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "RemoteEventData" **/
    export var RemoteEventDataEventType : Atomic.EventType;

    /** object returned in the callback for the RemoteEventData event.**/
    export interface RemoteEventDataEvent extends Atomic.EventData {
        connection : Atomic.Connection;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the RemoteEventData event. 

     / Remote event: adds Connection parameter to the event data
    **/
    export function RemoteEventDataEvent (callback : Atomic.EventCallback<RemoteEventDataEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the RemoteEventData event. **/ 
    export function RemoteEventDataEventData (callbackData : RemoteEventDataEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MasterConnectionReady" **/
    export var MasterConnectionReadyEventType : Atomic.EventType;

    /** object returned in the callback for the MasterConnectionReady event.**/
    export interface MasterConnectionReadyEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MasterConnectionReady event. 

     / Master server connection ready
    **/
    export function MasterConnectionReadyEvent (callback : Atomic.EventCallback<MasterConnectionReadyEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the MasterConnectionReady event. **/ 
    export function MasterConnectionReadyEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MasterConnectionFailed" **/
    export var MasterConnectionFailedEventType : Atomic.EventType;

    /** object returned in the callback for the MasterConnectionFailed event.**/
    export interface MasterConnectionFailedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MasterConnectionFailed event. 

     / Master server connection failed
    **/
    export function MasterConnectionFailedEvent (callback : Atomic.EventCallback<MasterConnectionFailedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the MasterConnectionFailed event. **/ 
    export function MasterConnectionFailedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "MasterServerMessage" **/
    export var MasterServerMessageEventType : Atomic.EventType;

    /** object returned in the callback for the MasterServerMessage event.**/
    export interface MasterServerMessageEvent extends Atomic.EventData {
        /** Unmapped Native Type: Buffer */
        data : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the MasterServerMessage event. 

     / Unhandled master message received.
    **/
    export function MasterServerMessageEvent (callback : Atomic.EventCallback<MasterServerMessageEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the MasterServerMessage event. **/ 
    export function MasterServerMessageEventData (callbackData : MasterServerMessageEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NetworkStringMessage" **/
    export var NetworkStringMessageEventType : Atomic.EventType;

    /** object returned in the callback for the NetworkStringMessage event.**/
    export interface NetworkStringMessageEvent extends Atomic.EventData {
        connection : Atomic.Connection;
        /** Unmapped Native Type: Buffer */
        data : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NetworkStringMessage event. 

     / Unhandled master message received.
    **/
    export function NetworkStringMessageEvent (callback : Atomic.EventCallback<NetworkStringMessageEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NetworkStringMessage event. **/ 
    export function NetworkStringMessageEventData (callbackData : NetworkStringMessageEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Physics
//----------------------------------------------------


   export class CollisionShape extends Component {

      terrain: number;
      shapeType: ShapeType;
      size: Vector3;
      position: Vector3;
      rotation: Quaternion;
      margin: number;
      model: Model;
      lodLevel: number;
      physicsWorld: PhysicsWorld;
      worldBoundingBox: BoundingBox;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set as a box. */
      setBox(size: Vector3, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a sphere. */
      setSphere(diameter: number, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a static plane. */
      setStaticPlane(position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a cylinder. */
      setCylinder(diameter: number, height: number, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a capsule. */
      setCapsule(diameter: number, height: number, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a cone. */
      setCone(diameter: number, height: number, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a triangle mesh from Model. If you update a model's geometry and want to reapply the shape, call physicsWorld->RemoveCachedGeometry(model) first. */
      setTriangleMesh(model: Model, lodLevel?: number, scale?: Vector3, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a triangle mesh from CustomGeometry. */
      setCustomTriangleMesh(custom: CustomGeometry, scale?: Vector3, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a convex hull from Model. */
      setConvexHull(model: Model, lodLevel?: number, scale?: Vector3, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a convex hull from CustomGeometry. */
      setCustomConvexHull(custom: CustomGeometry, scale?: Vector3, position?: Vector3, rotation?: Quaternion): void;
      /**  Set as a terrain. Only works if the same scene node contains a Terrain component. */
      setTerrain(lodLevel?: number): void;
      /**  Set shape type. */
      setShapeType(type: ShapeType): void;
      /**  Set shape size. */
      setSize(size: Vector3): void;
      /**  Set offset position. */
      setPosition(position: Vector3): void;
      /**  Set offset rotation. */
      setRotation(rotation: Quaternion): void;
      /**  Set offset transform. */
      setTransform(position: Vector3, rotation: Quaternion): void;
      /**  Set collision margin. */
      setMargin(margin: number): void;
      /**  Set triangle mesh / convex hull model. */
      setModel(model: Model): void;
      /**  Set model LOD level. */
      setLodLevel(lodLevel: number): void;
      /**  Return physics world. */
      getPhysicsWorld(): PhysicsWorld;
      /**  Return shape type. */
      getShapeType(): ShapeType;
      /**  Return shape size. */
      getSize(): Vector3;
      /**  Return offset position. */
      getPosition(): Vector3;
      /**  Return offset rotation. */
      getRotation(): Quaternion;
      /**  Return collision margin. */
      getMargin(): number;
      /**  Return triangle mesh / convex hull model. */
      getModel(): Model;
      /**  Return model LOD level. */
      getLodLevel(): number;
      /**  Return world-space bounding box. */
      getWorldBoundingBox(): BoundingBox;
      /**  Update the new collision shape to the RigidBody. */
      notifyRigidBody(updateMass?: boolean): void;
      /**  Release the collision shape. */
      releaseShape(): void;

   }

   export class Constraint extends Component {

      constraintType: ConstraintType;
      otherBody: RigidBody;
      position: Vector3;
      rotation: Quaternion;
      axis: Vector3;
      otherPosition: Vector3;
      otherRotation: Quaternion;
      otherAxis: Vector3;
      worldPosition: Vector3;
      highLimit: Vector2;
      lowLimit: Vector2;
      erp: number;
      cfm: number;
      disableCollision: boolean;
      physicsWorld: PhysicsWorld;
      ownBody: RigidBody;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set constraint type and recreate the constraint. */
      setConstraintType(type: ConstraintType): void;
      /**  Set other body to connect to. Set to null to connect to the static world. */
      setOtherBody(body: RigidBody): void;
      /**  Set constraint position relative to own body. */
      setPosition(position: Vector3): void;
      /**  Set constraint rotation relative to own body. */
      setRotation(rotation: Quaternion): void;
      /**  Set constraint rotation relative to own body by specifying the axis. */
      setAxis(axis: Vector3): void;
      /**  Set constraint position relative to the other body. If connected to the static world, is a world space position. */
      setOtherPosition(position: Vector3): void;
      /**  Set constraint rotation relative to the other body. If connected to the static world, is a world space rotation. */
      setOtherRotation(rotation: Quaternion): void;
      /**  Set constraint rotation relative to the other body by specifying the axis. */
      setOtherAxis(axis: Vector3): void;
      /**  Set constraint world space position. Resets both own and other body relative position, ie. zeroes the constraint error. */
      setWorldPosition(position: Vector3): void;
      /**  Set high limit. Interpretation is constraint type specific. */
      setHighLimit(limit: Vector2): void;
      /**  Set low limit. Interpretation is constraint type specific. */
      setLowLimit(limit: Vector2): void;
      /**  Set constraint error reduction parameter. Zero = leave to default. */
      setERP(erp: number): void;
      /**  Set constraint force mixing parameter. Zero = leave to default. */
      setCFM(cfm: number): void;
      /**  Set whether to disable collisions between connected bodies. */
      setDisableCollision(disable: boolean): void;
      /**  Return physics world. */
      getPhysicsWorld(): PhysicsWorld;
      /**  Return constraint type. */
      getConstraintType(): ConstraintType;
      /**  Return rigid body in own scene node. */
      getOwnBody(): RigidBody;
      /**  Return the other rigid body. May be null if connected to the static world. */
      getOtherBody(): RigidBody;
      /**  Return constraint position relative to own body. */
      getPosition(): Vector3;
      /**  Return constraint rotation relative to own body. */
      getRotation(): Quaternion;
      /**  Return constraint position relative to other body. */
      getOtherPosition(): Vector3;
      /**  Return constraint rotation relative to other body. */
      getOtherRotation(): Quaternion;
      /**  Return constraint world position, calculated from own body. */
      getWorldPosition(): Vector3;
      /**  Return high limit. */
      getHighLimit(): Vector2;
      /**  Return low limit. */
      getLowLimit(): Vector2;
      /**  Return constraint error reduction parameter. */
      getERP(): number;
      /**  Return constraint force mixing parameter. */
      getCFM(): number;
      /**  Return whether collisions between connected bodies are disabled. */
      getDisableCollision(): boolean;
      /**  Release the constraint. */
      releaseConstraint(): void;
      /**  Apply constraint frames. */
      applyFrames(): void;

   }

   export class PhysicsWorld extends Component {

      fps: number;
      gravity: Vector3;
      maxSubSteps: number;
      numIterations: number;
      updateEnabled: boolean;
      interpolation: boolean;
      internalEdge: boolean;
      splitImpulse: boolean;
      maxNetworkAngularVelocity: number;
      debugRenderer: DebugRenderer;
      debugDepthTest: boolean;
      applyingTransforms: boolean;
      simulating: boolean;

      /**  Construct. */
      constructor();

      /**  Set debug draw flags. */
      setDebugMode(debugMode: number): void;
      /**  Return debug draw flags. */
      getDebugMode(): number;
      /**  Step the simulation forward. */
      update(timeStep: number): void;
      /**  Refresh collisions only without updating dynamics. */
      updateCollisions(): void;
      /**  Set simulation substeps per second. */
      setFps(fps: number): void;
      /**  Set gravity. */
      setGravity(gravity: Vector3): void;
      /**  Set maximum number of physics substeps per frame. 0 (default) is unlimited. Positive values cap the amount. Use a negative value to enable an adaptive timestep. This may cause inconsistent physics behavior. */
      setMaxSubSteps(num: number): void;
      /**  Set number of constraint solver iterations. */
      setNumIterations(num: number): void;
      /**  Enable or disable automatic physics simulation during scene update. Enabled by default. */
      setUpdateEnabled(enable: boolean): void;
      /**  Set whether to interpolate between simulation steps. */
      setInterpolation(enable: boolean): void;
      /**  Set whether to use Bullet's internal edge utility for trimesh collisions. Disabled by default. */
      setInternalEdge(enable: boolean): void;
      /**  Set split impulse collision mode. This is more accurate, but slower. Disabled by default. */
      setSplitImpulse(enable: boolean): void;
      /**  Set maximum angular velocity for network replication. */
      setMaxNetworkAngularVelocity(velocity: number): void;
      /**  Invalidate cached collision geometry for a model. */
      removeCachedGeometry(model: Model): void;
      /**  Return gravity. */
      getGravity(): Vector3;
      /**  Return maximum number of physics substeps per frame. */
      getMaxSubSteps(): number;
      /**  Return number of constraint solver iterations. */
      getNumIterations(): number;
      /**  Return whether physics world will automatically simulate during scene update. */
      isUpdateEnabled(): boolean;
      /**  Return whether interpolation between simulation steps is enabled. */
      getInterpolation(): boolean;
      /**  Return whether Bullet's internal edge utility for trimesh collisions is enabled. */
      getInternalEdge(): boolean;
      /**  Return whether split impulse collision mode is enabled. */
      getSplitImpulse(): boolean;
      /**  Return simulation steps per second. */
      getFps(): number;
      /**  Return maximum angular velocity for network replication. */
      getMaxNetworkAngularVelocity(): number;
      /**  Add a rigid body to keep track of. Called by RigidBody. */
      addRigidBody(body: RigidBody): void;
      /**  Remove a rigid body. Called by RigidBody. */
      removeRigidBody(body: RigidBody): void;
      /**  Add a collision shape to keep track of. Called by CollisionShape. */
      addCollisionShape(shape: CollisionShape): void;
      /**  Remove a collision shape. Called by CollisionShape. */
      removeCollisionShape(shape: CollisionShape): void;
      /**  Add a constraint to keep track of. Called by Constraint. */
      addConstraint(joint: Constraint): void;
      /**  Remove a constraint. Called by Constraint. */
      removeConstraint(joint: Constraint): void;
      /**  Set debug renderer to use. Called both by PhysicsWorld itself and physics components. */
      setDebugRenderer(debug: DebugRenderer): void;
      /**  Set debug geometry depth test mode. Called both by PhysicsWorld itself and physics components. */
      setDebugDepthTest(enable: boolean): void;
      /**  Clean up the geometry cache. */
      cleanupGeometryCache(): void;
      /**  Set node dirtying to be disregarded. */
      setApplyingTransforms(enable: boolean): void;
      /**  Return whether node dirtying should be disregarded. */
      isApplyingTransforms(): boolean;
      /**  Return whether is currently inside the Bullet substep loop. */
      isSimulating(): boolean;

   }

   export class RigidBody extends Component {

      mass: number;
      position: Vector3;
      rotation: Quaternion;
      linearVelocity: Vector3;
      linearFactor: Vector3;
      linearRestThreshold: number;
      linearDamping: number;
      angularVelocity: Vector3;
      angularFactor: Vector3;
      angularRestThreshold: number;
      angularDamping: number;
      friction: number;
      anisotropicFriction: Vector3;
      rollingFriction: number;
      restitution: number;
      contactProcessingThreshold: number;
      ccdRadius: number;
      ccdMotionThreshold: number;
      useGravity: boolean;
      gravityOverride: Vector3;
      kinematic: boolean;
      trigger: boolean;
      collisionLayer: number;
      collisionMask: number;
      collisionEventMode: CollisionEventMode;
      physicsWorld: PhysicsWorld;
      centerOfMass: Vector3;
      active: boolean;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set mass. Zero mass makes the body static. */
      setMass(mass: number): void;
      /**  Set rigid body position in world space. */
      setPosition(position: Vector3): void;
      /**  Set rigid body rotation in world space. */
      setRotation(rotation: Quaternion): void;
      /**  Set rigid body position and rotation in world space as an atomic operation. */
      setTransform(position: Vector3, rotation: Quaternion): void;
      /**  Set linear velocity. */
      setLinearVelocity(velocity: Vector3): void;
      /**  Set linear degrees of freedom. Use 1 to enable an axis or 0 to disable. Default is all axes enabled (1, 1, 1). */
      setLinearFactor(factor: Vector3): void;
      /**  Set linear velocity deactivation threshold. */
      setLinearRestThreshold(threshold: number): void;
      /**  Set linear velocity damping factor. */
      setLinearDamping(damping: number): void;
      /**  Set angular velocity. */
      setAngularVelocity(angularVelocity: Vector3): void;
      /**  Set angular degrees of freedom. Use 1 to enable an axis or 0 to disable. Default is all axes enabled (1, 1, 1). */
      setAngularFactor(factor: Vector3): void;
      /**  Set angular velocity deactivation threshold. */
      setAngularRestThreshold(threshold: number): void;
      /**  Set angular velocity damping factor. */
      setAngularDamping(factor: number): void;
      /**  Set friction coefficient. */
      setFriction(friction: number): void;
      /**  Set anisotropic friction. */
      setAnisotropicFriction(friction: Vector3): void;
      /**  Set rolling friction coefficient. */
      setRollingFriction(friction: number): void;
      /**  Set restitution coefficient. */
      setRestitution(restitution: number): void;
      /**  Set contact processing threshold. */
      setContactProcessingThreshold(threshold: number): void;
      /**  Set continuous collision detection swept sphere radius. */
      setCcdRadius(radius: number): void;
      /**  Set continuous collision detection motion-per-simulation-step threshold. 0 disables, which is the default. */
      setCcdMotionThreshold(threshold: number): void;
      /**  Set whether gravity is applied to rigid body. */
      setUseGravity(enable: boolean): void;
      /**  Set gravity override. If zero, uses physics world's gravity. */
      setGravityOverride(gravity: Vector3): void;
      /**  Set rigid body kinematic mode. In kinematic mode forces are not applied to the rigid body. */
      setKinematic(enable: boolean): void;
      /**  Set rigid body trigger mode. In trigger mode collisions are reported but do not apply forces. */
      setTrigger(enable: boolean): void;
      /**  Set collision layer. */
      setCollisionLayer(layer: number): void;
      /**  Set collision mask. */
      setCollisionMask(mask: number): void;
      /**  Set collision group and mask. */
      setCollisionLayerAndMask(layer: number, mask: number): void;
      /**  Set collision event signaling mode. Default is to signal when rigid bodies are active. */
      setCollisionEventMode(mode: CollisionEventMode): void;
      /**  Apply torque. */
      applyTorque(torque: Vector3): void;
      /**  Apply impulse to center of mass. */
      applyImpulse(impulse: Vector3): void;
      /**  Apply torque impulse. */
      applyTorqueImpulse(torque: Vector3): void;
      /**  Reset accumulated forces. */
      resetForces(): void;
      /**  Activate rigid body if it was resting. */
      activate(): void;
      /**  Readd rigid body to the physics world to clean up internal state like stale contacts. */
      reAddBodyToWorld(): void;
      /**  Disable mass update. Call this to optimize performance when adding or editing multiple collision shapes in the same node. */
      disableMassUpdate(): void;
      /**  Re-enable mass update and recalculate the mass/inertia by calling UpdateMass(). Call when collision shape changes are finished. */
      enableMassUpdate(): void;
      /**  Return physics world. */
      getPhysicsWorld(): PhysicsWorld;
      /**  Return mass. */
      getMass(): number;
      /**  Return rigid body position in world space. */
      getPosition(): Vector3;
      /**  Return rigid body rotation in world space. */
      getRotation(): Quaternion;
      /**  Return linear velocity. */
      getLinearVelocity(): Vector3;
      /**  Return linear degrees of freedom. */
      getLinearFactor(): Vector3;
      /**  Return linear velocity at local point. */
      getVelocityAtPoint(position: Vector3): Vector3;
      /**  Return linear velocity deactivation threshold. */
      getLinearRestThreshold(): number;
      /**  Return linear velocity damping factor. */
      getLinearDamping(): number;
      /**  Return angular velocity. */
      getAngularVelocity(): Vector3;
      /**  Return angular degrees of freedom. */
      getAngularFactor(): Vector3;
      /**  Return angular velocity deactivation threshold. */
      getAngularRestThreshold(): number;
      /**  Return angular velocity damping factor. */
      getAngularDamping(): number;
      /**  Return friction coefficient. */
      getFriction(): number;
      /**  Return anisotropic friction. */
      getAnisotropicFriction(): Vector3;
      /**  Return rolling friction coefficient. */
      getRollingFriction(): number;
      /**  Return restitution coefficient. */
      getRestitution(): number;
      /**  Return contact processing threshold. */
      getContactProcessingThreshold(): number;
      /**  Return continuous collision detection swept sphere radius. */
      getCcdRadius(): number;
      /**  Return continuous collision detection motion-per-simulation-step threshold. */
      getCcdMotionThreshold(): number;
      /**  Return whether rigid body uses gravity. */
      getUseGravity(): boolean;
      /**  Return gravity override. If zero (default), uses the physics world's gravity. */
      getGravityOverride(): Vector3;
      /**  Return center of mass offset. */
      getCenterOfMass(): Vector3;
      /**  Return kinematic mode flag. */
      isKinematic(): boolean;
      /**  Return whether this RigidBody is acting as a trigger. */
      isTrigger(): boolean;
      /**  Return whether rigid body is active (not sleeping.) */
      isActive(): boolean;
      /**  Return collision layer. */
      getCollisionLayer(): number;
      /**  Return collision mask. */
      getCollisionMask(): number;
      /**  Return collision event signaling mode. */
      getCollisionEventMode(): CollisionEventMode;
      /**  Apply new world transform after a simulation step. Called internally. */
      applyWorldTransform(newWorldPosition: Vector3, newWorldRotation: Quaternion): void;
      /**  Update mass and inertia to the Bullet rigid body. */
      updateMass(): void;
      /**  Update gravity parameters to the Bullet rigid body. */
      updateGravity(): void;
      /**  Add a constraint that refers to this rigid body. */
      addConstraint(constraint: Constraint): void;
      /**  Remove a constraint that refers to this rigid body. */
      removeConstraint(constraint: Constraint): void;
      /**  Remove the rigid body. */
      releaseBody(): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PhysicsPreStep" **/
    export var PhysicsPreStepEventType : Atomic.EventType;

    /** object returned in the callback for the PhysicsPreStep event.**/
    export interface PhysicsPreStepEvent extends Atomic.EventData {
        world : Atomic.PhysicsWorld;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PhysicsPreStep event. 

     / Physics world is about to be stepped.
    **/
    export function PhysicsPreStepEvent (callback : Atomic.EventCallback<PhysicsPreStepEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PhysicsPreStep event. **/ 
    export function PhysicsPreStepEventData (callbackData : PhysicsPreStepEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PhysicsPostStep" **/
    export var PhysicsPostStepEventType : Atomic.EventType;

    /** object returned in the callback for the PhysicsPostStep event.**/
    export interface PhysicsPostStepEvent extends Atomic.EventData {
        world : Atomic.PhysicsWorld;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PhysicsPostStep event. 

     / Physics world has been stepped.
    **/
    export function PhysicsPostStepEvent (callback : Atomic.EventCallback<PhysicsPostStepEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PhysicsPostStep event. **/ 
    export function PhysicsPostStepEventData (callbackData : PhysicsPostStepEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PhysicsCollisionStart" **/
    export var PhysicsCollisionStartEventType : Atomic.EventType;

    /** object returned in the callback for the PhysicsCollisionStart event.**/
    export interface PhysicsCollisionStartEvent extends Atomic.EventData {
        world : Atomic.PhysicsWorld;
        nodeA : Atomic.Node;
        nodeB : Atomic.Node;
        bodyA : Atomic.RigidBody;
        bodyB : Atomic.RigidBody;
        trigger : boolean;
        /**  containing position Vector3, normal Vector3, distance float, impulse float for each contact */
        /** Unmapped Native Type: Buffer */
        contacts : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PhysicsCollisionStart event. 

     / Physics collision started. Global event sent by the PhysicsWorld.
    **/
    export function PhysicsCollisionStartEvent (callback : Atomic.EventCallback<PhysicsCollisionStartEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PhysicsCollisionStart event. **/ 
    export function PhysicsCollisionStartEventData (callbackData : PhysicsCollisionStartEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PhysicsCollision" **/
    export var PhysicsCollisionEventType : Atomic.EventType;

    /** object returned in the callback for the PhysicsCollision event.**/
    export interface PhysicsCollisionEvent extends Atomic.EventData {
        world : Atomic.PhysicsWorld;
        nodeA : Atomic.Node;
        nodeB : Atomic.Node;
        bodyA : Atomic.RigidBody;
        bodyB : Atomic.RigidBody;
        trigger : boolean;
        /**  containing position Vector3, normal Vector3, distance float, impulse float for each contact */
        /** Unmapped Native Type: Buffer */
        contacts : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PhysicsCollision event. 

     / Physics collision ongoing. Global event sent by the PhysicsWorld.
    **/
    export function PhysicsCollisionEvent (callback : Atomic.EventCallback<PhysicsCollisionEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PhysicsCollision event. **/ 
    export function PhysicsCollisionEventData (callbackData : PhysicsCollisionEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PhysicsCollisionEnd" **/
    export var PhysicsCollisionEndEventType : Atomic.EventType;

    /** object returned in the callback for the PhysicsCollisionEnd event.**/
    export interface PhysicsCollisionEndEvent extends Atomic.EventData {
        world : Atomic.PhysicsWorld;
        nodeA : Atomic.Node;
        nodeB : Atomic.Node;
        bodyA : Atomic.RigidBody;
        bodyB : Atomic.RigidBody;
        trigger : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PhysicsCollisionEnd event. 

     / Physics collision ended. Global event sent by the PhysicsWorld.
    **/
    export function PhysicsCollisionEndEvent (callback : Atomic.EventCallback<PhysicsCollisionEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PhysicsCollisionEnd event. **/ 
    export function PhysicsCollisionEndEventData (callbackData : PhysicsCollisionEndEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeCollisionStart" **/
    export var NodeCollisionStartEventType : Atomic.EventType;

    /** object returned in the callback for the NodeCollisionStart event.**/
    export interface NodeCollisionStartEvent extends Atomic.EventData {
        body : Atomic.RigidBody;
        otherNode : Atomic.Node;
        otherBody : Atomic.RigidBody;
        trigger : boolean;
        /**  containing position Vector3, normal Vector3, distance float, impulse float for each contact */
        /** Unmapped Native Type: Buffer */
        contacts : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeCollisionStart event. 

     / Node's physics collision started. Sent by scene nodes participating in a collision.
    **/
    export function NodeCollisionStartEvent (callback : Atomic.EventCallback<NodeCollisionStartEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeCollisionStart event. **/ 
    export function NodeCollisionStartEventData (callbackData : NodeCollisionStartEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeCollision" **/
    export var NodeCollisionEventType : Atomic.EventType;

    /** object returned in the callback for the NodeCollision event.**/
    export interface NodeCollisionEvent extends Atomic.EventData {
        body : Atomic.RigidBody;
        otherNode : Atomic.Node;
        otherBody : Atomic.RigidBody;
        trigger : boolean;
        /**  containing position Vector3, normal Vector3, distance float, impulse float for each contact */
        /** Unmapped Native Type: Buffer */
        contacts : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeCollision event. 

     / Node's physics collision ongoing. Sent by scene nodes participating in a collision.
    **/
    export function NodeCollisionEvent (callback : Atomic.EventCallback<NodeCollisionEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeCollision event. **/ 
    export function NodeCollisionEventData (callbackData : NodeCollisionEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeCollisionEnd" **/
    export var NodeCollisionEndEventType : Atomic.EventType;

    /** object returned in the callback for the NodeCollisionEnd event.**/
    export interface NodeCollisionEndEvent extends Atomic.EventData {
        body : Atomic.RigidBody;
        otherNode : Atomic.Node;
        otherBody : Atomic.RigidBody;
        trigger : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeCollisionEnd event. 

     / Node's physics collision ended. Sent by scene nodes participating in a collision.
    **/
    export function NodeCollisionEndEvent (callback : Atomic.EventCallback<NodeCollisionEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeCollisionEnd event. **/ 
    export function NodeCollisionEndEventData (callbackData : NodeCollisionEndEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Resource
//----------------------------------------------------


   export class Image extends Resource {

      cubemap: boolean;
      array: boolean;
      srgb: boolean;
      width: number;
      height: number;
      depth: number;
      components: number;
      compressed: boolean;
      compressedFormat: CompressedFormat;
      numCompressedLevels: number;
      nextLevel: Image;
      nextSibling: Image;

      /**  Construct empty. */
      constructor();

      /**  Set 3D size and number of color components. Old image data will be destroyed and new data is undefined. Return true if successful. */
      setSize(width: number, height: number, depth: number, components: number): boolean;
      /**  Flip image horizontally. Return true if successful. */
      flipHorizontal(): boolean;
      /**  Flip image vertically. Return true if successful. */
      flipVertical(): boolean;
      /**  Resize image by bilinear resampling. Return true if successful. */
      resize(width: number, height: number): boolean;
      /**  Clear the image with a color. */
      clear(color: Color): void;
      /**  Clear the image with an integer color. R component is in the 8 lowest bits. */
      clearInt(uintColor: number): void;
      /**  Save in BMP format. Return true if successful. */
      saveBMP(fileName: string): boolean;
      /**  Save in PNG format. Return true if successful. */
      savePNG(fileName: string): boolean;
      /**  Save in TGA format. Return true if successful. */
      saveTGA(fileName: string): boolean;
      /**  Save in JPG format with compression quality. Return true if successful. */
      saveJPG(fileName: string, quality: number): boolean;
      /**  Whether this texture is detected as a cubemap, only relevant for DDS. */
      isCubemap(): boolean;
      /**  Whether this texture has been detected as a volume, only relevant for DDS. */
      isArray(): boolean;
      /**  Whether this texture is in sRGB, only relevant for DDS. */
      isSRGB(): boolean;
      /**  Return a 2D pixel color. */
      getPixel(x: number, y: number): Color;
      /**  Return a bilinearly sampled 2D pixel color. X and Y have the range 0-1. */
      getPixelBilinear(x: number, y: number): Color;
      /**  Return a trilinearly sampled 3D pixel color. X, Y and Z have the range 0-1. */
      getPixelTrilinear(x: number, y: number, z: number): Color;
      /**  Return width. */
      getWidth(): number;
      /**  Return height. */
      getHeight(): number;
      /**  Return depth. */
      getDepth(): number;
      /**  Return number of color components. */
      getComponents(): number;
      /**  Return whether is compressed. */
      isCompressed(): boolean;
      /**  Return compressed format. */
      getCompressedFormat(): CompressedFormat;
      /**  Return number of compressed mip levels. Returns 0 if the image is has not been loaded from a source file containing multiple mip levels. */
      getNumCompressedLevels(): number;
      /**  Return next mip level by bilinear filtering. Note that if the image is already 1x1x1, will keep returning an image of that size. */
      getNextLevel(): Image;
      /**  Return the next sibling image of an array or cubemap. */
      getNextSibling(): Image;
      /**  Return image converted to 4-component (RGBA) to circumvent modern rendering API's not supporting e.g. the luminance-alpha format. */
      convertToRGBA(): Image;
      /**  Return subimage from the image by the defined rect or null if failed. 3D images are not supported. You must free the subimage yourself. */
      getSubimage(rect: IntRect): Image;
      /**  Precalculate the mip levels. Used by asynchronous texture loading. */
      precalculateLevels(): void;
      /**  Whether this texture has an alpha channel */
      hasAlphaChannel(): boolean;
      saveDDS(fileName: string): boolean;
      /**  Copy contents of the image into the defined rect, scaling if necessary. This image should already be large enough to include the rect. Compressed and 3D images are not supported. */
      setSubimage(image: Image, rect: IntRect): boolean;
      /**  Clean up the mip levels. */
      cleanupLevels(): void;

   }

   export class JSONFile extends Resource {

      /**  Construct. */
      constructor();

      /**  Deserialize from a string. Return true if successful. */
      fromString(source: string): boolean;

   }

   export class PListFile extends Resource {

      /**  Construct. */
      constructor();


   }

   export class Resource extends AObject {

      name: string;
      memoryUse: number;
      asyncLoadState: AsyncLoadState;
      nameHash: string;
      useTimer: number;

      /**  Construct. */
      constructor();

      /**  Finish resource loading. Always called from the main thread. Return true if successful. */
      endLoad(): boolean;
      /**  Set name. */
      setName(name: string): void;
      /**  Set memory use in bytes, possibly approximate. */
      setMemoryUse(size: number): void;
      /**  Reset last used timer. */
      resetUseTimer(): void;
      /**  Set the asynchronous loading state. Called by ResourceCache. Resources in the middle of asynchronous loading are not normally returned to user. */
      setAsyncLoadState(newState: AsyncLoadState): void;
      /**  Return name. */
      getName(): string;
      /**  Return name hash. */
      getNameHash(): string;
      /**  Return memory use in bytes, possibly approximate. */
      getMemoryUse(): number;
      /**  Return time since last use in milliseconds. If referred to elsewhere than in the resource cache, returns always zero. */
      getUseTimer(): number;
      /**  Return the asynchronous loading state. */
      getAsyncLoadState(): AsyncLoadState;

   }

   export class ResourceCache extends AObject {

      autoReloadResources: boolean;
      returnFailedResources: boolean;
      searchPackagesFirst: boolean;
      finishBackgroundResourcesMs: number;
      numBackgroundLoadResources: number;
      resourceDirs: string[];
      packageFiles: string[];
      totalMemoryUse: number;
      numResourceDirs: number;

      /**  Construct. */
      constructor();

      /**  Add a resource load directory. Optional priority parameter which will control search order. */
      addResourceDir(pathName: string, priority?: number): boolean;
      /**  Add a package file for loading resources from by name. Optional priority parameter which will control search order. */
      addPackageFile(fileName: string, priority?: number): boolean;
      /**  Add a manually created resource. Must be uniquely named. */
      addManualResource(resource: Resource): boolean;
      /**  Remove a resource load directory. */
      removeResourceDir(pathName: string): void;
      /**  Remove a package file by name. Optionally release the resources loaded from it. */
      removePackageFile(fileName: string, releaseResources?: boolean, forceRelease?: boolean): void;
      /**  Release a resource by name. */
      releaseResource(type: string, name: string, force?: boolean): void;
      /**  Release all resources. When called with the force flag false, releases all currently unused resources. */
      releaseAllResources(force?: boolean): void;
      /**  Reload a resource. Return true on success. The resource will not be removed from the cache in case of failure. */
      reloadResource(resource: Resource): boolean;
      /**  Reload a resource based on filename. Causes also reload of dependent resources if necessary. */
      reloadResourceWithDependencies(fileName: string): void;
      /**  Set memory budget for a specific resource type, default 0 is unlimited. */
      setMemoryBudget(type: string, budget: number): void;
      /**  Enable or disable automatic reloading of resources as files are modified. Default false. */
      setAutoReloadResources(enable: boolean): void;
      /**  Enable or disable returning resources that failed to load. Default false. This may be useful in editing to not lose resource ref attributes. */
      setReturnFailedResources(enable: boolean): void;
      /**  Define whether when getting resources should check package files or directories first. True for packages, false for directories. */
      setSearchPackagesFirst(value: boolean): void;
      /**  Set how many milliseconds maximum per frame to spend on finishing background loaded resources. */
      setFinishBackgroundResourcesMs(ms: number): void;
      /**  Open and return a file from the resource load paths or from inside a package file. If not found, use a fallback search with absolute path. Return null if fails. Can be called from outside the main thread. */
      getFile(name: string, sendEventOnFailure?: boolean, type?: string): File;
      /**  Return a resource by type and name. Load if not loaded yet. Return null if not found or if fails, unless SetReturnFailedResources(true) has been called. Can be called only from the main thread. */
      getResource(type: string, name: string, sendEventOnFailure?: boolean): Resource;
      /**  Load a resource without storing it in the resource cache. Return null if not found or if fails. Can be called from outside the main thread if the resource itself is safe to load completely (it does not possess for example GPU data.) */
      getTempResource(type: string, name: string, sendEventOnFailure?: boolean): Resource;
      /**  Background load a resource. An event will be sent when complete. Return true if successfully stored to the load queue, false if eg. already exists. Can be called from outside the main thread. */
      backgroundLoadResource(type: string, name: string, sendEventOnFailure?: boolean, caller?: Resource): boolean;
      /**  Return number of pending background-loaded resources. */
      getNumBackgroundLoadResources(): number;
      /**  Return an already loaded resource of specific type & name, or null if not found. Will not load if does not exist. */
      getExistingResource(type: string, name: string): Resource;
      /**  Return added resource load directories. */
      getResourceDirs(): string[];
      /**  Return added package files. */
      getPackageFiles(): string[];
      /**  Return whether a file exists by name. */
      exists(name: string): boolean;
      /**  Return memory budget for a resource type. */
      getMemoryBudget(type: string): number;
      /**  Return total memory use for a resource type. */
      getMemoryUse(type: string): number;
      /**  Return total memory use for all resources. */
      getTotalMemoryUse(): number;
      /**  Return full absolute file name of resource if possible. */
      getResourceFileName(name: string): string;
      /**  Return whether automatic resource reloading is enabled. */
      getAutoReloadResources(): boolean;
      /**  Return whether resources that failed to load are returned. */
      getReturnFailedResources(): boolean;
      /**  Return whether when getting resources should check package files or directories first. */
      getSearchPackagesFirst(): boolean;
      /**  Return how many milliseconds maximum to spend on finishing background loaded resources. */
      getFinishBackgroundResourcesMs(): number;
      /**  Return either the path itself or its parent, based on which of them has recognized resource subdirectories. */
      getPreferredResourceDir(path: string): string;
      /**  Remove unsupported constructs from the resource name to prevent ambiguity, and normalize absolute filename to resource path relative if possible. */
      sanitateResourceName(name: string): string;
      /**  Remove unnecessary constructs from a resource directory name and ensure it to be an absolute path. */
      sanitateResourceDirName(name: string): string;
      /**  Store a dependency for a resource. If a dependency file changes, the resource will be reloaded. */
      storeResourceDependency(resource: Resource, dependency: string): void;
      /**  Reset dependencies for a resource. */
      resetDependencies(resource: Resource): void;
      /**  Returns a formatted string containing the memory actively used. */
      printMemoryUsage(): string;
      /**  Get the number of resource directories */
      getNumResourceDirs(): number;
      /**  Get resource directory at a given index */
      getResourceDir(index: number): string;
      getResource<T extends Resource>(type: string, name: string, sendEventOnFailure?: boolean): T;
      getTempResource<T extends Resource>(type: string, name: string, sendEventOnFailure?: boolean): T;
      getExistingResource<T extends Resource>(type: string, name: string): T;

   }

   export class ResourceNameIterator extends RefCounted {

      current: string;

      constructor();

      getCurrent(): string;
      moveNext(): boolean;
      reset(): void;

   }

   export class XMLFile extends Resource {

      /**  Construct. */
      constructor();

      /**  Deserialize from a string. Return true if successful. */
      fromString(source: string): boolean;
      /**  Serialize the XML content to a string. */
      toString(indentation?: string): string;
      /**  Patch the XMLFile with another XMLFile. Based on RFC 5261. */
      patch(patchFile: XMLFile): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ReloadStarted" **/
    export var ReloadStartedEventType : Atomic.EventType;

    /** object returned in the callback for the ReloadStarted event.**/
    export interface ReloadStartedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ReloadStarted event. 

     / Resource reloading started.
    **/
    export function ReloadStartedEvent (callback : Atomic.EventCallback<ReloadStartedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ReloadStarted event. **/ 
    export function ReloadStartedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ReloadFinished" **/
    export var ReloadFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the ReloadFinished event.**/
    export interface ReloadFinishedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ReloadFinished event. 

     / Resource reloading finished successfully.
    **/
    export function ReloadFinishedEvent (callback : Atomic.EventCallback<ReloadFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ReloadFinished event. **/ 
    export function ReloadFinishedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ReloadFailed" **/
    export var ReloadFailedEventType : Atomic.EventType;

    /** object returned in the callback for the ReloadFailed event.**/
    export interface ReloadFailedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ReloadFailed event. 

     / Resource reloading failed.
    **/
    export function ReloadFailedEvent (callback : Atomic.EventCallback<ReloadFailedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ReloadFailed event. **/ 
    export function ReloadFailedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "FileChanged" **/
    export var FileChangedEventType : Atomic.EventType;

    /** object returned in the callback for the FileChanged event.**/
    export interface FileChangedEvent extends Atomic.EventData {
        fileName : string;
        resourceName : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the FileChanged event. 

     / Tracked file changed in the resource directories.
    **/
    export function FileChangedEvent (callback : Atomic.EventCallback<FileChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the FileChanged event. **/ 
    export function FileChangedEventData (callbackData : FileChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LoadFailed" **/
    export var LoadFailedEventType : Atomic.EventType;

    /** object returned in the callback for the LoadFailed event.**/
    export interface LoadFailedEvent extends Atomic.EventData {
        resourceName : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LoadFailed event. 

     / Resource loading failed.
    **/
    export function LoadFailedEvent (callback : Atomic.EventCallback<LoadFailedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the LoadFailed event. **/ 
    export function LoadFailedEventData (callbackData : LoadFailedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ResourceNotFound" **/
    export var ResourceNotFoundEventType : Atomic.EventType;

    /** object returned in the callback for the ResourceNotFound event.**/
    export interface ResourceNotFoundEvent extends Atomic.EventData {
        resourceName : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ResourceNotFound event. 

     / Resource not found.
    **/
    export function ResourceNotFoundEvent (callback : Atomic.EventCallback<ResourceNotFoundEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ResourceNotFound event. **/ 
    export function ResourceNotFoundEventData (callbackData : ResourceNotFoundEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UnknownResourceType" **/
    export var UnknownResourceTypeEventType : Atomic.EventType;

    /** object returned in the callback for the UnknownResourceType event.**/
    export interface UnknownResourceTypeEvent extends Atomic.EventData {
        /** Unmapped Native Type: StringHash */
        resourceType : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UnknownResourceType event. 

     / Unknown resource type.
    **/
    export function UnknownResourceTypeEvent (callback : Atomic.EventCallback<UnknownResourceTypeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UnknownResourceType event. **/ 
    export function UnknownResourceTypeEventData (callbackData : UnknownResourceTypeEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ResourceBackgroundLoaded" **/
    export var ResourceBackgroundLoadedEventType : Atomic.EventType;

    /** object returned in the callback for the ResourceBackgroundLoaded event.**/
    export interface ResourceBackgroundLoadedEvent extends Atomic.EventData {
        resourceName : string;
        success : boolean;
        resource : Atomic.Resource;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ResourceBackgroundLoaded event. 

     / Resource background loading finished.
    **/
    export function ResourceBackgroundLoadedEvent (callback : Atomic.EventCallback<ResourceBackgroundLoadedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ResourceBackgroundLoaded event. **/ 
    export function ResourceBackgroundLoadedEventData (callbackData : ResourceBackgroundLoadedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ChangeLanguage" **/
    export var ChangeLanguageEventType : Atomic.EventType;

    /** object returned in the callback for the ChangeLanguage event.**/
    export interface ChangeLanguageEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ChangeLanguage event. 

     / Language changed.
    **/
    export function ChangeLanguageEvent (callback : Atomic.EventCallback<ChangeLanguageEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ChangeLanguage event. **/ 
    export function ChangeLanguageEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "RenameResourceNotification" **/
    export var RenameResourceNotificationEventType : Atomic.EventType;

    /** object returned in the callback for the RenameResourceNotification event.**/
    export interface RenameResourceNotificationEvent extends Atomic.EventData {
        path : string;
        newPath : string;
        newName : string;
        asset : Atomic.Resource;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the RenameResourceNotification event. 

     / Resource was renamed
    **/
    export function RenameResourceNotificationEvent (callback : Atomic.EventCallback<RenameResourceNotificationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the RenameResourceNotification event. **/ 
    export function RenameResourceNotificationEventData (callbackData : RenameResourceNotificationEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Scene
//----------------------------------------------------


   export class Animatable extends Serializable {

      animationEnabled: boolean;
      animationTime: number;
      objectAnimation: ObjectAnimation;

      /**  Construct. */
      constructor();

      /**  Set automatic update of animation, default true. */
      setAnimationEnabled(enable: boolean): void;
      /**  Set time position of all attribute animations or an object animation manually. Automatic update should be disabled in this case. */
      setAnimationTime(time: number): void;
      /**  Set object animation. */
      setObjectAnimation(objectAnimation: ObjectAnimation): void;
      /**  Set attribute animation. */
      setAttributeAnimation(name: string, attributeAnimation: ValueAnimation, wrapMode?: WrapMode, speed?: number): void;
      /**  Set attribute animation wrap mode. */
      setAttributeAnimationWrapMode(name: string, wrapMode: WrapMode): void;
      /**  Set attribute animation speed. */
      setAttributeAnimationSpeed(name: string, speed: number): void;
      /**  Set attribute animation time position manually. Automatic update should be disabled in this case. */
      setAttributeAnimationTime(name: string, time: number): void;
      /**  Remove object animation. Same as calling SetObjectAnimation with a null pointer. */
      removeObjectAnimation(): void;
      /**  Remove attribute animation. Same as calling SetAttributeAnimation with a null pointer. */
      removeAttributeAnimation(name: string): void;
      /**  Return animation enabled. */
      getAnimationEnabled(): boolean;
      /**  Return object animation. */
      getObjectAnimation(): ObjectAnimation;
      /**  Return attribute animation. */
      getAttributeAnimation(name: string): ValueAnimation;
      /**  Return attribute animation wrap mode. */
      getAttributeAnimationWrapMode(name: string): WrapMode;
      /**  Return attribute animation speed. */
      getAttributeAnimationSpeed(name: string): number;
      /**  Return attribute animation time position. */
      getAttributeAnimationTime(name: string): number;

   }

   export class Component extends Animatable {

      enabled: boolean;
      id: number;
      node: Node;
      scene: Scene;
      enabledEffective: boolean;

      /**  Construct. */
      constructor();

      /**  Handle enabled/disabled state change. */
      onSetEnabled(): void;
      /**  Mark for attribute check on the next network update. */
      markNetworkUpdate(): void;
      /**  Visualize the component as debug geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Set enabled/disabled state. */
      setEnabled(enable: boolean): void;
      /**  Remove from the scene node. If no other shared pointer references exist, causes immediate deletion. */
      remove(): void;
      /**  Return ID. */
      getID(): number;
      /**  Return scene node. */
      getNode(): Node;
      /**  Return the scene the node belongs to. */
      getScene(): Scene;
      /**  Return whether is enabled. */
      isEnabled(): boolean;
      /**  Return whether is effectively enabled (node is also enabled.) */
      isEnabledEffective(): boolean;
      /**  Return component in the same scene node by type. If there are several, returns the first. */
      getComponent(type: string): Component;
      /**  Prepare network update by comparing attributes and marking replication states dirty as necessary. */
      prepareNetworkUpdate(): void;
      /**  Clean up all references to a network connection that is about to be removed. */
      cleanupConnection(connection: Connection): void;
      getComponent<T extends Atomic.Component>(type: string): T;

   }

   export class Node extends Animatable {

      name: string;
      position: Vector3;
      position2D: Vector2;
      rotation: Quaternion;
      rotation2D: number;
      direction: Vector3;
      scale: Vector3;
      scale2D: Vector2;
      worldPosition: Vector3;
      worldRotation: Quaternion;
      worldRotation2D: number;
      worldDirection: Vector3;
      enabled: boolean;
      deepEnabled: boolean;
      enabledRecursive: boolean;
      owner: Connection;
      parent: Node;
      id: number;
      nameHash: string;
      scene: Scene;
      enabledSelf: boolean;
      up: Vector3;
      right: Vector3;
      worldPosition2D: Vector2;
      worldUp: Vector3;
      worldRight: Vector3;
      worldScale: Vector3;
      worldScale2D: Vector2;
      dirty: boolean;
      numComponents: number;
      numNetworkComponents: number;
      netPositionAttr: Vector3;
      numPersistentChildren: number;
      numPersistentComponents: number;
      positionSilent: Vector3;
      rotationSilent: Quaternion;
      scaleSilent: Vector3;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately recursively to child nodes and components. */
      applyAttributes(): void;
      /**  Return whether should save default-valued attributes into XML. Always save node transforms for readability, even if identity. */
      saveDefaultAttributes(): boolean;
      /**  Mark for attribute check on the next network update. */
      markNetworkUpdate(): void;
      /**  Set name of the scene node. Names are not required to be unique. */
      setName(name: string): void;
      /**  Add a tag. */
      addTag(tag: string): void;
      /**  Add tags with the specified separator, by default ; */
      addTags(tags: string, separator?: string): void;
      /**  Remove tag. Return true if existed. */
      removeTag(tag: string): boolean;
      /**  Remove all tags. */
      removeAllTags(): void;
      /**  Set position in parent space. If the scene node is on the root level (is child of the scene itself), this is same as world space. */
      setPosition(position: Vector3): void;
      /**  Set position in parent space (for Atomic2D). */
      setPosition2D(position: Vector2): void;
      /**  Set rotation in parent space. */
      setRotation(rotation: Quaternion): void;
      /**  Set rotation in parent space (for Atomic2D). */
      setRotation2D(rotation: number): void;
      /**  Set forward direction in parent space. Positive Z axis equals identity rotation. */
      setDirection(direction: Vector3): void;
      /**  Set scale in parent space. */
      setScale(scale: Vector3): void;
      /**  Set scale in parent space (for Atomic2D). */
      setScale2D(scale: Vector2): void;
      /**  Set position in world space. */
      setWorldPosition(position: Vector3): void;
      /**  Set rotation in world space. */
      setWorldRotation(rotation: Quaternion): void;
      /**  Set rotation in world space (for Atomic2D). */
      setWorldRotation2D(rotation: number): void;
      /**  Set forward direction in world space. */
      setWorldDirection(direction: Vector3): void;
      /**  Move the scene node in the chosen transform space. */
      translate(delta: Vector3, space?: TransformSpace): void;
      /**  Move the scene node in the chosen transform space (for Atomic2D). */
      translate2D(delta: Vector2, space?: TransformSpace): void;
      /**  Rotate the scene node in the chosen transform space. */
      rotate(delta: Quaternion, space?: TransformSpace): void;
      /**  Rotate the scene node in the chosen transform space (for Atomic2D). */
      rotate2D(delta: number, space?: TransformSpace): void;
      /**  Rotate around a point in the chosen transform space. */
      rotateAround(point: Vector3, delta: Quaternion, space?: TransformSpace): void;
      /**  Rotate around a point in the chosen transform space (for Atomic2D). */
      rotateAround2D(point: Vector2, delta: number, space?: TransformSpace): void;
      /**  Rotate around the X axis. */
      pitch(angle: number, space?: TransformSpace): void;
      /**  Rotate around the Y axis. */
      yaw(angle: number, space?: TransformSpace): void;
      /**  Rotate around the Z axis. */
      roll(angle: number, space?: TransformSpace): void;
      /**  Look at a target position in the chosen transform space. Note that the up vector is always specified in world space. Return true if successful, or false if resulted in an illegal rotation, in which case the current rotation remains. */
      lookAt(target: Vector3, up?: Vector3, space?: TransformSpace): boolean;
      /**  Set enabled/disabled state without recursion. Components in a disabled node become effectively disabled regardless of their own enable/disable state. */
      setEnabled(enable: boolean): void;
      /**  Set enabled state on self and child nodes. Nodes' own enabled state is remembered (IsEnabledSelf) and can be restored. */
      setDeepEnabled(enable: boolean): void;
      /**  Reset enabled state to the node's remembered state prior to calling SetDeepEnabled. */
      resetDeepEnabled(): void;
      /**  Set enabled state on self and child nodes. Unlike SetDeepEnabled this does not remember the nodes' own enabled state, but overwrites it. */
      setEnabledRecursive(enable: boolean): void;
      /**  Set owner connection for networking. */
      setOwner(owner: Connection): void;
      /**  Mark node and child nodes to need world transform recalculation. Notify listener components. */
      markDirty(): void;
      /**  Create a child scene node (with specified ID if provided). */
      createChild(name?: string, mode?: CreateMode, id?: number): Node;
      /**  Add a child scene node at a specific index. If index is not explicitly specified or is greater than current children size, append the new child at the end. */
      addChild(node: Node, index?: number): void;
      /**  Remove a child scene node. */
      removeChild(node: Node): void;
      /**  Remove all child scene nodes. */
      removeAllChildren(): void;
      /**  Remove child scene nodes that match criteria. */
      removeChildren(removeReplicated: boolean, removeLocal: boolean, recursive: boolean): void;
      /**  Create a component to this node (with specified ID if provided). */
      createComponent(type: string, mode?: CreateMode, id?: number): Component;
      /**  Create a component to this node if it does not exist already. */
      getOrCreateComponent(type: string, mode?: CreateMode, id?: number): Component;
      /**  Remove a component from this node. */
      removeComponent(component: Component): void;
      /**  Remove all components from this node. */
      removeAllComponents(): void;
      /**  Adjust index order of an existing component in this node. */
      reorderComponent(component: Component, index: number): void;
      /**  Clone scene node, components and child nodes. Return the clone. */
      clone(mode?: CreateMode): Node;
      /**  Remove from the parent node. If no other shared pointer references exist, causes immediate deletion. */
      remove(): void;
      /**  Assign to a new parent scene node. Retains the world transform. */
      setParent(parent: Node): void;
      /**  Add listener component that is notified of node being dirtied. Can either be in the same node or another. */
      addListener(component: Component): void;
      /**  Remove listener component. */
      removeListener(component: Component): void;
      /**  Return ID. */
      getID(): number;
      /**  Return name. */
      getName(): string;
      /**  Return name hash. */
      getNameHash(): string;
      /**  Return whether has a specific tag. */
      hasTag(tag: string): boolean;
      /**  Return parent scene node. */
      getParent(): Node;
      /**  Return scene. */
      getScene(): Scene;
      /**  Return whether is enabled. Disables nodes effectively disable all their components. */
      isEnabled(): boolean;
      /**  Returns the node's last own enabled state. May be different than the value returned by IsEnabled when SetDeepEnabled has been used. */
      isEnabledSelf(): boolean;
      /**  Return owner connection in networking. */
      getOwner(): Connection;
      /**  Return position in parent space. */
      getPosition(): Vector3;
      /**  Return position in parent space (for Atomic2D). */
      getPosition2D(): Vector2;
      /**  Return rotation in parent space. */
      getRotation(): Quaternion;
      /**  Return rotation in parent space (for Atomic2D). */
      getRotation2D(): number;
      /**  Return forward direction in parent space. Positive Z axis equals identity rotation. */
      getDirection(): Vector3;
      /**  Return up direction in parent space. Positive Y axis equals identity rotation. */
      getUp(): Vector3;
      /**  Return right direction in parent space. Positive X axis equals identity rotation. */
      getRight(): Vector3;
      /**  Return scale in parent space. */
      getScale(): Vector3;
      /**  Return scale in parent space (for Atomic2D). */
      getScale2D(): Vector2;
      /**  Return position in world space. */
      getWorldPosition(): Vector3;
      /**  Return position in world space (for Atomic2D). */
      getWorldPosition2D(): Vector2;
      /**  Return rotation in world space. */
      getWorldRotation(): Quaternion;
      /**  Return rotation in world space (for Atomic2D). */
      getWorldRotation2D(): number;
      /**  Return direction in world space. */
      getWorldDirection(): Vector3;
      /**  Return node's up vector in world space. */
      getWorldUp(): Vector3;
      /**  Return node's right vector in world space. */
      getWorldRight(): Vector3;
      /**  Return scale in world space. */
      getWorldScale(): Vector3;
      /**  Return scale in world space (for Atomic2D). */
      getWorldScale2D(): Vector2;
      /**  Convert a local space position or rotation to world space (for Atomic2D). */
      localToWorld2D(vector: Vector2): Vector2;
      /**  Convert a world space position or rotation to local space (for Atomic2D). */
      worldToLocal2D(vector: Vector2): Vector2;
      /**  Return whether transform has changed and world transform needs recalculation. */
      isDirty(): boolean;
      /**  Return number of child scene nodes. */
      getNumChildren(recursive?: boolean): number;
      /**  Return child scene node by name. */
      getChild(name: string, recursive?: boolean): Node;
      /**  Return number of components. */
      getNumComponents(): number;
      /**  Return number of non-local components. */
      getNumNetworkComponents(): number;
      /**  Return component by type. If there are several, returns the first. */
      getComponent(type: string, recursive?: boolean): Component;
      /**  Return component in parent node. If there are several, returns the first. May optional traverse up to the root node. */
      getParentComponent(type: string, fullTraversal?: boolean): Component;
      /**  Return whether has a specific component. */
      hasComponent(type: string): boolean;
      /**  Set ID. Called by Scene. */
      setID(id: number): void;
      /**  Set scene. Called by Scene. */
      setScene(scene: Scene): void;
      /**  Reset scene, ID and owner. Called by Scene. */
      resetScene(): void;
      /**  Set network position attribute. */
      setNetPositionAttr(value: Vector3): void;
      /**  Return network position attribute. */
      getNetPositionAttr(): Vector3;
      /**  Prepare network update by comparing attributes and marking replication states dirty as necessary. */
      prepareNetworkUpdate(): void;
      /**  Clean up all references to a network connection that is about to be removed. */
      cleanupConnection(connection: Connection): void;
      /**  Mark node dirty in scene replication states. */
      markReplicationDirty(): void;
      /**  Add a pre-created component. Using this function from application code is discouraged, as component operation without an owner node may not be well-defined in all cases. Prefer CreateComponent() instead. */
      addComponent(component: Component, id: number, mode: CreateMode): void;
      /**  Calculate number of non-temporary child nodes. */
      getNumPersistentChildren(): number;
      /**  Calculate number of non-temporary components. */
      getNumPersistentComponents(): number;
      /**  Set position in parent space silently without marking the node & child nodes dirty. Used by animation code. */
      setPositionSilent(position: Vector3): void;
      /**  Set position in parent space silently without marking the node & child nodes dirty. Used by animation code. */
      setRotationSilent(rotation: Quaternion): void;
      /**  Set scale in parent space silently without marking the node & child nodes dirty. Used by animation code. */
      setScaleSilent(scale: Vector3): void;
      /**  Set local transform silently without marking the node & child nodes dirty. Used by animation code. */
      setTransformSilent(position: Vector3, rotation: Quaternion, scale: Vector3): void;
      saveXML(file:File):boolean;
      loadXML(file:File):boolean;
      getChildrenWithName(name:string, recursive?:boolean):Node[];
      getChildrenWithComponent(componentType:string, recursive?:boolean):Node[];
      getComponents(componentType?:string, recursive?:boolean):Component[];
      getComponent<T extends Atomic.Component>(type: string, recursive?: boolean): T;
      getParentComponent<T extends Atomic.Component>(type: string, fullTraversal?: boolean): T;
      getChildAtIndex(index:number):Node;
      createJSComponent(name:string, args?:{});
      getJSComponent(name:string, recursive?:boolean): JSComponent;
      getJSComponent<T extends Atomic.JSComponent>(name:string, recursive?:boolean): T;
      createChildPrefab(childName:string, prefabPath:string):Node;
      loadPrefab(prefabPath:string):boolean;
      createComponent<T extends Atomic.Component>(type: string, mode?: CreateMode, id?: number): T;
      getOrCreateComponent<T extends Atomic.Component>(type: string, mode?: CreateMode, id?: number): T;

   }

   export class ObjectAnimation extends Resource {

      /**  Construct. */
      constructor();

      /**  Add attribute animation, attribute name can in following format: "attribute" or "#0/#1/attribute" or ""#0/#1/@component#1/attribute. */
      addAttributeAnimation(name: string, attributeAnimation: ValueAnimation, wrapMode?: WrapMode, speed?: number): void;
      /**  Return attribute animation by name. */
      getAttributeAnimation(name: string): ValueAnimation;
      /**  Return attribute animation wrap mode by name. */
      getAttributeAnimationWrapMode(name: string): WrapMode;
      /**  Return attribute animation speed by name. */
      getAttributeAnimationSpeed(name: string): number;
      /**  Return attribute animation info by name. */
      getAttributeAnimationInfo(name: string): ValueAnimationInfo;

   }

   export class PrefabComponent extends Component {

      prefabGUID: string;

      /**  Construct. */
      constructor();

      setPrefabGUID(guid: string): void;
      getPrefabGUID(): string;
      savePrefab(): boolean;
      undoPrefab(): void;
      breakPrefab(): void;

   }

   export class Scene extends Node {

      updateEnabled: boolean;
      timeScale: number;
      elapsedTime: number;
      smoothingConstant: number;
      snapThreshold: number;
      asyncLoadingMs: number;
      asyncLoading: boolean;
      asyncProgress: number;
      asyncLoadMode: LoadMode;
      fileName: string;
      checksum: number;
      threadedUpdate: boolean;
      varNamesAttr: string;

      /**  Construct. */
      constructor();

      /**  Load from a binary file asynchronously. Return true if started successfully. The LOAD_RESOURCES_ONLY mode can also be used to preload resources from object prefab files. */
      loadAsync(file: File, mode?: LoadMode): boolean;
      /**  Load from an XML file asynchronously. Return true if started successfully. The LOAD_RESOURCES_ONLY mode can also be used to preload resources from object prefab files. */
      loadAsyncXML(file: File, mode?: LoadMode): boolean;
      /**  Load from a JSON file asynchronously. Return true if started successfully. The LOAD_RESOURCES_ONLY mode can also be used to preload resources from object prefab files. */
      loadAsyncJSON(file: File, mode?: LoadMode): boolean;
      /**  Stop asynchronous loading. */
      stopAsyncLoading(): void;
      /**  Clear scene completely of either replicated, local or all nodes and components. */
      clear(clearReplicated?: boolean, clearLocal?: boolean): void;
      /**  Enable or disable scene update. */
      setUpdateEnabled(enable: boolean): void;
      /**  Set update time scale. 1.0 = real time (default.) */
      setTimeScale(scale: number): void;
      /**  Set elapsed time in seconds. This can be used to prevent inaccuracy in the timer if the scene runs for a long time. */
      setElapsedTime(time: number): void;
      /**  Set network client motion smoothing constant. */
      setSmoothingConstant(constant: number): void;
      /**  Set network client motion smoothing snap threshold. */
      setSnapThreshold(threshold: number): void;
      /**  Set maximum milliseconds per frame to spend on async scene loading. */
      setAsyncLoadingMs(ms: number): void;
      /**  Add a required package file for networking. To be called on the server. */
      addRequiredPackageFile(package: PackageFile): void;
      /**  Clear required package files. */
      clearRequiredPackageFiles(): void;
      /**  Register a node user variable hash reverse mapping (for editing.) */
      registerVar(name: string): void;
      /**  Unregister a node user variable hash reverse mapping. */
      unregisterVar(name: string): void;
      /**  Clear all registered node user variable hash reverse mappings. */
      unregisterAllVars(): void;
      /**  Return node from the whole scene by ID, or null if not found. */
      getNode(id: number): Node;
      /**  Return whether updates are enabled. */
      isUpdateEnabled(): boolean;
      /**  Return whether an asynchronous loading operation is in progress. */
      isAsyncLoading(): boolean;
      /**  Return asynchronous loading progress between 0.0 and 1.0, or 1.0 if not in progress. */
      getAsyncProgress(): number;
      /**  Return the load mode of the current asynchronous loading operation. */
      getAsyncLoadMode(): LoadMode;
      /**  Return source file name. */
      getFileName(): string;
      /**  Return source file checksum. */
      getChecksum(): number;
      /**  Return update time scale. */
      getTimeScale(): number;
      /**  Return elapsed time in seconds. */
      getElapsedTime(): number;
      /**  Return motion smoothing constant. */
      getSmoothingConstant(): number;
      /**  Return motion smoothing snap threshold. */
      getSnapThreshold(): number;
      /**  Return maximum milliseconds per frame to spend on async loading. */
      getAsyncLoadingMs(): number;
      /**  Return a node user variable name, or empty if not registered. */
      getVarName(hash: string): string;
      /**  Update scene. Called by HandleUpdate. */
      update(timeStep: number): void;
      /**  Begin a threaded update. During threaded update components can choose to delay dirty processing. */
      beginThreadedUpdate(): void;
      /**  End a threaded update. Notify components that marked themselves for delayed dirty processing. */
      endThreadedUpdate(): void;
      /**  Add a component to the delayed dirty notify queue. Is thread-safe. */
      delayedMarkedDirty(component: Component): void;
      /**  Return threaded update flag. */
      isThreadedUpdate(): boolean;
      /**  Get free node ID, either non-local or local. */
      getFreeNodeID(mode: CreateMode): number;
      /**  Get free component ID, either non-local or local. */
      getFreeComponentID(mode: CreateMode): number;
      /**  Cache node by tag if tag not zero, no checking if already added. Used internaly in Node::AddTag. */
      nodeTagAdded(node: Node, tag: string): void;
      /**  Cache node by tag if tag not zero. */
      nodeTagRemoved(node: Node, tag: string): void;
      /**  Node added. Assign scene pointer and add to ID map. */
      nodeAdded(node: Node): void;
      /**  Node removed. Remove from ID map. */
      nodeRemoved(node: Node): void;
      /**  Component added. Add to ID map. */
      componentAdded(component: Component): void;
      /**  Component removed. Remove from ID map. */
      componentRemoved(component: Component): void;
      /**  Set node user variable reverse mappings. */
      setVarNamesAttr(value: string): void;
      /**  Return node user variable reverse mappings. */
      getVarNamesAttr(): string;
      /**  Prepare network update by comparing attributes and marking replication states dirty as necessary. */
      prepareNetworkUpdate(): void;
      /**  Clean up all references to a network connection that is about to be removed. */
      cleanupConnection(connection: Connection): void;
      getMainCamera():Camera;

   }

   export class Serializable extends AObject {

      temporary: boolean;
      numAttributes: number;
      numNetworkAttributes: number;

      /**  Construct. */
      constructor();

      /**  Apply attribute changes that can not be applied immediately. Called after scene load or a network update. */
      applyAttributes(): void;
      /**  Return whether should save default-valued attributes into XML. Default false. */
      saveDefaultAttributes(): boolean;
      /**  Mark for attribute check on the next network update. */
      markNetworkUpdate(): void;
      /**  Reset all editable attributes to their default values. */
      resetToDefault(): void;
      /**  Remove instance's default values if they are set previously. */
      removeInstanceDefault(): void;
      /**  Set temporary flag. Temporary objects will not be saved. */
      setTemporary(enable: boolean): void;
      /**  Enable interception of an attribute from network updates. Intercepted attributes are sent as events instead of applying directly. This can be used to implement client side prediction. */
      setInterceptNetworkUpdate(attributeName: string, enable: boolean): void;
      /**  Allocate network attribute state. */
      allocateNetworkState(): void;
      /**  Return number of attributes. */
      getNumAttributes(): number;
      /**  Return number of network replication attributes. */
      getNumNetworkAttributes(): number;
      /**  Return whether is temporary. */
      isTemporary(): boolean;
      /**  Return whether an attribute's network updates are being intercepted. */
      getInterceptNetworkUpdate(attributeName: string): boolean;
      getAttributes():AttributeInfo[];
      getAttribute(name:string, index?:number):any;
      setAttribute(name:string, value:any, index?:number):void;

   }

   export class SmoothedTransform extends Component {

      targetPosition: Vector3;
      targetRotation: Quaternion;
      targetWorldPosition: Vector3;
      targetWorldRotation: Quaternion;
      inProgress: boolean;

      /**  Construct. */
      constructor();

      /**  Update smoothing. */
      update(constant: number, squaredSnapThreshold: number): void;
      /**  Set target position in parent space. */
      setTargetPosition(position: Vector3): void;
      /**  Set target rotation in parent space. */
      setTargetRotation(rotation: Quaternion): void;
      /**  Set target position in world space. */
      setTargetWorldPosition(position: Vector3): void;
      /**  Set target rotation in world space. */
      setTargetWorldRotation(rotation: Quaternion): void;
      /**  Return target position in parent space. */
      getTargetPosition(): Vector3;
      /**  Return target rotation in parent space. */
      getTargetRotation(): Quaternion;
      /**  Return target position in world space. */
      getTargetWorldPosition(): Vector3;
      /**  Return target rotation in world space. */
      getTargetWorldRotation(): Quaternion;
      /**  Return whether smoothing is in progress. */
      isInProgress(): boolean;

   }

   export class SplinePath extends Component {

      interpolationMode: InterpolationMode;
      speed: number;
      position: Vector3;
      controlledNode: Node;
      length: number;
      finished: boolean;
      controlPointIdsAttr: ScriptVector;
      controlledIdAttr: number;

      /**  Construct an Empty SplinePath. */
      constructor();

      /**  Apply Attributes to the SplinePath. */
      applyAttributes(): void;
      /**  Draw the Debug Geometry. */
      drawDebugGeometry(debug: DebugRenderer, depthTest: boolean): void;
      /**  Add a Node to the SplinePath as a Control Point. */
      addControlPoint(point: Node, index?: number): void;
      /**  Remove a Node Control Point from the SplinePath. */
      removeControlPoint(point: Node): void;
      /**  Clear the Control Points from the SplinePath. */
      clearControlPoints(): void;
      /**  Set the Interpolation Mode. */
      setInterpolationMode(interpolationMode: InterpolationMode): void;
      /**  Set the movement Speed. */
      setSpeed(speed: number): void;
      /**  Set the controlled Node's position on the SplinePath. */
      setPosition(factor: number): void;
      /**  Set the Node to be moved along the SplinePath. */
      setControlledNode(controlled: Node): void;
      /**  Get the Interpolation Mode. */
      getInterpolationMode(): InterpolationMode;
      /**  Get the movement Speed. */
      getSpeed(): number;
      /**  Get the length of SplinePath; */
      getLength(): number;
      /**  Get the parent Node's last position on the spline. */
      getPosition(): Vector3;
      /**  Get the controlled Node. */
      getControlledNode(): Node;
      /**  Get a point on the SplinePath from 0.f to 1.f where 0 is the start and 1 is the end. */
      getPoint(factor: number): Vector3;
      /**  Move the controlled Node to the next position along the SplinePath based off the Speed value. */
      move(timeStep: number): void;
      /**  Reset movement along the path. */
      reset(): void;
      /**  Returns whether the movement along the SplinePath is complete. */
      isFinished(): boolean;
      /**  Set Control Point Node IDs attribute. */
      setControlPointIdsAttr(value: ScriptVector): void;
      /**  Return Control Point Node IDs attribute. */
      getControlPointIdsAttr(outVector: ScriptVector): void;
      /**  Set Controlled Node ID attribute. */
      setControlledIdAttr(value: number): void;
      /**  Get Controlled Node ID attribute. */
      getControlledIdAttr(): number;

   }

   export class ValueAnimation extends Resource {

      interpolationMethod: InterpMethod;
      splineTension: number;
      valueType: VariantType;
      valid: boolean;
      beginTime: number;
      endTime: number;

      /**  Construct. */
      constructor();

      /**  Set interpolation method. */
      setInterpolationMethod(method: InterpMethod): void;
      /**  Set spline tension, should be between 0.0f and 1.0f, but this is not a must. */
      setSplineTension(tension: number): void;
      /**  Set value type. */
      setValueType(valueType: VariantType): void;
      /**  Set event frame. */
      setEventFrame(time: number, eventType: string): void;
      /**  Return animation is valid. */
      isValid(): boolean;
      /**  Return interpolation method. */
      getInterpolationMethod(): InterpMethod;
      /**  Return spline tension. */
      getSplineTension(): number;
      /**  Return value type. */
      getValueType(): VariantType;
      /**  Return begin time. */
      getBeginTime(): number;
      /**  Return end time. */
      getEndTime(): number;
      /**  Has event frames. */
      hasEventFrames(): boolean;

   }

   export class ValueAnimationInfo extends RefCounted {

      wrapMode: WrapMode;
      speed: number;
      target: AObject;
      animation: ValueAnimation;
      time: number;

      /**  Construct without target object. */
      constructor(animation: ValueAnimation, wrapMode: WrapMode, speed: number);

      /**  Advance time position and apply. Return true when the animation is finished. No-op when the target object is not defined. */
      update(timeStep: number): boolean;
      /**  Set time position and apply. Return true when the animation is finished. No-op when the target object is not defined. */
      setTime(time: number): boolean;
      /**  Set wrap mode. */
      setWrapMode(wrapMode: WrapMode): void;
      /**  Set speed. */
      setSpeed(speed: number): void;
      /**  Return target object. */
      getTarget(): AObject;
      /**  Return animation. */
      getAnimation(): ValueAnimation;
      /**  Return wrap mode. */
      getWrapMode(): WrapMode;
      /**  Return time position. */
      getTime(): number;
      /**  Return speed. */
      getSpeed(): number;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PrefabSave" **/
    export var PrefabSaveEventType : Atomic.EventType;

    /** object returned in the callback for the PrefabSave event.**/
    export interface PrefabSaveEvent extends Atomic.EventData {
        prefabComponent : Atomic.PrefabComponent;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PrefabSave event. **/
    export function PrefabSaveEvent (callback : Atomic.EventCallback<PrefabSaveEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PrefabSave event. **/ 
    export function PrefabSaveEventData (callbackData : PrefabSaveEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PrefabChanged" **/
    export var PrefabChangedEventType : Atomic.EventType;

    /** object returned in the callback for the PrefabChanged event.**/
    export interface PrefabChangedEvent extends Atomic.EventData {
        guid : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PrefabChanged event. 

     / Instead of using resource reload system which can be delayed due to file watchers, we explicitly send prefab changes
    **/
    export function PrefabChangedEvent (callback : Atomic.EventCallback<PrefabChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PrefabChanged event. **/ 
    export function PrefabChangedEventData (callbackData : PrefabChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneUpdate" **/
    export var SceneUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the SceneUpdate event.**/
    export interface SceneUpdateEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneUpdate event. 

     / Variable timestep scene update.
    **/
    export function SceneUpdateEvent (callback : Atomic.EventCallback<SceneUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneUpdate event. **/ 
    export function SceneUpdateEventData (callbackData : SceneUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneSubsystemUpdate" **/
    export var SceneSubsystemUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the SceneSubsystemUpdate event.**/
    export interface SceneSubsystemUpdateEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneSubsystemUpdate event. 

     / Scene subsystem update.
    **/
    export function SceneSubsystemUpdateEvent (callback : Atomic.EventCallback<SceneSubsystemUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneSubsystemUpdate event. **/ 
    export function SceneSubsystemUpdateEventData (callbackData : SceneSubsystemUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UpdateSmoothing" **/
    export var UpdateSmoothingEventType : Atomic.EventType;

    /** object returned in the callback for the UpdateSmoothing event.**/
    export interface UpdateSmoothingEvent extends Atomic.EventData {
        constant : number;
        squaredSnapThreshold : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UpdateSmoothing event. 

     / Scene transform smoothing update.
    **/
    export function UpdateSmoothingEvent (callback : Atomic.EventCallback<UpdateSmoothingEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UpdateSmoothing event. **/ 
    export function UpdateSmoothingEventData (callbackData : UpdateSmoothingEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneDrawableUpdateFinished" **/
    export var SceneDrawableUpdateFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the SceneDrawableUpdateFinished event.**/
    export interface SceneDrawableUpdateFinishedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneDrawableUpdateFinished event. 

     / Scene drawable update finished. Custom animation (eg. IK) can be done at this point.
    **/
    export function SceneDrawableUpdateFinishedEvent (callback : Atomic.EventCallback<SceneDrawableUpdateFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneDrawableUpdateFinished event. **/ 
    export function SceneDrawableUpdateFinishedEventData (callbackData : SceneDrawableUpdateFinishedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TargetPositionChanged" **/
    export var TargetPositionChangedEventType : Atomic.EventType;

    /** object returned in the callback for the TargetPositionChanged event.**/
    export interface TargetPositionChangedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TargetPositionChanged event. 

     / SmoothedTransform target position changed.
    **/
    export function TargetPositionChangedEvent (callback : Atomic.EventCallback<TargetPositionChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the TargetPositionChanged event. **/ 
    export function TargetPositionChangedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TargetRotationChanged" **/
    export var TargetRotationChangedEventType : Atomic.EventType;

    /** object returned in the callback for the TargetRotationChanged event.**/
    export interface TargetRotationChangedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TargetRotationChanged event. 

     / SmoothedTransform target position changed.
    **/
    export function TargetRotationChangedEvent (callback : Atomic.EventCallback<TargetRotationChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the TargetRotationChanged event. **/ 
    export function TargetRotationChangedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AttributeAnimationUpdate" **/
    export var AttributeAnimationUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the AttributeAnimationUpdate event.**/
    export interface AttributeAnimationUpdateEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AttributeAnimationUpdate event. 

     / Scene attribute animation update.
    **/
    export function AttributeAnimationUpdateEvent (callback : Atomic.EventCallback<AttributeAnimationUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AttributeAnimationUpdate event. **/ 
    export function AttributeAnimationUpdateEventData (callbackData : AttributeAnimationUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AttributeAnimationAdded" **/
    export var AttributeAnimationAddedEventType : Atomic.EventType;

    /** object returned in the callback for the AttributeAnimationAdded event.**/
    export interface AttributeAnimationAddedEvent extends Atomic.EventData {
        /**  animation pointer */
        objectAnimation : Atomic.AObject;
        attributeAnimationName : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AttributeAnimationAdded event. 

     / Attribute animation added to object animation.
    **/
    export function AttributeAnimationAddedEvent (callback : Atomic.EventCallback<AttributeAnimationAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AttributeAnimationAdded event. **/ 
    export function AttributeAnimationAddedEventData (callbackData : AttributeAnimationAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AttributeAnimationRemoved" **/
    export var AttributeAnimationRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the AttributeAnimationRemoved event.**/
    export interface AttributeAnimationRemovedEvent extends Atomic.EventData {
        /**  animation pointer */
        objectAnimation : Atomic.AObject;
        attributeAnimationName : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AttributeAnimationRemoved event. 

     / Attribute animation removed from object animation.
    **/
    export function AttributeAnimationRemovedEvent (callback : Atomic.EventCallback<AttributeAnimationRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AttributeAnimationRemoved event. **/ 
    export function AttributeAnimationRemovedEventData (callbackData : AttributeAnimationRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ScenePostUpdate" **/
    export var ScenePostUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the ScenePostUpdate event.**/
    export interface ScenePostUpdateEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        timeStep : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ScenePostUpdate event. 

     / Variable timestep scene post-update.
    **/
    export function ScenePostUpdateEvent (callback : Atomic.EventCallback<ScenePostUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ScenePostUpdate event. **/ 
    export function ScenePostUpdateEventData (callbackData : ScenePostUpdateEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AsyncLoadProgress" **/
    export var AsyncLoadProgressEventType : Atomic.EventType;

    /** object returned in the callback for the AsyncLoadProgress event.**/
    export interface AsyncLoadProgressEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        progress : number;
        loadedNodes : number;
        totalNodes : number;
        loadedResources : number;
        totalResources : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AsyncLoadProgress event. 

     / Asynchronous scene loading progress.
    **/
    export function AsyncLoadProgressEvent (callback : Atomic.EventCallback<AsyncLoadProgressEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AsyncLoadProgress event. **/ 
    export function AsyncLoadProgressEventData (callbackData : AsyncLoadProgressEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AsyncLoadFinished" **/
    export var AsyncLoadFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the AsyncLoadFinished event.**/
    export interface AsyncLoadFinishedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AsyncLoadFinished event. 

     / Asynchronous scene loading finished.
    **/
    export function AsyncLoadFinishedEvent (callback : Atomic.EventCallback<AsyncLoadFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AsyncLoadFinished event. **/ 
    export function AsyncLoadFinishedEventData (callbackData : AsyncLoadFinishedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeAdded" **/
    export var NodeAddedEventType : Atomic.EventType;

    /** object returned in the callback for the NodeAdded event.**/
    export interface NodeAddedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        parent : Atomic.Node;
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeAdded event. 

     / A child node has been added to a parent node.
    **/
    export function NodeAddedEvent (callback : Atomic.EventCallback<NodeAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeAdded event. **/ 
    export function NodeAddedEventData (callbackData : NodeAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeRemoved" **/
    export var NodeRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the NodeRemoved event.**/
    export interface NodeRemovedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        parent : Atomic.Node;
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeRemoved event. 

     / A child node is about to be removed from a parent node.
    **/
    export function NodeRemovedEvent (callback : Atomic.EventCallback<NodeRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeRemoved event. **/ 
    export function NodeRemovedEventData (callbackData : NodeRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ComponentAdded" **/
    export var ComponentAddedEventType : Atomic.EventType;

    /** object returned in the callback for the ComponentAdded event.**/
    export interface ComponentAddedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        component : Atomic.Component;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ComponentAdded event. 

     / A component has been created to a node.
    **/
    export function ComponentAddedEvent (callback : Atomic.EventCallback<ComponentAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ComponentAdded event. **/ 
    export function ComponentAddedEventData (callbackData : ComponentAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ComponentRemoved" **/
    export var ComponentRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the ComponentRemoved event.**/
    export interface ComponentRemovedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        component : Atomic.Component;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ComponentRemoved event. 

     / A component is about to be removed from a node.
    **/
    export function ComponentRemovedEvent (callback : Atomic.EventCallback<ComponentRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ComponentRemoved event. **/ 
    export function ComponentRemovedEventData (callbackData : ComponentRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeNameChanged" **/
    export var NodeNameChangedEventType : Atomic.EventType;

    /** object returned in the callback for the NodeNameChanged event.**/
    export interface NodeNameChangedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeNameChanged event. 

     / A node's name has changed.
    **/
    export function NodeNameChangedEvent (callback : Atomic.EventCallback<NodeNameChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeNameChanged event. **/ 
    export function NodeNameChangedEventData (callbackData : NodeNameChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeEnabledChanged" **/
    export var NodeEnabledChangedEventType : Atomic.EventType;

    /** object returned in the callback for the NodeEnabledChanged event.**/
    export interface NodeEnabledChangedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeEnabledChanged event. 

     / A node's enabled state has changed.
    **/
    export function NodeEnabledChangedEvent (callback : Atomic.EventCallback<NodeEnabledChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeEnabledChanged event. **/ 
    export function NodeEnabledChangedEventData (callbackData : NodeEnabledChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeTagAdded" **/
    export var NodeTagAddedEventType : Atomic.EventType;

    /** object returned in the callback for the NodeTagAdded event.**/
    export interface NodeTagAddedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        tag : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeTagAdded event. 

     / A node's tag has been added.
    **/
    export function NodeTagAddedEvent (callback : Atomic.EventCallback<NodeTagAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeTagAdded event. **/ 
    export function NodeTagAddedEventData (callbackData : NodeTagAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeTagRemoved" **/
    export var NodeTagRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the NodeTagRemoved event.**/
    export interface NodeTagRemovedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        tag : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeTagRemoved event. 

     / A node's tag has been removed.
    **/
    export function NodeTagRemovedEvent (callback : Atomic.EventCallback<NodeTagRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeTagRemoved event. **/ 
    export function NodeTagRemovedEventData (callbackData : NodeTagRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ComponentEnabledChanged" **/
    export var ComponentEnabledChangedEventType : Atomic.EventType;

    /** object returned in the callback for the ComponentEnabledChanged event.**/
    export interface ComponentEnabledChangedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        component : Atomic.Component;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ComponentEnabledChanged event. 

     / A component's enabled state has changed.
    **/
    export function ComponentEnabledChangedEvent (callback : Atomic.EventCallback<ComponentEnabledChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ComponentEnabledChanged event. **/ 
    export function ComponentEnabledChangedEventData (callbackData : ComponentEnabledChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "TemporaryChanged" **/
    export var TemporaryChangedEventType : Atomic.EventType;

    /** object returned in the callback for the TemporaryChanged event.**/
    export interface TemporaryChangedEvent extends Atomic.EventData {
        serializable : Atomic.Serializable;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the TemporaryChanged event. 

     / A serializable's temporary state has changed.
    **/
    export function TemporaryChangedEvent (callback : Atomic.EventCallback<TemporaryChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the TemporaryChanged event. **/ 
    export function TemporaryChangedEventData (callbackData : TemporaryChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NodeCloned" **/
    export var NodeClonedEventType : Atomic.EventType;

    /** object returned in the callback for the NodeCloned event.**/
    export interface NodeClonedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        cloneNode : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NodeCloned event. 

     / A node (and its children and components) has been cloned.
    **/
    export function NodeClonedEvent (callback : Atomic.EventCallback<NodeClonedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NodeCloned event. **/ 
    export function NodeClonedEventData (callbackData : NodeClonedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ComponentCloned" **/
    export var ComponentClonedEventType : Atomic.EventType;

    /** object returned in the callback for the ComponentCloned event.**/
    export interface ComponentClonedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        component : Atomic.Component;
        cloneComponent : Atomic.Component;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ComponentCloned event. 

     / A component has been cloned.
    **/
    export function ComponentClonedEvent (callback : Atomic.EventCallback<ComponentClonedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ComponentCloned event. **/ 
    export function ComponentClonedEventData (callbackData : ComponentClonedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "InterceptNetworkUpdate" **/
    export var InterceptNetworkUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the InterceptNetworkUpdate event.**/
    export interface InterceptNetworkUpdateEvent extends Atomic.EventData {
        serializable : Atomic.Serializable;
        timeStamp : number;
        index : number;
        name : string;
        /** Unmapped Native Type: Variant */
        value : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the InterceptNetworkUpdate event. 

     / A network attribute update from the server has been intercepted.
    **/
    export function InterceptNetworkUpdateEvent (callback : Atomic.EventCallback<InterceptNetworkUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the InterceptNetworkUpdate event. **/ 
    export function InterceptNetworkUpdateEventData (callbackData : InterceptNetworkUpdateEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Script
//----------------------------------------------------


   export class PhysicsContact extends RefCounted {

      position: Vector3;
      normal: Vector3;
      distance: number;
      impulse: number;

      constructor();

      getPosition(): Vector3;
      getNormal(): Vector3;
      getDistance(): number;
      getImpulse(): number;

   }

   export class PhysicsNodeCollision extends RefCounted {

      body: RigidBody;
      otherNode: Node;
      otherBody: RigidBody;
      trigger: boolean;
      contacts: string[];

      constructor();

      getBody(): RigidBody;
      getOtherNode(): Node;
      getOtherBody(): RigidBody;
      getTrigger(): boolean;
      getContacts(): string[];

   }

   export class ScriptComponent extends Component {

      componentClassName: string;
      componentFile: ScriptComponentFile;

      /**  Construct. */
      constructor();

      getComponentClassName(): string;
      getComponentFile(): ScriptComponentFile;

   }

   export class ScriptComponentFile extends Resource {

      classNames: string[];

      /**  Construct. */
      constructor();

      /**  Only valid in editor, as we don't inspect classnames at runtime */
      getClassNames(): string[];

   }

   export class ScriptVariant extends RefCounted {

      bool: boolean;
      int: number;
      uInt: number;
      float: number;
      vector2: Vector2;
      vector3: Vector3;
      resource: Resource;
      quaternion: Quaternion;
      vector4: Vector4;
      color: Color;
      string: string;
      variantVector: ScriptVector;

      constructor();

      getBool(): boolean;
      setBool(value: boolean): void;
      getInt(): number;
      setInt(value: number): void;
      getUInt(): number;
      setUInt(value: number): void;
      getFloat(): number;
      setFloat(value: number): void;
      getVector2(): Vector2;
      setVector2(value: Vector2): void;
      getVector3(): Vector3;
      getResource(): Resource;
      setResource(resource: Resource): void;
      setVector3(value: Vector3): void;
      getQuaternion(): Quaternion;
      setQuaternion(value: Quaternion): void;
      getVector4(): Vector4;
      setVector4(value: Vector4): void;
      getColor(): Color;
      setColor(value: Color): void;
      getString(): string;
      setString(value: string): void;
      getVariantVector(outVector: ScriptVector): void;
      setVariantVector(value: ScriptVector): void;

   }

   export class ScriptVariantMap extends RefCounted {

      constructor();

      getBool(key: string): boolean;
      getInt(key: string): number;
      getUInt(key: string): number;
      getFloat(key: string): number;
      getVector3(key: string): Vector3;
      getQuaternion(key: string): Quaternion;
      getPtr(key: string): RefCounted;
      getString(key: string): string;
      getVariantVector(key: string, outVector: ScriptVector): void;
      getVariantType(key: string): VariantType;
      getResourceFromRef(key: string): Resource;
      setBool(key: string, value: boolean): void;
      setUInt(key: string, value: number): void;
      setString(key: string, value: string): void;
      clear(): void;
      contains(key: string): boolean;

   }

   export class ScriptVector extends RefCounted {

      size: number;

      constructor();

      at(index: number): RefCounted;
      push(refCounted: RefCounted): void;
      setAt(index: number, refCounted: RefCounted): void;
      insert(index: number, refCounted: RefCounted): void;
      erase(index: number): void;
      remove(refCounted: RefCounted): boolean;
      clear(): void;
      getSize(): number;
      resize(size: number): void;
      adaptFromVector(vectorIn: ScriptVector): boolean;
      adaptToVector(vectorOut: ScriptVector): boolean;

   }



//----------------------------------------------------
// MODULE: UI
//----------------------------------------------------


   export class UI extends AObject {

      keyboardDisabled: boolean;
      inputDisabled: boolean;
      skinLoaded: boolean;
      debugHudProfileMode: DebugHudProfileMode;
      focusedWidget: boolean;
      blockChangedEvents: boolean;
      hoveredWidget: UIWidget;

      /**  Construct. */
      constructor();

      setKeyboardDisabled(disabled: boolean): void;
      setInputDisabled(disabled: boolean): void;
      render(resetRenderTargets?: boolean): void;
      initialize(languageFile: string): void;
      shutdown(): void;
      loadSkin(skin: string, overrideSkin?: string): void;
      getSkinLoaded(): boolean;
      /**  UI/Skin/Override/skin.ui.txt for base skin and possible override (TODO: baked in UI setting for load from project) */
      loadDefaultPlayerSkin(): void;
      addFont(fontFile: string, name: string): void;
      setDefaultFont(name: string, size: number): void;
      debugGetWrappedWidgetCount(): number;
      pruneUnreachableWidgets(): void;
      showDebugHud(value: boolean): void;
      toggleDebugHud(): void;
      /**  Cycle debug HUD between showing primitive stats, current mode, profiler data, all three or none */
      cycleDebugHudMode(): void;
      setDebugHudProfileMode(mode: DebugHudProfileMode): void;
      setDebugHudExtents(useRootExtents?: boolean, position?: IntVector2, size?: IntVector2): void;
      showConsole(value: boolean): void;
      toggleConsole(): void;
      getFocusedWidget(): boolean;
      /**  request exit on next frame */
      requestExit(): void;
      getWidgetAt(x: number, y: number, include_children: boolean): UIWidget;
      getBlockChangedEvents(): boolean;
      setBlockChangedEvents(blocked?: boolean): void;
      getHoveredWidget(): UIWidget;
      static debugShowSettingsWindow(parent: UIWidget): void;
      getWidgetAt<T extends UIWidget>(x: number, y: number, include_children: boolean): T;

   }

   export class UIBargraph extends UIWidget {

      constructor(createWidget?: boolean);


   }

   export class UIButton extends UIWidget {

      squeezable: boolean;
      emulationButton: number;
      urlEnabled: boolean;
      url: string;
      toggleMode: boolean;

      constructor(createWidget?: boolean);

      /**  If squeezable it may shrink to width 0 */
      setSqueezable(value: boolean): void;
      setEmulationButton(button: number): void;
      /**  for example a http:// link will open the default browser */
      setURLEnabled(enabled: boolean): void;
      /**  Set the URL which is opened when this button is clicked */
      setURL(url: string): void;
      /**  Get the URL which is opened when this button is clicked */
      getURL(): string;
      /** Set to true if the button should toggle on and off     */
      setToggleMode(toggle: boolean): void;
      getToggleMode(): boolean;
      onClick: () => void;

   }

   export class UICheckBox extends UIWidget {

      constructor(createWidget?: boolean);


   }

   export class UIClickLabel extends UIWidget {

      constructor(createWidget?: boolean);


   }

   export class UIColorWheel extends UIWidget {

      hue: number;
      saturation: number;

      constructor(createWidget?: boolean);

      getHue(): number;
      getSaturation(): number;
      setHueSaturation(hue: number, saturation: number): void;

   }

   export class UIColorWidget extends UIWidget {

      color: Color;
      colorString: string;
      alpha: number;

      constructor(createWidget?: boolean);

      /**  Set color from a Color value */
      setColor(color: Color): void;
      /**  Set color from hex string */
      setColorString(name: string): void;
      getColor(): Color;
      setAlpha(value: number): void;

   }

   export class UIContainer extends UIWidget {

      constructor(createWidget?: boolean);


   }

   export class UIDimmer extends UIWidget {

      constructor(createWidget?: boolean);


   }

   export class UIDragObject extends AObject {

      text: string;
      icon: string;
      object: AObject;
      filenames: string[];

      /**  Construct. */
      constructor(object?: AObject, text?: string, icon?: string);

      getText(): string;
      getIcon(): string;
      getObject(): AObject;
      getFilenames(): string[];
      setText(text: string): void;
      setIcon(icon: string): void;
      setObject(object: AObject): void;
      addFilename(filename: string): void;

   }

   export class UIEditField extends UIWidget {

      textAlign: UI_TEXT_ALIGN;
      adaptToContentSize: boolean;
      editType: UI_EDIT_TYPE;
      readOnly: boolean;
      styling: boolean;
      multiline: boolean;
      wrapping: boolean;

      constructor(createWidget?: boolean);

      appendText(text: string): void;
      setTextAlign(align: UI_TEXT_ALIGN): void;
      setAdaptToContentSize(adapt: boolean): void;
      getAdaptToContentSize(): boolean;
      setEditType(type: UI_EDIT_TYPE): void;
      setReadOnly(readonly: boolean): void;
      setStyling(styling: boolean): void;
      setMultiline(multiline: boolean): void;
      reformat(update_fragments?: boolean): void;
      scrollTo(x: number, y: number): void;
      setWrapping(wrap: boolean): void;
      getWrapping(): boolean;

   }

   export class UIFontDescription extends AObject {

      size: number;
      id: string;

      constructor();

      getSize(): number;
      setId(id: string): void;
      setSize(size: number): void;

   }

   export class UIImageWidget extends UIWidget {

      image: string;
      imageWidth: number;
      imageHeight: number;

      constructor(createWidget?: boolean);

      setImage(imagePath: string): void;
      getImageWidth(): number;
      getImageHeight(): number;

   }

   export class UIInlineSelect extends UIWidget {

      editFieldLayoutParams: UILayoutParams;

      constructor(createWidget?: boolean);

      setLimits(minimum: number, maximum: number): void;
      setEditFieldLayoutParams(params: UILayoutParams): void;

   }

   export class UILayout extends UIWidget {

      spacing: number;
      axis: UI_AXIS;
      layoutSize: UI_LAYOUT_SIZE;
      layoutPosition: UI_LAYOUT_POSITION;
      layoutDistribution: UI_LAYOUT_DISTRIBUTION;
      layoutDistributionPosition: UI_LAYOUT_DISTRIBUTION_POSITION;

      constructor(axis?: UI_AXIS, createWidget?: boolean);

      setSpacing(spacing: number): void;
      setAxis(axis: UI_AXIS): void;
      setLayoutSize(size: UI_LAYOUT_SIZE): void;
      setLayoutPosition(position: UI_LAYOUT_POSITION): void;
      setLayoutDistribution(distribution: UI_LAYOUT_DISTRIBUTION): void;
      setLayoutDistributionPosition(distribution_pos: UI_LAYOUT_DISTRIBUTION_POSITION): void;

   }

   export class UILayoutParams extends AObject {

      width: number;
      height: number;
      minWidth: number;
      minHeight: number;
      maxWidth: number;
      maxHeight: number;

      constructor();

      setWidth(width: number): void;
      setHeight(height: number): void;
      setMinWidth(width: number): void;
      setMinHeight(height: number): void;
      setMaxWidth(width: number): void;
      setMaxHeight(height: number): void;

   }

   export class UIListView extends UIWidget {

      multiSelect: boolean;
      hoverItemID: string;
      selectedItemID: string;
      rootList: UISelectList;

      /**  Construct. */
      constructor(createWidget?: boolean);

      addRootItem(text: string, icon: string, id: string): number;
      addChildItem(parentItemID: number, text: string, icon: string, id: string): number;
      setItemText(id: string, text: string): void;
      setItemTextSkin(id: string, skin: string): void;
      setItemIcon(id: string, icon: string): void;
      deleteItemByID(id: string): void;
      scrollToSelectedItem(): void;
      setExpanded(itemID: number, value: boolean): void;
      getExpanded(itemID: number): boolean;
      getExpandable(itemID: number): boolean;
      getMultiSelect(): boolean;
      setMultiSelect(value: boolean): void;
      deleteAllItems(): void;
      selectItemByID(id: string, selected?: boolean): void;
      getHoverItemID(): string;
      getSelectedItemID(): string;
      getRootList(): UISelectList;
      updateItemVisibility(): void;
      selectAllItems(select?: boolean): void;

   }

   export class UIMenuItem extends UISelectItem {

      constructor(str?: string, id?: string, shortcut?: string, skinBg?: string);


   }

   export class UIMenuItemSource extends UISelectItemSource {

      constructor();


   }

   export class UIMenuWindow extends UIWidget {

      constructor(target: UIWidget, id?: string);

      show(source: UISelectItemSource, x?: number, y?: number): void;
      close(): void;

   }

   export class UIMessageWindow extends UIWindow {

      constructor(target: UIWidget, id: string, createWidget?: boolean);

      show(title: string, message: string, settings: UI_MESSAGEWINDOW_SETTINGS, dimmer: boolean, width: number, height: number): void;

   }

   export class UIPreferredSize extends RefCounted {

      minWidth: number;
      minHeight: number;
      maxWidth: number;
      maxHeight: number;
      prefWidth: number;
      prefHeight: number;
      sizeDep: UI_SIZE_DEP;

      constructor(w?: number, h?: number);

      getMinWidth(): number;
      getMinHeight(): number;
      getMaxWidth(): number;
      getMaxHeight(): number;
      getPrefWidth(): number;
      getPrefHeight(): number;
      getSizeDep(): UI_SIZE_DEP;
      setMinWidth(w: number): void;
      setMinHeight(h: number): void;
      setMaxWidth(w: number): void;
      setMaxHeight(h: number): void;
      setPrefWidth(w: number): void;
      setPrefHeight(h: number): void;
      setSizeDep(dep: UI_SIZE_DEP): void;

   }

   export class UISceneView extends UIWidget {

      format: number;
      autoUpdate: boolean;
      scene: Scene;
      cameraNode: Node;
      renderTexture: Texture2D;
      depthTexture: Texture2D;
      viewport: Viewport;
      size: IntVector2;

      constructor(createWidget?: boolean);

      /**  React to resize. */
      onResize(newSize: IntVector2): void;
      /**  Define the scene and camera to use in rendering. When ownScene is true the View3D will take ownership of them with shared pointers. */
      setView(scene: Scene, camera: Camera): void;
      /**  Set render texture pixel format. Default is RGB. */
      setFormat(format: number): void;
      /**  Set render target auto update mode. Default is true. */
      setAutoUpdate(enable: boolean): void;
      /**  Queue manual update on the render texture. */
      queueUpdate(): void;
      /**  Return render texture pixel format. */
      getFormat(): number;
      /**  Return whether render target updates automatically. */
      getAutoUpdate(): boolean;
      /**  Return scene. */
      getScene(): Scene;
      /**  Return camera scene node. */
      getCameraNode(): Node;
      /**  Return render texture. */
      getRenderTexture(): Texture2D;
      /**  Return depth stencil texture. */
      getDepthTexture(): Texture2D;
      /**  Return viewport. */
      getViewport(): Viewport;
      setResizeRequired(): void;
      getSize(): IntVector2;

   }

   export class UIScrollContainer extends UIWidget {

      scrollMode: UI_SCROLL_MODE;
      adaptToContentSize: boolean;
      adaptContentSize: boolean;

      constructor(createWidget?: boolean);

      setScrollMode(mode: UI_SCROLL_MODE): void;
      getScrollMode(): UI_SCROLL_MODE;
      /**  Set to true if the preferred size of this container should adapt to the preferred size of the content. This is disabled by default. */
      setAdaptToContentSize(adapt: boolean): void;
      getAdaptToContentSize(): boolean;
      /**  Set to true if the content should adapt to the available size of this container when it's larger than the preferred size. */
      setAdaptContentSize(adapt: boolean): void;
      getAdaptContentSize(): boolean;
      scrollTo(x: number, y: number): void;

   }

   export class UISection extends UIWidget {

      constructor(createWidget?: boolean);


   }

   export class UISelectDropdown extends UIButton {

      source: UISelectItemSource;

      constructor(createWidget?: boolean);

      setSource(source: UISelectItemSource): void;

   }

   export class UISelectItem extends AObject {

      string: string;
      id: string;
      str: string;
      skinImage: string;
      subSource: UISelectItemSource;

      constructor(str?: string, id?: string, skinImage?: string);

      setString(str: string): void;
      setID(id: string): void;
      getStr(): string;
      setSkinImage(skinImage: string): void;
      setSubSource(subSource: UISelectItemSource): void;

   }

   export class UISelectItemSource extends AObject {

      itemCount: number;

      constructor();

      addItem(item: UISelectItem): void;
      removeItemWithId(id: string): void;
      removeItemWithStr(str: string): void;
      getItemCount(): number;
      clear(): void;
      /**  Returns item string for the index. Returns empty string for invalid indexes. */
      getItemStr(index: number): string;

   }

   export class UISelectList extends UIWidget {

      filter: string;
      source: UISelectItemSource;
      value: number;
      hoverItemID: string;
      selectedItemID: string;
      numItems: number;
      uIListView: boolean;

      constructor(createWidget?: boolean);

      setFilter(filter: string): void;
      setSource(source: UISelectItemSource): void;
      invalidateList(): void;
      setValue(value: number): void;
      getValue(): number;
      getHoverItemID(): string;
      getSelectedItemID(): string;
      scrollToSelectedItem(): void;
      getItemID(index: number): string;
      getItemSelected(index: number): boolean;
      getNumItems(): number;
      selectItem(index: number, selected?: boolean): void;
      selectNextItem(): void;
      selectPreviousItem(): void;
      setUIListView(value: boolean): void;

   }

   export class UISeparator extends UIWidget {

      constructor(createWidget?: boolean);


   }

   export class UISkinImage extends UIWidget {

      constructor(bitmapID: string, createWidget?: boolean);


   }

   export class UISlider extends UIWidget {

      constructor(createWidget?: boolean);

      setLimits(minimum: number, maximum: number): void;

   }

   export class UITabContainer extends UIWidget {

      numPages: number;
      currentPage: number;
      currentPageWidget: UIWidget;
      tabLayout: UILayout;

      constructor(createWidget?: boolean);

      getNumPages(): number;
      setCurrentPage(page: number): void;
      getCurrentPageWidget(): UIWidget;
      getTabLayout(): UILayout;

   }

   export class UITextField extends UIWidget {

      textAlign: UI_TEXT_ALIGN;

      constructor(createWidget?: boolean);

      setTextAlign(align: UI_TEXT_ALIGN): void;

   }

   export class UITextureWidget extends UIWidget {

      texture: Texture;

      constructor(createWidget?: boolean);

      setTexture(texture: Texture): void;
      getTexture(): Texture;

   }

   export class UIView extends UIWidget {

      constructor();


   }

   export class UIWidget extends AObject {

      id: string;
      parent: UIWidget;
      contentRoot: UIWidget;
      rect: IntRect;
      preferredSize: UIPreferredSize;
      text: string;
      skinBg: string;
      layoutParams: UILayoutParams;
      fontDescription: UIFontDescription;
      gravity: UI_GRAVITY;
      axis: UI_AXIS;
      value: number;
      focus: boolean;
      visibility: UI_WIDGET_VISIBILITY;
      stateRaw: UI_WIDGET_STATE;
      dragObject: UIDragObject;
      firstChild: UIWidget;
      next: UIWidget;
      isFocusable: boolean;
      view: UIView;
      delegate: UIWidget;
      multiTouch: boolean;
      captured: boolean;
      capturing: boolean;
      shortened: boolean;
      tooltip: string;
      fontId: string;
      fontSize: number;
      x: number;
      y: number;
      width: number;
      height: number;
      layoutWidth: number;
      layoutHeight: number;
      layoutPrefWidth: number;
      layoutPrefHeight: number;
      layoutMinWidth: number;
      layoutMinHeight: number;
      layoutMaxWidth: number;
      layoutMaxHeight: number;
      opacity: number;
      autoOpacity: number;

      constructor(createWidget?: boolean);

      load(filename: string): boolean;
      getId(): string;
      getParent(): UIWidget;
      getContentRoot(): UIWidget;
      getRect(): IntRect;
      getPreferredSize(): UIPreferredSize;
      getText(): string;
      setRect(r: IntRect): void;
      setSize(width: number, height: number): void;
      setPosition(x: number, y: number): void;
      setText(text: string): void;
      setSkinBg(id: string): void;
      setLayoutParams(params: UILayoutParams): void;
      setFontDescription(fd: UIFontDescription): void;
      remove(): void;
      removeChild(child: UIWidget, cleanup?: boolean): void;
      deleteAllChildren(): void;
      setId(id: string): void;
      center(): void;
      setGravity(gravity: UI_GRAVITY): void;
      setAxis(axis: UI_AXIS): void;
      setValue(value: number): void;
      getValue(): number;
      setFocus(): void;
      getFocus(): boolean;
      /**  Set focus to first widget which accepts it */
      setFocusRecursive(): void;
      onFocusChanged(focused: boolean): void;
      setState(state: UI_WIDGET_STATE, on: boolean): void;
      getState(state: UI_WIDGET_STATE): boolean;
      setVisibility(visibility: UI_WIDGET_VISIBILITY): void;
      getVisibility(): UI_WIDGET_VISIBILITY;
      setStateRaw(state: UI_WIDGET_STATE): void;
      getStateRaw(): UI_WIDGET_STATE;
      invalidate(): void;
      die(): void;
      setDragObject(object: UIDragObject): void;
      getDragObject(): UIDragObject;
      getFirstChild(): UIWidget;
      getNext(): UIWidget;
      isAncestorOf(widget: UIWidget): boolean;
      setIsFocusable(value: boolean): void;
      getWidget(id: string): UIWidget;
      getView(): UIView;
      addChild(child: UIWidget): void;
      addChildAfter(child: UIWidget, otherChild: UIWidget): void;
      addChildBefore(child: UIWidget, otherChild: UIWidget): void;
      /**  This takes a relative Z and insert the child before or after the given reference widget. */
      addChildRelative(child: UIWidget, z: UI_WIDGET_Z_REL, reference: UIWidget): void;
      invalidateLayout(): void;
      setDelegate(widget: UIWidget): void;
      setMultiTouch(multiTouch: boolean): void;
      isMultiTouch(): boolean;
      getCaptured(): boolean;
      setCapturing(capturing: boolean): void;
      getCapturing(): boolean;
      invokeShortcut(shortcut: string): void;
      getShortened(): boolean;
      setShortened(shortened: boolean): void;
      getTooltip(): string;
      setTooltip(text: string): void;
      enable(): void;
      disable(): void;
      setFontId(fontId: string): void;
      getFontId(): string;
      setFontSize(size: number): void;
      getFontSize(): number;
      setX(x: number): void;
      getX(): number;
      setY(y: number): void;
      getY(): number;
      setWidth(width: number): void;
      getWidth(): number;
      setHeight(height: number): void;
      getHeight(): number;
      setLayoutWidth(width: number): void;
      getLayoutWidth(): number;
      setLayoutHeight(height: number): void;
      getLayoutHeight(): number;
      setLayoutPrefWidth(width: number): void;
      getLayoutPrefWidth(): number;
      setLayoutPrefHeight(height: number): void;
      getLayoutPrefHeight(): number;
      setLayoutMinWidth(width: number): void;
      getLayoutMinWidth(): number;
      setLayoutMinHeight(height: number): void;
      getLayoutMinHeight(): number;
      setLayoutMaxWidth(width: number): void;
      getLayoutMaxWidth(): number;
      setLayoutMaxHeight(height: number): void;
      getLayoutMaxHeight(): number;
      convertToRoot(position: IntVector2): IntVector2;
      convertFromRoot(position: IntVector2): IntVector2;
      setOpacity(opacity: number): void;
      getOpacity(): number;
      setAutoOpacity(autoOpacity: number): void;
      getAutoOpacity(): number;
      getWidget<T extends UIWidget>(id: string): T;

   }

   export class UIWindow extends UIWidget {

      settings: UI_WINDOW_SETTINGS;

      constructor(createWidget?: boolean);

      getSettings(): UI_WINDOW_SETTINGS;
      setSettings(settings: UI_WINDOW_SETTINGS): void;
      resizeToFitContent(): void;
      addChild(child: UIWidget): void;
      close(): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIUpdate" **/
    export var UIUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the UIUpdate event.**/
    export interface UIUpdateEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIUpdate event. 

     UIUpdate event
    **/
    export function UIUpdateEvent (callback : Atomic.EventCallback<UIUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the UIUpdate event. **/ 
    export function UIUpdateEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WidgetEvent" **/
    export var UIWidgetEventType : Atomic.EventType;

    /** object returned in the callback for the WidgetEvent event.**/
    export interface UIWidgetEvent extends Atomic.EventData {
        /**  pointer of widget's OnEvent we are in */
        handler : Atomic.UIWidget;
        target : Atomic.UIWidget;
        type : Atomic.UI_EVENT_TYPE;
        x : number;
        y : number;
        deltaX : number;
        deltaY : number;
        count : number;
        key : number;
        specialKey : number;
        modifierKeys : number;
        refid : string;
        touch : boolean;
        /**  -> bool */
        /** Unmapped Native Type: [OUT] */
        handled : any;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WidgetEvent event. **/
    export function UIWidgetEvent (callback : Atomic.EventCallback<UIWidgetEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WidgetEvent event. **/ 
    export function UIWidgetEventData (callbackData : UIWidgetEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WidgetLoaded" **/
    export var WidgetLoadedEventType : Atomic.EventType;

    /** object returned in the callback for the WidgetLoaded event.**/
    export interface WidgetLoadedEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WidgetLoaded event. **/
    export function WidgetLoadedEvent (callback : Atomic.EventCallback<WidgetLoadedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WidgetLoaded event. **/ 
    export function WidgetLoadedEventData (callbackData : WidgetLoadedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WidgetFocusChanged" **/
    export var WidgetFocusChangedEventType : Atomic.EventType;

    /** object returned in the callback for the WidgetFocusChanged event.**/
    export interface WidgetFocusChangedEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
        focused : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WidgetFocusChanged event. **/
    export function WidgetFocusChangedEvent (callback : Atomic.EventCallback<WidgetFocusChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WidgetFocusChanged event. **/ 
    export function WidgetFocusChangedEventData (callbackData : WidgetFocusChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WidgetDeleted" **/
    export var UIWidgetDeletedEventType : Atomic.EventType;

    /** object returned in the callback for the WidgetDeleted event.**/
    export interface UIWidgetDeletedEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WidgetDeleted event. **/
    export function UIWidgetDeletedEvent (callback : Atomic.EventCallback<UIWidgetDeletedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WidgetDeleted event. **/ 
    export function UIWidgetDeletedEventData (callbackData : UIWidgetDeletedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "DragBegin" **/
    export var DragBeginEventType : Atomic.EventType;

    /** object returned in the callback for the DragBegin event.**/
    export interface DragBeginEvent extends Atomic.EventData {
        source : Atomic.UIWidget;
        dragObject : Atomic.UIDragObject;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the DragBegin event. **/
    export function DragBeginEvent (callback : Atomic.EventCallback<DragBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the DragBegin event. **/ 
    export function DragBeginEventData (callbackData : DragBeginEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "DragEnterWidget" **/
    export var DragEnterWidgetEventType : Atomic.EventType;

    /** object returned in the callback for the DragEnterWidget event.**/
    export interface DragEnterWidgetEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
        dragObject : Atomic.UIDragObject;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the DragEnterWidget event. **/
    export function DragEnterWidgetEvent (callback : Atomic.EventCallback<DragEnterWidgetEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the DragEnterWidget event. **/ 
    export function DragEnterWidgetEventData (callbackData : DragEnterWidgetEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "DragExitWidget" **/
    export var DragExitWidgetEventType : Atomic.EventType;

    /** object returned in the callback for the DragExitWidget event.**/
    export interface DragExitWidgetEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
        dragObject : Atomic.UIDragObject;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the DragExitWidget event. **/
    export function DragExitWidgetEvent (callback : Atomic.EventCallback<DragExitWidgetEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the DragExitWidget event. **/ 
    export function DragExitWidgetEventData (callbackData : DragExitWidgetEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "DragEnded" **/
    export var DragEndedEventType : Atomic.EventType;

    /** object returned in the callback for the DragEnded event.**/
    export interface DragEndedEvent extends Atomic.EventData {
        target : Atomic.UIWidget;
        dragObject : Atomic.UIDragObject;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the DragEnded event. **/
    export function DragEndedEvent (callback : Atomic.EventCallback<DragEndedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the DragEnded event. **/ 
    export function DragEndedEventData (callbackData : DragEndedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PopupMenuSelect" **/
    export var PopupMenuSelectEventType : Atomic.EventType;

    /** object returned in the callback for the PopupMenuSelect event.**/
    export interface PopupMenuSelectEvent extends Atomic.EventData {
        /**  that created popup */
        button : Atomic.UIButton;
        refid : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PopupMenuSelect event. **/
    export function PopupMenuSelectEvent (callback : Atomic.EventCallback<PopupMenuSelectEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PopupMenuSelect event. **/ 
    export function PopupMenuSelectEventData (callbackData : PopupMenuSelectEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIShortcut" **/
    export var UIShortcutEventType : Atomic.EventType;

    /** object returned in the callback for the UIShortcut event.**/
    export interface UIShortcutEvent extends Atomic.EventData {
        key : number;
        qualifiers : number;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIShortcut event. **/
    export function UIShortcutEvent (callback : Atomic.EventCallback<UIShortcutEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UIShortcut event. **/ 
    export function UIShortcutEventData (callbackData : UIShortcutEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WindowClosed" **/
    export var WindowClosedEventType : Atomic.EventType;

    /** object returned in the callback for the WindowClosed event.**/
    export interface WindowClosedEvent extends Atomic.EventData {
        window : Atomic.UIWindow;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WindowClosed event. **/
    export function WindowClosedEvent (callback : Atomic.EventCallback<WindowClosedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WindowClosed event. **/ 
    export function WindowClosedEventData (callbackData : WindowClosedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIWidgetFocusChanged" **/
    export var UIWidgetFocusChangedEventType : Atomic.EventType;

    /** object returned in the callback for the UIWidgetFocusChanged event.**/
    export interface UIWidgetFocusChangedEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
        focused : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIWidgetFocusChanged event. **/
    export function UIWidgetFocusChangedEvent (callback : Atomic.EventCallback<UIWidgetFocusChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UIWidgetFocusChanged event. **/ 
    export function UIWidgetFocusChangedEventData (callbackData : UIWidgetFocusChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIWidgetFocusEscaped" **/
    export var UIWidgetFocusEscapedEventType : Atomic.EventType;

    /** object returned in the callback for the UIWidgetFocusEscaped event.**/
    export interface UIWidgetFocusEscapedEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIWidgetFocusEscaped event. **/
    export function UIWidgetFocusEscapedEvent (callback : Atomic.EventCallback<UIWidgetFocusEscapedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the UIWidgetFocusEscaped event. **/ 
    export function UIWidgetFocusEscapedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIWidgetEditCanceled" **/
    export var UIWidgetEditCanceledEventType : Atomic.EventType;

    /** object returned in the callback for the UIWidgetEditCanceled event.**/
    export interface UIWidgetEditCanceledEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIWidgetEditCanceled event. **/
    export function UIWidgetEditCanceledEvent (callback : Atomic.EventCallback<UIWidgetEditCanceledEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UIWidgetEditCanceled event. **/ 
    export function UIWidgetEditCanceledEventData (callbackData : UIWidgetEditCanceledEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIWidgetEditComplete" **/
    export var UIWidgetEditCompleteEventType : Atomic.EventType;

    /** object returned in the callback for the UIWidgetEditComplete event.**/
    export interface UIWidgetEditCompleteEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIWidgetEditComplete event. **/
    export function UIWidgetEditCompleteEvent (callback : Atomic.EventCallback<UIWidgetEditCompleteEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UIWidgetEditComplete event. **/ 
    export function UIWidgetEditCompleteEventData (callbackData : UIWidgetEditCompleteEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIUnhandledShortcut" **/
    export var UIUnhandledShortcutEventType : Atomic.EventType;

    /** object returned in the callback for the UIUnhandledShortcut event.**/
    export interface UIUnhandledShortcutEvent extends Atomic.EventData {
        refid : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIUnhandledShortcut event. **/
    export function UIUnhandledShortcutEvent (callback : Atomic.EventCallback<UIUnhandledShortcutEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UIUnhandledShortcut event. **/ 
    export function UIUnhandledShortcutEventData (callbackData : UIUnhandledShortcutEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UIListViewSelectionChanged" **/
    export var UIListViewSelectionChangedEventType : Atomic.EventType;

    /** object returned in the callback for the UIListViewSelectionChanged event.**/
    export interface UIListViewSelectionChangedEvent extends Atomic.EventData {
        refid : string;
        selected : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UIListViewSelectionChanged event. **/
    export function UIListViewSelectionChangedEvent (callback : Atomic.EventCallback<UIListViewSelectionChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UIListViewSelectionChanged event. **/ 
    export function UIListViewSelectionChangedEventData (callbackData : UIListViewSelectionChangedEvent) : Atomic.EventCallbackMetaData; 



//----------------------------------------------------
// MODULE: Web
//----------------------------------------------------


   export class Web extends AObject {

      /**  Construct. */
      constructor();

      /**  Perform an HTTP request to the specified URL. Empty verb defaults to a GET request. Return a request object which can be used to read the response data. */
      makeWebRequest(verb: string, url: string, requestContentSize?: number): WebRequest;
      /**  Perform an WebSocket request to the specified URL. Return a WebSocket object which can be used to comunicate with the server. */
      makeWebSocket(url: string): WebSocket;

   }

   export class WebRequest extends AObject {

      url: string;
      error: string;
      state: WebRequestState;
      verb: string;
      open: boolean;
      allResponseHeaders: string;
      postData: string;
      response: string;

      /**  Construct with parameters. */
      constructor(verb: string, url: string, requestContentSize?: number);

      /**  Return URL used in the request. */
      getURL(): string;
      /**  Return error. Only non-empty in the error state. */
      getError(): string;
      /**  Return connection state. */
      getState(): WebRequestState;
      /**  Get the HTTP verb for this request. */
      getVerb(): string;
      /**  Abort the WebRequest. */
      abort(): void;
      /**  Return whether connection is in the open state. */
      isOpen(): boolean;
      /**  Return whether E_WEBREQUESTDOWNLOADCHUNK event will be fired or if only E_WEBREQUESTCOMPLETE will be. */
      hasDownloadChunkEvent(): boolean;
      /**  Set an HTTP request header (only works before Send has been called). */
      setRequestHeader(header: string, value: string): void;
      /**  Start sending the request. */
      send(): void;
      /**  Get an HTTP response header. */
      getResponseHeader(header: string): string;
      /**  Get all HTTP response headers. Using GetResponseHeaderKeys() and GetResponseHeader() is more efficient than using this function. */
      getAllResponseHeaders(): string;
      /**  Set post data for request */
      setPostData(postData: string): void;
      /**  Get the request response as a string */
      getResponse(): string;

   }

   export class WebSocket extends AObject {

      url: string;
      error: string;
      state: WebSocketState;
      open: boolean;

      /**  Construct with parameters. */
      constructor(url: string);

      /**  Return URL used in the request. */
      getURL(): string;
      /**  Return error. Only non-empty in the error state. */
      getError(): string;
      /**  Return connection state. */
      getState(): WebSocketState;
      /**  Send a message. */
      send(message: string): void;
      /**  Disconnect the WebSocket. */
      close(): void;
      /**  Attempt to reconnect the WebSocket. */
      openAgain(): void;
      /**  Return whether connection is in the open state. */
      isOpen(): boolean;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebRequestComplete" **/
    export var WebRequestCompleteEventType : Atomic.EventType;

    /** object returned in the callback for the WebRequestComplete event.**/
    export interface WebRequestCompleteEvent extends Atomic.EventData {
        request : Atomic.WebRequest;
        error : string;
        /** Unmapped Native Type: Deserializer */
        download : any;
        /** Unmapped Native Type: Serializer */
        upload : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebRequestComplete event. 

     / WebRequest has completed
    **/
    export function WebRequestCompleteEvent (callback : Atomic.EventCallback<WebRequestCompleteEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebRequestComplete event. **/ 
    export function WebRequestCompleteEventData (callbackData : WebRequestCompleteEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebRequestProgress" **/
    export var WebRequestProgressEventType : Atomic.EventType;

    /** object returned in the callback for the WebRequestProgress event.**/
    export interface WebRequestProgressEvent extends Atomic.EventData {
        request : Atomic.WebRequest;
        downloadTotal : number;
        downloaded : number;
        uploadTotal : number;
        uploaded : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebRequestProgress event. 

     / WebRequest progress event
    **/
    export function WebRequestProgressEvent (callback : Atomic.EventCallback<WebRequestProgressEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebRequestProgress event. **/ 
    export function WebRequestProgressEventData (callbackData : WebRequestProgressEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebRequestDownloadChunk" **/
    export var WebRequestDownloadChunkEventType : Atomic.EventType;

    /** object returned in the callback for the WebRequestDownloadChunk event.**/
    export interface WebRequestDownloadChunkEvent extends Atomic.EventData {
        request : Atomic.WebRequest;
        /** Unmapped Native Type: Deserializer */
        download : any;
        chunkSize : number;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebRequestDownloadChunk event. **/
    export function WebRequestDownloadChunkEvent (callback : Atomic.EventCallback<WebRequestDownloadChunkEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebRequestDownloadChunk event. **/ 
    export function WebRequestDownloadChunkEventData (callbackData : WebRequestDownloadChunkEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebRequestUploadChunk" **/
    export var WebRequestUploadChunkEventType : Atomic.EventType;

    /** object returned in the callback for the WebRequestUploadChunk event.**/
    export interface WebRequestUploadChunkEvent extends Atomic.EventData {
        request : Atomic.WebRequest;
        /** Unmapped Native Type: Serializer */
        upload : any;
        bytesRemaining : number;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebRequestUploadChunk event. **/
    export function WebRequestUploadChunkEvent (callback : Atomic.EventCallback<WebRequestUploadChunkEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebRequestUploadChunk event. **/ 
    export function WebRequestUploadChunkEventData (callbackData : WebRequestUploadChunkEvent) : Atomic.EventCallbackMetaData; 



}
//////////////////////////////////////////////////////////
// IMPORTANT: THIS FILE IS GENERATED, CHANGES WILL BE LOST
//////////////////////////////////////////////////////////

// Atomic TypeScript Definitions

/// <reference path="Atomic.d.ts" />

declare module AtomicApp {


//----------------------------------------------------
// MODULE: AtomicApp
//----------------------------------------------------


   export class AppBase extends Atomic.Application {

      /**  Construct. */
      constructor();

      /**  Setup before engine initialization.  */
      setup(): void;
      /**  Setup after engine initialization. L */
      start(): void;
      /**  Cleanup after the main loop.  */
      stop(): void;
      /**  Run a single frame, return's true if engine is exiting */
      runFrame(): boolean;
      shutdown(): void;
      /**  Called before initializing application for inserting arguments */
      static addArgument(argument: string): void;
      processArguments(): void;
      static addEngineConfigSearchPath(path: string): void;

   }

   export class IPCClientApp extends AppBase {

      /**  Construct. */
      constructor();

      setup(): void;
      initialize(args: string[]): boolean;

   }

   export class IPCPlayerApp extends PlayerApp {

      /**  Construct. */
      constructor();

      /**  Setup before engine initialization.  */
      setup(): void;
      /**  Setup after engine initialization. L */
      start(): void;
      /**  Cleanup after the main loop.  */
      stop(): void;
      processArguments(): void;
      reconnect(): void;

   }

   export class PlayerApp extends AppBase {

      /**  Construct. */
      constructor();

      /**  Setup before engine initialization.  */
      setup(): void;
      /**  Setup after engine initialization. L */
      start(): void;
      /**  Cleanup after the main loop.  */
      stop(): void;
      processArguments(): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCPlayerPauseResumeRequest" **/
    export var IPCPlayerPauseResumeRequestEventType : Atomic.EventType;

    /** object returned in the callback for the IPCPlayerPauseResumeRequest event.**/
    export interface IPCPlayerPauseResumeRequestEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCPlayerPauseResumeRequest event. **/
    export function IPCPlayerPauseResumeRequestEvent (callback : Atomic.EventCallback<IPCPlayerPauseResumeRequestEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the IPCPlayerPauseResumeRequest event. **/ 
    export function IPCPlayerPauseResumeRequestEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCPlayerUpdatesPausedResumed" **/
    export var IPCPlayerUpdatesPausedResumedEventType : Atomic.EventType;

    /** object returned in the callback for the IPCPlayerUpdatesPausedResumed event.**/
    export interface IPCPlayerUpdatesPausedResumedEvent extends Atomic.EventData {
        paused : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCPlayerUpdatesPausedResumed event. **/
    export function IPCPlayerUpdatesPausedResumedEvent (callback : Atomic.EventCallback<IPCPlayerUpdatesPausedResumedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCPlayerUpdatesPausedResumed event. **/ 
    export function IPCPlayerUpdatesPausedResumedEventData (callbackData : IPCPlayerUpdatesPausedResumedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCPlayerPauseStepRequest" **/
    export var IPCPlayerPauseStepRequestEventType : Atomic.EventType;

    /** object returned in the callback for the IPCPlayerPauseStepRequest event.**/
    export interface IPCPlayerPauseStepRequestEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCPlayerPauseStepRequest event. **/
    export function IPCPlayerPauseStepRequestEvent (callback : Atomic.EventCallback<IPCPlayerPauseStepRequestEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the IPCPlayerPauseStepRequest event. **/ 
    export function IPCPlayerPauseStepRequestEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCPlayerExitRequest" **/
    export var IPCPlayerExitRequestEventType : Atomic.EventType;

    /** object returned in the callback for the IPCPlayerExitRequest event.**/
    export interface IPCPlayerExitRequestEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCPlayerExitRequest event. **/
    export function IPCPlayerExitRequestEvent (callback : Atomic.EventCallback<IPCPlayerExitRequestEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the IPCPlayerExitRequest event. **/ 
    export function IPCPlayerExitRequestEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "IPCPlayerWindowChanged" **/
    export var IPCPlayerWindowChangedEventType : Atomic.EventType;

    /** object returned in the callback for the IPCPlayerWindowChanged event.**/
    export interface IPCPlayerWindowChangedEvent extends Atomic.EventData {
        posX : number;
        posY : number;
        width : number;
        height : number;
        monitor : number;
        maximized : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the IPCPlayerWindowChanged event. **/
    export function IPCPlayerWindowChangedEvent (callback : Atomic.EventCallback<IPCPlayerWindowChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the IPCPlayerWindowChanged event. **/ 
    export function IPCPlayerWindowChangedEventData (callbackData : IPCPlayerWindowChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PlayerQuit" **/
    export var PlayerQuitEventType : Atomic.EventType;

    /** object returned in the callback for the PlayerQuit event.**/
    export interface PlayerQuitEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PlayerQuit event. **/
    export function PlayerQuitEvent (callback : Atomic.EventCallback<PlayerQuitEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the PlayerQuit event. **/ 
    export function PlayerQuitEventData () : Atomic.EventCallbackMetaData; 



}
//////////////////////////////////////////////////////////
// IMPORTANT: THIS FILE IS GENERATED, CHANGES WILL BE LOST
//////////////////////////////////////////////////////////

// Atomic TypeScript Definitions

/// <reference path="Atomic.d.ts" />

declare module AtomicNETScript {


//----------------------------------------------------
// MODULE: AtomicNETScript
//----------------------------------------------------


   export class CSComponent extends Atomic.ScriptComponent {

      componentClassName: string;
      componentFile: Atomic.ScriptComponentFile;

      /**  Construct. */
      constructor();

      applyAttributes(): void;
      /**  Handle enabled/disabled state change. Changes update event subscription. */
      onSetEnabled(): void;
      applyFieldValues(): void;
      setComponentClassName(name: string): void;
      getComponentClassName(): string;
      getComponentFile(): Atomic.ScriptComponentFile;

   }

   export class CSComponentAssembly extends Atomic.ScriptComponentFile {

      fullPath: string;
      classNames: string[];

      /**  Construct. */
      constructor();

      createCSComponent(classname: string): CSComponent;
      getFullPath(): string;
      /**  Only valid in editor, as we don't inspect assembly at runtime */
      getClassNames(): string[];
      static resolveClassAssembly(fullClassName: string): CSComponentAssembly;
      static preloadClassAssemblies(): boolean;

   }

   export class NETScriptObject extends Atomic.AObject {

      /**  Construct. */
      constructor();


   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CSComponentAssemblyReference" **/
    export var CSComponentAssemblyReferenceEventType : Atomic.EventType;

    /** object returned in the callback for the CSComponentAssemblyReference event.**/
    export interface CSComponentAssemblyReferenceEvent extends Atomic.EventData {
        assemblyPath : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CSComponentAssemblyReference event. 

     / Reference to CSAssembly made
    **/
    export function CSComponentAssemblyReferenceEvent (callback : Atomic.EventCallback<CSComponentAssemblyReferenceEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CSComponentAssemblyReference event. **/ 
    export function CSComponentAssemblyReferenceEventData (callbackData : CSComponentAssemblyReferenceEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CSComponentLoad" **/
    export var CSComponentLoadEventType : Atomic.EventType;

    /** object returned in the callback for the CSComponentLoad event.**/
    export interface CSComponentLoadEvent extends Atomic.EventData {
        className : string;
        /**  as void* */
        nativeInstance : AtomicNETScript.CSComponent;
        /**  as void* */
        /** Unmapped Native Type: VariantMap */
        fieldValues : any;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CSComponentLoad event. **/
    export function CSComponentLoadEvent (callback : Atomic.EventCallback<CSComponentLoadEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CSComponentLoad event. **/ 
    export function CSComponentLoadEventData (callbackData : CSComponentLoadEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CSComponentAssemblyChanged" **/
    export var CSComponentAssemblyChangedEventType : Atomic.EventType;

    /** object returned in the callback for the CSComponentAssemblyChanged event.**/
    export interface CSComponentAssemblyChangedEvent extends Atomic.EventData {
        resource : Atomic.Resource;
        assemblyPath : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CSComponentAssemblyChanged event. **/
    export function CSComponentAssemblyChangedEvent (callback : Atomic.EventCallback<CSComponentAssemblyChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CSComponentAssemblyChanged event. **/ 
    export function CSComponentAssemblyChangedEventData (callbackData : CSComponentAssemblyChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CSComponentClassChanged" **/
    export var CSComponentClassChangedEventType : Atomic.EventType;

    /** object returned in the callback for the CSComponentClassChanged event.**/
    export interface CSComponentClassChangedEvent extends Atomic.EventData {
        component : AtomicNETScript.CSComponent;
        classname : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CSComponentClassChanged event. **/
    export function CSComponentClassChangedEvent (callback : Atomic.EventCallback<CSComponentClassChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CSComponentClassChanged event. **/ 
    export function CSComponentClassChangedEventData (callbackData : CSComponentClassChangedEvent) : Atomic.EventCallbackMetaData; 



}
//////////////////////////////////////////////////////////
// IMPORTANT: THIS FILE IS GENERATED, CHANGES WILL BE LOST
//////////////////////////////////////////////////////////

// Atomic TypeScript Definitions

/// <reference path="Atomic.d.ts" />

declare module AtomicPlayer {


//----------------------------------------------------
// MODULE: Player
//----------------------------------------------------


   export class Player extends Atomic.AObject {

      numScenes: number;
      currentScene: Atomic.Scene;
      viewport: Atomic.Viewport;

      /**  Construct. */
      constructor();

      /**  Load a scene file with optional camera specified */
      loadScene(filename: string, camera?: Atomic.Camera): Atomic.Scene;
      /**  Get the number of currently loaded scenes */
      getNumScenes(): number;
      /**  Get the current scene */
      getCurrentScene(): Atomic.Scene;
      /**  Get the scene loaded at specified index */
      getScene(index: number): Atomic.Scene;
      /**  Set the current scene  */
      setCurrentScene(scene: Atomic.Scene, camera?: Atomic.Camera): void;
      /**  Unload a scene */
      unloadScene(scene: Atomic.Scene): void;
      /**  Unload all loaded scenes */
      unloadAllScenes(): void;
      /**  Get the player default viewport */
      getViewport(): Atomic.Viewport;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PlayerSceneLoadBegin" **/
    export var PlayerSceneLoadBeginEventType : Atomic.EventType;

    /** object returned in the callback for the PlayerSceneLoadBegin event.**/
    export interface PlayerSceneLoadBeginEvent extends Atomic.EventData {
        scene : Atomic.Scene;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PlayerSceneLoadBegin event. **/
    export function PlayerSceneLoadBeginEvent (callback : Atomic.EventCallback<PlayerSceneLoadBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PlayerSceneLoadBegin event. **/ 
    export function PlayerSceneLoadBeginEventData (callbackData : PlayerSceneLoadBeginEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PlayerSceneLoadEnd" **/
    export var PlayerSceneLoadEndEventType : Atomic.EventType;

    /** object returned in the callback for the PlayerSceneLoadEnd event.**/
    export interface PlayerSceneLoadEndEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        success : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PlayerSceneLoadEnd event. **/
    export function PlayerSceneLoadEndEvent (callback : Atomic.EventCallback<PlayerSceneLoadEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PlayerSceneLoadEnd event. **/ 
    export function PlayerSceneLoadEndEventData (callbackData : PlayerSceneLoadEndEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PlayerSceneUnload" **/
    export var PlayerSceneUnloadEventType : Atomic.EventType;

    /** object returned in the callback for the PlayerSceneUnload event.**/
    export interface PlayerSceneUnloadEvent extends Atomic.EventData {
        scene : Atomic.Scene;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PlayerSceneUnload event. **/
    export function PlayerSceneUnloadEvent (callback : Atomic.EventCallback<PlayerSceneUnloadEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PlayerSceneUnload event. **/ 
    export function PlayerSceneUnloadEventData (callbackData : PlayerSceneUnloadEvent) : Atomic.EventCallbackMetaData; 



}
//////////////////////////////////////////////////////////
// IMPORTANT: THIS FILE IS GENERATED, CHANGES WILL BE LOST
//////////////////////////////////////////////////////////

// Atomic TypeScript Definitions

/// <reference path="Atomic.d.ts" />

declare module ToolCore {

   /** enum NETBuildStatus*/
   export enum NETBuildStatus {
       NETBUILD_PENDING,
       NETBUILD_BUILDING,
       NETBUILD_COMPLETE
    }

   /** enum NETProjectState*/
   export enum NETProjectState {
       NETPROJECT_CLEAN,
       NETPROJECT_DIRTY,
       NETPROJECT_ERROR
    }

   /** enum PlatformID*/
   export enum PlatformID {
       PLATFORMID_UNDEFINED,
       PLATFORMID_WINDOWS,
       PLATFORMID_MAC,
       PLATFORMID_ANDROID,
       PLATFORMID_IOS,
       PLATFORMID_WEB,
       PLATFORMID_LINUX
    }


   export var PROJECTFILE_VERSION: number;


//----------------------------------------------------
// MODULE: ToolCore
//----------------------------------------------------


   export class AndroidBuildSettings extends Atomic.RefCounted {

      appName: string;
      packageName: string;
      companyName: string;
      productName: string;
      sDKVersion: string;
      minSDKVersion: string;
      activityName: string;
      iconPath: string;

      constructor();

      getAppName(): string;
      getPackageName(): string;
      getCompanyName(): string;
      getProductName(): string;
      getSDKVersion(): string;
      getMinSDKVersion(): string;
      getActivityName(): string;
      getIconPath(): string;
      setAppName(name: string): void;
      setPackageName(packageName: string): void;
      setCompanyName(companyName: string): void;
      setProductName(productName: string): void;
      setSDKVersion(value: string): void;
      setMinSDKVersion(value: string): void;
      setActivityName(value: string): void;
      setIconPath(value: string): void;

   }

   export class AnimationImportInfo extends Atomic.AObject {

      name: string;
      startTime: number;
      endTime: number;

      constructor();

      getName(): string;
      getStartTime(): number;
      getEndTime(): number;
      setName(name: string): void;
      setStartTime(time: number): void;
      setEndTime(time: number): void;

   }

   export class Asset extends Atomic.AObject {

      guid: string;
      name: string;
      path: string;
      extension: string;
      relativePath: string;
      cachePath: string;
      importerType: string;
      importerTypeName: string;
      importer: AssetImporter;
      parent: Asset;
      dirty: boolean;
      fileTimestamp: number;
      dotAssetFilename: string;
      folder: boolean;

      /**  Construct. */
      constructor();

      import(): boolean;
      preload(): boolean;
      setPath(path: string): boolean;
      getGUID(): string;
      getName(): string;
      getPath(): string;
      getExtension(): string;
      /**  Get the path relative to project */
      getRelativePath(): string;
      getCachePath(): string;
      getResource(typeName?: string): Atomic.Resource;
      getImporterType(): string;
      getImporterTypeName(): string;
      getImporter(): AssetImporter;
      postImportError(message: string): void;
      getParent(): Asset;
      setDirty(dirty: boolean): void;
      isDirty(): boolean;
      /**  Get the last timestamp as seen by the AssetDatabase */
      getFileTimestamp(): number;
      /**  Sets the time stamp to the asset files current time */
      updateFileTimestamp(): void;
      getDotAssetFilename(): string;
      /**  Rename the asset, which depending on the asset type may be nontrivial */
      rename(newName: string): boolean;
      /**  Move the asset, which depending on the asset type may be nontrivial */
      move(newPath: string): boolean;
      isFolder(): boolean;
      load(): boolean;
      save(): boolean;
      /**  Instantiate a node from the asset */
      instantiateNode(parent: Atomic.Node, name: string): Atomic.Node;

   }

   export class AssetDatabase extends Atomic.AObject {

      cachePath: string;

      /**  Construct. */
      constructor();

      getAssetByGUID(guid: string): Asset;
      getAssetByPath(path: string): Asset;
      getAssetByCachePath(cachePath: string): Asset;
      generateAssetGUID(): string;
      registerGUID(guid: string): void;
      getCachePath(): string;
      deleteAsset(asset: Asset): void;
      scan(): void;
      reimportAllAssets(): void;
      reimportAllAssetsInDirectory(directoryPath: string): void;
      getResourceImporterName(resourceTypeName: string): string;
      getDotAssetFilename(path: string): string;
      getFolderAssets(folder:string):ToolCore.Asset[];
      getAssetsByImporterType(importerType:string, resourceType:string):ToolCore.Asset[];

   }

   export class AssetImporter extends Atomic.AObject {

      asset: Asset;

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      preload(): boolean;
      getAsset(): Asset;
      getResource(typeName?: string): Atomic.Resource;
      requiresCacheFile(): boolean;
      /**  Instantiate a node from the asset */
      instantiateNode(parent: Atomic.Node, name: string): Atomic.Node;
      rename(newName: string): boolean;
      move(newPath: string): boolean;

   }

   export class AudioImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getResource(typeName?: string): Atomic.Resource;

   }

   export class BuildAndroid extends BuildBase {

      buildSubfolder: string;

      constructor(project: Project);

      build(buildPath: string): void;
      getBuildSubfolder(): string;

   }

   export class BuildBase extends Atomic.AObject {

      buildSubfolder: string;
      assetBuildTag: string;
      verbose: boolean;
      resourcesOnly: boolean;
      buildFailed: boolean;
      buildErrors: string[];
      autoLog: boolean;

      constructor(project: Project, platform: PlatformID);

      build(buildPath: string): void;
      useResourcePackager(): boolean;
      getBuildSubfolder(): string;
      addResourceDir(dir: string): void;
      addProjectResourceDir(dir: string): void;
      buildLog(message: string, sendEvent?: boolean): void;
      buildWarn(warning: string, sendEvent?: boolean): void;
      buildError(error: string, sendEvent?: boolean): void;
      /**  Fail the current build */
      failBuild(message: string): void;
      /**  in the build. If no tag is specified, then all resources are included. */
      setAssetBuildTag(assetBuildTag: string): void;
      setVerbose(verbose?: boolean): void;
      getResourcesOnly(): boolean;
      setResourcesOnly(resourcesOnly?: boolean): void;
      getBuildFailed(): boolean;
      getBuildErrors(): string[];
      setAutoLog(autoLog: boolean): void;

   }

   export class BuildIOS extends BuildBase {

      buildSubfolder: string;

      constructor(project: Project);

      getBuildSubfolder(): string;
      build(buildPath: string): void;

   }

   export class BuildLinux extends BuildBase {

      buildSubfolder: string;

      constructor(project: Project);

      getBuildSubfolder(): string;
      build(buildPath: string): void;

   }

   export class BuildMac extends BuildBase {

      buildSubfolder: string;

      constructor(project: Project);

      getBuildSubfolder(): string;
      build(buildPath: string): void;

   }

   export class BuildSystem extends Atomic.AObject {

      buildPath: string;

      /**  Construct. */
      constructor();

      setBuildPath(path: string): void;
      getBuildPath(): string;
      queueBuild(buildBase: BuildBase): void;
      startNextBuild(): boolean;
      buildComplete(platform: PlatformID, buildFolder: string, success?: boolean, buildMessage?: string): void;

   }

   export class BuildWeb extends BuildBase {

      buildSubfolder: string;

      constructor(project: Project);

      build(buildPath: string): void;
      getBuildSubfolder(): string;

   }

   export class BuildWindows extends BuildBase {

      buildSubfolder: string;

      constructor(project: Project);

      getBuildSubfolder(): string;
      build(buildPath: string): void;

   }

   export class CSharpImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getResource(typeName?: string): Atomic.Resource;

   }

   export class Command extends Atomic.AObject {

      projectPath: string;

      constructor();

      parse(command: string): boolean;
      run(): void;
      finished(): void;
      error(errorMsg: string): void;
      cancel(): void;
      requiresProjectLoad(): boolean;
      getProjectPath(): string;
      requiresLicenseValidation(): boolean;

   }

   export class IOSBuildSettings extends Atomic.RefCounted {

      appName: string;
      packageName: string;
      companyName: string;
      productName: string;
      provisionFile: string;
      appIDPrefix: string;

      constructor();

      getAppName(): string;
      getPackageName(): string;
      getCompanyName(): string;
      getProductName(): string;
      getProvisionFile(): string;
      getAppIDPrefix(): string;
      setAppName(name: string): void;
      setPackageName(packageName: string): void;
      setCompanyName(companyName: string): void;
      setProductName(productName: string): void;
      setProvisionFile(value: string): void;
      setAppIDPrefix(value: string): void;

   }

   export class JSONImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getResource(typeName?: string): Atomic.Resource;

   }

   export class JavascriptImporter extends AssetImporter {

      componentFile: boolean;

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      isComponentFile(): boolean;
      getResource(typeName?: string): Atomic.Resource;

   }

   export class LicenseSystem extends Atomic.AObject {

      /**  Construct. */
      constructor();

      initialize(): void;
      licenseAgreementConfirmed(): void;

   }

   export class LinuxBuildSettings extends Atomic.RefCounted {

      appName: string;
      packageName: string;
      companyName: string;
      productName: string;

      constructor();

      getAppName(): string;
      getPackageName(): string;
      getCompanyName(): string;
      getProductName(): string;
      setAppName(name: string): void;
      setPackageName(packageName: string): void;
      setCompanyName(companyName: string): void;
      setProductName(productName: string): void;

   }

   export class MacBuildSettings extends Atomic.RefCounted {

      appName: string;
      packageName: string;
      companyName: string;
      productName: string;

      constructor();

      getAppName(): string;
      getPackageName(): string;
      getCompanyName(): string;
      getProductName(): string;
      setAppName(name: string): void;
      setPackageName(packageName: string): void;
      setCompanyName(companyName: string): void;
      setProductName(productName: string): void;

   }

   export class MaterialImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      saveMaterial(): void;
      getResource(typeName?: string): Atomic.Resource;

   }

   export class ModelImporter extends AssetImporter {

      scale: number;
      importAnimations: boolean;
      importMaterials: boolean;
      animationCount: number;

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getScale(): number;
      setScale(scale: number): void;
      getImportAnimations(): boolean;
      setImportAnimations(importAnimations: boolean): void;
      getImportMaterials(): boolean;
      setImportMaterials(importMat: boolean): void;
      getAnimationCount(): number;
      setAnimationCount(count: number): void;
      getResource(typeName?: string): Atomic.Resource;
      getAnimationInfo(index: number): AnimationImportInfo;
      /**  Instantiate a node from the asset */
      instantiateNode(parent: Atomic.Node, name: string): Atomic.Node;
      getAnimations():Atomic.Animation[];

   }

   export class NETAssemblyImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getResource(typeName?: string): Atomic.Resource;

   }

   export class NETBuild extends Atomic.AObject {

      constructor(solutionPath?: string);


   }

   export class NETProjectSystem extends Atomic.AObject {

      iDEAvailable: boolean;
      solutionAvailable: boolean;
      solutionPath: string;
      projectAssemblyDirty: boolean;

      constructor();

      getIDEAvailable(): boolean;
      /**  Returns true if there is a solution available for the loaded project (true = managed app) */
      getSolutionAvailable(): boolean;
      getSolutionPath(): string;
      buildAtomicProject(): NETBuild;
      /**  otherwise, no guarantee where source file will load when multiple VS instances running */
      openSolution(): void;
      openSourceFile(sourceFilePath: string): void;
      generateSolution(): boolean;
      generateResourcePak(): boolean;
      /**  Get whether the project assembly is dirty and needs to be rebuilt */
      getProjectAssemblyDirty(): boolean;

   }

   export class OpenAssetImporter extends Atomic.AObject {

      errorMessage: string;
      importNode: Atomic.Node;
      startTime: number;
      endTime: number;
      scale: number;
      exportAnimations: boolean;
      importMaterials: boolean;
      includeNonSkinningBones: boolean;
      verboseLog: boolean;
      importMaterialsDefault: boolean;

      constructor();

      load(assetPath: string): boolean;
      getErrorMessage(): string;
      exportModel(outName: string, animName?: string, animationOnly?: boolean): boolean;
      setImportNode(node: Atomic.Node): void;
      setStartTime(startTime: number): void;
      setEndTime(endTime: number): void;
      setScale(scale: number): void;
      setExportAnimations(exportAnimations: boolean): void;
      setImportMaterials(importMaterials: boolean): void;
      setIncludeNonSkinningBones(includeNonSkinningBones: boolean): void;
      setVerboseLog(verboseLog: boolean): void;
      getImportMaterialsDefault(): boolean;
      getIncludeNonSkinningBones(): boolean;

   }

   export class PEXImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getResource(typeName: string): Atomic.Resource;

   }

   export class Platform extends Atomic.AObject {

      license: boolean;
      name: string;
      platformID: PlatformID;

      constructor();

      getLicense(): boolean;
      getName(): string;
      getPlatformID(): PlatformID;
      newBuild(project: Project): BuildBase;

   }

   export class PlatformAndroid extends Platform {

      license: boolean;
      name: string;
      platformID: PlatformID;
      androidCommand: string;
      aDBCommand: string;
      androidTargets: string[];

      constructor();

      getLicense(): boolean;
      getName(): string;
      getPlatformID(): PlatformID;
      getAndroidCommand(): string;
      getADBCommand(): string;
      refreshAndroidTargets(): void;
      getAndroidTargets(): string[];
      newBuild(project: Project): BuildBase;

   }

   export class PlatformIOS extends Platform {

      name: string;
      platformID: PlatformID;
      license: boolean;

      constructor();

      getName(): string;
      getPlatformID(): PlatformID;
      newBuild(project: Project): BuildBase;
      parseProvisionAppIdentifierPrefix(provisionFile: string): string;
      getLicense(): boolean;

   }

   export class PlatformLinux extends Platform {

      name: string;
      platformID: PlatformID;
      license: boolean;

      constructor();

      getName(): string;
      getPlatformID(): PlatformID;
      newBuild(project: Project): BuildBase;
      getLicense(): boolean;

   }

   export class PlatformMac extends Platform {

      name: string;
      platformID: PlatformID;
      license: boolean;

      constructor();

      getName(): string;
      getPlatformID(): PlatformID;
      newBuild(project: Project): BuildBase;
      getLicense(): boolean;

   }

   export class PlatformWeb extends Platform {

      name: string;
      platformID: PlatformID;
      license: boolean;

      constructor();

      getName(): string;
      getPlatformID(): PlatformID;
      newBuild(project: Project): BuildBase;
      getLicense(): boolean;

   }

   export class PlatformWindows extends Platform {

      name: string;
      platformID: PlatformID;
      license: boolean;

      constructor();

      getName(): string;
      getPlatformID(): PlatformID;
      newBuild(project: Project): BuildBase;
      getLicense(): boolean;

   }

   export class PlayCmd extends Command {

      constructor();

      run(): void;

   }

   export class PrefabImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      preload(): boolean;
      /**  Instantiate a node from the asset */
      instantiateNode(parent: Atomic.Node, name: string): Atomic.Node;

   }

   export class Project extends Atomic.AObject {

      resourcePath: string;
      componentsPath: string;
      scriptsPath: string;
      modulesPath: string;
      dirty: boolean;
      buildSettings: ProjectBuildSettings;
      userPrefs: ProjectUserPrefs;
      projectSettings: ProjectSettings;
      projectPath: string;
      projectFilePath: string;
      userPrefsFullPath: string;
      buildSettingsFullPath: string;
      version: string;

      /**  Construct. */
      constructor();

      load(fullpath: string): boolean;
      save(fullpath?: string): void;
      /**  Paths */
      getResourcePath(): string;
      setResourcePath(resourcePath: string): void;
      getComponentsPath(): string;
      getScriptsPath(): string;
      getModulesPath(): string;
      isComponentsDirOrFile(fullPath: string): boolean;
      isScriptsDirOrFile(fullPath: string): boolean;
      isModulesDirOrFile(fullPath: string): boolean;
      getSupportsPlatform(platform: string): boolean;
      isDirty(): boolean;
      setDirty(): void;
      getBuildSettings(): ProjectBuildSettings;
      getUserPrefs(): ProjectUserPrefs;
      getProjectSettings(): ProjectSettings;
      getProjectPath(): string;
      getProjectFilePath(): string;
      getUserPrefsFullPath(): string;
      getBuildSettingsFullPath(): string;
      getVersion(): string;
      setVersion(version: string): void;
      saveBuildSettings(): void;
      loadBuildSettings(): boolean;
      loadProjectSettings(): boolean;
      saveUserPrefs(): void;
      loadUserPrefs(): boolean;

   }

   export class ProjectBuildSettings extends Atomic.AObject {

      macBuildSettings: MacBuildSettings;
      windowsBuildSettings: WindowsBuildSettings;
      webBuildSettings: WebBuildSettings;
      androidBuildSettings: AndroidBuildSettings;
      iOSBuildSettings: IOSBuildSettings;
      linuxBuildSettings: LinuxBuildSettings;

      /**  Construct. */
      constructor();

      getMacBuildSettings(): MacBuildSettings;
      getWindowsBuildSettings(): WindowsBuildSettings;
      getWebBuildSettings(): WebBuildSettings;
      getAndroidBuildSettings(): AndroidBuildSettings;
      getIOSBuildSettings(): IOSBuildSettings;
      getLinuxBuildSettings(): LinuxBuildSettings;
      load(path: string): boolean;
      save(path: string): void;

   }

   export class ProjectFile extends Atomic.AObject {

      /**  Construct. */
      constructor();

      save(project: Project): void;
      load(project: Project): boolean;
      writeNewProject(fullpath: string): void;

   }

   export class ProjectSettings extends Atomic.AObject {

      name: string;
      supportsDesktop: boolean;
      supportsAndroid: boolean;
      supportsIOS: boolean;
      supportsWeb: boolean;
      supportsLinux: boolean;

      /**  Construct. */
      constructor();

      load(path: string): boolean;
      save(path: string): void;
      getName(): string;
      validPlatform(platform: string): boolean;
      getSupportsPlatform(platform: string): boolean;
      getSupportsDesktop(): boolean;
      getSupportsAndroid(): boolean;
      getSupportsIOS(): boolean;
      getSupportsWeb(): boolean;
      getSupportsLinux(): boolean;
      addSupportedPlatform(platform: string): void;

   }

   export class ProjectUserPrefs extends Atomic.AObject {

      defaultPlatform: PlatformID;
      lastBuildPath: string;
      snapTranslationX: number;
      snapTranslationY: number;
      snapTranslationZ: number;
      snapRotation: number;
      snapScale: number;

      /**  Construct. */
      constructor();

      getDefaultPlatform(): PlatformID;
      getLastBuildPath(): string;
      setLastBuildPath(path: string): void;
      getSnapTranslationX(): number;
      getSnapTranslationY(): number;
      getSnapTranslationZ(): number;
      getSnapRotation(): number;
      getSnapScale(): number;
      setSnapTranslationX(value: number): void;
      setSnapTranslationY(value: number): void;
      setSnapTranslationZ(value: number): void;
      setSnapRotation(value: number): void;
      setSnapScale(value: number): void;

   }

   export class SpriterImporter extends AssetImporter {

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getResource(typeName?: string): Atomic.Resource;
      instantiateNode(parent: Atomic.Node, name: string): Atomic.Node;

   }

   export class Subprocess extends Atomic.AObject {

      /**  Construct. */
      constructor();


   }

   export class SubprocessSystem extends Atomic.AObject {

      /**  Construct. */
      constructor();

      launch(command: string, args: string[], initialDirectory?: string): Subprocess;

   }

   export class TextureImporter extends AssetImporter {

      compressedImageSize: number;

      /**  Construct. */
      constructor(asset: Asset);

      setDefaults(): void;
      getResource(typeName?: string): Atomic.Resource;
      instantiateNode(parent: Atomic.Node, name: string): Atomic.Node;
      setCompressedImageSize(compressedSize: number): void;
      getCompressedImageSize(): number;

   }

   export class ToolEnvironment extends Atomic.AObject {

      rootSourceDir: string;
      toolPrefs: ToolPrefs;
      rootBuildDir: string;
      editorBinary: string;
      playerBinary: string;
      toolBinary: string;
      coreDataDir: string;
      playerDataDir: string;
      editorDataDir: string;
      deploymentDataDir: string;
      toolDataDir: string;
      cli: boolean;
      atomicNETRootDir: string;
      atomicNETCoreAssemblyDir: string;
      atomicNETNuGetBinary: string;
      monoExecutableDir: string;
      playerAppFolder: string;
      iOSDeployBinary: string;

      constructor();

      initialize(cli?: boolean): boolean;
      /**  Root source and build directories for development source tree builds */
      setRootSourceDir(sourceDir: string): void;
      setRootBuildDir(buildDir: string, setBinaryPaths?: boolean): void;
      getToolPrefs(): ToolPrefs;
      saveToolPrefs(): void;
      loadToolPrefs(): void;
      getRootSourceDir(): string;
      getRootBuildDir(): string;
      /**  Binaries */
      getEditorBinary(): string;
      getPlayerBinary(): string;
      getToolBinary(): string;
      /**  Resource directories */
      getCoreDataDir(): string;
      getPlayerDataDir(): string;
      getEditorDataDir(): string;
      /**  Data directories */
      getDeploymentDataDir(): string;
      getToolDataDir(): string;
      getCLI(): boolean;
      getAtomicNETRootDir(): string;
      getAtomicNETCoreAssemblyDir(): string;
      getAtomicNETNuGetBinary(): string;
      getMonoExecutableDir(): string;
      getPlayerAppFolder(): string;
      getIOSDeployBinary(): string;
      dump(): void;
      static setBootstrapping(): void;

   }

   export class ToolPrefs extends Atomic.AObject {

      androidSDKPath: string;
      jDKRootPath: string;
      antPath: string;
      releasePath: string;
      releaseCheck: number;
      prefsPath: string;

      constructor();

      getAndroidSDKPath(): string;
      getJDKRootPath(): string;
      getAntPath(): string;
      getReleasePath(): string;
      getReleaseCheck(): number;
      setAndroidSDKPath(path: string): void;
      setJDKRootPath(path: string): void;
      setAntPath(path: string): void;
      setReleasePath(path: string): void;
      setReleaseCheck(value: number): void;
      getPrefsPath(): string;
      load(): void;
      save(): void;

   }

   export class ToolSystem extends Atomic.AObject {

      project: Project;
      currentPlatform: Platform;

      constructor();

      loadProject(fullpath: string): boolean;
      getProject(): Project;
      closeProject(): void;
      registerPlatform(platform: Platform): void;
      getPlatformByID(platform: PlatformID): Platform;
      getPlatformByName(name: string): Platform;
      setCurrentPlatform(platform: PlatformID): void;
      getCurrentPlatform(): Platform;

   }

   export class WebBuildSettings extends Atomic.RefCounted {

      appName: string;
      gameWidth: string;
      gameHeight: string;
      faviconName: string;
      pageTheme: number;

      constructor();

      getAppName(): string;
      getGameWidth(): string;
      getGameHeight(): string;
      getFaviconName(): string;
      getPageTheme(): number;
      setAppName(name: string): void;
      setGameWidth(packageName: string): void;
      setGameHeight(companyName: string): void;
      setFaviconName(productName: string): void;
      setPageTheme(number: number): void;

   }

   export class WindowsBuildSettings extends Atomic.RefCounted {

      appName: string;
      packageName: string;
      companyName: string;
      productName: string;

      constructor();

      getAppName(): string;
      getPackageName(): string;
      getCompanyName(): string;
      getProductName(): string;
      setAppName(name: string): void;
      setPackageName(packageName: string): void;
      setCompanyName(companyName: string): void;
      setProductName(productName: string): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "PlatformChanged" **/
    export var PlatformChangedEventType : Atomic.EventType;

    /** object returned in the callback for the PlatformChanged event.**/
    export interface PlatformChangedEvent extends Atomic.EventData {
        platform : ToolCore.Platform;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the PlatformChanged event. **/
    export function PlatformChangedEvent (callback : Atomic.EventCallback<PlatformChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the PlatformChanged event. **/ 
    export function PlatformChangedEventData (callbackData : PlatformChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ToolUpdate" **/
    export var ToolUpdateEventType : Atomic.EventType;

    /** object returned in the callback for the ToolUpdate event.**/
    export interface ToolUpdateEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ToolUpdate event. 

     called at 2Hz for non-time critical updates
    **/
    export function ToolUpdateEvent (callback : Atomic.EventCallback<ToolUpdateEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ToolUpdate event. **/ 
    export function ToolUpdateEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ProjectBeginLoad" **/
    export var ProjectBeginLoadEventType : Atomic.EventType;

    /** object returned in the callback for the ProjectBeginLoad event.**/
    export interface ProjectBeginLoadEvent extends Atomic.EventData {
        projectPath : string;
        project : ToolCore.Project;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ProjectBeginLoad event. **/
    export function ProjectBeginLoadEvent (callback : Atomic.EventCallback<ProjectBeginLoadEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ProjectBeginLoad event. **/ 
    export function ProjectBeginLoadEventData (callbackData : ProjectBeginLoadEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ProjectLoaded" **/
    export var ProjectLoadedEventType : Atomic.EventType;

    /** object returned in the callback for the ProjectLoaded event.**/
    export interface ProjectLoadedEvent extends Atomic.EventData {
        /**  The path to the project that was loaded */
        projectPath : string;
        /**  * The reference to the project */
        project : ToolCore.Project;
        /**  whether the project loaded successfully */
        result : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ProjectLoaded event. 

     Event is triggered once a project has been loaded and after prefs have been loaded
    **/
    export function ProjectLoadedEvent (callback : Atomic.EventCallback<ProjectLoadedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ProjectLoaded event. **/ 
    export function ProjectLoadedEventData (callbackData : ProjectLoadedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ProjectUnloaded" **/
    export var ProjectUnloadedEventType : Atomic.EventType;

    /** object returned in the callback for the ProjectUnloaded event.**/
    export interface ProjectUnloadedEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ProjectUnloaded event. **/
    export function ProjectUnloadedEvent (callback : Atomic.EventCallback<ProjectUnloadedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ProjectUnloaded event. **/ 
    export function ProjectUnloadedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ProjectUserPrefSaved" **/
    export var ProjectUserPrefSavedEventType : Atomic.EventType;

    /** object returned in the callback for the ProjectUserPrefSaved event.**/
    export interface ProjectUserPrefSavedEvent extends Atomic.EventData {
        prefs : ToolCore.ProjectUserPrefs;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ProjectUserPrefSaved event. **/
    export function ProjectUserPrefSavedEvent (callback : Atomic.EventCallback<ProjectUserPrefSavedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ProjectUserPrefSaved event. **/ 
    export function ProjectUserPrefSavedEventData (callbackData : ProjectUserPrefSavedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AndroidTargetsRefreshed" **/
    export var AndroidTargetsRefreshedEventType : Atomic.EventType;

    /** object returned in the callback for the AndroidTargetsRefreshed event.**/
    export interface AndroidTargetsRefreshedEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AndroidTargetsRefreshed event. **/
    export function AndroidTargetsRefreshedEvent (callback : Atomic.EventCallback<AndroidTargetsRefreshedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the AndroidTargetsRefreshed event. **/ 
    export function AndroidTargetsRefreshedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CommandError" **/
    export var CommandErrorEventType : Atomic.EventType;

    /** object returned in the callback for the CommandError event.**/
    export interface CommandErrorEvent extends Atomic.EventData {
        message : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CommandError event. **/
    export function CommandErrorEvent (callback : Atomic.EventCallback<CommandErrorEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the CommandError event. **/ 
    export function CommandErrorEventData (callbackData : CommandErrorEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CommandFinished" **/
    export var CommandFinishedEventType : Atomic.EventType;

    /** object returned in the callback for the CommandFinished event.**/
    export interface CommandFinishedEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CommandFinished event. **/
    export function CommandFinishedEvent (callback : Atomic.EventCallback<CommandFinishedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the CommandFinished event. **/ 
    export function CommandFinishedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ResourceAdded" **/
    export var ResourceAddedEventType : Atomic.EventType;

    /** object returned in the callback for the ResourceAdded event.**/
    export interface ResourceAddedEvent extends Atomic.EventData {
        guid : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ResourceAdded event. **/
    export function ResourceAddedEvent (callback : Atomic.EventCallback<ResourceAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ResourceAdded event. **/ 
    export function ResourceAddedEventData (callbackData : ResourceAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ResourceRemoved" **/
    export var ResourceRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the ResourceRemoved event.**/
    export interface ResourceRemovedEvent extends Atomic.EventData {
        guid : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ResourceRemoved event. **/
    export function ResourceRemovedEvent (callback : Atomic.EventCallback<ResourceRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ResourceRemoved event. **/ 
    export function ResourceRemovedEventData (callbackData : ResourceRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AssetImportError" **/
    export var AssetImportErrorEventType : Atomic.EventType;

    /** object returned in the callback for the AssetImportError event.**/
    export interface AssetImportErrorEvent extends Atomic.EventData {
        path : string;
        guid : string;
        error : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AssetImportError event. **/
    export function AssetImportErrorEvent (callback : Atomic.EventCallback<AssetImportErrorEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AssetImportError event. **/ 
    export function AssetImportErrorEventData (callbackData : AssetImportErrorEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AssetScanBegin" **/
    export var AssetScanBeginEventType : Atomic.EventType;

    /** object returned in the callback for the AssetScanBegin event.**/
    export interface AssetScanBeginEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AssetScanBegin event. **/
    export function AssetScanBeginEvent (callback : Atomic.EventCallback<AssetScanBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the AssetScanBegin event. **/ 
    export function AssetScanBeginEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AssetScanEnd" **/
    export var AssetScanEndEventType : Atomic.EventType;

    /** object returned in the callback for the AssetScanEnd event.**/
    export interface AssetScanEndEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AssetScanEnd event. **/
    export function AssetScanEndEvent (callback : Atomic.EventCallback<AssetScanEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the AssetScanEnd event. **/ 
    export function AssetScanEndEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AssetNew" **/
    export var AssetNewEventType : Atomic.EventType;

    /** object returned in the callback for the AssetNew event.**/
    export interface AssetNewEvent extends Atomic.EventData {
        guid : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AssetNew event. **/
    export function AssetNewEvent (callback : Atomic.EventCallback<AssetNewEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AssetNew event. **/ 
    export function AssetNewEventData (callbackData : AssetNewEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AssetRenamed" **/
    export var AssetRenamedEventType : Atomic.EventType;

    /** object returned in the callback for the AssetRenamed event.**/
    export interface AssetRenamedEvent extends Atomic.EventData {
        asset : ToolCore.Asset;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AssetRenamed event. **/
    export function AssetRenamedEvent (callback : Atomic.EventCallback<AssetRenamedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AssetRenamed event. **/ 
    export function AssetRenamedEventData (callbackData : AssetRenamedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AssetMoved" **/
    export var AssetMovedEventType : Atomic.EventType;

    /** object returned in the callback for the AssetMoved event.**/
    export interface AssetMovedEvent extends Atomic.EventData {
        asset : ToolCore.Asset;
        oldPath : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AssetMoved event. **/
    export function AssetMovedEvent (callback : Atomic.EventCallback<AssetMovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AssetMoved event. **/ 
    export function AssetMovedEventData (callbackData : AssetMovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseEulaRequired" **/
    export var LicenseEulaRequiredEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseEulaRequired event.**/
    export interface LicenseEulaRequiredEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseEulaRequired event. 

     requires EULA agreement
    **/
    export function LicenseEulaRequiredEvent (callback : Atomic.EventCallback<LicenseEulaRequiredEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseEulaRequired event. **/ 
    export function LicenseEulaRequiredEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseEulaAccepted" **/
    export var LicenseEulaAcceptedEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseEulaAccepted event.**/
    export interface LicenseEulaAcceptedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseEulaAccepted event. 

     EULA agreement accepted
    **/
    export function LicenseEulaAcceptedEvent (callback : Atomic.EventCallback<LicenseEulaAcceptedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseEulaAccepted event. **/ 
    export function LicenseEulaAcceptedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseActivationRequired" **/
    export var LicenseActivationRequiredEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseActivationRequired event.**/
    export interface LicenseActivationRequiredEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseActivationRequired event. 

     activation required
    **/
    export function LicenseActivationRequiredEvent (callback : Atomic.EventCallback<LicenseActivationRequiredEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseActivationRequired event. **/ 
    export function LicenseActivationRequiredEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseVerificationRequired" **/
    export var LicenseVerificationRequiredEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseVerificationRequired event.**/
    export interface LicenseVerificationRequiredEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseVerificationRequired event. 

     license verification required
    **/
    export function LicenseVerificationRequiredEvent (callback : Atomic.EventCallback<LicenseVerificationRequiredEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseVerificationRequired event. **/ 
    export function LicenseVerificationRequiredEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseSuccess" **/
    export var LicenseSuccessEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseSuccess event.**/
    export interface LicenseSuccessEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseSuccess event. 

     license success
    **/
    export function LicenseSuccessEvent (callback : Atomic.EventCallback<LicenseSuccessEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseSuccess event. **/ 
    export function LicenseSuccessEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseActivationSuccess" **/
    export var LicenseActivationSuccessEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseActivationSuccess event.**/
    export interface LicenseActivationSuccessEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseActivationSuccess event. **/
    export function LicenseActivationSuccessEvent (callback : Atomic.EventCallback<LicenseActivationSuccessEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseActivationSuccess event. **/ 
    export function LicenseActivationSuccessEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseActivationError" **/
    export var LicenseActivationErrorEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseActivationError event.**/
    export interface LicenseActivationErrorEvent extends Atomic.EventData {
        message : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseActivationError event. **/
    export function LicenseActivationErrorEvent (callback : Atomic.EventCallback<LicenseActivationErrorEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the LicenseActivationError event. **/ 
    export function LicenseActivationErrorEventData (callbackData : LicenseActivationErrorEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseDeactivationSuccess" **/
    export var LicenseDeactivationSuccessEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseDeactivationSuccess event.**/
    export interface LicenseDeactivationSuccessEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseDeactivationSuccess event. **/
    export function LicenseDeactivationSuccessEvent (callback : Atomic.EventCallback<LicenseDeactivationSuccessEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseDeactivationSuccess event. **/ 
    export function LicenseDeactivationSuccessEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseDeactivationError" **/
    export var LicenseDeactivationErrorEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseDeactivationError event.**/
    export interface LicenseDeactivationErrorEvent extends Atomic.EventData {
        message : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseDeactivationError event. **/
    export function LicenseDeactivationErrorEvent (callback : Atomic.EventCallback<LicenseDeactivationErrorEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the LicenseDeactivationError event. **/ 
    export function LicenseDeactivationErrorEventData (callbackData : LicenseDeactivationErrorEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LicenseError" **/
    export var LicenseErrorEventType : Atomic.EventType;

    /** object returned in the callback for the LicenseError event.**/
    export interface LicenseErrorEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LicenseError event. 

     license error
    **/
    export function LicenseErrorEvent (callback : Atomic.EventCallback<LicenseErrorEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the LicenseError event. **/ 
    export function LicenseErrorEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "BuildComplete" **/
    export var BuildCompleteEventType : Atomic.EventType;

    /** object returned in the callback for the BuildComplete event.**/
    export interface BuildCompleteEvent extends Atomic.EventData {
        platformID : number;
        buildFolder : string;
        message : string;
        success : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the BuildComplete event. **/
    export function BuildCompleteEvent (callback : Atomic.EventCallback<BuildCompleteEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the BuildComplete event. **/ 
    export function BuildCompleteEventData (callbackData : BuildCompleteEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "BuildOutput" **/
    export var BuildOutputEventType : Atomic.EventType;

    /** object returned in the callback for the BuildOutput event.**/
    export interface BuildOutputEvent extends Atomic.EventData {
        text : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the BuildOutput event. **/
    export function BuildOutputEvent (callback : Atomic.EventCallback<BuildOutputEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the BuildOutput event. **/ 
    export function BuildOutputEventData (callbackData : BuildOutputEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SubprocessOutput" **/
    export var SubprocessOutputEventType : Atomic.EventType;

    /** object returned in the callback for the SubprocessOutput event.**/
    export interface SubprocessOutputEvent extends Atomic.EventData {
        text : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SubprocessOutput event. **/
    export function SubprocessOutputEvent (callback : Atomic.EventCallback<SubprocessOutputEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SubprocessOutput event. **/ 
    export function SubprocessOutputEventData (callbackData : SubprocessOutputEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SubprocessComplete" **/
    export var SubprocessCompleteEventType : Atomic.EventType;

    /** object returned in the callback for the SubprocessComplete event.**/
    export interface SubprocessCompleteEvent extends Atomic.EventData {
        processKey : number;
        /**  return code of process */
        retCode : number;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SubprocessComplete event. **/
    export function SubprocessCompleteEvent (callback : Atomic.EventCallback<SubprocessCompleteEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SubprocessComplete event. **/ 
    export function SubprocessCompleteEventData (callbackData : SubprocessCompleteEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NETBuildBegin" **/
    export var NETBuildBeginEventType : Atomic.EventType;

    /** object returned in the callback for the NETBuildBegin event.**/
    export interface NETBuildBeginEvent extends Atomic.EventData {
        build : ToolCore.NETBuild;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NETBuildBegin event. **/
    export function NETBuildBeginEvent (callback : Atomic.EventCallback<NETBuildBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NETBuildBegin event. **/ 
    export function NETBuildBeginEventData (callbackData : NETBuildBeginEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NETBuildResult" **/
    export var NETBuildResultEventType : Atomic.EventType;

    /** object returned in the callback for the NETBuildResult event.**/
    export interface NETBuildResultEvent extends Atomic.EventData {
        build : ToolCore.NETBuild;
        /**  success = true */
        success : boolean;
        /**  for failure, the compilation output */
        errorText : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NETBuildResult event. **/
    export function NETBuildResultEvent (callback : Atomic.EventCallback<NETBuildResultEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NETBuildResult event. **/ 
    export function NETBuildResultEventData (callbackData : NETBuildResultEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "NETBuildAtomicProject" **/
    export var NETBuildAtomicProjectEventType : Atomic.EventType;

    /** object returned in the callback for the NETBuildAtomicProject event.**/
    export interface NETBuildAtomicProjectEvent extends Atomic.EventData {
        project : ToolCore.Project;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the NETBuildAtomicProject event. **/
    export function NETBuildAtomicProjectEvent (callback : Atomic.EventCallback<NETBuildAtomicProjectEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the NETBuildAtomicProject event. **/ 
    export function NETBuildAtomicProjectEventData (callbackData : NETBuildAtomicProjectEvent) : Atomic.EventCallbackMetaData; 



}
//////////////////////////////////////////////////////////
// IMPORTANT: THIS FILE IS GENERATED, CHANGES WILL BE LOST
//////////////////////////////////////////////////////////

// Atomic TypeScript Definitions

/// <reference path="Atomic.d.ts" />

declare module Editor {

   /** enum AxisMode*/
   export enum AxisMode {
       AXIS_WORLD,
       AXIS_LOCAL
    }

   /** enum EditMode*/
   export enum EditMode {
       EDIT_SELECT,
       EDIT_MOVE,
       EDIT_ROTATE,
       EDIT_SCALE
    }

   /** enum SceneEditType*/
   export enum SceneEditType {
       SCENEEDIT_UNKNOWN,
       SCENEEDIT_SELECTION
    }


   export var EDITOR_MODALERROR: number;
   export var EDITOR_MODALINFO: number;
   export var FINDTEXT_FLAG_CASESENSITIVE: number;
   export var FINDTEXT_FLAG_NEXT: number;
   export var FINDTEXT_FLAG_NONE: number;
   export var FINDTEXT_FLAG_PREV: number;
   export var FINDTEXT_FLAG_WHOLEWORD: number;
   export var FINDTEXT_FLAG_WRAP: number;


//----------------------------------------------------
// MODULE: Editor
//----------------------------------------------------


   export class CubemapGenerator extends EditorComponent {

      imageSize: number;

      /**  Construct. */
      constructor();

      render(): boolean;
      getImageSize(): number;
      setImageSize(size: number): void;

   }

   export class EditorComponent extends Atomic.Component {

      /**  Construct. */
      constructor();


   }

   export class EditorMode extends Atomic.AObject {

      playerEnabled: boolean;

      /**  Construct. */
      constructor();

      playProject(addArgs?: string, debug?: boolean): boolean;
      isPlayerEnabled(): boolean;
      playerJSDebug(): void;

   }

   export class FileUtils extends Atomic.AObject {

      mobileProvisionPath: string;

      /**  Construct. */
      constructor();

      createDirs(folder: string): boolean;
      getMobileProvisionPath(): string;
      getAntPath(defaultPath: string): string;
      openProjectFileDialog(): string;
      newProjectFileDialog(): string;
      getBuildPath(defaultPath: string): string;
      revealInFinder(fullpath: string): void;
      findPath(title: string, defaultPath: string): string;
      findFile(filterlist: string, defaultPath: string): string;

   }

   export class Gizmo3D extends Atomic.AObject {

      view: SceneView3D;
      axisMode: AxisMode;
      editMode: EditMode;
      gizmoNode: Atomic.Node;
      snapTranslationX: number;
      snapTranslationY: number;
      snapTranslationZ: number;
      snapRotation: number;
      snapScale: number;

      constructor();

      setView(view3D: SceneView3D): void;
      setAxisMode(mode: AxisMode): void;
      getAxisMode(): AxisMode;
      setEditMode(mode: EditMode): void;
      selected(): boolean;
      show(): void;
      hide(): void;
      update(): void;
      getGizmoNode(): Atomic.Node;
      getSnapTranslationX(): number;
      getSnapTranslationY(): number;
      getSnapTranslationZ(): number;
      getSnapRotation(): number;
      getSnapScale(): number;
      setSnapTranslationX(value: number): void;
      setSnapTranslationY(value: number): void;
      setSnapTranslationZ(value: number): void;
      setSnapRotation(value: number): void;
      setSnapScale(value: number): void;

   }

   export class JSResourceEditor extends ResourceEditor {

      webView: WebView.UIWebView;

      constructor(fullpath: string, container: Atomic.UITabContainer, editorUrl: string);

      /**  Get the editor's UIWebView */
      getWebView(): WebView.UIWebView;
      findText(findText: string, flags: number): boolean;
      findTextClose(): void;
      gotoTokenPos(tokenPos: number): void;
      gotoLineNumber(lineNumber: number): void;
      formatCode(): void;
      setFocus(): void;
      save(): boolean;

   }

   export class PlayerMode extends Atomic.AObject {

      /**  Construct. */
      constructor();

      launchedByEditor(): boolean;

   }

   export class ResourceEditor extends Atomic.AObject {

      button: Atomic.UIButton;
      fullPath: string;
      rootContentWidget: Atomic.UIWidget;
      modified: boolean;

      constructor(fullpath: string, container: Atomic.UITabContainer);

      getButton(): Atomic.UIButton;
      hasUnsavedModifications(): boolean;
      setFocus(): void;
      close(navigateToAvailableResource?: boolean): void;
      findText(text: string, flags: number): boolean;
      findTextClose(): void;
      requiresInspector(): boolean;
      getFullPath(): string;
      undo(): void;
      redo(): void;
      save(): boolean;
      delete(): void;
      getRootContentWidget(): Atomic.UIWidget;
      invokeShortcut(shortcut: string): void;
      requestClose(): void;
      setModified(modified: boolean): void;

   }

   export class SceneEditor3D extends ResourceEditor {

      selection: SceneSelection;
      sceneView3D: SceneView3D;
      scene: Atomic.Scene;
      gizmo: Gizmo3D;

      constructor(fullpath: string, container: Atomic.UITabContainer);

      getSelection(): SceneSelection;
      getSceneView3D(): SceneView3D;
      registerNode(node: Atomic.Node): void;
      reparentNode(node: Atomic.Node, newParent: Atomic.Node): void;
      getScene(): Atomic.Scene;
      getGizmo(): Gizmo3D;
      setFocus(): void;
      requiresInspector(): boolean;
      close(navigateToAvailableResource?: boolean): void;
      save(): boolean;
      undo(): void;
      redo(): void;
      cut(): void;
      copy(): void;
      paste(): void;
      invokeShortcut(shortcut: string): void;
      static getSceneEditor(scene: Atomic.Scene): SceneEditor3D;

   }

   export class SceneSelection extends Atomic.AObject {

      selectedNodeCount: number;

      constructor(sceneEditor: SceneEditor3D);

      cut(): void;
      copy(): void;
      paste(): void;
      delete(): void;
      /**  Add a node to the selection, if clear specified removes current nodes first */
      addNode(node: Atomic.Node, clear?: boolean): void;
      removeNode(node: Atomic.Node, quiet?: boolean): void;
      getBounds(bbox: Atomic.BoundingBox): void;
      contains(node: Atomic.Node): boolean;
      getSelectedNode(index: number): Atomic.Node;
      getSelectedNodeCount(): number;
      clear(): void;

   }

   export class SceneView3D extends Atomic.UISceneView {

      pitch: number;
      yaw: number;
      enabled: boolean;
      debugRenderer: Atomic.DebugRenderer;
      sceneEditor3D: SceneEditor3D;

      constructor(sceneEditor: SceneEditor3D);

      setPitch(pitch: number): void;
      setYaw(yaw: number): void;
      frameSelection(): void;
      enable(): void;
      disable(): void;
      isEnabled(): boolean;
      getDebugRenderer(): Atomic.DebugRenderer;
      getSceneEditor3D(): SceneEditor3D;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorPlayRequest" **/
    export var EditorPlayRequestEventType : Atomic.EventType;

    /** object returned in the callback for the EditorPlayRequest event.**/
    export interface EditorPlayRequestEvent extends Atomic.EventData {
        mode : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorPlayRequest event. 

     emitted when the play button has been pressed in the editor, but the player has not yet started
    **/
    export function EditorPlayRequestEvent (callback : Atomic.EventCallback<EditorPlayRequestEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorPlayRequest event. **/ 
    export function EditorPlayRequestEventData (callbackData : EditorPlayRequestEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorResourceEditorChanged" **/
    export var EditorResourceEditorChangedEventType : Atomic.EventType;

    /** object returned in the callback for the EditorResourceEditorChanged event.**/
    export interface EditorResourceEditorChangedEvent extends Atomic.EventData {
        resourceEditor : Editor.ResourceEditor;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorResourceEditorChanged event. 

     Called when the active resource editor has changed
    **/
    export function EditorResourceEditorChangedEvent (callback : Atomic.EventCallback<EditorResourceEditorChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorResourceEditorChanged event. **/ 
    export function EditorResourceEditorChangedEventData (callbackData : EditorResourceEditorChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorPlayerStarted" **/
    export var EditorPlayerStartedEventType : Atomic.EventType;

    /** object returned in the callback for the EditorPlayerStarted event.**/
    export interface EditorPlayerStartedEvent extends Atomic.EventData {
        mode : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorPlayerStarted event. 

     emitted once play has started
    **/
    export function EditorPlayerStartedEvent (callback : Atomic.EventCallback<EditorPlayerStartedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorPlayerStarted event. **/ 
    export function EditorPlayerStartedEventData (callbackData : EditorPlayerStartedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorPlayerPaused" **/
    export var EditorPlayerPausedEventType : Atomic.EventType;

    /** object returned in the callback for the EditorPlayerPaused event.**/
    export interface EditorPlayerPausedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorPlayerPaused event. 

     emitted once player has paused
    **/
    export function EditorPlayerPausedEvent (callback : Atomic.EventCallback<EditorPlayerPausedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EditorPlayerPaused event. **/ 
    export function EditorPlayerPausedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorPlayerResumed" **/
    export var EditorPlayerResumedEventType : Atomic.EventType;

    /** object returned in the callback for the EditorPlayerResumed event.**/
    export interface EditorPlayerResumedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorPlayerResumed event. 

     emitted once paused player has resumed
    **/
    export function EditorPlayerResumedEvent (callback : Atomic.EventCallback<EditorPlayerResumedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EditorPlayerResumed event. **/ 
    export function EditorPlayerResumedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorPlayerStopped" **/
    export var EditorPlayerStoppedEventType : Atomic.EventType;

    /** object returned in the callback for the EditorPlayerStopped event.**/
    export interface EditorPlayerStoppedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorPlayerStopped event. 

     emitted once play has stopped
    **/
    export function EditorPlayerStoppedEvent (callback : Atomic.EventCallback<EditorPlayerStoppedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EditorPlayerStopped event. **/ 
    export function EditorPlayerStoppedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorBuild" **/
    export var EditorBuildEventType : Atomic.EventType;

    /** object returned in the callback for the EditorBuild event.**/
    export interface EditorBuildEvent extends Atomic.EventData {
        platform : string;
        buildPath : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorBuild event. 

     NOT CURRENTLY WIRED
    **/
    export function EditorBuildEvent (callback : Atomic.EventCallback<EditorBuildEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorBuild event. **/ 
    export function EditorBuildEventData (callbackData : EditorBuildEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorModal" **/
    export var EditorModalEventType : Atomic.EventType;

    /** object returned in the callback for the EditorModal event.**/
    export interface EditorModalEvent extends Atomic.EventData {
        /**  Type can be EDITOR_MODALERROR, EDITOR_MODAL_INFOT */
        type : number;
        /**  for modal errors, title text */
        title : string;
        /**  for modal errors, error text */
        message : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorModal event. 

     emitted to display a modal message in the editor
    **/
    export function EditorModalEvent (callback : Atomic.EventCallback<EditorModalEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorModal event. **/ 
    export function EditorModalEventData (callbackData : EditorModalEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorActiveSceneEditorChange" **/
    export var EditorActiveSceneEditorChangeEventType : Atomic.EventType;

    /** object returned in the callback for the EditorActiveSceneEditorChange event.**/
    export interface EditorActiveSceneEditorChangeEvent extends Atomic.EventData {
        sceneEditor : Editor.SceneEditor3D;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorActiveSceneEditorChange event. 

     emitted when a Scene editor gains focus.  Could be null.
    **/
    export function EditorActiveSceneEditorChangeEvent (callback : Atomic.EventCallback<EditorActiveSceneEditorChangeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorActiveSceneEditorChange event. **/ 
    export function EditorActiveSceneEditorChangeEventData (callbackData : EditorActiveSceneEditorChangeEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorSceneClosed" **/
    export var EditorSceneClosedEventType : Atomic.EventType;

    /** object returned in the callback for the EditorSceneClosed event.**/
    export interface EditorSceneClosedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorSceneClosed event. 

     NOTE: This is not triggered by anything
    **/
    export function EditorSceneClosedEvent (callback : Atomic.EventCallback<EditorSceneClosedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorSceneClosed event. **/ 
    export function EditorSceneClosedEventData (callbackData : EditorSceneClosedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SubprocessOutput" **/
    export var SubprocessOutputEventType : Atomic.EventType;

    /** object returned in the callback for the SubprocessOutput event.**/
    export interface SubprocessOutputEvent extends Atomic.EventData {
        text : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SubprocessOutput event. 

     emitted when a subprocess logs information to the console
    **/
    export function SubprocessOutputEvent (callback : Atomic.EventCallback<SubprocessOutputEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SubprocessOutput event. **/ 
    export function SubprocessOutputEventData (callbackData : SubprocessOutputEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SubprocessComplete" **/
    export var SubprocessCompleteEventType : Atomic.EventType;

    /** object returned in the callback for the SubprocessComplete event.**/
    export interface SubprocessCompleteEvent extends Atomic.EventData {
        processKey : number;
        /**  return code of process */
        retCode : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SubprocessComplete event. 

     emitted when a subprocess has completed
    **/
    export function SubprocessCompleteEvent (callback : Atomic.EventCallback<SubprocessCompleteEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SubprocessComplete event. **/ 
    export function SubprocessCompleteEventData (callbackData : SubprocessCompleteEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorLoadProject" **/
    export var EditorLoadProjectEventType : Atomic.EventType;

    /** object returned in the callback for the EditorLoadProject event.**/
    export interface EditorLoadProjectEvent extends Atomic.EventData {
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorLoadProject event. 

     Command called to load a new project
    **/
    export function EditorLoadProjectEvent (callback : Atomic.EventCallback<EditorLoadProjectEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorLoadProject event. **/ 
    export function EditorLoadProjectEventData (callbackData : EditorLoadProjectEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ContentFolderChanged" **/
    export var ContentFolderChangedEventType : Atomic.EventType;

    /** object returned in the callback for the ContentFolderChanged event.**/
    export interface ContentFolderChangedEvent extends Atomic.EventData {
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ContentFolderChanged event. 

     emitted once a content folder has been refreshed
    **/
    export function ContentFolderChangedEvent (callback : Atomic.EventCallback<ContentFolderChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ContentFolderChanged event. **/ 
    export function ContentFolderChangedEventData (callbackData : ContentFolderChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorCloseProject" **/
    export var EditorCloseProjectEventType : Atomic.EventType;

    /** object returned in the callback for the EditorCloseProject event.**/
    export interface EditorCloseProjectEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorCloseProject event. 

     emitted when the editor has been requested to close the current project.
    **/
    export function EditorCloseProjectEvent (callback : Atomic.EventCallback<EditorCloseProjectEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EditorCloseProject event. **/ 
    export function EditorCloseProjectEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorProjectClosed" **/
    export var EditorProjectClosedEventType : Atomic.EventType;

    /** object returned in the callback for the EditorProjectClosed event.**/
    export interface EditorProjectClosedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorProjectClosed event. 

     emitted once a project has completed closing
    **/
    export function EditorProjectClosedEvent (callback : Atomic.EventCallback<EditorProjectClosedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EditorProjectClosed event. **/ 
    export function EditorProjectClosedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorSaveAllResources" **/
    export var EditorSaveAllResourcesEventType : Atomic.EventType;

    /** object returned in the callback for the EditorSaveAllResources event.**/
    export interface EditorSaveAllResourcesEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorSaveAllResources event. 

     command to save all the open editors
    **/
    export function EditorSaveAllResourcesEvent (callback : Atomic.EventCallback<EditorSaveAllResourcesEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EditorSaveAllResources event. **/ 
    export function EditorSaveAllResourcesEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorSaveResource" **/
    export var EditorSaveResourceEventType : Atomic.EventType;

    /** object returned in the callback for the EditorSaveResource event.**/
    export interface EditorSaveResourceEvent extends Atomic.EventData {
        /**  full path of the current resource */
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorSaveResource event. 

     command to save a specific resource
    **/
    export function EditorSaveResourceEvent (callback : Atomic.EventCallback<EditorSaveResourceEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorSaveResource event. **/ 
    export function EditorSaveResourceEventData (callbackData : EditorSaveResourceEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorSaveResourceNotification" **/
    export var EditorSaveResourceNotificationEventType : Atomic.EventType;

    /** object returned in the callback for the EditorSaveResourceNotification event.**/
    export interface EditorSaveResourceNotificationEvent extends Atomic.EventData {
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorSaveResourceNotification event. 

     emitted once the resource has been saved
    **/
    export function EditorSaveResourceNotificationEvent (callback : Atomic.EventCallback<EditorSaveResourceNotificationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorSaveResourceNotification event. **/ 
    export function EditorSaveResourceNotificationEventData (callbackData : EditorSaveResourceNotificationEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorEditResource" **/
    export var EditorEditResourceEventType : Atomic.EventType;

    /** object returned in the callback for the EditorEditResource event.**/
    export interface EditorEditResourceEvent extends Atomic.EventData {
        path : string;
        lineNumber : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorEditResource event. 

     emitted when a resource gains focus
    **/
    export function EditorEditResourceEvent (callback : Atomic.EventCallback<EditorEditResourceEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorEditResource event. **/ 
    export function EditorEditResourceEventData (callbackData : EditorEditResourceEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorDeleteResource" **/
    export var EditorDeleteResourceEventType : Atomic.EventType;

    /** object returned in the callback for the EditorDeleteResource event.**/
    export interface EditorDeleteResourceEvent extends Atomic.EventData {
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorDeleteResource event. 

     command to delete a resource
    **/
    export function EditorDeleteResourceEvent (callback : Atomic.EventCallback<EditorDeleteResourceEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorDeleteResource event. **/ 
    export function EditorDeleteResourceEventData (callbackData : EditorDeleteResourceEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorDeleteResourceNotification" **/
    export var EditorDeleteResourceNotificationEventType : Atomic.EventType;

    /** object returned in the callback for the EditorDeleteResourceNotification event.**/
    export interface EditorDeleteResourceNotificationEvent extends Atomic.EventData {
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorDeleteResourceNotification event. 

     emitted once the resource has been deleted
    **/
    export function EditorDeleteResourceNotificationEvent (callback : Atomic.EventCallback<EditorDeleteResourceNotificationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorDeleteResourceNotification event. **/ 
    export function EditorDeleteResourceNotificationEventData (callbackData : EditorDeleteResourceNotificationEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorRenameResourceNotification" **/
    export var EditorRenameResourceNotificationEventType : Atomic.EventType;

    /** object returned in the callback for the EditorRenameResourceNotification event.**/
    export interface EditorRenameResourceNotificationEvent extends Atomic.EventData {
        /**  full path of the old resource */
        path : string;
        /**  full path of the new resource */
        newPath : string;
        /**  new name of resource */
        newName : string;
        /** Unmapped Native Type: ToolCore.Asset */
        asset : any;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorRenameResourceNotification event. 

     emitted when a resource has been renamed
    **/
    export function EditorRenameResourceNotificationEvent (callback : Atomic.EventCallback<EditorRenameResourceNotificationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorRenameResourceNotification event. **/ 
    export function EditorRenameResourceNotificationEventData (callbackData : EditorRenameResourceNotificationEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "UserPreferencesChangedNotification" **/
    export var UserPreferencesChangedNotificationEventType : Atomic.EventType;

    /** object returned in the callback for the UserPreferencesChangedNotification event.**/
    export interface UserPreferencesChangedNotificationEvent extends Atomic.EventData {
        /**  JSON object */
        projectPreferences : string;
        /**  JSON object */
        applicationPreferences : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the UserPreferencesChangedNotification event. 

     emitted when user preferences have been changed
    **/
    export function UserPreferencesChangedNotificationEvent (callback : Atomic.EventCallback<UserPreferencesChangedNotificationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the UserPreferencesChangedNotification event. **/ 
    export function UserPreferencesChangedNotificationEventData (callbackData : UserPreferencesChangedNotificationEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "InspectorProjectReference" **/
    export var InspectorProjectReferenceEventType : Atomic.EventType;

    /** object returned in the callback for the InspectorProjectReference event.**/
    export interface InspectorProjectReferenceEvent extends Atomic.EventData {
        /**  Full path of the resource to edit */
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the InspectorProjectReference event. 

     emitted when an item is selected in a scene
    **/
    export function InspectorProjectReferenceEvent (callback : Atomic.EventCallback<InspectorProjectReferenceEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the InspectorProjectReference event. **/ 
    export function InspectorProjectReferenceEventData (callbackData : InspectorProjectReferenceEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "AttributeEditResourceChanged" **/
    export var AttributeEditResourceChangedEventType : Atomic.EventType;

    /** object returned in the callback for the AttributeEditResourceChanged event.**/
    export interface AttributeEditResourceChangedEvent extends Atomic.EventData {
        /** Unmapped Native Type: AttrbuteInfoEdit */
        attrInfoEdit : any;
        resource : Atomic.Resource;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the AttributeEditResourceChanged event. 

     emitted when a component attribute has been changed
    **/
    export function AttributeEditResourceChangedEvent (callback : Atomic.EventCallback<AttributeEditResourceChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the AttributeEditResourceChanged event. **/ 
    export function AttributeEditResourceChangedEventData (callbackData : AttributeEditResourceChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorPlayerLog" **/
    export var EditorPlayerLogEventType : Atomic.EventType;

    /** object returned in the callback for the EditorPlayerLog event.**/
    export interface EditorPlayerLogEvent extends Atomic.EventData {
        message : string;
        level : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorPlayerLog event. 

     emitted when the built in player logs something
    **/
    export function EditorPlayerLogEvent (callback : Atomic.EventCallback<EditorPlayerLogEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorPlayerLog event. **/ 
    export function EditorPlayerLogEventData (callbackData : EditorPlayerLogEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ProjectUnloadedNotification" **/
    export var ProjectUnloadedNotificationEventType : Atomic.EventType;

    /** object returned in the callback for the ProjectUnloadedNotification event.**/
    export interface ProjectUnloadedNotificationEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ProjectUnloadedNotification event. 

     emitted right before a project is unloaded
    **/
    export function ProjectUnloadedNotificationEvent (callback : Atomic.EventCallback<ProjectUnloadedNotificationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ProjectUnloadedNotification event. **/ 
    export function ProjectUnloadedNotificationEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "RequestProjectLoad" **/
    export var RequestProjectLoadEventType : Atomic.EventType;

    /** object returned in the callback for the RequestProjectLoad event.**/
    export interface RequestProjectLoadEvent extends Atomic.EventData {
        /**  Full path to the .atomic file */
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the RequestProjectLoad event. 

     command to load a new project
    **/
    export function RequestProjectLoadEvent (callback : Atomic.EventCallback<RequestProjectLoadEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the RequestProjectLoad event. **/ 
    export function RequestProjectLoadEventData (callbackData : RequestProjectLoadEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "LoadProjectNotification" **/
    export var LoadProjectNotificationEventType : Atomic.EventType;

    /** object returned in the callback for the LoadProjectNotification event.**/
    export interface LoadProjectNotificationEvent extends Atomic.EventData {
        /**  Full path to the .atomic file */
        path : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the LoadProjectNotification event. 

     emitted once a project has been loaded
    **/
    export function LoadProjectNotificationEvent (callback : Atomic.EventCallback<LoadProjectNotificationEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the LoadProjectNotification event. **/ 
    export function LoadProjectNotificationEventData (callbackData : LoadProjectNotificationEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorResourceClose" **/
    export var EditorResourceCloseEventType : Atomic.EventType;

    /** object returned in the callback for the EditorResourceClose event.**/
    export interface EditorResourceCloseEvent extends Atomic.EventData {
        editor : Editor.ResourceEditor;
        navigateToAvailableResource : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorResourceClose event. **/
    export function EditorResourceCloseEvent (callback : Atomic.EventCallback<EditorResourceCloseEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the EditorResourceClose event. **/ 
    export function EditorResourceCloseEventData (callbackData : EditorResourceCloseEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "EditorResourceCloseCanceled" **/
    export var EditorResourceCloseCanceledEventType : Atomic.EventType;

    /** object returned in the callback for the EditorResourceCloseCanceled event.**/
    export interface EditorResourceCloseCanceledEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the EditorResourceCloseCanceled event. **/
    export function EditorResourceCloseCanceledEvent (callback : Atomic.EventCallback<EditorResourceCloseCanceledEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the EditorResourceCloseCanceled event. **/ 
    export function EditorResourceCloseCanceledEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "GizmoEditModeChanged" **/
    export var GizmoEditModeChangedEventType : Atomic.EventType;

    /** object returned in the callback for the GizmoEditModeChanged event.**/
    export interface GizmoEditModeChangedEvent extends Atomic.EventData {
        mode : number;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the GizmoEditModeChanged event. 

     / Variable timestep scene update.
    **/
    export function GizmoEditModeChangedEvent (callback : Atomic.EventCallback<GizmoEditModeChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the GizmoEditModeChanged event. **/ 
    export function GizmoEditModeChangedEventData (callbackData : GizmoEditModeChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "GizmoAxisModeChanged" **/
    export var GizmoAxisModeChangedEventType : Atomic.EventType;

    /** object returned in the callback for the GizmoAxisModeChanged event.**/
    export interface GizmoAxisModeChangedEvent extends Atomic.EventData {
        mode : number;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the GizmoAxisModeChanged event. **/
    export function GizmoAxisModeChangedEvent (callback : Atomic.EventCallback<GizmoAxisModeChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the GizmoAxisModeChanged event. **/ 
    export function GizmoAxisModeChangedEventData (callbackData : GizmoAxisModeChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "GizmoMoved" **/
    export var GizmoMovedEventType : Atomic.EventType;

    /** object returned in the callback for the GizmoMoved event.**/
    export interface GizmoMovedEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the GizmoMoved event. **/
    export function GizmoMovedEvent (callback : Atomic.EventCallback<GizmoMovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the GizmoMoved event. **/ 
    export function GizmoMovedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneNodeSelected" **/
    export var SceneNodeSelectedEventType : Atomic.EventType;

    /** object returned in the callback for the SceneNodeSelected event.**/
    export interface SceneNodeSelectedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        selected : boolean;
        /**  don't record edit event */
        quiet : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneNodeSelected event. **/
    export function SceneNodeSelectedEvent (callback : Atomic.EventCallback<SceneNodeSelectedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneNodeSelected event. **/ 
    export function SceneNodeSelectedEventData (callbackData : SceneNodeSelectedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditBegin" **/
    export var SceneEditBeginEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditBegin event.**/
    export interface SceneEditBeginEvent extends Atomic.EventData {
        scene : Atomic.Scene;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditBegin event. **/
    export function SceneEditBeginEvent (callback : Atomic.EventCallback<SceneEditBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditBegin event. **/ 
    export function SceneEditBeginEventData (callbackData : SceneEditBeginEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditNodeReparent" **/
    export var SceneEditNodeReparentEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditNodeReparent event.**/
    export interface SceneEditNodeReparentEvent extends Atomic.EventData {
        node : Atomic.Node;
        added : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditNodeReparent event. **/
    export function SceneEditNodeReparentEvent (callback : Atomic.EventCallback<SceneEditNodeReparentEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditNodeReparent event. **/ 
    export function SceneEditNodeReparentEventData (callbackData : SceneEditNodeReparentEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditEnd" **/
    export var SceneEditEndEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditEnd event.**/
    export interface SceneEditEndEvent extends Atomic.EventData {
        scene : Atomic.Scene;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditEnd event. **/
    export function SceneEditEndEvent (callback : Atomic.EventCallback<SceneEditEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditEnd event. **/ 
    export function SceneEditEndEventData (callbackData : SceneEditEndEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditStateChangesBegin" **/
    export var SceneEditStateChangesBeginEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditStateChangesBegin event.**/
    export interface SceneEditStateChangesBeginEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditStateChangesBegin event. **/
    export function SceneEditStateChangesBeginEvent (callback : Atomic.EventCallback<SceneEditStateChangesBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the SceneEditStateChangesBegin event. **/ 
    export function SceneEditStateChangesBeginEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditStateChange" **/
    export var SceneEditStateChangeEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditStateChange event.**/
    export interface SceneEditStateChangeEvent extends Atomic.EventData {
        serializable : Atomic.Serializable;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditStateChange event. **/
    export function SceneEditStateChangeEvent (callback : Atomic.EventCallback<SceneEditStateChangeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditStateChange event. **/ 
    export function SceneEditStateChangeEventData (callbackData : SceneEditStateChangeEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditStateChangesEnd" **/
    export var SceneEditStateChangesEndEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditStateChangesEnd event.**/
    export interface SceneEditStateChangesEndEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditStateChangesEnd event. **/
    export function SceneEditStateChangesEndEvent (callback : Atomic.EventCallback<SceneEditStateChangesEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the SceneEditStateChangesEnd event. **/ 
    export function SceneEditStateChangesEndEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditNodeCreated" **/
    export var SceneEditNodeCreatedEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditNodeCreated event.**/
    export interface SceneEditNodeCreatedEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditNodeCreated event. 

     / A child node has been added to a parent node.
    **/
    export function SceneEditNodeCreatedEvent (callback : Atomic.EventCallback<SceneEditNodeCreatedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditNodeCreated event. **/ 
    export function SceneEditNodeCreatedEventData (callbackData : SceneEditNodeCreatedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditNodeAdded" **/
    export var SceneEditNodeAddedEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditNodeAdded event.**/
    export interface SceneEditNodeAddedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        parent : Atomic.Node;
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditNodeAdded event. 

     / A child node has been added to a parent node.
    **/
    export function SceneEditNodeAddedEvent (callback : Atomic.EventCallback<SceneEditNodeAddedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditNodeAdded event. **/ 
    export function SceneEditNodeAddedEventData (callbackData : SceneEditNodeAddedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditNodeRemoved" **/
    export var SceneEditNodeRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditNodeRemoved event.**/
    export interface SceneEditNodeRemovedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        parent : Atomic.Node;
        node : Atomic.Node;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditNodeRemoved event. 

     / A child node is about to be removed from a parent node.
    **/
    export function SceneEditNodeRemovedEvent (callback : Atomic.EventCallback<SceneEditNodeRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditNodeRemoved event. **/ 
    export function SceneEditNodeRemovedEventData (callbackData : SceneEditNodeRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditComponentAddedRemoved" **/
    export var SceneEditComponentAddedRemovedEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditComponentAddedRemoved event.**/
    export interface SceneEditComponentAddedRemovedEvent extends Atomic.EventData {
        scene : Atomic.Scene;
        node : Atomic.Node;
        component : Atomic.Component;
        removed : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditComponentAddedRemoved event. 

     / A child node has been added to a parent node.
    **/
    export function SceneEditComponentAddedRemovedEvent (callback : Atomic.EventCallback<SceneEditComponentAddedRemovedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditComponentAddedRemoved event. **/ 
    export function SceneEditComponentAddedRemovedEventData (callbackData : SceneEditComponentAddedRemovedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditPrefabSave" **/
    export var SceneEditPrefabSaveEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditPrefabSave event.**/
    export interface SceneEditPrefabSaveEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditPrefabSave event. **/
    export function SceneEditPrefabSaveEvent (callback : Atomic.EventCallback<SceneEditPrefabSaveEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditPrefabSave event. **/ 
    export function SceneEditPrefabSaveEventData (callbackData : SceneEditPrefabSaveEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditPrefabRevert" **/
    export var SceneEditPrefabRevertEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditPrefabRevert event.**/
    export interface SceneEditPrefabRevertEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditPrefabRevert event. **/
    export function SceneEditPrefabRevertEvent (callback : Atomic.EventCallback<SceneEditPrefabRevertEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditPrefabRevert event. **/ 
    export function SceneEditPrefabRevertEventData (callbackData : SceneEditPrefabRevertEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditPrefabCopy" **/
    export var SceneEditPrefabCopyEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditPrefabCopy event.**/
    export interface SceneEditPrefabCopyEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditPrefabCopy event. **/
    export function SceneEditPrefabCopyEvent (callback : Atomic.EventCallback<SceneEditPrefabCopyEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditPrefabCopy event. **/ 
    export function SceneEditPrefabCopyEventData (callbackData : SceneEditPrefabCopyEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditPrefabPaste" **/
    export var SceneEditPrefabPasteEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditPrefabPaste event.**/
    export interface SceneEditPrefabPasteEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditPrefabPaste event. **/
    export function SceneEditPrefabPasteEvent (callback : Atomic.EventCallback<SceneEditPrefabPasteEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditPrefabPaste event. **/ 
    export function SceneEditPrefabPasteEventData (callbackData : SceneEditPrefabPasteEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditPrefabBreak" **/
    export var SceneEditPrefabBreakEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditPrefabBreak event.**/
    export interface SceneEditPrefabBreakEvent extends Atomic.EventData {
        node : Atomic.Node;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditPrefabBreak event. **/
    export function SceneEditPrefabBreakEvent (callback : Atomic.EventCallback<SceneEditPrefabBreakEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditPrefabBreak event. **/ 
    export function SceneEditPrefabBreakEventData (callbackData : SceneEditPrefabBreakEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditComponentCopy" **/
    export var SceneEditComponentCopyEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditComponentCopy event.**/
    export interface SceneEditComponentCopyEvent extends Atomic.EventData {
        component : Atomic.Component;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditComponentCopy event. **/
    export function SceneEditComponentCopyEvent (callback : Atomic.EventCallback<SceneEditComponentCopyEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditComponentCopy event. **/ 
    export function SceneEditComponentCopyEventData (callbackData : SceneEditComponentCopyEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditComponentPaste" **/
    export var SceneEditComponentPasteEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditComponentPaste event.**/
    export interface SceneEditComponentPasteEvent extends Atomic.EventData {
        component : Atomic.Component;
        end : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditComponentPaste event. **/
    export function SceneEditComponentPasteEvent (callback : Atomic.EventCallback<SceneEditComponentPasteEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditComponentPaste event. **/ 
    export function SceneEditComponentPasteEventData (callbackData : SceneEditComponentPasteEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditAddRemoveNodes" **/
    export var SceneEditAddRemoveNodesEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditAddRemoveNodes event.**/
    export interface SceneEditAddRemoveNodesEvent extends Atomic.EventData {
        end : boolean;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditAddRemoveNodes event. **/
    export function SceneEditAddRemoveNodesEvent (callback : Atomic.EventCallback<SceneEditAddRemoveNodesEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SceneEditAddRemoveNodes event. **/ 
    export function SceneEditAddRemoveNodesEventData (callbackData : SceneEditAddRemoveNodesEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SceneEditSceneModified" **/
    export var SceneEditSceneModifiedEventType : Atomic.EventType;

    /** object returned in the callback for the SceneEditSceneModified event.**/
    export interface SceneEditSceneModifiedEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SceneEditSceneModified event. **/
    export function SceneEditSceneModifiedEvent (callback : Atomic.EventCallback<SceneEditSceneModifiedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the SceneEditSceneModified event. **/ 
    export function SceneEditSceneModifiedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CubemapRenderBegin" **/
    export var CubemapRenderBeginEventType : Atomic.EventType;

    /** object returned in the callback for the CubemapRenderBegin event.**/
    export interface CubemapRenderBeginEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CubemapRenderBegin event. **/
    export function CubemapRenderBeginEvent (callback : Atomic.EventCallback<CubemapRenderBeginEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the CubemapRenderBegin event. **/ 
    export function CubemapRenderBeginEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "CubemapRenderEnd" **/
    export var CubemapRenderEndEventType : Atomic.EventType;

    /** object returned in the callback for the CubemapRenderEnd event.**/
    export interface CubemapRenderEndEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the CubemapRenderEnd event. **/
    export function CubemapRenderEndEvent (callback : Atomic.EventCallback<CubemapRenderEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the CubemapRenderEnd event. **/ 
    export function CubemapRenderEndEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ComponentEditEnd" **/
    export var ComponentEditEndEventType : Atomic.EventType;

    /** object returned in the callback for the ComponentEditEnd event.**/
    export interface ComponentEditEndEvent extends Atomic.EventData {
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ComponentEditEnd event. **/
    export function ComponentEditEndEvent (callback : Atomic.EventCallback<ComponentEditEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the ComponentEditEnd event. **/ 
    export function ComponentEditEndEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "ColorChooserChanged" **/
    export var ColorChooserChangedEventType : Atomic.EventType;

    /** object returned in the callback for the ColorChooserChanged event.**/
    export interface ColorChooserChangedEvent extends Atomic.EventData {
        widget : Atomic.UIWidget;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the ColorChooserChanged event. **/
    export function ColorChooserChangedEvent (callback : Atomic.EventCallback<ColorChooserChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the ColorChooserChanged event. **/ 
    export function ColorChooserChangedEventData (callbackData : ColorChooserChangedEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "SelectionCreateComponent" **/
    export var SelectionCreateComponentEventType : Atomic.EventType;

    /** object returned in the callback for the SelectionCreateComponent event.**/
    export interface SelectionCreateComponentEvent extends Atomic.EventData {
        componentTypeName : string;
    }

    /** Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the SelectionCreateComponent event. **/
    export function SelectionCreateComponentEvent (callback : Atomic.EventCallback<SelectionCreateComponentEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the SelectionCreateComponent event. **/ 
    export function SelectionCreateComponentEventData (callbackData : SelectionCreateComponentEvent) : Atomic.EventCallbackMetaData; 



}
/// <reference path="Atomic.d.ts" />
/// <reference path="ToolCore.d.ts" />
/// <reference path="Editor.d.ts" />
/// <reference path="AtomicPlayer.d.ts" />

declare module Atomic {

    export function print(...args: any[]);

    export var platform: string;

    // subsystems

    export var engine: Engine;
    export var graphics: Graphics;
    export var renderer: Renderer;
    export var cache: ResourceCache;
    export var input: Input;
    export var fileSystem: FileSystem;
    export var network: Network;
    export var ui: UI;
    export var audio: Audio;
    export var player: AtomicPlayer.Player;

    export var editorMode: Editor.EditorMode;

    // end subsystems

    /** Base for all event types */
    type EventType = string;

    /** Base for all event callback data */
    type EventData = Object;

    /** Base interface for events, contains eventType string and callback */
    interface EventMetaData {
        /**@internal*/
        _eventType?: string;
        /**@internal*/
        _callback?: (...params) => any;
    }

    /** Base interface for event data sent to event handlers */
    interface EventCallbackMetaData {
        /**@internal*/
        _eventType?: string;
        /**@internal*/
        _callbackData?: any;
    }

    interface NativeEvent extends EventMetaData { }

    interface ScriptEvent extends EventMetaData { }

    // typed callback generic
    type EventCallback<T extends EventMetaData> = (data: T) => void;

    /**
     * Utility function to wrap up an event callback to pass to subscribeToEvent
     * @param eventType The type of event to wrap
     * @param callback A callback to call when the event is fired
     */
    export function ScriptEvent<T extends Atomic.EventMetaData>(eventType: string, callback: Atomic.EventCallback<T>): Atomic.EventMetaData;

    /**
     * Utility function to wrap up event data to pass to sendEvent
     * @param eventType The type of event to wrap
     * @param callbackData The data to pass to the event subscriber
     */
    export function ScriptEventData<T extends Atomic.EventData>(eventType: string, callbackData?: T): Atomic.EventCallbackMetaData;

    export interface PathInfo {

        pathName: string;
        fileName: string;
        ext: string;

    }

    export interface Ray {
        /** Ray origin */
        origin: Atomic.Vector3;

        /** Ray direction */
        direction: Atomic.Vector3;
    }

    export interface Camera {
        getScreenRay(x: number, y: number): Atomic.Ray;
    }

    export interface Octree {
        /**
         * Cast a ray returing a single hit
         * @param  {Atomic.Ray} ray
         * @param  {Atomic.RayQueryLevel} level defaults to Atomic.RAY_TRIANGLE
         * @param  {number} maxDistance defaults to Atomic.M_INFINITY
         * @param  {number} drawableFlags defaults to Atomic.DRAWABLE_ANY
         * @param  {number} viewMask defaults to Atomic.DEFAULT_VIEWMASK
         * @return {Atomic.RayQueryResult}
         */
        rayCastSingle(ray: Atomic.Ray, level?: Atomic.RayQueryLevel, maxDistance?: number, drawableFlags?: number, viewMask?: number):Atomic.RayQueryResult;

        /**
         * Cast a ray returning all hits
         * @param  {Atomic.Ray} ray
         * @param  {Atomic.RayQueryLevel} level defaults to Atomic.RAY_TRIANGLE
         * @param  {number} maxDistance defaults to Atomic.M_INFINITY
         * @param  {number} drawableFlags defaults to Atomic.DRAWABLE_ANY
         * @param  {number} viewMask defaults to Atomic.DEFAULT_VIEWMASK
         * @return {Atomic.RayQueryResult}
         */
        rayCast(ray: Atomic.Ray, level?: Atomic.RayQueryLevel, maxDistance?: number, drawableFlags?: number, viewMask?: number):Atomic.RayQueryResult[];
    }

    export interface RayQueryResult {
        /** Hit position in world space. */
        position: Atomic.Vector3;

        /** Hit normal in world space. Negation of ray direction if per-triangle data not available. */
        normal: Atomic.Vector3;

        /** Hit texture position */
        textureUV: Atomic.Vector2;

        /** Distance from ray origin. */
        distance:number;

        /** Drawable. */
        drawable: any;

        /** Scene node. */
        node: Atomic.Node;

        /** Drawable specific subobject if applicable. */
        subObject: number;
    }

    export interface AttributeInfo {

        type: VariantType;
        name: string;
        mode: number; // AM_*
        defaultValue: string;
        enumNames: string[];
        resourceTypeName: string;
        dynamic: boolean;
        tooltip: string;
        isArray:boolean;
        fixedArraySize:number;
    }

    export interface ShaderParameter {

        name: string;
        value: any;
        valueString: string;
        typeName: string;
        type: VariantType;

    }

    export function getArguments(): Array<string>;
    export function getEngine(): Engine;
    export function getInput(): Input;
    export function getGraphics(): Graphics;
    export function getFileSystem(): FileSystem;
    export function getResourceCache(): ResourceCache;
    export function getRenderer(): Atomic.Renderer;
    export function getNetwork(): Atomic.Network;
    export function getUI(): Atomic.UI;

    export function assert();
    export function js_module_read_file(path: string);
    export function openConsoleWindow();
    export function script(script: string): boolean;
    export function destroy(node: Atomic.Node): boolean;
    export function destroy(scene: Atomic.Scene): boolean;
    export function destroy(component: Atomic.JSComponent): boolean;

    export function getParentPath(path: string): string;
    export function getPath(path: string): string;
    export function addTrailingSlash(path: string): string;
    export function getExtension(path: string): string;

    export function splitPath(path: string): PathInfo;

}


declare module ToolCore {

    export var toolEnvironment: ToolEnvironment;
    export var toolSystem: ToolSystem;
    export var assetDatabase: AssetDatabase;
    export var licenseSystem: LicenseSystem;
    export var buildSystem: BuildSystem;
    export var netProjectSystem: NETProjectSystem;

    export function getToolEnvironment(): ToolEnvironment;
    export function getToolSystem(): ToolSystem;
    export function getAssetDatabase(): AssetDatabase;
    export function getLicenseSystem(): LicenseSystem;
}

declare module WebView {

    /**
     * interface for sending data to the web view in a standard way.
     */
    export interface WebMessageEventResponse<T> {
        response: T
    }
}
// Duktape built-ins

// extracted from lib.d.ts
declare interface Console {
    log(message?: any, ...optionalParams: any[]): void;
}

declare var console: Console;

// Duktape require isn't recognized as a function, but can be used as one
declare function require(filename: string): any;

declare interface DuktapeModule {
    /**
     * List of modules that have been loaded via the "require" statement
     * 
     * @type {string[]}
     * @memberOf DuktapeModule
     */
    modLoaded: string[];
    modSearch(id: string, require, exports, module);
}

declare var Duktape: DuktapeModule;
//////////////////////////////////////////////////////////
// IMPORTANT: THIS FILE IS GENERATED, CHANGES WILL BE LOST
//////////////////////////////////////////////////////////

// Atomic TypeScript Definitions

/// <reference path="Atomic.d.ts" />

declare module WebView {


//----------------------------------------------------
// MODULE: WebView
//----------------------------------------------------


   export class UIWebView extends Atomic.UIWidget {

      webClient: WebClient;
      webTexture2D: WebTexture2D;

      constructor(initialURL?: string);

      /**  Get the widget's WebClient */
      getWebClient(): WebClient;
      /**  Get the WebTexture in use by the WebView */
      getWebTexture2D(): WebTexture2D;

   }

   export class WebBrowserHost extends Atomic.AObject {


      /**  Construct. */
      constructor();

      clearCookies(url?: string, cookieName?: string): void;
      /**  Set global property object values, available as read only on page */
      static setGlobalBoolProperty(globalVar: string, property: string, value: boolean): void;
      static setGlobalStringProperty(globalVar: string, property: string, value: string): void;
      static setGlobalNumberProperty(globalVar: string, property: string, value: number): void;
      /**  Set the absolute root path for the cache, this is combined with the cache name to generate the full cache path */
      static setRootCacheFolder(rootCacheFolder: string): void;
      /**  Set the cache name which is combined with the root cache folder to generate an absolute path to the browser cache */
      static setCacheName(cacheName: string): void;
      /**  Set value that will be returned as the User-Agent HTTP header. */
      static setUserAgent(userAgent: string): void;
      /**  Set value that will be inserted as the product portion of the default User-Agent string  */
      static setProductVersion(productVersion: string): void;
      /**  Set to a value between 1024 and 65535 to enable remote debugging on the specified port */
      static setDebugPort(debugPort: number): void;
      /**  Set whether web security is enabled */
      static setWebSecurity(enabled: boolean): void;
      /**  Set the name of the function used for JavaScript message queries */
      static setJSMessageQueryFunctionName(name: string): void;
      /**  Set the name of the function used to cancel JavaScript message queries */
      static setJSMessageQueryCancelFunctionName(name: string): void;
      /**  Get the absolute root path for the cache, this is combined with the cache name to generate the full cache path */
      static getRootCacheFolder(): string;
      /**  Get the cache name which is combined with the root cache folder to generate an absolute path to the browser cache */
      static getCacheName(): string;
      /**  Get User-Agent of the HTTP header. If empty the default User-Agent string will be used */
      static getUserAgent(): string;
      /**  Get value that will be inserted as the product portion of the default User-Agent string.  If empty the Chromium product version will be used       */
      static getProductVersion(): string;
      /**  Get whether web security is enabled */
      static getWebSecurity(): boolean;
      /**  Get the name of the function used for JavaScript message queries */
      static getJSMessageQueryFunctionName(): string;
      /**  Get the name of the function used to cancel JavaScript message queries */
      static getJSMessageQueryCancelFunctionName(): string;

   }

   export class WebClient extends Atomic.AObject {

      zoomLevel: number;
      loading: boolean;
      webRenderHandler: WebRenderHandler;

      /**  Construct. */
      constructor();

      /**  Create the browser, call only once initialized with handlers */
      createBrowser(initialURL: string, width: number, height: number): boolean;
      /**  Set the browser's width and height */
      setSize(width: number, height: number): void;
      /**  Set browser zoom level, specify 0.0 to reset the zoom level */
      setZoomLevel(zoomLevel: number): void;
      /**  Send a mouse click event to the browser */
      sendMouseClickEvent(x: number, y: number, button: number, mouseUp: boolean, modifier: number, clickCount?: number): void;
      /**  Send a mouse press event to the browser */
      sendMousePressEvent(x: number, y: number, button?: number, modifier?: number, clickCount?: number): void;
      /**  Send a mouse move event to the browser */
      sendMouseMoveEvent(x: number, y: number, modifier: number, mouseLeave?: boolean): void;
      /**  Send a mouse wheel event to the browser */
      sendMouseWheelEvent(x: number, y: number, modifier: number, deltaX: number, deltaY: number): void;
      /**  Send a focus event to the browser */
      sendFocusEvent(focus?: boolean): void;
      /**  Invoke the Cut shortcut on the browser's main frame */
      shortcutCut(): void;
      /**  Invoke the Copy shortcut on the browser's main frame */
      shortcutCopy(): void;
      /**  Invoke the Paste shortcut on the browser's main frame */
      shortcutPaste(): void;
      /**  Invoke the SelectAll shortcut on the browser's main frame */
      shortcutSelectAll(): void;
      /**  Invoke the Undo shortcut on the browser's main frame */
      shortcutUndo(): void;
      /**  Invoke the Redo shortcut on the browser's main frame */
      shortcutRedo(): void;
      /**  Invoke the Delete shortcut on the browser's main frame */
      shortcutDelete(): void;
      /**  Add a message handler to the WebClient */
      addMessageHandler(handler: WebMessageHandler, first?: boolean): void;
      /**  Remove a message handler to the WebClient */
      removeMessageHandler(handler: WebMessageHandler): void;
      /**  Execute some JavaScript in the browser */
      executeJavaScript(script: string): void;
      /**  Eval some JavaScript in the browser (async return value referenced by evalID) */
      evalJavaScript(evalID: number, script: string): void;
      /**  Returns true if the page is currently loading */
      isLoading(): boolean;
      /**  Load the specified url into the main frame of the browser */
      loadURL(url: string): void;
      /**  Load html source into main frame of browser */
      loadString(source: string, url?: string): void;
      /**  Go back in page history */
      goBack(): void;
      /**  Go forward in page history */
      goForward(): void;
      /**  Reload the current page */
      reload(): void;
      /**  Set the render handler for this client */
      setWebRenderHandler(handler: WebRenderHandler): void;

   }

   export class WebMessageHandler extends Atomic.AObject {

      webClient: WebClient;

      /**  Construct. */
      constructor();

      handleDeferredResponse(queryID: number, success: boolean, response: string): void;
      /**  Success callback */
      success(response?: string): void;
      /**  Failure callback */
      failure(errorCode: number, errorMessage: string): void;
      /**  Get the WebClient associated with this WebMessageHandler */
      getWebClient(): WebClient;
      /**  Set the WebClient associated with this WebMessageHandler */
      setWebClient(client: WebClient): void;

   }

   export class WebRenderHandler extends Atomic.AObject {

      width: number;
      height: number;
      webClient: WebClient;

      /**  Construct. */
      constructor();

      /**  Get the current renderer width */
      getWidth(): number;
      /**  Get the current renderer height */
      getHeight(): number;
      /**  Get the WebClient associated with the render handler */
      getWebClient(): WebClient;
      /**  Set the dimensions of the render handler */
      setSize(width: number, height: number): void;
      /**  Set the render handlers WebClient */
      setWebClient(webClient: WebClient): void;

   }

   export class WebTexture2D extends WebRenderHandler {

      width: number;
      height: number;
      texture2D: Atomic.Texture2D;
      clearColor: Atomic.Color;

      /**  Construct. */
      constructor();

      /**  Get the current width of the texture */
      getWidth(): number;
      /**  Get the current height of the texture */
      getHeight(): number;
      /**  Get the Texture2D associated with the WebTexture2D */
      getTexture2D(): Atomic.Texture2D;
      /**  get the clear color for the WebTexture */
      getClearColor(): Atomic.Color;
      /**  Set the dimensions of the texture */
      setSize(width: number, height: number): void;
      /**  Set the clear color for the WebTexture */
      setClearColor(color: Atomic.Color): void;

   }


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewLoadStateChange" **/
    export var WebViewLoadStateChangeEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewLoadStateChange event.**/
    export interface WebViewLoadStateChangeEvent extends Atomic.EventData {
        client : WebView.WebClient;
        loading : boolean;
        canGoBack : boolean;
        canGoForward : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewLoadStateChange event. 

     / WebView load state change
    **/
    export function WebViewLoadStateChangeEvent (callback : Atomic.EventCallback<WebViewLoadStateChangeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebViewLoadStateChange event. **/ 
    export function WebViewLoadStateChangeEventData (callbackData : WebViewLoadStateChangeEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewLoadStart" **/
    export var WebViewLoadStartEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewLoadStart event.**/
    export interface WebViewLoadStartEvent extends Atomic.EventData {
        client : WebView.WebClient;
        url : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewLoadStart event. 

     / WebView load start
    **/
    export function WebViewLoadStartEvent (callback : Atomic.EventCallback<WebViewLoadStartEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebViewLoadStart event. **/ 
    export function WebViewLoadStartEventData (callbackData : WebViewLoadStartEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewLoadEnd" **/
    export var WebViewLoadEndEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewLoadEnd event.**/
    export interface WebViewLoadEndEvent extends Atomic.EventData {
        client : WebView.WebClient;
        url : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewLoadEnd event. 

     / WebView load end
    **/
    export function WebViewLoadEndEvent (callback : Atomic.EventCallback<WebViewLoadEndEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebViewLoadEnd event. **/ 
    export function WebViewLoadEndEventData (callbackData : WebViewLoadEndEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewAddressChange" **/
    export var WebViewAddressChangeEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewAddressChange event.**/
    export interface WebViewAddressChangeEvent extends Atomic.EventData {
        client : WebView.WebClient;
        url : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewAddressChange event. 

     / WebView address change
    **/
    export function WebViewAddressChangeEvent (callback : Atomic.EventCallback<WebViewAddressChangeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebViewAddressChange event. **/ 
    export function WebViewAddressChangeEventData (callbackData : WebViewAddressChangeEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewTitleChange" **/
    export var WebViewTitleChangeEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewTitleChange event.**/
    export interface WebViewTitleChangeEvent extends Atomic.EventData {
        client : WebView.WebClient;
        title : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewTitleChange event. 

     / WebView title change
    **/
    export function WebViewTitleChangeEvent (callback : Atomic.EventCallback<WebViewTitleChangeEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebViewTitleChange event. **/ 
    export function WebViewTitleChangeEventData (callbackData : WebViewTitleChangeEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewJSEvalResult" **/
    export var WebViewJSEvalResultEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewJSEvalResult event.**/
    export interface WebViewJSEvalResultEvent extends Atomic.EventData {
        client : WebView.WebClient;
        evalID : number;
        /**  true: success, false: error */
        result : boolean;
        /**  sucess: eval's value, error: exception message */
        value : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewJSEvalResult event. 

     / WebView title change
    **/
    export function WebViewJSEvalResultEvent (callback : Atomic.EventCallback<WebViewJSEvalResultEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebViewJSEvalResult event. **/ 
    export function WebViewJSEvalResultEventData (callbackData : WebViewJSEvalResultEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewPopupRequest" **/
    export var WebViewPopupRequestEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewPopupRequest event.**/
    export interface WebViewPopupRequestEvent extends Atomic.EventData {
        client : WebView.WebClient;
        url : string;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewPopupRequest event. 

     / WebView popup request
    **/
    export function WebViewPopupRequestEvent (callback : Atomic.EventCallback<WebViewPopupRequestEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebViewPopupRequest event. **/ 
    export function WebViewPopupRequestEventData (callbackData : WebViewPopupRequestEvent) : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebViewGlobalPropertiesChanged" **/
    export var WebViewGlobalPropertiesChangedEventType : Atomic.EventType;

    /** object returned in the callback for the WebViewGlobalPropertiesChanged event.**/
    export interface WebViewGlobalPropertiesChangedEvent extends Atomic.EventData {
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebViewGlobalPropertiesChanged event. 

     / WebView load state change
    **/
    export function WebViewGlobalPropertiesChangedEvent (callback : Atomic.EventCallback<WebViewGlobalPropertiesChangedEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct object to pass to 'sendEvent' for the WebViewGlobalPropertiesChanged event. **/ 
    export function WebViewGlobalPropertiesChangedEventData () : Atomic.EventCallbackMetaData; 


    /** Event type to use in calls requiring the event such as 'sendEvent'.  Event Type is: "WebMessage" **/
    export var WebMessageEventType : Atomic.EventType;

    /** object returned in the callback for the WebMessage event.**/
    export interface WebMessageEvent extends Atomic.EventData {
        handler : WebView.WebMessageHandler;
        /**  Int64 CEF Side */
        queryID : number;
        request : string;
        persistent : boolean;
        /** Unmapped Native Type: CefBrowser */
        browser : any;
        /** Unmapped Native Type: CefFrame */
        frame : any;
        /**  Return Value */
        deferred : boolean;
    }

    /**
     Wrapper function to generate a properly formatted event handler to pass to 'subscribeToEvent' for the WebMessage event. 

     / WebView title change
    **/
    export function WebMessageEvent (callback : Atomic.EventCallback<WebMessageEvent>) : Atomic.EventMetaData;

    /** Wrapper function to construct callback data to pass to 'sendEvent' for the WebMessage event. **/ 
    export function WebMessageEventData (callbackData : WebMessageEvent) : Atomic.EventCallbackMetaData; 



}
//
// Copyright (c) 2014-2015, THUNDERBEAST GAMES LLC All rights reserved
// LICENSE: Atomic Game Engine Editor and Tools EULA
// Please see LICENSE_ATOMIC_EDITOR_AND_TOOLS.md in repository root for
// license information: https://github.com/AtomicGameEngine/AtomicGameEngine
//

/// <reference path="Atomic.d.ts" />
/// <reference path="Editor.d.ts" />
/// <reference path="ToolCore.d.ts" />
/// <reference path="WebView.d.ts" />

declare module Editor.Templates {
    // Commented out until the TSDoc gets updated to the latest version of TypeScript
    //export type TemplateType = "component" | "script";
    /**
     * New file defintion
     */
    export interface FileTemplateDefinition {
        /** name to display in the dropdown */
        name: string;
        /** description */
        desc: string;
        /** type of template */
        templateType: string;
        /** file extension */
        ext: string;
        /** file name/path of the source templage file to clone from.  Note, needs to be in the atomic cache */
        filename: string;
    }
}

declare module Editor.Extensions {

    /**
     * Base interface for any editor services.
     */
    export interface EditorServiceExtension {
        /**
         * Unique name of this service
         * @type {string}
         */
        name: string;

        /**
         * Description of this service
         * @type {string}
         */
        description: string;

    }

    /**
     * Base Service Event Listener.  Attach descendents of these to an EditorServiceExtension
     * to hook service events
     */
    export interface ServiceEventListener extends EditorServiceExtension { }

    interface EventDispatcher {
        /**
         * Send a custom event.  This can be used by services to publish custom events
         * @param  {string} eventType
         * @param  {any} data
         */
        sendEvent(eventType: string, data: any);
        sendEvent<T extends Atomic.EventMetaData>(eventType:string, data?:T);
        sendEvent<T extends Atomic.EventCallbackMetaData>(eventCallbackMetaData:T);

        /**
         * Subscribe to an event and provide a callback.  This can be used by services to subscribe to custom events
         * @param  {string} eventType
         * @param  {any} callback
         */
        subscribeToEvent?(eventType: string, callback: (...params) => any);

        /**
         * Subscribe to an event with a pre-wrapped event object.  This can be used by services to subscribe to custom events
         * @param  {Atomic.EventMetaData} wrappedEvent
         */
        subscribeToEvent?(wrappedEvent: Atomic.EventMetaData);
    }

    /**
     * Generic service locator of editor services that may be injected by either a plugin
     * or by the editor itself.
     */
    export interface ServiceLoader extends EventDispatcher {
        /**
         * Loads a service into a service registry
         * @param  {EditorService} service
         */
        loadService(service: EditorServiceExtension): void;
    }

    /**
     * Service registry interface for registering services
     */
    export interface ServicesProvider<T extends ServiceEventListener> {
        registeredServices: T[];

        /**
         * Adds a service to the registered services list for this type of service
         * @param  {T}      service the service to register
         */
        register(service: T);
        /**
         * Removes a service from the registered services list for this type of service
         * @param  {T}      service the service to unregister
         */
        unregister(service: T);
    }

    /**
     * Interface that describes a Resource Editor Factory that will build out the editor for the relevant resource type
     */
    export interface ResourceEditorBuilder {
        /**
         * Returns true if this builder can generate an editor for this resource type
         */
        canHandleResource(resourcePath: string) : boolean;
        /**
         * Generates a resource editor for the provided resource type
         * @param  resourceFrame
         * @param  resourcePath
         * @param  tabContainer
         * @param  lineNumber
         */
        getEditor(resourceFrame: Atomic.UIWidget, resourcePath: string, tabContainer: Atomic.UITabContainer, lineNumber: number) : Editor.ResourceEditor;
    }
}

declare module Editor.Modal {
    export interface ExtensionWindow extends Atomic.UIWindow {
        hide();
    }
}

declare module Editor.HostExtensions {

    /**
     * Generic service locator of editor services that may be injected by either a plugin
     * or by the editor itself.
     */
    export interface HostServiceLocator extends Editor.Extensions.ServiceLoader {
        resourceServices: ResourceServicesProvider;
        projectServices: ProjectServicesProvider;
        sceneServices: SceneServicesProvider;
        uiServices: UIServicesProvider;
    }

    export interface HostEditorService extends Editor.Extensions.EditorServiceExtension {
        /**
         * Called by the service locator at load time
         */
        initialize(serviceLocator: HostServiceLocator);
    }

    export interface ResourceServicesEventListener extends Editor.Extensions.ServiceEventListener {
        /**
         * Called once a resource is saved
         */
        save?(ev: Editor.EditorSaveResourceEvent);
        /**
         * Called when a resource is deleted
         */
        delete?(ev: Editor.EditorDeleteResourceEvent);
        /**
         * Called when a resource is renamed
         */
        rename?(ev: Editor.EditorRenameResourceNotificationEvent);
        /**
         * Called when a resource is about to be edited
         */
        edit?(ev: Editor.EditorEditResourceEvent);
    }

    export interface ResourceServicesProvider extends Editor.Extensions.ServicesProvider<ResourceServicesEventListener> {
        createMaterial(resourcePath: string, materialName: string, reportError: boolean): boolean;
    }

    export interface ProjectServicesEventListener extends Editor.Extensions.ServiceEventListener {
        projectUnloaded?();
        projectLoaded?(ev: Editor.EditorLoadProjectEvent);
        playerStarted?();
    }
    export interface ProjectServicesProvider extends Editor.Extensions.ServicesProvider<ProjectServicesEventListener> {

        /**
         * Return a preference value or the provided default from the user settings file
         * @param  {string} extensionName name of the extension the preference lives under
         * @param  {string} preferenceName name of the preference to retrieve
         * @param  {number | boolean | string} defaultValue value to return if pref doesn't exist
         * @return {number|boolean|string}
         */
        getUserPreference(settingsGroup: string, preferenceName: string, defaultValue?: number): number;
        getUserPreference(settingsGroup: string, preferenceName: string, defaultValue?: string): string;
        getUserPreference(settingsGroup: string, preferenceName: string, defaultValue?: boolean): boolean;

        /**
         * Return a preference value or the provided default from the global user settings file
         * @param  {string} extensionName name of the section the preference lives under
         * @param  {string} preferenceName name of the preference to retrieve
         * @param  {number | boolean | string} defaultValue value to return if pref doesn't exist
         * @return {number|boolean|string}
         */
        getApplicationPreference(settingsGroup: string, preferenceName: string, defaultValue?: number): number;
        getApplicationPreference(settingsGroup: string, preferenceName: string, defaultValue?: string): string;
        getApplicationPreference(settingsGroup: string, preferenceName: string, defaultValue?: boolean): boolean;

        /**
         * Sets a user preference value in the project settings file
         * @param  {string} extensionName name of the extension the preference lives under
         * @param  {string} preferenceName name of the preference to set
         * @param  {number | boolean | string} value value to set
         */
        setUserPreference(extensionName: string, preferenceName: string, value: number | boolean | string);

        /**
         * Sets an editor preference value in the global editor settings file
         * @param  {string} groupName name of the section the preference lives under
         * @param  {string} preferenceName name of the preference to set
         * @param  {number | boolean | string} value value to set
         */
        setApplicationPreference(groupName: string, preferenceName: string, value: number | boolean | string);
    }

    export interface SceneServicesEventListener extends Editor.Extensions.ServiceEventListener {
        activeSceneEditorChanged?(ev: Editor.EditorActiveSceneEditorChangeEvent);
        editorSceneClosed?(ev: Editor.EditorSceneClosedEvent);
    }
    export interface SceneServicesProvider extends Editor.Extensions.ServicesProvider<SceneServicesEventListener> { }

    export interface UIServicesEventListener extends Editor.Extensions.ServiceEventListener {
        menuItemClicked?(refid: string): boolean;
        projectContextItemClicked?(asset: ToolCore.Asset, refid: string): boolean;
        projectAssetClicked?(asset: ToolCore.Asset): boolean;
        hierarchyContextItemClicked?(node: Atomic.Node, refid: string): boolean;

        /**
         * Handle messages that are submitted via Atomic.Query from within a web view editor.
         * @param webMessage The original message coming in from the browser
         * @param message The message type that was submitted to be used to determine what the data contains if present
         * @param data any additional data that needs to be submitted with the message
         */
        handleWebMessage?(webMessage: WebView.WebMessageEvent, messageType: string, data?: any): void;
    }

    export interface UIServicesProvider extends Editor.Extensions.ServicesProvider<UIServicesEventListener> {
        createPluginMenuItemSource(id: string, items: any): Atomic.UIMenuItemSource;
        removePluginMenuItemSource(id: string);
        createHierarchyContextMenuItemSource(id: string, items: any): Atomic.UIMenuItemSource;
        removeHierarchyContextMenuItemSource(id: string);
        createProjectContextMenuItemSource(id: string, items: any): Atomic.UIMenuItemSource;
        removeProjectContextMenuItemSource(id: string);
        refreshHierarchyFrame();
        loadCustomInspector(customInspector: Atomic.UIWidget);
        showModalWindow(windowText: string, uifilename: string, handleWidgetEventCB: (ev: Atomic.UIWidgetEvent) => void): Editor.Modal.ExtensionWindow;
        showNonModalWindow(windowText: string, uifilename: string, handleWidgetEventCB: (ev: Atomic.UIWidgetEvent) => void): Editor.Modal.ExtensionWindow;
        showModalError(windowText: string, message: string):Atomic.UIMessageWindow;
        showResourceSelection(windowText: string, importerType: string, resourceType: string, callback: (retObject: any, args: any) => void, args?: any);

        /**
         * Returns the currently active resource editor or null
         * @return {Editor.ResourceEditor}
         */
        getCurrentResourceEditor(): Editor.ResourceEditor;

        
        /**
         * Will load a resource editor or navigate to an already loaded resource editor by path
         * @param path The path to the resource to load
         * @param lineNumber optional line number to navigate to
         * @return {Editor.ResourceEditor}
         */
        loadResourceEditor(path: string, lineNumber?: number): Editor.ResourceEditor;

        /**
         * Register a custom editor.  These editors will override editors in the standard editor list if
         * they both resolve the ```canHandleResource``` call.
         */
        registerCustomEditor(editorBuilder: Editor.Extensions.ResourceEditorBuilder);

        /**
         * Will unregister a previously registered editor builder
         * @param  {Editor.Extensions.ResourceEditorBuilder} editorBuilder
         */
        unregisterCustomEditor(editorBuilder: Editor.Extensions.ResourceEditorBuilder);
    }
}

/**
 * Interfaces for client extensions
 */
declare module Editor.ClientExtensions {

    export interface EditorFileEvent {
        filename: string;
        fileExt: string;
        editor: any;
    }

    export interface CodeLoadedEvent extends EditorFileEvent {
        code: string;
    }

    export interface CodeSavedEvent extends EditorFileEvent {
        code: string;
    }

    /**
     * Called once the resource has been deleted
     * @type {String}
     */
    export interface DeleteResourceEvent {

        // The full path to the resource to edit
        path: string;

    }

    /**
     * Called once the resource has been renamed
     * @type {String}
     */
    export interface RenameResourceEvent {

        /**
         * Original path of the resource
         * @type {string}
         */
        path: string;

        /**
         * New path of the resource
         * @type {string}
         */
        newPath: string;

        /**
         * New base name of the resource (no path or extension)
         * @type {string}
         */
        newName?: string;
    }

    /**
     * Generic service locator of editor services that may be injected by either a plugin
     * or by the editor itself.
     */
    export interface ClientServiceLocator extends Editor.Extensions.ServiceLoader {
        /**
         * Exposed services
         * @type {WebViewServicesProvider}
         */
        clientServices: WebViewServicesProvider;
    }

    export interface ClientEditorService extends Editor.Extensions.EditorServiceExtension {
        /**
         * Called by the service locator at load time
         */
        initialize(serviceLocator: ClientServiceLocator);
    }

    export interface PreferencesChangedEventData {
        applicationPreferences? : any;
        projectPreferences? : any;
    }

    export interface WebViewServiceEventListener extends Editor.Extensions.EditorServiceExtension {
        configureEditor?(ev: EditorFileEvent);
        codeLoaded?(ev: CodeLoadedEvent);
        save?(ev: CodeSavedEvent);
        delete?(ev: DeleteResourceEvent);
        rename?(ev: RenameResourceEvent);
        projectUnloaded?();
        formatCode?();
        preferencesChanged?(preferences: PreferencesChangedEventData);
    }

    /**
     * Available methods exposed to client services
     */
    export interface WebViewServicesProvider extends Editor.Extensions.ServicesProvider<WebViewServiceEventListener> {

        /**
         * Get a reference to the interop to talk to the host
         * @return {HostInterop}
         */
        getHostInterop(): HostInterop;

        /**
         * Return a preference value or the provided default from the user settings file
         * @param  {string} extensionName name of the extension the preference lives under
         * @param  {string} preferenceName name of the preference to retrieve
         * @param  {number | boolean | string} defaultValue value to return if pref doesn't exist
         * @return {number|boolean|string}
         */
        getUserPreference(settingsGroup: string, preferenceName: string, defaultValue?: number): number;
        getUserPreference(settingsGroup: string, preferenceName: string, defaultValue?: string): string;
        getUserPreference(settingsGroup: string, preferenceName: string, defaultValue?: boolean): boolean;

        /**
         * Return a preference value or the provided default from the application settings file
         * @param  {string} extensionName name of the extension the preference lives under
         * @param  {string} preferenceName name of the preference to retrieve
         * @param  {number | boolean | string} defaultValue value to return if pref doesn't exist
         * @return {number|boolean|string}
         */
        getApplicationPreference(settingsGroup: string, preferenceName: string, defaultValue?: number): number;
        getApplicationPreference(settingsGroup: string, preferenceName: string, defaultValue?: string): string;
        getApplicationPreference(settingsGroup: string, preferenceName: string, defaultValue?: boolean): boolean;
    }

    export interface AtomicErrorMessage {
        error_code: number;
        error_message: string;
    }

    /**
     * Interface for functions that are available from the client web view to call on the host
     */
    export interface HostInterop {

        /**
         * Called from the host to notify the client what file to load
         * @param  {string} codeUrl
         */
        loadCode(codeUrl: string);

        /**
         * Save the contents of the editor
         * @return {Promise}
         */
        saveCode(): PromiseLike<{}>;

        /**
         * Save the contents of a file as filename
         * @param  {string} filename
         * @param  {string} fileContents
         * @return {Promise}
         */
        saveFile(filename: string, fileContents: string): PromiseLike<{}>;

        /**
         * Queries the host for a particular resource and returns it in a promise
         * @param  {string} codeUrl
         * @return {Promise}
         */
        getResource(codeUrl: string): PromiseLike<{}>;

        /**
         * Returns a file resource from the resources directory
         * @param  {string} filename name and path of file under the project directory or a fully qualified file name
         * @return {Promise}
         */
        getFileResource(filename: string): PromiseLike<{}>;

        /**
         * Notify the host that the contents of the editor has changed
         */
        notifyEditorChange();

        /**
         * This adds a global routine to the window object so that it can be called from the host
         * @param  {string} routineName
         * @param  {(} callback
         */
        addCustomHostRoutine(routineName: string, callback: (...any) => void);
    }
}

declare module Editor {
    /**
     * Valid editor shortcuts that can be called from menus
     */
    export type EditorShortcutType = "cut" | "copy" | "paste" | "undo" | "redo" | "close" | "frameselected" | "selectall";
}
