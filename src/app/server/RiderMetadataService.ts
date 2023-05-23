import { TdtClient } from './Proto/TdtServiceClientPb';
import { PlayerRequest, Player } from './Proto/tdt_pb';
import { RiderMetadata } from './Models';


const API_SERVER_URL= 'http://localhost:8080'
const STARTTIME = new Date(
  'Tue Sep 18 2022 06:30:00 GMT+0900 (Japan Standard Time)'
);

export class RiderMetadataService {
  cli: TdtClient;

  constructor() {
    this.cli = new TdtClient(API_SERVER_URL, null, null);
  }

  getRidersMetadata(setRidersMetadata: React.Dispatch<React.SetStateAction<Map<string, RiderMetadata>>>) {
    // Get Rider metadata
    const riderReq = new PlayerRequest();
    this.cli.getPlayers(riderReq, {}, (err, res) => {
      if (err) {
        console.log(err);
        return [];
      }
      const riderMetadataMap: Map<string, RiderMetadata> = new Map();
      res.getPlayersList().map((p: Player) => {
        riderMetadataMap.set(
          p.getId(),
          new RiderMetadata(
            p.getId(),
            p.getNo(),
            p.getName() ? p.getName() : '-',
            p.getImageUrl(),
            p.getStarted()?.toDate() ? p.getStarted()!.toDate() : STARTTIME,
            Date.now()
          )
        );
      });
      console.log(`RidersMetadata. count: ${riderMetadataMap.size}`);
      setRidersMetadata(riderMetadataMap);
    });
  }
}
