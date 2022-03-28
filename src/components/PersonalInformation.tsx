import { Component } from 'react';

type Gender = 'male' | 'female' | 'other';

interface PersonalInformationProps {
  name: string;
  age: number;
  gender: Gender;
  id: string;
  phone: string;
  address: string;
}

class PersonalInformation extends Component<PersonalInformationProps, {}> {
  constructor(props: PersonalInformationProps) {
    super(props);
    console.log();
  }

  render() {
    return (
      <div className="personal-information">
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>{this.props.gender}</div>
        <div>{this.props.id}</div>
        <div>{this.props.phone}</div>
        <div>{this.props.address}</div>
      </div>
    );
  }
}

export type { PersonalInformationProps };
export default PersonalInformation;
