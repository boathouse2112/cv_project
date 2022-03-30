import { Component } from 'react';

interface MilitaryServiceData {
  startYear: number;
  endYear: number;
  unit: string;
  commendations: string[]; // Max 3 commendations
}

class MilitaryService extends Component<MilitaryServiceData, {}> {
  render() {
    return (
      <div>
        <div>Military Service</div>
        <div>
          {this.props.startYear} - {this.props.endYear}
        </div>
        <div>Unit: {this.props.unit}</div>
        <div>
          <div>Commendations: </div>
          <div>{this.props.commendations[0] ?? ''}</div>
          <div>{this.props.commendations[1] ?? ''}</div>
          <div>{this.props.commendations[2] ?? ''}</div>
        </div>
      </div>
    );
  }
}

export type { MilitaryServiceData };
export default MilitaryService;
