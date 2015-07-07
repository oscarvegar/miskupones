/**
 * Created by oscar on 31/05/15.
 */

//  Produccion
//var CONTEXT_PATH_WS = "http://miskupones.com/";

//  Desarrollo
var CONTEXT_PATH_WS = "http://localhost:1337/";

// GENERAL
var REGISTRO_WS = CONTEXT_PATH_WS + "auth/local/register/";
var SOLICITUD_CAMBIO_PWD_WS = CONTEXT_PATH_WS + "Auth/solicitarCambioPasswordApp";
var LOGIN_WS = CONTEXT_PATH_WS + "loginapp/";
var GET_PROMOS_WS = CONTEXT_PATH_WS + "Promocion/findByLimit/";
var GET_PROMOS_ESTADO_WS = CONTEXT_PATH_WS + "Promocion/findByEstado/";
var GET_PROMOS_ESTADO_CATEGO_WS = CONTEXT_PATH_WS + "Promocion/findByEstadoAndCategoria/";
var VENTA_WS = CONTEXT_PATH_WS + "Venta/generaVenta/";
var CLIENTE_WS = CONTEXT_PATH_WS + "Cliente/findById/";
var CLIENTE_CREATE_WS = CONTEXT_PATH_WS + "Cliente/create/";
var CLIENTE_UPDATE_WS = CONTEXT_PATH_WS + "Cliente/update/";
var CLIENTE_DEF_MEGUSTA_WS = CONTEXT_PATH_WS + "Cliente/defineMeGusta/";
var ESTADOS_ALL_WS = CONTEXT_PATH_WS + "Estado/getEstados/";
var MIS_KUPONES_WS = CONTEXT_PATH_WS + "Kupon/misKupones/";
var FB_SHARE = CONTEXT_PATH_WS + "share/fb/";
var CATEGORIAS_WS = CONTEXT_PATH_WS + "Categoria/getCategoriasForMovil/";
var SUBCATEGORIAS_WS = CONTEXT_PATH_WS + "Categoria/getSubCategoriasForMovil/";

// Nombres de documentos guardados en el PunchDB
var DOC_PROMOS = "promociones";
var DOC_SESION = "sesion";
var DOC_USER = "user";
var DOC_CLIENTE = "cliente";
var DOC_ESTADOS = "estados";

// Nombres para el LocalStorage

var LOCAL_ESTADO_SELECTED = "estadoSelected";

// PAYPAL Settings
var payPalProductionId = '';  // Integrar el key en produccion
var payPalSandboxId = 'APP-80W284485P519543T';
var payPalShopName = 'KUPONES SHOP';
var payPalMerchantPrivacyPolicyURL = "https://www.paypal.com/ua/webapps/mpp/ua/privacy-full";
var payPalMerchantUserAgreementURL = "https://www.paypal.com/us/webapps/mpp/ua/useragreement-full";
var payPalEnv = "PayPalEnvironmentSandbox";
