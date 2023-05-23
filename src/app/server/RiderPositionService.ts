import { TdtClient } from './Proto/TdtServiceClientPb';
import { SubscribeRequest, SubscribeResponse, Position } from './Proto/tdt_pb';
import { RiderPosition } from './Models';
import { Timestamp } from 'google-protobuf/google/protobuf/timestamp_pb';


const API_SERVER_URL= 'http://localhost:8080'

export class RiderPositionService {
  cli: TdtClient;
  riders: any[];
  recieve_interval: number;
  stream: any;

  constructor(recieve_interval: number) {
    this.cli = new TdtClient(API_SERVER_URL, null, null);
    this.riders = [];
    this.recieve_interval = recieve_interval;
  }

  keepUpdating(
    setRiders: React.Dispatch<React.SetStateAction<Map<string, RiderPosition>>>,
    pssids: string[] | null,
    startTime: number | null,
    speed: number | null
  ) {
    const req = new SubscribeRequest();
    req.setInterval(this.recieve_interval * 1000);
    if (pssids) {
      req.setPlayerIdList(pssids);
    }
    if (startTime) {
      req.setStart(Timestamp.fromDate(new Date(Number(startTime))));
    }
    if (speed) {
      //req.setPlaybackSpeed(speed);
    }

    this.stream = this.cli.subscribe(req, {});
    this.stream.on('data', (res: SubscribeResponse) => {
      const reslut = new Map<string, RiderPosition>();

      const response: Position[] = res.getPositionsList();
      console.log(`RidersPositiondata. count: ${response.length}`);
      if (response.length > 0) {
        const timestamp: number = res.getTimestamp()?.toDate().getTime()?? 0;
        response.map((p: Position) => {
          const riderPosition = new RiderPosition(
            p.getId(),
            p.getDistance(),
            p.getSpeed(),
            p.getCourse(),
            p.getLatlng()?.getLng() ?? 0,
            p.getLatlng()?.getLat() ?? 0,
            timestamp
          );
          reslut.set(p.getId(), riderPosition);
        });
        setRiders(reslut);
      } else {
        setRiders(reslut);
      }
    });
    this.stream.on('end', () => {
      console.log('Stream ended');
    });
    this.stream.on('error', (e: any) => {
      console.log(`Stream ended with error ${e}`);
    });
    this.stream.on('status', (status: any) => {
      console.log(`Status: ${status.details}`);
    });
  }

  cancel() {
    this.stream.cancel();
  }
}