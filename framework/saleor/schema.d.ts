export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any
  /**
   * Positive Decimal scalar implementation.
   *
   * Should be used in places where value must be positive.
   */
  PositiveDecimal: any
  UUID: any
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: any
  WeightScalar: any
  /** Anything */
  _Any: any
}

/** Create a new address for the customer. */
export type AccountAddressCreate = {
  __typename?: 'AccountAddressCreate'
  /** A user instance for which the address was created. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  address?: Maybe<Address>
}

/** Delete an address of the logged-in user. */
export type AccountAddressDelete = {
  __typename?: 'AccountAddressDelete'
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  address?: Maybe<Address>
}

/** Updates an address of the logged-in user. */
export type AccountAddressUpdate = {
  __typename?: 'AccountAddressUpdate'
  /** A user object for which the address was edited. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  address?: Maybe<Address>
}

/** Remove user account. */
export type AccountDelete = {
  __typename?: 'AccountDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  user?: Maybe<User>
}

export type AccountError = {
  __typename?: 'AccountError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: AccountErrorCode
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>
}

/** An enumeration. */
export enum AccountErrorCode {
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  GraphqlError = 'GRAPHQL_ERROR',
  Inactive = 'INACTIVE',
  Invalid = 'INVALID',
  InvalidPassword = 'INVALID_PASSWORD',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  NotFound = 'NOT_FOUND',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  ChannelInactive = 'CHANNEL_INACTIVE',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  AccountNotConfirmed = 'ACCOUNT_NOT_CONFIRMED',
}

export type AccountInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>
  /** Family name. */
  lastName?: Maybe<Scalars['String']>
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>
}

/** Register a new user. */
export type AccountRegister = {
  __typename?: 'AccountRegister'
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation?: Maybe<Scalars['Boolean']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  user?: Maybe<User>
}

export type AccountRegisterInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>
  /** Family name. */
  lastName?: Maybe<Scalars['String']>
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>
  /** The email address of the user. */
  email: Scalars['String']
  /** Password. */
  password: Scalars['String']
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: Maybe<Scalars['String']>
  /** User public metadata. */
  metadata?: Maybe<Array<MetadataInput>>
  /** Slug of a channel which will be used to notify users. Optional when only one channel exists. */
  channel?: Maybe<Scalars['String']>
}

/** Sends an email with the account removal link for the logged-in user. */
export type AccountRequestDeletion = {
  __typename?: 'AccountRequestDeletion'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Sets a default address for the authenticated user. */
export type AccountSetDefaultAddress = {
  __typename?: 'AccountSetDefaultAddress'
  /** An updated user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Updates the account of the logged-in user. */
export type AccountUpdate = {
  __typename?: 'AccountUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  user?: Maybe<User>
}

/** Represents user address data. */
export type Address = Node & {
  __typename?: 'Address'
  /** The ID of the object. */
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
  companyName: Scalars['String']
  streetAddress1: Scalars['String']
  streetAddress2: Scalars['String']
  city: Scalars['String']
  cityArea: Scalars['String']
  postalCode: Scalars['String']
  /** Shop's default country. */
  country: CountryDisplay
  countryArea: Scalars['String']
  phone?: Maybe<Scalars['String']>
  /** Address is user's default shipping address. */
  isDefaultShippingAddress?: Maybe<Scalars['Boolean']>
  /** Address is user's default billing address. */
  isDefaultBillingAddress?: Maybe<Scalars['Boolean']>
}

/** Creates user address. */
export type AddressCreate = {
  __typename?: 'AddressCreate'
  /** A user instance for which the address was created. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  address?: Maybe<Address>
}

/** Deletes an address. */
export type AddressDelete = {
  __typename?: 'AddressDelete'
  /** A user instance for which the address was deleted. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  address?: Maybe<Address>
}

export type AddressInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>
  /** Family name. */
  lastName?: Maybe<Scalars['String']>
  /** Company or organization. */
  companyName?: Maybe<Scalars['String']>
  /** Address. */
  streetAddress1?: Maybe<Scalars['String']>
  /** Address. */
  streetAddress2?: Maybe<Scalars['String']>
  /** City. */
  city?: Maybe<Scalars['String']>
  /** District. */
  cityArea?: Maybe<Scalars['String']>
  /** Postal code. */
  postalCode?: Maybe<Scalars['String']>
  /** Country. */
  country?: Maybe<CountryCode>
  /** State or province. */
  countryArea?: Maybe<Scalars['String']>
  /** Phone number. */
  phone?: Maybe<Scalars['String']>
}

/** Sets a default address for the given user. */
export type AddressSetDefault = {
  __typename?: 'AddressSetDefault'
  /** An updated user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** An enumeration. */
export enum AddressTypeEnum {
  Billing = 'BILLING',
  Shipping = 'SHIPPING',
}

/** Updates an address. */
export type AddressUpdate = {
  __typename?: 'AddressUpdate'
  /** A user object for which the address was edited. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  address?: Maybe<Address>
}

export type AddressValidationData = {
  __typename?: 'AddressValidationData'
  countryCode?: Maybe<Scalars['String']>
  countryName?: Maybe<Scalars['String']>
  addressFormat?: Maybe<Scalars['String']>
  addressLatinFormat?: Maybe<Scalars['String']>
  allowedFields?: Maybe<Array<Maybe<Scalars['String']>>>
  requiredFields?: Maybe<Array<Maybe<Scalars['String']>>>
  upperFields?: Maybe<Array<Maybe<Scalars['String']>>>
  countryAreaType?: Maybe<Scalars['String']>
  countryAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>
  cityType?: Maybe<Scalars['String']>
  cityChoices?: Maybe<Array<Maybe<ChoiceValue>>>
  cityAreaType?: Maybe<Scalars['String']>
  cityAreaChoices?: Maybe<Array<Maybe<ChoiceValue>>>
  postalCodeType?: Maybe<Scalars['String']>
  postalCodeMatchers?: Maybe<Array<Maybe<Scalars['String']>>>
  postalCodeExamples?: Maybe<Array<Maybe<Scalars['String']>>>
  postalCodePrefix?: Maybe<Scalars['String']>
}

/** Represents allocation. */
export type Allocation = Node & {
  __typename?: 'Allocation'
  /** The ID of the object. */
  id: Scalars['ID']
  /** Quantity allocated for orders. */
  quantity: Scalars['Int']
  /** The warehouse were items were allocated. */
  warehouse: Warehouse
}

/** Represents app data. */
export type App = Node &
  ObjectWithMetadata & {
    __typename?: 'App'
    /** The ID of the object. */
    id: Scalars['ID']
    /** Name of the app. */
    name?: Maybe<Scalars['String']>
    /** The date and time when the app was created. */
    created?: Maybe<Scalars['DateTime']>
    /** Determine if app will be set active or not. */
    isActive?: Maybe<Scalars['Boolean']>
    /** List of the app's permissions. */
    permissions?: Maybe<Array<Maybe<Permission>>>
    /** Last 4 characters of the tokens. */
    tokens?: Maybe<Array<Maybe<AppToken>>>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Type of the app. */
    type?: Maybe<AppTypeEnum>
    /** List of webhooks assigned to this app. */
    webhooks?: Maybe<Array<Maybe<Webhook>>>
    /** Description of this app. */
    aboutApp?: Maybe<Scalars['String']>
    /** Description of the data privacy defined for this app. */
    dataPrivacy?: Maybe<Scalars['String']>
    /** Url to details about the privacy policy on the app owner page. */
    dataPrivacyUrl?: Maybe<Scalars['String']>
    /** Homepage of the app. */
    homepageUrl?: Maybe<Scalars['String']>
    /** Support page for the app. */
    supportUrl?: Maybe<Scalars['String']>
    /** Url to iframe with the configuration for the app. */
    configurationUrl?: Maybe<Scalars['String']>
    /** Url to iframe with the app. */
    appUrl?: Maybe<Scalars['String']>
    /** Version number of the app. */
    version?: Maybe<Scalars['String']>
    /** JWT token used to authenticate by thridparty app. */
    accessToken?: Maybe<Scalars['String']>
    /** New in Saleor 3.1. App's dashboard extensions. */
    extensions: Array<AppExtension>
  }

/** Activate the app. */
export type AppActivate = {
  __typename?: 'AppActivate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  app?: Maybe<App>
}

export type AppCountableConnection = {
  __typename?: 'AppCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<AppCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type AppCountableEdge = {
  __typename?: 'AppCountableEdge'
  /** The item at the end of the edge. */
  node: App
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new app. */
export type AppCreate = {
  __typename?: 'AppCreate'
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  app?: Maybe<App>
}

/** Deactivate the app. */
export type AppDeactivate = {
  __typename?: 'AppDeactivate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  app?: Maybe<App>
}

/** Deletes an app. */
export type AppDelete = {
  __typename?: 'AppDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  app?: Maybe<App>
}

/** Delete failed installation. */
export type AppDeleteFailedInstallation = {
  __typename?: 'AppDeleteFailedInstallation'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  appInstallation?: Maybe<AppInstallation>
}

export type AppError = {
  __typename?: 'AppError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: AppErrorCode
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>
}

/** An enumeration. */
export enum AppErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidStatus = 'INVALID_STATUS',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidUrlFormat = 'INVALID_URL_FORMAT',
  InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
  ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
}

/** Represents app data. */
export type AppExtension = Node & {
  __typename?: 'AppExtension'
  /** The ID of the object. */
  id: Scalars['ID']
  app: App
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String']
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String']
  /** Name of a view where extension's iframe will be mounted. */
  view: AppExtensionViewEnum
  /** Type of a view where extension's iframe will be mounted. */
  type: AppExtensionTypeEnum
  /** Place where extension's iframe will be mounted. */
  target: AppExtensionTargetEnum
  /** List of the app extension's permissions. */
  permissions: Array<Permission>
  /** JWT token used to authenticate by thridparty app extension. */
  accessToken?: Maybe<Scalars['String']>
}

export type AppExtensionCountableConnection = {
  __typename?: 'AppExtensionCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<AppExtensionCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type AppExtensionCountableEdge = {
  __typename?: 'AppExtensionCountableEdge'
  /** The item at the end of the edge. */
  node: AppExtension
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type AppExtensionFilterInput = {
  view?: Maybe<AppExtensionViewEnum>
  type?: Maybe<AppExtensionTypeEnum>
  target?: Maybe<AppExtensionTargetEnum>
}

/**
 * All available places where app's iframe can be mounted.
 *
 *     MORE_ACTIONS - more actions button
 *     CREATE - create button
 */
export enum AppExtensionTargetEnum {
  MoreActions = 'MORE_ACTIONS',
  Create = 'CREATE',
}

/**
 * All available types where app's iframe can be mounted.
 *
 *     OVERVIEW - app's iframe will be mounted on list view.
 *     DETAILS - app's iframe will be mounted on detail view
 */
export enum AppExtensionTypeEnum {
  Overview = 'OVERVIEW',
  Details = 'DETAILS',
}

/**
 * All available places where app's iframe can be mounted.
 *
 *     PRODUCT - app's iframe will be mounted in product section
 */
export enum AppExtensionViewEnum {
  Product = 'PRODUCT',
}

/** Fetch and validate manifest. */
export type AppFetchManifest = {
  __typename?: 'AppFetchManifest'
  manifest?: Maybe<Manifest>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
}

export type AppFilterInput = {
  search?: Maybe<Scalars['String']>
  isActive?: Maybe<Scalars['Boolean']>
  type?: Maybe<AppTypeEnum>
}

export type AppInput = {
  /** Name of the app. */
  name?: Maybe<Scalars['String']>
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<Maybe<PermissionEnum>>>
}

/** Install new app by using app manifest. */
export type AppInstall = {
  __typename?: 'AppInstall'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  appInstallation?: Maybe<AppInstallation>
}

export type AppInstallInput = {
  /** Name of the app to install. */
  appName?: Maybe<Scalars['String']>
  /** Url to app's manifest in JSON format. */
  manifestUrl?: Maybe<Scalars['String']>
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: Maybe<Scalars['Boolean']>
  /** List of permission code names to assign to this app. */
  permissions?: Maybe<Array<Maybe<PermissionEnum>>>
}

/** Represents ongoing installation of app. */
export type AppInstallation = Node &
  Job & {
    __typename?: 'AppInstallation'
    appName: Scalars['String']
    manifestUrl: Scalars['String']
    /** The ID of the object. */
    id: Scalars['ID']
    /** Job status. */
    status: JobStatusEnum
    /** Created date time of job in ISO 8601 format. */
    createdAt: Scalars['DateTime']
    /** Date time of job last update in ISO 8601 format. */
    updatedAt: Scalars['DateTime']
    /** Job message. */
    message?: Maybe<Scalars['String']>
  }

export type AppManifestExtension = {
  __typename?: 'AppManifestExtension'
  /** List of the app extension's permissions. */
  permissions: Array<Permission>
  /** Label of the extension to show in the dashboard. */
  label: Scalars['String']
  /** URL of a view where extension's iframe is placed. */
  url: Scalars['String']
  /** Name of a view where extension's iframe will be mounted. */
  view: AppExtensionViewEnum
  /** Type of a view where extension's iframe will be mounted. */
  type: AppExtensionTypeEnum
  /** Place where extension's iframe will be mounted. */
  target: AppExtensionTargetEnum
}

/** Retry failed installation of new app. */
export type AppRetryInstall = {
  __typename?: 'AppRetryInstall'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  appInstallation?: Maybe<AppInstallation>
}

export enum AppSortField {
  /** Sort apps by name. */
  Name = 'NAME',
  /** Sort apps by creation date. */
  CreationDate = 'CREATION_DATE',
}

export type AppSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort apps by the selected field. */
  field: AppSortField
}

/** Represents token data. */
export type AppToken = Node & {
  __typename?: 'AppToken'
  /** Name of the authenticated token. */
  name?: Maybe<Scalars['String']>
  /** Last 4 characters of the token. */
  authToken?: Maybe<Scalars['String']>
  /** The ID of the object. */
  id: Scalars['ID']
}

/** Creates a new token. */
export type AppTokenCreate = {
  __typename?: 'AppTokenCreate'
  /** The newly created authentication token. */
  authToken?: Maybe<Scalars['String']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  appToken?: Maybe<AppToken>
}

/** Deletes an authentication token assigned to app. */
export type AppTokenDelete = {
  __typename?: 'AppTokenDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  appToken?: Maybe<AppToken>
}

export type AppTokenInput = {
  /** Name of the token. */
  name?: Maybe<Scalars['String']>
  /** ID of app. */
  app: Scalars['ID']
}

/** Verify provided app token. */
export type AppTokenVerify = {
  __typename?: 'AppTokenVerify'
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
}

/** Enum determining type of your App. */
export enum AppTypeEnum {
  /** Local Saleor App. The app is fully manageable from dashboard. You can change assigned permissions, add webhooks, or authentication token */
  Local = 'LOCAL',
  /** Third party external App. Installation is fully automated. Saleor uses a defined App manifest to gather all required information. */
  Thirdparty = 'THIRDPARTY',
}

/** Updates an existing app. */
export type AppUpdate = {
  __typename?: 'AppUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  appErrors: Array<AppError>
  errors: Array<AppError>
  app?: Maybe<App>
}

/** An enumeration. */
export enum AreaUnitsEnum {
  SqCm = 'SQ_CM',
  SqM = 'SQ_M',
  SqKm = 'SQ_KM',
  SqFt = 'SQ_FT',
  SqYd = 'SQ_YD',
  SqInch = 'SQ_INCH',
}

/** Assigns storefront's navigation menus. */
export type AssignNavigation = {
  __typename?: 'AssignNavigation'
  /** Assigned navigation menu. */
  menu?: Maybe<Menu>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
}

/** New in Saleor 3.1. Represents assigned attribute to variant with variant selection attached. */
export type AssignedVariantAttribute = {
  __typename?: 'AssignedVariantAttribute'
  /** Attribute assigned to variant. */
  attribute: Attribute
  /** Determines, whether assigned attribute is allowed for variant selection. Supported variant types for variant selection are: ['dropdown', 'boolean', 'swatch', 'numeric'] */
  variantSelection: Scalars['Boolean']
}

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type Attribute = Node &
  ObjectWithMetadata & {
    __typename?: 'Attribute'
    /** The ID of the object. */
    id: Scalars['ID']
    productTypes: ProductTypeCountableConnection
    productVariantTypes: ProductTypeCountableConnection
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** The input type to use for entering attribute values in the dashboard. */
    inputType?: Maybe<AttributeInputTypeEnum>
    /** The entity type which can be used as a reference. */
    entityType?: Maybe<AttributeEntityTypeEnum>
    /** Name of an attribute displayed in the interface. */
    name?: Maybe<Scalars['String']>
    /** Internal representation of an attribute name. */
    slug?: Maybe<Scalars['String']>
    /** The attribute type. */
    type?: Maybe<AttributeTypeEnum>
    /** The unit of attribute values. */
    unit?: Maybe<MeasurementUnitsEnum>
    /** List of attribute's values. */
    choices?: Maybe<AttributeValueCountableConnection>
    /** Whether the attribute requires values to be passed or not. */
    valueRequired: Scalars['Boolean']
    /** Whether the attribute should be visible or not in storefront. */
    visibleInStorefront: Scalars['Boolean']
    /** Whether the attribute can be filtered in storefront. */
    filterableInStorefront: Scalars['Boolean']
    /** Whether the attribute can be filtered in dashboard. */
    filterableInDashboard: Scalars['Boolean']
    /** Whether the attribute can be displayed in the admin product list. */
    availableInGrid: Scalars['Boolean']
    /** Returns translated attribute fields for the given language code. */
    translation?: Maybe<AttributeTranslation>
    /** The position of the attribute in the storefront navigation (0 by default). */
    storefrontSearchPosition: Scalars['Int']
    /** Flag indicating that attribute has predefined choices. */
    withChoices: Scalars['Boolean']
  }

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductTypesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeProductVariantTypesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeChoicesArgs = {
  sortBy?: Maybe<AttributeChoicesSortingInput>
  filter?: Maybe<AttributeValueFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export type AttributeTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Deletes attributes. */
export type AttributeBulkDelete = {
  __typename?: 'AttributeBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
}

export enum AttributeChoicesSortField {
  /** Sort attribute choice by name. */
  Name = 'NAME',
  /** Sort attribute choice by slug. */
  Slug = 'SLUG',
}

export type AttributeChoicesSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort attribute choices by the selected field. */
  field: AttributeChoicesSortField
}

export type AttributeCountableConnection = {
  __typename?: 'AttributeCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<AttributeCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type AttributeCountableEdge = {
  __typename?: 'AttributeCountableEdge'
  /** The item at the end of the edge. */
  node: Attribute
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates an attribute. */
export type AttributeCreate = {
  __typename?: 'AttributeCreate'
  attribute?: Maybe<Attribute>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
}

export type AttributeCreateInput = {
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>
  /** The entity type which can be used as a reference. */
  entityType?: Maybe<AttributeEntityTypeEnum>
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String']
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>
  /** The attribute type. */
  type: AttributeTypeEnum
  /** The unit of attribute values. */
  unit?: Maybe<MeasurementUnitsEnum>
  /** List of attribute's values. */
  values?: Maybe<Array<Maybe<AttributeValueCreateInput>>>
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: Maybe<Scalars['Boolean']>
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: Maybe<Scalars['Int']>
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: Maybe<Scalars['Boolean']>
}

/** Deletes an attribute. */
export type AttributeDelete = {
  __typename?: 'AttributeDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
  attribute?: Maybe<Attribute>
}

/** An enumeration. */
export enum AttributeEntityTypeEnum {
  Page = 'PAGE',
  Product = 'PRODUCT',
}

export type AttributeError = {
  __typename?: 'AttributeError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: AttributeErrorCode
}

/** An enumeration. */
export enum AttributeErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type AttributeFilterInput = {
  valueRequired?: Maybe<Scalars['Boolean']>
  isVariantOnly?: Maybe<Scalars['Boolean']>
  visibleInStorefront?: Maybe<Scalars['Boolean']>
  filterableInStorefront?: Maybe<Scalars['Boolean']>
  filterableInDashboard?: Maybe<Scalars['Boolean']>
  availableInGrid?: Maybe<Scalars['Boolean']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  search?: Maybe<Scalars['String']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  type?: Maybe<AttributeTypeEnum>
  inCollection?: Maybe<Scalars['ID']>
  inCategory?: Maybe<Scalars['ID']>
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
}

export type AttributeInput = {
  /** Internal representation of an attribute name. */
  slug: Scalars['String']
  /** Internal representation of a value (unique per attribute). */
  values?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The range that the returned values should be in. */
  valuesRange?: Maybe<IntRangeInput>
  /** The date time range that the returned values should be in. */
  dateTime?: Maybe<DateTimeRangeInput>
  /** The date range that the returned values should be in. */
  date?: Maybe<DateRangeInput>
  /** The boolean value of the attribute. */
  boolean?: Maybe<Scalars['Boolean']>
}

/** An enumeration. */
export enum AttributeInputTypeEnum {
  Dropdown = 'DROPDOWN',
  Multiselect = 'MULTISELECT',
  File = 'FILE',
  Reference = 'REFERENCE',
  Numeric = 'NUMERIC',
  RichText = 'RICH_TEXT',
  Swatch = 'SWATCH',
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  DateTime = 'DATE_TIME',
}

/** Reorder the values of an attribute. */
export type AttributeReorderValues = {
  __typename?: 'AttributeReorderValues'
  /** Attribute from which values are reordered. */
  attribute?: Maybe<Attribute>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
}

export enum AttributeSortField {
  /** Sort attributes by name */
  Name = 'NAME',
  /** Sort attributes by slug */
  Slug = 'SLUG',
  /** Sort attributes by the value required flag */
  ValueRequired = 'VALUE_REQUIRED',
  /** Sort attributes by the variant only flag */
  IsVariantOnly = 'IS_VARIANT_ONLY',
  /** Sort attributes by visibility in the storefront */
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT',
  /** Sort attributes by the filterable in storefront flag */
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  /** Sort attributes by the filterable in dashboard flag */
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  /** Sort attributes by their position in storefront */
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  AvailableInGrid = 'AVAILABLE_IN_GRID',
}

export type AttributeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort attributes by the selected field. */
  field: AttributeSortField
}

export type AttributeTranslatableContent = Node & {
  __typename?: 'AttributeTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** Returns translated attribute fields for the given language code. */
  translation?: Maybe<AttributeTranslation>
  /**
   * Custom attribute of a product.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attribute?: Maybe<Attribute>
}

export type AttributeTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for an attribute. */
export type AttributeTranslate = {
  __typename?: 'AttributeTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  attribute?: Maybe<Attribute>
}

export type AttributeTranslation = Node & {
  __typename?: 'AttributeTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** Translation language. */
  language: LanguageDisplay
}

/** An enumeration. */
export enum AttributeTypeEnum {
  ProductType = 'PRODUCT_TYPE',
  PageType = 'PAGE_TYPE',
}

/** Updates attribute. */
export type AttributeUpdate = {
  __typename?: 'AttributeUpdate'
  attribute?: Maybe<Attribute>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
}

export type AttributeUpdateInput = {
  /** Name of an attribute displayed in the interface. */
  name?: Maybe<Scalars['String']>
  /** Internal representation of an attribute name. */
  slug?: Maybe<Scalars['String']>
  /** The unit of attribute values. */
  unit?: Maybe<MeasurementUnitsEnum>
  /** IDs of values to be removed from this attribute. */
  removeValues?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** New values to be created for this attribute. */
  addValues?: Maybe<Array<Maybe<AttributeValueUpdateInput>>>
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: Maybe<Scalars['Boolean']>
  /** Whether the attribute is for variants only. */
  isVariantOnly?: Maybe<Scalars['Boolean']>
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: Maybe<Scalars['Boolean']>
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: Maybe<Scalars['Boolean']>
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: Maybe<Scalars['Boolean']>
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: Maybe<Scalars['Int']>
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: Maybe<Scalars['Boolean']>
}

/** Represents a value of an attribute. */
export type AttributeValue = Node & {
  __typename?: 'AttributeValue'
  /** The ID of the object. */
  id: Scalars['ID']
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars['String']>
  /** Internal representation of a value (unique per attribute). */
  slug?: Maybe<Scalars['String']>
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']>
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: Maybe<AttributeInputTypeEnum>
  /** The ID of the attribute reference. */
  reference?: Maybe<Scalars['ID']>
  /** Represents file URL and content type (if attribute value is a file). */
  file?: Maybe<File>
  /** Represents the text (JSON) of the attribute value. */
  richText?: Maybe<Scalars['JSONString']>
  /** Represents the boolean value of the attribute value. */
  boolean?: Maybe<Scalars['Boolean']>
  /** Represents the date value of the attribute value. */
  date?: Maybe<Scalars['Date']>
  /** Represents the date time value of the attribute value. */
  dateTime?: Maybe<Scalars['DateTime']>
}

/** Represents a value of an attribute. */
export type AttributeValueTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Deletes values of attributes. */
export type AttributeValueBulkDelete = {
  __typename?: 'AttributeValueBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
}

export type AttributeValueCountableConnection = {
  __typename?: 'AttributeValueCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<AttributeValueCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type AttributeValueCountableEdge = {
  __typename?: 'AttributeValueCountableEdge'
  /** The item at the end of the edge. */
  node: AttributeValue
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a value for an attribute. */
export type AttributeValueCreate = {
  __typename?: 'AttributeValueCreate'
  /** The updated attribute. */
  attribute?: Maybe<Attribute>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
  attributeValue?: Maybe<AttributeValue>
}

export type AttributeValueCreateInput = {
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']>
  /** Represents the text (JSON) of the attribute value. */
  richText?: Maybe<Scalars['JSONString']>
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: Maybe<Scalars['String']>
  /** File content type. */
  contentType?: Maybe<Scalars['String']>
  /** Name of a value displayed in the interface. */
  name: Scalars['String']
}

/** Deletes a value of an attribute. */
export type AttributeValueDelete = {
  __typename?: 'AttributeValueDelete'
  /** The updated attribute. */
  attribute?: Maybe<Attribute>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
  attributeValue?: Maybe<AttributeValue>
}

export type AttributeValueFilterInput = {
  search?: Maybe<Scalars['String']>
}

export type AttributeValueInput = {
  /** ID of the selected attribute. */
  id?: Maybe<Scalars['ID']>
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: Maybe<Array<Scalars['String']>>
  /** URL of the file attribute. Every time, a new value is created. */
  file?: Maybe<Scalars['String']>
  /** File content type. */
  contentType?: Maybe<Scalars['String']>
  /** List of entity IDs that will be used as references. */
  references?: Maybe<Array<Scalars['ID']>>
  /** Text content in JSON format. */
  richText?: Maybe<Scalars['JSONString']>
  /** Represents the boolean value of the attribute value. */
  boolean?: Maybe<Scalars['Boolean']>
  /** Represents the date value of the attribute value. */
  date?: Maybe<Scalars['Date']>
  /** Represents the date time value of the attribute value. */
  dateTime?: Maybe<Scalars['DateTime']>
}

export type AttributeValueTranslatableContent = Node & {
  __typename?: 'AttributeValueTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  richText?: Maybe<Scalars['JSONString']>
  /** Returns translated attribute value fields for the given language code. */
  translation?: Maybe<AttributeValueTranslation>
  /**
   * Represents a value of an attribute.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  attributeValue?: Maybe<AttributeValue>
}

export type AttributeValueTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for an attribute value. */
export type AttributeValueTranslate = {
  __typename?: 'AttributeValueTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  attributeValue?: Maybe<AttributeValue>
}

export type AttributeValueTranslation = Node & {
  __typename?: 'AttributeValueTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  richText?: Maybe<Scalars['JSONString']>
  /** Translation language. */
  language: LanguageDisplay
}

export type AttributeValueTranslationInput = {
  name?: Maybe<Scalars['String']>
  richText?: Maybe<Scalars['JSONString']>
}

/** Updates value of an attribute. */
export type AttributeValueUpdate = {
  __typename?: 'AttributeValueUpdate'
  /** The updated attribute. */
  attribute?: Maybe<Attribute>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  attributeErrors: Array<AttributeError>
  errors: Array<AttributeError>
  attributeValue?: Maybe<AttributeValue>
}

export type AttributeValueUpdateInput = {
  /** Represent value of the attribute value (e.g. color values for swatch attributes). */
  value?: Maybe<Scalars['String']>
  /** Represents the text (JSON) of the attribute value. */
  richText?: Maybe<Scalars['JSONString']>
  /** URL of the file attribute. Every time, a new value is created. */
  fileUrl?: Maybe<Scalars['String']>
  /** File content type. */
  contentType?: Maybe<Scalars['String']>
  /** Name of a value displayed in the interface. */
  name?: Maybe<Scalars['String']>
}

export type BulkAttributeValueInput = {
  /** ID of the selected attribute. */
  id?: Maybe<Scalars['ID']>
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: Maybe<Array<Scalars['String']>>
  /** The boolean value of an attribute to resolve. If the passed value is non-existent, it will be created. */
  boolean?: Maybe<Scalars['Boolean']>
}

export type BulkProductError = {
  __typename?: 'BulkProductError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ProductErrorCode
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']>
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']>>
  /** List of channel IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>
}

export type BulkStockError = {
  __typename?: 'BulkStockError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ProductErrorCode
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>
  /** Index of an input list item that caused the error. */
  index?: Maybe<Scalars['Int']>
}

export type CardInput = {
  /** Payment method nonce, a token returned by the appropriate provider's SDK. */
  code: Scalars['String']
  /** Card security code. */
  cvc?: Maybe<Scalars['String']>
  /** Information about currency and amount. */
  money: MoneyInput
}

export type CatalogueInput = {
  /** Products related to the discount. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Categories related to the discount. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Collections related to the discount. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** New in Saleor 3.1. Product variant related to the discount. */
  variants?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type Category = Node &
  ObjectWithMetadata & {
    __typename?: 'Category'
    /** The ID of the object. */
    id: Scalars['ID']
    seoTitle?: Maybe<Scalars['String']>
    seoDescription?: Maybe<Scalars['String']>
    name: Scalars['String']
    description?: Maybe<Scalars['JSONString']>
    slug: Scalars['String']
    parent?: Maybe<Category>
    level: Scalars['Int']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /**
     * Description of the category (JSON).
     * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
     */
    descriptionJson?: Maybe<Scalars['JSONString']>
    /** List of ancestors of the category. */
    ancestors?: Maybe<CategoryCountableConnection>
    /** List of products in the category. */
    products?: Maybe<ProductCountableConnection>
    /** List of children of the category. */
    children?: Maybe<CategoryCountableConnection>
    backgroundImage?: Maybe<Image>
    /** Returns translated category fields for the given language code. */
    translation?: Maybe<CategoryTranslation>
  }

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryAncestorsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryProductsArgs = {
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryChildrenArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>
}

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export type CategoryTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Deletes categories. */
export type CategoryBulkDelete = {
  __typename?: 'CategoryBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type CategoryCountableConnection = {
  __typename?: 'CategoryCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<CategoryCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type CategoryCountableEdge = {
  __typename?: 'CategoryCountableEdge'
  /** The item at the end of the edge. */
  node: Category
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new category. */
export type CategoryCreate = {
  __typename?: 'CategoryCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  category?: Maybe<Category>
}

/** Deletes a category. */
export type CategoryDelete = {
  __typename?: 'CategoryDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  category?: Maybe<Category>
}

export type CategoryFilterInput = {
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type CategoryInput = {
  /** Category description (JSON). */
  description?: Maybe<Scalars['JSONString']>
  /** Category name. */
  name?: Maybe<Scalars['String']>
  /** Category slug. */
  slug?: Maybe<Scalars['String']>
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>
  /** Alt text for a product media. */
  backgroundImageAlt?: Maybe<Scalars['String']>
}

export enum CategorySortField {
  /** Sort categories by name. */
  Name = 'NAME',
  /** Sort categories by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort categories by subcategory count. */
  SubcategoryCount = 'SUBCATEGORY_COUNT',
}

export type CategorySortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
  /** Sort categories by the selected field. */
  field: CategorySortField
}

export type CategoryTranslatableContent = Node & {
  __typename?: 'CategoryTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name: Scalars['String']
  description?: Maybe<Scalars['JSONString']>
  /**
   * Description of the category (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>
  /** Returns translated category fields for the given language code. */
  translation?: Maybe<CategoryTranslation>
  /**
   * Represents a single category of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  category?: Maybe<Category>
}

export type CategoryTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a category. */
export type CategoryTranslate = {
  __typename?: 'CategoryTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  category?: Maybe<Category>
}

export type CategoryTranslation = Node & {
  __typename?: 'CategoryTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['JSONString']>
  /** Translation language. */
  language: LanguageDisplay
  /**
   * Translated description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>
}

/** Updates a category. */
export type CategoryUpdate = {
  __typename?: 'CategoryUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  category?: Maybe<Category>
}

/** Represents channel. */
export type Channel = Node & {
  __typename?: 'Channel'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  isActive: Scalars['Boolean']
  slug: Scalars['String']
  currencyCode: Scalars['String']
  /** Whether a channel has associated orders. */
  hasOrders: Scalars['Boolean']
  /** New in Saleor 3.1. Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided. */
  defaultCountry: CountryDisplay
}

/** Activate a channel. */
export type ChannelActivate = {
  __typename?: 'ChannelActivate'
  /** Activated channel. */
  channel?: Maybe<Channel>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>
  errors: Array<ChannelError>
}

/** Creates new channel. */
export type ChannelCreate = {
  __typename?: 'ChannelCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>
  errors: Array<ChannelError>
  channel?: Maybe<Channel>
}

export type ChannelCreateInput = {
  /** isActive flag. */
  isActive?: Maybe<Scalars['Boolean']>
  /** Name of the channel. */
  name: Scalars['String']
  /** Slug of the channel. */
  slug: Scalars['String']
  /** Currency of the channel. */
  currencyCode: Scalars['String']
  /** New in Saleor 3.1. Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided. */
  defaultCountry: CountryCode
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: Maybe<Array<Scalars['ID']>>
}

/** Deactivate a channel. */
export type ChannelDeactivate = {
  __typename?: 'ChannelDeactivate'
  /** Deactivated channel. */
  channel?: Maybe<Channel>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>
  errors: Array<ChannelError>
}

/** Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed. */
export type ChannelDelete = {
  __typename?: 'ChannelDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>
  errors: Array<ChannelError>
  channel?: Maybe<Channel>
}

export type ChannelDeleteInput = {
  /** ID of channel to migrate orders from origin channel. */
  channelId: Scalars['ID']
}

export type ChannelError = {
  __typename?: 'ChannelError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ChannelErrorCode
  /** List of shipping zone IDs which causes the error. */
  shippingZones?: Maybe<Array<Scalars['ID']>>
}

/** An enumeration. */
export enum ChannelErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  ChannelsCurrencyMustBeTheSame = 'CHANNELS_CURRENCY_MUST_BE_THE_SAME',
  ChannelWithOrders = 'CHANNEL_WITH_ORDERS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
}

/** Update a channel. */
export type ChannelUpdate = {
  __typename?: 'ChannelUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  channelErrors: Array<ChannelError>
  errors: Array<ChannelError>
  channel?: Maybe<Channel>
}

export type ChannelUpdateInput = {
  /** isActive flag. */
  isActive?: Maybe<Scalars['Boolean']>
  /** Name of the channel. */
  name?: Maybe<Scalars['String']>
  /** Slug of the channel. */
  slug?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. Default country for the channel. Default country can be used in checkout to determine the stock quantities or calculate taxes when the country was not explicitly provided. */
  defaultCountry?: Maybe<CountryCode>
  /** List of shipping zones to assign to the channel. */
  addShippingZones?: Maybe<Array<Scalars['ID']>>
  /** List of shipping zones to unassign from the channel. */
  removeShippingZones?: Maybe<Array<Scalars['ID']>>
}

/** Checkout object. */
export type Checkout = Node &
  ObjectWithMetadata & {
    __typename?: 'Checkout'
    created: Scalars['DateTime']
    lastChange: Scalars['DateTime']
    user?: Maybe<User>
    channel: Channel
    billingAddress?: Maybe<Address>
    shippingAddress?: Maybe<Address>
    note: Scalars['String']
    discount?: Maybe<Money>
    discountName?: Maybe<Scalars['String']>
    translatedDiscountName?: Maybe<Scalars['String']>
    voucherCode?: Maybe<Scalars['String']>
    /** List of gift cards associated with this checkout. */
    giftCards?: Maybe<Array<Maybe<GiftCard>>>
    /** The ID of the object. */
    id: Scalars['ID']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Shipping methods that can be used with this order. */
    availableShippingMethods: Array<Maybe<ShippingMethod>>
    /** New in Saleor 3.1. Collection points that can be used for this order. */
    availableCollectionPoints: Array<Warehouse>
    /** List of available payment gateways. */
    availablePaymentGateways: Array<PaymentGateway>
    /** Email of a customer. */
    email: Scalars['String']
    /** Returns True, if checkout requires shipping. */
    isShippingRequired: Scalars['Boolean']
    /** The number of items purchased. */
    quantity: Scalars['Int']
    /** New in Saleor 3.1. Date when oldest stock reservation for this checkout  expires or null if no stock is reserved. */
    stockReservationExpires?: Maybe<Scalars['DateTime']>
    /** A list of checkout lines, each containing information about an item in the checkout. */
    lines?: Maybe<Array<Maybe<CheckoutLine>>>
    /** The price of the shipping, with all the taxes included. */
    shippingPrice?: Maybe<TaxedMoney>
    /**
     * The shipping method related with checkout.
     * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
     */
    shippingMethod?: Maybe<ShippingMethod>
    /** New in Saleor 3.1. The delivery method selected for this checkout. */
    deliveryMethod?: Maybe<DeliveryMethod>
    /** The price of the checkout before shipping, with taxes included. */
    subtotalPrice?: Maybe<TaxedMoney>
    /** The checkout's token. */
    token: Scalars['UUID']
    /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
    totalPrice?: Maybe<TaxedMoney>
    /** Checkout language code. */
    languageCode: LanguageCodeEnum
  }

/** Adds a gift card or a voucher to a checkout. */
export type CheckoutAddPromoCode = {
  __typename?: 'CheckoutAddPromoCode'
  /** The checkout with the added gift card or voucher. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Update billing address in the existing checkout. */
export type CheckoutBillingAddressUpdate = {
  __typename?: 'CheckoutBillingAddressUpdate'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export type CheckoutComplete = {
  __typename?: 'CheckoutComplete'
  /** Placed order. */
  order?: Maybe<Order>
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean']
  /** Confirmation data used to process additional authorization steps. */
  confirmationData?: Maybe<Scalars['JSONString']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

export type CheckoutCountableConnection = {
  __typename?: 'CheckoutCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<CheckoutCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type CheckoutCountableEdge = {
  __typename?: 'CheckoutCountableEdge'
  /** The item at the end of the edge. */
  node: Checkout
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Create a new checkout. */
export type CheckoutCreate = {
  __typename?: 'CheckoutCreate'
  /**
   * Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout.
   * @deprecated This field will be removed in Saleor 4.0. Always returns `True`.
   */
  created?: Maybe<Scalars['Boolean']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
  checkout?: Maybe<Checkout>
}

export type CheckoutCreateInput = {
  /** Slug of a channel in which to create a checkout. */
  channel?: Maybe<Scalars['String']>
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<Maybe<CheckoutLineInput>>
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: Maybe<AddressInput>
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>
  /** Checkout language code. */
  languageCode?: Maybe<LanguageCodeEnum>
}

/** Sets the customer as the owner of the checkout. */
export type CheckoutCustomerAttach = {
  __typename?: 'CheckoutCustomerAttach'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Removes the user assigned as the owner of the checkout. */
export type CheckoutCustomerDetach = {
  __typename?: 'CheckoutCustomerDetach'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** New in Saleor 3.1. Updates the delivery method (shipping method or pick up point) of the checkout. */
export type CheckoutDeliveryMethodUpdate = {
  __typename?: 'CheckoutDeliveryMethodUpdate'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  errors: Array<CheckoutError>
}

/** Updates email address in the existing checkout object. */
export type CheckoutEmailUpdate = {
  __typename?: 'CheckoutEmailUpdate'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

export type CheckoutError = {
  __typename?: 'CheckoutError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: CheckoutErrorCode
  /** List of varint IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']>>
  /** List of line Ids which cause the error. */
  lines?: Maybe<Array<Scalars['ID']>>
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>
}

/** An enumeration. */
export enum CheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  GraphqlError = 'GRAPHQL_ERROR',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  PaymentError = 'PAYMENT_ERROR',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  DeliveryMethodNotApplicable = 'DELIVERY_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  GiftCardNotApplicable = 'GIFT_CARD_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY',
  MissingChannelSlug = 'MISSING_CHANNEL_SLUG',
  ChannelInactive = 'CHANNEL_INACTIVE',
  UnavailableVariantInChannel = 'UNAVAILABLE_VARIANT_IN_CHANNEL',
}

export type CheckoutFilterInput = {
  customer?: Maybe<Scalars['String']>
  created?: Maybe<DateRangeInput>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  channels?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Update language code in the existing checkout. */
export type CheckoutLanguageCodeUpdate = {
  __typename?: 'CheckoutLanguageCodeUpdate'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Represents an item in the checkout. */
export type CheckoutLine = Node & {
  __typename?: 'CheckoutLine'
  /** The ID of the object. */
  id: Scalars['ID']
  variant: ProductVariant
  quantity: Scalars['Int']
  /** The sum of the checkout line price, taxes and discounts. */
  totalPrice?: Maybe<TaxedMoney>
  /** Indicates whether the item need to be delivered. */
  requiresShipping?: Maybe<Scalars['Boolean']>
}

export type CheckoutLineCountableConnection = {
  __typename?: 'CheckoutLineCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<CheckoutLineCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type CheckoutLineCountableEdge = {
  __typename?: 'CheckoutLineCountableEdge'
  /** The item at the end of the edge. */
  node: CheckoutLine
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Deletes a CheckoutLine. */
export type CheckoutLineDelete = {
  __typename?: 'CheckoutLineDelete'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

export type CheckoutLineInput = {
  /** The number of items purchased. */
  quantity: Scalars['Int']
  /** ID of the product variant. */
  variantId: Scalars['ID']
}

/** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
export type CheckoutLinesAdd = {
  __typename?: 'CheckoutLinesAdd'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Deletes checkout lines. */
export type CheckoutLinesDelete = {
  __typename?: 'CheckoutLinesDelete'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  errors: Array<CheckoutError>
}

/** Updates checkout line in the existing checkout. */
export type CheckoutLinesUpdate = {
  __typename?: 'CheckoutLinesUpdate'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Create a new payment for given checkout. */
export type CheckoutPaymentCreate = {
  __typename?: 'CheckoutPaymentCreate'
  /** Related checkout object. */
  checkout?: Maybe<Checkout>
  /** A newly created payment. */
  payment?: Maybe<Payment>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>
  errors: Array<PaymentError>
}

/** Remove a gift card or a voucher from a checkout. */
export type CheckoutRemovePromoCode = {
  __typename?: 'CheckoutRemovePromoCode'
  /** The checkout with the removed gift card or voucher. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Update shipping address in the existing checkout. */
export type CheckoutShippingAddressUpdate = {
  __typename?: 'CheckoutShippingAddressUpdate'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

/** Updates the shipping address of the checkout. */
export type CheckoutShippingMethodUpdate = {
  __typename?: 'CheckoutShippingMethodUpdate'
  /** An updated checkout. */
  checkout?: Maybe<Checkout>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  checkoutErrors: Array<CheckoutError>
  errors: Array<CheckoutError>
}

export enum CheckoutSortField {
  /** Sort checkouts by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort checkouts by customer. */
  Customer = 'CUSTOMER',
  /** Sort checkouts by payment. */
  Payment = 'PAYMENT',
}

export type CheckoutSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort checkouts by the selected field. */
  field: CheckoutSortField
}

export type ChoiceValue = {
  __typename?: 'ChoiceValue'
  raw?: Maybe<Scalars['String']>
  verbose?: Maybe<Scalars['String']>
}

/** Represents a collection of products. */
export type Collection = Node &
  ObjectWithMetadata & {
    __typename?: 'Collection'
    /** The ID of the object. */
    id: Scalars['ID']
    seoTitle?: Maybe<Scalars['String']>
    seoDescription?: Maybe<Scalars['String']>
    name: Scalars['String']
    description?: Maybe<Scalars['JSONString']>
    slug: Scalars['String']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Channel given to retrieve this collection. Also used by federation gateway to resolve this object in a federated query. */
    channel?: Maybe<Scalars['String']>
    /**
     * Description of the collection (JSON).
     * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
     */
    descriptionJson?: Maybe<Scalars['JSONString']>
    /** List of products in this collection. */
    products?: Maybe<ProductCountableConnection>
    backgroundImage?: Maybe<Image>
    /** Returns translated collection fields for the given language code. */
    translation?: Maybe<CollectionTranslation>
    /** List of channels in which the collection is available. */
    channelListings?: Maybe<Array<CollectionChannelListing>>
  }

/** Represents a collection of products. */
export type CollectionProductsArgs = {
  filter?: Maybe<ProductFilterInput>
  sortBy?: Maybe<ProductOrder>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents a collection of products. */
export type CollectionBackgroundImageArgs = {
  size?: Maybe<Scalars['Int']>
}

/** Represents a collection of products. */
export type CollectionTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Adds products to a collection. */
export type CollectionAddProducts = {
  __typename?: 'CollectionAddProducts'
  /** Collection to which products will be added. */
  collection?: Maybe<Collection>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>
  errors: Array<CollectionError>
}

/** Deletes collections. */
export type CollectionBulkDelete = {
  __typename?: 'CollectionBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>
  errors: Array<CollectionError>
}

/** Represents collection channel listing. */
export type CollectionChannelListing = Node & {
  __typename?: 'CollectionChannelListing'
  /** The ID of the object. */
  id: Scalars['ID']
  publicationDate?: Maybe<Scalars['Date']>
  isPublished: Scalars['Boolean']
  channel: Channel
}

export type CollectionChannelListingError = {
  __typename?: 'CollectionChannelListingError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ProductErrorCode
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>
}

/** Manage collection's availability in channels. */
export type CollectionChannelListingUpdate = {
  __typename?: 'CollectionChannelListingUpdate'
  /** An updated collection instance. */
  collection?: Maybe<Collection>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionChannelListingErrors: Array<CollectionChannelListingError>
  errors: Array<CollectionChannelListingError>
}

export type CollectionChannelListingUpdateInput = {
  /** List of channels to which the collection should be assigned. */
  addChannels?: Maybe<Array<PublishableChannelListingInput>>
  /** List of channels from which the collection should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>
}

export type CollectionCountableConnection = {
  __typename?: 'CollectionCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<CollectionCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type CollectionCountableEdge = {
  __typename?: 'CollectionCountableEdge'
  /** The item at the end of the edge. */
  node: Collection
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new collection. */
export type CollectionCreate = {
  __typename?: 'CollectionCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>
  errors: Array<CollectionError>
  collection?: Maybe<Collection>
}

export type CollectionCreateInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>
  /** Description of the collection (JSON). */
  description?: Maybe<Scalars['JSONString']>
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>
  /** List of products to be added to the collection. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Deletes a collection. */
export type CollectionDelete = {
  __typename?: 'CollectionDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>
  errors: Array<CollectionError>
  collection?: Maybe<Collection>
}

export type CollectionError = {
  __typename?: 'CollectionError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']>>
  /** The error code. */
  code: CollectionErrorCode
}

/** An enumeration. */
export enum CollectionErrorCode {
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
}

export type CollectionFilterInput = {
  published?: Maybe<CollectionPublished>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
}

export type CollectionInput = {
  /** Informs whether a collection is published. */
  isPublished?: Maybe<Scalars['Boolean']>
  /** Name of the collection. */
  name?: Maybe<Scalars['String']>
  /** Slug of the collection. */
  slug?: Maybe<Scalars['String']>
  /** Description of the collection (JSON). */
  description?: Maybe<Scalars['JSONString']>
  /** Background image file. */
  backgroundImage?: Maybe<Scalars['Upload']>
  /** Alt text for an image. */
  backgroundImageAlt?: Maybe<Scalars['String']>
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>
}

export enum CollectionPublished {
  Published = 'PUBLISHED',
  Hidden = 'HIDDEN',
}

/** Remove products from a collection. */
export type CollectionRemoveProducts = {
  __typename?: 'CollectionRemoveProducts'
  /** Collection from which products will be removed. */
  collection?: Maybe<Collection>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>
  errors: Array<CollectionError>
}

/** Reorder the products of a collection. */
export type CollectionReorderProducts = {
  __typename?: 'CollectionReorderProducts'
  /** Collection from which products are reordered. */
  collection?: Maybe<Collection>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>
  errors: Array<CollectionError>
}

export enum CollectionSortField {
  /** Sort collections by name. */
  Name = 'NAME',
  /** Sort collections by availability. */
  Availability = 'AVAILABILITY',
  /** Sort collections by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort collections by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
}

export type CollectionSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
  /** Sort collections by the selected field. */
  field: CollectionSortField
}

export type CollectionTranslatableContent = Node & {
  __typename?: 'CollectionTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name: Scalars['String']
  description?: Maybe<Scalars['JSONString']>
  /**
   * Description of the collection (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>
  /** Returns translated collection fields for the given language code. */
  translation?: Maybe<CollectionTranslation>
  /**
   * Represents a collection of products.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  collection?: Maybe<Collection>
}

export type CollectionTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a collection. */
export type CollectionTranslate = {
  __typename?: 'CollectionTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  collection?: Maybe<Collection>
}

export type CollectionTranslation = Node & {
  __typename?: 'CollectionTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['JSONString']>
  /** Translation language. */
  language: LanguageDisplay
  /**
   * Translated description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>
}

/** Updates a collection. */
export type CollectionUpdate = {
  __typename?: 'CollectionUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  collectionErrors: Array<CollectionError>
  errors: Array<CollectionError>
  collection?: Maybe<Collection>
}

/** Stores information about a single configuration field. */
export type ConfigurationItem = {
  __typename?: 'ConfigurationItem'
  /** Name of the field. */
  name: Scalars['String']
  /** Current value of the field. */
  value?: Maybe<Scalars['String']>
  /** Type of the field. */
  type?: Maybe<ConfigurationTypeFieldEnum>
  /** Help text for the field. */
  helpText?: Maybe<Scalars['String']>
  /** Label for the field. */
  label?: Maybe<Scalars['String']>
}

export type ConfigurationItemInput = {
  /** Name of the field to update. */
  name: Scalars['String']
  /** Value of the given field to update. */
  value?: Maybe<Scalars['String']>
}

/** An enumeration. */
export enum ConfigurationTypeFieldEnum {
  String = 'STRING',
  Multiline = 'MULTILINE',
  Boolean = 'BOOLEAN',
  Secret = 'SECRET',
  Password = 'PASSWORD',
  Secretmultiline = 'SECRETMULTILINE',
  Output = 'OUTPUT',
}

/** Confirm user account with token sent by email during registration. */
export type ConfirmAccount = {
  __typename?: 'ConfirmAccount'
  /** An activated user account. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Confirm the email change of the logged-in user. */
export type ConfirmEmailChange = {
  __typename?: 'ConfirmEmailChange'
  /** A user instance with a new email. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** An enumeration. */
export enum CountryCode {
  Af = 'AF',
  Ax = 'AX',
  Al = 'AL',
  Dz = 'DZ',
  As = 'AS',
  Ad = 'AD',
  Ao = 'AO',
  Ai = 'AI',
  Aq = 'AQ',
  Ag = 'AG',
  Ar = 'AR',
  Am = 'AM',
  Aw = 'AW',
  Au = 'AU',
  At = 'AT',
  Az = 'AZ',
  Bs = 'BS',
  Bh = 'BH',
  Bd = 'BD',
  Bb = 'BB',
  By = 'BY',
  Be = 'BE',
  Bz = 'BZ',
  Bj = 'BJ',
  Bm = 'BM',
  Bt = 'BT',
  Bo = 'BO',
  Bq = 'BQ',
  Ba = 'BA',
  Bw = 'BW',
  Bv = 'BV',
  Br = 'BR',
  Io = 'IO',
  Bn = 'BN',
  Bg = 'BG',
  Bf = 'BF',
  Bi = 'BI',
  Cv = 'CV',
  Kh = 'KH',
  Cm = 'CM',
  Ca = 'CA',
  Ky = 'KY',
  Cf = 'CF',
  Td = 'TD',
  Cl = 'CL',
  Cn = 'CN',
  Cx = 'CX',
  Cc = 'CC',
  Co = 'CO',
  Km = 'KM',
  Cg = 'CG',
  Cd = 'CD',
  Ck = 'CK',
  Cr = 'CR',
  Ci = 'CI',
  Hr = 'HR',
  Cu = 'CU',
  Cw = 'CW',
  Cy = 'CY',
  Cz = 'CZ',
  Dk = 'DK',
  Dj = 'DJ',
  Dm = 'DM',
  Do = 'DO',
  Ec = 'EC',
  Eg = 'EG',
  Sv = 'SV',
  Gq = 'GQ',
  Er = 'ER',
  Ee = 'EE',
  Sz = 'SZ',
  Et = 'ET',
  Eu = 'EU',
  Fk = 'FK',
  Fo = 'FO',
  Fj = 'FJ',
  Fi = 'FI',
  Fr = 'FR',
  Gf = 'GF',
  Pf = 'PF',
  Tf = 'TF',
  Ga = 'GA',
  Gm = 'GM',
  Ge = 'GE',
  De = 'DE',
  Gh = 'GH',
  Gi = 'GI',
  Gr = 'GR',
  Gl = 'GL',
  Gd = 'GD',
  Gp = 'GP',
  Gu = 'GU',
  Gt = 'GT',
  Gg = 'GG',
  Gn = 'GN',
  Gw = 'GW',
  Gy = 'GY',
  Ht = 'HT',
  Hm = 'HM',
  Va = 'VA',
  Hn = 'HN',
  Hk = 'HK',
  Hu = 'HU',
  Is = 'IS',
  In = 'IN',
  Id = 'ID',
  Ir = 'IR',
  Iq = 'IQ',
  Ie = 'IE',
  Im = 'IM',
  Il = 'IL',
  It = 'IT',
  Jm = 'JM',
  Jp = 'JP',
  Je = 'JE',
  Jo = 'JO',
  Kz = 'KZ',
  Ke = 'KE',
  Ki = 'KI',
  Kw = 'KW',
  Kg = 'KG',
  La = 'LA',
  Lv = 'LV',
  Lb = 'LB',
  Ls = 'LS',
  Lr = 'LR',
  Ly = 'LY',
  Li = 'LI',
  Lt = 'LT',
  Lu = 'LU',
  Mo = 'MO',
  Mg = 'MG',
  Mw = 'MW',
  My = 'MY',
  Mv = 'MV',
  Ml = 'ML',
  Mt = 'MT',
  Mh = 'MH',
  Mq = 'MQ',
  Mr = 'MR',
  Mu = 'MU',
  Yt = 'YT',
  Mx = 'MX',
  Fm = 'FM',
  Md = 'MD',
  Mc = 'MC',
  Mn = 'MN',
  Me = 'ME',
  Ms = 'MS',
  Ma = 'MA',
  Mz = 'MZ',
  Mm = 'MM',
  Na = 'NA',
  Nr = 'NR',
  Np = 'NP',
  Nl = 'NL',
  Nc = 'NC',
  Nz = 'NZ',
  Ni = 'NI',
  Ne = 'NE',
  Ng = 'NG',
  Nu = 'NU',
  Nf = 'NF',
  Kp = 'KP',
  Mk = 'MK',
  Mp = 'MP',
  No = 'NO',
  Om = 'OM',
  Pk = 'PK',
  Pw = 'PW',
  Ps = 'PS',
  Pa = 'PA',
  Pg = 'PG',
  Py = 'PY',
  Pe = 'PE',
  Ph = 'PH',
  Pn = 'PN',
  Pl = 'PL',
  Pt = 'PT',
  Pr = 'PR',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Ru = 'RU',
  Rw = 'RW',
  Bl = 'BL',
  Sh = 'SH',
  Kn = 'KN',
  Lc = 'LC',
  Mf = 'MF',
  Pm = 'PM',
  Vc = 'VC',
  Ws = 'WS',
  Sm = 'SM',
  St = 'ST',
  Sa = 'SA',
  Sn = 'SN',
  Rs = 'RS',
  Sc = 'SC',
  Sl = 'SL',
  Sg = 'SG',
  Sx = 'SX',
  Sk = 'SK',
  Si = 'SI',
  Sb = 'SB',
  So = 'SO',
  Za = 'ZA',
  Gs = 'GS',
  Kr = 'KR',
  Ss = 'SS',
  Es = 'ES',
  Lk = 'LK',
  Sd = 'SD',
  Sr = 'SR',
  Sj = 'SJ',
  Se = 'SE',
  Ch = 'CH',
  Sy = 'SY',
  Tw = 'TW',
  Tj = 'TJ',
  Tz = 'TZ',
  Th = 'TH',
  Tl = 'TL',
  Tg = 'TG',
  Tk = 'TK',
  To = 'TO',
  Tt = 'TT',
  Tn = 'TN',
  Tr = 'TR',
  Tm = 'TM',
  Tc = 'TC',
  Tv = 'TV',
  Ug = 'UG',
  Ua = 'UA',
  Ae = 'AE',
  Gb = 'GB',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Vu = 'VU',
  Ve = 'VE',
  Vn = 'VN',
  Vg = 'VG',
  Vi = 'VI',
  Wf = 'WF',
  Eh = 'EH',
  Ye = 'YE',
  Zm = 'ZM',
  Zw = 'ZW',
}

export type CountryDisplay = {
  __typename?: 'CountryDisplay'
  /** Country code. */
  code: Scalars['String']
  /** Country name. */
  country: Scalars['String']
  /** Country tax. */
  vat?: Maybe<Vat>
}

/** Create JWT token. */
export type CreateToken = {
  __typename?: 'CreateToken'
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']>
  /** A user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

export type CreditCard = {
  __typename?: 'CreditCard'
  /** Card brand. */
  brand: Scalars['String']
  /** First 4 digits of the card number. */
  firstDigits?: Maybe<Scalars['String']>
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String']
  /** Two-digit number representing the card???s expiration month. */
  expMonth?: Maybe<Scalars['Int']>
  /** Four-digit number representing the card???s expiration year. */
  expYear?: Maybe<Scalars['Int']>
}

/** Deletes customers. */
export type CustomerBulkDelete = {
  __typename?: 'CustomerBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Creates a new customer. */
export type CustomerCreate = {
  __typename?: 'CustomerCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  user?: Maybe<User>
}

/** Deletes a customer. */
export type CustomerDelete = {
  __typename?: 'CustomerDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  user?: Maybe<User>
}

/** History log of the customer. */
export type CustomerEvent = Node & {
  __typename?: 'CustomerEvent'
  /** The ID of the object. */
  id: Scalars['ID']
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>
  /** Customer event type. */
  type?: Maybe<CustomerEventsEnum>
  /** User who performed the action. */
  user?: Maybe<User>
  /** App that performed the action. */
  app?: Maybe<App>
  /** Content of the event. */
  message?: Maybe<Scalars['String']>
  /** Number of objects concerned by the event. */
  count?: Maybe<Scalars['Int']>
  /** The concerned order. */
  order?: Maybe<Order>
  /** The concerned order line. */
  orderLine?: Maybe<OrderLine>
}

/** An enumeration. */
export enum CustomerEventsEnum {
  AccountCreated = 'ACCOUNT_CREATED',
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  PasswordReset = 'PASSWORD_RESET',
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  PasswordChanged = 'PASSWORD_CHANGED',
  EmailChanged = 'EMAIL_CHANGED',
  PlacedOrder = 'PLACED_ORDER',
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  NameAssigned = 'NAME_ASSIGNED',
  EmailAssigned = 'EMAIL_ASSIGNED',
  NoteAdded = 'NOTE_ADDED',
}

export type CustomerFilterInput = {
  dateJoined?: Maybe<DateRangeInput>
  numberOfOrders?: Maybe<IntRangeInput>
  placedOrders?: Maybe<DateRangeInput>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
}

export type CustomerInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>
  /** Given name. */
  firstName?: Maybe<Scalars['String']>
  /** Family name. */
  lastName?: Maybe<Scalars['String']>
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>
  /** A note about the user. */
  note?: Maybe<Scalars['String']>
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>
}

/** Updates an existing customer. */
export type CustomerUpdate = {
  __typename?: 'CustomerUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
  user?: Maybe<User>
}

export type DateRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['Date']>
  /** End date. */
  lte?: Maybe<Scalars['Date']>
}

export type DateTimeRangeInput = {
  /** Start date. */
  gte?: Maybe<Scalars['DateTime']>
  /** End date. */
  lte?: Maybe<Scalars['DateTime']>
}

/** Deactivate all JWT tokens of the currently authenticated user. */
export type DeactivateAllUserTokens = {
  __typename?: 'DeactivateAllUserTokens'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Delete metadata of an object. */
export type DeleteMetadata = {
  __typename?: 'DeleteMetadata'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>
  errors: Array<MetadataError>
  item?: Maybe<ObjectWithMetadata>
}

/** Delete object's private metadata. */
export type DeletePrivateMetadata = {
  __typename?: 'DeletePrivateMetadata'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>
  errors: Array<MetadataError>
  item?: Maybe<ObjectWithMetadata>
}

/** Represents a delivery method chosen for the checkout. `Warehouse` type is used when checkout is marked as "click and collect" and `ShippingMethod` otherwise. */
export type DeliveryMethod = Warehouse | ShippingMethod

export type DigitalContent = Node &
  ObjectWithMetadata & {
    __typename?: 'DigitalContent'
    useDefaultSettings: Scalars['Boolean']
    automaticFulfillment: Scalars['Boolean']
    contentFile: Scalars['String']
    maxDownloads?: Maybe<Scalars['Int']>
    urlValidDays?: Maybe<Scalars['Int']>
    /** List of URLs for the digital variant. */
    urls?: Maybe<Array<Maybe<DigitalContentUrl>>>
    /** The ID of the object. */
    id: Scalars['ID']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Product variant assigned to digital content. */
    productVariant: ProductVariant
  }

export type DigitalContentCountableConnection = {
  __typename?: 'DigitalContentCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<DigitalContentCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type DigitalContentCountableEdge = {
  __typename?: 'DigitalContentCountableEdge'
  /** The item at the end of the edge. */
  node: DigitalContent
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type DigitalContentCreate = {
  __typename?: 'DigitalContentCreate'
  variant?: Maybe<ProductVariant>
  content?: Maybe<DigitalContent>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Remove digital content assigned to given variant. */
export type DigitalContentDelete = {
  __typename?: 'DigitalContentDelete'
  variant?: Maybe<ProductVariant>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type DigitalContentInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>
}

/** Update digital content. */
export type DigitalContentUpdate = {
  __typename?: 'DigitalContentUpdate'
  variant?: Maybe<ProductVariant>
  content?: Maybe<DigitalContent>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type DigitalContentUploadInput = {
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: Maybe<Scalars['Int']>
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: Maybe<Scalars['Int']>
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: Maybe<Scalars['Boolean']>
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload']
}

export type DigitalContentUrl = Node & {
  __typename?: 'DigitalContentUrl'
  content: DigitalContent
  created: Scalars['DateTime']
  downloadNum: Scalars['Int']
  /** The ID of the object. */
  id: Scalars['ID']
  /** URL for digital content. */
  url?: Maybe<Scalars['String']>
  /** UUID of digital content. */
  token: Scalars['UUID']
}

/** Generate new URL to digital content. */
export type DigitalContentUrlCreate = {
  __typename?: 'DigitalContentUrlCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  digitalContentUrl?: Maybe<DigitalContentUrl>
}

export type DigitalContentUrlCreateInput = {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID']
}

export type DiscountError = {
  __typename?: 'DiscountError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** List of products IDs which causes the error. */
  products?: Maybe<Array<Scalars['ID']>>
  /** The error code. */
  code: DiscountErrorCode
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>
}

/** An enumeration. */
export enum DiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
}

export enum DiscountStatusEnum {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED',
}

export enum DiscountValueTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
}

/** An enumeration. */
export enum DistanceUnitsEnum {
  Cm = 'CM',
  M = 'M',
  Km = 'KM',
  Ft = 'FT',
  Yd = 'YD',
  Inch = 'INCH',
}

/** Represents shop's domain. */
export type Domain = {
  __typename?: 'Domain'
  /** The host name of the domain. */
  host: Scalars['String']
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean']
  /** Shop's absolute URL. */
  url: Scalars['String']
}

/** Deletes draft orders. */
export type DraftOrderBulkDelete = {
  __typename?: 'DraftOrderBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Completes creating an order. */
export type DraftOrderComplete = {
  __typename?: 'DraftOrderComplete'
  /** Completed order. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Creates a new draft order. */
export type DraftOrderCreate = {
  __typename?: 'DraftOrderCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
  order?: Maybe<Order>
}

export type DraftOrderCreateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>
  /** Customer associated with the draft order. */
  user?: Maybe<Scalars['ID']>
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>
  /** ID of the channel associated with the order. */
  channelId?: Maybe<Scalars['ID']>
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: Maybe<Array<Maybe<OrderLineCreateInput>>>
}

/** Deletes a draft order. */
export type DraftOrderDelete = {
  __typename?: 'DraftOrderDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
  order?: Maybe<Order>
}

export type DraftOrderInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>
  /** Customer associated with the draft order. */
  user?: Maybe<Scalars['ID']>
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>
  /** Discount amount for the order. */
  discount?: Maybe<Scalars['PositiveDecimal']>
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>
  /** ID of a selected shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>
  /** ID of the voucher associated with the order. */
  voucher?: Maybe<Scalars['ID']>
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: Maybe<Scalars['String']>
  /** ID of the channel associated with the order. */
  channelId?: Maybe<Scalars['ID']>
  /** URL of a view where users should be redirected to see the order details. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>
}

/** Deletes order lines. */
export type DraftOrderLinesBulkDelete = {
  __typename?: 'DraftOrderLinesBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Updates a draft order. */
export type DraftOrderUpdate = {
  __typename?: 'DraftOrderUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
  order?: Maybe<Order>
}

export type ExportError = {
  __typename?: 'ExportError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ExportErrorCode
}

/** An enumeration. */
export enum ExportErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

/** History log of export file. */
export type ExportEvent = Node & {
  __typename?: 'ExportEvent'
  /** The ID of the object. */
  id: Scalars['ID']
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']
  /** Export event type. */
  type: ExportEventsEnum
  /** User who performed the action. */
  user?: Maybe<User>
  /** App which performed the action. */
  app?: Maybe<App>
  /** Content of the event. */
  message: Scalars['String']
}

/** An enumeration. */
export enum ExportEventsEnum {
  ExportPending = 'EXPORT_PENDING',
  ExportSuccess = 'EXPORT_SUCCESS',
  ExportFailed = 'EXPORT_FAILED',
  ExportDeleted = 'EXPORT_DELETED',
  ExportedFileSent = 'EXPORTED_FILE_SENT',
  ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT',
}

/** Represents a job data of exported file. */
export type ExportFile = Node &
  Job & {
    __typename?: 'ExportFile'
    /** The ID of the object. */
    id: Scalars['ID']
    user?: Maybe<User>
    app?: Maybe<App>
    /** Job status. */
    status: JobStatusEnum
    /** Created date time of job in ISO 8601 format. */
    createdAt: Scalars['DateTime']
    /** Date time of job last update in ISO 8601 format. */
    updatedAt: Scalars['DateTime']
    /** Job message. */
    message?: Maybe<Scalars['String']>
    /** The URL of field to download. */
    url?: Maybe<Scalars['String']>
    /** List of events associated with the export. */
    events?: Maybe<Array<ExportEvent>>
  }

export type ExportFileCountableConnection = {
  __typename?: 'ExportFileCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<ExportFileCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type ExportFileCountableEdge = {
  __typename?: 'ExportFileCountableEdge'
  /** The item at the end of the edge. */
  node: ExportFile
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type ExportFileFilterInput = {
  createdAt?: Maybe<DateTimeRangeInput>
  updatedAt?: Maybe<DateTimeRangeInput>
  status?: Maybe<JobStatusEnum>
  user?: Maybe<Scalars['String']>
  app?: Maybe<Scalars['String']>
}

export enum ExportFileSortField {
  /** Sort export file by status. */
  Status = 'STATUS',
  /** Sort export file by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort export file by updated at. */
  UpdatedAt = 'UPDATED_AT',
}

export type ExportFileSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort export file by the selected field. */
  field: ExportFileSortField
}

export type ExportInfoInput = {
  /** List of attribute ids witch should be exported. */
  attributes?: Maybe<Array<Scalars['ID']>>
  /** List of warehouse ids witch should be exported. */
  warehouses?: Maybe<Array<Scalars['ID']>>
  /** List of channels ids which should be exported. */
  channels?: Maybe<Array<Scalars['ID']>>
  /** List of product fields witch should be exported. */
  fields?: Maybe<Array<ProductFieldEnum>>
}

/** Export products to csv file. */
export type ExportProducts = {
  __typename?: 'ExportProducts'
  /** The newly created export file job which is responsible for export data. */
  exportFile?: Maybe<ExportFile>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  exportErrors: Array<ExportError>
  errors: Array<ExportError>
}

export type ExportProductsInput = {
  /** Determine which products should be exported. */
  scope: ExportScope
  /** Filtering options for products. */
  filter?: Maybe<ProductFilterInput>
  /** List of products IDS to export. */
  ids?: Maybe<Array<Scalars['ID']>>
  /** Input with info about fields which should be exported. */
  exportInfo?: Maybe<ExportInfoInput>
  /** Type of exported file. */
  fileType: FileTypesEnum
}

export enum ExportScope {
  /** Export all products. */
  All = 'ALL',
  /** Export products with given ids. */
  Ids = 'IDS',
  /** Export the filtered products. */
  Filter = 'FILTER',
}

export type ExternalAuthentication = {
  __typename?: 'ExternalAuthentication'
  /** ID of external authentication plugin. */
  id: Scalars['String']
  /** Name of external authentication plugin. */
  name?: Maybe<Scalars['String']>
}

/** Prepare external authentication url for user by custom plugin. */
export type ExternalAuthenticationUrl = {
  __typename?: 'ExternalAuthenticationUrl'
  /** The data returned by authentication plugin. */
  authenticationData?: Maybe<Scalars['JSONString']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Logout user by custom plugin. */
export type ExternalLogout = {
  __typename?: 'ExternalLogout'
  /** The data returned by authentication plugin. */
  logoutData?: Maybe<Scalars['JSONString']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

export type ExternalNotificationError = {
  __typename?: 'ExternalNotificationError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ExternalNotificationErrorCodes
}

/** An enumeration. */
export enum ExternalNotificationErrorCodes {
  Required = 'REQUIRED',
  InvalidModelType = 'INVALID_MODEL_TYPE',
  NotFound = 'NOT_FOUND',
  ChannelInactive = 'CHANNEL_INACTIVE',
}

/** New in Saleor 3.1. Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload. */
export type ExternalNotificationTrigger = {
  __typename?: 'ExternalNotificationTrigger'
  errors: Array<ExternalNotificationError>
}

export type ExternalNotificationTriggerInput = {
  /** The list of customers or orders node IDs that will be serialized and included in the notification payload. */
  ids: Array<Maybe<Scalars['ID']>>
  /** Additional payload that will be merged with the one based on the bussines object ID. */
  extraPayload?: Maybe<Scalars['JSONString']>
  /** External event type. This field is passed to a plugin as an event type. */
  externalEventType: Scalars['String']
}

/** Obtain external access tokens for user by custom plugin. */
export type ExternalObtainAccessTokens = {
  __typename?: 'ExternalObtainAccessTokens'
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']>
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']>
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']>
  /** A user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Refresh user's access by custom plugin. */
export type ExternalRefresh = {
  __typename?: 'ExternalRefresh'
  /** The token, required to authenticate. */
  token?: Maybe<Scalars['String']>
  /** The refresh token, required to re-generate external access token. */
  refreshToken?: Maybe<Scalars['String']>
  /** CSRF token required to re-generate external access token. */
  csrfToken?: Maybe<Scalars['String']>
  /** A user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Verify external authentication data by plugin. */
export type ExternalVerify = {
  __typename?: 'ExternalVerify'
  /** User assigned to data. */
  user?: Maybe<User>
  /** Determine if authentication data is valid or not. */
  isValid: Scalars['Boolean']
  /** External data. */
  verifyData?: Maybe<Scalars['JSONString']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

export type File = {
  __typename?: 'File'
  /** The URL of the file. */
  url: Scalars['String']
  /** Content type of the file. */
  contentType?: Maybe<Scalars['String']>
}

/** An enumeration. */
export enum FileTypesEnum {
  Csv = 'CSV',
  Xlsx = 'XLSX',
}

/** Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type FileUpload = {
  __typename?: 'FileUpload'
  uploadedFile?: Maybe<File>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  uploadErrors: Array<UploadError>
  errors: Array<UploadError>
}

/** Represents order fulfillment. */
export type Fulfillment = Node &
  ObjectWithMetadata & {
    __typename?: 'Fulfillment'
    /** The ID of the object. */
    id: Scalars['ID']
    fulfillmentOrder: Scalars['Int']
    status: FulfillmentStatus
    trackingNumber: Scalars['String']
    created: Scalars['DateTime']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** List of lines for the fulfillment. */
    lines?: Maybe<Array<Maybe<FulfillmentLine>>>
    /** User-friendly fulfillment status. */
    statusDisplay?: Maybe<Scalars['String']>
    /** Warehouse from fulfillment was fulfilled. */
    warehouse?: Maybe<Warehouse>
  }

/** New in Saleor 3.1. Approve existing fulfillment. */
export type FulfillmentApprove = {
  __typename?: 'FulfillmentApprove'
  /** An approved fulfillment. */
  fulfillment?: Maybe<Fulfillment>
  /** Order which fulfillment was approved. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Cancels existing fulfillment and optionally restocks items. */
export type FulfillmentCancel = {
  __typename?: 'FulfillmentCancel'
  /** A canceled fulfillment. */
  fulfillment?: Maybe<Fulfillment>
  /** Order which fulfillment was cancelled. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type FulfillmentCancelInput = {
  /** ID of a warehouse where items will be restocked. Optional when fulfillment is in WAITING_FOR_APPROVAL state. */
  warehouseId?: Maybe<Scalars['ID']>
}

/** Represents line of the fulfillment. */
export type FulfillmentLine = Node & {
  __typename?: 'FulfillmentLine'
  /** The ID of the object. */
  id: Scalars['ID']
  quantity: Scalars['Int']
  orderLine?: Maybe<OrderLine>
}

/** Refund products. */
export type FulfillmentRefundProducts = {
  __typename?: 'FulfillmentRefundProducts'
  /** A refunded fulfillment. */
  fulfillment?: Maybe<Fulfillment>
  /** Order which fulfillment was refunded. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Return products. */
export type FulfillmentReturnProducts = {
  __typename?: 'FulfillmentReturnProducts'
  /** A return fulfillment. */
  returnFulfillment?: Maybe<Fulfillment>
  /** A replace fulfillment. */
  replaceFulfillment?: Maybe<Fulfillment>
  /** Order which fulfillment was returned. */
  order?: Maybe<Order>
  /** A draft order which was created for products with replace flag. */
  replaceOrder?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** An enumeration. */
export enum FulfillmentStatus {
  /** Fulfilled */
  Fulfilled = 'FULFILLED',
  /** Refunded */
  Refunded = 'REFUNDED',
  /** Returned */
  Returned = 'RETURNED',
  /** Replaced */
  Replaced = 'REPLACED',
  /** Refunded and returned */
  RefundedAndReturned = 'REFUNDED_AND_RETURNED',
  /** Canceled */
  Canceled = 'CANCELED',
  /** Waiting for approval */
  WaitingForApproval = 'WAITING_FOR_APPROVAL',
}

/** Updates a fulfillment for an order. */
export type FulfillmentUpdateTracking = {
  __typename?: 'FulfillmentUpdateTracking'
  /** A fulfillment with updated tracking. */
  fulfillment?: Maybe<Fulfillment>
  /** Order for which fulfillment was updated. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type FulfillmentUpdateTrackingInput = {
  /** Fulfillment tracking number. */
  trackingNumber?: Maybe<Scalars['String']>
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>
}

/** Payment gateway client configuration key and value pair. */
export type GatewayConfigLine = {
  __typename?: 'GatewayConfigLine'
  /** Gateway config key. */
  field: Scalars['String']
  /** Gateway config value for key. */
  value?: Maybe<Scalars['String']>
}

/** A gift card is a prepaid electronic payment card accepted in stores. They can be used during checkout by providing a valid gift card codes. */
export type GiftCard = Node &
  ObjectWithMetadata & {
    __typename?: 'GiftCard'
    /** Gift card code. Can be fetched by staff member with manage gift card permission when gift card wasn't used yet and by the gift card owner. */
    code: Scalars['String']
    isActive: Scalars['Boolean']
    expiryDate?: Maybe<Scalars['Date']>
    /** New in Saleor 3.1. The gift card tag. */
    tag?: Maybe<Scalars['String']>
    created: Scalars['DateTime']
    lastUsedOn?: Maybe<Scalars['DateTime']>
    initialBalance?: Maybe<Money>
    currentBalance?: Maybe<Money>
    /** The ID of the object. */
    id: Scalars['ID']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Code in format which allows displaying in a user interface. */
    displayCode: Scalars['String']
    /** New in Saleor 3.1. The user who bought or issued a gift card. */
    createdBy?: Maybe<User>
    /** New in Saleor 3.1. The customer who used a gift card. */
    usedBy?: Maybe<User>
    /** New in Saleor 3.1. Email address of the user who bought or issued gift card. */
    createdByEmail?: Maybe<Scalars['String']>
    /** New in Saleor 3.1. Email address of the customer who used a gift card. */
    usedByEmail?: Maybe<Scalars['String']>
    /** New in Saleor 3.1. App which created the gift card. */
    app?: Maybe<App>
    /** New in Saleor 3.1. Related gift card product. */
    product?: Maybe<Product>
    /** New in Saleor 3.1. List of events associated with the gift card. */
    events: Array<GiftCardEvent>
    /** {ADDED_IN_31} Slug of the channel where the gift card was bought. */
    boughtInChannel?: Maybe<Scalars['String']>
    /**
     * The customer who bought a gift card.
     * @deprecated This field will be removed in Saleor 4.0. Use `createdBy` field instead.
     */
    user?: Maybe<User>
    /**
     * End date of gift card.
     * @deprecated This field will be removed in Saleor 4.0. Use `expiryDate` field instead.
     */
    endDate?: Maybe<Scalars['DateTime']>
    /**
     * Start date of gift card.
     * @deprecated This field will be removed in Saleor 4.0.
     */
    startDate?: Maybe<Scalars['DateTime']>
  }

/** Activate a gift card. */
export type GiftCardActivate = {
  __typename?: 'GiftCardActivate'
  /** Activated gift card. */
  giftCard?: Maybe<GiftCard>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>
  errors: Array<GiftCardError>
}

/** New in Saleor 3.1. Adds note to the gift card. */
export type GiftCardAddNote = {
  __typename?: 'GiftCardAddNote'
  /** Gift card with the note added. */
  giftCard?: Maybe<GiftCard>
  /** Gift card note created. */
  event?: Maybe<GiftCardEvent>
  errors: Array<GiftCardError>
}

export type GiftCardAddNoteInput = {
  /** Note message. */
  message: Scalars['String']
}

/** New in Saleor 3.1. Activate gift cards. */
export type GiftCardBulkActivate = {
  __typename?: 'GiftCardBulkActivate'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  errors: Array<GiftCardError>
}

/** New in Saleor 3.1. Deactivate gift cards. */
export type GiftCardBulkDeactivate = {
  __typename?: 'GiftCardBulkDeactivate'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  errors: Array<GiftCardError>
}

/** New in Saleor 3.1. Delete gift cards. */
export type GiftCardBulkDelete = {
  __typename?: 'GiftCardBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  errors: Array<GiftCardError>
}

export type GiftCardCountableConnection = {
  __typename?: 'GiftCardCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<GiftCardCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type GiftCardCountableEdge = {
  __typename?: 'GiftCardCountableEdge'
  /** The item at the end of the edge. */
  node: GiftCard
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new gift card. */
export type GiftCardCreate = {
  __typename?: 'GiftCardCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>
  errors: Array<GiftCardError>
  giftCard?: Maybe<GiftCard>
}

export type GiftCardCreateInput = {
  /** New in Saleor 3.1. The gift card tag. */
  tag?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. The gift card expiry date. */
  expiryDate?: Maybe<Scalars['Date']>
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: Maybe<Scalars['Date']>
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: Maybe<Scalars['Date']>
  /** Balance of the gift card. */
  balance: PriceInput
  /** Email of the customer to whom gift card will be sent. */
  userEmail?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. Slug of a channel from which the email should be sent. */
  channel?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. Determine if gift card is active. */
  isActive: Scalars['Boolean']
  /**
   * Code to use the gift card.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. The code is now auto generated.
   */
  code?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. The gift card note from the staff member. */
  note?: Maybe<Scalars['String']>
}

/** Deactivate a gift card. */
export type GiftCardDeactivate = {
  __typename?: 'GiftCardDeactivate'
  /** Deactivated gift card. */
  giftCard?: Maybe<GiftCard>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>
  errors: Array<GiftCardError>
}

/** New in Saleor 3.1. Delete gift card. */
export type GiftCardDelete = {
  __typename?: 'GiftCardDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>
  errors: Array<GiftCardError>
  giftCard?: Maybe<GiftCard>
}

export type GiftCardError = {
  __typename?: 'GiftCardError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: GiftCardErrorCode
}

/** An enumeration. */
export enum GiftCardErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

/** New in Saleor 3.1. History log of the gift card. */
export type GiftCardEvent = Node & {
  __typename?: 'GiftCardEvent'
  /** The ID of the object. */
  id: Scalars['ID']
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>
  /** Gift card event type. */
  type?: Maybe<GiftCardEventsEnum>
  /** User who performed the action. */
  user?: Maybe<User>
  /** App that performed the action. */
  app?: Maybe<App>
  /** Content of the event. */
  message?: Maybe<Scalars['String']>
  /** Email of the customer. */
  email?: Maybe<Scalars['String']>
  /** The order ID where gift card was used or bought. */
  orderId?: Maybe<Scalars['ID']>
  /** User-friendly number of an order where gift card was used or bought. */
  orderNumber?: Maybe<Scalars['String']>
  /** The gift card tag. */
  tag?: Maybe<Scalars['String']>
  /** Old gift card tag. */
  oldTag?: Maybe<Scalars['String']>
  /** The gift card balance. */
  balance?: Maybe<GiftCardEventBalance>
  /** The gift card expiry date. */
  expiryDate?: Maybe<Scalars['Date']>
  /** Previous gift card expiry date. */
  oldExpiryDate?: Maybe<Scalars['Date']>
}

export type GiftCardEventBalance = {
  __typename?: 'GiftCardEventBalance'
  /** Initial balance of the gift card. */
  initialBalance?: Maybe<Money>
  /** Current balance of the gift card. */
  currentBalance: Money
  /** Previous initial balance of the gift card. */
  oldInitialBalance?: Maybe<Money>
  /** Previous current balance of the gift card. */
  oldCurrentBalance?: Maybe<Money>
}

/** An enumeration. */
export enum GiftCardEventsEnum {
  Issued = 'ISSUED',
  Bought = 'BOUGHT',
  Updated = 'UPDATED',
  Activated = 'ACTIVATED',
  Deactivated = 'DEACTIVATED',
  BalanceReset = 'BALANCE_RESET',
  ExpiryDateUpdated = 'EXPIRY_DATE_UPDATED',
  TagUpdated = 'TAG_UPDATED',
  SentToCustomer = 'SENT_TO_CUSTOMER',
  Resent = 'RESENT',
  NoteAdded = 'NOTE_ADDED',
  UsedInOrder = 'USED_IN_ORDER',
}

export type GiftCardFilterInput = {
  isActive?: Maybe<Scalars['Boolean']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  tag?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  usedBy?: Maybe<Array<Maybe<Scalars['ID']>>>
  currency?: Maybe<Scalars['String']>
  currentBalance?: Maybe<PriceRangeInput>
  initialBalance?: Maybe<PriceRangeInput>
  code?: Maybe<Scalars['String']>
}

/** New in Saleor 3.1. Resend a gift card. */
export type GiftCardResend = {
  __typename?: 'GiftCardResend'
  /** Gift card which has been sent. */
  giftCard?: Maybe<GiftCard>
  errors: Array<GiftCardError>
}

export type GiftCardResendInput = {
  /** ID of a gift card to resend. */
  id: Scalars['ID']
  /** Email to which gift card should be send. */
  email?: Maybe<Scalars['String']>
  /** Slug of a channel from which the email should be sent. */
  channel: Scalars['String']
}

/** Gift card related settings from site settings. */
export type GiftCardSettings = {
  __typename?: 'GiftCardSettings'
  /** The gift card expiry type settings. */
  expiryType: GiftCardSettingsExpiryTypeEnum
  /** The gift card expiry period settings. */
  expiryPeriod?: Maybe<TimePeriod>
}

export type GiftCardSettingsError = {
  __typename?: 'GiftCardSettingsError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: GiftCardSettingsErrorCode
}

/** An enumeration. */
export enum GiftCardSettingsErrorCode {
  Invalid = 'INVALID',
  Required = 'REQUIRED',
  GraphqlError = 'GRAPHQL_ERROR',
}

/** An enumeration. */
export enum GiftCardSettingsExpiryTypeEnum {
  NeverExpire = 'NEVER_EXPIRE',
  ExpiryPeriod = 'EXPIRY_PERIOD',
}

/** Update gift card settings. */
export type GiftCardSettingsUpdate = {
  __typename?: 'GiftCardSettingsUpdate'
  /** Gift card settings. */
  giftCardSettings?: Maybe<GiftCardSettings>
  errors: Array<GiftCardSettingsError>
}

export type GiftCardSettingsUpdateInput = {
  /** Defines gift card default expiry settings. */
  expiryType?: Maybe<GiftCardSettingsExpiryTypeEnum>
  /** Defines gift card expiry period. */
  expiryPeriod?: Maybe<TimePeriodInputType>
}

export enum GiftCardSortField {
  /** Sort orders by tag. */
  Tag = 'TAG',
  /** Sort orders by product. */
  Product = 'PRODUCT',
  /** Sort orders by used by. */
  UsedBy = 'USED_BY',
  /** Sort orders by current balance. */
  CurrentBalance = 'CURRENT_BALANCE',
}

export type GiftCardSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort gift cards by the selected field. */
  field: GiftCardSortField
}

/** Update a gift card. */
export type GiftCardUpdate = {
  __typename?: 'GiftCardUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  giftCardErrors: Array<GiftCardError>
  errors: Array<GiftCardError>
  giftCard?: Maybe<GiftCard>
}

export type GiftCardUpdateInput = {
  /** New in Saleor 3.1. The gift card tag. */
  tag?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. The gift card expiry date. */
  expiryDate?: Maybe<Scalars['Date']>
  /**
   * Start date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0.
   */
  startDate?: Maybe<Scalars['Date']>
  /**
   * End date of the gift card in ISO 8601 format.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use `expiryDate` from `expirySettings` instead.
   */
  endDate?: Maybe<Scalars['Date']>
  /** New in Saleor 3.1. The gift card balance amount. */
  balanceAmount?: Maybe<Scalars['PositiveDecimal']>
}

/** Represents permission group data. */
export type Group = Node & {
  __typename?: 'Group'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** List of group permissions */
  permissions?: Maybe<Array<Maybe<Permission>>>
  /** List of group users */
  users?: Maybe<Array<Maybe<User>>>
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean']
}

export type GroupCountableConnection = {
  __typename?: 'GroupCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<GroupCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type GroupCountableEdge = {
  __typename?: 'GroupCountableEdge'
  /** The item at the end of the edge. */
  node: Group
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Represents an image. */
export type Image = {
  __typename?: 'Image'
  /** The URL of the image. */
  url: Scalars['String']
  /** Alt text for an image. */
  alt?: Maybe<Scalars['String']>
}

export type IntRangeInput = {
  /** Value greater than or equal to. */
  gte?: Maybe<Scalars['Int']>
  /** Value less than or equal to. */
  lte?: Maybe<Scalars['Int']>
}

/** Represents an Invoice. */
export type Invoice = ObjectWithMetadata &
  Job &
  Node & {
    __typename?: 'Invoice'
    /** The ID of the object. */
    id: Scalars['ID']
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Job status. */
    status: JobStatusEnum
    number?: Maybe<Scalars['String']>
    externalUrl?: Maybe<Scalars['String']>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** Created date time of job in ISO 8601 format. */
    createdAt: Scalars['DateTime']
    /** Date time of job last update in ISO 8601 format. */
    updatedAt: Scalars['DateTime']
    /** Job message. */
    message?: Maybe<Scalars['String']>
    /** URL to download an invoice. */
    url?: Maybe<Scalars['String']>
  }

/** Creates a ready to send invoice. */
export type InvoiceCreate = {
  __typename?: 'InvoiceCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>
  errors: Array<InvoiceError>
  invoice?: Maybe<Invoice>
}

export type InvoiceCreateInput = {
  /** Invoice number. */
  number: Scalars['String']
  /** URL of an invoice to download. */
  url: Scalars['String']
}

/** Deletes an invoice. */
export type InvoiceDelete = {
  __typename?: 'InvoiceDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>
  errors: Array<InvoiceError>
  invoice?: Maybe<Invoice>
}

export type InvoiceError = {
  __typename?: 'InvoiceError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: InvoiceErrorCode
}

/** An enumeration. */
export enum InvoiceErrorCode {
  Required = 'REQUIRED',
  NotReady = 'NOT_READY',
  UrlNotSet = 'URL_NOT_SET',
  EmailNotSet = 'EMAIL_NOT_SET',
  NumberNotSet = 'NUMBER_NOT_SET',
  NotFound = 'NOT_FOUND',
  InvalidStatus = 'INVALID_STATUS',
}

/** Request an invoice for the order using plugin. */
export type InvoiceRequest = {
  __typename?: 'InvoiceRequest'
  /** Order related to an invoice. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>
  errors: Array<InvoiceError>
  invoice?: Maybe<Invoice>
}

/** Requests deletion of an invoice. */
export type InvoiceRequestDelete = {
  __typename?: 'InvoiceRequestDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>
  errors: Array<InvoiceError>
  invoice?: Maybe<Invoice>
}

/** Send an invoice notification to the customer. */
export type InvoiceSendNotification = {
  __typename?: 'InvoiceSendNotification'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>
  errors: Array<InvoiceError>
  invoice?: Maybe<Invoice>
}

/** Updates an invoice. */
export type InvoiceUpdate = {
  __typename?: 'InvoiceUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  invoiceErrors: Array<InvoiceError>
  errors: Array<InvoiceError>
  invoice?: Maybe<Invoice>
}

export type Job = {
  /** Job status. */
  status: JobStatusEnum
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']
  /** Job message. */
  message?: Maybe<Scalars['String']>
}

/** An enumeration. */
export enum JobStatusEnum {
  Pending = 'PENDING',
  Success = 'SUCCESS',
  Failed = 'FAILED',
  Deleted = 'DELETED',
}

/** An enumeration. */
export enum LanguageCodeEnum {
  Af = 'AF',
  AfNa = 'AF_NA',
  AfZa = 'AF_ZA',
  Agq = 'AGQ',
  AgqCm = 'AGQ_CM',
  Ak = 'AK',
  AkGh = 'AK_GH',
  Am = 'AM',
  AmEt = 'AM_ET',
  Ar = 'AR',
  ArAe = 'AR_AE',
  ArBh = 'AR_BH',
  ArDj = 'AR_DJ',
  ArDz = 'AR_DZ',
  ArEg = 'AR_EG',
  ArEh = 'AR_EH',
  ArEr = 'AR_ER',
  ArIl = 'AR_IL',
  ArIq = 'AR_IQ',
  ArJo = 'AR_JO',
  ArKm = 'AR_KM',
  ArKw = 'AR_KW',
  ArLb = 'AR_LB',
  ArLy = 'AR_LY',
  ArMa = 'AR_MA',
  ArMr = 'AR_MR',
  ArOm = 'AR_OM',
  ArPs = 'AR_PS',
  ArQa = 'AR_QA',
  ArSa = 'AR_SA',
  ArSd = 'AR_SD',
  ArSo = 'AR_SO',
  ArSs = 'AR_SS',
  ArSy = 'AR_SY',
  ArTd = 'AR_TD',
  ArTn = 'AR_TN',
  ArYe = 'AR_YE',
  As = 'AS',
  AsIn = 'AS_IN',
  Asa = 'ASA',
  AsaTz = 'ASA_TZ',
  Ast = 'AST',
  AstEs = 'AST_ES',
  Az = 'AZ',
  AzCyrl = 'AZ_CYRL',
  AzCyrlAz = 'AZ_CYRL_AZ',
  AzLatn = 'AZ_LATN',
  AzLatnAz = 'AZ_LATN_AZ',
  Bas = 'BAS',
  BasCm = 'BAS_CM',
  Be = 'BE',
  BeBy = 'BE_BY',
  Bem = 'BEM',
  BemZm = 'BEM_ZM',
  Bez = 'BEZ',
  BezTz = 'BEZ_TZ',
  Bg = 'BG',
  BgBg = 'BG_BG',
  Bm = 'BM',
  BmMl = 'BM_ML',
  Bn = 'BN',
  BnBd = 'BN_BD',
  BnIn = 'BN_IN',
  Bo = 'BO',
  BoCn = 'BO_CN',
  BoIn = 'BO_IN',
  Br = 'BR',
  BrFr = 'BR_FR',
  Brx = 'BRX',
  BrxIn = 'BRX_IN',
  Bs = 'BS',
  BsCyrl = 'BS_CYRL',
  BsCyrlBa = 'BS_CYRL_BA',
  BsLatn = 'BS_LATN',
  BsLatnBa = 'BS_LATN_BA',
  Ca = 'CA',
  CaAd = 'CA_AD',
  CaEs = 'CA_ES',
  CaEsValencia = 'CA_ES_VALENCIA',
  CaFr = 'CA_FR',
  CaIt = 'CA_IT',
  Ccp = 'CCP',
  CcpBd = 'CCP_BD',
  CcpIn = 'CCP_IN',
  Ce = 'CE',
  CeRu = 'CE_RU',
  Ceb = 'CEB',
  CebPh = 'CEB_PH',
  Cgg = 'CGG',
  CggUg = 'CGG_UG',
  Chr = 'CHR',
  ChrUs = 'CHR_US',
  Ckb = 'CKB',
  CkbIq = 'CKB_IQ',
  CkbIr = 'CKB_IR',
  Cs = 'CS',
  CsCz = 'CS_CZ',
  Cu = 'CU',
  CuRu = 'CU_RU',
  Cy = 'CY',
  CyGb = 'CY_GB',
  Da = 'DA',
  DaDk = 'DA_DK',
  DaGl = 'DA_GL',
  Dav = 'DAV',
  DavKe = 'DAV_KE',
  De = 'DE',
  DeAt = 'DE_AT',
  DeBe = 'DE_BE',
  DeCh = 'DE_CH',
  DeDe = 'DE_DE',
  DeIt = 'DE_IT',
  DeLi = 'DE_LI',
  DeLu = 'DE_LU',
  Dje = 'DJE',
  DjeNe = 'DJE_NE',
  Dsb = 'DSB',
  DsbDe = 'DSB_DE',
  Dua = 'DUA',
  DuaCm = 'DUA_CM',
  Dyo = 'DYO',
  DyoSn = 'DYO_SN',
  Dz = 'DZ',
  DzBt = 'DZ_BT',
  Ebu = 'EBU',
  EbuKe = 'EBU_KE',
  Ee = 'EE',
  EeGh = 'EE_GH',
  EeTg = 'EE_TG',
  El = 'EL',
  ElCy = 'EL_CY',
  ElGr = 'EL_GR',
  En = 'EN',
  EnAe = 'EN_AE',
  EnAg = 'EN_AG',
  EnAi = 'EN_AI',
  EnAs = 'EN_AS',
  EnAt = 'EN_AT',
  EnAu = 'EN_AU',
  EnBb = 'EN_BB',
  EnBe = 'EN_BE',
  EnBi = 'EN_BI',
  EnBm = 'EN_BM',
  EnBs = 'EN_BS',
  EnBw = 'EN_BW',
  EnBz = 'EN_BZ',
  EnCa = 'EN_CA',
  EnCc = 'EN_CC',
  EnCh = 'EN_CH',
  EnCk = 'EN_CK',
  EnCm = 'EN_CM',
  EnCx = 'EN_CX',
  EnCy = 'EN_CY',
  EnDe = 'EN_DE',
  EnDg = 'EN_DG',
  EnDk = 'EN_DK',
  EnDm = 'EN_DM',
  EnEr = 'EN_ER',
  EnFi = 'EN_FI',
  EnFj = 'EN_FJ',
  EnFk = 'EN_FK',
  EnFm = 'EN_FM',
  EnGb = 'EN_GB',
  EnGd = 'EN_GD',
  EnGg = 'EN_GG',
  EnGh = 'EN_GH',
  EnGi = 'EN_GI',
  EnGm = 'EN_GM',
  EnGu = 'EN_GU',
  EnGy = 'EN_GY',
  EnHk = 'EN_HK',
  EnIe = 'EN_IE',
  EnIl = 'EN_IL',
  EnIm = 'EN_IM',
  EnIn = 'EN_IN',
  EnIo = 'EN_IO',
  EnJe = 'EN_JE',
  EnJm = 'EN_JM',
  EnKe = 'EN_KE',
  EnKi = 'EN_KI',
  EnKn = 'EN_KN',
  EnKy = 'EN_KY',
  EnLc = 'EN_LC',
  EnLr = 'EN_LR',
  EnLs = 'EN_LS',
  EnMg = 'EN_MG',
  EnMh = 'EN_MH',
  EnMo = 'EN_MO',
  EnMp = 'EN_MP',
  EnMs = 'EN_MS',
  EnMt = 'EN_MT',
  EnMu = 'EN_MU',
  EnMw = 'EN_MW',
  EnMy = 'EN_MY',
  EnNa = 'EN_NA',
  EnNf = 'EN_NF',
  EnNg = 'EN_NG',
  EnNl = 'EN_NL',
  EnNr = 'EN_NR',
  EnNu = 'EN_NU',
  EnNz = 'EN_NZ',
  EnPg = 'EN_PG',
  EnPh = 'EN_PH',
  EnPk = 'EN_PK',
  EnPn = 'EN_PN',
  EnPr = 'EN_PR',
  EnPw = 'EN_PW',
  EnRw = 'EN_RW',
  EnSb = 'EN_SB',
  EnSc = 'EN_SC',
  EnSd = 'EN_SD',
  EnSe = 'EN_SE',
  EnSg = 'EN_SG',
  EnSh = 'EN_SH',
  EnSi = 'EN_SI',
  EnSl = 'EN_SL',
  EnSs = 'EN_SS',
  EnSx = 'EN_SX',
  EnSz = 'EN_SZ',
  EnTc = 'EN_TC',
  EnTk = 'EN_TK',
  EnTo = 'EN_TO',
  EnTt = 'EN_TT',
  EnTv = 'EN_TV',
  EnTz = 'EN_TZ',
  EnUg = 'EN_UG',
  EnUm = 'EN_UM',
  EnUs = 'EN_US',
  EnVc = 'EN_VC',
  EnVg = 'EN_VG',
  EnVi = 'EN_VI',
  EnVu = 'EN_VU',
  EnWs = 'EN_WS',
  EnZa = 'EN_ZA',
  EnZm = 'EN_ZM',
  EnZw = 'EN_ZW',
  Eo = 'EO',
  Es = 'ES',
  EsAr = 'ES_AR',
  EsBo = 'ES_BO',
  EsBr = 'ES_BR',
  EsBz = 'ES_BZ',
  EsCl = 'ES_CL',
  EsCo = 'ES_CO',
  EsCr = 'ES_CR',
  EsCu = 'ES_CU',
  EsDo = 'ES_DO',
  EsEa = 'ES_EA',
  EsEc = 'ES_EC',
  EsEs = 'ES_ES',
  EsGq = 'ES_GQ',
  EsGt = 'ES_GT',
  EsHn = 'ES_HN',
  EsIc = 'ES_IC',
  EsMx = 'ES_MX',
  EsNi = 'ES_NI',
  EsPa = 'ES_PA',
  EsPe = 'ES_PE',
  EsPh = 'ES_PH',
  EsPr = 'ES_PR',
  EsPy = 'ES_PY',
  EsSv = 'ES_SV',
  EsUs = 'ES_US',
  EsUy = 'ES_UY',
  EsVe = 'ES_VE',
  Et = 'ET',
  EtEe = 'ET_EE',
  Eu = 'EU',
  EuEs = 'EU_ES',
  Ewo = 'EWO',
  EwoCm = 'EWO_CM',
  Fa = 'FA',
  FaAf = 'FA_AF',
  FaIr = 'FA_IR',
  Ff = 'FF',
  FfAdlm = 'FF_ADLM',
  FfAdlmBf = 'FF_ADLM_BF',
  FfAdlmCm = 'FF_ADLM_CM',
  FfAdlmGh = 'FF_ADLM_GH',
  FfAdlmGm = 'FF_ADLM_GM',
  FfAdlmGn = 'FF_ADLM_GN',
  FfAdlmGw = 'FF_ADLM_GW',
  FfAdlmLr = 'FF_ADLM_LR',
  FfAdlmMr = 'FF_ADLM_MR',
  FfAdlmNe = 'FF_ADLM_NE',
  FfAdlmNg = 'FF_ADLM_NG',
  FfAdlmSl = 'FF_ADLM_SL',
  FfAdlmSn = 'FF_ADLM_SN',
  FfLatn = 'FF_LATN',
  FfLatnBf = 'FF_LATN_BF',
  FfLatnCm = 'FF_LATN_CM',
  FfLatnGh = 'FF_LATN_GH',
  FfLatnGm = 'FF_LATN_GM',
  FfLatnGn = 'FF_LATN_GN',
  FfLatnGw = 'FF_LATN_GW',
  FfLatnLr = 'FF_LATN_LR',
  FfLatnMr = 'FF_LATN_MR',
  FfLatnNe = 'FF_LATN_NE',
  FfLatnNg = 'FF_LATN_NG',
  FfLatnSl = 'FF_LATN_SL',
  FfLatnSn = 'FF_LATN_SN',
  Fi = 'FI',
  FiFi = 'FI_FI',
  Fil = 'FIL',
  FilPh = 'FIL_PH',
  Fo = 'FO',
  FoDk = 'FO_DK',
  FoFo = 'FO_FO',
  Fr = 'FR',
  FrBe = 'FR_BE',
  FrBf = 'FR_BF',
  FrBi = 'FR_BI',
  FrBj = 'FR_BJ',
  FrBl = 'FR_BL',
  FrCa = 'FR_CA',
  FrCd = 'FR_CD',
  FrCf = 'FR_CF',
  FrCg = 'FR_CG',
  FrCh = 'FR_CH',
  FrCi = 'FR_CI',
  FrCm = 'FR_CM',
  FrDj = 'FR_DJ',
  FrDz = 'FR_DZ',
  FrFr = 'FR_FR',
  FrGa = 'FR_GA',
  FrGf = 'FR_GF',
  FrGn = 'FR_GN',
  FrGp = 'FR_GP',
  FrGq = 'FR_GQ',
  FrHt = 'FR_HT',
  FrKm = 'FR_KM',
  FrLu = 'FR_LU',
  FrMa = 'FR_MA',
  FrMc = 'FR_MC',
  FrMf = 'FR_MF',
  FrMg = 'FR_MG',
  FrMl = 'FR_ML',
  FrMq = 'FR_MQ',
  FrMr = 'FR_MR',
  FrMu = 'FR_MU',
  FrNc = 'FR_NC',
  FrNe = 'FR_NE',
  FrPf = 'FR_PF',
  FrPm = 'FR_PM',
  FrRe = 'FR_RE',
  FrRw = 'FR_RW',
  FrSc = 'FR_SC',
  FrSn = 'FR_SN',
  FrSy = 'FR_SY',
  FrTd = 'FR_TD',
  FrTg = 'FR_TG',
  FrTn = 'FR_TN',
  FrVu = 'FR_VU',
  FrWf = 'FR_WF',
  FrYt = 'FR_YT',
  Fur = 'FUR',
  FurIt = 'FUR_IT',
  Fy = 'FY',
  FyNl = 'FY_NL',
  Ga = 'GA',
  GaGb = 'GA_GB',
  GaIe = 'GA_IE',
  Gd = 'GD',
  GdGb = 'GD_GB',
  Gl = 'GL',
  GlEs = 'GL_ES',
  Gsw = 'GSW',
  GswCh = 'GSW_CH',
  GswFr = 'GSW_FR',
  GswLi = 'GSW_LI',
  Gu = 'GU',
  GuIn = 'GU_IN',
  Guz = 'GUZ',
  GuzKe = 'GUZ_KE',
  Gv = 'GV',
  GvIm = 'GV_IM',
  Ha = 'HA',
  HaGh = 'HA_GH',
  HaNe = 'HA_NE',
  HaNg = 'HA_NG',
  Haw = 'HAW',
  HawUs = 'HAW_US',
  He = 'HE',
  HeIl = 'HE_IL',
  Hi = 'HI',
  HiIn = 'HI_IN',
  Hr = 'HR',
  HrBa = 'HR_BA',
  HrHr = 'HR_HR',
  Hsb = 'HSB',
  HsbDe = 'HSB_DE',
  Hu = 'HU',
  HuHu = 'HU_HU',
  Hy = 'HY',
  HyAm = 'HY_AM',
  Ia = 'IA',
  Id = 'ID',
  IdId = 'ID_ID',
  Ig = 'IG',
  IgNg = 'IG_NG',
  Ii = 'II',
  IiCn = 'II_CN',
  Is = 'IS',
  IsIs = 'IS_IS',
  It = 'IT',
  ItCh = 'IT_CH',
  ItIt = 'IT_IT',
  ItSm = 'IT_SM',
  ItVa = 'IT_VA',
  Ja = 'JA',
  JaJp = 'JA_JP',
  Jgo = 'JGO',
  JgoCm = 'JGO_CM',
  Jmc = 'JMC',
  JmcTz = 'JMC_TZ',
  Jv = 'JV',
  JvId = 'JV_ID',
  Ka = 'KA',
  KaGe = 'KA_GE',
  Kab = 'KAB',
  KabDz = 'KAB_DZ',
  Kam = 'KAM',
  KamKe = 'KAM_KE',
  Kde = 'KDE',
  KdeTz = 'KDE_TZ',
  Kea = 'KEA',
  KeaCv = 'KEA_CV',
  Khq = 'KHQ',
  KhqMl = 'KHQ_ML',
  Ki = 'KI',
  KiKe = 'KI_KE',
  Kk = 'KK',
  KkKz = 'KK_KZ',
  Kkj = 'KKJ',
  KkjCm = 'KKJ_CM',
  Kl = 'KL',
  KlGl = 'KL_GL',
  Kln = 'KLN',
  KlnKe = 'KLN_KE',
  Km = 'KM',
  KmKh = 'KM_KH',
  Kn = 'KN',
  KnIn = 'KN_IN',
  Ko = 'KO',
  KoKp = 'KO_KP',
  KoKr = 'KO_KR',
  Kok = 'KOK',
  KokIn = 'KOK_IN',
  Ks = 'KS',
  KsArab = 'KS_ARAB',
  KsArabIn = 'KS_ARAB_IN',
  Ksb = 'KSB',
  KsbTz = 'KSB_TZ',
  Ksf = 'KSF',
  KsfCm = 'KSF_CM',
  Ksh = 'KSH',
  KshDe = 'KSH_DE',
  Ku = 'KU',
  KuTr = 'KU_TR',
  Kw = 'KW',
  KwGb = 'KW_GB',
  Ky = 'KY',
  KyKg = 'KY_KG',
  Lag = 'LAG',
  LagTz = 'LAG_TZ',
  Lb = 'LB',
  LbLu = 'LB_LU',
  Lg = 'LG',
  LgUg = 'LG_UG',
  Lkt = 'LKT',
  LktUs = 'LKT_US',
  Ln = 'LN',
  LnAo = 'LN_AO',
  LnCd = 'LN_CD',
  LnCf = 'LN_CF',
  LnCg = 'LN_CG',
  Lo = 'LO',
  LoLa = 'LO_LA',
  Lrc = 'LRC',
  LrcIq = 'LRC_IQ',
  LrcIr = 'LRC_IR',
  Lt = 'LT',
  LtLt = 'LT_LT',
  Lu = 'LU',
  LuCd = 'LU_CD',
  Luo = 'LUO',
  LuoKe = 'LUO_KE',
  Luy = 'LUY',
  LuyKe = 'LUY_KE',
  Lv = 'LV',
  LvLv = 'LV_LV',
  Mai = 'MAI',
  MaiIn = 'MAI_IN',
  Mas = 'MAS',
  MasKe = 'MAS_KE',
  MasTz = 'MAS_TZ',
  Mer = 'MER',
  MerKe = 'MER_KE',
  Mfe = 'MFE',
  MfeMu = 'MFE_MU',
  Mg = 'MG',
  MgMg = 'MG_MG',
  Mgh = 'MGH',
  MghMz = 'MGH_MZ',
  Mgo = 'MGO',
  MgoCm = 'MGO_CM',
  Mi = 'MI',
  MiNz = 'MI_NZ',
  Mk = 'MK',
  MkMk = 'MK_MK',
  Ml = 'ML',
  MlIn = 'ML_IN',
  Mn = 'MN',
  MnMn = 'MN_MN',
  Mni = 'MNI',
  MniBeng = 'MNI_BENG',
  MniBengIn = 'MNI_BENG_IN',
  Mr = 'MR',
  MrIn = 'MR_IN',
  Ms = 'MS',
  MsBn = 'MS_BN',
  MsId = 'MS_ID',
  MsMy = 'MS_MY',
  MsSg = 'MS_SG',
  Mt = 'MT',
  MtMt = 'MT_MT',
  Mua = 'MUA',
  MuaCm = 'MUA_CM',
  My = 'MY',
  MyMm = 'MY_MM',
  Mzn = 'MZN',
  MznIr = 'MZN_IR',
  Naq = 'NAQ',
  NaqNa = 'NAQ_NA',
  Nb = 'NB',
  NbNo = 'NB_NO',
  NbSj = 'NB_SJ',
  Nd = 'ND',
  NdZw = 'ND_ZW',
  Nds = 'NDS',
  NdsDe = 'NDS_DE',
  NdsNl = 'NDS_NL',
  Ne = 'NE',
  NeIn = 'NE_IN',
  NeNp = 'NE_NP',
  Nl = 'NL',
  NlAw = 'NL_AW',
  NlBe = 'NL_BE',
  NlBq = 'NL_BQ',
  NlCw = 'NL_CW',
  NlNl = 'NL_NL',
  NlSr = 'NL_SR',
  NlSx = 'NL_SX',
  Nmg = 'NMG',
  NmgCm = 'NMG_CM',
  Nn = 'NN',
  NnNo = 'NN_NO',
  Nnh = 'NNH',
  NnhCm = 'NNH_CM',
  Nus = 'NUS',
  NusSs = 'NUS_SS',
  Nyn = 'NYN',
  NynUg = 'NYN_UG',
  Om = 'OM',
  OmEt = 'OM_ET',
  OmKe = 'OM_KE',
  Or = 'OR',
  OrIn = 'OR_IN',
  Os = 'OS',
  OsGe = 'OS_GE',
  OsRu = 'OS_RU',
  Pa = 'PA',
  PaArab = 'PA_ARAB',
  PaArabPk = 'PA_ARAB_PK',
  PaGuru = 'PA_GURU',
  PaGuruIn = 'PA_GURU_IN',
  Pcm = 'PCM',
  PcmNg = 'PCM_NG',
  Pl = 'PL',
  PlPl = 'PL_PL',
  Prg = 'PRG',
  Ps = 'PS',
  PsAf = 'PS_AF',
  PsPk = 'PS_PK',
  Pt = 'PT',
  PtAo = 'PT_AO',
  PtBr = 'PT_BR',
  PtCh = 'PT_CH',
  PtCv = 'PT_CV',
  PtGq = 'PT_GQ',
  PtGw = 'PT_GW',
  PtLu = 'PT_LU',
  PtMo = 'PT_MO',
  PtMz = 'PT_MZ',
  PtPt = 'PT_PT',
  PtSt = 'PT_ST',
  PtTl = 'PT_TL',
  Qu = 'QU',
  QuBo = 'QU_BO',
  QuEc = 'QU_EC',
  QuPe = 'QU_PE',
  Rm = 'RM',
  RmCh = 'RM_CH',
  Rn = 'RN',
  RnBi = 'RN_BI',
  Ro = 'RO',
  RoMd = 'RO_MD',
  RoRo = 'RO_RO',
  Rof = 'ROF',
  RofTz = 'ROF_TZ',
  Ru = 'RU',
  RuBy = 'RU_BY',
  RuKg = 'RU_KG',
  RuKz = 'RU_KZ',
  RuMd = 'RU_MD',
  RuRu = 'RU_RU',
  RuUa = 'RU_UA',
  Rw = 'RW',
  RwRw = 'RW_RW',
  Rwk = 'RWK',
  RwkTz = 'RWK_TZ',
  Sah = 'SAH',
  SahRu = 'SAH_RU',
  Saq = 'SAQ',
  SaqKe = 'SAQ_KE',
  Sat = 'SAT',
  SatOlck = 'SAT_OLCK',
  SatOlckIn = 'SAT_OLCK_IN',
  Sbp = 'SBP',
  SbpTz = 'SBP_TZ',
  Sd = 'SD',
  SdArab = 'SD_ARAB',
  SdArabPk = 'SD_ARAB_PK',
  SdDeva = 'SD_DEVA',
  SdDevaIn = 'SD_DEVA_IN',
  Se = 'SE',
  SeFi = 'SE_FI',
  SeNo = 'SE_NO',
  SeSe = 'SE_SE',
  Seh = 'SEH',
  SehMz = 'SEH_MZ',
  Ses = 'SES',
  SesMl = 'SES_ML',
  Sg = 'SG',
  SgCf = 'SG_CF',
  Shi = 'SHI',
  ShiLatn = 'SHI_LATN',
  ShiLatnMa = 'SHI_LATN_MA',
  ShiTfng = 'SHI_TFNG',
  ShiTfngMa = 'SHI_TFNG_MA',
  Si = 'SI',
  SiLk = 'SI_LK',
  Sk = 'SK',
  SkSk = 'SK_SK',
  Sl = 'SL',
  SlSi = 'SL_SI',
  Smn = 'SMN',
  SmnFi = 'SMN_FI',
  Sn = 'SN',
  SnZw = 'SN_ZW',
  So = 'SO',
  SoDj = 'SO_DJ',
  SoEt = 'SO_ET',
  SoKe = 'SO_KE',
  SoSo = 'SO_SO',
  Sq = 'SQ',
  SqAl = 'SQ_AL',
  SqMk = 'SQ_MK',
  SqXk = 'SQ_XK',
  Sr = 'SR',
  SrCyrl = 'SR_CYRL',
  SrCyrlBa = 'SR_CYRL_BA',
  SrCyrlMe = 'SR_CYRL_ME',
  SrCyrlRs = 'SR_CYRL_RS',
  SrCyrlXk = 'SR_CYRL_XK',
  SrLatn = 'SR_LATN',
  SrLatnBa = 'SR_LATN_BA',
  SrLatnMe = 'SR_LATN_ME',
  SrLatnRs = 'SR_LATN_RS',
  SrLatnXk = 'SR_LATN_XK',
  Su = 'SU',
  SuLatn = 'SU_LATN',
  SuLatnId = 'SU_LATN_ID',
  Sv = 'SV',
  SvAx = 'SV_AX',
  SvFi = 'SV_FI',
  SvSe = 'SV_SE',
  Sw = 'SW',
  SwCd = 'SW_CD',
  SwKe = 'SW_KE',
  SwTz = 'SW_TZ',
  SwUg = 'SW_UG',
  Ta = 'TA',
  TaIn = 'TA_IN',
  TaLk = 'TA_LK',
  TaMy = 'TA_MY',
  TaSg = 'TA_SG',
  Te = 'TE',
  TeIn = 'TE_IN',
  Teo = 'TEO',
  TeoKe = 'TEO_KE',
  TeoUg = 'TEO_UG',
  Tg = 'TG',
  TgTj = 'TG_TJ',
  Th = 'TH',
  ThTh = 'TH_TH',
  Ti = 'TI',
  TiEr = 'TI_ER',
  TiEt = 'TI_ET',
  Tk = 'TK',
  TkTm = 'TK_TM',
  To = 'TO',
  ToTo = 'TO_TO',
  Tr = 'TR',
  TrCy = 'TR_CY',
  TrTr = 'TR_TR',
  Tt = 'TT',
  TtRu = 'TT_RU',
  Twq = 'TWQ',
  TwqNe = 'TWQ_NE',
  Tzm = 'TZM',
  TzmMa = 'TZM_MA',
  Ug = 'UG',
  UgCn = 'UG_CN',
  Uk = 'UK',
  UkUa = 'UK_UA',
  Ur = 'UR',
  UrIn = 'UR_IN',
  UrPk = 'UR_PK',
  Uz = 'UZ',
  UzArab = 'UZ_ARAB',
  UzArabAf = 'UZ_ARAB_AF',
  UzCyrl = 'UZ_CYRL',
  UzCyrlUz = 'UZ_CYRL_UZ',
  UzLatn = 'UZ_LATN',
  UzLatnUz = 'UZ_LATN_UZ',
  Vai = 'VAI',
  VaiLatn = 'VAI_LATN',
  VaiLatnLr = 'VAI_LATN_LR',
  VaiVaii = 'VAI_VAII',
  VaiVaiiLr = 'VAI_VAII_LR',
  Vi = 'VI',
  ViVn = 'VI_VN',
  Vo = 'VO',
  Vun = 'VUN',
  VunTz = 'VUN_TZ',
  Wae = 'WAE',
  WaeCh = 'WAE_CH',
  Wo = 'WO',
  WoSn = 'WO_SN',
  Xh = 'XH',
  XhZa = 'XH_ZA',
  Xog = 'XOG',
  XogUg = 'XOG_UG',
  Yav = 'YAV',
  YavCm = 'YAV_CM',
  Yi = 'YI',
  Yo = 'YO',
  YoBj = 'YO_BJ',
  YoNg = 'YO_NG',
  Yue = 'YUE',
  YueHans = 'YUE_HANS',
  YueHansCn = 'YUE_HANS_CN',
  YueHant = 'YUE_HANT',
  YueHantHk = 'YUE_HANT_HK',
  Zgh = 'ZGH',
  ZghMa = 'ZGH_MA',
  Zh = 'ZH',
  ZhHans = 'ZH_HANS',
  ZhHansCn = 'ZH_HANS_CN',
  ZhHansHk = 'ZH_HANS_HK',
  ZhHansMo = 'ZH_HANS_MO',
  ZhHansSg = 'ZH_HANS_SG',
  ZhHant = 'ZH_HANT',
  ZhHantHk = 'ZH_HANT_HK',
  ZhHantMo = 'ZH_HANT_MO',
  ZhHantTw = 'ZH_HANT_TW',
  Zu = 'ZU',
  ZuZa = 'ZU_ZA',
}

export type LanguageDisplay = {
  __typename?: 'LanguageDisplay'
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum
  /** Full name of the language. */
  language: Scalars['String']
}

export type LimitInfo = {
  __typename?: 'LimitInfo'
  /** Defines the current resource usage. */
  currentUsage: Limits
  /** Defines the allowed maximum resource usage, null means unlimited. */
  allowedUsage: Limits
}

export type Limits = {
  __typename?: 'Limits'
  channels?: Maybe<Scalars['Int']>
  orders?: Maybe<Scalars['Int']>
  productVariants?: Maybe<Scalars['Int']>
  staffUsers?: Maybe<Scalars['Int']>
  warehouses?: Maybe<Scalars['Int']>
}

/** The manifest definition. */
export type Manifest = {
  __typename?: 'Manifest'
  identifier: Scalars['String']
  version: Scalars['String']
  name: Scalars['String']
  about?: Maybe<Scalars['String']>
  permissions?: Maybe<Array<Maybe<Permission>>>
  appUrl?: Maybe<Scalars['String']>
  configurationUrl?: Maybe<Scalars['String']>
  tokenTargetUrl?: Maybe<Scalars['String']>
  dataPrivacy?: Maybe<Scalars['String']>
  dataPrivacyUrl?: Maybe<Scalars['String']>
  homepageUrl?: Maybe<Scalars['String']>
  supportUrl?: Maybe<Scalars['String']>
  extensions: Array<AppManifestExtension>
}

export type Margin = {
  __typename?: 'Margin'
  start?: Maybe<Scalars['Int']>
  stop?: Maybe<Scalars['Int']>
}

/** An enumeration. */
export enum MeasurementUnitsEnum {
  Cm = 'CM',
  M = 'M',
  Km = 'KM',
  Ft = 'FT',
  Yd = 'YD',
  Inch = 'INCH',
  SqCm = 'SQ_CM',
  SqM = 'SQ_M',
  SqKm = 'SQ_KM',
  SqFt = 'SQ_FT',
  SqYd = 'SQ_YD',
  SqInch = 'SQ_INCH',
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicMeter = 'CUBIC_METER',
  Liter = 'LITER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicYard = 'CUBIC_YARD',
  Qt = 'QT',
  Pint = 'PINT',
  FlOz = 'FL_OZ',
  AcreIn = 'ACRE_IN',
  AcreFt = 'ACRE_FT',
  G = 'G',
  Lb = 'LB',
  Oz = 'OZ',
  Kg = 'KG',
  Tonne = 'TONNE',
}

/** Represents a single menu - an object that is used to help navigate through the store. */
export type Menu = Node &
  ObjectWithMetadata & {
    __typename?: 'Menu'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    items?: Maybe<Array<Maybe<MenuItem>>>
  }

/** Deletes menus. */
export type MenuBulkDelete = {
  __typename?: 'MenuBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
}

export type MenuCountableConnection = {
  __typename?: 'MenuCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<MenuCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type MenuCountableEdge = {
  __typename?: 'MenuCountableEdge'
  /** The item at the end of the edge. */
  node: Menu
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new Menu. */
export type MenuCreate = {
  __typename?: 'MenuCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
  menu?: Maybe<Menu>
}

export type MenuCreateInput = {
  /** Name of the menu. */
  name: Scalars['String']
  /** Slug of the menu. Will be generated if not provided. */
  slug?: Maybe<Scalars['String']>
  /** List of menu items. */
  items?: Maybe<Array<Maybe<MenuItemInput>>>
}

/** Deletes a menu. */
export type MenuDelete = {
  __typename?: 'MenuDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
  menu?: Maybe<Menu>
}

export type MenuError = {
  __typename?: 'MenuError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: MenuErrorCode
}

/** An enumeration. */
export enum MenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE',
}

export type MenuFilterInput = {
  search?: Maybe<Scalars['String']>
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
}

export type MenuInput = {
  /** Name of the menu. */
  name?: Maybe<Scalars['String']>
  /** Slug of the menu. */
  slug?: Maybe<Scalars['String']>
}

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItem = Node &
  ObjectWithMetadata & {
    __typename?: 'MenuItem'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    menu: Menu
    parent?: Maybe<MenuItem>
    category?: Maybe<Category>
    collection?: Maybe<Collection>
    page?: Maybe<Page>
    level: Scalars['Int']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    children?: Maybe<Array<Maybe<MenuItem>>>
    /** URL to the menu item. */
    url?: Maybe<Scalars['String']>
    /** Returns translated menu item fields for the given language code. */
    translation?: Maybe<MenuItemTranslation>
  }

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export type MenuItemTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Deletes menu items. */
export type MenuItemBulkDelete = {
  __typename?: 'MenuItemBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
}

export type MenuItemCountableConnection = {
  __typename?: 'MenuItemCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<MenuItemCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type MenuItemCountableEdge = {
  __typename?: 'MenuItemCountableEdge'
  /** The item at the end of the edge. */
  node: MenuItem
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new menu item. */
export type MenuItemCreate = {
  __typename?: 'MenuItemCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
  menuItem?: Maybe<MenuItem>
}

export type MenuItemCreateInput = {
  /** Name of the menu item. */
  name: Scalars['String']
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>
  /** Menu to which item belongs. */
  menu: Scalars['ID']
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: Maybe<Scalars['ID']>
}

/** Deletes a menu item. */
export type MenuItemDelete = {
  __typename?: 'MenuItemDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
  menuItem?: Maybe<MenuItem>
}

export type MenuItemFilterInput = {
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
}

export type MenuItemInput = {
  /** Name of the menu item. */
  name?: Maybe<Scalars['String']>
  /** URL of the pointed item. */
  url?: Maybe<Scalars['String']>
  /** Category to which item points. */
  category?: Maybe<Scalars['ID']>
  /** Collection to which item points. */
  collection?: Maybe<Scalars['ID']>
  /** Page to which item points. */
  page?: Maybe<Scalars['ID']>
}

/** Moves items of menus. */
export type MenuItemMove = {
  __typename?: 'MenuItemMove'
  /** Assigned menu to move within. */
  menu?: Maybe<Menu>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
}

export type MenuItemMoveInput = {
  /** The menu item ID to move. */
  itemId: Scalars['ID']
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parentId?: Maybe<Scalars['ID']>
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>
}

export type MenuItemSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField
}

export type MenuItemTranslatableContent = Node & {
  __typename?: 'MenuItemTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** Returns translated menu item fields for the given language code. */
  translation?: Maybe<MenuItemTranslation>
  /**
   * Represents a single item of the related menu. Can store categories, collection or pages.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  menuItem?: Maybe<MenuItem>
}

export type MenuItemTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a menu item. */
export type MenuItemTranslate = {
  __typename?: 'MenuItemTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  menuItem?: Maybe<MenuItem>
}

export type MenuItemTranslation = Node & {
  __typename?: 'MenuItemTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** Translation language. */
  language: LanguageDisplay
}

/** Updates a menu item. */
export type MenuItemUpdate = {
  __typename?: 'MenuItemUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
  menuItem?: Maybe<MenuItem>
}

export enum MenuItemsSortField {
  /** Sort menu items by name. */
  Name = 'NAME',
}

export enum MenuSortField {
  /** Sort menus by name. */
  Name = 'NAME',
  /** Sort menus by items count. */
  ItemsCount = 'ITEMS_COUNT',
}

export type MenuSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort menus by the selected field. */
  field: MenuSortField
}

/** Updates a menu. */
export type MenuUpdate = {
  __typename?: 'MenuUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  menuErrors: Array<MenuError>
  errors: Array<MenuError>
  menu?: Maybe<Menu>
}

export type MetadataError = {
  __typename?: 'MetadataError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: MetadataErrorCode
}

/** An enumeration. */
export enum MetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type MetadataFilter = {
  /** Key of a metadata item. */
  key: Scalars['String']
  /** Value of a metadata item. */
  value?: Maybe<Scalars['String']>
}

export type MetadataInput = {
  /** Key of a metadata item. */
  key: Scalars['String']
  /** Value of a metadata item. */
  value: Scalars['String']
}

export type MetadataItem = {
  __typename?: 'MetadataItem'
  /** Key of a metadata item. */
  key: Scalars['String']
  /** Value of a metadata item. */
  value: Scalars['String']
}

/** Represents amount of money in specific currency. */
export type Money = {
  __typename?: 'Money'
  /** Currency code. */
  currency: Scalars['String']
  /** Amount of money. */
  amount: Scalars['Float']
}

export type MoneyInput = {
  /** Currency code. */
  currency: Scalars['String']
  /** Amount of money. */
  amount: Scalars['PositiveDecimal']
}

/** Represents a range of amounts of money. */
export type MoneyRange = {
  __typename?: 'MoneyRange'
  /** Lower bound of a price range. */
  start?: Maybe<Money>
  /** Upper bound of a price range. */
  stop?: Maybe<Money>
}

export type MoveProductInput = {
  /** The ID of the product to move. */
  productId: Scalars['ID']
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Creates a new webhook subscription. */
  webhookCreate?: Maybe<WebhookCreate>
  /** Deletes a webhook subscription. */
  webhookDelete?: Maybe<WebhookDelete>
  /** Updates a webhook subscription. */
  webhookUpdate?: Maybe<WebhookUpdate>
  /** Creates new warehouse. */
  createWarehouse?: Maybe<WarehouseCreate>
  /** Updates given warehouse. */
  updateWarehouse?: Maybe<WarehouseUpdate>
  /** Deletes selected warehouse. */
  deleteWarehouse?: Maybe<WarehouseDelete>
  /** Add shipping zone to given warehouse. */
  assignWarehouseShippingZone?: Maybe<WarehouseShippingZoneAssign>
  /** Remove shipping zone from given warehouse. */
  unassignWarehouseShippingZone?: Maybe<WarehouseShippingZoneUnassign>
  /** Creates a new staff notification recipient. */
  staffNotificationRecipientCreate?: Maybe<StaffNotificationRecipientCreate>
  /** Updates a staff notification recipient. */
  staffNotificationRecipientUpdate?: Maybe<StaffNotificationRecipientUpdate>
  /** Delete staff notification recipient. */
  staffNotificationRecipientDelete?: Maybe<StaffNotificationRecipientDelete>
  /** Updates site domain of the shop. */
  shopDomainUpdate?: Maybe<ShopDomainUpdate>
  /** Updates shop settings. */
  shopSettingsUpdate?: Maybe<ShopSettingsUpdate>
  /** Fetch tax rates. */
  shopFetchTaxRates?: Maybe<ShopFetchTaxRates>
  /** Creates/updates translations for shop settings. */
  shopSettingsTranslate?: Maybe<ShopSettingsTranslate>
  /** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
  shopAddressUpdate?: Maybe<ShopAddressUpdate>
  /** Update shop order settings. */
  orderSettingsUpdate?: Maybe<OrderSettingsUpdate>
  /** Update gift card settings. */
  giftCardSettingsUpdate?: Maybe<GiftCardSettingsUpdate>
  /** Manage shipping method's availability in channels. */
  shippingMethodChannelListingUpdate?: Maybe<ShippingMethodChannelListingUpdate>
  /** Creates a new shipping price. */
  shippingPriceCreate?: Maybe<ShippingPriceCreate>
  /** Deletes a shipping price. */
  shippingPriceDelete?: Maybe<ShippingPriceDelete>
  /** Deletes shipping prices. */
  shippingPriceBulkDelete?: Maybe<ShippingPriceBulkDelete>
  /** Updates a new shipping price. */
  shippingPriceUpdate?: Maybe<ShippingPriceUpdate>
  /** Creates/updates translations for a shipping method. */
  shippingPriceTranslate?: Maybe<ShippingPriceTranslate>
  /** Exclude products from shipping price. */
  shippingPriceExcludeProducts?: Maybe<ShippingPriceExcludeProducts>
  /** Remove product from excluded list for shipping price. */
  shippingPriceRemoveProductFromExclude?: Maybe<ShippingPriceRemoveProductFromExclude>
  /** Creates a new shipping zone. */
  shippingZoneCreate?: Maybe<ShippingZoneCreate>
  /** Deletes a shipping zone. */
  shippingZoneDelete?: Maybe<ShippingZoneDelete>
  /** Deletes shipping zones. */
  shippingZoneBulkDelete?: Maybe<ShippingZoneBulkDelete>
  /** Updates a new shipping zone. */
  shippingZoneUpdate?: Maybe<ShippingZoneUpdate>
  /** Assign attributes to a given product type. */
  productAttributeAssign?: Maybe<ProductAttributeAssign>
  /** New in Saleor 3.1. Update attributes assigned to product variant for given product type. */
  productAttributeAssignmentUpdate?: Maybe<ProductAttributeAssignmentUpdate>
  /** Un-assign attributes from a given product type. */
  productAttributeUnassign?: Maybe<ProductAttributeUnassign>
  /** Creates a new category. */
  categoryCreate?: Maybe<CategoryCreate>
  /** Deletes a category. */
  categoryDelete?: Maybe<CategoryDelete>
  /** Deletes categories. */
  categoryBulkDelete?: Maybe<CategoryBulkDelete>
  /** Updates a category. */
  categoryUpdate?: Maybe<CategoryUpdate>
  /** Creates/updates translations for a category. */
  categoryTranslate?: Maybe<CategoryTranslate>
  /** Adds products to a collection. */
  collectionAddProducts?: Maybe<CollectionAddProducts>
  /** Creates a new collection. */
  collectionCreate?: Maybe<CollectionCreate>
  /** Deletes a collection. */
  collectionDelete?: Maybe<CollectionDelete>
  /** Reorder the products of a collection. */
  collectionReorderProducts?: Maybe<CollectionReorderProducts>
  /** Deletes collections. */
  collectionBulkDelete?: Maybe<CollectionBulkDelete>
  /** Remove products from a collection. */
  collectionRemoveProducts?: Maybe<CollectionRemoveProducts>
  /** Updates a collection. */
  collectionUpdate?: Maybe<CollectionUpdate>
  /** Creates/updates translations for a collection. */
  collectionTranslate?: Maybe<CollectionTranslate>
  /** Manage collection's availability in channels. */
  collectionChannelListingUpdate?: Maybe<CollectionChannelListingUpdate>
  /** Creates a new product. */
  productCreate?: Maybe<ProductCreate>
  /** Deletes a product. */
  productDelete?: Maybe<ProductDelete>
  /** Deletes products. */
  productBulkDelete?: Maybe<ProductBulkDelete>
  /** Updates an existing product. */
  productUpdate?: Maybe<ProductUpdate>
  /** Creates/updates translations for a product. */
  productTranslate?: Maybe<ProductTranslate>
  /** Manage product's availability in channels. */
  productChannelListingUpdate?: Maybe<ProductChannelListingUpdate>
  /** Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productMediaCreate?: Maybe<ProductMediaCreate>
  /** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
  productVariantReorder?: Maybe<ProductVariantReorder>
  /** Deletes a product media. */
  productMediaDelete?: Maybe<ProductMediaDelete>
  /** Deletes product media. */
  productMediaBulkDelete?: Maybe<ProductMediaBulkDelete>
  /** Changes ordering of the product media. */
  productMediaReorder?: Maybe<ProductMediaReorder>
  /** Updates a product media. */
  productMediaUpdate?: Maybe<ProductMediaUpdate>
  /** Creates a new product type. */
  productTypeCreate?: Maybe<ProductTypeCreate>
  /** Deletes a product type. */
  productTypeDelete?: Maybe<ProductTypeDelete>
  /** Deletes product types. */
  productTypeBulkDelete?: Maybe<ProductTypeBulkDelete>
  /** Updates an existing product type. */
  productTypeUpdate?: Maybe<ProductTypeUpdate>
  /** Reorder the attributes of a product type. */
  productTypeReorderAttributes?: Maybe<ProductTypeReorderAttributes>
  /** Reorder product attribute values. */
  productReorderAttributeValues?: Maybe<ProductReorderAttributeValues>
  /** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  digitalContentCreate?: Maybe<DigitalContentCreate>
  /** Remove digital content assigned to given variant. */
  digitalContentDelete?: Maybe<DigitalContentDelete>
  /** Update digital content. */
  digitalContentUpdate?: Maybe<DigitalContentUpdate>
  /** Generate new URL to digital content. */
  digitalContentUrlCreate?: Maybe<DigitalContentUrlCreate>
  /** Creates a new variant for a product. */
  productVariantCreate?: Maybe<ProductVariantCreate>
  /** Deletes a product variant. */
  productVariantDelete?: Maybe<ProductVariantDelete>
  /** Creates product variants for a given product. */
  productVariantBulkCreate?: Maybe<ProductVariantBulkCreate>
  /** Deletes product variants. */
  productVariantBulkDelete?: Maybe<ProductVariantBulkDelete>
  /** Creates stocks for product variant. */
  productVariantStocksCreate?: Maybe<ProductVariantStocksCreate>
  /** Delete stocks from product variant. */
  productVariantStocksDelete?: Maybe<ProductVariantStocksDelete>
  /** Update stocks for product variant. */
  productVariantStocksUpdate?: Maybe<ProductVariantStocksUpdate>
  /** Updates an existing variant for product. */
  productVariantUpdate?: Maybe<ProductVariantUpdate>
  /** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
  productVariantSetDefault?: Maybe<ProductVariantSetDefault>
  /** Creates/updates translations for a product variant. */
  productVariantTranslate?: Maybe<ProductVariantTranslate>
  /** Manage product variant prices in channels. */
  productVariantChannelListingUpdate?: Maybe<ProductVariantChannelListingUpdate>
  /** Reorder product variant attribute values. */
  productVariantReorderAttributeValues?: Maybe<ProductVariantReorderAttributeValues>
  /** New in Saleor 3.1. Deactivates product variant preorder.It changes all preorder allocation into regular allocation. */
  productVariantPreorderDeactivate?: Maybe<ProductVariantPreorderDeactivate>
  /** Assign an media to a product variant. */
  variantMediaAssign?: Maybe<VariantMediaAssign>
  /** Unassign an media from a product variant. */
  variantMediaUnassign?: Maybe<VariantMediaUnassign>
  /** Captures the authorized payment amount. */
  paymentCapture?: Maybe<PaymentCapture>
  /** Refunds the captured payment amount. */
  paymentRefund?: Maybe<PaymentRefund>
  /** Voids the authorized payment. */
  paymentVoid?: Maybe<PaymentVoid>
  /** Initializes payment process when it is required by gateway. */
  paymentInitialize?: Maybe<PaymentInitialize>
  /** Check payment balance. */
  paymentCheckBalance?: Maybe<PaymentCheckBalance>
  /** Creates a new page. */
  pageCreate?: Maybe<PageCreate>
  /** Deletes a page. */
  pageDelete?: Maybe<PageDelete>
  /** Deletes pages. */
  pageBulkDelete?: Maybe<PageBulkDelete>
  /** Publish pages. */
  pageBulkPublish?: Maybe<PageBulkPublish>
  /** Updates an existing page. */
  pageUpdate?: Maybe<PageUpdate>
  /** Creates/updates translations for a page. */
  pageTranslate?: Maybe<PageTranslate>
  /** Create a new page type. */
  pageTypeCreate?: Maybe<PageTypeCreate>
  /** Update page type. */
  pageTypeUpdate?: Maybe<PageTypeUpdate>
  /** Delete a page type. */
  pageTypeDelete?: Maybe<PageTypeDelete>
  /** Delete page types. */
  pageTypeBulkDelete?: Maybe<PageTypeBulkDelete>
  /** Assign attributes to a given page type. */
  pageAttributeAssign?: Maybe<PageAttributeAssign>
  /** Unassign attributes from a given page type. */
  pageAttributeUnassign?: Maybe<PageAttributeUnassign>
  /** Reorder the attributes of a page type. */
  pageTypeReorderAttributes?: Maybe<PageTypeReorderAttributes>
  /** Reorder page attribute values. */
  pageReorderAttributeValues?: Maybe<PageReorderAttributeValues>
  /** Completes creating an order. */
  draftOrderComplete?: Maybe<DraftOrderComplete>
  /** Creates a new draft order. */
  draftOrderCreate?: Maybe<DraftOrderCreate>
  /** Deletes a draft order. */
  draftOrderDelete?: Maybe<DraftOrderDelete>
  /** Deletes draft orders. */
  draftOrderBulkDelete?: Maybe<DraftOrderBulkDelete>
  /**
   * Deletes order lines.
   * @deprecated This field will be removed in Saleor 4.0.
   */
  draftOrderLinesBulkDelete?: Maybe<DraftOrderLinesBulkDelete>
  /** Updates a draft order. */
  draftOrderUpdate?: Maybe<DraftOrderUpdate>
  /** Adds note to the order. */
  orderAddNote?: Maybe<OrderAddNote>
  /** Cancel an order. */
  orderCancel?: Maybe<OrderCancel>
  /** Capture an order. */
  orderCapture?: Maybe<OrderCapture>
  /** Confirms an unconfirmed order by changing status to unfulfilled. */
  orderConfirm?: Maybe<OrderConfirm>
  /** Creates new fulfillments for an order. */
  orderFulfill?: Maybe<OrderFulfill>
  /** Cancels existing fulfillment and optionally restocks items. */
  orderFulfillmentCancel?: Maybe<FulfillmentCancel>
  /** New in Saleor 3.1. Approve existing fulfillment. */
  orderFulfillmentApprove?: Maybe<FulfillmentApprove>
  /** Updates a fulfillment for an order. */
  orderFulfillmentUpdateTracking?: Maybe<FulfillmentUpdateTracking>
  /** Refund products. */
  orderFulfillmentRefundProducts?: Maybe<FulfillmentRefundProducts>
  /** Return products. */
  orderFulfillmentReturnProducts?: Maybe<FulfillmentReturnProducts>
  /** Create order lines for an order. */
  orderLinesCreate?: Maybe<OrderLinesCreate>
  /** Deletes an order line from an order. */
  orderLineDelete?: Maybe<OrderLineDelete>
  /** Updates an order line of an order. */
  orderLineUpdate?: Maybe<OrderLineUpdate>
  /** Adds discount to the order. */
  orderDiscountAdd?: Maybe<OrderDiscountAdd>
  /** Update discount for the order. */
  orderDiscountUpdate?: Maybe<OrderDiscountUpdate>
  /** Remove discount from the order. */
  orderDiscountDelete?: Maybe<OrderDiscountDelete>
  /** Update discount for the order line. */
  orderLineDiscountUpdate?: Maybe<OrderLineDiscountUpdate>
  /** Remove discount applied to the order line. */
  orderLineDiscountRemove?: Maybe<OrderLineDiscountRemove>
  /** Mark order as manually paid. */
  orderMarkAsPaid?: Maybe<OrderMarkAsPaid>
  /** Refund an order. */
  orderRefund?: Maybe<OrderRefund>
  /** Updates an order. */
  orderUpdate?: Maybe<OrderUpdate>
  /** Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed. */
  orderUpdateShipping?: Maybe<OrderUpdateShipping>
  /** Void an order. */
  orderVoid?: Maybe<OrderVoid>
  /** Cancels orders. */
  orderBulkCancel?: Maybe<OrderBulkCancel>
  /** Delete metadata of an object. */
  deleteMetadata?: Maybe<DeleteMetadata>
  /** Delete object's private metadata. */
  deletePrivateMetadata?: Maybe<DeletePrivateMetadata>
  /** Updates metadata of an object. */
  updateMetadata?: Maybe<UpdateMetadata>
  /** Updates private metadata of an object. */
  updatePrivateMetadata?: Maybe<UpdatePrivateMetadata>
  /** Assigns storefront's navigation menus. */
  assignNavigation?: Maybe<AssignNavigation>
  /** Creates a new Menu. */
  menuCreate?: Maybe<MenuCreate>
  /** Deletes a menu. */
  menuDelete?: Maybe<MenuDelete>
  /** Deletes menus. */
  menuBulkDelete?: Maybe<MenuBulkDelete>
  /** Updates a menu. */
  menuUpdate?: Maybe<MenuUpdate>
  /** Creates a new menu item. */
  menuItemCreate?: Maybe<MenuItemCreate>
  /** Deletes a menu item. */
  menuItemDelete?: Maybe<MenuItemDelete>
  /** Deletes menu items. */
  menuItemBulkDelete?: Maybe<MenuItemBulkDelete>
  /** Updates a menu item. */
  menuItemUpdate?: Maybe<MenuItemUpdate>
  /** Creates/updates translations for a menu item. */
  menuItemTranslate?: Maybe<MenuItemTranslate>
  /** Moves items of menus. */
  menuItemMove?: Maybe<MenuItemMove>
  /** Request an invoice for the order using plugin. */
  invoiceRequest?: Maybe<InvoiceRequest>
  /** Requests deletion of an invoice. */
  invoiceRequestDelete?: Maybe<InvoiceRequestDelete>
  /** Creates a ready to send invoice. */
  invoiceCreate?: Maybe<InvoiceCreate>
  /** Deletes an invoice. */
  invoiceDelete?: Maybe<InvoiceDelete>
  /** Updates an invoice. */
  invoiceUpdate?: Maybe<InvoiceUpdate>
  /** Send an invoice notification to the customer. */
  invoiceSendNotification?: Maybe<InvoiceSendNotification>
  /** Activate a gift card. */
  giftCardActivate?: Maybe<GiftCardActivate>
  /** Creates a new gift card. */
  giftCardCreate?: Maybe<GiftCardCreate>
  /** New in Saleor 3.1. Delete gift card. */
  giftCardDelete?: Maybe<GiftCardDelete>
  /** Deactivate a gift card. */
  giftCardDeactivate?: Maybe<GiftCardDeactivate>
  /** Update a gift card. */
  giftCardUpdate?: Maybe<GiftCardUpdate>
  /** New in Saleor 3.1. Resend a gift card. */
  giftCardResend?: Maybe<GiftCardResend>
  /** New in Saleor 3.1. Adds note to the gift card. */
  giftCardAddNote?: Maybe<GiftCardAddNote>
  /** New in Saleor 3.1. Delete gift cards. */
  giftCardBulkDelete?: Maybe<GiftCardBulkDelete>
  /** New in Saleor 3.1. Activate gift cards. */
  giftCardBulkActivate?: Maybe<GiftCardBulkActivate>
  /** New in Saleor 3.1. Deactivate gift cards. */
  giftCardBulkDeactivate?: Maybe<GiftCardBulkDeactivate>
  /** Update plugin configuration. */
  pluginUpdate?: Maybe<PluginUpdate>
  /** New in Saleor 3.1. Trigger sending a notification with the notify plugin method. Serializes nodes provided as ids parameter and includes this data in the notification payload. */
  externalNotificationTrigger?: Maybe<ExternalNotificationTrigger>
  /** Creates a new sale. */
  saleCreate?: Maybe<SaleCreate>
  /** Deletes a sale. */
  saleDelete?: Maybe<SaleDelete>
  /** Deletes sales. */
  saleBulkDelete?: Maybe<SaleBulkDelete>
  /** Updates a sale. */
  saleUpdate?: Maybe<SaleUpdate>
  /** Adds products, categories, collections to a voucher. */
  saleCataloguesAdd?: Maybe<SaleAddCatalogues>
  /** Removes products, categories, collections from a sale. */
  saleCataloguesRemove?: Maybe<SaleRemoveCatalogues>
  /** Creates/updates translations for a sale. */
  saleTranslate?: Maybe<SaleTranslate>
  /** Manage sale's availability in channels. */
  saleChannelListingUpdate?: Maybe<SaleChannelListingUpdate>
  /** Creates a new voucher. */
  voucherCreate?: Maybe<VoucherCreate>
  /** Deletes a voucher. */
  voucherDelete?: Maybe<VoucherDelete>
  /** Deletes vouchers. */
  voucherBulkDelete?: Maybe<VoucherBulkDelete>
  /** Updates a voucher. */
  voucherUpdate?: Maybe<VoucherUpdate>
  /** Adds products, categories, collections to a voucher. */
  voucherCataloguesAdd?: Maybe<VoucherAddCatalogues>
  /** Removes products, categories, collections from a voucher. */
  voucherCataloguesRemove?: Maybe<VoucherRemoveCatalogues>
  /** Creates/updates translations for a voucher. */
  voucherTranslate?: Maybe<VoucherTranslate>
  /** Manage voucher's availability in channels. */
  voucherChannelListingUpdate?: Maybe<VoucherChannelListingUpdate>
  /** Export products to csv file. */
  exportProducts?: Maybe<ExportProducts>
  /** Upload a file. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  fileUpload?: Maybe<FileUpload>
  /** Adds a gift card or a voucher to a checkout. */
  checkoutAddPromoCode?: Maybe<CheckoutAddPromoCode>
  /** Update billing address in the existing checkout. */
  checkoutBillingAddressUpdate?: Maybe<CheckoutBillingAddressUpdate>
  /** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  checkoutComplete?: Maybe<CheckoutComplete>
  /** Create a new checkout. */
  checkoutCreate?: Maybe<CheckoutCreate>
  /** Sets the customer as the owner of the checkout. */
  checkoutCustomerAttach?: Maybe<CheckoutCustomerAttach>
  /** Removes the user assigned as the owner of the checkout. */
  checkoutCustomerDetach?: Maybe<CheckoutCustomerDetach>
  /** Updates email address in the existing checkout object. */
  checkoutEmailUpdate?: Maybe<CheckoutEmailUpdate>
  /**
   * Deletes a CheckoutLine.
   * @deprecated DEPRECATED: Will be removed in Saleor 4.0. Use `checkoutLinesDelete` instead.
   */
  checkoutLineDelete?: Maybe<CheckoutLineDelete>
  /** Deletes checkout lines. */
  checkoutLinesDelete?: Maybe<CheckoutLinesDelete>
  /** Adds a checkout line to the existing checkout.If line was already in checkout, its quantity will be increased. */
  checkoutLinesAdd?: Maybe<CheckoutLinesAdd>
  /** Updates checkout line in the existing checkout. */
  checkoutLinesUpdate?: Maybe<CheckoutLinesUpdate>
  /** Remove a gift card or a voucher from a checkout. */
  checkoutRemovePromoCode?: Maybe<CheckoutRemovePromoCode>
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate?: Maybe<CheckoutPaymentCreate>
  /** Update shipping address in the existing checkout. */
  checkoutShippingAddressUpdate?: Maybe<CheckoutShippingAddressUpdate>
  /**
   * Updates the shipping address of the checkout.
   * @deprecated This field will be removed in Saleor 4.0. Use `checkoutDeliveryMethodUpdate` instead.
   */
  checkoutShippingMethodUpdate?: Maybe<CheckoutShippingMethodUpdate>
  /** New in Saleor 3.1. Updates the delivery method (shipping method or pick up point) of the checkout. */
  checkoutDeliveryMethodUpdate?: Maybe<CheckoutDeliveryMethodUpdate>
  /** Update language code in the existing checkout. */
  checkoutLanguageCodeUpdate?: Maybe<CheckoutLanguageCodeUpdate>
  /** Creates new channel. */
  channelCreate?: Maybe<ChannelCreate>
  /** Update a channel. */
  channelUpdate?: Maybe<ChannelUpdate>
  /** Delete a channel. Orders associated with the deleted channel will be moved to the target channel. Checkouts, product availability, and pricing will be removed. */
  channelDelete?: Maybe<ChannelDelete>
  /** Activate a channel. */
  channelActivate?: Maybe<ChannelActivate>
  /** Deactivate a channel. */
  channelDeactivate?: Maybe<ChannelDeactivate>
  /** Creates an attribute. */
  attributeCreate?: Maybe<AttributeCreate>
  /** Deletes an attribute. */
  attributeDelete?: Maybe<AttributeDelete>
  /** Updates attribute. */
  attributeUpdate?: Maybe<AttributeUpdate>
  /** Creates/updates translations for an attribute. */
  attributeTranslate?: Maybe<AttributeTranslate>
  /** Deletes attributes. */
  attributeBulkDelete?: Maybe<AttributeBulkDelete>
  /** Deletes values of attributes. */
  attributeValueBulkDelete?: Maybe<AttributeValueBulkDelete>
  /** Creates a value for an attribute. */
  attributeValueCreate?: Maybe<AttributeValueCreate>
  /** Deletes a value of an attribute. */
  attributeValueDelete?: Maybe<AttributeValueDelete>
  /** Updates value of an attribute. */
  attributeValueUpdate?: Maybe<AttributeValueUpdate>
  /** Creates/updates translations for an attribute value. */
  attributeValueTranslate?: Maybe<AttributeValueTranslate>
  /** Reorder the values of an attribute. */
  attributeReorderValues?: Maybe<AttributeReorderValues>
  /** Creates a new app. */
  appCreate?: Maybe<AppCreate>
  /** Updates an existing app. */
  appUpdate?: Maybe<AppUpdate>
  /** Deletes an app. */
  appDelete?: Maybe<AppDelete>
  /** Creates a new token. */
  appTokenCreate?: Maybe<AppTokenCreate>
  /** Deletes an authentication token assigned to app. */
  appTokenDelete?: Maybe<AppTokenDelete>
  /** Verify provided app token. */
  appTokenVerify?: Maybe<AppTokenVerify>
  /** Install new app by using app manifest. */
  appInstall?: Maybe<AppInstall>
  /** Retry failed installation of new app. */
  appRetryInstall?: Maybe<AppRetryInstall>
  /** Delete failed installation. */
  appDeleteFailedInstallation?: Maybe<AppDeleteFailedInstallation>
  /** Fetch and validate manifest. */
  appFetchManifest?: Maybe<AppFetchManifest>
  /** Activate the app. */
  appActivate?: Maybe<AppActivate>
  /** Deactivate the app. */
  appDeactivate?: Maybe<AppDeactivate>
  /** Create JWT token. */
  tokenCreate?: Maybe<CreateToken>
  /** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
  tokenRefresh?: Maybe<RefreshToken>
  /** Verify JWT token. */
  tokenVerify?: Maybe<VerifyToken>
  /** Deactivate all JWT tokens of the currently authenticated user. */
  tokensDeactivateAll?: Maybe<DeactivateAllUserTokens>
  /** Prepare external authentication url for user by custom plugin. */
  externalAuthenticationUrl?: Maybe<ExternalAuthenticationUrl>
  /** Obtain external access tokens for user by custom plugin. */
  externalObtainAccessTokens?: Maybe<ExternalObtainAccessTokens>
  /** Refresh user's access by custom plugin. */
  externalRefresh?: Maybe<ExternalRefresh>
  /** Logout user by custom plugin. */
  externalLogout?: Maybe<ExternalLogout>
  /** Verify external authentication data by plugin. */
  externalVerify?: Maybe<ExternalVerify>
  /** Sends an email with the account password modification link. */
  requestPasswordReset?: Maybe<RequestPasswordReset>
  /** Confirm user account with token sent by email during registration. */
  confirmAccount?: Maybe<ConfirmAccount>
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  setPassword?: Maybe<SetPassword>
  /** Change the password of the logged in user. */
  passwordChange?: Maybe<PasswordChange>
  /** Request email change of the logged in user. */
  requestEmailChange?: Maybe<RequestEmailChange>
  /** Confirm the email change of the logged-in user. */
  confirmEmailChange?: Maybe<ConfirmEmailChange>
  /** Create a new address for the customer. */
  accountAddressCreate?: Maybe<AccountAddressCreate>
  /** Updates an address of the logged-in user. */
  accountAddressUpdate?: Maybe<AccountAddressUpdate>
  /** Delete an address of the logged-in user. */
  accountAddressDelete?: Maybe<AccountAddressDelete>
  /** Sets a default address for the authenticated user. */
  accountSetDefaultAddress?: Maybe<AccountSetDefaultAddress>
  /** Register a new user. */
  accountRegister?: Maybe<AccountRegister>
  /** Updates the account of the logged-in user. */
  accountUpdate?: Maybe<AccountUpdate>
  /** Sends an email with the account removal link for the logged-in user. */
  accountRequestDeletion?: Maybe<AccountRequestDeletion>
  /** Remove user account. */
  accountDelete?: Maybe<AccountDelete>
  /** Creates user address. */
  addressCreate?: Maybe<AddressCreate>
  /** Updates an address. */
  addressUpdate?: Maybe<AddressUpdate>
  /** Deletes an address. */
  addressDelete?: Maybe<AddressDelete>
  /** Sets a default address for the given user. */
  addressSetDefault?: Maybe<AddressSetDefault>
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreate>
  /** Updates an existing customer. */
  customerUpdate?: Maybe<CustomerUpdate>
  /** Deletes a customer. */
  customerDelete?: Maybe<CustomerDelete>
  /** Deletes customers. */
  customerBulkDelete?: Maybe<CustomerBulkDelete>
  /** Creates a new staff user. */
  staffCreate?: Maybe<StaffCreate>
  /** Updates an existing staff user. */
  staffUpdate?: Maybe<StaffUpdate>
  /** Deletes a staff user. */
  staffDelete?: Maybe<StaffDelete>
  /** Deletes staff users. */
  staffBulkDelete?: Maybe<StaffBulkDelete>
  /** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  userAvatarUpdate?: Maybe<UserAvatarUpdate>
  /** Deletes a user avatar. Only for staff members. */
  userAvatarDelete?: Maybe<UserAvatarDelete>
  /** Activate or deactivate users. */
  userBulkSetActive?: Maybe<UserBulkSetActive>
  /** Create new permission group. */
  permissionGroupCreate?: Maybe<PermissionGroupCreate>
  /** Update permission group. */
  permissionGroupUpdate?: Maybe<PermissionGroupUpdate>
  /** Delete permission group. */
  permissionGroupDelete?: Maybe<PermissionGroupDelete>
}

export type MutationWebhookCreateArgs = {
  input: WebhookCreateInput
}

export type MutationWebhookDeleteArgs = {
  id: Scalars['ID']
}

export type MutationWebhookUpdateArgs = {
  id: Scalars['ID']
  input: WebhookUpdateInput
}

export type MutationCreateWarehouseArgs = {
  input: WarehouseCreateInput
}

export type MutationUpdateWarehouseArgs = {
  id: Scalars['ID']
  input: WarehouseUpdateInput
}

export type MutationDeleteWarehouseArgs = {
  id: Scalars['ID']
}

export type MutationAssignWarehouseShippingZoneArgs = {
  id: Scalars['ID']
  shippingZoneIds: Array<Scalars['ID']>
}

export type MutationUnassignWarehouseShippingZoneArgs = {
  id: Scalars['ID']
  shippingZoneIds: Array<Scalars['ID']>
}

export type MutationStaffNotificationRecipientCreateArgs = {
  input: StaffNotificationRecipientInput
}

export type MutationStaffNotificationRecipientUpdateArgs = {
  id: Scalars['ID']
  input: StaffNotificationRecipientInput
}

export type MutationStaffNotificationRecipientDeleteArgs = {
  id: Scalars['ID']
}

export type MutationShopDomainUpdateArgs = {
  input?: Maybe<SiteDomainInput>
}

export type MutationShopSettingsUpdateArgs = {
  input: ShopSettingsInput
}

export type MutationShopSettingsTranslateArgs = {
  input: ShopSettingsTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationShopAddressUpdateArgs = {
  input?: Maybe<AddressInput>
}

export type MutationOrderSettingsUpdateArgs = {
  input: OrderSettingsUpdateInput
}

export type MutationGiftCardSettingsUpdateArgs = {
  input: GiftCardSettingsUpdateInput
}

export type MutationShippingMethodChannelListingUpdateArgs = {
  id: Scalars['ID']
  input: ShippingMethodChannelListingInput
}

export type MutationShippingPriceCreateArgs = {
  input: ShippingPriceInput
}

export type MutationShippingPriceDeleteArgs = {
  id: Scalars['ID']
}

export type MutationShippingPriceBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationShippingPriceUpdateArgs = {
  id: Scalars['ID']
  input: ShippingPriceInput
}

export type MutationShippingPriceTranslateArgs = {
  id: Scalars['ID']
  input: ShippingPriceTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationShippingPriceExcludeProductsArgs = {
  id: Scalars['ID']
  input: ShippingPriceExcludeProductsInput
}

export type MutationShippingPriceRemoveProductFromExcludeArgs = {
  id: Scalars['ID']
  products: Array<Maybe<Scalars['ID']>>
}

export type MutationShippingZoneCreateArgs = {
  input: ShippingZoneCreateInput
}

export type MutationShippingZoneDeleteArgs = {
  id: Scalars['ID']
}

export type MutationShippingZoneBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationShippingZoneUpdateArgs = {
  id: Scalars['ID']
  input: ShippingZoneUpdateInput
}

export type MutationProductAttributeAssignArgs = {
  operations: Array<Maybe<ProductAttributeAssignInput>>
  productTypeId: Scalars['ID']
}

export type MutationProductAttributeAssignmentUpdateArgs = {
  operations: Array<Maybe<ProductAttributeAssignmentUpdateInput>>
  productTypeId: Scalars['ID']
}

export type MutationProductAttributeUnassignArgs = {
  attributeIds: Array<Maybe<Scalars['ID']>>
  productTypeId: Scalars['ID']
}

export type MutationCategoryCreateArgs = {
  input: CategoryInput
  parent?: Maybe<Scalars['ID']>
}

export type MutationCategoryDeleteArgs = {
  id: Scalars['ID']
}

export type MutationCategoryBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationCategoryUpdateArgs = {
  id: Scalars['ID']
  input: CategoryInput
}

export type MutationCategoryTranslateArgs = {
  id: Scalars['ID']
  input: TranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationCollectionAddProductsArgs = {
  collectionId: Scalars['ID']
  products: Array<Maybe<Scalars['ID']>>
}

export type MutationCollectionCreateArgs = {
  input: CollectionCreateInput
}

export type MutationCollectionDeleteArgs = {
  id: Scalars['ID']
}

export type MutationCollectionReorderProductsArgs = {
  collectionId: Scalars['ID']
  moves: Array<Maybe<MoveProductInput>>
}

export type MutationCollectionBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationCollectionRemoveProductsArgs = {
  collectionId: Scalars['ID']
  products: Array<Maybe<Scalars['ID']>>
}

export type MutationCollectionUpdateArgs = {
  id: Scalars['ID']
  input: CollectionInput
}

export type MutationCollectionTranslateArgs = {
  id: Scalars['ID']
  input: TranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationCollectionChannelListingUpdateArgs = {
  id: Scalars['ID']
  input: CollectionChannelListingUpdateInput
}

export type MutationProductCreateArgs = {
  input: ProductCreateInput
}

export type MutationProductDeleteArgs = {
  id: Scalars['ID']
}

export type MutationProductBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationProductUpdateArgs = {
  id: Scalars['ID']
  input: ProductInput
}

export type MutationProductTranslateArgs = {
  id: Scalars['ID']
  input: TranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationProductChannelListingUpdateArgs = {
  id: Scalars['ID']
  input: ProductChannelListingUpdateInput
}

export type MutationProductMediaCreateArgs = {
  input: ProductMediaCreateInput
}

export type MutationProductVariantReorderArgs = {
  moves: Array<Maybe<ReorderInput>>
  productId: Scalars['ID']
}

export type MutationProductMediaDeleteArgs = {
  id: Scalars['ID']
}

export type MutationProductMediaBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationProductMediaReorderArgs = {
  mediaIds: Array<Maybe<Scalars['ID']>>
  productId: Scalars['ID']
}

export type MutationProductMediaUpdateArgs = {
  id: Scalars['ID']
  input: ProductMediaUpdateInput
}

export type MutationProductTypeCreateArgs = {
  input: ProductTypeInput
}

export type MutationProductTypeDeleteArgs = {
  id: Scalars['ID']
}

export type MutationProductTypeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationProductTypeUpdateArgs = {
  id: Scalars['ID']
  input: ProductTypeInput
}

export type MutationProductTypeReorderAttributesArgs = {
  moves: Array<Maybe<ReorderInput>>
  productTypeId: Scalars['ID']
  type: ProductAttributeType
}

export type MutationProductReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']
  moves: Array<Maybe<ReorderInput>>
  productId: Scalars['ID']
}

export type MutationDigitalContentCreateArgs = {
  input: DigitalContentUploadInput
  variantId: Scalars['ID']
}

export type MutationDigitalContentDeleteArgs = {
  variantId: Scalars['ID']
}

export type MutationDigitalContentUpdateArgs = {
  input: DigitalContentInput
  variantId: Scalars['ID']
}

export type MutationDigitalContentUrlCreateArgs = {
  input: DigitalContentUrlCreateInput
}

export type MutationProductVariantCreateArgs = {
  input: ProductVariantCreateInput
}

export type MutationProductVariantDeleteArgs = {
  id: Scalars['ID']
}

export type MutationProductVariantBulkCreateArgs = {
  product: Scalars['ID']
  variants: Array<Maybe<ProductVariantBulkCreateInput>>
}

export type MutationProductVariantBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationProductVariantStocksCreateArgs = {
  stocks: Array<StockInput>
  variantId: Scalars['ID']
}

export type MutationProductVariantStocksDeleteArgs = {
  variantId: Scalars['ID']
  warehouseIds?: Maybe<Array<Scalars['ID']>>
}

export type MutationProductVariantStocksUpdateArgs = {
  stocks: Array<StockInput>
  variantId: Scalars['ID']
}

export type MutationProductVariantUpdateArgs = {
  id: Scalars['ID']
  input: ProductVariantInput
}

export type MutationProductVariantSetDefaultArgs = {
  productId: Scalars['ID']
  variantId: Scalars['ID']
}

export type MutationProductVariantTranslateArgs = {
  id: Scalars['ID']
  input: NameTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationProductVariantChannelListingUpdateArgs = {
  id: Scalars['ID']
  input: Array<ProductVariantChannelListingAddInput>
}

export type MutationProductVariantReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']
  moves: Array<Maybe<ReorderInput>>
  variantId: Scalars['ID']
}

export type MutationProductVariantPreorderDeactivateArgs = {
  id: Scalars['ID']
}

export type MutationVariantMediaAssignArgs = {
  mediaId: Scalars['ID']
  variantId: Scalars['ID']
}

export type MutationVariantMediaUnassignArgs = {
  mediaId: Scalars['ID']
  variantId: Scalars['ID']
}

export type MutationPaymentCaptureArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>
  paymentId: Scalars['ID']
}

export type MutationPaymentRefundArgs = {
  amount?: Maybe<Scalars['PositiveDecimal']>
  paymentId: Scalars['ID']
}

export type MutationPaymentVoidArgs = {
  paymentId: Scalars['ID']
}

export type MutationPaymentInitializeArgs = {
  channel?: Maybe<Scalars['String']>
  gateway: Scalars['String']
  paymentData?: Maybe<Scalars['JSONString']>
}

export type MutationPaymentCheckBalanceArgs = {
  input: PaymentCheckBalanceInput
}

export type MutationPageCreateArgs = {
  input: PageCreateInput
}

export type MutationPageDeleteArgs = {
  id: Scalars['ID']
}

export type MutationPageBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationPageBulkPublishArgs = {
  ids: Array<Maybe<Scalars['ID']>>
  isPublished: Scalars['Boolean']
}

export type MutationPageUpdateArgs = {
  id: Scalars['ID']
  input: PageInput
}

export type MutationPageTranslateArgs = {
  id: Scalars['ID']
  input: PageTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationPageTypeCreateArgs = {
  input: PageTypeCreateInput
}

export type MutationPageTypeUpdateArgs = {
  id?: Maybe<Scalars['ID']>
  input: PageTypeUpdateInput
}

export type MutationPageTypeDeleteArgs = {
  id: Scalars['ID']
}

export type MutationPageTypeBulkDeleteArgs = {
  ids: Array<Scalars['ID']>
}

export type MutationPageAttributeAssignArgs = {
  attributeIds: Array<Scalars['ID']>
  pageTypeId: Scalars['ID']
}

export type MutationPageAttributeUnassignArgs = {
  attributeIds: Array<Scalars['ID']>
  pageTypeId: Scalars['ID']
}

export type MutationPageTypeReorderAttributesArgs = {
  moves: Array<ReorderInput>
  pageTypeId: Scalars['ID']
}

export type MutationPageReorderAttributeValuesArgs = {
  attributeId: Scalars['ID']
  moves: Array<Maybe<ReorderInput>>
  pageId: Scalars['ID']
}

export type MutationDraftOrderCompleteArgs = {
  id: Scalars['ID']
}

export type MutationDraftOrderCreateArgs = {
  input: DraftOrderCreateInput
}

export type MutationDraftOrderDeleteArgs = {
  id: Scalars['ID']
}

export type MutationDraftOrderBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationDraftOrderLinesBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationDraftOrderUpdateArgs = {
  id: Scalars['ID']
  input: DraftOrderInput
}

export type MutationOrderAddNoteArgs = {
  order: Scalars['ID']
  input: OrderAddNoteInput
}

export type MutationOrderCancelArgs = {
  id: Scalars['ID']
}

export type MutationOrderCaptureArgs = {
  amount: Scalars['PositiveDecimal']
  id: Scalars['ID']
}

export type MutationOrderConfirmArgs = {
  id: Scalars['ID']
}

export type MutationOrderFulfillArgs = {
  input: OrderFulfillInput
  order?: Maybe<Scalars['ID']>
}

export type MutationOrderFulfillmentCancelArgs = {
  id: Scalars['ID']
  input?: Maybe<FulfillmentCancelInput>
}

export type MutationOrderFulfillmentApproveArgs = {
  allowStockToBeExceeded?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  notifyCustomer: Scalars['Boolean']
}

export type MutationOrderFulfillmentUpdateTrackingArgs = {
  id: Scalars['ID']
  input: FulfillmentUpdateTrackingInput
}

export type MutationOrderFulfillmentRefundProductsArgs = {
  input: OrderRefundProductsInput
  order: Scalars['ID']
}

export type MutationOrderFulfillmentReturnProductsArgs = {
  input: OrderReturnProductsInput
  order: Scalars['ID']
}

export type MutationOrderLinesCreateArgs = {
  id: Scalars['ID']
  input: Array<Maybe<OrderLineCreateInput>>
}

export type MutationOrderLineDeleteArgs = {
  id: Scalars['ID']
}

export type MutationOrderLineUpdateArgs = {
  id: Scalars['ID']
  input: OrderLineInput
}

export type MutationOrderDiscountAddArgs = {
  input: OrderDiscountCommonInput
  orderId: Scalars['ID']
}

export type MutationOrderDiscountUpdateArgs = {
  discountId: Scalars['ID']
  input: OrderDiscountCommonInput
}

export type MutationOrderDiscountDeleteArgs = {
  discountId: Scalars['ID']
}

export type MutationOrderLineDiscountUpdateArgs = {
  input: OrderDiscountCommonInput
  orderLineId: Scalars['ID']
}

export type MutationOrderLineDiscountRemoveArgs = {
  orderLineId: Scalars['ID']
}

export type MutationOrderMarkAsPaidArgs = {
  id: Scalars['ID']
  transactionReference?: Maybe<Scalars['String']>
}

export type MutationOrderRefundArgs = {
  amount: Scalars['PositiveDecimal']
  id: Scalars['ID']
}

export type MutationOrderUpdateArgs = {
  id: Scalars['ID']
  input: OrderUpdateInput
}

export type MutationOrderUpdateShippingArgs = {
  order: Scalars['ID']
  input: OrderUpdateShippingInput
}

export type MutationOrderVoidArgs = {
  id: Scalars['ID']
}

export type MutationOrderBulkCancelArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationDeleteMetadataArgs = {
  id: Scalars['ID']
  keys: Array<Scalars['String']>
}

export type MutationDeletePrivateMetadataArgs = {
  id: Scalars['ID']
  keys: Array<Scalars['String']>
}

export type MutationUpdateMetadataArgs = {
  id: Scalars['ID']
  input: Array<MetadataInput>
}

export type MutationUpdatePrivateMetadataArgs = {
  id: Scalars['ID']
  input: Array<MetadataInput>
}

export type MutationAssignNavigationArgs = {
  menu?: Maybe<Scalars['ID']>
  navigationType: NavigationType
}

export type MutationMenuCreateArgs = {
  input: MenuCreateInput
}

export type MutationMenuDeleteArgs = {
  id: Scalars['ID']
}

export type MutationMenuBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationMenuUpdateArgs = {
  id: Scalars['ID']
  input: MenuInput
}

export type MutationMenuItemCreateArgs = {
  input: MenuItemCreateInput
}

export type MutationMenuItemDeleteArgs = {
  id: Scalars['ID']
}

export type MutationMenuItemBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationMenuItemUpdateArgs = {
  id: Scalars['ID']
  input: MenuItemInput
}

export type MutationMenuItemTranslateArgs = {
  id: Scalars['ID']
  input: NameTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationMenuItemMoveArgs = {
  menu: Scalars['ID']
  moves: Array<Maybe<MenuItemMoveInput>>
}

export type MutationInvoiceRequestArgs = {
  number?: Maybe<Scalars['String']>
  orderId: Scalars['ID']
}

export type MutationInvoiceRequestDeleteArgs = {
  id: Scalars['ID']
}

export type MutationInvoiceCreateArgs = {
  input: InvoiceCreateInput
  orderId: Scalars['ID']
}

export type MutationInvoiceDeleteArgs = {
  id: Scalars['ID']
}

export type MutationInvoiceUpdateArgs = {
  id: Scalars['ID']
  input: UpdateInvoiceInput
}

export type MutationInvoiceSendNotificationArgs = {
  id: Scalars['ID']
}

export type MutationGiftCardActivateArgs = {
  id: Scalars['ID']
}

export type MutationGiftCardCreateArgs = {
  input: GiftCardCreateInput
}

export type MutationGiftCardDeleteArgs = {
  id: Scalars['ID']
}

export type MutationGiftCardDeactivateArgs = {
  id: Scalars['ID']
}

export type MutationGiftCardUpdateArgs = {
  id: Scalars['ID']
  input: GiftCardUpdateInput
}

export type MutationGiftCardResendArgs = {
  input: GiftCardResendInput
}

export type MutationGiftCardAddNoteArgs = {
  id: Scalars['ID']
  input: GiftCardAddNoteInput
}

export type MutationGiftCardBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationGiftCardBulkActivateArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationGiftCardBulkDeactivateArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationPluginUpdateArgs = {
  channelId?: Maybe<Scalars['ID']>
  id: Scalars['ID']
  input: PluginUpdateInput
}

export type MutationExternalNotificationTriggerArgs = {
  channel: Scalars['String']
  input: ExternalNotificationTriggerInput
  pluginId?: Maybe<Scalars['String']>
}

export type MutationSaleCreateArgs = {
  input: SaleInput
}

export type MutationSaleDeleteArgs = {
  id: Scalars['ID']
}

export type MutationSaleBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationSaleUpdateArgs = {
  id: Scalars['ID']
  input: SaleInput
}

export type MutationSaleCataloguesAddArgs = {
  id: Scalars['ID']
  input: CatalogueInput
}

export type MutationSaleCataloguesRemoveArgs = {
  id: Scalars['ID']
  input: CatalogueInput
}

export type MutationSaleTranslateArgs = {
  id: Scalars['ID']
  input: NameTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationSaleChannelListingUpdateArgs = {
  id: Scalars['ID']
  input: SaleChannelListingInput
}

export type MutationVoucherCreateArgs = {
  input: VoucherInput
}

export type MutationVoucherDeleteArgs = {
  id: Scalars['ID']
}

export type MutationVoucherBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationVoucherUpdateArgs = {
  id: Scalars['ID']
  input: VoucherInput
}

export type MutationVoucherCataloguesAddArgs = {
  id: Scalars['ID']
  input: CatalogueInput
}

export type MutationVoucherCataloguesRemoveArgs = {
  id: Scalars['ID']
  input: CatalogueInput
}

export type MutationVoucherTranslateArgs = {
  id: Scalars['ID']
  input: NameTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationVoucherChannelListingUpdateArgs = {
  id: Scalars['ID']
  input: VoucherChannelListingInput
}

export type MutationExportProductsArgs = {
  input: ExportProductsInput
}

export type MutationFileUploadArgs = {
  file: Scalars['Upload']
}

export type MutationCheckoutAddPromoCodeArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  promoCode: Scalars['String']
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutBillingAddressUpdateArgs = {
  billingAddress: AddressInput
  checkoutId?: Maybe<Scalars['ID']>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutCompleteArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  paymentData?: Maybe<Scalars['JSONString']>
  redirectUrl?: Maybe<Scalars['String']>
  storeSource?: Maybe<Scalars['Boolean']>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutCreateArgs = {
  input: CheckoutCreateInput
}

export type MutationCheckoutCustomerAttachArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  customerId?: Maybe<Scalars['ID']>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutCustomerDetachArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutEmailUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  email: Scalars['String']
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutLineDeleteArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  lineId?: Maybe<Scalars['ID']>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutLinesDeleteArgs = {
  linesIds: Array<Maybe<Scalars['ID']>>
  token: Scalars['UUID']
}

export type MutationCheckoutLinesAddArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  lines: Array<Maybe<CheckoutLineInput>>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutLinesUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  lines: Array<Maybe<CheckoutLineInput>>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutRemovePromoCodeArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  promoCode?: Maybe<Scalars['String']>
  promoCodeId?: Maybe<Scalars['ID']>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutPaymentCreateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  input: PaymentInput
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutShippingAddressUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  shippingAddress: AddressInput
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutShippingMethodUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  shippingMethodId: Scalars['ID']
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutDeliveryMethodUpdateArgs = {
  deliveryMethodId?: Maybe<Scalars['ID']>
  token?: Maybe<Scalars['UUID']>
}

export type MutationCheckoutLanguageCodeUpdateArgs = {
  checkoutId?: Maybe<Scalars['ID']>
  languageCode: LanguageCodeEnum
  token?: Maybe<Scalars['UUID']>
}

export type MutationChannelCreateArgs = {
  input: ChannelCreateInput
}

export type MutationChannelUpdateArgs = {
  id: Scalars['ID']
  input: ChannelUpdateInput
}

export type MutationChannelDeleteArgs = {
  id: Scalars['ID']
  input?: Maybe<ChannelDeleteInput>
}

export type MutationChannelActivateArgs = {
  id: Scalars['ID']
}

export type MutationChannelDeactivateArgs = {
  id: Scalars['ID']
}

export type MutationAttributeCreateArgs = {
  input: AttributeCreateInput
}

export type MutationAttributeDeleteArgs = {
  id: Scalars['ID']
}

export type MutationAttributeUpdateArgs = {
  id: Scalars['ID']
  input: AttributeUpdateInput
}

export type MutationAttributeTranslateArgs = {
  id: Scalars['ID']
  input: NameTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationAttributeBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationAttributeValueBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationAttributeValueCreateArgs = {
  attribute: Scalars['ID']
  input: AttributeValueCreateInput
}

export type MutationAttributeValueDeleteArgs = {
  id: Scalars['ID']
}

export type MutationAttributeValueUpdateArgs = {
  id: Scalars['ID']
  input: AttributeValueUpdateInput
}

export type MutationAttributeValueTranslateArgs = {
  id: Scalars['ID']
  input: AttributeValueTranslationInput
  languageCode: LanguageCodeEnum
}

export type MutationAttributeReorderValuesArgs = {
  attributeId: Scalars['ID']
  moves: Array<Maybe<ReorderInput>>
}

export type MutationAppCreateArgs = {
  input: AppInput
}

export type MutationAppUpdateArgs = {
  id: Scalars['ID']
  input: AppInput
}

export type MutationAppDeleteArgs = {
  id: Scalars['ID']
}

export type MutationAppTokenCreateArgs = {
  input: AppTokenInput
}

export type MutationAppTokenDeleteArgs = {
  id: Scalars['ID']
}

export type MutationAppTokenVerifyArgs = {
  token: Scalars['String']
}

export type MutationAppInstallArgs = {
  input: AppInstallInput
}

export type MutationAppRetryInstallArgs = {
  activateAfterInstallation?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
}

export type MutationAppDeleteFailedInstallationArgs = {
  id: Scalars['ID']
}

export type MutationAppFetchManifestArgs = {
  manifestUrl: Scalars['String']
}

export type MutationAppActivateArgs = {
  id: Scalars['ID']
}

export type MutationAppDeactivateArgs = {
  id: Scalars['ID']
}

export type MutationTokenCreateArgs = {
  email: Scalars['String']
  password: Scalars['String']
}

export type MutationTokenRefreshArgs = {
  csrfToken?: Maybe<Scalars['String']>
  refreshToken?: Maybe<Scalars['String']>
}

export type MutationTokenVerifyArgs = {
  token: Scalars['String']
}

export type MutationExternalAuthenticationUrlArgs = {
  input: Scalars['JSONString']
  pluginId: Scalars['String']
}

export type MutationExternalObtainAccessTokensArgs = {
  input: Scalars['JSONString']
  pluginId: Scalars['String']
}

export type MutationExternalRefreshArgs = {
  input: Scalars['JSONString']
  pluginId: Scalars['String']
}

export type MutationExternalLogoutArgs = {
  input: Scalars['JSONString']
  pluginId: Scalars['String']
}

export type MutationExternalVerifyArgs = {
  input: Scalars['JSONString']
  pluginId: Scalars['String']
}

export type MutationRequestPasswordResetArgs = {
  channel?: Maybe<Scalars['String']>
  email: Scalars['String']
  redirectUrl: Scalars['String']
}

export type MutationConfirmAccountArgs = {
  email: Scalars['String']
  token: Scalars['String']
}

export type MutationSetPasswordArgs = {
  email: Scalars['String']
  password: Scalars['String']
  token: Scalars['String']
}

export type MutationPasswordChangeArgs = {
  newPassword: Scalars['String']
  oldPassword: Scalars['String']
}

export type MutationRequestEmailChangeArgs = {
  channel?: Maybe<Scalars['String']>
  newEmail: Scalars['String']
  password: Scalars['String']
  redirectUrl: Scalars['String']
}

export type MutationConfirmEmailChangeArgs = {
  channel?: Maybe<Scalars['String']>
  token: Scalars['String']
}

export type MutationAccountAddressCreateArgs = {
  input: AddressInput
  type?: Maybe<AddressTypeEnum>
}

export type MutationAccountAddressUpdateArgs = {
  id: Scalars['ID']
  input: AddressInput
}

export type MutationAccountAddressDeleteArgs = {
  id: Scalars['ID']
}

export type MutationAccountSetDefaultAddressArgs = {
  id: Scalars['ID']
  type: AddressTypeEnum
}

export type MutationAccountRegisterArgs = {
  input: AccountRegisterInput
}

export type MutationAccountUpdateArgs = {
  input: AccountInput
}

export type MutationAccountRequestDeletionArgs = {
  channel?: Maybe<Scalars['String']>
  redirectUrl: Scalars['String']
}

export type MutationAccountDeleteArgs = {
  token: Scalars['String']
}

export type MutationAddressCreateArgs = {
  input: AddressInput
  userId: Scalars['ID']
}

export type MutationAddressUpdateArgs = {
  id: Scalars['ID']
  input: AddressInput
}

export type MutationAddressDeleteArgs = {
  id: Scalars['ID']
}

export type MutationAddressSetDefaultArgs = {
  addressId: Scalars['ID']
  type: AddressTypeEnum
  userId: Scalars['ID']
}

export type MutationCustomerCreateArgs = {
  input: UserCreateInput
}

export type MutationCustomerUpdateArgs = {
  id: Scalars['ID']
  input: CustomerInput
}

export type MutationCustomerDeleteArgs = {
  id: Scalars['ID']
}

export type MutationCustomerBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationStaffCreateArgs = {
  input: StaffCreateInput
}

export type MutationStaffUpdateArgs = {
  id: Scalars['ID']
  input: StaffUpdateInput
}

export type MutationStaffDeleteArgs = {
  id: Scalars['ID']
}

export type MutationStaffBulkDeleteArgs = {
  ids: Array<Maybe<Scalars['ID']>>
}

export type MutationUserAvatarUpdateArgs = {
  image: Scalars['Upload']
}

export type MutationUserBulkSetActiveArgs = {
  ids: Array<Maybe<Scalars['ID']>>
  isActive: Scalars['Boolean']
}

export type MutationPermissionGroupCreateArgs = {
  input: PermissionGroupCreateInput
}

export type MutationPermissionGroupUpdateArgs = {
  id: Scalars['ID']
  input: PermissionGroupUpdateInput
}

export type MutationPermissionGroupDeleteArgs = {
  id: Scalars['ID']
}

export type NameTranslationInput = {
  name?: Maybe<Scalars['String']>
}

export enum NavigationType {
  /** Main storefront navigation. */
  Main = 'MAIN',
  /** Secondary storefront navigation. */
  Secondary = 'SECONDARY',
}

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']
}

export type ObjectWithMetadata = {
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<Maybe<MetadataItem>>
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>
}

/** Represents an order in the shop. */
export type Order = Node &
  ObjectWithMetadata & {
    __typename?: 'Order'
    /** The ID of the object. */
    id: Scalars['ID']
    created: Scalars['DateTime']
    status: OrderStatus
    user?: Maybe<User>
    trackingClientId: Scalars['String']
    billingAddress?: Maybe<Address>
    shippingAddress?: Maybe<Address>
    shippingMethodName?: Maybe<Scalars['String']>
    collectionPointName?: Maybe<Scalars['String']>
    channel: Channel
    /** Total price of shipping. */
    shippingPrice: TaxedMoney
    shippingTaxRate: Scalars['Float']
    token: Scalars['String']
    voucher?: Maybe<Voucher>
    /** List of user gift cards. */
    giftCards?: Maybe<Array<Maybe<GiftCard>>>
    displayGrossPrices: Scalars['Boolean']
    customerNote: Scalars['String']
    weight?: Maybe<Weight>
    redirectUrl?: Maybe<Scalars['String']>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** List of shipments for the order. */
    fulfillments: Array<Maybe<Fulfillment>>
    /** List of order lines. */
    lines: Array<Maybe<OrderLine>>
    /** List of actions that can be performed in the current state of an order. */
    actions: Array<Maybe<OrderAction>>
    /** Shipping methods that can be used with this order. */
    availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>
    /** New in Saleor 3.1. Collection points that can be used for this order. */
    availableCollectionPoints: Array<Warehouse>
    /** List of order invoices. */
    invoices?: Maybe<Array<Maybe<Invoice>>>
    /** User-friendly number of an order. */
    number?: Maybe<Scalars['String']>
    /** The ID of the order that was the base for this order. */
    original?: Maybe<Scalars['ID']>
    /** The order origin. */
    origin: OrderOriginEnum
    /** Informs if an order is fully paid. */
    isPaid: Scalars['Boolean']
    /** Internal payment status. */
    paymentStatus: PaymentChargeStatusEnum
    /** User-friendly payment status. */
    paymentStatusDisplay: Scalars['String']
    /** List of payments for the order. */
    payments?: Maybe<Array<Maybe<Payment>>>
    /** Total amount of the order. */
    total: TaxedMoney
    /** Undiscounted total amount of the order. */
    undiscountedTotal: TaxedMoney
    /**
     * The shipping method related with order.
     * @deprecated This field will be removed in Saleor 4.0. Use `deliveryMethod` instead.
     */
    shippingMethod?: Maybe<ShippingMethod>
    /** The sum of line prices not including shipping. */
    subtotal: TaxedMoney
    /** User-friendly order status. */
    statusDisplay?: Maybe<Scalars['String']>
    /** Informs whether a draft order can be finalized(turned into a regular order). */
    canFinalize: Scalars['Boolean']
    /** Amount authorized for the order. */
    totalAuthorized: Money
    /** Amount captured by payment. */
    totalCaptured: Money
    /** List of events associated with the order. */
    events?: Maybe<Array<Maybe<OrderEvent>>>
    /** The difference between the paid and the order total amount. */
    totalBalance: Money
    /** Email address of the customer. */
    userEmail?: Maybe<Scalars['String']>
    /** Returns True, if order requires shipping. */
    isShippingRequired: Scalars['Boolean']
    /** New in Saleor 3.1. The delivery method selected for this checkout. */
    deliveryMethod?: Maybe<DeliveryMethod>
    /** @deprecated This field will be removed in Saleor 4.0. Use the `languageCodeEnum` field to fetch the language code.  */
    languageCode: Scalars['String']
    /** Order language code. */
    languageCodeEnum: LanguageCodeEnum
    /**
     * Returns applied discount.
     * @deprecated This field will be removed in Saleor 4.0. Use discounts field.
     */
    discount?: Maybe<Money>
    /**
     * Discount name.
     * @deprecated This field will be removed in Saleor 4.0. Use discounts field.
     */
    discountName?: Maybe<Scalars['String']>
    /**
     * Translated discount name.
     * @deprecated This field will be removed in Saleor 4.0. Use discounts field.
     */
    translatedDiscountName?: Maybe<Scalars['String']>
    /** List of all discounts assigned to the order. */
    discounts?: Maybe<Array<OrderDiscount>>
    /** List of errors that occurred during order validation. */
    errors: Array<OrderError>
  }

export enum OrderAction {
  /** Represents the capture action. */
  Capture = 'CAPTURE',
  /** Represents a mark-as-paid action. */
  MarkAsPaid = 'MARK_AS_PAID',
  /** Represents a refund action. */
  Refund = 'REFUND',
  /** Represents a void action. */
  Void = 'VOID',
}

/** Adds note to the order. */
export type OrderAddNote = {
  __typename?: 'OrderAddNote'
  /** Order with the note added. */
  order?: Maybe<Order>
  /** Order note created. */
  event?: Maybe<OrderEvent>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderAddNoteInput = {
  /** Note message. */
  message: Scalars['String']
}

/** Cancels orders. */
export type OrderBulkCancel = {
  __typename?: 'OrderBulkCancel'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Cancel an order. */
export type OrderCancel = {
  __typename?: 'OrderCancel'
  /** Canceled order. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Capture an order. */
export type OrderCapture = {
  __typename?: 'OrderCapture'
  /** Captured order. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Confirms an unconfirmed order by changing status to unfulfilled. */
export type OrderConfirm = {
  __typename?: 'OrderConfirm'
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderCountableConnection = {
  __typename?: 'OrderCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<OrderCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type OrderCountableEdge = {
  __typename?: 'OrderCountableEdge'
  /** The item at the end of the edge. */
  node: Order
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  Asc = 'ASC',
  /** Specifies a descending sort order. */
  Desc = 'DESC',
}

/** Contains all details related to the applied discount to the order. */
export type OrderDiscount = Node & {
  __typename?: 'OrderDiscount'
  /** The ID of the object. */
  id: Scalars['ID']
  type: OrderDiscountType
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal']
  name?: Maybe<Scalars['String']>
  translatedName?: Maybe<Scalars['String']>
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars['String']>
  /** Returns amount of discount. */
  amount: Money
}

/** Adds discount to the order. */
export type OrderDiscountAdd = {
  __typename?: 'OrderDiscountAdd'
  /** Order which has been discounted. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderDiscountCommonInput = {
  /** Type of the discount: fixed or percent */
  valueType: DiscountValueTypeEnum
  /** Value of the discount. Can store fixed value or percent value */
  value: Scalars['PositiveDecimal']
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars['String']>
}

/** Remove discount from the order. */
export type OrderDiscountDelete = {
  __typename?: 'OrderDiscountDelete'
  /** Order which has removed discount. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** An enumeration. */
export enum OrderDiscountType {
  /** Voucher */
  Voucher = 'VOUCHER',
  /** Manual */
  Manual = 'MANUAL',
}

/** Update discount for the order. */
export type OrderDiscountUpdate = {
  __typename?: 'OrderDiscountUpdate'
  /** Order which has been discounted. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderDraftFilterInput = {
  customer?: Maybe<Scalars['String']>
  created?: Maybe<DateRangeInput>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  channels?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type OrderError = {
  __typename?: 'OrderError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: OrderErrorCode
  /** Warehouse ID which causes the error. */
  warehouse?: Maybe<Scalars['ID']>
  /** List of order line IDs that cause the error. */
  orderLines?: Maybe<Array<Scalars['ID']>>
  /** List of product variants that are associated with the error */
  variants?: Maybe<Array<Scalars['ID']>>
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>
}

/** An enumeration. */
export enum OrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDelete = 'CANNOT_DELETE',
  CannotDiscount = 'CANNOT_DISCOUNT',
  CannotRefund = 'CANNOT_REFUND',
  CannotFulfillUnpaidOrder = 'CANNOT_FULFILL_UNPAID_ORDER',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  GiftCardLine = 'GIFT_CARD_LINE',
  NotEditable = 'NOT_EDITABLE',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  ZeroQuantity = 'ZERO_QUANTITY',
  InvalidQuantity = 'INVALID_QUANTITY',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  NotAvailableInChannel = 'NOT_AVAILABLE_IN_CHANNEL',
  ChannelInactive = 'CHANNEL_INACTIVE',
}

/** History log of the order. */
export type OrderEvent = Node & {
  __typename?: 'OrderEvent'
  /** The ID of the object. */
  id: Scalars['ID']
  /** Date when event happened at in ISO 8601 format. */
  date?: Maybe<Scalars['DateTime']>
  /** Order event type. */
  type?: Maybe<OrderEventsEnum>
  /** User who performed the action. */
  user?: Maybe<User>
  /** App that performed the action. */
  app?: Maybe<App>
  /** Content of the event. */
  message?: Maybe<Scalars['String']>
  /** Email of the customer. */
  email?: Maybe<Scalars['String']>
  /** Type of an email sent to the customer. */
  emailType?: Maybe<OrderEventsEmailsEnum>
  /** Amount of money. */
  amount?: Maybe<Scalars['Float']>
  /** The payment ID from the payment gateway. */
  paymentId?: Maybe<Scalars['String']>
  /** The payment gateway of the payment. */
  paymentGateway?: Maybe<Scalars['String']>
  /** Number of items. */
  quantity?: Maybe<Scalars['Int']>
  /** Composed ID of the Fulfillment. */
  composedId?: Maybe<Scalars['String']>
  /** User-friendly number of an order. */
  orderNumber?: Maybe<Scalars['String']>
  /** Number of an invoice related to the order. */
  invoiceNumber?: Maybe<Scalars['String']>
  /** List of oversold lines names. */
  oversoldItems?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The concerned lines. */
  lines?: Maybe<Array<Maybe<OrderEventOrderLineObject>>>
  /** The lines fulfilled. */
  fulfilledItems?: Maybe<Array<Maybe<FulfillmentLine>>>
  /** The warehouse were items were restocked. */
  warehouse?: Maybe<Warehouse>
  /** The transaction reference of captured payment. */
  transactionReference?: Maybe<Scalars['String']>
  /** Define if shipping costs were included to the refund. */
  shippingCostsIncluded?: Maybe<Scalars['Boolean']>
  /** The order which is related to this order. */
  relatedOrder?: Maybe<Order>
  /** The discount applied to the order. */
  discount?: Maybe<OrderEventDiscountObject>
}

export type OrderEventCountableConnection = {
  __typename?: 'OrderEventCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<OrderEventCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type OrderEventCountableEdge = {
  __typename?: 'OrderEventCountableEdge'
  /** The item at the end of the edge. */
  node: OrderEvent
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type OrderEventDiscountObject = {
  __typename?: 'OrderEventDiscountObject'
  /** Type of the discount: fixed or percent. */
  valueType: DiscountValueTypeEnum
  /** Value of the discount. Can store fixed value or percent value. */
  value: Scalars['PositiveDecimal']
  /** Explanation for the applied discount. */
  reason?: Maybe<Scalars['String']>
  /** Returns amount of discount. */
  amount?: Maybe<Money>
  /** Type of the discount: fixed or percent. */
  oldValueType?: Maybe<DiscountValueTypeEnum>
  /** Value of the discount. Can store fixed value or percent value. */
  oldValue?: Maybe<Scalars['PositiveDecimal']>
  /** Returns amount of discount. */
  oldAmount?: Maybe<Money>
}

export type OrderEventOrderLineObject = {
  __typename?: 'OrderEventOrderLineObject'
  /** The variant quantity. */
  quantity?: Maybe<Scalars['Int']>
  /** The order line. */
  orderLine?: Maybe<OrderLine>
  /** The variant name. */
  itemName?: Maybe<Scalars['String']>
  /** The discount applied to the order line. */
  discount?: Maybe<OrderEventDiscountObject>
}

/** An enumeration. */
export enum OrderEventsEmailsEnum {
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  Confirmed = 'CONFIRMED',
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  TrackingUpdated = 'TRACKING_UPDATED',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderCancel = 'ORDER_CANCEL',
  OrderRefund = 'ORDER_REFUND',
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  DigitalLinks = 'DIGITAL_LINKS',
}

/** An enumeration. */
export enum OrderEventsEnum {
  DraftCreated = 'DRAFT_CREATED',
  DraftCreatedFromReplace = 'DRAFT_CREATED_FROM_REPLACE',
  AddedProducts = 'ADDED_PRODUCTS',
  RemovedProducts = 'REMOVED_PRODUCTS',
  Placed = 'PLACED',
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  OversoldItems = 'OVERSOLD_ITEMS',
  Canceled = 'CANCELED',
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderReplacementCreated = 'ORDER_REPLACEMENT_CREATED',
  OrderDiscountAdded = 'ORDER_DISCOUNT_ADDED',
  OrderDiscountAutomaticallyUpdated = 'ORDER_DISCOUNT_AUTOMATICALLY_UPDATED',
  OrderDiscountUpdated = 'ORDER_DISCOUNT_UPDATED',
  OrderDiscountDeleted = 'ORDER_DISCOUNT_DELETED',
  OrderLineDiscountUpdated = 'ORDER_LINE_DISCOUNT_UPDATED',
  OrderLineDiscountRemoved = 'ORDER_LINE_DISCOUNT_REMOVED',
  OrderLineProductDeleted = 'ORDER_LINE_PRODUCT_DELETED',
  OrderLineVariantDeleted = 'ORDER_LINE_VARIANT_DELETED',
  UpdatedAddress = 'UPDATED_ADDRESS',
  EmailSent = 'EMAIL_SENT',
  Confirmed = 'CONFIRMED',
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
  PaymentRefunded = 'PAYMENT_REFUNDED',
  PaymentVoided = 'PAYMENT_VOIDED',
  PaymentFailed = 'PAYMENT_FAILED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceGenerated = 'INVOICE_GENERATED',
  InvoiceUpdated = 'INVOICE_UPDATED',
  InvoiceSent = 'INVOICE_SENT',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  FulfillmentRefunded = 'FULFILLMENT_REFUNDED',
  FulfillmentReturned = 'FULFILLMENT_RETURNED',
  FulfillmentReplaced = 'FULFILLMENT_REPLACED',
  FulfillmentAwaitsApproval = 'FULFILLMENT_AWAITS_APPROVAL',
  TrackingUpdated = 'TRACKING_UPDATED',
  NoteAdded = 'NOTE_ADDED',
  Other = 'OTHER',
}

export type OrderFilterInput = {
  paymentStatus?: Maybe<Array<Maybe<PaymentChargeStatusEnum>>>
  status?: Maybe<Array<Maybe<OrderStatusFilter>>>
  customer?: Maybe<Scalars['String']>
  created?: Maybe<DateRangeInput>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  channels?: Maybe<Array<Maybe<Scalars['ID']>>>
  isClickAndCollect?: Maybe<Scalars['Boolean']>
  isPreorder?: Maybe<Scalars['Boolean']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Creates new fulfillments for an order. */
export type OrderFulfill = {
  __typename?: 'OrderFulfill'
  /** List of created fulfillments. */
  fulfillments?: Maybe<Array<Maybe<Fulfillment>>>
  /** Fulfilled order. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderFulfillInput = {
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>
  /** If true, send an email notification to the customer. */
  notifyCustomer?: Maybe<Scalars['Boolean']>
  /** If true, then allow proceed fulfillment when stock is exceeded. */
  allowStockToBeExceeded?: Maybe<Scalars['Boolean']>
}

export type OrderFulfillLineInput = {
  /** The ID of the order line. */
  orderLineId?: Maybe<Scalars['ID']>
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>
}

export type OrderFulfillStockInput = {
  /** The number of line items to be fulfilled from given warehouse. */
  quantity: Scalars['Int']
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID']
}

/** Represents order line of particular order. */
export type OrderLine = Node & {
  __typename?: 'OrderLine'
  /** The ID of the object. */
  id: Scalars['ID']
  productName: Scalars['String']
  variantName: Scalars['String']
  productSku?: Maybe<Scalars['String']>
  productVariantId?: Maybe<Scalars['String']>
  isShippingRequired: Scalars['Boolean']
  quantity: Scalars['Int']
  quantityFulfilled: Scalars['Int']
  unitDiscountReason?: Maybe<Scalars['String']>
  taxRate: Scalars['Float']
  digitalContentUrl?: Maybe<DigitalContentUrl>
  /** The main thumbnail for the ordered product. */
  thumbnail?: Maybe<Image>
  /** Price of the single item in the order line. */
  unitPrice: TaxedMoney
  /** Price of the single item in the order line without applied an order line discount. */
  undiscountedUnitPrice: TaxedMoney
  /** The discount applied to the single order line. */
  unitDiscount: Money
  /** Value of the discount. Can store fixed value or percent value */
  unitDiscountValue: Scalars['PositiveDecimal']
  /** Price of the order line. */
  totalPrice: TaxedMoney
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
  variant?: Maybe<ProductVariant>
  /** Product name in the customer's language */
  translatedProductName: Scalars['String']
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String']
  /** List of allocations across warehouses. */
  allocations?: Maybe<Array<Allocation>>
  /** New in Saleor 3.1. A quantity of items remaining to be fulfilled. */
  quantityToFulfill: Scalars['Int']
  /** Type of the discount: fixed or percent */
  unitDiscountType?: Maybe<DiscountValueTypeEnum>
}

/** Represents order line of particular order. */
export type OrderLineThumbnailArgs = {
  size?: Maybe<Scalars['Int']>
}

export type OrderLineCreateInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int']
  /** Product variant ID. */
  variantId: Scalars['ID']
}

/** Deletes an order line from an order. */
export type OrderLineDelete = {
  __typename?: 'OrderLineDelete'
  /** A related order. */
  order?: Maybe<Order>
  /** An order line that was deleted. */
  orderLine?: Maybe<OrderLine>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Remove discount applied to the order line. */
export type OrderLineDiscountRemove = {
  __typename?: 'OrderLineDiscountRemove'
  /** Order line which has removed discount. */
  orderLine?: Maybe<OrderLine>
  /** Order which is related to line which has removed discount. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Update discount for the order line. */
export type OrderLineDiscountUpdate = {
  __typename?: 'OrderLineDiscountUpdate'
  /** Order line which has been discounted. */
  orderLine?: Maybe<OrderLine>
  /** Order which is related to the discounted line. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderLineInput = {
  /** Number of variant items ordered. */
  quantity: Scalars['Int']
}

/** Updates an order line of an order. */
export type OrderLineUpdate = {
  __typename?: 'OrderLineUpdate'
  /** Related order. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
  orderLine?: Maybe<OrderLine>
}

/** Create order lines for an order. */
export type OrderLinesCreate = {
  __typename?: 'OrderLinesCreate'
  /** Related order. */
  order?: Maybe<Order>
  /** List of added order lines. */
  orderLines?: Maybe<Array<OrderLine>>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** Mark order as manually paid. */
export type OrderMarkAsPaid = {
  __typename?: 'OrderMarkAsPaid'
  /** Order marked as paid. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** An enumeration. */
export enum OrderOriginEnum {
  Checkout = 'CHECKOUT',
  Draft = 'DRAFT',
  Reissue = 'REISSUE',
}

/** Refund an order. */
export type OrderRefund = {
  __typename?: 'OrderRefund'
  /** A refunded order. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderRefundFulfillmentLineInput = {
  /** The ID of the fulfillment line to refund. */
  fulfillmentLineId: Scalars['ID']
  /** The number of items to be refunded. */
  quantity: Scalars['Int']
}

export type OrderRefundLineInput = {
  /** The ID of the order line to refund. */
  orderLineId: Scalars['ID']
  /** The number of items to be refunded. */
  quantity: Scalars['Int']
}

export type OrderRefundProductsInput = {
  /** List of unfulfilled lines to refund. */
  orderLines?: Maybe<Array<OrderRefundLineInput>>
  /** List of fulfilled lines to refund. */
  fulfillmentLines?: Maybe<Array<OrderRefundFulfillmentLineInput>>
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: Maybe<Scalars['PositiveDecimal']>
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: Maybe<Scalars['Boolean']>
}

export type OrderReturnFulfillmentLineInput = {
  /** The ID of the fulfillment line to return. */
  fulfillmentLineId: Scalars['ID']
  /** The number of items to be returned. */
  quantity: Scalars['Int']
  /** Determines, if the line should be added to replace order. */
  replace?: Maybe<Scalars['Boolean']>
}

export type OrderReturnLineInput = {
  /** The ID of the order line to return. */
  orderLineId: Scalars['ID']
  /** The number of items to be returned. */
  quantity: Scalars['Int']
  /** Determines, if the line should be added to replace order. */
  replace?: Maybe<Scalars['Boolean']>
}

export type OrderReturnProductsInput = {
  /** List of unfulfilled lines to return. */
  orderLines?: Maybe<Array<OrderReturnLineInput>>
  /** List of fulfilled lines to return. */
  fulfillmentLines?: Maybe<Array<OrderReturnFulfillmentLineInput>>
  /** The total amount of refund when the value is provided manually. */
  amountToRefund?: Maybe<Scalars['PositiveDecimal']>
  /** If true, Saleor will refund shipping costs. If amountToRefund is providedincludeShippingCosts will be ignored. */
  includeShippingCosts?: Maybe<Scalars['Boolean']>
  /** If true, Saleor will call refund action for all lines. */
  refund?: Maybe<Scalars['Boolean']>
}

/** Order related settings from site settings. */
export type OrderSettings = {
  __typename?: 'OrderSettings'
  automaticallyConfirmAllNewOrders: Scalars['Boolean']
  automaticallyFulfillNonShippableGiftCard: Scalars['Boolean']
}

export type OrderSettingsError = {
  __typename?: 'OrderSettingsError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: OrderSettingsErrorCode
}

/** An enumeration. */
export enum OrderSettingsErrorCode {
  Invalid = 'INVALID',
}

/** Update shop order settings. */
export type OrderSettingsUpdate = {
  __typename?: 'OrderSettingsUpdate'
  /** Order settings. */
  orderSettings?: Maybe<OrderSettings>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderSettingsErrors: Array<OrderSettingsError>
  errors: Array<OrderSettingsError>
}

export type OrderSettingsUpdateInput = {
  /** When disabled, all new orders from checkout will be marked as unconfirmed. When enabled orders from checkout will become unfulfilled immediately. */
  automaticallyConfirmAllNewOrders?: Maybe<Scalars['Boolean']>
  /** When enabled, all non-shippable gift card orders will be fulfilled automatically. */
  automaticallyFulfillNonShippableGiftCard?: Maybe<Scalars['Boolean']>
}

export enum OrderSortField {
  /** Sort orders by number. */
  Number = 'NUMBER',
  /** Sort orders by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort orders by customer. */
  Customer = 'CUSTOMER',
  /** Sort orders by payment. */
  Payment = 'PAYMENT',
  /** Sort orders by fulfillment status. */
  FulfillmentStatus = 'FULFILLMENT_STATUS',
}

export type OrderSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort orders by the selected field. */
  field: OrderSortField
}

/** An enumeration. */
export enum OrderStatus {
  /** Draft */
  Draft = 'DRAFT',
  /** Unconfirmed */
  Unconfirmed = 'UNCONFIRMED',
  /** Unfulfilled */
  Unfulfilled = 'UNFULFILLED',
  /** Partially fulfilled */
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  /** Partially returned */
  PartiallyReturned = 'PARTIALLY_RETURNED',
  /** Returned */
  Returned = 'RETURNED',
  /** Fulfilled */
  Fulfilled = 'FULFILLED',
  /** Canceled */
  Canceled = 'CANCELED',
}

export enum OrderStatusFilter {
  ReadyToFulfill = 'READY_TO_FULFILL',
  ReadyToCapture = 'READY_TO_CAPTURE',
  Unfulfilled = 'UNFULFILLED',
  Unconfirmed = 'UNCONFIRMED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  Fulfilled = 'FULFILLED',
  Canceled = 'CANCELED',
}

/** Updates an order. */
export type OrderUpdate = {
  __typename?: 'OrderUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
  order?: Maybe<Order>
}

export type OrderUpdateInput = {
  /** Billing address of the customer. */
  billingAddress?: Maybe<AddressInput>
  /** Email address of the customer. */
  userEmail?: Maybe<Scalars['String']>
  /** Shipping address of the customer. */
  shippingAddress?: Maybe<AddressInput>
}

/** Updates a shipping method of the order. Requires shipping method ID to update, when null is passed then currently assigned shipping method is removed. */
export type OrderUpdateShipping = {
  __typename?: 'OrderUpdateShipping'
  /** Order with updated shipping method. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

export type OrderUpdateShippingInput = {
  /** ID of the selected shipping method, pass null to remove currently assigned shipping method. */
  shippingMethod?: Maybe<Scalars['ID']>
}

/** Void an order. */
export type OrderVoid = {
  __typename?: 'OrderVoid'
  /** A voided order. */
  order?: Maybe<Order>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  orderErrors: Array<OrderError>
  errors: Array<OrderError>
}

/** A static page that can be manually added by a shop operator through the dashboard. */
export type Page = Node &
  ObjectWithMetadata & {
    __typename?: 'Page'
    /** The ID of the object. */
    id: Scalars['ID']
    seoTitle?: Maybe<Scalars['String']>
    seoDescription?: Maybe<Scalars['String']>
    title: Scalars['String']
    content?: Maybe<Scalars['JSONString']>
    publicationDate?: Maybe<Scalars['Date']>
    isPublished: Scalars['Boolean']
    slug: Scalars['String']
    pageType: PageType
    created: Scalars['DateTime']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /**
     * Content of the page (JSON).
     * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
     */
    contentJson: Scalars['JSONString']
    /** Returns translated page fields for the given language code. */
    translation?: Maybe<PageTranslation>
    /** List of attributes assigned to this product. */
    attributes: Array<SelectedAttribute>
  }

/** A static page that can be manually added by a shop operator through the dashboard. */
export type PageTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Assign attributes to a given page type. */
export type PageAttributeAssign = {
  __typename?: 'PageAttributeAssign'
  /** The updated page type. */
  pageType?: Maybe<PageType>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
}

/** Unassign attributes from a given page type. */
export type PageAttributeUnassign = {
  __typename?: 'PageAttributeUnassign'
  /** The updated page type. */
  pageType?: Maybe<PageType>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
}

/** Deletes pages. */
export type PageBulkDelete = {
  __typename?: 'PageBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
}

/** Publish pages. */
export type PageBulkPublish = {
  __typename?: 'PageBulkPublish'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
}

export type PageCountableConnection = {
  __typename?: 'PageCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<PageCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type PageCountableEdge = {
  __typename?: 'PageCountableEdge'
  /** The item at the end of the edge. */
  node: Page
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new page. */
export type PageCreate = {
  __typename?: 'PageCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
  page?: Maybe<Page>
}

export type PageCreateInput = {
  /** Page internal name. */
  slug?: Maybe<Scalars['String']>
  /** Page title. */
  title?: Maybe<Scalars['String']>
  /** Page content in JSON format. */
  content?: Maybe<Scalars['JSONString']>
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>
  /** Determines if page is visible in the storefront. */
  isPublished?: Maybe<Scalars['Boolean']>
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['String']>
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>
  /** ID of the page type that page belongs to. */
  pageType: Scalars['ID']
}

/** Deletes a page. */
export type PageDelete = {
  __typename?: 'PageDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
  page?: Maybe<Page>
}

export type PageError = {
  __typename?: 'PageError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: PageErrorCode
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>
}

/** An enumeration. */
export enum PageErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
}

export type PageFilterInput = {
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  pageTypes?: Maybe<Array<Maybe<Scalars['ID']>>>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>
}

export type PageInput = {
  /** Page internal name. */
  slug?: Maybe<Scalars['String']>
  /** Page title. */
  title?: Maybe<Scalars['String']>
  /** Page content in JSON format. */
  content?: Maybe<Scalars['JSONString']>
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>
  /** Determines if page is visible in the storefront. */
  isPublished?: Maybe<Scalars['Boolean']>
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['String']>
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>
}

/** Reorder page attribute values. */
export type PageReorderAttributeValues = {
  __typename?: 'PageReorderAttributeValues'
  /** Page from which attribute values are reordered. */
  page?: Maybe<Page>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
}

export enum PageSortField {
  /** Sort pages by title. */
  Title = 'TITLE',
  /** Sort pages by slug. */
  Slug = 'SLUG',
  /** Sort pages by visibility. */
  Visibility = 'VISIBILITY',
  /** Sort pages by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort pages by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
}

export type PageSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort pages by the selected field. */
  field: PageSortField
}

export type PageTranslatableContent = Node & {
  __typename?: 'PageTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  title: Scalars['String']
  content?: Maybe<Scalars['JSONString']>
  /**
   * Content of the page (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']>
  /** Returns translated page fields for the given language code. */
  translation?: Maybe<PageTranslation>
  /**
   * ('A static page that can be manually added by a shop operator ', 'through the dashboard.')
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  page?: Maybe<Page>
  /** List of page content attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>
}

export type PageTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a page. */
export type PageTranslate = {
  __typename?: 'PageTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  page?: Maybe<PageTranslatableContent>
}

export type PageTranslation = Node & {
  __typename?: 'PageTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSONString']>
  /** Translation language. */
  language: LanguageDisplay
  /**
   * Translated description of the page (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `content` field instead.
   */
  contentJson?: Maybe<Scalars['JSONString']>
}

export type PageTranslationInput = {
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  content?: Maybe<Scalars['JSONString']>
}

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageType = Node &
  ObjectWithMetadata & {
    __typename?: 'PageType'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Page attributes of that page type. */
    attributes?: Maybe<Array<Maybe<Attribute>>>
    /** Attributes that can be assigned to the page type. */
    availableAttributes?: Maybe<AttributeCountableConnection>
    /** Whether page type has pages assigned. */
    hasPages?: Maybe<Scalars['Boolean']>
  }

/** Represents a type of page. It defines what attributes are available to pages of this type. */
export type PageTypeAvailableAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Delete page types. */
export type PageTypeBulkDelete = {
  __typename?: 'PageTypeBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
}

export type PageTypeCountableConnection = {
  __typename?: 'PageTypeCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<PageTypeCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type PageTypeCountableEdge = {
  __typename?: 'PageTypeCountableEdge'
  /** The item at the end of the edge. */
  node: PageType
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Create a new page type. */
export type PageTypeCreate = {
  __typename?: 'PageTypeCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
  pageType?: Maybe<PageType>
}

export type PageTypeCreateInput = {
  /** Name of the page type. */
  name?: Maybe<Scalars['String']>
  /** Page type slug. */
  slug?: Maybe<Scalars['String']>
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: Maybe<Array<Scalars['ID']>>
}

/** Delete a page type. */
export type PageTypeDelete = {
  __typename?: 'PageTypeDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
  pageType?: Maybe<PageType>
}

export type PageTypeFilterInput = {
  search?: Maybe<Scalars['String']>
}

/** Reorder the attributes of a page type. */
export type PageTypeReorderAttributes = {
  __typename?: 'PageTypeReorderAttributes'
  /** Page type from which attributes are reordered. */
  pageType?: Maybe<PageType>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
}

export enum PageTypeSortField {
  /** Sort page types by name. */
  Name = 'NAME',
  /** Sort page types by slug. */
  Slug = 'SLUG',
}

export type PageTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort page types by the selected field. */
  field: PageTypeSortField
}

/** Update page type. */
export type PageTypeUpdate = {
  __typename?: 'PageTypeUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
  pageType?: Maybe<PageType>
}

export type PageTypeUpdateInput = {
  /** Name of the page type. */
  name?: Maybe<Scalars['String']>
  /** Page type slug. */
  slug?: Maybe<Scalars['String']>
  /** List of attribute IDs to be assigned to the page type. */
  addAttributes?: Maybe<Array<Scalars['ID']>>
  /** List of attribute IDs to be assigned to the page type. */
  removeAttributes?: Maybe<Array<Scalars['ID']>>
}

/** Updates an existing page. */
export type PageUpdate = {
  __typename?: 'PageUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pageErrors: Array<PageError>
  errors: Array<PageError>
  page?: Maybe<Page>
}

/** Change the password of the logged in user. */
export type PasswordChange = {
  __typename?: 'PasswordChange'
  /** A user instance with a new password. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Represents a payment of a given type. */
export type Payment = Node &
  ObjectWithMetadata & {
    __typename?: 'Payment'
    /** The ID of the object. */
    id: Scalars['ID']
    gateway: Scalars['String']
    isActive: Scalars['Boolean']
    created: Scalars['DateTime']
    modified: Scalars['DateTime']
    token: Scalars['String']
    checkout?: Maybe<Checkout>
    order?: Maybe<Order>
    paymentMethodType: Scalars['String']
    customerIpAddress?: Maybe<Scalars['String']>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Internal payment status. */
    chargeStatus: PaymentChargeStatusEnum
    /** List of actions that can be performed in the current state of a payment. */
    actions: Array<Maybe<OrderAction>>
    /** Total amount of the payment. */
    total?: Maybe<Money>
    /** Total amount captured for this payment. */
    capturedAmount?: Maybe<Money>
    /** List of all transactions within this payment. */
    transactions?: Maybe<Array<Maybe<Transaction>>>
    /** Maximum amount of money that can be captured. */
    availableCaptureAmount?: Maybe<Money>
    /** Maximum amount of money that can be refunded. */
    availableRefundAmount?: Maybe<Money>
    /** The details of the card used for this payment. */
    creditCard?: Maybe<CreditCard>
  }

/** Captures the authorized payment amount. */
export type PaymentCapture = {
  __typename?: 'PaymentCapture'
  /** Updated payment. */
  payment?: Maybe<Payment>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>
  errors: Array<PaymentError>
}

/** An enumeration. */
export enum PaymentChargeStatusEnum {
  NotCharged = 'NOT_CHARGED',
  Pending = 'PENDING',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  FullyCharged = 'FULLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  FullyRefunded = 'FULLY_REFUNDED',
  Refused = 'REFUSED',
  Cancelled = 'CANCELLED',
}

/** Check payment balance. */
export type PaymentCheckBalance = {
  __typename?: 'PaymentCheckBalance'
  /** Response from the gateway. */
  data?: Maybe<Scalars['JSONString']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>
  errors: Array<PaymentError>
}

export type PaymentCheckBalanceInput = {
  /** An ID of a payment gateway to check. */
  gatewayId: Scalars['String']
  /** Payment method name. */
  method: Scalars['String']
  /** Slug of a channel for which the data should be returned. */
  channel: Scalars['String']
  /** Information about card. */
  card: CardInput
}

export type PaymentCountableConnection = {
  __typename?: 'PaymentCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<PaymentCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type PaymentCountableEdge = {
  __typename?: 'PaymentCountableEdge'
  /** The item at the end of the edge. */
  node: Payment
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type PaymentError = {
  __typename?: 'PaymentError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: PaymentErrorCode
}

/** An enumeration. */
export enum PaymentErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  PaymentError = 'PAYMENT_ERROR',
  NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
  ChannelInactive = 'CHANNEL_INACTIVE',
  BalanceCheckError = 'BALANCE_CHECK_ERROR',
}

export type PaymentFilterInput = {
  checkouts?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Available payment gateway backend with configuration necessary to setup client. */
export type PaymentGateway = {
  __typename?: 'PaymentGateway'
  /** Payment gateway name. */
  name: Scalars['String']
  /** Payment gateway ID. */
  id: Scalars['ID']
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>
  /** Payment gateway supported currencies. */
  currencies: Array<Maybe<Scalars['String']>>
}

/** Initializes payment process when it is required by gateway. */
export type PaymentInitialize = {
  __typename?: 'PaymentInitialize'
  initializedPayment?: Maybe<PaymentInitialized>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>
  errors: Array<PaymentError>
}

/** Server-side data generated by a payment gateway. Optional step when the payment provider requires an additional action to initialize payment session. */
export type PaymentInitialized = {
  __typename?: 'PaymentInitialized'
  /** ID of a payment gateway. */
  gateway: Scalars['String']
  /** Payment gateway name. */
  name: Scalars['String']
  /** Initialized data by gateway. */
  data?: Maybe<Scalars['JSONString']>
}

export type PaymentInput = {
  /** A gateway to use with that payment. */
  gateway: Scalars['String']
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: Maybe<Scalars['String']>
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: Maybe<Scalars['PositiveDecimal']>
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. Payment store type. */
  storePaymentMethod?: Maybe<StorePaymentMethodEnum>
  /** New in Saleor 3.1. User public metadata. */
  metadata?: Maybe<Array<MetadataInput>>
}

/** Refunds the captured payment amount. */
export type PaymentRefund = {
  __typename?: 'PaymentRefund'
  /** Updated payment. */
  payment?: Maybe<Payment>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>
  errors: Array<PaymentError>
}

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export type PaymentSource = {
  __typename?: 'PaymentSource'
  /** Payment gateway name. */
  gateway: Scalars['String']
  /** ID of stored payment method. */
  paymentMethodId?: Maybe<Scalars['String']>
  /** Stored credit card details if available. */
  creditCardInfo?: Maybe<CreditCard>
  /** New in Saleor 3.1. List of public metadata items. Can be accessed without permissions. */
  metadata: Array<Maybe<MetadataItem>>
}

/** Voids the authorized payment. */
export type PaymentVoid = {
  __typename?: 'PaymentVoid'
  /** Updated payment. */
  payment?: Maybe<Payment>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  paymentErrors: Array<PaymentError>
  errors: Array<PaymentError>
}

/** Represents a permission object in a friendly form. */
export type Permission = {
  __typename?: 'Permission'
  /** Internal code for permission. */
  code: PermissionEnum
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']
}

/** An enumeration. */
export enum PermissionEnum {
  ManageUsers = 'MANAGE_USERS',
  ManageStaff = 'MANAGE_STAFF',
  ImpersonateUser = 'IMPERSONATE_USER',
  ManageApps = 'MANAGE_APPS',
  ManageChannels = 'MANAGE_CHANNELS',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManageGiftCard = 'MANAGE_GIFT_CARD',
  ManageMenus = 'MANAGE_MENUS',
  ManageOrders = 'MANAGE_ORDERS',
  ManagePages = 'MANAGE_PAGES',
  ManagePageTypesAndAttributes = 'MANAGE_PAGE_TYPES_AND_ATTRIBUTES',
  HandlePayments = 'HANDLE_PAYMENTS',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
}

/** Create new permission group. */
export type PermissionGroupCreate = {
  __typename?: 'PermissionGroupCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>
  errors: Array<PermissionGroupError>
  group?: Maybe<Group>
}

export type PermissionGroupCreateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>
  /** Group name. */
  name: Scalars['String']
}

/** Delete permission group. */
export type PermissionGroupDelete = {
  __typename?: 'PermissionGroupDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>
  errors: Array<PermissionGroupError>
  group?: Maybe<Group>
}

export type PermissionGroupError = {
  __typename?: 'PermissionGroupError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: PermissionGroupErrorCode
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']>>
}

/** An enumeration. */
export enum PermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type PermissionGroupFilterInput = {
  search?: Maybe<Scalars['String']>
}

export enum PermissionGroupSortField {
  /** Sort permission group accounts by name. */
  Name = 'NAME',
}

export type PermissionGroupSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField
}

/** Update permission group. */
export type PermissionGroupUpdate = {
  __typename?: 'PermissionGroupUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  permissionGroupErrors: Array<PermissionGroupError>
  errors: Array<PermissionGroupError>
  group?: Maybe<Group>
}

export type PermissionGroupUpdateInput = {
  /** List of permission code names to assign to this group. */
  addPermissions?: Maybe<Array<PermissionEnum>>
  /** List of users to assign to this group. */
  addUsers?: Maybe<Array<Scalars['ID']>>
  /** Group name. */
  name?: Maybe<Scalars['String']>
  /** List of permission code names to unassign from this group. */
  removePermissions?: Maybe<Array<PermissionEnum>>
  /** List of users to unassign from this group. */
  removeUsers?: Maybe<Array<Scalars['ID']>>
}

/** Plugin. */
export type Plugin = {
  __typename?: 'Plugin'
  /** Identifier of the plugin. */
  id: Scalars['ID']
  /** Name of the plugin. */
  name: Scalars['String']
  /** Description of the plugin. */
  description: Scalars['String']
  /** Global configuration of the plugin (not channel-specific). */
  globalConfiguration?: Maybe<PluginConfiguration>
  /** Channel-specific plugin configuration. */
  channelConfigurations: Array<PluginConfiguration>
}

/** Stores information about a configuration of plugin. */
export type PluginConfiguration = {
  __typename?: 'PluginConfiguration'
  /** Determines if plugin is active or not. */
  active: Scalars['Boolean']
  /** The channel to which the plugin configuration is assigned to. */
  channel?: Maybe<Channel>
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<Maybe<ConfigurationItem>>>
}

export enum PluginConfigurationType {
  PerChannel = 'PER_CHANNEL',
  Global = 'GLOBAL',
}

export type PluginCountableConnection = {
  __typename?: 'PluginCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<PluginCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type PluginCountableEdge = {
  __typename?: 'PluginCountableEdge'
  /** The item at the end of the edge. */
  node: Plugin
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type PluginError = {
  __typename?: 'PluginError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: PluginErrorCode
}

/** An enumeration. */
export enum PluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type PluginFilterInput = {
  statusInChannels?: Maybe<PluginStatusInChannelsInput>
  search?: Maybe<Scalars['String']>
  type?: Maybe<PluginConfigurationType>
}

export enum PluginSortField {
  Name = 'NAME',
  IsActive = 'IS_ACTIVE',
}

export type PluginSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort plugins by the selected field. */
  field: PluginSortField
}

export type PluginStatusInChannelsInput = {
  active: Scalars['Boolean']
  channels: Array<Scalars['ID']>
}

/** Update plugin configuration. */
export type PluginUpdate = {
  __typename?: 'PluginUpdate'
  plugin?: Maybe<Plugin>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  pluginsErrors: Array<PluginError>
  errors: Array<PluginError>
}

export type PluginUpdateInput = {
  /** Indicates whether the plugin should be enabled. */
  active?: Maybe<Scalars['Boolean']>
  /** Configuration of the plugin. */
  configuration?: Maybe<Array<Maybe<ConfigurationItemInput>>>
}

/** An enumeration. */
export enum PostalCodeRuleInclusionTypeEnum {
  Include = 'INCLUDE',
  Exclude = 'EXCLUDE',
}

/** Represents preorder settings for product variant. */
export type PreorderData = {
  __typename?: 'PreorderData'
  /** The global preorder threshold for product variant. */
  globalThreshold?: Maybe<Scalars['Int']>
  /** Total number of sold product variant during preorder. */
  globalSoldUnits: Scalars['Int']
  /** Preorder end date. */
  endDate?: Maybe<Scalars['DateTime']>
}

export type PreorderSettingsInput = {
  /** The global threshold for preorder variant. */
  globalThreshold?: Maybe<Scalars['Int']>
  /** The end date for preorder. */
  endDate?: Maybe<Scalars['DateTime']>
}

/** Represents preorder variant data for channel. */
export type PreorderThreshold = {
  __typename?: 'PreorderThreshold'
  /** Preorder threshold for product variant in this channel. */
  quantity?: Maybe<Scalars['Int']>
  /** Number of sold product variant in this channel. */
  soldUnits: Scalars['Int']
}

export type PriceInput = {
  /** Currency code. */
  currency: Scalars['String']
  /** Amount of money. */
  amount: Scalars['PositiveDecimal']
}

export type PriceRangeInput = {
  /** Price greater than or equal to. */
  gte?: Maybe<Scalars['Float']>
  /** Price less than or equal to. */
  lte?: Maybe<Scalars['Float']>
}

/** Represents an individual item for sale in the storefront. */
export type Product = Node &
  ObjectWithMetadata & {
    __typename?: 'Product'
    /** The ID of the object. */
    id: Scalars['ID']
    seoTitle?: Maybe<Scalars['String']>
    seoDescription?: Maybe<Scalars['String']>
    name: Scalars['String']
    description?: Maybe<Scalars['JSONString']>
    productType: ProductType
    slug: Scalars['String']
    category?: Maybe<Category>
    updatedAt?: Maybe<Scalars['DateTime']>
    chargeTaxes: Scalars['Boolean']
    weight?: Maybe<Weight>
    defaultVariant?: Maybe<ProductVariant>
    rating?: Maybe<Scalars['Float']>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Channel given to retrieve this product. Also used by federation gateway to resolve this object in a federated query. */
    channel?: Maybe<Scalars['String']>
    /**
     * Description of the product (JSON).
     * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
     */
    descriptionJson?: Maybe<Scalars['JSONString']>
    /** The main thumbnail for a product. */
    thumbnail?: Maybe<Image>
    /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
    pricing?: Maybe<ProductPricingInfo>
    /** Whether the product is in stock and visible or not. */
    isAvailable?: Maybe<Scalars['Boolean']>
    /** A type of tax. Assigned by enabled tax gateway */
    taxType?: Maybe<TaxType>
    /** List of attributes assigned to this product. */
    attributes: Array<SelectedAttribute>
    /** List of availability in channels for the product. */
    channelListings?: Maybe<Array<ProductChannelListing>>
    /** Get a single product media by ID. */
    mediaById?: Maybe<ProductMedia>
    /**
     * Get a single product image by ID.
     * @deprecated This field will be removed in Saleor 4.0. Use the `mediaById` field instead.
     */
    imageById?: Maybe<ProductImage>
    /** List of variants for the product. */
    variants?: Maybe<Array<Maybe<ProductVariant>>>
    /** List of media for the product. */
    media?: Maybe<Array<ProductMedia>>
    /**
     * List of images for the product.
     * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
     */
    images?: Maybe<Array<Maybe<ProductImage>>>
    /** List of collections for the product. */
    collections?: Maybe<Array<Maybe<Collection>>>
    /** Returns translated product fields for the given language code. */
    translation?: Maybe<ProductTranslation>
    /** Date when product is available for purchase.  */
    availableForPurchase?: Maybe<Scalars['Date']>
    /** Whether the product is available for purchase. */
    isAvailableForPurchase?: Maybe<Scalars['Boolean']>
  }

/** Represents an individual item for sale in the storefront. */
export type ProductThumbnailArgs = {
  size?: Maybe<Scalars['Int']>
}

/** Represents an individual item for sale in the storefront. */
export type ProductPricingArgs = {
  address?: Maybe<AddressInput>
}

/** Represents an individual item for sale in the storefront. */
export type ProductIsAvailableArgs = {
  address?: Maybe<AddressInput>
}

/** Represents an individual item for sale in the storefront. */
export type ProductMediaByIdArgs = {
  id?: Maybe<Scalars['ID']>
}

/** Represents an individual item for sale in the storefront. */
export type ProductImageByIdArgs = {
  id?: Maybe<Scalars['ID']>
}

/** Represents an individual item for sale in the storefront. */
export type ProductTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Assign attributes to a given product type. */
export type ProductAttributeAssign = {
  __typename?: 'ProductAttributeAssign'
  /** The updated product type. */
  productType?: Maybe<ProductType>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type ProductAttributeAssignInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID']
  /** The attribute type to be assigned as. */
  type: ProductAttributeType
  /** New in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
  variantSelection?: Maybe<Scalars['Boolean']>
}

/** New in Saleor 3.1. Update attributes assigned to product variant for given product type. */
export type ProductAttributeAssignmentUpdate = {
  __typename?: 'ProductAttributeAssignmentUpdate'
  /** The updated product type. */
  productType?: Maybe<ProductType>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type ProductAttributeAssignmentUpdateInput = {
  /** The ID of the attribute to assign. */
  id: Scalars['ID']
  /** New in Saleor 3.1. Whether attribute is allowed in variant selection. Allowed types are: ['dropdown', 'boolean', 'swatch', 'numeric']. */
  variantSelection: Scalars['Boolean']
}

export enum ProductAttributeType {
  Product = 'PRODUCT',
  Variant = 'VARIANT',
}

/** Un-assign attributes from a given product type. */
export type ProductAttributeUnassign = {
  __typename?: 'ProductAttributeUnassign'
  /** The updated product type. */
  productType?: Maybe<ProductType>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Deletes products. */
export type ProductBulkDelete = {
  __typename?: 'ProductBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Represents product channel listing. */
export type ProductChannelListing = Node & {
  __typename?: 'ProductChannelListing'
  /** The ID of the object. */
  id: Scalars['ID']
  publicationDate?: Maybe<Scalars['Date']>
  isPublished: Scalars['Boolean']
  channel: Channel
  visibleInListings: Scalars['Boolean']
  availableForPurchase?: Maybe<Scalars['Date']>
  /** The price of the cheapest variant (including discounts). */
  discountedPrice?: Maybe<Money>
  /** Purchase cost of product. */
  purchaseCost?: Maybe<MoneyRange>
  /** Range of margin percentage value. */
  margin?: Maybe<Margin>
  /** Whether the product is available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing?: Maybe<ProductPricingInfo>
}

/** Represents product channel listing. */
export type ProductChannelListingPricingArgs = {
  address?: Maybe<AddressInput>
}

export type ProductChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']
  /** Determines if object is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: Maybe<Scalars['Boolean']>
  /** Determine if product should be available for purchase. */
  isAvailableForPurchase?: Maybe<Scalars['Boolean']>
  /** A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed. */
  availableForPurchaseDate?: Maybe<Scalars['Date']>
  /** List of variants to which the channel should be assigned. */
  addVariants?: Maybe<Array<Scalars['ID']>>
  /** List of variants from which the channel should be unassigned. */
  removeVariants?: Maybe<Array<Scalars['ID']>>
}

export type ProductChannelListingError = {
  __typename?: 'ProductChannelListingError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ProductErrorCode
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>
  /** List of variants IDs which causes the error. */
  variants?: Maybe<Array<Scalars['ID']>>
}

/** Manage product's availability in channels. */
export type ProductChannelListingUpdate = {
  __typename?: 'ProductChannelListingUpdate'
  /** An updated product instance. */
  product?: Maybe<Product>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>
  errors: Array<ProductChannelListingError>
}

export type ProductChannelListingUpdateInput = {
  /** List of channels to which the product should be assigned or updated. */
  updateChannels?: Maybe<Array<ProductChannelListingAddInput>>
  /** List of channels from which the product should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>
}

export type ProductCountableConnection = {
  __typename?: 'ProductCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<ProductCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type ProductCountableEdge = {
  __typename?: 'ProductCountableEdge'
  /** The item at the end of the edge. */
  node: Product
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new product. */
export type ProductCreate = {
  __typename?: 'ProductCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  product?: Maybe<Product>
}

export type ProductCreateInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: Maybe<Scalars['Boolean']>
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Scalars['ID']>>
  /** Product description (JSON). */
  description?: Maybe<Scalars['JSONString']>
  /** Product name. */
  name?: Maybe<Scalars['String']>
  /** Product slug. */
  slug?: Maybe<Scalars['String']>
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>
  /** Defines the product rating value. */
  rating?: Maybe<Scalars['Float']>
  /** ID of the type that product belongs to. */
  productType: Scalars['ID']
}

/** Deletes a product. */
export type ProductDelete = {
  __typename?: 'ProductDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  product?: Maybe<Product>
}

export type ProductError = {
  __typename?: 'ProductError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ProductErrorCode
  /** List of attributes IDs which causes the error. */
  attributes?: Maybe<Array<Scalars['ID']>>
  /** List of attribute values IDs which causes the error. */
  values?: Maybe<Array<Scalars['ID']>>
}

/** An enumeration. */
export enum ProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  ProductWithoutCategory = 'PRODUCT_WITHOUT_CATEGORY',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT',
  CannotManageProductWithoutVariant = 'CANNOT_MANAGE_PRODUCT_WITHOUT_VARIANT',
  ProductNotAssignedToChannel = 'PRODUCT_NOT_ASSIGNED_TO_CHANNEL',
  UnsupportedMediaProvider = 'UNSUPPORTED_MEDIA_PROVIDER',
  PreorderVariantCannotBeDeactivated = 'PREORDER_VARIANT_CANNOT_BE_DEACTIVATED',
}

export enum ProductFieldEnum {
  Name = 'NAME',
  Description = 'DESCRIPTION',
  ProductType = 'PRODUCT_TYPE',
  Category = 'CATEGORY',
  ProductWeight = 'PRODUCT_WEIGHT',
  Collections = 'COLLECTIONS',
  ChargeTaxes = 'CHARGE_TAXES',
  ProductMedia = 'PRODUCT_MEDIA',
  VariantId = 'VARIANT_ID',
  VariantSku = 'VARIANT_SKU',
  VariantWeight = 'VARIANT_WEIGHT',
  VariantMedia = 'VARIANT_MEDIA',
}

export type ProductFilterInput = {
  isPublished?: Maybe<Scalars['Boolean']>
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  hasCategory?: Maybe<Scalars['Boolean']>
  attributes?: Maybe<Array<Maybe<AttributeInput>>>
  stockAvailability?: Maybe<StockAvailability>
  stocks?: Maybe<ProductStockFilterInput>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  price?: Maybe<PriceRangeInput>
  minimalPrice?: Maybe<PriceRangeInput>
  productTypes?: Maybe<Array<Maybe<Scalars['ID']>>>
  giftCard?: Maybe<Scalars['Boolean']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  hasPreorderedVariants?: Maybe<Scalars['Boolean']>
  /**
   * Specifies the channel by which the data should be filtered.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
}

/** Represents a product image. */
export type ProductImage = {
  __typename?: 'ProductImage'
  /** The ID of the image. */
  id: Scalars['ID']
  /** The alt text of the image. */
  alt?: Maybe<Scalars['String']>
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>
  /** The URL of the image. */
  url: Scalars['String']
}

/** Represents a product image. */
export type ProductImageUrlArgs = {
  size?: Maybe<Scalars['Int']>
}

export type ProductInput = {
  /** List of attributes. */
  attributes?: Maybe<Array<AttributeValueInput>>
  /** ID of the product's category. */
  category?: Maybe<Scalars['ID']>
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: Maybe<Scalars['Boolean']>
  /** List of IDs of collections that the product belongs to. */
  collections?: Maybe<Array<Scalars['ID']>>
  /** Product description (JSON). */
  description?: Maybe<Scalars['JSONString']>
  /** Product name. */
  name?: Maybe<Scalars['String']>
  /** Product slug. */
  slug?: Maybe<Scalars['String']>
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>
  /** Search engine optimization fields. */
  seo?: Maybe<SeoInput>
  /** Weight of the Product. */
  weight?: Maybe<Scalars['WeightScalar']>
  /** Defines the product rating value. */
  rating?: Maybe<Scalars['Float']>
}

/** Represents a product media. */
export type ProductMedia = Node & {
  __typename?: 'ProductMedia'
  /** The ID of the object. */
  id: Scalars['ID']
  sortOrder?: Maybe<Scalars['Int']>
  alt: Scalars['String']
  type: ProductMediaType
  oembedData: Scalars['JSONString']
  /** The URL of the media. */
  url: Scalars['String']
}

/** Represents a product media. */
export type ProductMediaUrlArgs = {
  size?: Maybe<Scalars['Int']>
}

/** Deletes product media. */
export type ProductMediaBulkDelete = {
  __typename?: 'ProductMediaBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Create a media object (image or video URL) associated with product. For image, this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type ProductMediaCreate = {
  __typename?: 'ProductMediaCreate'
  product?: Maybe<Product>
  media?: Maybe<ProductMedia>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type ProductMediaCreateInput = {
  /** Alt text for a product media. */
  alt?: Maybe<Scalars['String']>
  /** Represents an image file in a multipart request. */
  image?: Maybe<Scalars['Upload']>
  /** ID of an product. */
  product: Scalars['ID']
  /** Represents an URL to an external media. */
  mediaUrl?: Maybe<Scalars['String']>
}

/** Deletes a product media. */
export type ProductMediaDelete = {
  __typename?: 'ProductMediaDelete'
  product?: Maybe<Product>
  media?: Maybe<ProductMedia>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Changes ordering of the product media. */
export type ProductMediaReorder = {
  __typename?: 'ProductMediaReorder'
  product?: Maybe<Product>
  media?: Maybe<Array<ProductMedia>>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** An enumeration. */
export enum ProductMediaType {
  /** An uploaded image or an URL to an image */
  Image = 'IMAGE',
  /** A URL to an external video */
  Video = 'VIDEO',
}

/** Updates a product media. */
export type ProductMediaUpdate = {
  __typename?: 'ProductMediaUpdate'
  product?: Maybe<Product>
  media?: Maybe<ProductMedia>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type ProductMediaUpdateInput = {
  /** Alt text for a product media. */
  alt?: Maybe<Scalars['String']>
}

export type ProductOrder = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: Maybe<Scalars['ID']>
  /** Sort products by the selected field. */
  field?: Maybe<ProductOrderField>
}

export enum ProductOrderField {
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by rank. Note: This option is available only with the `search` filter. */
  Rank = 'RANK',
  /** Sort products by price. */
  Price = 'PRICE',
  /** Sort products by a minimal price of a product's variant. */
  MinimalPrice = 'MINIMAL_PRICE',
  /** Sort products by update date. */
  Date = 'DATE',
  /** Sort products by type. */
  Type = 'TYPE',
  /** Sort products by publication status. */
  Published = 'PUBLISHED',
  /** Sort products by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
  /** Sort products by collection. Note: This option is available only for the `Collection.products` query. */
  Collection = 'COLLECTION',
  /** Sort products by rating. */
  Rating = 'RATING',
}

/** Represents availability of a product in the storefront. */
export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo'
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']>
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>
  /** The discounted price range of the product variants. */
  priceRange?: Maybe<TaxedMoneyRange>
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted?: Maybe<TaxedMoneyRange>
  /** The discounted price range of the product variants in the local currency. */
  priceRangeLocalCurrency?: Maybe<TaxedMoneyRange>
}

/** Reorder product attribute values. */
export type ProductReorderAttributeValues = {
  __typename?: 'ProductReorderAttributeValues'
  /** Product from which attribute values are reordered. */
  product?: Maybe<Product>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export type ProductStockFilterInput = {
  warehouseIds?: Maybe<Array<Scalars['ID']>>
  quantity?: Maybe<IntRangeInput>
}

export type ProductTranslatableContent = Node & {
  __typename?: 'ProductTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name: Scalars['String']
  description?: Maybe<Scalars['JSONString']>
  /**
   * Description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>
  /** Returns translated product fields for the given language code. */
  translation?: Maybe<ProductTranslation>
  /**
   * Represents an individual item for sale in the storefront.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  product?: Maybe<Product>
  /** List of product attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>
}

export type ProductTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a product. */
export type ProductTranslate = {
  __typename?: 'ProductTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  product?: Maybe<Product>
}

export type ProductTranslation = Node & {
  __typename?: 'ProductTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['JSONString']>
  /** Translation language. */
  language: LanguageDisplay
  /**
   * Translated description of the product (JSON).
   * @deprecated This field will be removed in Saleor 4.0. Use the `description` field instead.
   */
  descriptionJson?: Maybe<Scalars['JSONString']>
}

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductType = Node &
  ObjectWithMetadata & {
    __typename?: 'ProductType'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    hasVariants: Scalars['Boolean']
    isShippingRequired: Scalars['Boolean']
    isDigital: Scalars['Boolean']
    weight?: Maybe<Weight>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** The product type kind. */
    kind: ProductTypeKindEnum
    /**
     * List of products of this type.
     * @deprecated This field will be removed in Saleor 4.0. Use the top-level `products` query with the `productTypes` filter.
     */
    products?: Maybe<ProductCountableConnection>
    /** A type of tax. Assigned by enabled tax gateway */
    taxType?: Maybe<TaxType>
    /**
     * Variant attributes of that product type.
     * @deprecated This field will be removed in Saleor 4.0. Use `assignedVariantAttributes` instead.
     */
    variantAttributes?: Maybe<Array<Maybe<Attribute>>>
    /** New in Saleor 3.1. Variant attributes of that product type with attached variant selection. */
    assignedVariantAttributes?: Maybe<Array<Maybe<AssignedVariantAttribute>>>
    /** Product attributes of that product type. */
    productAttributes?: Maybe<Array<Maybe<Attribute>>>
    availableAttributes?: Maybe<AttributeCountableConnection>
  }

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeProductsArgs = {
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>
}

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAssignedVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>
}

/** Represents a type of product. It defines what attributes are available to products of this type. */
export type ProductTypeAvailableAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Deletes product types. */
export type ProductTypeBulkDelete = {
  __typename?: 'ProductTypeBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export enum ProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE',
}

export type ProductTypeCountableConnection = {
  __typename?: 'ProductTypeCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<ProductTypeCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type ProductTypeCountableEdge = {
  __typename?: 'ProductTypeCountableEdge'
  /** The item at the end of the edge. */
  node: ProductType
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new product type. */
export type ProductTypeCreate = {
  __typename?: 'ProductTypeCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  productType?: Maybe<ProductType>
}

/** Deletes a product type. */
export type ProductTypeDelete = {
  __typename?: 'ProductTypeDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  productType?: Maybe<ProductType>
}

export enum ProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE',
}

export type ProductTypeFilterInput = {
  search?: Maybe<Scalars['String']>
  configurable?: Maybe<ProductTypeConfigurable>
  productType?: Maybe<ProductTypeEnum>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  kind?: Maybe<ProductTypeKindEnum>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type ProductTypeInput = {
  /** Name of the product type. */
  name?: Maybe<Scalars['String']>
  /** Product type slug. */
  slug?: Maybe<Scalars['String']>
  /** The product type kind. */
  kind?: Maybe<ProductTypeKindEnum>
  /** Determines if product of this type has multiple variants. This option mainly simplifies product management in the dashboard. There is always at least one variant created under the hood. */
  hasVariants?: Maybe<Scalars['Boolean']>
  /** List of attributes shared among all product variants. */
  productAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: Maybe<Scalars['Boolean']>
  /** Determines if products are digital. */
  isDigital?: Maybe<Scalars['Boolean']>
  /** Weight of the ProductType items. */
  weight?: Maybe<Scalars['WeightScalar']>
  /** Tax rate for enabled tax gateway. */
  taxCode?: Maybe<Scalars['String']>
}

/** An enumeration. */
export enum ProductTypeKindEnum {
  Normal = 'NORMAL',
  GiftCard = 'GIFT_CARD',
}

/** Reorder the attributes of a product type. */
export type ProductTypeReorderAttributes = {
  __typename?: 'ProductTypeReorderAttributes'
  /** Product type from which attributes are reordered. */
  productType?: Maybe<ProductType>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

export enum ProductTypeSortField {
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by type. */
  Digital = 'DIGITAL',
  /** Sort products by shipping. */
  ShippingRequired = 'SHIPPING_REQUIRED',
}

export type ProductTypeSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort product types by the selected field. */
  field: ProductTypeSortField
}

/** Updates an existing product type. */
export type ProductTypeUpdate = {
  __typename?: 'ProductTypeUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  productType?: Maybe<ProductType>
}

/** Updates an existing product. */
export type ProductUpdate = {
  __typename?: 'ProductUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  product?: Maybe<Product>
}

/** Represents a version of a product such as different size or color. */
export type ProductVariant = Node &
  ObjectWithMetadata & {
    __typename?: 'ProductVariant'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    sku?: Maybe<Scalars['String']>
    product: Product
    trackInventory: Scalars['Boolean']
    weight?: Maybe<Weight>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Channel given to retrieve this product variant. Also used by federation gateway to resolve this object in a federated query. */
    channel?: Maybe<Scalars['String']>
    /** List of price information in channels for the product. */
    channelListings?: Maybe<Array<ProductVariantChannelListing>>
    /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
    pricing?: Maybe<VariantPricingInfo>
    /** List of attributes assigned to this variant. */
    attributes: Array<SelectedAttribute>
    /** Gross margin percentage value. */
    margin?: Maybe<Scalars['Int']>
    /** Total quantity ordered. */
    quantityOrdered?: Maybe<Scalars['Int']>
    /** Total revenue generated by a variant in given period of time. Note: this field should be queried using `reportProductSales` query as it uses optimizations suitable for such calculations. */
    revenue?: Maybe<TaxedMoney>
    /**
     * List of images for the product variant.
     * @deprecated This field will be removed in Saleor 4.0. Use the `media` field instead.
     */
    images?: Maybe<Array<Maybe<ProductImage>>>
    /** List of media for the product variant. */
    media?: Maybe<Array<ProductMedia>>
    /** Returns translated product variant fields for the given language code. */
    translation?: Maybe<ProductVariantTranslation>
    /** Digital content for the product variant. */
    digitalContent?: Maybe<DigitalContent>
    /** Stocks for the product variant. */
    stocks?: Maybe<Array<Maybe<Stock>>>
    /** Quantity of a product available for sale in one checkout. */
    quantityAvailable: Scalars['Int']
    /** New in Saleor 3.1. Preorder data for product variant. */
    preorder?: Maybe<PreorderData>
  }

/** Represents a version of a product such as different size or color. */
export type ProductVariantPricingArgs = {
  address?: Maybe<AddressInput>
}

/** Represents a version of a product such as different size or color. */
export type ProductVariantAttributesArgs = {
  variantSelection?: Maybe<VariantAttributeScope>
}

/** Represents a version of a product such as different size or color. */
export type ProductVariantRevenueArgs = {
  period?: Maybe<ReportingPeriod>
}

/** Represents a version of a product such as different size or color. */
export type ProductVariantTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Represents a version of a product such as different size or color. */
export type ProductVariantStocksArgs = {
  address?: Maybe<AddressInput>
  countryCode?: Maybe<CountryCode>
}

/** Represents a version of a product such as different size or color. */
export type ProductVariantQuantityAvailableArgs = {
  address?: Maybe<AddressInput>
  countryCode?: Maybe<CountryCode>
}

/** Creates product variants for a given product. */
export type ProductVariantBulkCreate = {
  __typename?: 'ProductVariantBulkCreate'
  /** Returns how many objects were created. */
  count: Scalars['Int']
  /** List of the created variants. */
  productVariants: Array<ProductVariant>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkProductErrors: Array<BulkProductError>
  errors: Array<BulkProductError>
}

export type ProductVariantBulkCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<BulkAttributeValueInput>
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>
  /** New in Saleor 3.1. Determines if variant is in preorder. */
  preorder?: Maybe<PreorderSettingsInput>
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>
  /** List of prices assigned to channels. */
  channelListings?: Maybe<Array<ProductVariantChannelListingAddInput>>
}

/** Deletes product variants. */
export type ProductVariantBulkDelete = {
  __typename?: 'ProductVariantBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Represents product varaint channel listing. */
export type ProductVariantChannelListing = Node & {
  __typename?: 'ProductVariantChannelListing'
  /** The ID of the object. */
  id: Scalars['ID']
  channel: Channel
  price?: Maybe<Money>
  /** Cost price of the variant. */
  costPrice?: Maybe<Money>
  /** Gross margin percentage value. */
  margin?: Maybe<Scalars['Int']>
  /** New in Saleor 3.1. Preorder variant data. */
  preorderThreshold?: Maybe<PreorderThreshold>
}

export type ProductVariantChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']
  /** Price of the particular variant in channel. */
  price: Scalars['PositiveDecimal']
  /** Cost price of the variant in channel. */
  costPrice?: Maybe<Scalars['PositiveDecimal']>
  /** New in Saleor 3.1. The threshold for preorder variant in channel. */
  preorderThreshold?: Maybe<Scalars['Int']>
}

/** Manage product variant prices in channels. */
export type ProductVariantChannelListingUpdate = {
  __typename?: 'ProductVariantChannelListingUpdate'
  /** An updated product variant instance. */
  variant?: Maybe<ProductVariant>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productChannelListingErrors: Array<ProductChannelListingError>
  errors: Array<ProductChannelListingError>
}

export type ProductVariantCountableConnection = {
  __typename?: 'ProductVariantCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<ProductVariantCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type ProductVariantCountableEdge = {
  __typename?: 'ProductVariantCountableEdge'
  /** The item at the end of the edge. */
  node: ProductVariant
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new variant for a product. */
export type ProductVariantCreate = {
  __typename?: 'ProductVariantCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  productVariant?: Maybe<ProductVariant>
}

export type ProductVariantCreateInput = {
  /** List of attributes specific to this variant. */
  attributes: Array<AttributeValueInput>
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>
  /** New in Saleor 3.1. Determines if variant is in preorder. */
  preorder?: Maybe<PreorderSettingsInput>
  /** Product ID of which type is the variant. */
  product: Scalars['ID']
  /** Stocks of a product available for sale. */
  stocks?: Maybe<Array<StockInput>>
}

/** Deletes a product variant. */
export type ProductVariantDelete = {
  __typename?: 'ProductVariantDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  productVariant?: Maybe<ProductVariant>
}

export type ProductVariantFilterInput = {
  search?: Maybe<Scalars['String']>
  sku?: Maybe<Array<Maybe<Scalars['String']>>>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
  isPreorder?: Maybe<Scalars['Boolean']>
}

export type ProductVariantInput = {
  /** List of attributes specific to this variant. */
  attributes?: Maybe<Array<AttributeValueInput>>
  /** Stock keeping unit. */
  sku?: Maybe<Scalars['String']>
  /** Determines if the inventory of this variant should be tracked. If false, the quantity won't change when customers buy this item. */
  trackInventory?: Maybe<Scalars['Boolean']>
  /** Weight of the Product Variant. */
  weight?: Maybe<Scalars['WeightScalar']>
  /** New in Saleor 3.1. Determines if variant is in preorder. */
  preorder?: Maybe<PreorderSettingsInput>
}

/** New in Saleor 3.1. Deactivates product variant preorder.It changes all preorder allocation into regular allocation. */
export type ProductVariantPreorderDeactivate = {
  __typename?: 'ProductVariantPreorderDeactivate'
  /** Product variant with ended preorder. */
  productVariant?: Maybe<ProductVariant>
  errors: Array<ProductError>
}

/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
export type ProductVariantReorder = {
  __typename?: 'ProductVariantReorder'
  product?: Maybe<Product>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Reorder product variant attribute values. */
export type ProductVariantReorderAttributeValues = {
  __typename?: 'ProductVariantReorderAttributeValues'
  /** Product variant from which attribute values are reordered. */
  productVariant?: Maybe<ProductVariant>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
export type ProductVariantSetDefault = {
  __typename?: 'ProductVariantSetDefault'
  product?: Maybe<Product>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Creates stocks for product variant. */
export type ProductVariantStocksCreate = {
  __typename?: 'ProductVariantStocksCreate'
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>
  errors: Array<BulkStockError>
}

/** Delete stocks from product variant. */
export type ProductVariantStocksDelete = {
  __typename?: 'ProductVariantStocksDelete'
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  stockErrors: Array<StockError>
  errors: Array<StockError>
}

/** Update stocks for product variant. */
export type ProductVariantStocksUpdate = {
  __typename?: 'ProductVariantStocksUpdate'
  /** Updated product variant. */
  productVariant?: Maybe<ProductVariant>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  bulkStockErrors: Array<BulkStockError>
  errors: Array<BulkStockError>
}

export type ProductVariantTranslatableContent = Node & {
  __typename?: 'ProductVariantTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** Returns translated product variant fields for the given language code. */
  translation?: Maybe<ProductVariantTranslation>
  /**
   * Represents a version of a product such as different size or color.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  productVariant?: Maybe<ProductVariant>
  /** List of product variant attribute values that can be translated. */
  attributeValues: Array<AttributeValueTranslatableContent>
}

export type ProductVariantTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a product variant. */
export type ProductVariantTranslate = {
  __typename?: 'ProductVariantTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  productVariant?: Maybe<ProductVariant>
}

export type ProductVariantTranslation = Node & {
  __typename?: 'ProductVariantTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** Translation language. */
  language: LanguageDisplay
}

/** Updates an existing variant for product. */
export type ProductVariantUpdate = {
  __typename?: 'ProductVariantUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
  productVariant?: Maybe<ProductVariant>
}

export type PublishableChannelListingInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']
  /** Determines if object is visible to customers. */
  isPublished?: Maybe<Scalars['Boolean']>
  /** Publication date. ISO 8601 standard. */
  publicationDate?: Maybe<Scalars['Date']>
}

export type Query = {
  __typename?: 'Query'
  /** Look up a webhook by ID. */
  webhook?: Maybe<Webhook>
  /** List of all available webhook events. */
  webhookEvents?: Maybe<Array<Maybe<WebhookEvent>>>
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload?: Maybe<Scalars['JSONString']>
  /** Look up a warehouse by ID. */
  warehouse?: Maybe<Warehouse>
  /** List of warehouses. */
  warehouses?: Maybe<WarehouseCountableConnection>
  /** Returns a list of all translatable items of a given kind. */
  translations?: Maybe<TranslatableItemConnection>
  translation?: Maybe<TranslatableItem>
  /** Look up a stock by ID */
  stock?: Maybe<Stock>
  /** List of stocks. */
  stocks?: Maybe<StockCountableConnection>
  /** Return information about the shop. */
  shop: Shop
  /** Order related settings from site settings. */
  orderSettings?: Maybe<OrderSettings>
  /** Gift card related settings from site settings. */
  giftCardSettings: GiftCardSettings
  /** Look up a shipping zone by ID. */
  shippingZone?: Maybe<ShippingZone>
  /** List of the shop's shipping zones. */
  shippingZones?: Maybe<ShippingZoneCountableConnection>
  /** Look up digital content by ID. */
  digitalContent?: Maybe<DigitalContent>
  /** List of digital content. */
  digitalContents?: Maybe<DigitalContentCountableConnection>
  /** List of the shop's categories. */
  categories?: Maybe<CategoryCountableConnection>
  /** Look up a category by ID or slug. */
  category?: Maybe<Category>
  /** Look up a collection by ID. */
  collection?: Maybe<Collection>
  /** List of the shop's collections. */
  collections?: Maybe<CollectionCountableConnection>
  /** Look up a product by ID. */
  product?: Maybe<Product>
  /** List of the shop's products. */
  products?: Maybe<ProductCountableConnection>
  /** Look up a product type by ID. */
  productType?: Maybe<ProductType>
  /** List of the shop's product types. */
  productTypes?: Maybe<ProductTypeCountableConnection>
  /** Look up a product variant by ID or SKU. */
  productVariant?: Maybe<ProductVariant>
  /** List of product variants. */
  productVariants?: Maybe<ProductVariantCountableConnection>
  /** List of top selling products. */
  reportProductSales?: Maybe<ProductVariantCountableConnection>
  /** Look up a payment by ID. */
  payment?: Maybe<Payment>
  /** List of payments. */
  payments?: Maybe<PaymentCountableConnection>
  /** Look up a page by ID or slug. */
  page?: Maybe<Page>
  /** List of the shop's pages. */
  pages?: Maybe<PageCountableConnection>
  /** Look up a page type by ID. */
  pageType?: Maybe<PageType>
  /** List of the page types. */
  pageTypes?: Maybe<PageTypeCountableConnection>
  /** List of activity events to display on homepage (at the moment it only contains order-events). */
  homepageEvents?: Maybe<OrderEventCountableConnection>
  /** Look up an order by ID. */
  order?: Maybe<Order>
  /** List of orders. */
  orders?: Maybe<OrderCountableConnection>
  /** List of draft orders. */
  draftOrders?: Maybe<OrderCountableConnection>
  /** Return the total sales amount from a specific period. */
  ordersTotal?: Maybe<TaxedMoney>
  /** Look up an order by token. */
  orderByToken?: Maybe<Order>
  /** Look up a navigation menu by ID or name. */
  menu?: Maybe<Menu>
  /** List of the storefront's menus. */
  menus?: Maybe<MenuCountableConnection>
  /** Look up a menu item by ID. */
  menuItem?: Maybe<MenuItem>
  /** List of the storefronts's menu items. */
  menuItems?: Maybe<MenuItemCountableConnection>
  /** Look up a gift card by ID. */
  giftCard?: Maybe<GiftCard>
  /** List of gift cards. */
  giftCards?: Maybe<GiftCardCountableConnection>
  /** New in Saleor 3.1. List of gift card currencies. */
  giftCardCurrencies: Array<Scalars['String']>
  /** Look up a plugin by ID. */
  plugin?: Maybe<Plugin>
  /** List of plugins. */
  plugins?: Maybe<PluginCountableConnection>
  /** Look up a sale by ID. */
  sale?: Maybe<Sale>
  /** List of the shop's sales. */
  sales?: Maybe<SaleCountableConnection>
  /** Look up a voucher by ID. */
  voucher?: Maybe<Voucher>
  /** List of the shop's vouchers. */
  vouchers?: Maybe<VoucherCountableConnection>
  /** Look up a export file by ID. */
  exportFile?: Maybe<ExportFile>
  /** List of export files. */
  exportFiles?: Maybe<ExportFileCountableConnection>
  /** List of all tax rates available from tax gateway. */
  taxTypes?: Maybe<Array<Maybe<TaxType>>>
  /** Look up a checkout by token and slug of channel. */
  checkout?: Maybe<Checkout>
  /** List of checkouts. */
  checkouts?: Maybe<CheckoutCountableConnection>
  /** List of checkout lines. */
  checkoutLines?: Maybe<CheckoutLineCountableConnection>
  /** Look up a channel by ID. */
  channel?: Maybe<Channel>
  /** List of all channels. */
  channels?: Maybe<Array<Channel>>
  /** List of the shop's attributes. */
  attributes?: Maybe<AttributeCountableConnection>
  /** Look up an attribute by ID. */
  attribute?: Maybe<Attribute>
  /** List of all apps installations */
  appsInstallations: Array<AppInstallation>
  /** List of the apps. */
  apps?: Maybe<AppCountableConnection>
  /** Look up an app by ID. If ID is not provided, return the currently authenticated app. */
  app?: Maybe<App>
  /** New in Saleor 3.1. List of all extensions */
  appExtensions?: Maybe<AppExtensionCountableConnection>
  /** New in Saleor 3.1. Look up an app extension by ID. */
  appExtension?: Maybe<AppExtension>
  /** Returns address validation rules. */
  addressValidationRules?: Maybe<AddressValidationData>
  /** Look up an address by ID. */
  address?: Maybe<Address>
  /** List of the shop's customers. */
  customers?: Maybe<UserCountableConnection>
  /** List of permission groups. */
  permissionGroups?: Maybe<GroupCountableConnection>
  /** Look up permission group by ID. */
  permissionGroup?: Maybe<Group>
  /** Return the currently authenticated user. */
  me?: Maybe<User>
  /** List of the shop's staff users. */
  staffUsers?: Maybe<UserCountableConnection>
  /** Look up a user by ID or email address. */
  user?: Maybe<User>
  _entities?: Maybe<Array<Maybe<_Entity>>>
  _service?: Maybe<_Service>
}

export type QueryWebhookArgs = {
  id: Scalars['ID']
}

export type QueryWebhookSamplePayloadArgs = {
  eventType: WebhookSampleEventTypeEnum
}

export type QueryWarehouseArgs = {
  id: Scalars['ID']
}

export type QueryWarehousesArgs = {
  filter?: Maybe<WarehouseFilterInput>
  sortBy?: Maybe<WarehouseSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryTranslationsArgs = {
  kind: TranslatableKinds
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryTranslationArgs = {
  id: Scalars['ID']
  kind: TranslatableKinds
}

export type QueryStockArgs = {
  id: Scalars['ID']
}

export type QueryStocksArgs = {
  filter?: Maybe<StockFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryShippingZoneArgs = {
  id: Scalars['ID']
  channel?: Maybe<Scalars['String']>
}

export type QueryShippingZonesArgs = {
  filter?: Maybe<ShippingZoneFilterInput>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryDigitalContentArgs = {
  id: Scalars['ID']
}

export type QueryDigitalContentsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryCategoriesArgs = {
  filter?: Maybe<CategoryFilterInput>
  sortBy?: Maybe<CategorySortingInput>
  level?: Maybe<Scalars['Int']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryCategoryArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type QueryCollectionArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
}

export type QueryCollectionsArgs = {
  filter?: Maybe<CollectionFilterInput>
  sortBy?: Maybe<CollectionSortingInput>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryProductArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
}

export type QueryProductsArgs = {
  filter?: Maybe<ProductFilterInput>
  sortBy?: Maybe<ProductOrder>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryProductTypeArgs = {
  id: Scalars['ID']
}

export type QueryProductTypesArgs = {
  filter?: Maybe<ProductTypeFilterInput>
  sortBy?: Maybe<ProductTypeSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryProductVariantArgs = {
  id?: Maybe<Scalars['ID']>
  sku?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
}

export type QueryProductVariantsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  channel?: Maybe<Scalars['String']>
  filter?: Maybe<ProductVariantFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryReportProductSalesArgs = {
  period: ReportingPeriod
  channel: Scalars['String']
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPaymentArgs = {
  id: Scalars['ID']
}

export type QueryPaymentsArgs = {
  filter?: Maybe<PaymentFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPageArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type QueryPagesArgs = {
  sortBy?: Maybe<PageSortingInput>
  filter?: Maybe<PageFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPageTypeArgs = {
  id: Scalars['ID']
}

export type QueryPageTypesArgs = {
  sortBy?: Maybe<PageTypeSortingInput>
  filter?: Maybe<PageTypeFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryHomepageEventsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryOrderArgs = {
  id: Scalars['ID']
}

export type QueryOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>
  filter?: Maybe<OrderFilterInput>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryDraftOrdersArgs = {
  sortBy?: Maybe<OrderSortingInput>
  filter?: Maybe<OrderDraftFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryOrdersTotalArgs = {
  period?: Maybe<ReportingPeriod>
  channel?: Maybe<Scalars['String']>
}

export type QueryOrderByTokenArgs = {
  token: Scalars['UUID']
}

export type QueryMenuArgs = {
  channel?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

export type QueryMenusArgs = {
  channel?: Maybe<Scalars['String']>
  sortBy?: Maybe<MenuSortingInput>
  filter?: Maybe<MenuFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryMenuItemArgs = {
  id: Scalars['ID']
  channel?: Maybe<Scalars['String']>
}

export type QueryMenuItemsArgs = {
  channel?: Maybe<Scalars['String']>
  sortBy?: Maybe<MenuItemSortingInput>
  filter?: Maybe<MenuItemFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryGiftCardArgs = {
  id: Scalars['ID']
}

export type QueryGiftCardsArgs = {
  sortBy?: Maybe<GiftCardSortingInput>
  filter?: Maybe<GiftCardFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPluginArgs = {
  id: Scalars['ID']
}

export type QueryPluginsArgs = {
  filter?: Maybe<PluginFilterInput>
  sortBy?: Maybe<PluginSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QuerySaleArgs = {
  id: Scalars['ID']
  channel?: Maybe<Scalars['String']>
}

export type QuerySalesArgs = {
  filter?: Maybe<SaleFilterInput>
  sortBy?: Maybe<SaleSortingInput>
  query?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryVoucherArgs = {
  id: Scalars['ID']
  channel?: Maybe<Scalars['String']>
}

export type QueryVouchersArgs = {
  filter?: Maybe<VoucherFilterInput>
  sortBy?: Maybe<VoucherSortingInput>
  query?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryExportFileArgs = {
  id: Scalars['ID']
}

export type QueryExportFilesArgs = {
  filter?: Maybe<ExportFileFilterInput>
  sortBy?: Maybe<ExportFileSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryCheckoutArgs = {
  token?: Maybe<Scalars['UUID']>
}

export type QueryCheckoutsArgs = {
  sortBy?: Maybe<CheckoutSortingInput>
  filter?: Maybe<CheckoutFilterInput>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryCheckoutLinesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryChannelArgs = {
  id?: Maybe<Scalars['ID']>
}

export type QueryAttributesArgs = {
  filter?: Maybe<AttributeFilterInput>
  sortBy?: Maybe<AttributeSortingInput>
  channel?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryAttributeArgs = {
  id?: Maybe<Scalars['ID']>
  slug?: Maybe<Scalars['String']>
}

export type QueryAppsArgs = {
  filter?: Maybe<AppFilterInput>
  sortBy?: Maybe<AppSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryAppArgs = {
  id?: Maybe<Scalars['ID']>
}

export type QueryAppExtensionsArgs = {
  filter?: Maybe<AppExtensionFilterInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryAppExtensionArgs = {
  id: Scalars['ID']
}

export type QueryAddressValidationRulesArgs = {
  countryCode: CountryCode
  countryArea?: Maybe<Scalars['String']>
  city?: Maybe<Scalars['String']>
  cityArea?: Maybe<Scalars['String']>
}

export type QueryAddressArgs = {
  id: Scalars['ID']
}

export type QueryCustomersArgs = {
  filter?: Maybe<CustomerFilterInput>
  sortBy?: Maybe<UserSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPermissionGroupsArgs = {
  filter?: Maybe<PermissionGroupFilterInput>
  sortBy?: Maybe<PermissionGroupSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryPermissionGroupArgs = {
  id: Scalars['ID']
}

export type QueryStaffUsersArgs = {
  filter?: Maybe<StaffUserInput>
  sortBy?: Maybe<UserSortingInput>
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

export type QueryUserArgs = {
  id?: Maybe<Scalars['ID']>
  email?: Maybe<Scalars['String']>
}

export type Query_EntitiesArgs = {
  representations?: Maybe<Array<Maybe<Scalars['_Any']>>>
}

/** Represents a reduced VAT rate for a particular type of goods. */
export type ReducedRate = {
  __typename?: 'ReducedRate'
  /** Reduced VAT rate in percent. */
  rate: Scalars['Float']
  /** A type of goods. */
  rateType: Scalars['String']
}

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export type RefreshToken = {
  __typename?: 'RefreshToken'
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>
  /** A user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

export type ReorderInput = {
  /** The ID of the item to move. */
  id: Scalars['ID']
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: Maybe<Scalars['Int']>
}

export enum ReportingPeriod {
  Today = 'TODAY',
  ThisMonth = 'THIS_MONTH',
}

/** Request email change of the logged in user. */
export type RequestEmailChange = {
  __typename?: 'RequestEmailChange'
  /** A user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Sends an email with the account password modification link. */
export type RequestPasswordReset = {
  __typename?: 'RequestPasswordReset'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type Sale = Node &
  ObjectWithMetadata & {
    __typename?: 'Sale'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    type: SaleType
    startDate: Scalars['DateTime']
    endDate?: Maybe<Scalars['DateTime']>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** List of categories this sale applies to. */
    categories?: Maybe<CategoryCountableConnection>
    /** List of collections this sale applies to. */
    collections?: Maybe<CollectionCountableConnection>
    /** List of products this sale applies to. */
    products?: Maybe<ProductCountableConnection>
    /** New in Saleor 3.1. List of product variants this sale applies to. */
    variants?: Maybe<ProductVariantCountableConnection>
    /** Returns translated sale fields for the given language code. */
    translation?: Maybe<SaleTranslation>
    /** List of channels available for the sale. */
    channelListings?: Maybe<Array<SaleChannelListing>>
    /** Sale value. */
    discountValue?: Maybe<Scalars['Float']>
    /** Currency code for sale. */
    currency?: Maybe<Scalars['String']>
  }

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCategoriesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleCollectionsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleVariantsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Sales allow creating discounts for categories, collections or products and are visible to all the customers. */
export type SaleTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Adds products, categories, collections to a voucher. */
export type SaleAddCatalogues = {
  __typename?: 'SaleAddCatalogues'
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

/** Deletes sales. */
export type SaleBulkDelete = {
  __typename?: 'SaleBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

/** Represents sale channel listing. */
export type SaleChannelListing = Node & {
  __typename?: 'SaleChannelListing'
  /** The ID of the object. */
  id: Scalars['ID']
  channel: Channel
  discountValue: Scalars['Float']
  currency: Scalars['String']
}

export type SaleChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']
  /** The value of the discount. */
  discountValue: Scalars['PositiveDecimal']
}

export type SaleChannelListingInput = {
  /** List of channels to which the sale should be assigned. */
  addChannels?: Maybe<Array<SaleChannelListingAddInput>>
  /** List of channels from which the sale should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>
}

/** Manage sale's availability in channels. */
export type SaleChannelListingUpdate = {
  __typename?: 'SaleChannelListingUpdate'
  /** An updated sale instance. */
  sale?: Maybe<Sale>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

export type SaleCountableConnection = {
  __typename?: 'SaleCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<SaleCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type SaleCountableEdge = {
  __typename?: 'SaleCountableEdge'
  /** The item at the end of the edge. */
  node: Sale
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new sale. */
export type SaleCreate = {
  __typename?: 'SaleCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
  sale?: Maybe<Sale>
}

/** Deletes a sale. */
export type SaleDelete = {
  __typename?: 'SaleDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
  sale?: Maybe<Sale>
}

export type SaleFilterInput = {
  status?: Maybe<Array<Maybe<DiscountStatusEnum>>>
  saleType?: Maybe<DiscountValueTypeEnum>
  started?: Maybe<DateTimeRangeInput>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
}

export type SaleInput = {
  /** Voucher name. */
  name?: Maybe<Scalars['String']>
  /** Fixed or percentage. */
  type?: Maybe<DiscountValueTypeEnum>
  /** Value of the voucher. */
  value?: Maybe<Scalars['PositiveDecimal']>
  /** Products related to the discount. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  variants?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Categories related to the discount. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Collections related to the discount. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>
}

/** Removes products, categories, collections from a sale. */
export type SaleRemoveCatalogues = {
  __typename?: 'SaleRemoveCatalogues'
  /** Sale of which catalogue IDs will be modified. */
  sale?: Maybe<Sale>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

export enum SaleSortField {
  /** Sort sales by name. */
  Name = 'NAME',
  /** Sort sales by start date. */
  StartDate = 'START_DATE',
  /** Sort sales by end date. */
  EndDate = 'END_DATE',
  /** Sort sales by value. */
  Value = 'VALUE',
  /** Sort sales by type. */
  Type = 'TYPE',
}

export type SaleSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
  /** Sort sales by the selected field. */
  field: SaleSortField
}

export type SaleTranslatableContent = Node & {
  __typename?: 'SaleTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  /** Returns translated sale fields for the given language code. */
  translation?: Maybe<SaleTranslation>
  /**
   * Sales allow creating discounts for categories, collections or products and are visible to all the customers.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  sale?: Maybe<Sale>
}

export type SaleTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a sale. */
export type SaleTranslate = {
  __typename?: 'SaleTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  sale?: Maybe<Sale>
}

export type SaleTranslation = Node & {
  __typename?: 'SaleTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  /** Translation language. */
  language: LanguageDisplay
}

/** An enumeration. */
export enum SaleType {
  /** fixed */
  Fixed = 'FIXED',
  /** % */
  Percentage = 'PERCENTAGE',
}

/** Updates a sale. */
export type SaleUpdate = {
  __typename?: 'SaleUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
  sale?: Maybe<Sale>
}

/** Represents a custom attribute. */
export type SelectedAttribute = {
  __typename?: 'SelectedAttribute'
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute
  /** Values of an attribute. */
  values: Array<Maybe<AttributeValue>>
}

export type SeoInput = {
  /** SEO title. */
  title?: Maybe<Scalars['String']>
  /** SEO description. */
  description?: Maybe<Scalars['String']>
}

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export type SetPassword = {
  __typename?: 'SetPassword'
  /** JWT token, required to authenticate. */
  token?: Maybe<Scalars['String']>
  /** JWT refresh token, required to re-generate access token. */
  refreshToken?: Maybe<Scalars['String']>
  /** CSRF token required to re-generate access token. */
  csrfToken?: Maybe<Scalars['String']>
  /** A user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

export type ShippingError = {
  __typename?: 'ShippingError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ShippingErrorCode
  /** List of warehouse IDs which causes the error. */
  warehouses?: Maybe<Array<Scalars['ID']>>
  /** List of channels IDs which causes the error. */
  channels?: Maybe<Array<Scalars['ID']>>
}

/** An enumeration. */
export enum ShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
}

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethod = Node &
  ObjectWithMetadata & {
    __typename?: 'ShippingMethod'
    /** Shipping method ID. */
    id: Scalars['ID']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Shipping method name. */
    name: Scalars['String']
    /** Shipping method description. */
    description?: Maybe<Scalars['JSONString']>
    /** Type of the shipping method. */
    type?: Maybe<ShippingMethodTypeEnum>
    /** Returns translated shipping method fields for the given language code. */
    translation?: Maybe<ShippingMethodTranslation>
    /** List of channels available for the method. */
    channelListings?: Maybe<Array<ShippingMethodChannelListing>>
    /** The price of the cheapest variant (including discounts). */
    price?: Maybe<Money>
    /** The price of the cheapest variant (including discounts). */
    maximumOrderPrice?: Maybe<Money>
    /** The price of the cheapest variant (including discounts). */
    minimumOrderPrice?: Maybe<Money>
    /** Postal code ranges rule of exclusion or inclusion of the shipping method. */
    postalCodeRules?: Maybe<Array<Maybe<ShippingMethodPostalCodeRule>>>
    /** List of excluded products for the shipping method. */
    excludedProducts?: Maybe<ProductCountableConnection>
    /** Minimum order weight to use this shipping method. */
    minimumOrderWeight?: Maybe<Weight>
    /** Maximum order weight to use this shipping method. */
    maximumOrderWeight?: Maybe<Weight>
    /** Maximum number of days for delivery. */
    maximumDeliveryDays?: Maybe<Scalars['Int']>
    /** Minimal number of days for delivery. */
    minimumDeliveryDays?: Maybe<Scalars['Int']>
  }

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export type ShippingMethodExcludedProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents shipping method channel listing. */
export type ShippingMethodChannelListing = Node & {
  __typename?: 'ShippingMethodChannelListing'
  /** The ID of the object. */
  id: Scalars['ID']
  channel: Channel
  minimumOrderPrice?: Maybe<Money>
  maximumOrderPrice?: Maybe<Money>
  price?: Maybe<Money>
}

export type ShippingMethodChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']
  /** Shipping price of the shipping method in this channel. */
  price?: Maybe<Scalars['PositiveDecimal']>
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: Maybe<Scalars['PositiveDecimal']>
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: Maybe<Scalars['PositiveDecimal']>
}

export type ShippingMethodChannelListingInput = {
  /** List of channels to which the shipping method should be assigned. */
  addChannels?: Maybe<Array<ShippingMethodChannelListingAddInput>>
  /** List of channels from which the shipping method should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>
}

/** Manage shipping method's availability in channels. */
export type ShippingMethodChannelListingUpdate = {
  __typename?: 'ShippingMethodChannelListingUpdate'
  /** An updated shipping method instance. */
  shippingMethod?: Maybe<ShippingMethod>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

/** Represents shipping method postal code rule. */
export type ShippingMethodPostalCodeRule = Node & {
  __typename?: 'ShippingMethodPostalCodeRule'
  /** Start address range. */
  start?: Maybe<Scalars['String']>
  /** End address range. */
  end?: Maybe<Scalars['String']>
  /** Inclusion type of the postal code rule. */
  inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>
  /** The ID of the object. */
  id: Scalars['ID']
}

export type ShippingMethodTranslatableContent = Node & {
  __typename?: 'ShippingMethodTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['JSONString']>
  /** Returns translated shipping method fields for the given language code. */
  translation?: Maybe<ShippingMethodTranslation>
  /**
   * Shipping method are the methods you'll use to get customer's orders  to them. They are directly exposed to the customers.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  shippingMethod?: Maybe<ShippingMethod>
}

export type ShippingMethodTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

export type ShippingMethodTranslation = Node & {
  __typename?: 'ShippingMethodTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['JSONString']>
  /** Translation language. */
  language: LanguageDisplay
}

/** An enumeration. */
export enum ShippingMethodTypeEnum {
  Price = 'PRICE',
  Weight = 'WEIGHT',
}

export type ShippingPostalCodeRulesCreateInputRange = {
  /** Start range of the postal code. */
  start: Scalars['String']
  /** End range of the postal code. */
  end?: Maybe<Scalars['String']>
}

/** Deletes shipping prices. */
export type ShippingPriceBulkDelete = {
  __typename?: 'ShippingPriceBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

/** Creates a new shipping price. */
export type ShippingPriceCreate = {
  __typename?: 'ShippingPriceCreate'
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>
  shippingMethod?: Maybe<ShippingMethod>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

/** Deletes a shipping price. */
export type ShippingPriceDelete = {
  __typename?: 'ShippingPriceDelete'
  /** A shipping method to delete. */
  shippingMethod?: Maybe<ShippingMethod>
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

/** Exclude products from shipping price. */
export type ShippingPriceExcludeProducts = {
  __typename?: 'ShippingPriceExcludeProducts'
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethod>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

export type ShippingPriceExcludeProductsInput = {
  /** List of products which will be excluded. */
  products: Array<Maybe<Scalars['ID']>>
}

export type ShippingPriceInput = {
  /** Name of the shipping method. */
  name?: Maybe<Scalars['String']>
  /** Shipping method description. */
  description?: Maybe<Scalars['JSONString']>
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: Maybe<Scalars['WeightScalar']>
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: Maybe<Scalars['WeightScalar']>
  /** Maximum number of days for delivery. */
  maximumDeliveryDays?: Maybe<Scalars['Int']>
  /** Minimal number of days for delivery. */
  minimumDeliveryDays?: Maybe<Scalars['Int']>
  /** Shipping type: price or weight based. */
  type?: Maybe<ShippingMethodTypeEnum>
  /** Shipping zone this method belongs to. */
  shippingZone?: Maybe<Scalars['ID']>
  /** Postal code rules to add. */
  addPostalCodeRules?: Maybe<Array<ShippingPostalCodeRulesCreateInputRange>>
  /** Postal code rules to delete. */
  deletePostalCodeRules?: Maybe<Array<Scalars['ID']>>
  /** Inclusion type for currently assigned postal code rules. */
  inclusionType?: Maybe<PostalCodeRuleInclusionTypeEnum>
}

/** Remove product from excluded list for shipping price. */
export type ShippingPriceRemoveProductFromExclude = {
  __typename?: 'ShippingPriceRemoveProductFromExclude'
  /** A shipping method with new list of excluded products. */
  shippingMethod?: Maybe<ShippingMethod>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

/** Creates/updates translations for a shipping method. */
export type ShippingPriceTranslate = {
  __typename?: 'ShippingPriceTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  shippingMethod?: Maybe<ShippingMethod>
}

export type ShippingPriceTranslationInput = {
  name?: Maybe<Scalars['String']>
  /** Translated shipping method description (JSON). */
  description?: Maybe<Scalars['JSONString']>
}

/** Updates a new shipping price. */
export type ShippingPriceUpdate = {
  __typename?: 'ShippingPriceUpdate'
  /** A shipping zone to which the shipping method belongs. */
  shippingZone?: Maybe<ShippingZone>
  shippingMethod?: Maybe<ShippingMethod>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export type ShippingZone = Node &
  ObjectWithMetadata & {
    __typename?: 'ShippingZone'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    default: Scalars['Boolean']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** Lowest and highest prices for the shipping. */
    priceRange?: Maybe<MoneyRange>
    /** List of countries available for the method. */
    countries?: Maybe<Array<Maybe<CountryDisplay>>>
    /** List of shipping methods available for orders shipped to countries within this shipping zone. */
    shippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>
    /** List of warehouses for shipping zone. */
    warehouses: Array<Warehouse>
    /** List of channels for shipping zone. */
    channels: Array<Channel>
    /** Description of a shipping zone. */
    description?: Maybe<Scalars['String']>
  }

/** Deletes shipping zones. */
export type ShippingZoneBulkDelete = {
  __typename?: 'ShippingZoneBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
}

export type ShippingZoneCountableConnection = {
  __typename?: 'ShippingZoneCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<ShippingZoneCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type ShippingZoneCountableEdge = {
  __typename?: 'ShippingZoneCountableEdge'
  /** The item at the end of the edge. */
  node: ShippingZone
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new shipping zone. */
export type ShippingZoneCreate = {
  __typename?: 'ShippingZoneCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
  shippingZone?: Maybe<ShippingZone>
}

export type ShippingZoneCreateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>
  /** Description of the shipping zone. */
  description?: Maybe<Scalars['String']>
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** List of channels to assign to the shipping zone. */
  addChannels?: Maybe<Array<Scalars['ID']>>
}

/** Deletes a shipping zone. */
export type ShippingZoneDelete = {
  __typename?: 'ShippingZoneDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
  shippingZone?: Maybe<ShippingZone>
}

export type ShippingZoneFilterInput = {
  search?: Maybe<Scalars['String']>
  channels?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Updates a new shipping zone. */
export type ShippingZoneUpdate = {
  __typename?: 'ShippingZoneUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shippingErrors: Array<ShippingError>
  errors: Array<ShippingError>
  shippingZone?: Maybe<ShippingZone>
}

export type ShippingZoneUpdateInput = {
  /** Shipping zone's name. Visible only to the staff. */
  name?: Maybe<Scalars['String']>
  /** Description of the shipping zone. */
  description?: Maybe<Scalars['String']>
  /** List of countries in this shipping zone. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Default shipping zone will be used for countries not covered by other zones. */
  default?: Maybe<Scalars['Boolean']>
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** List of channels to assign to the shipping zone. */
  addChannels?: Maybe<Array<Scalars['ID']>>
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** List of channels to unassign from the shipping zone. */
  removeChannels?: Maybe<Array<Scalars['ID']>>
}

/** Represents a shop resource containing general shop data and configuration. */
export type Shop = {
  __typename?: 'Shop'
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>
  /** List of available external authentications. */
  availableExternalAuthentications: Array<ExternalAuthentication>
  /** Shipping methods that are available for the shop. */
  availableShippingMethods?: Maybe<Array<Maybe<ShippingMethod>>>
  /** New in Saleor 3.1. List of all currencies supported by shop's channels. */
  channelCurrencies: Array<Scalars['String']>
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>
  /** Shop's default country. */
  defaultCountry?: Maybe<CountryDisplay>
  /** Default shop's email sender's name. */
  defaultMailSenderName?: Maybe<Scalars['String']>
  /** Default shop's email sender's address. */
  defaultMailSenderAddress?: Maybe<Scalars['String']>
  /** Shop's description. */
  description?: Maybe<Scalars['String']>
  /** Shop's domain data. */
  domain: Domain
  /** List of the shops's supported languages. */
  languages: Array<Maybe<LanguageDisplay>>
  /** Shop's name. */
  name: Scalars['String']
  /** List of available permissions. */
  permissions: Array<Maybe<Permission>>
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Maybe<Scalars['String']>>
  /** Header text. */
  headerText?: Maybe<Scalars['String']>
  /** Include taxes in prices. */
  includeTaxesInPrices: Scalars['Boolean']
  /** New in Saleor 3.1. Automatically approve all new fulfillments. */
  fulfillmentAutoApprove: Scalars['Boolean']
  /** New in Saleor 3.1. Allow to approve fulfillments which are unpaid. */
  fulfillmentAllowUnpaid: Scalars['Boolean']
  /** Display prices with tax in store. */
  displayGrossPrices: Scalars['Boolean']
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping: Scalars['Boolean']
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>
  /** Returns translated shop fields for the given language code. */
  translation?: Maybe<ShopTranslation>
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>
  /** New in Saleor 3.1. Default number of minutes stock will be reserved for anonymous checkout or null when stock reservation is disabled. */
  reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']>
  /** New in Saleor 3.1. Default number of minutes stock will be reserved for authenticated checkout or null when stock reservation is disabled. */
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']>
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>
  /** Company address. */
  companyAddress?: Maybe<Address>
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']>
  /** List of staff notification recipients. */
  staffNotificationRecipients?: Maybe<Array<Maybe<StaffNotificationRecipient>>>
  /** Resource limitations and current usage if any set for a shop */
  limits: LimitInfo
  /** Saleor API version. */
  version: Scalars['String']
}

/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailablePaymentGatewaysArgs = {
  currency?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
}

/** Represents a shop resource containing general shop data and configuration. */
export type ShopAvailableShippingMethodsArgs = {
  channel: Scalars['String']
  address?: Maybe<AddressInput>
}

/** Represents a shop resource containing general shop data and configuration. */
export type ShopCountriesArgs = {
  languageCode?: Maybe<LanguageCodeEnum>
}

/** Represents a shop resource containing general shop data and configuration. */
export type ShopTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
export type ShopAddressUpdate = {
  __typename?: 'ShopAddressUpdate'
  /** Updated shop. */
  shop?: Maybe<Shop>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>
  errors: Array<ShopError>
}

/** Updates site domain of the shop. */
export type ShopDomainUpdate = {
  __typename?: 'ShopDomainUpdate'
  /** Updated shop. */
  shop?: Maybe<Shop>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>
  errors: Array<ShopError>
}

export type ShopError = {
  __typename?: 'ShopError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: ShopErrorCode
}

/** An enumeration. */
export enum ShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

/** Fetch tax rates. */
export type ShopFetchTaxRates = {
  __typename?: 'ShopFetchTaxRates'
  /** Updated shop. */
  shop?: Maybe<Shop>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>
  errors: Array<ShopError>
}

export type ShopSettingsInput = {
  /** Header text. */
  headerText?: Maybe<Scalars['String']>
  /** SEO description. */
  description?: Maybe<Scalars['String']>
  /** Include taxes in prices. */
  includeTaxesInPrices?: Maybe<Scalars['Boolean']>
  /** Display prices with tax in store. */
  displayGrossPrices?: Maybe<Scalars['Boolean']>
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping?: Maybe<Scalars['Boolean']>
  /** Enable inventory tracking. */
  trackInventoryByDefault?: Maybe<Scalars['Boolean']>
  /** Default weight unit. */
  defaultWeightUnit?: Maybe<WeightUnitsEnum>
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: Maybe<Scalars['Boolean']>
  /** New in Saleor 3.1. Enable automatic approval of all new fulfillments. */
  fulfillmentAutoApprove?: Maybe<Scalars['Boolean']>
  /** New in Saleor 3.1. Enable ability to approve fulfillments which are unpaid. */
  fulfillmentAllowUnpaid?: Maybe<Scalars['Boolean']>
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: Maybe<Scalars['Int']>
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: Maybe<Scalars['Int']>
  /** Default email sender's name. */
  defaultMailSenderName?: Maybe<Scalars['String']>
  /** Default email sender's address. */
  defaultMailSenderAddress?: Maybe<Scalars['String']>
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: Maybe<Scalars['String']>
  /** New in Saleor 3.1. Default number of minutes stock will be reserved for anonymous checkout. Enter 0 or null to disable. */
  reserveStockDurationAnonymousUser?: Maybe<Scalars['Int']>
  /** New in Saleor 3.1. Default number of minutes stock will be reserved for authenticated checkout. Enter 0 or null to disable. */
  reserveStockDurationAuthenticatedUser?: Maybe<Scalars['Int']>
}

/** Creates/updates translations for shop settings. */
export type ShopSettingsTranslate = {
  __typename?: 'ShopSettingsTranslate'
  /** Updated shop settings. */
  shop?: Maybe<Shop>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
}

export type ShopSettingsTranslationInput = {
  headerText?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

/** Updates shop settings. */
export type ShopSettingsUpdate = {
  __typename?: 'ShopSettingsUpdate'
  /** Updated shop. */
  shop?: Maybe<Shop>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>
  errors: Array<ShopError>
}

export type ShopTranslation = Node & {
  __typename?: 'ShopTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  headerText: Scalars['String']
  description: Scalars['String']
  /** Translation language. */
  language: LanguageDisplay
}

export type SiteDomainInput = {
  /** Domain name for shop. */
  domain?: Maybe<Scalars['String']>
  /** Shop site name. */
  name?: Maybe<Scalars['String']>
}

/** Deletes staff users. */
export type StaffBulkDelete = {
  __typename?: 'StaffBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>
  errors: Array<StaffError>
}

/** Creates a new staff user. */
export type StaffCreate = {
  __typename?: 'StaffCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>
  errors: Array<StaffError>
  user?: Maybe<User>
}

export type StaffCreateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>
  /** Family name. */
  lastName?: Maybe<Scalars['String']>
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>
  /** A note about the user. */
  note?: Maybe<Scalars['String']>
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>
}

/** Deletes a staff user. */
export type StaffDelete = {
  __typename?: 'StaffDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>
  errors: Array<StaffError>
  user?: Maybe<User>
}

export type StaffError = {
  __typename?: 'StaffError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: AccountErrorCode
  /** A type of address that causes the error. */
  addressType?: Maybe<AddressTypeEnum>
  /** List of permissions which causes the error. */
  permissions?: Maybe<Array<PermissionEnum>>
  /** List of permission group IDs which cause the error. */
  groups?: Maybe<Array<Scalars['ID']>>
  /** List of user IDs which causes the error. */
  users?: Maybe<Array<Scalars['ID']>>
}

export enum StaffMemberStatus {
  /** User account has been activated. */
  Active = 'ACTIVE',
  /** User account has not been activated yet. */
  Deactivated = 'DEACTIVATED',
}

/** Represents a recipient of email notifications send by Saleor, such as notifications about new orders. Notifications can be assigned to staff users or arbitrary email addresses. */
export type StaffNotificationRecipient = Node & {
  __typename?: 'StaffNotificationRecipient'
  /** Returns a user subscribed to email notifications. */
  user?: Maybe<User>
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']>
  /** The ID of the object. */
  id: Scalars['ID']
  /** Returns email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']>
}

/** Creates a new staff notification recipient. */
export type StaffNotificationRecipientCreate = {
  __typename?: 'StaffNotificationRecipientCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>
  errors: Array<ShopError>
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>
}

/** Delete staff notification recipient. */
export type StaffNotificationRecipientDelete = {
  __typename?: 'StaffNotificationRecipientDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>
  errors: Array<ShopError>
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>
}

export type StaffNotificationRecipientInput = {
  /** The ID of the user subscribed to email notifications.. */
  user?: Maybe<Scalars['ID']>
  /** Email address of a user subscribed to email notifications. */
  email?: Maybe<Scalars['String']>
  /** Determines if a notification active. */
  active?: Maybe<Scalars['Boolean']>
}

/** Updates a staff notification recipient. */
export type StaffNotificationRecipientUpdate = {
  __typename?: 'StaffNotificationRecipientUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  shopErrors: Array<ShopError>
  errors: Array<ShopError>
  staffNotificationRecipient?: Maybe<StaffNotificationRecipient>
}

/** Updates an existing staff user. */
export type StaffUpdate = {
  __typename?: 'StaffUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  staffErrors: Array<StaffError>
  errors: Array<StaffError>
  user?: Maybe<User>
}

export type StaffUpdateInput = {
  /** Given name. */
  firstName?: Maybe<Scalars['String']>
  /** Family name. */
  lastName?: Maybe<Scalars['String']>
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>
  /** A note about the user. */
  note?: Maybe<Scalars['String']>
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: Maybe<Array<Scalars['ID']>>
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: Maybe<Array<Scalars['ID']>>
}

export type StaffUserInput = {
  status?: Maybe<StaffMemberStatus>
  search?: Maybe<Scalars['String']>
}

/** Represents stock. */
export type Stock = Node & {
  __typename?: 'Stock'
  warehouse: Warehouse
  productVariant: ProductVariant
  /** Quantity of a product in the warehouse's possession, including the allocated stock that is waiting for shipment. */
  quantity: Scalars['Int']
  /** The ID of the object. */
  id: Scalars['ID']
  /** Quantity allocated for orders */
  quantityAllocated: Scalars['Int']
  /** Quantity reserved for checkouts */
  quantityReserved: Scalars['Int']
}

export enum StockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK',
}

export type StockCountableConnection = {
  __typename?: 'StockCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<StockCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type StockCountableEdge = {
  __typename?: 'StockCountableEdge'
  /** The item at the end of the edge. */
  node: Stock
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type StockError = {
  __typename?: 'StockError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: StockErrorCode
}

/** An enumeration. */
export enum StockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type StockFilterInput = {
  quantity?: Maybe<Scalars['Float']>
  search?: Maybe<Scalars['String']>
}

export type StockInput = {
  /** Warehouse in which stock is located. */
  warehouse: Scalars['ID']
  /** Quantity of items available for sell. */
  quantity: Scalars['Int']
}

/** Enum representing the type of a payment storage in a gateway. */
export enum StorePaymentMethodEnum {
  /** On session storage type. The payment is stored only to be reused when the customer is present in the checkout flow. */
  OnSession = 'ON_SESSION',
  /** Off session storage type. The payment is stored to be reused even if the customer is absent. */
  OffSession = 'OFF_SESSION',
  /** Storage is disabled. The payment is not stored. */
  None = 'NONE',
}

/** Representation of tax types fetched from tax gateway. */
export type TaxType = {
  __typename?: 'TaxType'
  /** Description of the tax type. */
  description?: Maybe<Scalars['String']>
  /** External tax code used to identify given tax group. */
  taxCode?: Maybe<Scalars['String']>
}

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export type TaxedMoney = {
  __typename?: 'TaxedMoney'
  /** Currency code. */
  currency: Scalars['String']
  /** Amount of money including taxes. */
  gross: Money
  /** Amount of money without taxes. */
  net: Money
  /** Amount of taxes. */
  tax: Money
}

/** Represents a range of monetary values. */
export type TaxedMoneyRange = {
  __typename?: 'TaxedMoneyRange'
  /** Lower bound of a price range. */
  start?: Maybe<TaxedMoney>
  /** Upper bound of a price range. */
  stop?: Maybe<TaxedMoney>
}

export type TimePeriod = {
  __typename?: 'TimePeriod'
  /** The length of the period. */
  amount: Scalars['Int']
  /** The type of the period. */
  type: TimePeriodTypeEnum
}

export type TimePeriodInputType = {
  /** The length of the period. */
  amount: Scalars['Int']
  /** The type of the period. */
  type: TimePeriodTypeEnum
}

/** An enumeration. */
export enum TimePeriodTypeEnum {
  Day = 'DAY',
  Week = 'WEEK',
  Month = 'MONTH',
  Year = 'YEAR',
}

/** An object representing a single payment. */
export type Transaction = Node & {
  __typename?: 'Transaction'
  /** The ID of the object. */
  id: Scalars['ID']
  created: Scalars['DateTime']
  payment: Payment
  token: Scalars['String']
  kind: TransactionKind
  isSuccess: Scalars['Boolean']
  error?: Maybe<Scalars['String']>
  gatewayResponse: Scalars['JSONString']
  /** Total amount of the transaction. */
  amount?: Maybe<Money>
}

/** An enumeration. */
export enum TransactionKind {
  /** External reference */
  External = 'EXTERNAL',
  /** Authorization */
  Auth = 'AUTH',
  /** Pending */
  Pending = 'PENDING',
  /** Action to confirm */
  ActionToConfirm = 'ACTION_TO_CONFIRM',
  /** Refund */
  Refund = 'REFUND',
  /** Refund in progress */
  RefundOngoing = 'REFUND_ONGOING',
  /** Capture */
  Capture = 'CAPTURE',
  /** Void */
  Void = 'VOID',
  /** Confirm */
  Confirm = 'CONFIRM',
  /** Cancel */
  Cancel = 'CANCEL',
}

export type TranslatableItem =
  | ProductTranslatableContent
  | CollectionTranslatableContent
  | CategoryTranslatableContent
  | AttributeTranslatableContent
  | AttributeValueTranslatableContent
  | ProductVariantTranslatableContent
  | PageTranslatableContent
  | ShippingMethodTranslatableContent
  | SaleTranslatableContent
  | VoucherTranslatableContent
  | MenuItemTranslatableContent

export type TranslatableItemConnection = {
  __typename?: 'TranslatableItemConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<TranslatableItemEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type TranslatableItemEdge = {
  __typename?: 'TranslatableItemEdge'
  /** The item at the end of the edge. */
  node: TranslatableItem
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export enum TranslatableKinds {
  Attribute = 'ATTRIBUTE',
  AttributeValue = 'ATTRIBUTE_VALUE',
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  MenuItem = 'MENU_ITEM',
  Page = 'PAGE',
  Product = 'PRODUCT',
  Sale = 'SALE',
  ShippingMethod = 'SHIPPING_METHOD',
  Variant = 'VARIANT',
  Voucher = 'VOUCHER',
}

export type TranslationError = {
  __typename?: 'TranslationError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: TranslationErrorCode
}

/** An enumeration. */
export enum TranslationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
}

export type TranslationInput = {
  seoTitle?: Maybe<Scalars['String']>
  seoDescription?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['JSONString']>
}

export type UpdateInvoiceInput = {
  /** Invoice number */
  number?: Maybe<Scalars['String']>
  /** URL of an invoice to download. */
  url?: Maybe<Scalars['String']>
}

/** Updates metadata of an object. */
export type UpdateMetadata = {
  __typename?: 'UpdateMetadata'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>
  errors: Array<MetadataError>
  item?: Maybe<ObjectWithMetadata>
}

/** Updates private metadata of an object. */
export type UpdatePrivateMetadata = {
  __typename?: 'UpdatePrivateMetadata'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  metadataErrors: Array<MetadataError>
  errors: Array<MetadataError>
  item?: Maybe<ObjectWithMetadata>
}

export type UploadError = {
  __typename?: 'UploadError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: UploadErrorCode
}

/** An enumeration. */
export enum UploadErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
}

/** Represents user data. */
export type User = Node &
  ObjectWithMetadata & {
    __typename?: 'User'
    /** The ID of the object. */
    id: Scalars['ID']
    lastLogin?: Maybe<Scalars['DateTime']>
    email: Scalars['String']
    firstName: Scalars['String']
    lastName: Scalars['String']
    isStaff: Scalars['Boolean']
    isActive: Scalars['Boolean']
    /** A note about the customer. */
    note?: Maybe<Scalars['String']>
    dateJoined: Scalars['DateTime']
    defaultShippingAddress?: Maybe<Address>
    defaultBillingAddress?: Maybe<Address>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** List of all user's addresses. */
    addresses?: Maybe<Array<Maybe<Address>>>
    /**
     * Returns the last open checkout of this user.
     * @deprecated This field will be removed in Saleor 4.0. Use the `checkout_tokens` field to fetch the user checkouts.
     */
    checkout?: Maybe<Checkout>
    /** Returns the checkout UUID's assigned to this user. */
    checkoutTokens?: Maybe<Array<Scalars['UUID']>>
    /** List of the user gift cards. */
    giftCards?: Maybe<GiftCardCountableConnection>
    /** List of user's orders. */
    orders?: Maybe<OrderCountableConnection>
    /** List of user's permissions. */
    userPermissions?: Maybe<Array<Maybe<UserPermission>>>
    /** List of user's permission groups. */
    permissionGroups?: Maybe<Array<Maybe<Group>>>
    /** List of user's permission groups which user can manage. */
    editableGroups?: Maybe<Array<Maybe<Group>>>
    avatar?: Maybe<Image>
    /** List of events associated with the user. */
    events?: Maybe<Array<Maybe<CustomerEvent>>>
    /** List of stored payment sources. */
    storedPaymentSources?: Maybe<Array<Maybe<PaymentSource>>>
    /** User language code. */
    languageCode: LanguageCodeEnum
  }

/** Represents user data. */
export type UserCheckoutTokensArgs = {
  channel?: Maybe<Scalars['String']>
}

/** Represents user data. */
export type UserGiftCardsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents user data. */
export type UserOrdersArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Represents user data. */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>
}

/** Represents user data. */
export type UserStoredPaymentSourcesArgs = {
  channel?: Maybe<Scalars['String']>
}

/** Deletes a user avatar. Only for staff members. */
export type UserAvatarDelete = {
  __typename?: 'UserAvatarDelete'
  /** An updated user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export type UserAvatarUpdate = {
  __typename?: 'UserAvatarUpdate'
  /** An updated user instance. */
  user?: Maybe<User>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** Activate or deactivate users. */
export type UserBulkSetActive = {
  __typename?: 'UserBulkSetActive'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

export type UserCountableConnection = {
  __typename?: 'UserCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<UserCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type UserCountableEdge = {
  __typename?: 'UserCountableEdge'
  /** The item at the end of the edge. */
  node: User
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

export type UserCreateInput = {
  /** Billing address of the customer. */
  defaultBillingAddress?: Maybe<AddressInput>
  /** Shipping address of the customer. */
  defaultShippingAddress?: Maybe<AddressInput>
  /** Given name. */
  firstName?: Maybe<Scalars['String']>
  /** Family name. */
  lastName?: Maybe<Scalars['String']>
  /** The unique email address of the user. */
  email?: Maybe<Scalars['String']>
  /** User account is active. */
  isActive?: Maybe<Scalars['Boolean']>
  /** A note about the user. */
  note?: Maybe<Scalars['String']>
  /** User language code. */
  languageCode?: Maybe<LanguageCodeEnum>
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: Maybe<Scalars['String']>
  /** Slug of a channel which will be used for notify user. Optional when only one channel exists. */
  channel?: Maybe<Scalars['String']>
}

export type UserPermission = {
  __typename?: 'UserPermission'
  /** Internal code for permission. */
  code: PermissionEnum
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups?: Maybe<Array<Group>>
}

export type UserPermissionSourcePermissionGroupsArgs = {
  userId: Scalars['ID']
}

export enum UserSortField {
  /** Sort users by first name. */
  FirstName = 'FIRST_NAME',
  /** Sort users by last name. */
  LastName = 'LAST_NAME',
  /** Sort users by email. */
  Email = 'EMAIL',
  /** Sort users by order count. */
  OrderCount = 'ORDER_COUNT',
}

export type UserSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort users by the selected field. */
  field: UserSortField
}

/** Represents a VAT rate for a country. */
export type Vat = {
  __typename?: 'VAT'
  /** Country code. */
  countryCode: Scalars['String']
  /** Standard VAT rate in percent. */
  standardRate?: Maybe<Scalars['Float']>
  /** Country's VAT rate exceptions for specific types of goods. */
  reducedRates: Array<Maybe<ReducedRate>>
}

export enum VariantAttributeScope {
  All = 'ALL',
  VariantSelection = 'VARIANT_SELECTION',
  NotVariantSelection = 'NOT_VARIANT_SELECTION',
}

/** Assign an media to a product variant. */
export type VariantMediaAssign = {
  __typename?: 'VariantMediaAssign'
  productVariant?: Maybe<ProductVariant>
  media?: Maybe<ProductMedia>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Unassign an media from a product variant. */
export type VariantMediaUnassign = {
  __typename?: 'VariantMediaUnassign'
  productVariant?: Maybe<ProductVariant>
  media?: Maybe<ProductMedia>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  productErrors: Array<ProductError>
  errors: Array<ProductError>
}

/** Represents availability of a variant in the storefront. */
export type VariantPricingInfo = {
  __typename?: 'VariantPricingInfo'
  /** Whether it is in sale or not. */
  onSale?: Maybe<Scalars['Boolean']>
  /** The discount amount if in sale (null otherwise). */
  discount?: Maybe<TaxedMoney>
  /** The discount amount in the local currency. */
  discountLocalCurrency?: Maybe<TaxedMoney>
  /** The price, with any discount subtracted. */
  price?: Maybe<TaxedMoney>
  /** The price without any discount. */
  priceUndiscounted?: Maybe<TaxedMoney>
  /** The discounted price in the local currency. */
  priceLocalCurrency?: Maybe<TaxedMoney>
}

/** Verify JWT token. */
export type VerifyToken = {
  __typename?: 'VerifyToken'
  /** User assigned to token. */
  user?: Maybe<User>
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean']
  /** JWT payload. */
  payload?: Maybe<Scalars['GenericScalar']>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  accountErrors: Array<AccountError>
  errors: Array<AccountError>
}

/** An enumeration. */
export enum VolumeUnitsEnum {
  CubicMillimeter = 'CUBIC_MILLIMETER',
  CubicCentimeter = 'CUBIC_CENTIMETER',
  CubicDecimeter = 'CUBIC_DECIMETER',
  CubicMeter = 'CUBIC_METER',
  Liter = 'LITER',
  CubicFoot = 'CUBIC_FOOT',
  CubicInch = 'CUBIC_INCH',
  CubicYard = 'CUBIC_YARD',
  Qt = 'QT',
  Pint = 'PINT',
  FlOz = 'FL_OZ',
  AcreIn = 'ACRE_IN',
  AcreFt = 'ACRE_FT',
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type Voucher = Node &
  ObjectWithMetadata & {
    __typename?: 'Voucher'
    /** The ID of the object. */
    id: Scalars['ID']
    name?: Maybe<Scalars['String']>
    /** Determines a type of voucher. */
    type: VoucherTypeEnum
    code: Scalars['String']
    usageLimit?: Maybe<Scalars['Int']>
    used: Scalars['Int']
    startDate: Scalars['DateTime']
    endDate?: Maybe<Scalars['DateTime']>
    applyOncePerOrder: Scalars['Boolean']
    applyOncePerCustomer: Scalars['Boolean']
    onlyForStaff: Scalars['Boolean']
    /** Determines a type of discount for voucher - value or percentage */
    discountValueType: DiscountValueTypeEnum
    minCheckoutItemsQuantity?: Maybe<Scalars['Int']>
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /** List of categories this voucher applies to. */
    categories?: Maybe<CategoryCountableConnection>
    /** List of collections this voucher applies to. */
    collections?: Maybe<CollectionCountableConnection>
    /** List of products this voucher applies to. */
    products?: Maybe<ProductCountableConnection>
    /** New in Saleor 3.1. List of product variants this voucher applies to. */
    variants?: Maybe<ProductVariantCountableConnection>
    /** List of countries available for the shipping voucher. */
    countries?: Maybe<Array<Maybe<CountryDisplay>>>
    /** Returns translated voucher fields for the given language code. */
    translation?: Maybe<VoucherTranslation>
    /** Voucher value. */
    discountValue?: Maybe<Scalars['Float']>
    /** Currency code for voucher. */
    currency?: Maybe<Scalars['String']>
    /** Minimum order value to apply voucher. */
    minSpent?: Maybe<Money>
    /** List of availability in channels for the voucher. */
    channelListings?: Maybe<Array<VoucherChannelListing>>
  }

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCategoriesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherCollectionsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherProductsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherVariantsArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes. */
export type VoucherTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Adds products, categories, collections to a voucher. */
export type VoucherAddCatalogues = {
  __typename?: 'VoucherAddCatalogues'
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

/** Deletes vouchers. */
export type VoucherBulkDelete = {
  __typename?: 'VoucherBulkDelete'
  /** Returns how many objects were affected. */
  count: Scalars['Int']
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

/** Represents voucher channel listing. */
export type VoucherChannelListing = Node & {
  __typename?: 'VoucherChannelListing'
  /** The ID of the object. */
  id: Scalars['ID']
  channel: Channel
  discountValue: Scalars['Float']
  currency: Scalars['String']
  minSpent?: Maybe<Money>
}

export type VoucherChannelListingAddInput = {
  /** ID of a channel. */
  channelId: Scalars['ID']
  /** Value of the voucher. */
  discountValue?: Maybe<Scalars['PositiveDecimal']>
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: Maybe<Scalars['PositiveDecimal']>
}

export type VoucherChannelListingInput = {
  /** List of channels to which the voucher should be assigned. */
  addChannels?: Maybe<Array<VoucherChannelListingAddInput>>
  /** List of channels from which the voucher should be unassigned. */
  removeChannels?: Maybe<Array<Scalars['ID']>>
}

/** Manage voucher's availability in channels. */
export type VoucherChannelListingUpdate = {
  __typename?: 'VoucherChannelListingUpdate'
  /** An updated voucher instance. */
  voucher?: Maybe<Voucher>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

export type VoucherCountableConnection = {
  __typename?: 'VoucherCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<VoucherCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type VoucherCountableEdge = {
  __typename?: 'VoucherCountableEdge'
  /** The item at the end of the edge. */
  node: Voucher
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates a new voucher. */
export type VoucherCreate = {
  __typename?: 'VoucherCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
  voucher?: Maybe<Voucher>
}

/** Deletes a voucher. */
export type VoucherDelete = {
  __typename?: 'VoucherDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
  voucher?: Maybe<Voucher>
}

export enum VoucherDiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING',
}

export type VoucherFilterInput = {
  status?: Maybe<Array<Maybe<DiscountStatusEnum>>>
  timesUsed?: Maybe<IntRangeInput>
  discountType?: Maybe<Array<Maybe<VoucherDiscountType>>>
  started?: Maybe<DateTimeRangeInput>
  search?: Maybe<Scalars['String']>
  metadata?: Maybe<Array<Maybe<MetadataFilter>>>
}

export type VoucherInput = {
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: Maybe<VoucherTypeEnum>
  /** Voucher name. */
  name?: Maybe<Scalars['String']>
  /** Code to use the voucher. */
  code?: Maybe<Scalars['String']>
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: Maybe<Scalars['DateTime']>
  /** End date of the voucher in ISO 8601 format. */
  endDate?: Maybe<Scalars['DateTime']>
  /** Choices: fixed or percentage. */
  discountValueType?: Maybe<DiscountValueTypeEnum>
  /** Products discounted by the voucher. */
  products?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** New in Saleor 3.1. Variants discounted by the voucher. */
  variants?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Collections discounted by the voucher. */
  collections?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Categories discounted by the voucher. */
  categories?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: Maybe<Scalars['Int']>
  /** Country codes that can be used with the shipping voucher. */
  countries?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: Maybe<Scalars['Boolean']>
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: Maybe<Scalars['Boolean']>
  /** Voucher can be used only by staff user. */
  onlyForStaff?: Maybe<Scalars['Boolean']>
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: Maybe<Scalars['Int']>
}

/** Removes products, categories, collections from a voucher. */
export type VoucherRemoveCatalogues = {
  __typename?: 'VoucherRemoveCatalogues'
  /** Voucher of which catalogue IDs will be modified. */
  voucher?: Maybe<Voucher>
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
}

export enum VoucherSortField {
  /** Sort vouchers by code. */
  Code = 'CODE',
  /** Sort vouchers by start date. */
  StartDate = 'START_DATE',
  /** Sort vouchers by end date. */
  EndDate = 'END_DATE',
  /** Sort vouchers by value. */
  Value = 'VALUE',
  /** Sort vouchers by type. */
  Type = 'TYPE',
  /** Sort vouchers by usage limit. */
  UsageLimit = 'USAGE_LIMIT',
  /** Sort vouchers by minimum spent amount. */
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
}

export type VoucherSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /**
   * Specifies the channel in which to sort the data.
   *
   * DEPRECATED: this field will be removed in Saleor 4.0. Use root-level channel argument instead.
   */
  channel?: Maybe<Scalars['String']>
  /** Sort vouchers by the selected field. */
  field: VoucherSortField
}

export type VoucherTranslatableContent = Node & {
  __typename?: 'VoucherTranslatableContent'
  /** The ID of the object. */
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  /** Returns translated voucher fields for the given language code. */
  translation?: Maybe<VoucherTranslation>
  /**
   * Vouchers allow giving discounts to particular customers on categories, collections or specific products. They can be used during checkout by providing valid voucher codes.
   * @deprecated This field will be removed in Saleor 4.0. Get model fields from the root level queries.
   */
  voucher?: Maybe<Voucher>
}

export type VoucherTranslatableContentTranslationArgs = {
  languageCode: LanguageCodeEnum
}

/** Creates/updates translations for a voucher. */
export type VoucherTranslate = {
  __typename?: 'VoucherTranslate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  translationErrors: Array<TranslationError>
  errors: Array<TranslationError>
  voucher?: Maybe<Voucher>
}

export type VoucherTranslation = Node & {
  __typename?: 'VoucherTranslation'
  /** The ID of the object. */
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  /** Translation language. */
  language: LanguageDisplay
}

export enum VoucherTypeEnum {
  Shipping = 'SHIPPING',
  EntireOrder = 'ENTIRE_ORDER',
  SpecificProduct = 'SPECIFIC_PRODUCT',
}

/** Updates a voucher. */
export type VoucherUpdate = {
  __typename?: 'VoucherUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  discountErrors: Array<DiscountError>
  errors: Array<DiscountError>
  voucher?: Maybe<Voucher>
}

/** Represents warehouse. */
export type Warehouse = Node &
  ObjectWithMetadata & {
    __typename?: 'Warehouse'
    /** The ID of the object. */
    id: Scalars['ID']
    name: Scalars['String']
    slug: Scalars['String']
    shippingZones: ShippingZoneCountableConnection
    address: Address
    email: Scalars['String']
    isPrivate: Scalars['Boolean']
    /** List of private metadata items.Requires proper staff permissions to access. */
    privateMetadata: Array<Maybe<MetadataItem>>
    /** List of public metadata items. Can be accessed without permissions. */
    metadata: Array<Maybe<MetadataItem>>
    /**
     * Warehouse company name.
     * @deprecated This field will be removed in Saleor 4.0. Use `Address.companyName` instead.
     */
    companyName: Scalars['String']
    /** New in Saleor 3.1. Click and collect options: local, all or disabled */
    clickAndCollectOption: WarehouseClickAndCollectOptionEnum
  }

/** Represents warehouse. */
export type WarehouseShippingZonesArgs = {
  before?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['String']>
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
}

/** An enumeration. */
export enum WarehouseClickAndCollectOptionEnum {
  Disabled = 'DISABLED',
  Local = 'LOCAL',
  All = 'ALL',
}

export type WarehouseCountableConnection = {
  __typename?: 'WarehouseCountableConnection'
  /** Pagination data for this connection. */
  pageInfo: PageInfo
  edges: Array<WarehouseCountableEdge>
  /** A total count of items in the collection. */
  totalCount?: Maybe<Scalars['Int']>
}

export type WarehouseCountableEdge = {
  __typename?: 'WarehouseCountableEdge'
  /** The item at the end of the edge. */
  node: Warehouse
  /** A cursor for use in pagination. */
  cursor: Scalars['String']
}

/** Creates new warehouse. */
export type WarehouseCreate = {
  __typename?: 'WarehouseCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>
  errors: Array<WarehouseError>
  warehouse?: Maybe<Warehouse>
}

export type WarehouseCreateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>
  /** Warehouse name. */
  name: Scalars['String']
  /** Address of the warehouse. */
  address: AddressInput
  /** Shipping zones supported by the warehouse. */
  shippingZones?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Deletes selected warehouse. */
export type WarehouseDelete = {
  __typename?: 'WarehouseDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>
  errors: Array<WarehouseError>
  warehouse?: Maybe<Warehouse>
}

export type WarehouseError = {
  __typename?: 'WarehouseError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: WarehouseErrorCode
}

/** An enumeration. */
export enum WarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

export type WarehouseFilterInput = {
  clickAndCollectOption?: Maybe<WarehouseClickAndCollectOptionEnum>
  search?: Maybe<Scalars['String']>
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>
  isPrivate?: Maybe<Scalars['Boolean']>
}

/** Add shipping zone to given warehouse. */
export type WarehouseShippingZoneAssign = {
  __typename?: 'WarehouseShippingZoneAssign'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>
  errors: Array<WarehouseError>
  warehouse?: Maybe<Warehouse>
}

/** Remove shipping zone from given warehouse. */
export type WarehouseShippingZoneUnassign = {
  __typename?: 'WarehouseShippingZoneUnassign'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>
  errors: Array<WarehouseError>
  warehouse?: Maybe<Warehouse>
}

export enum WarehouseSortField {
  /** Sort warehouses by name. */
  Name = 'NAME',
}

export type WarehouseSortingInput = {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField
}

/** Updates given warehouse. */
export type WarehouseUpdate = {
  __typename?: 'WarehouseUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  warehouseErrors: Array<WarehouseError>
  errors: Array<WarehouseError>
  warehouse?: Maybe<Warehouse>
}

export type WarehouseUpdateInput = {
  /** Warehouse slug. */
  slug?: Maybe<Scalars['String']>
  /** The email address of the warehouse. */
  email?: Maybe<Scalars['String']>
  /** Warehouse name. */
  name?: Maybe<Scalars['String']>
  /** Address of the warehouse. */
  address?: Maybe<AddressInput>
  /** New in Saleor 3.1. Click and collect options: local, all or disabled */
  clickAndCollectOption?: Maybe<WarehouseClickAndCollectOptionEnum>
  /** New in Saleor 3.1. Visibility of warehouse stocks */
  isPrivate?: Maybe<Scalars['Boolean']>
}

/** Webhook. */
export type Webhook = Node & {
  __typename?: 'Webhook'
  name: Scalars['String']
  targetUrl: Scalars['String']
  isActive: Scalars['Boolean']
  secretKey?: Maybe<Scalars['String']>
  /** The ID of the object. */
  id: Scalars['ID']
  /** List of webhook events. */
  events: Array<WebhookEvent>
  app: App
}

/** Creates a new webhook subscription. */
export type WebhookCreate = {
  __typename?: 'WebhookCreate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>
  errors: Array<WebhookError>
  webhook?: Maybe<Webhook>
}

export type WebhookCreateInput = {
  /** The name of the webhook. */
  name?: Maybe<Scalars['String']>
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>
  /** The events that webhook wants to subscribe. */
  events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>
  /** The secret key used to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']>
}

/** Deletes a webhook subscription. */
export type WebhookDelete = {
  __typename?: 'WebhookDelete'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>
  errors: Array<WebhookError>
  webhook?: Maybe<Webhook>
}

export type WebhookError = {
  __typename?: 'WebhookError'
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field?: Maybe<Scalars['String']>
  /** The error message. */
  message?: Maybe<Scalars['String']>
  /** The error code. */
  code: WebhookErrorCode
}

/** An enumeration. */
export enum WebhookErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
}

/** Webhook event. */
export type WebhookEvent = {
  __typename?: 'WebhookEvent'
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum
  /** Display name of the event. */
  name: Scalars['String']
}

/** Enum determining type of webhook. */
export enum WebhookEventTypeEnum {
  /** All the events. */
  AnyEvents = 'ANY_EVENTS',
  /** A new order is placed. */
  OrderCreated = 'ORDER_CREATED',
  /** An order is confirmed (status change unconfirmed -> unfulfilled) by a staff user using the OrderConfirm mutation. It also triggers when the user completes the checkout and the shop setting `automatically_confirm_all_new_orders` is enabled. */
  OrderConfirmed = 'ORDER_CONFIRMED',
  /** Payment is made and an order is fully paid. */
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  /** An order is updated; triggered for all changes related to an order; covers all other order webhooks, except for ORDER_CREATED. */
  OrderUpdated = 'ORDER_UPDATED',
  /** An order is cancelled. */
  OrderCancelled = 'ORDER_CANCELLED',
  /** An order is fulfilled. */
  OrderFulfilled = 'ORDER_FULFILLED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  SaleCreated = 'SALE_CREATED',
  SaleUpdated = 'SALE_UPDATED',
  SaleDeleted = 'SALE_DELETED',
  /** An invoice for order requested. */
  InvoiceRequested = 'INVOICE_REQUESTED',
  /** An invoice is deleted. */
  InvoiceDeleted = 'INVOICE_DELETED',
  /** Invoice has been sent. */
  InvoiceSent = 'INVOICE_SENT',
  /** A new customer account is created. */
  CustomerCreated = 'CUSTOMER_CREATED',
  /** A customer account is updated. */
  CustomerUpdated = 'CUSTOMER_UPDATED',
  /** A new product is created. */
  ProductCreated = 'PRODUCT_CREATED',
  /** A product is updated. */
  ProductUpdated = 'PRODUCT_UPDATED',
  /** A product is deleted. */
  ProductDeleted = 'PRODUCT_DELETED',
  /** A new product variant is created. */
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  /** A product variant is updated. */
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  /** A product variant is deleted. */
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  /** A new checkout is created. */
  CheckoutCreated = 'CHECKOUT_CREATED',
  /** A checkout is updated. It also triggers all updates related to the checkout. */
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  /** A new fulfillment is created. */
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  /** A fulfillment is cancelled. */
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  /** User notification triggered. */
  NotifyUser = 'NOTIFY_USER',
  /** A new page is created. */
  PageCreated = 'PAGE_CREATED',
  /** A page is updated. */
  PageUpdated = 'PAGE_UPDATED',
  /** A page is deleted. */
  PageDeleted = 'PAGE_DELETED',
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  PaymentCapture = 'PAYMENT_CAPTURE',
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  PaymentProcess = 'PAYMENT_PROCESS',
  PaymentRefund = 'PAYMENT_REFUND',
  PaymentVoid = 'PAYMENT_VOID',
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED',
}

/** An enumeration. */
export enum WebhookSampleEventTypeEnum {
  OrderCreated = 'ORDER_CREATED',
  OrderConfirmed = 'ORDER_CONFIRMED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderFulfilled = 'ORDER_FULFILLED',
  DraftOrderCreated = 'DRAFT_ORDER_CREATED',
  DraftOrderUpdated = 'DRAFT_ORDER_UPDATED',
  DraftOrderDeleted = 'DRAFT_ORDER_DELETED',
  SaleCreated = 'SALE_CREATED',
  SaleUpdated = 'SALE_UPDATED',
  SaleDeleted = 'SALE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceSent = 'INVOICE_SENT',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductVariantCreated = 'PRODUCT_VARIANT_CREATED',
  ProductVariantUpdated = 'PRODUCT_VARIANT_UPDATED',
  ProductVariantDeleted = 'PRODUCT_VARIANT_DELETED',
  ProductVariantOutOfStock = 'PRODUCT_VARIANT_OUT_OF_STOCK',
  ProductVariantBackInStock = 'PRODUCT_VARIANT_BACK_IN_STOCK',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  NotifyUser = 'NOTIFY_USER',
  PageCreated = 'PAGE_CREATED',
  PageUpdated = 'PAGE_UPDATED',
  PageDeleted = 'PAGE_DELETED',
  PaymentAuthorize = 'PAYMENT_AUTHORIZE',
  PaymentCapture = 'PAYMENT_CAPTURE',
  PaymentConfirm = 'PAYMENT_CONFIRM',
  PaymentListGateways = 'PAYMENT_LIST_GATEWAYS',
  PaymentProcess = 'PAYMENT_PROCESS',
  PaymentRefund = 'PAYMENT_REFUND',
  PaymentVoid = 'PAYMENT_VOID',
  ShippingListMethodsForCheckout = 'SHIPPING_LIST_METHODS_FOR_CHECKOUT',
  TranslationCreated = 'TRANSLATION_CREATED',
  TranslationUpdated = 'TRANSLATION_UPDATED',
}

/** Updates a webhook subscription. */
export type WebhookUpdate = {
  __typename?: 'WebhookUpdate'
  /** @deprecated This field will be removed in Saleor 4.0. Use `errors` field instead. */
  webhookErrors: Array<WebhookError>
  errors: Array<WebhookError>
  webhook?: Maybe<Webhook>
}

export type WebhookUpdateInput = {
  /** The new name of the webhook. */
  name?: Maybe<Scalars['String']>
  /** The url to receive the payload. */
  targetUrl?: Maybe<Scalars['String']>
  /** The events that webhook wants to subscribe. */
  events?: Maybe<Array<Maybe<WebhookEventTypeEnum>>>
  /** ID of the app to which webhook belongs. */
  app?: Maybe<Scalars['ID']>
  /** Determine if webhook will be set active or not. */
  isActive?: Maybe<Scalars['Boolean']>
  /** Use to create a hash signature with each payload. */
  secretKey?: Maybe<Scalars['String']>
}

/** Represents weight value in a specific weight unit. */
export type Weight = {
  __typename?: 'Weight'
  /** Weight unit. */
  unit: WeightUnitsEnum
  /** Weight value. */
  value: Scalars['Float']
}

/** An enumeration. */
export enum WeightUnitsEnum {
  G = 'G',
  Lb = 'LB',
  Oz = 'OZ',
  Kg = 'KG',
  Tonne = 'TONNE',
}

export type _Entity =
  | App
  | Address
  | User
  | Group
  | ProductVariant
  | Product
  | ProductType
  | Collection
  | Category
  | ProductMedia
  | PageType

export type _Service = {
  __typename?: '_Service'
  sdl?: Maybe<Scalars['String']>
}

export type GetAllProductPathsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>
  cursor?: Maybe<Scalars['String']>
  channel?: Maybe<Scalars['String']>
}>

export type GetAllProductPathsQuery = { __typename?: 'Query' } & {
  products?: Maybe<
    { __typename?: 'ProductCountableConnection' } & {
      pageInfo: { __typename?: 'PageInfo' } & Pick<PageInfo, 'hasNextPage' | 'hasPreviousPage'>
      edges: Array<
        { __typename?: 'ProductCountableEdge' } & Pick<ProductCountableEdge, 'cursor'> & {
            node: { __typename?: 'Product' } & Pick<Product, 'slug'>
          }
      >
    }
  >
}
