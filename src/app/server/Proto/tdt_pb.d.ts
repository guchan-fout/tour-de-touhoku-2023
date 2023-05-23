import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class LatLng extends jspb.Message {
  getLat(): number;
  setLat(value: number): LatLng;

  getLng(): number;
  setLng(value: number): LatLng;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LatLng.AsObject;
  static toObject(includeInstance: boolean, msg: LatLng): LatLng.AsObject;
  static serializeBinaryToWriter(message: LatLng, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LatLng;
  static deserializeBinaryFromReader(message: LatLng, reader: jspb.BinaryReader): LatLng;
}

export namespace LatLng {
  export type AsObject = {
    lat: number,
    lng: number,
  }
}

export class Position extends jspb.Message {
  getId(): string;
  setId(value: string): Position;

  getLatlng(): LatLng | undefined;
  setLatlng(value?: LatLng): Position;
  hasLatlng(): boolean;
  clearLatlng(): Position;

  getSpeed(): number;
  setSpeed(value: number): Position;

  getHeading(): number;
  setHeading(value: number): Position;

  getDistance(): number;
  setDistance(value: number): Position;

  getCourse(): string;
  setCourse(value: string): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    id: string,
    latlng?: LatLng.AsObject,
    speed: number,
    heading: number,
    distance: number,
    course: string,
  }
}

export class Player extends jspb.Message {
  getId(): string;
  setId(value: string): Player;

  getNo(): string;
  setNo(value: string): Player;

  getName(): string;
  setName(value: string): Player;

  getImageUrl(): string;
  setImageUrl(value: string): Player;

  getStarted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStarted(value?: google_protobuf_timestamp_pb.Timestamp): Player;
  hasStarted(): boolean;
  clearStarted(): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Player.AsObject;
  static toObject(includeInstance: boolean, msg: Player): Player.AsObject;
  static serializeBinaryToWriter(message: Player, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Player;
  static deserializeBinaryFromReader(message: Player, reader: jspb.BinaryReader): Player;
}

export namespace Player {
  export type AsObject = {
    id: string,
    no: string,
    name: string,
    imageUrl: string,
    started?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Route extends jspb.Message {
  getId(): string;
  setId(value: string): Route;

  getCoordinatesList(): Array<LatLng>;
  setCoordinatesList(value: Array<LatLng>): Route;
  clearCoordinatesList(): Route;
  addCoordinates(value?: LatLng, index?: number): LatLng;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Route.AsObject;
  static toObject(includeInstance: boolean, msg: Route): Route.AsObject;
  static serializeBinaryToWriter(message: Route, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Route;
  static deserializeBinaryFromReader(message: Route, reader: jspb.BinaryReader): Route;
}

export namespace Route {
  export type AsObject = {
    id: string,
    coordinatesList: Array<LatLng.AsObject>,
  }
}

export class SubscribeRequest extends jspb.Message {
  getInterval(): number;
  setInterval(value: number): SubscribeRequest;

  getStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStart(value?: google_protobuf_timestamp_pb.Timestamp): SubscribeRequest;
  hasStart(): boolean;
  clearStart(): SubscribeRequest;

  getPlayerIdList(): Array<string>;
  setPlayerIdList(value: Array<string>): SubscribeRequest;
  clearPlayerIdList(): SubscribeRequest;
  addPlayerId(value: string, index?: number): SubscribeRequest;

  getPlayerName(): string;
  setPlayerName(value: string): SubscribeRequest;
  hasPlayerName(): boolean;
  clearPlayerName(): SubscribeRequest;

  getPlayerNo(): string;
  setPlayerNo(value: string): SubscribeRequest;
  hasPlayerNo(): boolean;
  clearPlayerNo(): SubscribeRequest;

  getRouteId(): string;
  setRouteId(value: string): SubscribeRequest;
  hasRouteId(): boolean;
  clearRouteId(): SubscribeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeRequest): SubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeRequest;
  static deserializeBinaryFromReader(message: SubscribeRequest, reader: jspb.BinaryReader): SubscribeRequest;
}

export namespace SubscribeRequest {
  export type AsObject = {
    interval: number,
    start?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    playerIdList: Array<string>,
    playerName?: string,
    playerNo?: string,
    routeId?: string,
  }

  export enum StartCase { 
    _START_NOT_SET = 0,
    START = 2,
  }

  export enum PlayerNameCase { 
    _PLAYER_NAME_NOT_SET = 0,
    PLAYER_NAME = 4,
  }

  export enum PlayerNoCase { 
    _PLAYER_NO_NOT_SET = 0,
    PLAYER_NO = 5,
  }

  export enum RouteIdCase { 
    _ROUTE_ID_NOT_SET = 0,
    ROUTE_ID = 6,
  }
}

export class HealthRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HealthRequest): HealthRequest.AsObject;
  static serializeBinaryToWriter(message: HealthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthRequest;
  static deserializeBinaryFromReader(message: HealthRequest, reader: jspb.BinaryReader): HealthRequest;
}

export namespace HealthRequest {
  export type AsObject = {
  }
}

export class HealthResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HealthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HealthResponse): HealthResponse.AsObject;
  static serializeBinaryToWriter(message: HealthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HealthResponse;
  static deserializeBinaryFromReader(message: HealthResponse, reader: jspb.BinaryReader): HealthResponse;
}

export namespace HealthResponse {
  export type AsObject = {
  }
}

export class SubscribeResponse extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): SubscribeResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): SubscribeResponse;

  getPositionsList(): Array<Position>;
  setPositionsList(value: Array<Position>): SubscribeResponse;
  clearPositionsList(): SubscribeResponse;
  addPositions(value?: Position, index?: number): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeResponse): SubscribeResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeResponse;
  static deserializeBinaryFromReader(message: SubscribeResponse, reader: jspb.BinaryReader): SubscribeResponse;
}

