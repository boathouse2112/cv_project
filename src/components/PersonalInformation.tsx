import { Component } from 'react';
import './PersonalInformation.css';

type Sex = 'male' | 'female' | 'other';

interface PersonalInformationProps {
  name: string;
  age: number;
  sex: Sex;
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
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div>
        <div>Sex: {this.props.sex}</div>
        <div>ID: {this.props.id}</div>
        <div>Phone: {this.props.phone}</div>
        <div>Address: {this.props.address}</div>
      </div>
    );
  }
}

export type { PersonalInformationProps };
export default PersonalInformation;
