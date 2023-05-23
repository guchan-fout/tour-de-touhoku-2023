/**
 * @fileoverview gRPC-Web generated client stub for tdt
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as tdt_pb from './tdt_pb';


export class TdtClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorHealth = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/Health',
    grpcWeb.MethodType.UNARY,
    tdt_pb.HealthRequest,
    tdt_pb.HealthResponse,
    (request: tdt_pb.HealthRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.HealthResponse.deserializeBinary
  );

  health(
    request: tdt_pb.HealthRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.HealthResponse>;

  health(
    request: tdt_pb.HealthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.HealthResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.HealthResponse>;

  health(
    request: tdt_pb.HealthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.HealthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.Tdt/Health',
        request,
        metadata || {},
        this.methodDescriptorHealth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.Tdt/Health',
    request,
    metadata || {},
    this.methodDescriptorHealth);
  }

  methodDescriptorSubscribe = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/Subscribe',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdt_pb.SubscribeRequest,
    tdt_pb.SubscribeResponse,
    (request: tdt_pb.SubscribeRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.SubscribeResponse.deserializeBinary
  );

  subscribe(
    request: tdt_pb.SubscribeRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdt_pb.SubscribeResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdt.Tdt/Subscribe',
      request,
      metadata || {},
      this.methodDescriptorSubscribe);
  }

  methodDescriptorGetPlayers = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/GetPlayers',
    grpcWeb.MethodType.UNARY,
    tdt_pb.PlayerRequest,
    tdt_pb.PlayerResponse,
    (request: tdt_pb.PlayerRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.PlayerResponse.deserializeBinary
  );

  getPlayers(
    request: tdt_pb.PlayerRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.PlayerResponse>;

  getPlayers(
    request: tdt_pb.PlayerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.PlayerResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.PlayerResponse>;

  getPlayers(
    request: tdt_pb.PlayerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.PlayerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.Tdt/GetPlayers',
        request,
        metadata || {},
        this.methodDescriptorGetPlayers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.Tdt/GetPlayers',
    request,
    metadata || {},
    this.methodDescriptorGetPlayers);
  }

  methodDescriptorGetRoutes = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/GetRoutes',
    grpcWeb.MethodType.UNARY,
    tdt_pb.RouteRequest,
    tdt_pb.RouteResponse,
    (request: tdt_pb.RouteRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.RouteResponse.deserializeBinary
  );

  getRoutes(
    request: tdt_pb.RouteRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.RouteResponse>;

  getRoutes(
    request: tdt_pb.RouteRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.RouteResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.RouteResponse>;

  getRoutes(
    request: tdt_pb.RouteRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.RouteResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.Tdt/GetRoutes',
        request,
        metadata || {},
        this.methodDescriptorGetRoutes,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.Tdt/GetRoutes',
    request,
    metadata || {},
    this.methodDescriptorGetRoutes);
  }

  methodDescriptorGetTweets = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/GetTweets',
    grpcWeb.MethodType.UNARY,
    tdt_pb.TweetRequest,
    tdt_pb.TweetResponse,
    (request: tdt_pb.TweetRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.TweetResponse.deserializeBinary
  );

  getTweets(
    request: tdt_pb.TweetRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.TweetResponse>;

  getTweets(
    request: tdt_pb.TweetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.TweetResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.TweetResponse>;

  getTweets(
    request: tdt_pb.TweetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.TweetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.Tdt/GetTweets',
        request,
        metadata || {},
        this.methodDescriptorGetTweets,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.Tdt/GetTweets',
    request,
    metadata || {},
    this.methodDescriptorGetTweets);
  }

  methodDescriptorAddCheer = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/AddCheer',
    grpcWeb.MethodType.UNARY,
    tdt_pb.CheerRequest,
    tdt_pb.CheerResponse,
    (request: tdt_pb.CheerRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.CheerResponse.deserializeBinary
  );

  addCheer(
    request: tdt_pb.CheerRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.CheerResponse>;

  addCheer(
    request: tdt_pb.CheerRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.CheerResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.CheerResponse>;

  addCheer(
    request: tdt_pb.CheerRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.CheerResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.Tdt/AddCheer',
        request,
        metadata || {},
        this.methodDescriptorAddCheer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.Tdt/AddCheer',
    request,
    metadata || {},
    this.methodDescriptorAddCheer);
  }

  methodDescriptorSubscribeCheerCount = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/SubscribeCheerCount',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdt_pb.SubscribeCheerCountRequest,
    tdt_pb.SubscribeCheerCountResponse,
    (request: tdt_pb.SubscribeCheerCountRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.SubscribeCheerCountResponse.deserializeBinary
  );

  subscribeCheerCount(
    request: tdt_pb.SubscribeCheerCountRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdt_pb.SubscribeCheerCountResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdt.Tdt/SubscribeCheerCount',
      request,
      metadata || {},
      this.methodDescriptorSubscribeCheerCount);
  }

  methodDescriptordebugPosition = new grpcWeb.MethodDescriptor(
    '/tdt.Tdt/debugPosition',
    grpcWeb.MethodType.UNARY,
    tdt_pb.DebugPositionRequest,
    tdt_pb.DebugPositionResponse,
    (request: tdt_pb.DebugPositionRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.DebugPositionResponse.deserializeBinary
  );

  debugPosition(
    request: tdt_pb.DebugPositionRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.DebugPositionResponse>;

  debugPosition(
    request: tdt_pb.DebugPositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.DebugPositionResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.DebugPositionResponse>;

  debugPosition(
    request: tdt_pb.DebugPositionRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.DebugPositionResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.Tdt/debugPosition',
        request,
        metadata || {},
        this.methodDescriptordebugPosition,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.Tdt/debugPosition',
    request,
    metadata || {},
    this.methodDescriptordebugPosition);
  }

}

export class TdtInjesterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorSubscribe = new grpcWeb.MethodDescriptor(
    '/tdt.TdtInjester/Subscribe',
    grpcWeb.MethodType.SERVER_STREAMING,
    tdt_pb.InjesterSubscribeRequest,
    tdt_pb.InjesterSubscribeResponse,
    (request: tdt_pb.InjesterSubscribeRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.InjesterSubscribeResponse.deserializeBinary
  );

  subscribe(
    request: tdt_pb.InjesterSubscribeRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<tdt_pb.InjesterSubscribeResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/tdt.TdtInjester/Subscribe',
      request,
      metadata || {},
      this.methodDescriptorSubscribe);
  }

}

export class ImageConverterClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorHealth = new grpcWeb.MethodDescriptor(
    '/tdt.ImageConverter/Health',
    grpcWeb.MethodType.UNARY,
    tdt_pb.HealthRequest,
    tdt_pb.HealthResponse,
    (request: tdt_pb.HealthRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.HealthResponse.deserializeBinary
  );

  health(
    request: tdt_pb.HealthRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.HealthResponse>;

  health(
    request: tdt_pb.HealthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.HealthResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.HealthResponse>;

  health(
    request: tdt_pb.HealthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.HealthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.ImageConverter/Health',
        request,
        metadata || {},
        this.methodDescriptorHealth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.ImageConverter/Health',
    request,
    metadata || {},
    this.methodDescriptorHealth);
  }

  methodDescriptorGetMbxImage = new grpcWeb.MethodDescriptor(
    '/tdt.ImageConverter/GetMbxImage',
    grpcWeb.MethodType.UNARY,
    tdt_pb.MbxImageRequest,
    tdt_pb.MbxImageResponse,
    (request: tdt_pb.MbxImageRequest) => {
      return request.serializeBinary();
    },
    tdt_pb.MbxImageResponse.deserializeBinary
  );

  getMbxImage(
    request: tdt_pb.MbxImageRequest,
    metadata: grpcWeb.Metadata | null): Promise<tdt_pb.MbxImageResponse>;

  getMbxImage(
    request: tdt_pb.MbxImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: tdt_pb.MbxImageResponse) => void): grpcWeb.ClientReadableStream<tdt_pb.MbxImageResponse>;

  getMbxImage(
    request: tdt_pb.MbxImageRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: tdt_pb.MbxImageResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tdt.ImageConverter/GetMbxImage',
        request,
        metadata || {},
        this.methodDescriptorGetMbxImage,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tdt.ImageConverter/GetMbxImage',
    request,
    metadata || {},
    this.methodDescriptorGetMbxImage);
  }

}