export namespace SubscribeResponse {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    positionsList: Array<Position.AsObject>,
  }
}

export class PlayerRequest extends jspb.Message {
  getIdsList(): Array<string>;
  setIdsList(value: Array<string>): PlayerRequest;
  clearIdsList(): PlayerRequest;
  addIds(value: string, index?: number): PlayerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerRequest): PlayerRequest.AsObject;
  static serializeBinaryToWriter(message: PlayerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerRequest;
  static deserializeBinaryFromReader(message: PlayerRequest, reader: jspb.BinaryReader): PlayerRequest;
}

export namespace PlayerRequest {
  export type AsObject = {
    idsList: Array<string>,
  }
}

export class PlayerResponse extends jspb.Message {
  getPlayersList(): Array<Player>;
  setPlayersList(value: Array<Player>): PlayerResponse;
  clearPlayersList(): PlayerResponse;
  addPlayers(value?: Player, index?: number): Player;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerResponse): PlayerResponse.AsObject;
  static serializeBinaryToWriter(message: PlayerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerResponse;
  static deserializeBinaryFromReader(message: PlayerResponse, reader: jspb.BinaryReader): PlayerResponse;
}

export namespace PlayerResponse {
  export type AsObject = {
    playersList: Array<Player.AsObject>,
  }
}

export class RouteRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RouteRequest): RouteRequest.AsObject;
  static serializeBinaryToWriter(message: RouteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteRequest;
  static deserializeBinaryFromReader(message: RouteRequest, reader: jspb.BinaryReader): RouteRequest;
}

export namespace RouteRequest {
  export type AsObject = {
  }
}

export class RouteResponse extends jspb.Message {
  getRoutesList(): Array<Route>;
  setRoutesList(value: Array<Route>): RouteResponse;
  clearRoutesList(): RouteResponse;
  addRoutes(value?: Route, index?: number): Route;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RouteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RouteResponse): RouteResponse.AsObject;
  static serializeBinaryToWriter(message: RouteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RouteResponse;
  static deserializeBinaryFromReader(message: RouteResponse, reader: jspb.BinaryReader): RouteResponse;
}

export namespace RouteResponse {
  export type AsObject = {
    routesList: Array<Route.AsObject>,
  }
}

export class Photo extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): Photo;

  getHeight(): number;
  setHeight(value: number): Photo;

  getWidth(): number;
  setWidth(value: number): Photo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Photo.AsObject;
  static toObject(includeInstance: boolean, msg: Photo): Photo.AsObject;
  static serializeBinaryToWriter(message: Photo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Photo;
  static deserializeBinaryFromReader(message: Photo, reader: jspb.BinaryReader): Photo;
}

export namespace Photo {
  export type AsObject = {
    url: string,
    height: number,
    width: number,
  }
}

export class Tweet extends jspb.Message {
  getTweetId(): string;
  setTweetId(value: string): Tweet;

  getTweetText(): string;
  setTweetText(value: string): Tweet;

  getTweetCreatedAt(): string;
  setTweetCreatedAt(value: string): Tweet;

  getUserId(): string;
  setUserId(value: string): Tweet;

  getUserName(): string;
  setUserName(value: string): Tweet;

  getUserUsername(): string;
  setUserUsername(value: string): Tweet;

  getUserProfileImageUrl(): string;
  setUserProfileImageUrl(value: string): Tweet;

