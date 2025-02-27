export const _AP_JWT_TOKEN_QUERY_PARAM_NAME = 'jwtToken'
export const connectionNameRegex = '^[A-Za-z0-9-_]+$'

export const NEW_CONNECTION_QUERY_PARAMS = {
  connectionName: 'connectionName',
  name: 'name',
  randomId: 'randomId',
};

export enum ActivepiecesClientEventName {
  CLIENT_AUTHENTICATION_FAILED  = 'CLIENT_AUTHENTICATION_FAILED',
  CLIENT_AUTHENTICATION_SUCCESS = 'CLIENT_AUTHENTICATION_SUCCESS',
  CLIENT_CONFIGURATION_FINISHED = 'CLIENT_CONFIGURATION_FINISHED',
  CLIENT_SHOW_CONNECTION_IFRAME = 'CLIENT_SHOW_CONNECTION_IFRAME',
  CLIENT_INIT = 'CLIENT_INIT',
  CLIENT_NEW_CONNECTION_DIALOG_CLOSED = 'CLIENT_NEW_CONNECTION_DIALOG_CLOSED',
  CLIENT_CONNECTION_NAME_IS_INVALID = 'CLIENT_CONNECTION_NAME_IS_INVALID',
}

export interface ActivepiecesClientAuthenticationFailed {
  type: ActivepiecesClientEventName.CLIENT_AUTHENTICATION_FAILED;
  data: Error;
}

export interface ActivepiecesClientAuthenticationSuccess {
  type: ActivepiecesClientEventName.CLIENT_AUTHENTICATION_SUCCESS;
  data: Record<string, never>;
}

export interface ActivepiecesClientConfigurationFinished {
  type: ActivepiecesClientEventName.CLIENT_CONFIGURATION_FINISHED;
  data: Record<string, never>;
}

export interface ActivepiecesClientInit {
  type: ActivepiecesClientEventName.CLIENT_INIT;
  data: Record<string, never>;
}

export interface ActivepiecesClientShowConnectionIframe {
  type: ActivepiecesClientEventName.CLIENT_SHOW_CONNECTION_IFRAME;
  data: Record<string, never>;
}

export enum ActivepiecesVendorEventName {
  VENDOR_INIT = 'VENDOR_INIT',
}

export interface ActivepiecesVendorInit {
  type: ActivepiecesVendorEventName.VENDOR_INIT;
  data: {
    jwtToken?: string;
    hideSidebar: boolean;
    hideLogoInBuilder?: boolean;
    hideFlowNameInBuilder?: boolean;
    prefix: string;
    disableNavigationInBuilder: boolean;
    hideFolders?: boolean;
    sdkVersion?: string;
    fontUrl?: string;
    fontFamily?: string;
    initialRoute?: string;
  };
}

export interface ActivepiecesNewConnectionDialogClosed {
}

export interface ActivepiecesClientConnectionNameIsInvalid {
}
