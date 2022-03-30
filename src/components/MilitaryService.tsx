import { Component } from 'react';
import './MilitaryService.css';

interface MilitaryServiceData {
  startYear: number;
  endYear: number;
  unit: string;
  commendations: string[]; // Max 3 commendations
}

class MilitaryService extends Component<MilitaryServiceData, {}> {
  render() {
    return (
      <div className="military-service">
        <div>Military Service</div>
        <div className="military-service-years">
          {this.props.startYear} - {this.props.endYear}
        </div>
        <div>Unit: {this.props.unit}</div>
        <div className="commendations-container">
          <div>Commendations: </div>
          <div className="commendations">
            <div>{this.props.commendations[0] ?? ''}</div>
            <div>{this.props.commendations[1] ?? ''}</div>
            <div>{this.props.commendations[2] ?? ''}</div>
          </div>
        </div>
      </div>
    );
  }
}

export type { MilitaryServiceData };
export default MilitaryService;
