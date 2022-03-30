import { Component } from 'react';
import './PartyAffiliation.css';

type PartyName = "State Worker's Party";
type PartyRank = 'a' | 'b' | 'c';

interface PartyAffiliationData {
  partyName?: PartyName;
  rank?: PartyRank;
  positions?: string[]; // Max 3 positions
}

class PartyAffiliation extends Component<PartyAffiliationData, {}> {
  render() {
    return (
      <div className="party-affiliation">
        <div>Party Affiliation</div>
        <div>Party: {this.props.partyName ?? 'None'}</div>
        <div>Rank: {this.props.rank ?? 'None'}</div>
        <div className="positions-container">
          <div>positions</div>
          <div className="positions">
            <div>{this.props.positions?.[0] ?? ''}</div>
            <div>{this.props.positions?.[1] ?? ''}</div>
            <div>{this.props.positions?.[2] ?? ''}</div>
          </div>
        </div>
      </div>
    );
  }
}

export type { PartyAffiliationData };
export default PartyAffiliation;