  getPhotosList(): Array<Photo>;
  setPhotosList(value: Array<Photo>): Tweet;
  clearPhotosList(): Tweet;
  addPhotos(value?: Photo, index?: number): Photo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tweet.AsObject;
  static toObject(includeInstance: boolean, msg: Tweet): Tweet.AsObject;
  static serializeBinaryToWriter(message: Tweet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tweet;
  static deserializeBinaryFromReader(message: Tweet, reader: jspb.BinaryReader): Tweet;
}

export namespace Tweet {
  export type AsObject = {
    tweetId: string,
    tweetText: string,
    tweetCreatedAt: string,
    userId: string,
    userName: string,
    userUsername: string,
    userProfileImageUrl: string,
    photosList: Array<Photo.AsObject>,
  }
}

export class TweetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TweetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TweetRequest): TweetRequest.AsObject;
  static serializeBinaryToWriter(message: TweetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TweetRequest;
  static deserializeBinaryFromReader(message: TweetRequest, reader: jspb.BinaryReader): TweetRequest;
}

export namespace TweetRequest {
  export type AsObject = {
  }
}

export class TweetResponse extends jspb.Message {
  getTweetsList(): Array<Tweet>;
  setTweetsList(value: Array<Tweet>): TweetResponse;
  clearTweetsList(): TweetResponse;
  addTweets(value?: Tweet, index?: number): Tweet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TweetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TweetResponse): TweetResponse.AsObject;
  static serializeBinaryToWriter(message: TweetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TweetResponse;
  static deserializeBinaryFromReader(message: TweetResponse, reader: jspb.BinaryReader): TweetResponse;
}

export namespace TweetResponse {
  export type AsObject = {
    tweetsList: Array<Tweet.AsObject>,
  }
}

export class CheerRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheerRequest): CheerRequest.AsObject;
  static serializeBinaryToWriter(message: CheerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheerRequest;
  static deserializeBinaryFromReader(message: CheerRequest, reader: jspb.BinaryReader): CheerRequest;
}

export namespace CheerRequest {
  export type AsObject = {
  }
}

export class CheerResponse extends jspb.Message {
  getCheercount(): number;
  setCheercount(value: number): CheerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheerResponse): CheerResponse.AsObject;
  static serializeBinaryToWriter(message: CheerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheerResponse;
  static deserializeBinaryFromReader(message: CheerResponse, reader: jspb.BinaryReader): CheerResponse;
}

export namespace CheerResponse {
  export type AsObject = {
    cheercount: number,
  }
}

export class SubscribeCheerCountRequest extends jspb.Message {
  getInterval(): number;
  setInterval(value: number): SubscribeCheerCountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeCheerCountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeCheerCountRequest): SubscribeCheerCountRequest.AsObject;
  static serializeBinaryToWriter(message: SubscribeCheerCountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeCheerCountRequest;
  static deserializeBinaryFromReader(message: SubscribeCheerCountRequest, reader: jspb.BinaryReader): SubscribeCheerCountRequest;
}

export namespace SubscribeCheerCountRequest {
  export type AsObject = {
    interval: number,
  }
}

export class SubscribeCheerCountResponse extends jspb.Message {
  getCheercount(): number;
  setCheercount(value: number): SubscribeCheerCountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeCheerCountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeCheerCountResponse): SubscribeCheerCountResponse.AsObject;
  static serializeBinaryToWriter(message: SubscribeCheerCountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeCheerCountResponse;
  static deserializeBinaryFromReader(message: SubscribeCheerCountResponse, reader: jspb.BinaryReader): SubscribeCheerCountResponse;
}

export namespace SubscribeCheerCountResponse {
  export type AsObject = {
    cheercount: number,
  }
}

export class DebugPositionRequest extends jspb.Message {
  getOp(): DebugOperation;
  setOp(value: DebugOperation): DebugPositionRequest;

  getId(): string;
  setId(value: string): DebugPositionRequest;

  getLatlng(): LatLng | undefined;
  setLatlng(value?: LatLng): DebugPositionRequest;
  hasLatlng(): boolean;
  clearLatlng(): DebugPositionRequest;

  getSpeed(): number;
  setSpeed(value: number): DebugPositionRequest;
  hasSpeed(): boolean;
  clearSpeed(): DebugPositionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugPositionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DebugPositionRequest): DebugPositionRequest.AsObject;
  static serializeBinaryToWriter(message: DebugPositionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugPositionRequest;
  static deserializeBinaryFromReader(message: DebugPositionRequest, reader: jspb.BinaryReader): DebugPositionRequest;
}

