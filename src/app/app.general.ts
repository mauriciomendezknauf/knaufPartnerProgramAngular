import { environment } from '../environments/environment';

const serverProtocol:string = "http://";
const serverName:string = "localhost";
const serverPort:string = "1337";
export var serviceUrl:string = "/";

// Configuración para producción
if ( environment.production ) {
  serviceUrl = "/";
} else {
  // Configuración para desarrollo, donde el servicio Node no entrega la aplicación Angular
  serviceUrl = serverProtocol + serverName + ":" + serverPort + "/";
}