export namespace DebugPositionRequest {
  export type AsObject = {
    op: DebugOperation,
    id: string,
    latlng?: LatLng.AsObject,
    speed?: number,
  }

  export enum LatlngCase { 
    _LATLNG_NOT_SET = 0,
    LATLNG = 3,
  }

  export enum SpeedCase { 
    _SPEED_NOT_SET = 0,
    SPEED = 4,
  }
}

export class DebugPositionResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DebugPositionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DebugPositionResponse): DebugPositionResponse.AsObject;
  static serializeBinaryToWriter(message: DebugPositionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DebugPositionResponse;
  static deserializeBinaryFromReader(message: DebugPositionResponse, reader: jspb.BinaryReader): DebugPositionResponse;
}

export namespace DebugPositionResponse {
  export type AsObject = {
  }
}

export class InjesterSubscribeRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InjesterSubscribeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InjesterSubscribeRequest): InjesterSubscribeRequest.AsObject;
  static serializeBinaryToWriter(message: InjesterSubscribeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InjesterSubscribeRequest;
  static deserializeBinaryFromReader(message: InjesterSubscribeRequest, reader: jspb.BinaryReader): InjesterSubscribeRequest;
}

export namespace InjesterSubscribeRequest {
  export type AsObject = {
  }
}

export class PlayerPosition extends jspb.Message {
  getPlayer(): Player | undefined;
  setPlayer(value?: Player): PlayerPosition;
  hasPlayer(): boolean;
  clearPlayer(): PlayerPosition;

  getPosition(): Position | undefined;
  setPosition(value?: Position): PlayerPosition;
  hasPosition(): boolean;
  clearPosition(): PlayerPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerPosition.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerPosition): PlayerPosition.AsObject;
  static serializeBinaryToWriter(message: PlayerPosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerPosition;
  static deserializeBinaryFromReader(message: PlayerPosition, reader: jspb.BinaryReader): PlayerPosition;
}

export namespace PlayerPosition {
  export type AsObject = {
    player?: Player.AsObject,
    position?: Position.AsObject,
  }
}

export class InjesterSubscribeResponse extends jspb.Message {
  getTimestamp(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestamp(value?: google_protobuf_timestamp_pb.Timestamp): InjesterSubscribeResponse;
  hasTimestamp(): boolean;
  clearTimestamp(): InjesterSubscribeResponse;

  getPlayerPositionsList(): Array<PlayerPosition>;
  setPlayerPositionsList(value: Array<PlayerPosition>): InjesterSubscribeResponse;
  clearPlayerPositionsList(): InjesterSubscribeResponse;
  addPlayerPositions(value?: PlayerPosition, index?: number): PlayerPosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InjesterSubscribeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InjesterSubscribeResponse): InjesterSubscribeResponse.AsObject;
  static serializeBinaryToWriter(message: InjesterSubscribeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InjesterSubscribeResponse;
  static deserializeBinaryFromReader(message: InjesterSubscribeResponse, reader: jspb.BinaryReader): InjesterSubscribeResponse;
}

export namespace InjesterSubscribeResponse {
  export type AsObject = {
    timestamp?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    playerPositionsList: Array<PlayerPosition.AsObject>,
  }
}

export class MbxImageRequest extends jspb.Message {
  getPlayerid(): string;
  setPlayerid(value: string): MbxImageRequest;

  getPssimageurl(): string;
  setPssimageurl(value: string): MbxImageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MbxImageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MbxImageRequest): MbxImageRequest.AsObject;
  static serializeBinaryToWriter(message: MbxImageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MbxImageRequest;
  static deserializeBinaryFromReader(message: MbxImageRequest, reader: jspb.BinaryReader): MbxImageRequest;
}

export namespace MbxImageRequest {
  export type AsObject = {
    playerid: string,
    pssimageurl: string,
  }
}

export class MbxImageResponse extends jspb.Message {
  getPlayerid(): string;
  setPlayerid(value: string): MbxImageResponse;

  getPssimageurl(): string;
  setPssimageurl(value: string): MbxImageResponse;

  getMbximageurl(): string;
  setMbximageurl(value: string): MbxImageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MbxImageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MbxImageResponse): MbxImageResponse.AsObject;
  static serializeBinaryToWriter(message: MbxImageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MbxImageResponse;
  static deserializeBinaryFromReader(message: MbxImageResponse, reader: jspb.BinaryReader): MbxImageResponse;
}

export namespace MbxImageResponse {
  export type AsObject = {
    playerid: string,
    pssimageurl: string,
    mbximageurl: string,
  }
}

export enum DebugOperation { 
  PIN = 0,
  UNPIN = 1,
}
